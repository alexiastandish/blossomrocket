import {
  OrbConfig,
  CtaButton,
  SectionItemListProps,
} from "@/lib/types/section";
import defaultCtas from "@/lib/constants/default_ctas.json";
import defaultOrbs from "@/lib/constants/default_orbs.json";
import { tokens } from "@/lib/utils/sectionTailwindTokens";
import { buildSchema } from "@/lib/utils/buildSchema";
import Script from "next/script";
import { SideCard } from "../SideCard";
import CTAs from "../CTAs";
import { Orb } from "../ui/Orb";
import SectionLabel from "../SectionLabel";
import { SectionTheme } from "@/lib/types/section";

const DEFAULT_CTAS: CtaButton[] = defaultCtas as CtaButton[];
const ORBS_BY_THEME = defaultOrbs as Record<SectionTheme, OrbConfig[]>;

export default function SectionItemList({
  listHeading,
  items,
  theme = "light",
  ctas = DEFAULT_CTAS,
  heading,
  subtext,
  eyebrow,
  orbs,
  sideCard,
  id = "hero",
  className = "",
  pageUrl,
  children,
  layout = "stacked",
}: SectionItemListProps) {
  const activeTheme = tokens[theme];
  const hasItems = items.length > 0;
  const schemaId = id ?? "section";

  // orbs prop wins; undefined falls back to per-theme defaults; [] disables all
  const resolvedOrbs: OrbConfig[] =
    orbs !== undefined ? orbs : (ORBS_BY_THEME[theme] ?? []);

  const { itemListSchema, faqSchema } = hasItems
    ? buildSchema(
        items,
        typeof heading === "string" ? heading : undefined,
        typeof subtext === "string" ? subtext : undefined,
        pageUrl,
      )
    : { itemListSchema: null, faqSchema: null };

  const mainContent = (
    <div
      className="section-col-grid grid items-start gap-[clamp(40px,7vw,100px)] relative z-10"
      style={
        {
          "--section-cols": `${5}fr ${3}fr`,
        } as React.CSSProperties
      }
    >
      <div className="">
        {eyebrow && <SectionLabel text={eyebrow} />}
        {heading && (
          <h2
            id={`${schemaId}-heading`}
            className={`rv font-semibold leading-[1.06] tracking-[-0.02em] mb-5 ${activeTheme.heading} h2`}
          >
            {heading}
          </h2>
        )}
        {subtext && (
          <p
            className={`rv leading-[1.72] max-w-[560px] ${activeTheme.subtext} ${hasItems ? "mb-0" : "mb-12"}`}
            style={{ fontSize: "clamp(15px,1.8vw,18px)" }}
          >
            {subtext}
          </p>
        )}
        {ctas.length > 0 && (
          <div className="rv flex gap-4 flex-wrap mt-12">
            <CTAs ctas={ctas} theme={theme} />
          </div>
        )}
      </div>
      <div>
        {hasItems && listHeading && (
          <h3
            className={`text-[13px] font-semibold tracking-[0.08em] uppercase ${tokens.layout[layout].list} mb-0 ${activeTheme.listHeading}`}
          >
            {listHeading}
          </h3>
        )}
        {hasItems && (
          <ul className="mt-8" role="list">
            {items.map((item, i) => {
              const topic = typeof item === "string" ? item : item.topic;
              const description =
                typeof item === "string" ? null : item.description;
              return (
                <li
                  key={i}
                  className={`group flex items-start gap-6 py-[14px] border-t transition-all duration-300 hover:pl-2 last:border-b ${activeTheme.itemBorder}`}
                  role="listitem"
                  itemScope
                  itemType="https://schema.org/ListItem"
                >
                  <meta itemProp="position" content={String(i + 1)} />
                  <div className="w-0.5 flex-shrink-0 self-stretch min-h-[20px] rounded-full bg-gradient-to-b from-[#9b5cf6] to-[#06b6d4] opacity-0 scale-y-50 origin-top transition-all duration-300 group-hover:opacity-100 group-hover:scale-y-100" />
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-[16px] font-semibold leading-[1.35] ${description ? "mb-2" : ""} ${activeTheme.itemTopic}`}
                      itemProp="name"
                    >
                      {topic}
                    </p>
                    {description && (
                      <p
                        className={`text-[14px] leading-[1.75] ${activeTheme.itemDesc}`}
                        itemProp="description"
                      >
                        {description}
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
        {children && <div className="mt-12">{children}</div>}
      </div>
    </div>
  );

  return (
    <>
      {itemListSchema && (
        <Script
          id={`schema-itemlist-${schemaId}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
      )}
      {faqSchema && (
        <Script
          id={`schema-faq-${schemaId}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <section
        id={id}
        className={[
          "relative overflow-hidden",
          activeTheme.section,
          className,
        ].join(" ")}
        style={{ padding: "clamp(80px,11vw,160px) clamp(20px,5vw,60px)" }}
        aria-labelledby={heading ? `${schemaId}-heading` : undefined}
        itemScope
        itemType="https://schema.org/ItemList"
      >
        {resolvedOrbs.map((orb, i) => (
          <Orb key={i} orb={orb} />
        ))}

        <div className="relative z-10">
          {sideCard ? (
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 items-start">
              {mainContent}
              <SideCard
                theme="dark"
                title="Who We Work With"
                description="We work with businesses of all sizes to help them build, manage, and scale their brands."
                pills={[
                  "Startups",
                  "Growing Businesses",
                  "Healthcare",
                  "Franchises",
                ]}
                bodyText="Explore resources covering brand identity and design systems."
                links={[
                  {
                    label: "What Is a Brand System?",
                    href: "/resources/brand-system",
                  },
                  {
                    label: "Brand Style Guide vs Design System",
                    href: "/resources/style-guide",
                  },
                ]}
              />
            </div>
          ) : (
            mainContent
          )}
        </div>
      </section>
    </>
  );
}
