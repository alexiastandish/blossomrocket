export type SectionTheme = "light" | "dark" | "brand" | "brandSoft";

export type SectionTokens = {
  section: string;
  eyebrow: string;
  heading: string;
  subtext: string;
  listHeading: string;
  itemBorder: string;
  itemTopic: string;
  itemDesc: string;
  sideCard: string;
  sideCardTitle: string;
  sideCardDesc: string;
  sideCardBody: string;
  sideCardDivider: string;
  sideCardPill: string;
  sideCardLink: string;
  ctaOutline: string;
  card: string;
  cardHeading: string;
  itemText: string;
  callout: string;
  calloutBg: string;
  calloutText: string;
  calloutStrong: string;
  pill: string;
  cardDivider: string;
  cardLink: string;
  gridCellBorder: string;
  gridNumber: string;
  gridIconBg: string;
  gridTopic: string;
  gridTag: string;
  statBentoGlow: string;
  linkPill: string;
};

export const tokens: {
  layout: {
    stacked: { grid: string; list: string };
    inline: { grid: string; list: string };
  };
  light: SectionTokens;
  dark: SectionTokens;
  brand: SectionTokens;
  brandSoft: SectionTokens;
  neutral: SectionTokens;
} = {
  layout: {
    stacked: {
      grid: "grid grid-cols-1 gap-4",
      list: "mt-12",
    },
    inline: {
      grid: "grid grid-cols-1 lg:grid-cols-2 gap-4",
      list: "mt-12 lg:mt-0",
    },
  },

  // ── Light ──────────────────────────────────────────────────────────────────
  light: {
    section: "bg-surface-base",
    eyebrow: "text-ink-faint",
    heading: "text-fg-primary",
    subtext: "text-fg-secondary",
    listHeading: "text-fg-secondary",
    itemBorder: "border-border-default",
    itemTopic: "text-ink",
    itemDesc: "text-fg-secondary",
    sideCard:
      "bg-surface-page border-border-default shadow-[0_2px_32px_var(--color-overlay-modal)]",
    sideCardTitle: "text-fg-secondary",
    sideCardDesc: "text-fg-accent",
    sideCardBody: "text-ink-faint",
    sideCardDivider: "bg-border-default",
    sideCardPill: "bg-surface-base border-border-default text-fg-secondary",
    sideCardLink: "text-link-default hover:text-link-hover",
    ctaOutline:
      "border-border-default text-ink hover:border-border-brand hover:bg-active-bg",
    card: "bg-surface-page border-border-default",
    cardHeading: "text-ink",
    itemText: "text-fg-secondary",
    callout: "border-border-brand",
    calloutBg: "var(--grad-brand-wash)",
    calloutText: "text-fg-secondary",
    calloutStrong: "text-ink",
    pill: "border-border-default text-fg-secondary hover:border-border-brand hover:text-violet-300 hover:bg-active-bg",
    cardDivider: "border-border-default",
    cardLink: "text-link-default hover:text-link-hover",
    gridCellBorder: "border-border-default",
    gridNumber: "text-ink-faint",
    gridIconBg: "bg-active-bg",
    gridTopic: "text-fg-secondary",
    gridTag: "border-border-default text-ink-faint",
    statBentoGlow:
      "bg-[radial-gradient(circle_at_50%_35%,var(--color-overlay-focus-halo),transparent_65%)]",
    linkPill: "bg-active-bg text-violet-300 hover:bg-violet-light",
  },

  // ── Dark ───────────────────────────────────────────────────────────────────
  dark: {
    section: "bg-surface-dark-neutral",
    eyebrow: "text-ink-faint",
    heading: "text-white",
    subtext: "text-ink-faint",
    listHeading: "text-ink-faint",
    itemBorder: "border-border-on-dark",
    itemTopic: "text-white",
    itemDesc: "text-ink-faint",
    sideCard: "bg-neutral-800 border-border-on-dark",
    sideCardTitle: "text-white",
    sideCardDesc: "text-ink-faint",
    sideCardBody: "text-ink-faint",
    sideCardDivider: "bg-border-on-dark",
    sideCardPill: "border-border-on-dark text-ink-faint",
    sideCardLink: "text-violet-300 hover:text-pink",
    ctaOutline:
      "border-border-on-dark text-white hover:border-border-brand hover:bg-overlay-brand",
    card: "bg-surface-dark-raised border-border-on-dark",
    cardHeading: "text-white",
    itemText: "text-ink-faint",
    callout: "border-border-brand",
    calloutBg: "var(--grad-dark-brand)",
    calloutText: "text-ink-faint",
    calloutStrong: "text-white",
    pill: "border-border-on-dark text-ink-faint hover:border-border-brand hover:text-violet-300 hover:bg-overlay-brand",
    cardDivider: "border-border-on-dark",
    cardLink: "text-violet-300 hover:text-pink",
    gridCellBorder: "border-border-on-dark",
    gridNumber: "text-fg-accent",
    gridIconBg: "bg-overlay-brand",
    gridTopic: "text-fg-on-dark",
    gridTag: "border-border-on-dark text-ink-faint",
    statBentoGlow:
      "bg-[radial-gradient(circle_at_50%_35%,var(--color-overlay-focus-halo),transparent_65%)]",
    linkPill: "bg-overlay-brand text-violet-300 hover:bg-overlay-focus-halo",
  },
  // ── Brand ──────────────────────────────────────────────────────────────────
  brand: {
    section: "bg-neutral-600",
    eyebrow: "text-ink-faint",
    heading: "text-fg-on-dark",
    subtext: "text-fg-tertiary",
    listHeading: "text-ink-faint",
    itemBorder: "border-border-on-dark",
    itemTopic: "text-white",
    itemDesc: "text-ink-faint",
    sideCard: "bg-surface-dark-raised border-border-on-dark",
    sideCardTitle: "text-white",
    sideCardDesc: "text-ink-faint",
    sideCardBody: "text-ink-faint",
    sideCardDivider: "bg-border-on-dark",
    sideCardPill: "border-border-on-dark text-ink-faint",
    sideCardLink: "text-violet-300 hover:text-pink",
    ctaOutline:
      "border-border-on-dark text-white hover:border-border-brand hover:bg-overlay-brand",
    card: "bg-surface-dark-raised border-border-on-dark",
    cardHeading: "text-white",
    itemText: "text-ink-faint",
    callout: "border-border-brand",
    calloutBg: "var(--grad-dark-brand)",
    calloutText: "text-ink-faint",
    calloutStrong: "text-white",
    pill: "border-border-on-dark text-ink-faint hover:border-border-brand hover:text-violet-300 hover:bg-overlay-brand",
    cardDivider: "border-border-on-dark",
    cardLink: "text-violet-300 hover:text-pink",
    gridCellBorder: "border-border-on-dark",
    gridNumber: "text-ink-faint",
    gridIconBg: "bg-overlay-brand",
    gridTopic: "text-fg-tertiary",
    gridTag: "border-border-on-dark text-ink-faint",
    statBentoGlow:
      "bg-[radial-gradient(circle_at_50%_35%,var(--color-overlay-focus-halo),transparent_65%)]",
    linkPill: "bg-overlay-brand text-violet-300 hover:bg-overlay-focus-halo",
  },
  // ── Brand Soft ─────────────────────────────────────────────────────────────
  brandSoft: {
    section: "bg-surface-subtle",
    eyebrow: "text-ink-faint",
    heading: "text-ink",
    subtext: "text-fg-secondary",
    listHeading: "text-fg-secondary",
    itemBorder: "border-border-subtle",
    itemTopic: "text-ink",
    itemDesc: "text-fg-secondary",
    sideCard: "bg-surface-page border-border-subtle",
    sideCardTitle: "text-ink",
    sideCardDesc: "text-fg-secondary",
    sideCardBody: "text-ink-faint",
    sideCardDivider: "bg-border-subtle",
    sideCardPill: "bg-surface-base border-border-subtle text-fg-secondary",
    sideCardLink: "text-link-default hover:text-link-hover",
    ctaOutline:
      "border-border-subtle text-ink hover:border-border-brand hover:bg-active-bg",
    card: "bg-surface-page border-border-subtle",
    cardHeading: "text-ink",
    itemText: "text-fg-secondary",
    callout: "border-border-brand",
    calloutBg: "var(--grad-brand-wash)",
    calloutText: "text-fg-secondary",
    calloutStrong: "text-ink",
    pill: "border-border-subtle text-fg-secondary hover:border-border-brand hover:text-violet-300 hover:bg-active-bg",
    cardDivider: "border-border-subtle",
    cardLink: "text-link-default hover:text-link-hover",
    gridCellBorder: "border-border-subtle",
    gridNumber: "text-ink-faint",
    gridIconBg: "bg-active-bg",
    gridTopic: "text-ink",
    gridTag: "border-border-subtle text-ink-faint",
    statBentoGlow:
      "bg-[radial-gradient(circle_at_50%_35%,var(--color-overlay-focus-halo),transparent_65%)]",
    linkPill: "bg-active-bg text-violet-300 hover:bg-violet-light",
  },
  neutral: {
    section: "bg-off",
    eyebrow: "text-zinc-40",
    heading: "text-zinc-92",
    subtext: "text-zinc-58",
    listHeading: "text-zinc-58",
    itemBorder: "border-zinc-10",
    itemTopic: "text-zinc-92",
    itemDesc: "text-zinc-58",
    sideCard:
      "bg-white border-zinc-10 shadow-[0_2px_32px_var(--color-zinc-10)]",
    sideCardTitle: "text-zinc-92",
    sideCardDesc: "text-zinc-58",
    sideCardBody: "text-zinc-40",
    sideCardDivider: "bg-zinc-10",
    sideCardPill: "bg-white border-zinc-12 text-zinc-58",
    sideCardLink: "text-link-default hover:text-link-hover",
    ctaOutline:
      "border-zinc-12 text-zinc-92 hover:border-border-brand hover:bg-active-bg",
    card: "bg-white border-zinc-10",
    cardHeading: "text-zinc-92",
    itemText: "text-zinc-58",
    callout: "border-zinc-12",
    calloutBg: "var(--grad-brand-wash)",
    calloutText: "text-zinc-58",
    calloutStrong: "text-zinc-92",
    pill: "border-zinc-12 text-zinc-58 hover:border-border-brand hover:text-violet hover:bg-active-bg",
    cardDivider: "border-zinc-10",
    cardLink: "text-link-default hover:text-link-hover",
    gridCellBorder: "border-zinc-10",
    gridNumber: "text-zinc-40",
    gridIconBg:
      "bg-[linear-gradient(135deg,rgba(155,92,246,0.10),rgba(6,182,212,0.10))]",
    gridTopic: "text-zinc-92",
    gridTag: "border-zinc-12 text-zinc-58",
    statBentoGlow:
      "bg-[radial-gradient(circle_at_50%_35%,var(--color-overlay-focus-halo),transparent_65%)]",
    linkPill: "bg-active-bg text-violet hover:bg-violet-light",
  },
};

export const iconPresets: Record<
  string,
  { bg: string; border: string; color: string; glyph: string }
> = {
  x: {
    bg: "bg-error-bg",
    border: "border-border-strong",
    color: "text-pink-700",
    glyph: "✕",
  },
  check: {
    bg: "bg-success-bg",
    border: "border-green-light",
    color: "text-green-700",
    glyph: "✓",
  },
  dot: {
    bg: "bg-active-bg",
    border: "border-violet-light",
    color: "text-violet-300",
    glyph: "•",
  },
  arrow: {
    bg: "bg-info-bg",
    border: "border-blue-light",
    color: "text-blue-700",
    glyph: "→",
  },
  warn: {
    bg: "bg-warning-bg",
    border: "border-amber-light",
    color: "text-amber-700",
    glyph: "!",
  },
};
