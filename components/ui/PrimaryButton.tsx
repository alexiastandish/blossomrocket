import { HeroTheme } from "@/lib/types/hero";
import { SectionTheme } from "@/lib/types/section";
import Link from "next/link";

const primaryStyles: Record<HeroTheme | SectionTheme, string> = {
  // light — brand violet, per --color-states/button primary
  light:
    "bg-[#7c5ce8] text-white hover:bg-[#6347cc] hover:shadow-[0_12px_36px_rgba(124,92,232,0.28)]",
  // dark — pink accent pops on near-black
  dark: "bg-[#d946a8] text-white hover:bg-[#b8368e] hover:shadow-[0_12px_36px_rgba(217,70,168,0.35)]",
  // brand — white on deep violet bg, high contrast inversion
  brand:
    "bg-white text-[#1a1a2e] hover:bg-[#f4f3fc] hover:shadow-[0_12px_36px_rgba(255,255,255,0.18)]",
  // brandSoft — deep ink on light lavender bg
  brandSoft:
    "bg-[#1a1a2e] text-[#f4f3fc] hover:bg-[#25253a] hover:shadow-[0_12px_36px_rgba(26,26,46,0.20)]",
};

export function PrimaryButton({
  label,
  href,
  theme = "light",
}: {
  label: string;
  href: string;
  theme?: HeroTheme | SectionTheme;
}) {
  const isExternal = href.startsWith("http");

  const className = [
    "btn-grad-overlay relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[14px] font-semibold tracking-[0.01em] transition-all duration-200 hover:-translate-y-0.5 overflow-hidden",
    primaryStyles[theme] ?? primaryStyles.light,
  ].join(" ");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        <span className="relative z-10">{label}</span>
        <span className="relative z-10">→</span>
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      <span className="relative z-10">{label}</span>
      <span className="relative z-10">↗</span>
    </Link>
  );
}
