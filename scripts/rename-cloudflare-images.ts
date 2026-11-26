// Give every Cloudflare Images file a descriptive name.
//
// Cloudflare Images can't rename an existing image ID; a custom ID can only be
// set when an image is uploaded. This script re-uploads each image (Cloudflare
// copies it from its current delivery URL) under the descriptive ID in
// scripts/cloudflare-image-names.json, then rewrites every reference in the
// repo to the new URL. Old images are NOT deleted, so nothing breaks while the
// change rolls out.
//
// Requirements:
//   CLOUDFLARE_ACCOUNT_ID   your Cloudflare account ID
//   CLOUDFLARE_IMAGES_TOKEN an API token with "Cloudflare Images: Edit"
//
// Usage:
//   npx tsx scripts/rename-cloudflare-images.ts            # dry run, changes nothing
//   npx tsx scripts/rename-cloudflare-images.ts --apply    # upload + rewrite files
//
// Review scripts/cloudflare-image-names.json first and edit any "newId" you
// want named differently. IDs must not look like UUIDs and must not start with
// a slash. Images that require signed URLs can't use custom IDs.

import fs from "fs";
import path from "path";

const ACCOUNT_HASH = "phVukYz6oCUHQR4c37ZNwQ";
const DELIVERY = `https://imagedelivery.net/${ACCOUNT_HASH}`;
const MAPPING_FILE = path.join(__dirname, "cloudflare-image-names.json");

type MappingEntry = { newId: string; alt: string | null; files: string[] };
type Mapping = Record<string, MappingEntry>;

type CloudflareResponse = {
  success: boolean;
  errors?: { code: number; message: string }[];
};

const apply = process.argv.includes("--apply");
const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
const token = process.env.CLOUDFLARE_IMAGES_TOKEN;

async function uploadWithCustomId(oldId: string, newId: string) {
  const form = new FormData();
  form.append("url", `${DELIVERY}/${oldId}/public`);
  form.append("id", newId);
  form.append("metadata", JSON.stringify({ renamedFrom: oldId }));

  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${accountId}/images/v1`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: form,
    },
  );
  const json = (await res.json()) as CloudflareResponse;
  // 5409 = an image with this ID already exists (safe to re-run the script).
  const alreadyExists = json.errors?.some((e) => e.code === 5409);
  if (!json.success && !alreadyExists) {
    const message = json.errors?.map((e) => e.message).join("; ");
    throw new Error(`Upload failed for ${newId}: ${message}`);
  }
}

function rewriteReferences(oldId: string, newId: string, files: string[]) {
  const from = `${DELIVERY}/${oldId}/`;
  const to = `${DELIVERY}/${newId}/`;
  for (const file of files) {
    const fullPath = path.join(__dirname, "..", file);
    const before = fs.readFileSync(fullPath, "utf8");
    const after = before.split(from).join(to);
    if (after !== before) fs.writeFileSync(fullPath, after);
  }
}

async function main() {
  const mapping = JSON.parse(fs.readFileSync(MAPPING_FILE, "utf8")) as Mapping;
  const entries = Object.entries(mapping);
  console.log(`${entries.length} images in ${path.basename(MAPPING_FILE)}`);

  if (!apply) {
    for (const [oldId, { newId, files }] of entries) {
      console.log(`${oldId} → ${newId}  (${files.length} file(s))`);
    }
    console.log("\nDry run only. Re-run with --apply to upload and rewrite.");
    return;
  }

  if (!accountId || !token) {
    throw new Error(
      "Set CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_IMAGES_TOKEN before using --apply.",
    );
  }

  let done = 0;
  for (const [oldId, { newId, files }] of entries) {
    await uploadWithCustomId(oldId, newId);
    rewriteReferences(oldId, newId, files);
    done += 1;
    console.log(`[${done}/${entries.length}] ${newId}`);
  }
  console.log(
    "\nDone. Check the site, then commit. Old images can be deleted in the Cloudflare dashboard once the new URLs are live.",
  );
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
