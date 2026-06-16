import { SectionTheme, SideCardProps } from "@/lib/types/section";

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
    sideCardTitle: "text-[#18181b]",
    sideCardDesc: "text-ink",
    sideCardBackground:
      "bg-[#fafaf8] border-[rgba(24,24,27,0.08)] shadow-[0_2px_32px_rgba(24,24,27,0.05)]",
    sideCardPill:
      "border-[rgba(24,24,27,0.10)] text-[rgba(24,24,27,0.65)] bg-white",
    sideCardDivider: "bg-[rgba(24,24,27,0.08)]",
    sideCardBody: "text-[rgba(24,24,27,0.52)]",
    sideCardLink: "text-[#6047e8] hover:text-[#9b5cf6]",
  },
  dark: {
    sideCardTitle: "text-white",
    sideCardDesc: "text-[rgba(255,255,255,0.52)]",
    sideCardBackground:
      "bg-[#18181b] border-[rgba(255,255,255,0.12)] shadow-[0_2px_32px_rgba(255,255,255,0.05)]",
    sideCardPill:
      "border-[rgba(255,255,255,0.10)] text-[rgba(255,255,255,0.65)]",
    sideCardDivider: "bg-[rgba(255,255,255,0.08)]",
    sideCardBody: "text-[rgba(255,255,255,0.40)]",
    sideCardLink: "text-[#9b8ef6] hover:text-white",
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
  const cardTheme = sideCardTheme[theme] ?? "light";
  console.log("cardTheme", cardTheme);
  return (
    <div
      className={`rounded-[20px] border p-8 lg:sticky lg:top-25 ${cardTheme.sideCardBackground}`}
    >
      <p
        className={`text-[18px] font-semibold leading-[1.3] mb-3  ${cardTheme.sideCardTitle}`}
      >
        {title}
      </p>
      <p className={`text-[14px] leading-[1.7] mb-6 ${cardTheme.sideCardDesc}`}>
        {description}
      </p>
      {pills && pills?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {pills.map((pill) => (
            <span
              key={pill}
              className={`text-[12px] font-medium px-3 py-1.5 rounded-full border ${cardTheme.sideCardPill}`}
            >
              {pill}
            </span>
          ))}
        </div>
      )}
      {(bodyText || (links && links.length > 0)) && (
        <div className={`h-px mb-5 ${cardTheme.sideCardDivider}`} />
      )}
      {bodyText && (
        <p
          className={`text-[13px] leading-[1.7] mb-4 ${cardTheme.sideCardBody}`}
        >
          {bodyText}
        </p>
      )}
      {links && links.length > 0 && (
        <div className="flex flex-col gap-2.5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[14px] font-medium transition-all duration-200 ${cardTheme.sideCardLink}`}
            >
              {link.label} →
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
