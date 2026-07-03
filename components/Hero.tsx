import defaultCtas from "@/lib/constants/default_ctas.json";
import { CtaButton, OrbConfig } from "@/lib/types/section";
import { HeroProps, PillTheme } from "@/lib/types/hero";
import CTAs from "./CTAs";

const DEFAULT_CTAS: CtaButton[] = defaultCtas as CtaButton[];

// Hero owns its own orb defaults — separate from section system's default_orbs.json
// Keyed by theme, mirroring SectionLayout's DEFAULT_ORBS pattern.
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
  // Brand: deep navy bg — larger, richer violet glow (matches SectionLayout brand orbs)
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
      right: "-40px",
      opacity: 0.14,
      blur: 80,
    },
  ],
  // BrandSoft: light lavender bg — subtle, low-opacity glow so it doesn't muddy the light background
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
      right: "-40px",
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

// ─── Pill theme maps ──────────────────────────────────────────────────────────

const PILL_STYLES: Record<PillTheme, string> = {
  light:
    "border border-[rgba(24,24,27,0.10)] text-[rgba(24,24,27,0.58)] bg-transparent",
  dark: "border border-[rgba(255,255,255,0.12)] text-[rgba(255,255,255,0.55)] bg-transparent",
  violet:
    "border border-[rgba(155,92,246,0.30)] text-[rgba(155,92,246,0.85)] bg-[rgba(155,92,246,0.06)]",
  // Brand: violet accent on dark navy, matching SectionLayout's brand pill tokens
  brand:
    "border border-[rgba(124,92,232,0.35)] text-[#a78bfa] bg-[rgba(124,92,232,0.10)]",
  // BrandSoft: same violet accent, lightened for the lavender-white background
  brandSoft: "border border-[rgba(124,92,232,0.18)] text-[#4a4a6a] bg-white",
};

// ─── Theme → background / text maps ──────────────────────────────────────────

const HERO_BG: Record<string, string> = {
  light: "bg-white",
  dark: "bg-[#0d0d10]",
  brand: "bg-[#1a1a2e]",
  brandSoft: "bg-[#f0eeff]",
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
      Brand Systems That
      <br />
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
  pillItems = [],
  ctas = DEFAULT_CTAS,
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

  return (
    <header
      id={id}
      className={[
        "relative min-h-[100svh] flex flex-col items-center justify-center text-center overflow-hidden",
        bgClass,
        className,
      ].join(" ")}
      style={{ padding: "calc(68px + 60px) clamp(20px,5vw,60px) 80px" }}
      role="banner"
    >
      {/* ── Ambient orbs ── */}
      {resolvedOrbs.map((orb, i) => (
        <Orb key={i} orb={orb} />
      ))}
      {/* ── Eyebrow pill ── */}
      {pillItems.length > 0 && showPills && (
        <div
          className={[
            "anim-fade-up anim-delay-1 inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full mb-8",
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
      <div className="max-w-3xl">
        {/* ── Heading ── */}
        <h1
          className={[
            "anim-fade-up anim-delay-2 relative z-10 font-semibold leading-[1.0] mb-7 h1",
            headingColor,
          ].join(" ")}
        >
          {heading}
        </h1>

        {/* ── Body ── */}
        <p
          className={[
            "anim-fade-up anim-delay-3 relative z-10 leading-[1.72] mx-auto mb-12 max-w-6xl",
            bodyTextColor,
          ].join(" ")}
          style={{ fontSize: "clamp(15px,1.8vw,19px)" }}
        >
          {body}
        </p>

        {/* ── CTAs ── */}
        {ctas.length > 0 && (
          <div className="anim-fade-up anim-delay-4 flex gap-4 justify-center flex-wrap">
            <CTAs ctas={ctas} />
          </div>
        )}

        {/* ── Scroll hint ── */}
        {showScrollHint && (
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-40"
            aria-hidden="true"
          >
            <div className="scroll-line" />
          </div>
        )}
      </div>
    </header>
  );
}
