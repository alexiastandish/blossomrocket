// Run with: npx ts-node -P tsconfig.json scripts/generate-preview.ts
// Requires ts-node: npm install -D ts-node

import fs from "fs";
import path from "path";
import crypto from "crypto";
import { PreviewData, PreviewTemplate } from "../lib/types/preview";

export function generatePreview({
  company,
  contactName,
  contactTitle,
  logo,
  primaryColor,
  secondaryColor,
  template,
  daysValid = 30,
}: {
  company: string;
  contactName: string;
  contactTitle: string;
  logo: string;
  primaryColor: string;
  secondaryColor: string;
  template: PreviewTemplate;
  daysValid?: number;
}): { data: PreviewData; url: string } {
  const slug = company
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  const token = "t_" + crypto.randomBytes(4).toString("hex");

  const now = new Date();
  const expires = new Date(now);
  expires.setDate(expires.getDate() + daysValid);

  const data: PreviewData = {
    slug,
    token,
    company,
    contactName,
    contactTitle,
    logo,
    primaryColor,
    secondaryColor,
    template,
    createdAt: now.toISOString().split("T")[0],
    expiresAt: expires.toISOString().split("T")[0],
  };

  const dir = path.join(process.cwd(), "data", "previews");
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(
    path.join(dir, `${slug}.json`),
    JSON.stringify(data, null, 2),
  );

  const url = `https://blossomrocket.studio/preview/${slug}/${token}`;

  console.log(`\n✓ Preview created for ${company}`);
  console.log(`  Default tab : ${template}`);
  console.log(`  Contact     : ${contactName} — ${contactTitle}`);
  console.log(`  Expires     : ${data.expiresAt}`);
  console.log(`  URL         : ${url}`);
  console.log(`\n  All 3 templates (Men / Women / Lifestyle & Work) are`);
  console.log(
    `  accessible via the nav — the recipient can explore all of them.\n`,
  );

  return { data, url };
}

// ─────────────────────────────────────────────────────────────────────────────
// ── TO USE:
//    1. Uncomment the block below
//    2. Fill in the prospect's details
//    3. Run: npx ts-node -P tsconfig.json scripts/generate-preview.ts
//    4. Copy the URL from the console output
//    5. Re-comment before committing
//
//    template = which tab opens first:
//      "men"            → construction, distribution, trades, trucking
//      "women"          → healthcare, banking, professional services
//      "lifestyle-work" → finance, tech, mixed office/field teams
//
//    All 3 tabs are always visible in the nav regardless of default.
// ─────────────────────────────────────────────────────────────────────────────

// generatePreview({
//   company: "Company Name",
//   contactName: "First Last",
//   contactTitle: "Marketing Manager",
//   logo: "/previews/company-name/logo.svg",
//   primaryColor: "#000000",
//   secondaryColor: "#000000",
//   template: "men",
//   daysValid: 30,
// });
