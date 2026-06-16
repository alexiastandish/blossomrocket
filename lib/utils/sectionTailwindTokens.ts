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

  light: {
    section: "bg-white",
    eyebrow: "text-[rgba(24,24,27,0.40)]",
    heading: "text-[#18181b]",
    subtext: "text-[rgba(24,24,27,0.58)]",
    listHeading: "text-[rgba(24,24,27,0.58)]",
    itemBorder: "border-[rgba(24,24,27,0.08)]",
    itemTopic: "text-[#18181b]",
    itemDesc: "text-[rgba(24,24,27,0.58)]",
    sideCard:
      "bg-[#fafaf8] border-[rgba(24,24,27,0.08)] shadow-[0_2px_32px_rgba(24,24,27,0.05)]",
    sideCardTitle: "text-[#18181b]",
    sideCardDesc: "text-[rgba(24,24,27,0.58)]",
    sideCardBody: "text-[rgba(24,24,27,0.52)]",
    sideCardDivider: "bg-[rgba(24,24,27,0.08)]",
    sideCardPill:
      "border-[rgba(24,24,27,0.10)] text-[rgba(24,24,27,0.65)] bg-white",
    sideCardLink: "text-[#6047e8] hover:text-[#9b5cf6]",
    ctaOutline:
      "border-[rgba(24,24,27,0.12)] text-[#18181b] hover:border-[#9b5cf6] hover:bg-[rgba(155,92,246,0.06)]",
    card: "bg-[#fafaf8] border-[rgba(24,24,27,0.08)]",
    cardHeading: "text-[#18181b]",
    itemText: "text-[rgba(24,24,27,0.58)]",
    callout: "border-[rgba(155,92,246,0.20)]",
    calloutBg:
      "linear-gradient(135deg,rgba(155,92,246,0.08),rgba(6,182,212,0.05))",
    calloutText: "text-[rgba(24,24,27,0.72)]",
    calloutStrong: "text-[#18181b]",
    pill: "border-[rgba(24,24,27,0.12)] text-[rgba(24,24,27,0.58)] hover:border-[rgba(99,102,241,0.4)] hover:text-[#6366f1] hover:bg-[rgba(99,102,241,0.05)]",
    cardDivider: "border-[rgba(24,24,27,0.10)]",
    cardLink: "text-[#6366f1] hover:text-[#9b5cf6]",
    gridCellBorder: "border-[rgba(24,24,27,0.07)]",
    gridNumber: "text-[rgba(24,24,27,0.28)]",
    gridIconBg: "bg-[rgba(99,102,241,0.08)]",
    gridTopic: "text-[#18181b]",
    gridTag: "border-[rgba(24,24,27,0.10)] text-[rgba(24,24,27,0.48)]",
  },

  dark: {
    section: "bg-[#0d0d10]",
    eyebrow: "text-[rgba(255,255,255,0.38)]",
    heading: "text-white",
    subtext: "text-[rgba(255,255,255,0.52)]",
    listHeading: "text-[rgba(255,255,255,0.52)]",
    itemBorder: "border-[rgba(255,255,255,0.07)]",
    itemTopic: "text-white",
    itemDesc: "text-[rgba(255,255,255,0.52)]",
    sideCard: "bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.08)]",
    sideCardTitle: "text-white",
    sideCardDesc: "text-[rgba(255,255,255,0.52)]",
    sideCardBody: "text-[rgba(255,255,255,0.40)]",
    sideCardDivider: "bg-[rgba(255,255,255,0.08)]",
    sideCardPill:
      "border-[rgba(255,255,255,0.10)] text-[rgba(255,255,255,0.65)]",
    sideCardLink: "text-[#9b8ef6] hover:text-white",
    ctaOutline:
      "border-[rgba(255,255,255,0.14)] text-white hover:border-[#9b5cf6] hover:bg-[rgba(155,92,246,0.14)]",
    card: "bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.08)]",
    cardHeading: "text-white",
    itemText: "text-[rgba(255,255,255,0.50)]",
    callout: "border-[rgba(155,92,246,0.20)]",
    calloutBg:
      "linear-gradient(135deg,rgba(155,92,246,0.15),rgba(6,182,212,0.10))",
    calloutText: "text-[rgba(255,255,255,0.75)]",
    calloutStrong: "text-white",
    pill: "border-[rgba(255,255,255,0.12)] text-[rgba(255,255,255,0.55)] hover:border-[rgba(155,92,246,0.5)] hover:text-[#9b5cf6] hover:bg-[rgba(155,92,246,0.08)]",
    cardDivider: "border-[rgba(255,255,255,0.08)]",
    cardLink: "text-[#9b8ef6] hover:text-white",
    gridCellBorder: "border-[rgba(255,255,255,0.06)]",
    gridNumber: "text-[rgba(255,255,255,0.22)]",
    gridIconBg: "bg-[rgba(155,92,246,0.14)]",
    gridTopic: "text-white",
    gridTag: "border-[rgba(255,255,255,0.10)] text-[rgba(255,255,255,0.42)]",
  },

  // ── Brand: deep navy #1a1a2e bg, purple #7c5ce8 accent ──────────────────────
  brand: {
    section: "bg-[#1e1a3a]",
    eyebrow: "text-[#7c5ce8]", // accent color, not dim grey
    heading: "text-white",
    subtext: "text-[#8480ae]",
    listHeading: "text-[#8480ae]",
    itemBorder: "border-[rgba(124,92,232,0.18)]", // purple-tinted border
    itemTopic: "text-[#e8e4ff]", // warm white with purple cast
    itemDesc: "text-[#8480ae]",
    sideCard: "bg-[rgba(124,92,232,0.10)] border-[rgba(124,92,232,0.25)]", // purple-tinted card
    sideCardTitle: "text-[#e8e4ff]",
    sideCardDesc: "text-[#8480ae]",
    sideCardBody: "text-[#4a4a6a]",
    sideCardDivider: "bg-[rgba(124,92,232,0.18)]",
    sideCardPill: "border-[rgba(124,92,232,0.30)] text-[#8480ae]",
    sideCardLink: "text-[#a78bfa] hover:text-white",
    ctaOutline:
      "border-[rgba(124,92,232,0.40)] text-[#e8e4ff] hover:border-[#7c5ce8] hover:bg-[rgba(124,92,232,0.15)]",
    card: "bg-[rgba(124,92,232,0.10)] border-[rgba(124,92,232,0.25)]", // purple wash, not neutral grey
    cardHeading: "text-[#e8e4ff]",
    itemText: "text-[#8480ae]",
    callout: "border-[rgba(124,92,232,0.40)]",
    calloutBg:
      "linear-gradient(135deg,rgba(124,92,232,0.25),rgba(167,139,250,0.12))", // richer purple gradient
    calloutText: "text-[#c4b8ff]", // lavender text in callout
    calloutStrong: "text-white",
    pill: "border-[rgba(124,92,232,0.35)] text-[#a78bfa] hover:border-[#7c5ce8] hover:text-white hover:bg-[rgba(124,92,232,0.20)]",
    cardDivider: "border-[rgba(124,92,232,0.20)]",
    cardLink: "text-[#a78bfa] hover:text-white",
    gridCellBorder: "border-[rgba(124,92,232,0.18)]",
    gridNumber: "text-[#7c5ce8]", // accent number
    gridIconBg: "bg-[rgba(124,92,232,0.20)]",
    gridTopic: "text-[#e8e4ff]",
    gridTag: "border-[rgba(124,92,232,0.25)] text-[#a78bfa]",
  },

  // ── Brand Soft: lighter lavender #2d2d4a surface, same purple accent ─────────
  brandSoft: {
    section: "bg-[#f0eeff]", // very light lavender, almost white
    eyebrow: "text-[rgba(24,24,27,0.40)]",
    heading: "text-[#1a1a2e]",
    subtext: "text-[#4a4a6a]",
    listHeading: "text-[#4a4a6a]",
    itemBorder: "border-[rgba(124,92,232,0.12)]",
    itemTopic: "text-[#1a1a2e]",
    itemDesc: "text-[#4a4a6a]",
    sideCard: "bg-[rgba(124,92,232,0.06)] border-[rgba(124,92,232,0.14)]",

    sideCardTitle: "text-[#1a1a2e]",
    sideCardDesc: "text-[#4a4a6a]",
    sideCardBody: "text-[#8480ae]",
    sideCardDivider: "bg-[rgba(124,92,232,0.10)]",
    sideCardPill: "border-[rgba(124,92,232,0.18)] text-[#4a4a6a] bg-white",
    sideCardLink: "text-[#7c5ce8] hover:text-[#4c1d95]",
    ctaOutline:
      "border-[rgba(124,92,232,0.25)] text-[#1a1a2e] hover:border-[#7c5ce8] hover:bg-[rgba(124,92,232,0.06)]",
    card: "bg-[rgba(124,92,232,0.06)] border-[rgba(124,92,232,0.14)]", // purple wash, not white
    cardHeading: "text-[#1a1a2e]",
    itemText: "text-[#4a4a6a]",
    callout: "border-[rgba(124,92,232,0.18)]",
    calloutBg:
      "linear-gradient(135deg,rgba(124,92,232,0.08),rgba(167,139,250,0.05))",
    calloutText: "text-[#4a4a6a]",
    calloutStrong: "text-[#1a1a2e]",
    pill: "border-[rgba(124,92,232,0.18)] text-[#4a4a6a] hover:border-[#7c5ce8] hover:text-[#7c5ce8] hover:bg-[rgba(124,92,232,0.06)]",
    cardDivider: "border-[rgba(124,92,232,0.12)]",
    cardLink: "text-[#7c5ce8] hover:text-[#4c1d95]",
    gridCellBorder: "border-[rgba(124,92,232,0.10)]",
    gridNumber: "text-[rgba(124,92,232,0.40)]",
    gridIconBg: "bg-[rgba(124,92,232,0.08)]",
    gridTopic: "text-[#1a1a2e]",
    gridTag: "border-[rgba(124,92,232,0.15)] text-[#4a4a6a]",
  },
};

export const iconPresets: Record<
  string,
  { bg: string; border: string; color: string; glyph: string }
> = {
  x: {
    bg: "bg-[rgba(239,68,68,0.15)]",
    border: "border-[rgba(239,68,68,0.3)]",
    color: "text-[rgba(239,68,68,0.8)]",
    glyph: "✕",
  },
  check: {
    bg: "bg-[rgba(16,185,129,0.15)]",
    border: "border-[rgba(16,185,129,0.3)]",
    color: "text-[rgba(16,185,129,0.8)]",
    glyph: "✓",
  },
  dot: {
    bg: "bg-[rgba(155,92,246,0.15)]",
    border: "border-[rgba(155,92,246,0.3)]",
    color: "text-[rgba(155,92,246,0.8)]",
    glyph: "•",
  },
  arrow: {
    bg: "bg-[rgba(6,182,212,0.15)]",
    border: "border-[rgba(6,182,212,0.3)]",
    color: "text-[rgba(6,182,212,0.8)]",
    glyph: "→",
  },
  warn: {
    bg: "bg-[rgba(245,158,11,0.15)]",
    border: "border-[rgba(245,158,11,0.3)]",
    color: "text-[rgba(245,158,11,0.8)]",
    glyph: "!",
  },
};
