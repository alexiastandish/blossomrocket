import type { ReactNode } from "react";
import { HeroTheme } from "@/lib/types/hero";
import { SectionTheme } from "@/lib/types/section";

const outlineStyles: Record<HeroTheme | SectionTheme, string> = {
  light:
    "border-[rgba(26,26,46,0.14)] text-[#1a1a2e] hover:border-[#7c5ce8] hover:text-[#7c5ce8] hover:bg-[rgba(124,92,232,0.05)]",
  dark: "border-[rgba(255,255,255,0.14)] text-white hover:border-[#d946a8] hover:text-[#d946a8] hover:bg-[rgba(217,70,168,0.08)]",
  brand:
    "border-[rgba(255,255,255,0.30)] text-white hover:border-[#d946a8] hover:text-[#d946a8] hover:bg-[rgba(217,70,168,0.12)]",
  brandSoft:
    "border-[rgba(124,92,232,0.30)] text-[#1a1a2e] hover:border-[#7c5ce8] hover:text-[#7c5ce8] hover:bg-[rgba(124,92,232,0.06)]",
  neutral:
    "border-[rgba(124,92,232,0.30)] text-[#1a1a2e] hover:border-[#7c5ce8] hover:text-[#7c5ce8] hover:bg-[rgba(124,92,232,0.06)]",
};

type CalendlyButtonProps = {
  children?: ReactNode;
  theme?: HeroTheme | SectionTheme;
};

export function CalendlyButton({
  children = "Book a Demo to Launch Your Company Store",
  theme = "light",
}: CalendlyButtonProps) {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  if (!calendlyUrl) {
    console.warn("NEXT_PUBLIC_CALENDLY_URL is not configured.");
    return null;
  }

  const className = [
    "w-fit inline-flex items-center gap-2 mb-2 px-8 py-3.5 rounded-full border text-[14px] font-semibold transition-all duration-200 hover:-translate-y-0.5 cursor-pointer",
    outlineStyles[theme] ?? outlineStyles.light,
  ].join(" ");

  return (
    <a
      href={calendlyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={`${children} through Calendly`}
    >
      {children}
    </a>
  );
}
