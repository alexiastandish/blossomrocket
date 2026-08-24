import fs from "fs";
import path from "path";
import {
  PreviewProduct,
  PreviewTemplate,
  ResolvedPreviewProduct,
} from "@/lib/types/preview";

const EXTENSIONS = ["webp", "jpeg", "jpg", "png"];

// The generic/no-logo default image set lives under Blossom Rocket's
// own slug folder (public/previews/blossom-rocket/products/...) —
// there is no separate top-level public/previews/products/ folder.
const DEFAULT_SLUG = "blossom-rocket";

/**
 * Finds the first existing image file for a product at
 *   {baseDir}/{category}/{subcategory}/{id}.{ext}
 * trying each extension in EXTENSIONS order. Returns the matching
 * public URL path, or null if nothing exists at any extension.
 */
function findImage(
  publicUrlBase: string,
  fsBaseDir: string,
  product: PreviewProduct,
): string | null {
  for (const ext of EXTENSIONS) {
    const fsPath = path.join(
      fsBaseDir,
      product.category,
      product.subcategory,
      `${product.id}.${ext}`,
    );
    if (fs.existsSync(fsPath)) {
      return `${publicUrlBase}/${product.category}/${product.subcategory}/${product.id}.${ext}`;
    }
  }
  return null;
}

/**
 * Resolves each product's image at render time — no `image` field
 * is stored on the product data itself. Checks, in order:
 *   1. Prospect override: public/previews/prospects/{slug}/products/{category}/{subcategory}/{id}.{webp|jpeg|jpg|png}
 *   2. Shared default:    public/previews/blossom-rocket/products/{category}/{subcategory}/{id}.{webp|jpeg|jpg|png}
 *
 * The prospect's own logo lives at public/previews/prospects/{slug}/logo.webp —
 * a sibling of products/, not part of this resolution (that's the
 * `logo` field on PreviewData, handled elsewhere).
 *
 * category/subcategory come directly from the product record
 * (e.g. "mens"/"headwear"), not the template key — template
 * ("men"/"women"/"lifestyle-work") only controls which product list
 * is shown, it's a separate concept from the asset folder structure.
 *
 * Keyed by slug (not token) because the slug is derivable from the
 * company name alone — you can generate and drop in images before
 * ever running generate-preview.ts, without needing to know the
 * random token in advance.
 */
export function resolveProspectProducts(
  slug: string,
  allProducts: Record<PreviewTemplate, PreviewProduct[]>,
): Record<PreviewTemplate, ResolvedPreviewProduct[]> {
  const resolved = {} as Record<PreviewTemplate, ResolvedPreviewProduct[]>;

  const prospectBaseFs = path.join(
    /*turbopackIgnore: true*/ process.cwd(),
    "public",
    "previews",
    "prospects",
    slug,
    "products",
  );
  const prospectBaseUrl = `/previews/prospects/${slug}/products`;

  const defaultBaseFs = path.join(
    /*turbopackIgnore: true*/ process.cwd(),
    "public",
    "previews",
    DEFAULT_SLUG,
    "products",
  );
  const defaultBaseUrl = `/previews/${DEFAULT_SLUG}/products`;

  for (const [templateKey, products] of Object.entries(allProducts) as [
    PreviewTemplate,
    PreviewProduct[],
  ][]) {
    resolved[templateKey] = products.map((product) => {
      const image =
        findImage(prospectBaseUrl, prospectBaseFs, product) ??
        findImage(defaultBaseUrl, defaultBaseFs, product) ??
        "";

      return { ...product, image };
    });
  }

  return resolved;
}
