import { tokens, SectionTokens } from "@/lib/utils/sectionTailwindTokens";

export type ComparisonPair = {
  left: string;
  right: string;
};

export type CardComparisonProps = {
  heading?: string;
  leftLabel: string;
  rightLabel: string;
  pairs: ComparisonPair[];
  activeTheme?: SectionTokens;
};

export default function CardComparison({
  heading,
  leftLabel,
  rightLabel,
  pairs,
  activeTheme,
}: CardComparisonProps) {
  const activeTokens = activeTheme ?? tokens["light"];

  return (
    <div className={`rounded-3xl border overflow-hidden ${activeTokens.card}`}>
      {heading && (
        <div className={`px-6 pt-6 pb-4 border-b ${activeTokens.cardDivider}`}>
          <p
            className={`text-[11px] font-semibold tracking-[0.1em] uppercase ${activeTokens.gridNumber}`}
          >
            {heading}
          </p>
        </div>
      )}

      {/* ── Column headers ── */}
      <div className={`grid grid-cols-2 border-b ${activeTokens.cardDivider}`}>
        <div className="px-6 py-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full grad-bg flex-shrink-0" />
          <p
            className={`text-[14px] font-semibold ${activeTokens.cardHeading}`}
          >
            {leftLabel}
          </p>
        </div>
        <div
          className={`px-6 py-4 flex items-center gap-2 border-l ${activeTokens.cardDivider}`}
        >
          <span className="w-2 h-2 rounded-full bg-[#d946a8] flex-shrink-0" />
          <p
            className={`text-[14px] font-semibold ${activeTokens.cardHeading}`}
          >
            {rightLabel}
          </p>
        </div>
      </div>

      {/* ── Pairs ── */}
      <div role="list">
        {pairs.map((pair, i) => {
          const isLast = i === pairs.length - 1;
          return (
            <div
              key={i}
              className={`grid grid-cols-2 ${!isLast ? `border-b ${activeTokens.itemBorder}` : ""}`}
              role="listitem"
            >
              <div className="px-6 py-5">
                <p
                  className={`text-[14px] text-left leading-[1.6] ${activeTokens.itemText}`}
                >
                  {pair.left}
                </p>
              </div>
              <div
                className={`px-6 py-5  text-left border-l ${activeTokens.itemBorder}`}
              >
                <p
                  className={`text-[14px] leading-[1.6] ${activeTokens.itemText}`}
                >
                  {pair.right}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
