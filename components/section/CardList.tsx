// CardList.tsx
import { CardOverlayItem } from "@/lib/types/section";
import { tokens, SectionTokens } from "@/lib/utils/sectionTailwindTokens";

import { ItemIcon } from "../ui/ItemIcon";

export type CardListProps = {
  heading?: string;
  items: CardOverlayItem[];
  activeTheme?: SectionTokens;
  layout?: "split" | "stacked";
};

export default function CardList({
  heading,
  items,
  activeTheme,
  layout = "split",
}: CardListProps) {
  const activeTokens = activeTheme ?? tokens["light"];
  const isStacked = layout === "stacked";

  return (
    <div className={`rounded-3xl p-9 border ${activeTokens.card}`}>
      {heading && (
        <h3
          className={`font-semibold mb-5 leading-[1.2] ${activeTokens.cardHeading}`}
          style={{ fontFamily: "'Parkinsans', sans-serif", fontSize: "26px" }}
        >
          {heading}
        </h3>
      )}
      <div
        className={
          isStacked
            ? "grid grid-cols-1 sm:grid-cols-2 gap-x-10"
            : "flex flex-col"
        }
        role="list"
        itemProp="itemListElement"
      >
        {items.map((item, i) => (
          <div
            key={item.topic}
            className={`flex items-start gap-3 text-[14px] py-3 border-b last:border-b-0 ${activeTokens.itemText} ${activeTokens.itemBorder}`}
            role="listitem"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <meta itemProp="position" content={String(i + 1)} />
            {item?.icon ? (
              <ItemIcon icon={item.icon} />
            ) : (
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 grad-bg mt-1.5" />
            )}
            <div className="flex-1 min-w-0">
              <span
                itemProp="name"
                className={
                  item.description
                    ? `block font-semibold mb-1 ${activeTokens.cardHeading}`
                    : ""
                }
              >
                {item.topic}
              </span>
              {item.description && (
                <p
                  itemProp="description"
                  className={`text-[13px] leading-[1.65] ${activeTokens.subtext}`}
                >
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
