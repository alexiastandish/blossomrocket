import { tokens } from "@/lib/utils/sectionTailwindTokens";

export type CardLinksProps = {
  links: { label: string; href: string }[];
  label?: string;
  activeTheme?: (typeof tokens)[keyof typeof tokens];
};

export default function CardLinks({
  links,
  label,
  activeTheme,
}: CardLinksProps) {
  const activeTokens = activeTheme ?? tokens["light"];

  if (!links || links.length === 0) return null;

  return (
    <div className={`pt-6 border-t ${activeTokens.cardDivider}`}>
      {label && (
        <p className={`text-[13px] leading-[1.7] mb-4 ${activeTokens.subtext}`}>
          {label}
        </p>
      )}
      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`text-[13px] font-medium flex items-center gap-1.5 transition-all duration-200 hover:gap-3 ${activeTokens.cardLink}`}
          >
            {link.label} →
          </a>
        ))}
      </div>
    </div>
  );
}
