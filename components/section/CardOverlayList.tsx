import { CardOverlayListProps } from "@/lib/types/section";
import { buildSchema } from "@/lib/utils/buildSchema";
import { tokens } from "@/lib/utils/sectionTailwindTokens";
import Script from "next/script";
import CTAs from "../CTAs";
import SectionLabel from "../SectionLabel";
import { ItemIcon } from "../ui/ItemIcon";

export default function SectionCardOverlayList({
  heading,
  subtext = "Over time, the brand begins to fragment. Logos become inconsistent. Colors change. Merchandise looks disconnected. Marketing materials feel unrelated.",
  cardHeading = "The result is a brand that no longer feels like one company.",
  cardSubtext,
  cardLinks,
  cardLinksLabel,
  items,
  eyebrow,
  callout = {
    heading: "A Brand System solves this problem",
    body: "by creating a single source of truth — one centralized framework that every team, department, and vendor works from.",
  },
  theme = "dark",
  pageUrl,
  id = "why",
  ctas,
  cols = [1, 1],
  mobileOrder = "left-first",
  align = "left",
  cardVariant = "list",
  className = "",
}: CardOverlayListProps) {
  const activeTheme = tokens[theme];
  const schemaId = id ?? "creative-services-list";
  const schemaHeading = typeof heading === "string" ? heading : cardHeading;
  const schema =
    items.length > 0 ? buildSchema(items, schemaHeading, pageUrl) : null;

  const leftColClass =
    mobileOrder === "right-first" ? "order-2 lg:order-1" : "";
  const rightColClass =
    mobileOrder === "right-first" ? "order-1 lg:order-2" : "";
  const alignClass =
    align === "center" ? "text-center items-center" : "text-left items-start";
  const ctasAlign = align === "center" ? "justify-center" : "justify-start";

  const variant = cardVariant ?? "list";

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
        style={{ padding: "clamp(80px,11vw,160px) clamp(20px,5vw,60px)" }}
        aria-labelledby={`${schemaId}-heading`}
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <div
          className="section-col-grid grid items-start gap-[clamp(40px,7vw,100px)]"
          style={
            {
              "--section-cols": `${cols[0]}fr ${cols[1]}fr`,
            } as React.CSSProperties
          }
        >
          {/* ── Left ── */}
          <div className={`rv flex flex-col ${alignClass} ${leftColClass}`}>
            {eyebrow && (
              <SectionLabel text={eyebrow} light={theme === "dark"} />
            )}
            <h2
              id={`${schemaId}-heading`}
              className={`font-semibold leading-[1.06] tracking-[-0.02em] mb-5 ${activeTheme.heading}`}
              style={{
                fontFamily: "'Parkinsans', sans-serif",
                fontSize: "clamp(38px,5.5vw,76px)",
              }}
            >
              {heading}
            </h2>
            {subtext && (
              <p
                className={`leading-[1.8] mb-8 ${activeTheme.subtext}`}
                style={{
                  fontSize: "clamp(15px,1.4vw,18px)",
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

          {/* ── Right ── */}
          <div
            className={`rv d3 lg:sticky flex flex-col gap-4 ${rightColClass}`}
            style={{ top: "calc(68px + 20px)" }}
          >
            {/* ── Card ── */}
            <div className={`rounded-3xl p-9 border ${activeTheme.card}`}>
              {cardHeading && (
                <h3
                  className={`font-semibold mb-5 leading-[1.2] ${activeTheme.cardHeading}`}
                  style={{
                    fontFamily: "'Parkinsans', sans-serif",
                    fontSize: "26px",
                  }}
                >
                  {cardHeading}
                </h3>
              )}

              {cardSubtext && (
                <p
                  className={`text-[14px] leading-[1.75] mb-5 ${activeTheme.subtext}`}
                >
                  {cardSubtext}
                </p>
              )}

              {/* ── List variant ── */}
              {variant === "list" && (
                <div
                  className="flex flex-col"
                  role="list"
                  itemProp="itemListElement"
                >
                  {items?.map((item, i) => (
                    <div
                      key={item.topic}
                      className={`flex items-center gap-3 text-[14px] py-3 border-b last:border-b-0 ${activeTheme.itemText} ${activeTheme.itemBorder}`}
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
              )}

              {/* ── Pills variant ── */}
              {variant === "pills" && (
                <div
                  className="flex flex-wrap gap-2.5"
                  role="list"
                  itemProp="itemListElement"
                >
                  {items.map((item, i) => (
                    <span
                      key={item.topic}
                      className={`inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-[0.06em] px-3.5 py-1.5 rounded-full border transition-all duration-300 cursor-default ${activeTheme.pill}`}
                      role="listitem"
                      itemScope
                      itemType="https://schema.org/ListItem"
                    >
                      <meta itemProp="position" content={String(i + 1)} />
                      {item?.icon && <ItemIcon icon={item.icon} />}
                      <span itemProp="name">{item.topic}</span>
                    </span>
                  ))}
                </div>
              )}

              {/* ── Card footer (links) ── */}
              {cardLinks && cardLinks.length > 0 && (
                <div
                  className={`mt-7 pt-6 border-t ${activeTheme.cardDivider}`}
                >
                  {cardLinksLabel && (
                    <p
                      className={`text-[13px] leading-[1.7] mb-4 ${activeTheme.subtext}`}
                    >
                      {cardLinksLabel}
                    </p>
                  )}
                  <div className="flex flex-col gap-2">
                    {cardLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className={`text-[13px] font-medium flex items-center gap-1.5 transition-all duration-200 hover:gap-3 ${activeTheme.cardLink}`}
                      >
                        {link.label} →
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ── Callout ── */}
            {callout && (
              <div
                className={`p-[18px] px-6 rounded-2xl border ${activeTheme.callout}`}
                style={{ background: activeTheme.calloutBg }}
              >
                <p
                  className={`text-[14px] leading-[1.7] ${activeTheme.calloutText}`}
                >
                  <strong className={activeTheme.calloutStrong}>
                    {callout.heading}{" "}
                  </strong>
                  {callout.body}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
