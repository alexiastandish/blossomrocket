import { tokens, SectionTokens } from "@/lib/utils/sectionTailwindTokens";

export type CardCalloutProps = {
  heading?: string;
  body?: string | React.ReactNode;
  activeTheme?: SectionTokens;
};
export default function CardCallout({
  heading,
  body,
  activeTheme,
}: CardCalloutProps) {
  const activeTokens = activeTheme ?? tokens["light"];

  return (
    <div
      className={`p-[18px] px-6 rounded-2xl border ${activeTokens.callout}`}
      style={{ background: activeTokens.calloutBg }}
    >
      <p className={`text-[14px] leading-[1.7] ${activeTokens.calloutText}`}>
        {heading && (
          <strong className={activeTokens.calloutStrong}>{heading} </strong>
        )}
        {body && <>{body} </>}
      </p>
    </div>
  );
}
