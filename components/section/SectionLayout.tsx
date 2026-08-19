import { CtaButton, OrbConfig, SectionTheme } from "@/lib/types/section";
import { buildSchema } from "@/lib/utils/buildSchema";
import { tokens } from "@/lib/utils/sectionTailwindTokens";
import Image from "next/image";
import Script from "next/script";
import React from "react";
import CTAs from "../CTAs";
import SectionLabel from "../SectionLabel";
import { DEFAULT_ORBS, Orb } from "../ui/Orb";

function aspectRatioMaxHeight(ratio?: string) {
  if (!ratio) return undefined;
  const [w, h] = ratio.split("/").map((n) => parseFloat(n.trim()));
  if (!w || !h) return undefined;
  return `calc(100cqw * ${h} / ${w})`;
}

export type SectionImage = {
  src: string;
  alt: string;
  priority?: boolean;
  aspectRatio?: string;
  /** Drop shadow on the image container. Default: true */
  shadow?: boolean;
  /** Rounded-corner bounding box on the image container. Default: true */
  bordered?: boolean;
  /** Extra classes appended to the image's container div */
  containerClassName?: string;
  /** Extra inline styles merged onto the image's container div */
  containerStyle?: React.CSSProperties;
  /** Extra classes appended to the <Image> element itself */
  imageClassName?: string;
  /** Extra inline styles applied to the <Image> element itself */
  imageStyle?: React.CSSProperties;

  unboundImage?: boolean;
};

export type SectionLayoutProps = {
  heading: React.ReactNode;
  subtext?: string;
  eyebrow?: string;
  ctas?: CtaButton[];
  ctaSlot?: React.ReactNode;
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
  stackedBtns?: boolean;
  /** When passed, renders the image variant: header stretches full width up
   *  to a right-aligned eyebrow, and subtext/children sit in a left column
   *  next to the image, sized by `cols`. */
  image?: SectionImage;
};

export default function SectionLayout({
  heading,
  subtext,
  eyebrow,
  ctas,
  ctaSlot,
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
  stackedBtns,
  image,
}: SectionLayoutProps) {
  const activeTheme = tokens[theme];
  const schemaId = id ?? "section";
  const schemaHeading = typeof heading === "string" ? heading : schemaId;
  const schema =
    schemaItems && schemaItems.length > 0
      ? buildSchema(schemaItems, schemaHeading, pageUrl)
      : null;

  const isStacked = layout === "stacked";

  const leftMobileOrder = mobileOrder === "right-first" ? "order-2" : "order-1";
  const rightMobileOrder =
    mobileOrder === "right-first" ? "order-1" : "order-2";
  const leftDesktopOrder =
    desktopOrder === "reverse" ? "lg:order-2" : "lg:order-1";
  const rightDesktopOrder =
    desktopOrder === "reverse" ? "lg:order-1" : "lg:order-2";

  const leftColClass = `${leftMobileOrder} ${leftDesktopOrder}`;
  const rightColClass = `${rightMobileOrder} ${rightDesktopOrder}`;

  const alignClass =
    align === "center" ? "text-center items-center" : "text-left items-start";
  const ctasAlign = align === "center" ? "justify-center" : "justify-start";
  const ctasStacked = stackedBtns ? "flex-col" : "";

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

  // Renders either the ctaSlot (client component) or the static CTAs
  const ctaContent =
    ctaSlot ??
    (ctas && ctas.length > 0 ? (
      <CTAs ctas={ctas} theme={theme} stackedBtns={stackedBtns} />
    ) : null);

  // Image container: shadow/bordered default to true unless explicitly false
  const imageContainerClasses = image
    ? [
        "relative h-auto overflow-hidden",
        image.bordered !== false ? "rounded-[20px]" : "",
        image.shadow !== false ? "shadow-[0_4px_32px_rgba(0,0,0,0.15)]" : "",
        image.containerClassName ?? "",
      ]
        .filter(Boolean)
        .join(" ")
    : "";

  const imageClasses = image
    ? [
        image.imageClassName?.includes("object-") ? "" : "object-cover",
        "object-left-top",
        image.imageClassName ?? "",
      ]
        .filter(Boolean)
        .join(" ")
    : "";

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
        className={["relative", activeTheme.section, className].join(" ")}
        style={{ padding: "clamp(80px,11vw,160px) clamp(32px,7vw,100px)" }}
        aria-labelledby={`${schemaId}-heading`}
        itemScope
        itemType="https://schema.org/ItemList"
      >
        {/* ── Orbs — clipped independently so overflow-hidden doesn't break sticky ── */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          {resolvedOrbs.map((orb, i) => (
            <Orb key={i} orb={orb} />
          ))}
        </div>

        {image ? (
          <div className="relative z-10 flex flex-col gap-[clamp(20px,3vw,40px)]">
            {/* header stretches full width up to the eyebrow */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-x-[clamp(20px,3vw,40px)] gap-y-3">
              <div className="flex-1">
                <h2
                  id={`${schemaId}-heading`}
                  className={`h2 ${activeTheme.heading}`}
                >
                  {heading}
                </h2>
              </div>

              {eyebrow && (
                <p className="flex-shrink-0 flex items-center gap-3 text-[11px] font-semibold tracking-[0.16em] uppercase whitespace-nowrap">
                  <span className="grad-text">{eyebrow}</span>
                  <span className="label-line" />
                </p>
              )}
            </div>

            {/* subtext + children (left) next to the image (right) */}
            <div
              className="section-col-grid grid items-stretch gap-[clamp(40px,7vw,100px)]"
              style={
                {
                  "--section-cols": `minmax(0, ${cols[0]}fr) minmax(0, ${cols[1]}fr)`,
                } as React.CSSProperties
              }
            >
              <div className={`flex flex-col gap-6 ${alignClass}`}>
                {subtext && (
                  <p className={`subtext ${activeTheme.subtext}`}>{subtext}</p>
                )}
                {themedChildren}
                {ctaContent && (
                  <div className={`flex ${ctasAlign} ${ctasStacked}`}>
                    {ctaContent}
                  </div>
                )}
              </div>

              {!image?.unboundImage ? (
                <div
                  className={imageContainerClasses}
                  style={
                    {
                      containerType: "inline-size",
                      // maxHeight: aspectRatioMaxHeight(image.aspectRatio),
                      ...image.containerStyle,
                    } as React.CSSProperties
                  }
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={image.priority}
                    className={imageClasses}
                    style={image.imageStyle}
                  />
                </div>
              ) : (
                <div
                  className={imageContainerClasses}
                  style={
                    {
                      containerType: "inline-size",
                      // maxHeight: aspectRatioMaxHeight(image.aspectRatio),
                      ...image.containerStyle,
                    } as React.CSSProperties
                  }
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={image.priority}
                    className={imageClasses}
                    style={image.imageStyle}
                  />
                </div>
              )}
            </div>
          </div>
        ) : isStacked ? (
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
                <p className={`mb-2 ${activeTheme.subtext} subtext`}>
                  {subtext}
                </p>
              )}
              {ctaContent && (
                <div
                  className={`flex justify-center mt-6 ${stackedBtns && "flex-col"}`}
                >
                  {ctaContent}
                </div>
              )}
            </div>
            <div className="rv d3 w-full">{themedChildren}</div>
          </div>
        ) : (
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
                  className={`leading-[1.8] mb-8 ${activeTheme.subtext} subtext`}
                  style={{
                    maxWidth: "560px",
                  }}
                >
                  {subtext}
                </p>
              )}
              {ctaContent && (
                <div className={`flex ${ctasAlign} ${ctasStacked}`}>
                  {ctaContent}
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
