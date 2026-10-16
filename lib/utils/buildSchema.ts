import { CardOverlayItem, SectionItem } from "@/lib/types/section";

type BuildSchemaItem = SectionItem | CardOverlayItem;

export function buildSchema(
  items?: BuildSchemaItem[],
  header?: string,
  subtext?: string,
  pageUrl?: string,
) {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    ...(header && { name: header }),
    ...(subtext && { description: subtext }),
    ...(pageUrl && { url: pageUrl }),
    numberOfItems: items?.length ?? 0,
    itemListElement: items?.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: typeof item === "string" ? item : item.topic,
      ...(typeof item !== "string" && "description" in item && item.description
        ? { description: item.description }
        : {}),
    })),
  };

  return { itemListSchema };
}
