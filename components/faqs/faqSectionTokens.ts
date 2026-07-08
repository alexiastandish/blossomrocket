import { SectionTheme } from "@/lib/types/section";

export const faqSectionTokens: Record<
  SectionTheme,
  {
    bg: string;
    text: string;
    mutedText: string;
    border: string;
    cardBg: string;
    itemDesc: string;
    accent: string;
    accentHex: string;
    pill: string;
    heading: string;
    eyebrow: string;
    gradients: string[];
    orb1: string;
    orb2: string;
    orb3: string;
  }
> = {
  light: {
    heading: "text-fg-primary",
    bg: "bg-surface-base",
    text: "text-fg-primary",
    mutedText: "text-fg-secondary",
    eyebrow: "text-fg-tertiary",
    border: "border-border-default",
    cardBg: "bg-surface-page",
    itemDesc: "text-fg-secondary",
    accent: "text-link-default hover:text-link-hover",
    accentHex: "var(--color-violet)",
    pill: "border-border-default text-fg-secondary hover:border-border-brand hover:text-violet-300 hover:bg-active-bg",
    orb1: "var(--color-violet)",
    orb2: "var(--color-pink)",
    orb3: "var(--color-violet-300)",
    gradients: [
      "var(--grad-cool-arc)",
      "var(--grad-warm-glow)",
      "var(--grad-brand)",
      "var(--grad-growth)",
    ],
  },
  dark: {
    bg: "bg-surface-dark",
    heading: "text-white",
    text: "text-white",
    mutedText: "text-ink-faint",
    eyebrow: "text-ink-faint",
    border: "border-border-on-dark",
    cardBg: "bg-surface-dark-raised",
    itemDesc: "text-ink-faint",
    accent: "text-violet-300 hover:text-pink",
    accentHex: "#9e8eef",
    pill: "border-border-on-dark text-ink-faint hover:border-border-brand hover:text-violet-300 hover:bg-overlay-brand",
    orb1: "#7c5ce8",
    orb2: "#d946a8",
    orb3: "#4c35a8",
    gradients: [
      "linear-gradient(135deg, #7c5ce8, #2e8fe8, #06c4a4)",
      "linear-gradient(135deg, #d946a8, #f5a623)",
      "linear-gradient(135deg, #7c5ce8, #d946a8)",
      "linear-gradient(135deg, #06c4a4, #2ecf8e)",
    ],
  },

  brand: {
    bg: "bg-neutral-600",
    heading: "text-fg-on-dark",
    text: "text-fg-on-dark",
    mutedText: "text-ink-faint",
    eyebrow: "text-ink-faint",
    border: "border-border-on-dark",
    cardBg: "bg-surface-dark-raised",
    itemDesc: "text-ink-faint",
    accent: "text-violet-300 hover:text-pink",
    accentHex: "#9e8eef",
    pill: "border-border-on-dark text-ink-faint hover:border-border-brand hover:text-violet-300 hover:bg-overlay-brand",
    orb1: "#7c5ce8",
    orb2: "#4c35a8",
    orb3: "#d946a8",
    gradients: [
      "linear-gradient(135deg, #7c5ce8, #2e8fe8, #06c4a4)",
      "linear-gradient(135deg, #d946a8, #f5a623)",
      "linear-gradient(135deg, #7c5ce8, #d946a8)",
      "linear-gradient(135deg, #06c4a4, #2ecf8e)",
    ],
  },
  brandSoft: {
    bg: "bg-surface-subtle",
    heading: "text-fg-primary",
    text: "text-fg-primary",
    mutedText: "text-fg-secondary",
    eyebrow: "text-fg-tertiary",
    border: "border-border-subtle",
    cardBg: "bg-surface-muted",
    itemDesc: "text-fg-secondary",
    accent: "text-link-default hover:text-link-hover",
    accentHex: "#7c5ce8",
    pill: "border-border-subtle text-fg-secondary hover:border-border-brand hover:text-violet-300 hover:bg-active-bg",
    orb1: "#7c5ce8",
    orb2: "#d946a8",
    orb3: "#beb5f5",
    gradients: [
      "linear-gradient(135deg, #7c5ce8, #2e8fe8, #06c4a4)",
      "linear-gradient(135deg, #d946a8, #f5a623)",
      "linear-gradient(135deg, #7c5ce8, #d946a8)",
      "linear-gradient(135deg, #06c4a4, #2ecf8e)",
    ],
  },

  neutral: {
    bg: "bg-off",
    heading: "text-zinc-92",
    text: "text-zinc-92",
    mutedText: "text-zinc-58",
    eyebrow: "text-zinc-40",
    border: "border-zinc-10",
    cardBg: "bg-white",
    itemDesc: "text-zinc-58",
    accent: "text-link-default hover:text-link-hover",
    accentHex: "var(--color-violet)",
    pill: "border-zinc-12 text-zinc-58 hover:border-border-brand hover:text-violet hover:bg-active-bg",
    orb1: "var(--color-violet)",
    orb2: "var(--color-pink)",
    orb3: "var(--color-violet-300)",
    gradients: [
      "var(--grad-cool-arc)",
      "var(--grad-warm-glow)",
      "var(--grad-brand)",
      "var(--grad-growth)",
    ],
  },
};
