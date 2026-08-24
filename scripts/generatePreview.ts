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
  primaryColor,
  secondaryColor,
  template,
  daysValid = 30,
}: {
  company: string;
  contactName: string;
  contactTitle: string;
  primaryColor: string;
  secondaryColor: string;
  template: PreviewTemplate;
  daysValid?: number;
}): { data: PreviewData; url: string; imagesDir: string } {
  const slug = company
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  const token = "t_" + crypto.randomBytes(4).toString("hex");

  const now = new Date();
  const expires = new Date(now);
  expires.setDate(expires.getDate() + daysValid);

  // Derived, not passed in — the logo always lives at this exact
  // path by convention, so there's no manual value to get stale or
  // typo'd. Drop the actual file there yourself; this script doesn't
  // create it.
  const logo = `/previews/prospects/${slug}/logo.webp`;

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
  const imagesDir = `public/previews/prospects/${slug}/products/`;

  console.log(`\n✓ Preview created for ${company}`);
  console.log(`  Default tab : ${template}`);
  console.log(`  Contact     : ${contactName} — ${contactTitle}`);
  console.log(`  Expires     : ${data.expiresAt}`);
  console.log(`  URL         : ${url}`);
  console.log(`  Images dir  : ${imagesDir} (not created by this script)`);
  console.log(`  Logo path   : ${logo} (also not created by this script)`);
  console.log(
    `\n  Drop product mockups into that folder yourself, matching each`,
  );
  console.log(`  product's id/category/subcategory from preview-products.ts —`);
  console.log(
    `  anything missing falls back to the Blossom Rocket default set.`,
  );
  console.log(`\n  All 3 templates (Men / Women / Lifestyle & Work) are`);
  console.log(
    `  accessible via the nav — the recipient can explore all of them.\n`,
  );

  return { data, url, imagesDir };
}

// ─────────────────────────────────────────────────────────────────────────────
// ── TO USE:
//    1. Uncomment the block below
//    2. Fill in the prospect's details
//    3. Run: npx ts-node -P tsconfig.json scripts/generate-preview.ts
//    4. Copy the URL from the console output
//    5. Drop generated product images into the printed "Images dir" path
//    6. Re-comment before committing
//
//    template = which tab opens first:
//      "men"            → construction, distribution, trades, trucking
//      "women"          → healthcare, banking, professional services
//      "lifestyle-work" → finance, tech, mixed office/field teams
//
//    All 3 tabs are always visible in the nav regardless of default.
// ─────────────────────────────────────────────────────────────────────────────

generatePreview({
  company: "Sirius",
  contactName: "Alexia Standish",
  contactTitle: "Marketing Manager",
  primaryColor: "#231f20",
  secondaryColor: "#494647",
  template: "men",
  daysValid: 30,
});
