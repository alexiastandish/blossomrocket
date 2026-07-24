import defaultCtas from "@/lib/constants/default_ctas.json";
import { CtaButton, OrbConfig } from "@/lib/types/section";
import { HeroProps, PillTheme } from "@/lib/types/hero";
import CTAs from "./CTAs";

const DEFAULT_CTAS: CtaButton[] = defaultCtas as CtaButton[];

const HERO_DEFAULT_ORBS: Record<
  PillTheme extends string ? string : never,
  OrbConfig[]
> = {
  light: [
    { color: "#9b5cf6", size: 600, top: "-100px", left: "-100px" },
    { color: "#06b6d4", size: 500, bottom: "-80px", right: "-80px" },
    { color: "#10b981", size: 300, top: "40%", left: "55%" },
  ],
  dark: [
    { color: "#9b5cf6", size: 600, top: "-100px", left: "-100px" },
    { color: "#06b6d4", size: 500, bottom: "-80px", right: "-80px" },
    { color: "#10b981", size: 300, top: "40%", left: "55%" },
  ],
  brand: [
    {
      color: "#7c5ce8",
      size: 560,
      top: "-100px",
      left: "-80px",
      opacity: 0.22,
      blur: 90,
    },
    {
      color: "#a78bfa",
      size: 360,
      bottom: "-60px",
      right: "-20px",
      opacity: 0.14,
      blur: 80,
    },
  ],
  brandSoft: [
    {
      color: "#7c5ce8",
      size: 480,
      top: "-80px",
      left: "-60px",
      opacity: 0.18,
      blur: 80,
    },
    {
      color: "#9b5cf6",
      size: 320,
      bottom: "-40px",
      right: "-20px",
      opacity: 0.12,
      blur: 70,
    },
  ],
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function Dot() {
  return <span className="text-divider-dot-gradient" />;
}

function Orb({ orb }: { orb: OrbConfig }) {
  const {
    color,
    size = 500,
    top,
    left,
    right,
    bottom,
    opacity = 0.18,
    blur = 80,
  } = orb;
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        opacity,
        background: `radial-gradient(circle,${color},transparent 70%)`,
        filter: `blur(${blur}px)`,
      }}
    />
  );
}

// ─── Theme maps ───────────────────────────────────────────────────────────────

const PILL_STYLES: Record<PillTheme, string> = {
  light:
    "border border-[rgba(24,24,27,0.10)] text-[rgba(24,24,27,0.58)] bg-transparent",
  dark: "border border-[rgba(255,255,255,0.12)] text-[rgba(255,255,255,0.55)] bg-transparent",
  violet:
    "border border-[rgba(155,92,246,0.30)] text-[rgba(155,92,246,0.85)] bg-[rgba(155,92,246,0.06)]",
  brand:
    "border border-[rgba(124,92,232,0.35)] text-[#a78bfa] bg-[rgba(124,92,232,0.10)]",
  brandSoft: "border border-[rgba(124,92,232,0.18)] text-[#4a4a6a] bg-white",
};

const CHIP_STYLES: Record<PillTheme, string> = {
  light:
    "border border-[rgba(24,24,27,0.10)] text-[rgba(24,24,27,0.58)] bg-transparent",
  dark: "border border-[rgba(255,255,255,0.12)] text-[rgba(255,255,255,0.55)] bg-transparent",
  violet:
    "border border-[rgba(155,92,246,0.30)] text-[rgba(155,92,246,0.85)] bg-[rgba(155,92,246,0.06)]",
  brand:
    "border border-[rgba(124,92,232,0.35)] text-[#a78bfa] bg-[rgba(124,92,232,0.10)]",
  brandSoft: "border border-[rgba(124,92,232,0.18)] text-[#4a4a6a] bg-white",
};

const HERO_BG: Record<string, string> = {
  light: "bg-surface-page",
  dark: "bg-surface-dark-neutral",
  brand: "bg-neutral-600",
  brandSoft: "bg-surface-subtle",
};

const HERO_HEADING_COLOR: Record<string, string> = {
  light: "text-[#18181b]",
  dark: "text-white",
  brand: "text-white",
  brandSoft: "text-[#1a1a2e]",
};

const HERO_BODY_COLOR: Record<string, string> = {
  light: "text-[rgba(24,24,27,0.58)]",
  dark: "text-[rgba(255,255,255,0.55)]",
  brand: "text-[#8480ae]",
  brandSoft: "text-[#4a4a6a]",
};

// ─── Root component ───────────────────────────────────────────────────────────

export default function Hero({
  heading = (
    <>
      Brand Systems That{" "}
      <em className="grad-text not-italic">Work Everywhere.</em>
    </>
  ),
  body = (
    <>
      Blossom Rocket expands brand awareness through brand identity, digital
      design, marketing, print, promotional products &amp; company stores —
      connected through scalable brand systems. Because great brands aren&apos;t
      built through disconnected projects. They&apos;re built through systems.
    </>
  ),
  pillItems = [
    "Brand Identity",
    "Brand Systems",
    "Digital Design",
    "Marketing Assets",
    "Print",
    "Merch",
    "Company Stores",
  ],
  ctas = DEFAULT_CTAS,
  ctaSlot,
  orbs,
  theme = "light",
  pillTheme,
  showScrollHint = true,
  className = "",
  id = "hero",
  showPills = true,
}: HeroProps) {
  const resolvedPillTheme: PillTheme = pillTheme ?? (theme as PillTheme);
  const resolvedOrbs =
    orbs ?? HERO_DEFAULT_ORBS[theme] ?? HERO_DEFAULT_ORBS.light;

  const bodyTextColor = HERO_BODY_COLOR[theme] ?? HERO_BODY_COLOR.light;
  const headingColor = HERO_HEADING_COLOR[theme] ?? HERO_HEADING_COLOR.light;
  const bgClass = HERO_BG[theme] ?? HERO_BG.light;

  // ctaSlot wins over ctas — same pattern as SectionLayout
  const ctaContent =
    ctaSlot ?? (ctas.length > 0 ? <CTAs ctas={ctas} hero={true} /> : null);

  return (
    <header
      id={id}
      className={[
        "section relative min-h-[100svh] flex flex-col items-center justify-center text-center",
        bgClass,
        className,
      ].join(" ")}
      role="banner"
    >
      {/* ── Orbs — in their own overflow-hidden layer so they don't cause horizontal scroll ── */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {resolvedOrbs.map((orb, i) => (
          <Orb key={i} orb={orb} />
        ))}
      </div>

      {/* ── Eyebrow pill — tablet and up ── */}
      {pillItems.length > 0 && showPills && (
        <div
          className={[
            "anim-fade-up anim-delay-1 pills",
            PILL_STYLES[resolvedPillTheme],
          ].join(" ")}
        >
          <Dot />
          {pillItems.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2">
              {item}
              <Dot />
            </span>
          ))}
        </div>
      )}

      {/* ── Eyebrow chips — mobile only ── */}
      {pillItems.length > 0 && showPills && (
        <div className="anim-fade-up anim-delay-1 flex md:hidden flex-wrap items-center justify-center gap-2 mb-6 max-w-sm">
          {pillItems.map((item, i) => (
            <span
              key={i}
              className={[
                "inline-flex items-center text-[10px] font-semibold tracking-[0.06em] uppercase px-3 py-1 rounded-full whitespace-nowrap",
                CHIP_STYLES[resolvedPillTheme],
              ].join(" ")}
            >
              {item}
            </span>
          ))}
        </div>
      )}

      <div className="relative z-10 max-w-3xl">
        {/* ── Heading ── */}
        <h1
          className={[
            "anim-fade-up anim-delay-2 font-semibold leading-[1.0] mb-7 h1",
            headingColor,
          ].join(" ")}
        >
          {heading}
        </h1>

        {/* ── Body ── */}
        <p
          className={[
            "subtext anim-fade-up anim-delay-3 leading-[1.72] mx-auto mb-12 max-w-6xl body",
            bodyTextColor,
          ].join(" ")}
        >
          {body}
        </p>

        {/* ── CTAs ── */}
        {ctaContent && (
          <div className="anim-fade-up anim-delay-4 flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center mt-8">
            {ctaContent}
          </div>
        )}
      </div>

      {/* ── Scroll hint ── */}
      {showScrollHint && (
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-40"
          aria-hidden="true"
        >
          <div className="scroll-line" />
        </div>
      )}
    </header>
  );
}
