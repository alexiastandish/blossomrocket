import Link from "next/link";
import { FeatureItem } from "./FeatureGrid";
import { SectionTheme } from "@/lib/types/section";
import { tokens } from "@/lib/utils/sectionTailwindTokens";

function getCardBg(theme: SectionTheme, featured: boolean): string | undefined {
  if (theme === "neutral") {
    return featured
      ? "linear-gradient(135deg, rgba(155,92,246,0.03) 0%, rgba(6,182,212,0.02) 100%)"
      : "white";
  }
  if (theme === "light" || theme === "brandSoft") {
    return featured
      ? "linear-gradient(135deg, rgba(124,92,232,0.04) 0%, rgba(6,196,164,0.02) 100%)"
      : undefined;
  }
  // dark / brand
  return featured
    ? "linear-gradient(135deg, rgba(124,92,232,0.12) 0%, rgba(6,196,164,0.06) 100%)"
    : undefined;
}

export default function FeatureGridCard({
  item,
  delay,
  theme = "neutral",
}: {
  item: FeatureItem;
  delay: number;
  theme?: SectionTheme;
}) {
  const t = tokens[theme];
  const cardBg = getCardBg(theme, item.featured ?? false);

  const inner = (
    <>
      <span
        className={`block text-[12px] font-semibold tracking-[0.1em] mb-[26px] ${t.gridNumber}`}
      >
        {item.num}
      </span>

      <div
        className={`w-11 h-11 rounded-2xl mb-5 flex items-center justify-center flex-shrink-0 ${t.gridIconBg}`}
      >
        {item.icon}
      </div>

      <h3
        className={`font-semibold mb-3 leading-[1.2] h5 font-display ${t.gridTopic}`}
        itemProp="name"
      >
        {item.title}
      </h3>

      <p
        className={`text-[14px] leading-[1.75] mb-5 flex-1 ${t.itemDesc}`}
        itemProp="description"
      >
        {item.desc}
      </p>

      {item.partnerNote && (
        <p className={`text-[12px] mb-4 ${t.itemDesc}`}>
          Powered through{" "}
          {item.partnerHref ? (
            <Link
              href={item.partnerHref}
              className={`font-medium ${t.cardLink}`}
            >
              {item.partnerNote}
            </Link>
          ) : (
            <span className={`font-medium ${t.cardLink}`}>
              {item.partnerNote}
            </span>
          )}
        </p>
      )}

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className={`text-[10.5px] font-semibold tracking-[0.08em] uppercase px-3 py-1 rounded-full border ${t.gridTag}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  const sharedClass = [
    "svc-grad-bar relative border-r border-b p-10 transition-colors duration-300 overflow-hidden rv flex flex-col",
    t.gridCellBorder,
    item.href ? "cursor-pointer" : "",
  ].join(" ");

  const sharedStyle = {
    transitionDelay: `${delay}s`,
    background: cardBg,
  };

  const schemaProps = {
    role: "listitem" as const,
    itemScope: true,
    itemType: "https://schema.org/Service",
  };

  if (item.href) {
    return (
      <Link
        href={item.href}
        className={sharedClass}
        style={sharedStyle}
        {...schemaProps}
      >
        {inner}
      </Link>
    );
  }

  return (
    <div className={sharedClass} style={sharedStyle} {...schemaProps}>
      {inner}
    </div>
  );
}
