import { SectionTheme, SideCardProps } from "@/lib/types/section";
import Link from "next/link";

const sideCardTheme: Record<
  SectionTheme,
  {
    sideCardTitle: string;
    sideCardDesc: string;
    sideCardBackground: string;
    sideCardPill: string;
    sideCardDivider?: string;
    sideCardBody: string;
    sideCardLink?: string;
  }
> = {
  light: {
    sideCardTitle: "text-[#1a1a2e]",
    sideCardDesc: "text-[#4a4a6a]",
    sideCardBackground:
      "bg-[#f4f3fc] border-[rgba(124,92,232,0.10)] shadow-[0_2px_32px_rgba(26,26,46,0.05)]",
    sideCardPill: "border-[rgba(26,26,46,0.10)] text-[#4a4a6a] bg-white",
    sideCardDivider: "bg-[rgba(26,26,46,0.08)]",
    sideCardBody: "text-[#8480ae]",
    sideCardLink: "text-[#7c5ce8] hover:text-[#d946a8]",
  },
  dark: {
    sideCardTitle: "text-white",
    sideCardDesc: "text-[rgba(255,255,255,0.52)]",
    sideCardBackground:
      "bg-[#25253a] border-[rgba(255,255,255,0.08)] shadow-[0_2px_32px_rgba(0,0,0,0.20)]",
    sideCardPill:
      "border-[rgba(255,255,255,0.10)] text-[rgba(255,255,255,0.65)]",
    sideCardDivider: "bg-[rgba(255,255,255,0.08)]",
    sideCardBody: "text-[rgba(255,255,255,0.40)]",
    sideCardLink: "text-[#9e8eef] hover:text-[#d946a8]",
  },
  brand: {
    sideCardTitle: "text-[#e8e4ff]",
    sideCardDesc: "text-[#8480ae]",
    sideCardBackground:
      "bg-[rgba(124,92,232,0.12)] border-[rgba(124,92,232,0.25)] shadow-[0_2px_32px_rgba(124,92,232,0.10)]",
    sideCardPill: "border-[rgba(124,92,232,0.30)] text-[#beb5f5]",
    sideCardDivider: "bg-[rgba(124,92,232,0.20)]",
    sideCardBody: "text-[#4a4a6a]",
    sideCardLink: "text-[#beb5f5] hover:text-[#d946a8]",
  },
  brandSoft: {
    sideCardTitle: "text-[#1a1a2e]",
    sideCardDesc: "text-[#4a4a6a]",
    sideCardBackground:
      "bg-white border-[rgba(124,92,232,0.14)] shadow-[0_2px_32px_rgba(124,92,232,0.08)]",
    sideCardPill: "border-[rgba(124,92,232,0.18)] text-[#4a4a6a] bg-[#f4f3fc]",
    sideCardDivider: "bg-[rgba(124,92,232,0.10)]",
    sideCardBody: "text-[#8480ae]",
    sideCardLink: "text-[#7c5ce8] hover:text-[#d946a8]",
  },
};

export const SideCard = ({
  title,
  description,
  pills,
  bodyText,
  links,
  theme = "light",
}: SideCardProps) => {
  const activeTokens = sideCardTheme[theme] ?? sideCardTheme.light;

  return (
    <div
      className={`rounded-[20px] border p-8 lg:sticky lg:top-25 ${activeTokens.sideCardBackground}`}
    >
      <p
        className={`text-[18px] font-semibold leading-[1.3] mb-3 ${activeTokens.sideCardTitle}`}
      >
        {title}
      </p>
      <p
        className={`text-[14px] leading-[1.7] mb-6 ${activeTokens.sideCardDesc}`}
      >
        {description}
      </p>
      {pills && pills.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {pills.map((pill) => (
            <span
              key={pill}
              className={`text-[12px] font-medium px-3 py-1.5 rounded-full border ${activeTokens.sideCardPill}`}
            >
              {pill}
            </span>
          ))}
        </div>
      )}
      {(bodyText || (links && links.length > 0)) && (
        <div className={`h-px mb-5 ${activeTokens.sideCardDivider}`} />
      )}
      {bodyText && (
        <p
          className={`text-[13px] leading-[1.7] mb-4 ${activeTokens.sideCardBody}`}
        >
          {bodyText}
        </p>
      )}
      {links && links.length > 0 && (
        <div className="flex flex-col gap-2.5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[14px] font-medium transition-all duration-200 ${activeTokens.sideCardLink}`}
            >
              {link.label} →
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
