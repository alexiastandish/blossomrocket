import Link from "next/link";
import { tokens, SectionTokens } from "@/lib/utils/sectionTailwindTokens";

export type LinkGridItem = {
  label: string;
  href: string;
};

export type CardLinkGridProps = {
  heading?: string;
  items: LinkGridItem[];
  footerText?: string;
  activeTheme?: SectionTokens;
};

export default function CardLinkGrid({
  heading,
  items,
  footerText,
  activeTheme,
}: CardLinkGridProps) {
  const activeTokens = activeTheme ?? tokens["light"];

  return (
    <div className={`rounded-3xl border p-7 ${activeTokens.card}`}>
      {heading && (
        <h3
          className={`font-semibold mb-5 leading-[1.3] ${activeTokens.cardHeading}`}
          style={{ fontFamily: "'Parkinsans', sans-serif", fontSize: "20px" }}
        >
          {heading}
        </h3>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2" role="list">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            role="listitem"
            className={`group flex items-center justify-between gap-3 rounded-[10px] px-3.5 py-[11px] text-[14px] font-semibold transition-all duration-200 hover:translate-x-0.5 hover:underline ${activeTokens.linkPill}`}
          >
            <span className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full grad-bg flex-shrink-0" />
              {item.label}
            </span>
            <span
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-bold"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        ))}
      </div>

      {footerText && (
        <p
          className={`text-[13px] leading-[1.7] mt-6 pt-5 border-t ${activeTokens.cardDivider} ${activeTokens.subtext}`}
        >
          {footerText}
        </p>
      )}
    </div>
  );
}
