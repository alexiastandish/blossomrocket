import { HeroTheme } from "@/lib/types/hero";
import { SectionTheme } from "@/lib/types/section";
import Link from "next/link";

const primaryStyles: Record<HeroTheme | SectionTheme, string> = {
  light:
    "bg-[var(--color-fg-brand)] text-[var(--color-fg-on-dark)] hover:shadow-[0_12px_36px_rgba(124,92,232,0.28)]",
  dark: "bg-[var(--color-pink-400)] text-[var(--color-fg-on-dark)] hover:bg-[#b8368e] hover:shadow-[0_12px_36px_rgba(217,70,168,0.35)]",
  brand:
    "bg-[var(--color-fg-brand)] text-[var(--color-fg-on-dark)] hover:bg-[#f4f3fc] hover:shadow-[0_12px_36px_rgba(255,255,255,0.18)]",
  brandSoft:
    "bg-[var(--color-pink-400)] text-[var(--color-fg-on-dark)] hover:bg-[#25253a] hover:shadow-[0_12px_36px_rgba(26,26,46,0.20)]",
  neutral:
    "bg-[var(--color-neutral-900)] text-[var(--color-fg-on-dark)] hover:bg-[#25253a] hover:shadow-[0_12px_36px_rgba(26,26,46,0.20)]",
};

export function PrimaryButton({
  label,
  href,
  onClick,
  theme = "light",
}: {
  label: string;
  href?: string;
  onClick?: () => void;
  theme?: HeroTheme | SectionTheme;
}) {
  const className = [
    "w-fit btn-grad-overlay relative mb-2 inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[14px] font-semibold tracking-[0.01em] transition-all duration-200 hover:-translate-y-0.5 overflow-hidden cursor-pointer",
    primaryStyles[theme] ?? primaryStyles.light,
  ].join(" ");

  if (onClick) {
    return (
      <button onClick={onClick} className={className}>
        <span className="relative z-10">{label}</span>
        <span className="relative z-10">→</span>
      </button>
    );
  }

  if (href?.startsWith("http")) {
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
    <Link href={href!} className={className}>
      <span className="relative z-10">{label}</span>
      <span className="relative z-10">↗</span>
    </Link>
  );
}
