export type SectionTheme = "light" | "dark" | "brand" | "brandSoft";

// ─── Orb / ambient glow config ───────────────────────────────────────────────

export type OrbConfig = {
  color: string; // any CSS color / hex
  size?: number; // px (default 500)
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  opacity?: number; // 0–1 (default 0.18)
  blur?: number; // px (default 80)
};

// ─── CTA button config ────────────────────────────────────────────────────────

export type CtaButton = {
  label: string;
  href: string;
  variant?: "primary" | "outline";
};

// ─── Section: ItemList config ────────────────────────────────────────────────────────

export type ListItem = string | { topic: string; description: string };

export type SectionItem =
  | {
      topic: string;
      description: string;
    }
  | string;

export type SectionItemListProps = {
  layout?: "inline" | "stacked";
  items: SectionItem[];
  theme?: SectionTheme;
  ctas?: CtaButton[];
  heading: React.ReactNode | string;
  subtext?: string;
  listHeading: string;
  eyebrow?: string;
  orbs?: OrbConfig[];
  sideCard?: SideCardProps;
  id?: string;
  className?: string;
  pageUrl?: string;
  children?: React.ReactNode;
  showOrbs?: boolean;
};

// ─── Section: CardOverlayList config ────────────────────────────────────────────────────────

export type IconVariant =
  | "x"
  | "check"
  | "dot"
  | "arrow"
  | "warn"
  | React.ReactNode;

export type CardOverlayItem = {
  topic: string;
  icon?: IconVariant;
};

type Callout = {
  heading: string;
  body: string;
};

export type CardOverlayListProps = {
  theme?: SectionTheme;
  eyebrow?: string;
  heading?: React.ReactNode;
  callout?: Callout;
  subtext?: string;
  cardHeading?: string;
  items: CardOverlayItem[];
  defaultIcon?: IconVariant;
  ctas?: CtaButton[];
  pageUrl?: string;
  id?: string;
  className?: string;
  align?: "left" | "center";
  cols?: [number, number]; // column ratio at lg+, stacks to 1fr at tablet/mobile
  mobileOrder?: "left-first" | "right-first";
  cardVariant?: "list" | "pills";
  pills?: CardOverlayItem[];
  cardSubtext?: string;
  cardLinks?: { label: string; href: string }[];
  cardLinksLabel?: string;
};

// ─── SideCard config ────────────────────────────────────────────────────────

export type SideCardLink = {
  label: string;
  href: string;
};

export type SideCardProps = {
  title: string;
  description?: string;
  pills?: string[];
  bodyText?: string;
  links?: SideCardLink[];
  theme?: SectionTheme;
};
