import { HeroTheme } from "@/lib/types/hero";
import { SectionTheme } from "@/lib/types/section";
import Link from "next/link";

const outlineStyles: Record<HeroTheme | SectionTheme, string> = {
  // light — ink border, violet hover
  light:
    "border-[rgba(26,26,46,0.14)] text-[#1a1a2e] hover:border-[#7c5ce8] hover:text-[#7c5ce8] hover:bg-[rgba(124,92,232,0.05)]",
  // dark — subtle white border, pink hover
  dark: "border-[rgba(255,255,255,0.14)] text-white hover:border-[#d946a8] hover:text-[#d946a8] hover:bg-[rgba(217,70,168,0.08)]",
  // brand — white border on deep violet, pink hover
  brand:
    "border-[rgba(255,255,255,0.30)] text-white hover:border-[#d946a8] hover:text-[#d946a8] hover:bg-[rgba(217,70,168,0.12)]",
  // brandSoft — violet border on light lavender
  brandSoft:
    "border-[rgba(124,92,232,0.30)] text-[#1a1a2e] hover:border-[#7c5ce8] hover:text-[#7c5ce8] hover:bg-[rgba(124,92,232,0.06)]",
  neutral:
    "border-[rgba(124,92,232,0.30)] text-[#1a1a2e] hover:border-[#7c5ce8] hover:text-[#7c5ce8] hover:bg-[rgba(124,92,232,0.06)]",
};

export function OutlineButton({
  label,
  href,
  theme,
}: {
  label: string;
  href: string;
  theme: HeroTheme | SectionTheme;
}) {
  const isExternal = href.startsWith("http");

  const className = [
    "inline-flex items-center gap-2 px-8 py-3.5 rounded-full border text-[14px] font-semibold transition-all duration-200 hover:-translate-y-0.5",
    outlineStyles[theme] ?? outlineStyles.light,
  ].join(" ");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}
