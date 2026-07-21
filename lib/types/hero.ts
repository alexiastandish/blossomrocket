import { CtaButton, OrbConfig } from "./section";

export type PillTheme = "light" | "dark" | "violet" | "brand" | "brandSoft";

export type HeroTheme = "light" | "dark" | "brand" | "brandSoft";

export interface HeroProps {
  /** Large heading — supports JSX for <em> gradient spans */
  heading?: React.ReactNode;

  /** Secondary paragraph copy */
  body?: React.ReactNode;

  /** Array of pill/eyebrow items separated by dots */
  pillItems?: string[] | [];

  /** Call-to-action buttons */
  ctas?: CtaButton[];

  /** Ambient orbs. Pass [] to disable all orbs. */
  orbs?: OrbConfig[];

  /** "light" (default) or "dark" background */
  theme?: HeroTheme;

  /** Pill badge visual variant */
  pillTheme?: PillTheme;

  /** Show the bottom scroll-line indicator */
  showScrollHint?: boolean;

  /** Extra className applied to the <header> root */
  className?: string;

  /** Override the section id (default "hero") */
  id?: string;

  showPills?: boolean;
  ctaSlot?: React.ReactNode;
}
