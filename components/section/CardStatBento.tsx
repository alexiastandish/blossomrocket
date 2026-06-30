import { tokens, SectionTokens } from "@/lib/utils/sectionTailwindTokens";

export type StatBentoSize = "sm" | "md" | "lg" | "wide" | "tall";

export type StatBentoItem = {
  label: string;
  description?: string;
  graphic?: React.ReactNode;
  size?: StatBentoSize; // default "md"
};

export type CardStatBentoProps = {
  items: StatBentoItem[];
  activeTheme?: SectionTokens;
};

const sizeConfig: Record<StatBentoSize, { span: string; minHeight: string }> = {
  sm: { span: "lg:col-span-1 lg:row-span-1", minHeight: "min-h-[220px]" },
  md: { span: "lg:col-span-1 lg:row-span-1", minHeight: "min-h-[220px]" },
  wide: { span: "lg:col-span-2 lg:row-span-1", minHeight: "min-h-[220px]" },
  tall: { span: "lg:col-span-1 lg:row-span-2", minHeight: "min-h-[460px]" },
  lg: { span: "lg:col-span-2 lg:row-span-2", minHeight: "min-h-[460px]" },
};

export default function CardStatBento({
  items,
  activeTheme,
}: CardStatBentoProps) {
  const activeTokens = activeTheme ?? tokens["light"];

  const shortList = items.length <= 4;

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 grid-flow-dense`}
    >
      {items.map((item) => {
        const config = sizeConfig[item.size ?? "md"];
        const isLargeSize = item.size === "tall" || item.size === "lg";

        return (
          <div
            key={item.label}
            className={[
              "rounded-[20px] overflow-hidden flex flex-col",
              config.span,
              config.minHeight,
              activeTokens.card,
            ].join(" ")}
          >
            {/* ── Graphic zone ── */}
            <div className="graphic-zone relative flex-1 flex items-center justify-center min-h-0 p-4">
              <div className={`glow ${activeTokens.statBentoGlow}`} />
              {item.graphic && (
                <div
                  className={[
                    "relative z-1 flex items-center justify-center",
                    isLargeSize
                      ? "max-w-[85%] max-h-[55%]"
                      : "max-w-[80%] max-h-[90%]",
                  ].join(" ")}
                >
                  {item.graphic}
                </div>
              )}
            </div>

            {/* ── Text zone ── */}
            <div className="flex-shrink-0 px-5 pb-[18px]">
              <p
                className={`text-[16px] font-semibold leading-[1.25] mb-1 ${activeTokens.cardHeading}`}
              >
                {item.label}
              </p>
              {item.description && (
                <p
                  className={`text-[13px] leading-[1.5] ${activeTokens.subtext}`}
                >
                  {item.description}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
