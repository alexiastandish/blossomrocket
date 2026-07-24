import { CardOverlayItem } from "@/lib/types/section";
import { tokens, SectionTokens } from "@/lib/utils/sectionTailwindTokens";
import { ItemIcon } from "../ui/ItemIcon";

export type CardListProps = {
  heading?: string;
  items: CardOverlayItem[];
  activeTheme?: SectionTokens;
};

export default function CardList({
  heading,
  items,
  activeTheme,
}: CardListProps) {
  const activeTokens = activeTheme ?? tokens["light"];

  return (
    <div className={`rounded-3xl p-9 border ${activeTokens.card}`}>
      {heading && (
        <h3
          className={`font-semibold mb-5 leading-[1.2] ${activeTokens.cardHeading}`}
          style={{ fontFamily: "var(--font-display)", fontSize: "26px" }}
        >
          {heading}
        </h3>
      )}
      <div className="flex flex-col" role="list" itemProp="itemListElement">
        {items.map((item, i) => (
          <div
            key={item.topic}
            className={`flex items-center gap-3 text-[14px] py-3 border-b last:border-b-0 ${activeTokens.itemText} ${activeTokens.itemBorder}`}
            role="listitem"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <meta itemProp="position" content={String(i + 1)} />
            {item?.icon ? (
              <ItemIcon icon={item.icon} />
            ) : (
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 grad-bg" />
            )}
            <span itemProp="name">{item.topic}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
