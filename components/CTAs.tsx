import { CtaButton, SectionTheme } from "@/lib/types/section";
import { OutlineButton } from "./ui/OutlineButton";
import { PrimaryButton } from "./ui/PrimaryButton";

type CTAsProps = {
  ctas: CtaButton[];
  theme?: SectionTheme;
};

function CTAs({ ctas, theme = "light" }: CTAsProps) {
  return (
    <>
      {ctas.length > 0 && (
        <div className="anim-fade-up anim-delay-4 flex gap-4 flex-wrap">
          {ctas.map((cta) =>
            cta.variant === "outline" ? (
              <OutlineButton key={cta.href} {...cta} theme={theme} />
            ) : (
              <PrimaryButton key={cta.href} {...cta} theme={theme} />
            ),
          )}
        </div>
      )}
    </>
  );
}

export default CTAs;
