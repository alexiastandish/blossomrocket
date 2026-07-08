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
  columns?: number; // default 3
};

function GridCell({
  item,
  index,
  isRightEdge,
  isBottomRow,
  isLastItem,
  activeTokens,
}: {
  item: GridCardItem;
  index: number;
  isRightEdge: boolean;
  isBottomRow: boolean;
  isLastItem: boolean;
  activeTokens: SectionTokens;
}) {
  const num = String(index + 1).padStart(2, "0");

  // Border logic — never apply conflicting utilities to the same element:
  //
  // Mobile (stacked): bottom border on every cell except the very last one.
  // Desktop (md+):    right border on every cell except the rightmost in its row.
  //                   bottom border on every cell except those in the last row.
  //
  // The ternary on the bottom-border rule ensures md:border-b and md:border-b-0
  // are never both present on the same element (which caused Tailwind to resolve
  // the conflict unpredictably based on stylesheet order).
  const borderClasses = [
    // Mobile bottom border — all non-last cells
    !isLastItem ? `border-b ${activeTokens.gridCellBorder}` : "",
    // Desktop right border — all non-rightmost cells
    !isRightEdge ? `md:border-r ${activeTokens.gridCellBorder}` : "",
    // Desktop bottom border — non-bottom-row: add it; bottom-row: explicitly clear
    // the mobile border-b that may have been added above.
    !isBottomRow
      ? `md:border-b ${activeTokens.gridCellBorder}`
      : "md:border-b-0",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={[
        "relative flex flex-col gap-2 p-4 pb-12 flex-1",
        borderClasses,
      ].join(" ")}
      itemScope
      itemType="https://schema.org/ListItem"
    >
      <meta itemProp="position" content={String(index + 1)} />

      <span
        className={`font-semibold tracking-[0.08em] ${activeTokens.gridNumber}`}
        style={{ fontSize: "clamp(9px, 1vw, 11px)" }}
      >
        {num}
      </span>

      {item.image ? (
        <div className="w-full flex justify-center items-center py-1">
          <div className="w-full max-w-[160px] aspect-square overflow-hidden rounded-md [&_svg]:w-full [&_svg]:h-full [&_svg]:object-cover">
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
        className={`font-semibold leading-[1.3] text-center ${activeTokens.gridTopic}`}
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
}

export default function CardGrid({
  items,
  activeTheme,
  columns = 3,
}: CardGridProps) {
  const activeTokens = activeTheme ?? tokens["light"];
  const totalItems = items.length;
  const remainder = totalItems % columns;

  const fullRowsCount = remainder === 0 ? totalItems : totalItems - remainder;
  const fullRowItems = items.slice(0, fullRowsCount);
  const lastRowItems = remainder === 0 ? [] : items.slice(fullRowsCount);

  const rows: GridCardItem[][] = [];
  for (let i = 0; i < fullRowItems.length; i += columns) {
    rows.push(fullRowItems.slice(i, i + columns));
  }

  return (
    <div className={`rounded-3xl border overflow-hidden ${activeTokens.card}`}>
      {rows.map((row, rowIndex) => {
        const isBottomRow =
          lastRowItems.length === 0 && rowIndex === rows.length - 1;
        return (
          <div key={`row-${rowIndex}`} className="flex flex-col md:flex-row">
            {row.map((item, colIndex) => {
              const globalIndex = rowIndex * columns + colIndex;
              const isRightEdge = colIndex === row.length - 1;
              const isLastItem = globalIndex === totalItems - 1;
              return (
                <GridCell
                  key={item.topic}
                  item={item}
                  index={globalIndex}
                  isRightEdge={isRightEdge}
                  isBottomRow={isBottomRow}
                  isLastItem={isLastItem}
                  activeTokens={activeTokens}
                />
              );
            })}
          </div>
        );
      })}

      {lastRowItems.length > 0 && (
        <div className="flex flex-col md:flex-row">
          {lastRowItems.map((item, colIndex) => {
            const globalIndex = fullRowsCount + colIndex;
            const isRightEdge = colIndex === lastRowItems.length - 1;
            const isLastItem = globalIndex === totalItems - 1;
            return (
              <GridCell
                key={item.topic}
                item={item}
                index={globalIndex}
                isRightEdge={isRightEdge}
                isBottomRow={true}
                isLastItem={isLastItem}
                activeTokens={activeTokens}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
