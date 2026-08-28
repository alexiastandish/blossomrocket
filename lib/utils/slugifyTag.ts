// URL-safe slug for a tag, e.g. "Brand Strategy" -> "brand-strategy".
// Used both as the query param value and to look the original label back up.
export function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
