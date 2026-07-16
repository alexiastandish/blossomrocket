import { CtaButton, OrbConfig, SectionTheme } from "@/lib/types/section";
import { buildSchema } from "@/lib/utils/buildSchema";
import { tokens } from "@/lib/utils/sectionTailwindTokens";
import Script from "next/script";
import React from "react";
import CTAs from "../CTAs";
import SectionLabel from "../SectionLabel";
import { DEFAULT_ORBS, Orb } from "../ui/Orb";

export type SectionLayoutProps = {
  heading: React.ReactNode;
  subtext?: string;
  eyebrow?: string;
  ctas?: CtaButton[];
  children: React.ReactNode;
  cols?: [number, number];
  mobileOrder?: "left-first" | "right-first";
  desktopOrder?: "maintain" | "reverse";
  align?: "left" | "center";
  theme?: SectionTheme;
  orbs?: OrbConfig[];
  pageUrl?: string;
  schemaItems?: { topic: string }[];
  id?: string;
  className?: string;
  stickyRight?: boolean;
  layout?: "split" | "stacked";
};

export default function SectionLayout({
  heading,
  subtext,
  eyebrow,
  ctas,
  children,
  cols = [1, 1],
  mobileOrder = "left-first",
  desktopOrder = "maintain",
  align = "left",
  theme = "light",
  orbs,
  pageUrl,
  schemaItems,
  id,
  className = "",
  stickyRight = true,
  layout = "split",
}: SectionLayoutProps) {
  const activeTheme = tokens[theme];
  const schemaId = id ?? "section";
  const schemaHeading = typeof heading === "string" ? heading : schemaId;
  const schema =
    schemaItems && schemaItems.length > 0
      ? buildSchema(schemaItems, schemaHeading, pageUrl)
      : null;

  const isStacked = layout === "stacked";

  // Mobile order: which column shows first below lg
  const leftMobileOrder = mobileOrder === "right-first" ? "order-2" : "order-1";
  const rightMobileOrder =
    mobileOrder === "right-first" ? "order-1" : "order-2";

  // Desktop order: maintain keeps left=1/right=2, reverse flips them at lg+
  const leftDesktopOrder =
    desktopOrder === "reverse" ? "lg:order-2" : "lg:order-1";
  const rightDesktopOrder =
    desktopOrder === "reverse" ? "lg:order-1" : "lg:order-2";

  const leftColClass = `${leftMobileOrder} ${leftDesktopOrder}`;
  const rightColClass = `${rightMobileOrder} ${rightDesktopOrder}`;

  const alignClass =
    align === "center" ? "text-center items-center" : "text-left items-start";
  const ctasAlign = align === "center" ? "justify-center" : "justify-start";

  // orbs prop wins; undefined falls back to per-theme defaults; [] disables all
  const resolvedOrbs: OrbConfig[] =
    orbs !== undefined ? orbs : DEFAULT_ORBS[theme];

  const themedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && typeof child.type !== "string") {
      return React.cloneElement(child, { activeTheme, layout } as Record<
        string,
        unknown
      >);
    }
    return child;
  });

  return (
    <>
      {schema && (
        <Script
          id={`schema-itemlist-${schemaId}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

      <section
        id={id}
        className={["section relative", activeTheme.section, className].join(
          " ",
        )}
        aria-labelledby={`${schemaId}-heading`}
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <div
          className="overflow-hidden absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          {resolvedOrbs.map((orb, i) => (
            <Orb key={i} orb={orb} />
          ))}
        </div>

        {isStacked ? (
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center gap-10">
            <div className="rv flex flex-col items-center">
              {eyebrow && <SectionLabel text={eyebrow} />}
              <h2
                id={`${schemaId}-heading`}
                className={`font-semibold leading-[1.06] tracking-[-0.02em] mb-5 ${activeTheme.heading} h2`}
              >
                {heading}
              </h2>
              {subtext && (
                <p className={`body leading-[1.8] mb-2 ${activeTheme.subtext}`}>
                  {subtext}
                </p>
              )}
              {ctas && (
                <div className="flex flex-wrap gap-3 justify-center mt-6">
                  <CTAs ctas={ctas} theme={theme} />
                </div>
              )}
            </div>
            <div className="rv d3 w-full">{themedChildren}</div>
          </div>
        ) : (
          /* ── Split layout: copy left, children right ── */
          <div
            className="section-col-grid grid items-start gap-[clamp(40px,7vw,100px)] relative z-10"
            style={
              {
                "--section-cols": `${cols[0]}fr ${cols[1]}fr`,
              } as React.CSSProperties
            }
          >
            <div className={`rv flex flex-col ${alignClass} ${leftColClass}`}>
              {eyebrow && <SectionLabel text={eyebrow} />}
              <h2
                id={`${schemaId}-heading`}
                className={`font-semibold leading-[1.06] tracking-[-0.02em] mb-5 ${activeTheme.heading} h2`}
              >
                {heading}
              </h2>
              {subtext && (
                <p
                  className={`body leading-[1.8] mb-8 ${activeTheme.subtext}`}
                  style={{
                    maxWidth: "560px",
                  }}
                >
                  {subtext}
                </p>
              )}
              {ctas && (
                <div className={`flex flex-wrap gap-3 ${ctasAlign}`}>
                  <CTAs ctas={ctas} theme={theme} />
                </div>
              )}
            </div>

            <div
              className={[
                "rv d3 flex flex-col gap-4",
                stickyRight ? "lg:sticky" : "h-full",
                rightColClass,
              ].join(" ")}
              style={stickyRight ? { top: "calc(68px + 20px)" } : undefined}
            >
              {themedChildren}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
