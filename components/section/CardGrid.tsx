import { IconVariant } from "@/lib/types/section";
import { tokens, SectionTokens } from "@/lib/utils/sectionTailwindTokens";
import { ItemIcon } from "../ui/ItemIcon";

export type GridCardItem = {
  topic: string;
  icon?: IconVariant;
  image?: React.ReactNode;
  tags?: string[];
};

export type CardGridProps = {
  items: GridCardItem[];
  activeTheme?: SectionTokens;
};

export default function CardGrid({ items, activeTheme }: CardGridProps) {
  const activeTokens = activeTheme ?? tokens["light"];

  return (
    <div className={`rounded-3xl border overflow-hidden ${activeTokens.card}`}>
      <div className="grid grid-cols-3">
        {items.map((item, i) => {
          const totalItems = items.length;
          const isRightCol = i % 3 === 2;
          const lastRowStart =
            totalItems - (totalItems % 3 === 0 ? 3 : totalItems % 3);
          const isLastRow = i >= lastRowStart;
          const num = String(i + 1).padStart(2, "0");

          return (
            <div
              key={item.topic}
              className={[
                "relative flex flex-col gap-2",
                !isRightCol ? `border-r ${activeTokens.gridCellBorder}` : "",
                !isLastRow ? `border-b ${activeTokens.gridCellBorder}` : "",
              ].join(" ")}
              style={{ padding: "clamp(10px, 2vw, 24px)" }}
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <meta itemProp="position" content={String(i + 1)} />

              <span
                className={`font-semibold tracking-[0.08em] ${activeTokens.gridNumber}`}
                style={{ fontSize: "clamp(9px, 1vw, 11px)" }}
              >
                {num}
              </span>

              {/* ── Image, icon, or fallback dot ── */}
              {item.image ? (
                <div className="w-full flex justify-center items-center py-1">
                  <div
                    style={{
                      width: "clamp(32px, 5vw, 56px)",
                      height: "clamp(32px, 5vw, 56px)",
                    }}
                  >
                    {item.image}
                  </div>
                </div>
              ) : (
                <div className="w-full flex justify-center items-center py-1">
                  <div
                    className={`rounded-xl flex items-center justify-center ${activeTokens.gridIconBg}`}
                    style={{
                      width: "clamp(28px, 4vw, 40px)",
                      height: "clamp(28px, 4vw, 40px)",
                    }}
                  >
                    {item.icon ? (
                      <ItemIcon icon={item.icon} />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full grad-bg" />
                    )}
                  </div>
                </div>
              )}

              <p
                className={`font-semibold leading-[1.3] ${activeTokens.gridTopic}`}
                style={{ fontSize: "clamp(10px, 1.2vw, 13px)" }}
                itemProp="name"
              >
                {item.topic}
              </p>

              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`font-semibold tracking-[0.05em] px-1.5 py-0.5 rounded-full border ${activeTokens.gridTag}`}
                      style={{ fontSize: "clamp(8px, 0.9vw, 10px)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
