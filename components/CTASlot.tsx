"use client";

import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { OutlineButton } from "@/components/ui/OutlineButton";
import { CtaButton, SectionTheme } from "@/lib/types/section";
import { HeroTheme } from "@/lib/types/hero";
import { useContactModal } from "@/contexts/contact-modal-context";

type CTASlotProps = {
  ctas?: CtaButton[];
  theme?: SectionTheme | HeroTheme;
  children?: React.ReactNode;
};

export function CTASlots({
  ctas = [],
  theme = "light",
  children,
}: CTASlotProps) {
  const { open } = useContactModal();

  return (
    <>
      {ctas.map((cta) => {
        const onClick = !cta.href ? open : undefined;
        return cta.variant === "outline" ? (
          <OutlineButton
            key={cta.label}
            label={cta.label}
            href={cta.href}
            onClick={onClick}
            theme={theme}
          />
        ) : (
          <PrimaryButton
            key={cta.label}
            label={cta.label}
            href={cta.href}
            onClick={onClick}
            theme={theme}
          />
        );
      })}
      {children}
    </>
  );
}
