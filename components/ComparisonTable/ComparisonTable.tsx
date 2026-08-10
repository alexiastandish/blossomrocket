import { tokens } from "@/lib/utils/sectionTailwindTokens";
import SectionLabel from "@/components/SectionLabel";
import { DEFAULT_ORBS, Orb } from "@/components/ui/Orb";
import type { OrbConfig, SectionTheme } from "@/lib/types/section";

// ─── Types ────────────────────────────────────────────────────────────────────

export type ComparisonBadge = {
  label: string;
  /** "win" = green, "slow" = amber, "na" = muted */
  intent: "win" | "slow" | "na";
};

export type ComparisonCell = {
  content: string;
  badge?: ComparisonBadge;
  /** true = ✓ green prefix, false = ✗ muted prefix, omit = no icon */
  check?: boolean;
};

export type ComparisonRow = {
  feature: string;
  us: ComparisonCell;
  them: ComparisonCell;
};

export type ComparisonGroup = {
  label: string;
  rows: ComparisonRow[];
};

export type ComparisonTableProps = {
  // ── Section-level props (mirrors SectionLayout) ──
  eyebrow?: string;
  heading: React.ReactNode;
  subtext?: string;
  theme?: SectionTheme;
  orbs?: OrbConfig[];
  id?: string;
  className?: string;
  /** Max-width of the inner content — defaults to max-w-6xl */
  maxWidth?: string;
  // ── Table props ──
  usLabel?: string;
  themLabel?: string;
  groups: ComparisonGroup[];
  footer?: {
    heading: string;
    subtext?: string;
    cta: { label: string; href: string };
  };
};

// ─── Badge ────────────────────────────────────────────────────────────────────

function Badge({ badge }: { badge: ComparisonBadge }) {
  const cls =
    badge.intent === "win"
      ? "bg-[--color-success-bg] text-[--color-green-600]"
      : badge.intent === "slow"
        ? "bg-[--color-warning-bg] text-[--color-amber-600]"
        : "bg-[--color-surface-muted] text-[--color-fg-tertiary]";

  return (
    <span
      className={`inline-flex items-center gap-1 text-[0.7rem] font-semibold px-2.5 py-0.5 rounded-full mb-1 ${cls}`}
    >
      {badge.label}
    </span>
  );
}

// ─── Cell ─────────────────────────────────────────────────────────────────────

function Cell({ cell }: { cell: ComparisonCell }) {
  return (
    <div className="flex flex-col items-start gap-0.5">
      {cell.badge && <Badge badge={cell.badge} />}
      {cell.content && (
        <p className="text-sm leading-[1.7]">
          {cell.check === true && (
            <span className="text-[--color-green] font-bold mr-1" aria-hidden>
              ✓
            </span>
          )}
          {cell.check === false && (
            <span
              className="text-[--color-fg-tertiary] font-bold mr-1"
              aria-hidden
            >
              ✗
            </span>
          )}
          {cell.content}
        </p>
      )}
    </div>
  );
}

// ─── ComparisonTable ──────────────────────────────────────────────────────────

export default function ComparisonTable({
  eyebrow,
  heading,
  subtext,
  theme = "light",
  orbs,
  id,
  className = "",
  maxWidth = "max-w-6xl",
  usLabel = "Blossom Rocket",
  themLabel = "The Competition",
  groups,
  footer,
}: ComparisonTableProps) {
  const t = tokens[theme];
  const schemaId = id ?? "comparison-table";
  const resolvedOrbs: OrbConfig[] =
    orbs !== undefined ? orbs : DEFAULT_ORBS[theme];

  return (
    <section
      id={id}
      className={["relative", t.section, className].join(" ")}
      style={{ padding: "clamp(80px,11vw,160px) clamp(32px,7vw,100px)" }}
      aria-labelledby={`${schemaId}-heading`}
    >
      {/* ── Orbs — matches SectionLayout pattern exactly ───────────────────── */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {resolvedOrbs.map((orb, i) => (
          <Orb key={i} orb={orb} />
        ))}
      </div>

      {/* ── Inner — stacked layout, own max-width ──────────────────────────── */}
      <div
        className={`relative z-10 ${maxWidth} mx-auto flex flex-col items-center text-center gap-10`}
      >
        {/* Heading block — mirrors SectionLayout stacked left col exactly */}
        <div className="rv flex flex-col items-center">
          {eyebrow && <SectionLabel text={eyebrow} />}

          <h2
            id={`${schemaId}-heading`}
            className={`font-semibold leading-[1.06] tracking-[-0.02em] mb-5 ${t.heading} h2`}
          >
            {heading}
          </h2>

          {subtext && <p className={`mb-2 ${t.subtext} subtext`}>{subtext}</p>}
        </div>

        {/* ── Table card — rv d3 matches children slot delay ─────────────── */}
        <div
          className={`rv d3 w-full rounded-2xl border overflow-hidden ${t.card}`}
        >
          {/* Column headers — hidden on mobile */}
          <div
            className={`hidden md:grid md:grid-cols-[1fr_1fr_1fr] border-b ${t.cardDivider}`}
          >
            {/* Features */}
            <div className="px-6 py-4">
              <p
                className={`text-[0.65rem] font-semibold tracking-[0.1em] uppercase ${t.gridNumber}`}
              >
                Features
              </p>
            </div>

            {/* Us — spectrum top bar + active-bg tint */}
            <div
              className={`relative px-6 py-4 bg-[--color-active-bg] border-x border-[--color-border-default]`}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2.5px]"
                style={{ background: "var(--grad-spectrum)" }}
                aria-hidden
              />
              <div className="flex items-center gap-2">
                <p className="text-[0.65rem] font-semibold tracking-[0.1em] uppercase text-[--color-fg-brand]">
                  {usLabel}
                </p>
                <span
                  className="inline-flex items-center text-[0.55rem] font-bold tracking-[0.08em] uppercase px-2 py-0.5 rounded-full text-white"
                  style={{ background: "var(--grad-brand)" }}
                >
                  ★ Us
                </span>
              </div>
            </div>

            {/* Them */}
            <div className="px-6 py-4">
              <p
                className={`text-[0.65rem] font-semibold tracking-[0.1em] uppercase ${t.gridNumber}`}
              >
                {themLabel}
              </p>
            </div>
          </div>

          {/* Groups */}
          {groups.map((group, gi) => (
            <div
              key={gi}
              className={`border-b last:border-b-0 ${t.cardDivider}`}
            >
              {/* Group label — dot matches .text-divider-dot-gradient */}
              <div
                className={`flex items-center gap-2 px-6 py-2.5 border-b bg-[--color-surface-subtle] ${t.cardDivider}`}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 text-divider-dot-gradient"
                  aria-hidden
                />
                <p className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-[--color-fg-brand]">
                  {group.label}
                </p>
              </div>

              {/* Rows */}
              {group.rows.map((row, ri) => (
                <div
                  key={ri}
                  className={`flex flex-col md:grid md:grid-cols-[1fr_1fr_1fr] border-b last:border-b-0 ${t.cardDivider}`}
                >
                  {/* Feature name */}
                  <div
                    className={`px-6 py-5 md:border-r ${t.cardDivider} text-left`}
                  >
                    <p
                      className={`text-sm font-semibold leading-snug tracking-[-0.01em] ${t.cardHeading}`}
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {row.feature}
                    </p>
                  </div>

                  {/* Us */}
                  <div
                    className={`px-6 py-5 bg-[--color-active-bg] md:border-x border-b md:border-b-0 ${t.cardDivider} text-left ${t.itemTopic}`}
                  >
                    <p className="md:hidden text-[0.6rem] font-bold tracking-[0.1em] uppercase text-[--color-fg-brand] mb-1.5">
                      {usLabel}
                    </p>
                    <Cell cell={row.us} />
                  </div>

                  {/* Them */}
                  <div className={`px-6 py-5 text-left ${t.itemDesc}`}>
                    <p className="md:hidden text-[0.6rem] font-bold tracking-[0.1em] uppercase text-[--color-fg-tertiary] mb-1.5">
                      {themLabel}
                    </p>
                    <Cell cell={row.them} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
