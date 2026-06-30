import defaultCtas from "@/lib/constants/default_ctas.json";
import { CtaButton, OrbConfig } from "@/lib/types/section";
import { HeroProps, PillTheme } from "@/lib/types/hero";
import CTAs from "./CTAs";

const DEFAULT_CTAS: CtaButton[] = defaultCtas as CtaButton[];

// Hero owns its own orb defaults — separate from section system's default_orbs.json
const HERO_DEFAULT_ORBS: OrbConfig[] = [
  { color: "#9b5cf6", size: 600, top: "-100px", left: "-100px" },
  { color: "#06b6d4", size: 500, bottom: "-80px", right: "-80px" },
  { color: "#10b981", size: 300, top: "40%", left: "55%" },
];

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
  pillItems = [
    "Brand Identity",
    "Brand Systems",
    "Digital Design",
    "Marketing",
    "Print",
    "Promo Products",
    "Company Stores",
    "SEO Consulting",
  ],
  ctas = DEFAULT_CTAS,
  orbs = HERO_DEFAULT_ORBS,
  theme = "light",
  pillTheme,
  showScrollHint = true,
  className = "",
  id = "hero",
  showPills = true,
}: HeroProps) {
  const resolvedPillTheme: PillTheme =
    pillTheme ?? (theme === "dark" ? "dark" : "light");

  const bodyTextColor =
    theme === "dark"
      ? "text-[rgba(255,255,255,0.55)]"
      : "text-[rgba(24,24,27,0.58)]";

  const bgClass = theme === "dark" ? "bg-[#0d0d10]" : "bg-white";

  return (
    <header
      id={id}
      className={[
        "relative min-h-[100svh] flex flex-col items-center justify-center text-center overflow-hidden",
        bgClass,
        className,
      ].join(" ")}
      style={{ padding: "calc(68px + 60px) clamp(20px,8vw,80px) 80px" }}
      role="banner"
    >
      {/* ── Ambient orbs ── */}
      {orbs.map((orb, i) => (
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

      {/* ── Heading ── */}
      <h1
        className={[
          "anim-fade-up anim-delay-2 relative z-10 font-semibold leading-[1.0] tracking-[-0.03em] mb-7",
          theme === "dark" ? "text-white" : "text-[#18181b]",
        ].join(" ")}
        style={{
          fontFamily: "'Parkinsans', sans-serif",
          fontSize: "clamp(52px,9vw,110px)",
        }}
      >
        {heading}
      </h1>

      {/* ── Body ── */}
      <p
        className={[
          "anim-fade-up anim-delay-3 relative z-10 leading-[1.72] mx-auto mb-12",
          bodyTextColor,
        ].join(" ")}
        style={{ fontSize: "clamp(15px,1.8vw,19px)", maxWidth: "620px" }}
      >
        {body}
      </p>

      {/* ── CTAs ── */}
      {ctas.length > 0 && (
        <div className="anim-fade-up anim-delay-4 flex gap-4 justify-center flex-wrap">
          {/* {ctas.map((cta) =>
            cta.variant === "outline" ? (
              <OutlineButton key={cta.href} {...cta} theme={theme} />
            ) : (
              <PrimaryButton key={cta.href} {...cta} theme={theme} />
            ),
          )} */}
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
    </header>
  );
}
