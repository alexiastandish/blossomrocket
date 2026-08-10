"use client";

import { SectionTokens, tokens } from "@/lib/utils/sectionTailwindTokens";

// ─── Types ────────────────────────────────────────────────────────────────────

export type ComparisonBadge = {
  label: string;
  /** "win" = green success bg, "slow" = amber warning bg, "na" = muted */
  intent: "win" | "slow" | "na";
};

export type ComparisonCell = {
  content: string;
  badge?: ComparisonBadge;
  /** true = ✓ green check prefix, false = ✗ muted x prefix, omit = no icon */
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
  /** Column header for the "us" column */
  usLabel?: string;
  /** Column header for the "them" column */
  themLabel?: string;
  groups: ComparisonGroup[];
  /** Footer CTA — omit to hide footer */
  footer?: {
    heading: string;
    subtext?: string;
    cta: { label: string; href: string };
  };
  /** Injected by SectionLayout via cloneElement */
  activeTheme?: SectionTokens;
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

// ─── Cell content ─────────────────────────────────────────────────────────────

function CellContent({ cell }: { cell: ComparisonCell }) {
  return (
    <div className="flex flex-col items-start gap-0.5">
      {cell.badge && <Badge badge={cell.badge} />}
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
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function ComparisonTable({
  usLabel = "Blossom Rocket",
  themLabel = "The Competition",
  groups,
  activeTheme,
}: ComparisonTableProps) {
  const activeTokens = activeTheme ?? tokens["light"];

  return (
    <div
      className={`w-full rounded-2xl border overflow-hidden ${activeTokens.card}`}
    >
      {/* ── Column headers ─────────────────────────────────────────────────── */}
      <div
        className={`hidden md:grid grid-cols-[1fr_1fr_1fr] border-b ${activeTokens.cardDivider}`}
      >
        {/* Feature label */}
        <div className="px-6 py-4">
          <p
            className={`text-[0.65rem] font-semibold tracking-[0.1em] uppercase ${activeTokens.gridNumber}`}
          >
            Features
          </p>
        </div>

        {/* Us — tinted with spectrum top bar */}
        <div
          className={`relative px-6 py-4 border-x bg-[--color-active-bg] border-[--color-border-default]`}
        >
          {/* spectrum bar */}
          <div
            className="absolute top-0 left-0 right-0 h-[2.5px]"
            style={{ background: "var(--grad-spectrum)" }}
            aria-hidden
          />
          <div className="flex items-center gap-2">
            <p className="text-[0.65rem] font-semibold tracking-[0.1em] uppercase text-[--color-fg-brand]">
              {usLabel}
            </p>
            {/* "Us" badge */}
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
            className={`text-[0.65rem] font-semibold tracking-[0.1em] uppercase ${activeTokens.gridNumber}`}
          >
            {themLabel}
          </p>
        </div>
      </div>

      {/* ── Groups ─────────────────────────────────────────────────────────── */}
      {groups.map((group, gi) => (
        <div
          key={gi}
          className={`border-b last:border-b-0 ${activeTokens.cardDivider}`}
        >
          {/* Group header */}
          <div
            className={`flex items-center gap-2 px-6 py-2.5 border-b ${activeTokens.cardDivider} bg-[--color-surface-subtle]`}
          >
            {/* dot — matches .text-divider-dot-gradient */}
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: "linear-gradient(90deg,#9b5cf6,#06b6d4)" }}
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
              className={`border-b last:border-b-0 ${activeTokens.cardDivider}
                flex flex-col md:grid md:grid-cols-[1fr_1fr_1fr]`}
            >
              {/* Feature name */}
              <div
                className={`px-6 py-5 md:border-r ${activeTokens.cardDivider}`}
              >
                <p
                  className={`text-sm font-semibold leading-snug tracking-[-0.01em] ${activeTokens.cardHeading}`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {row.feature}
                </p>
              </div>

              {/* Us cell */}
              <div
                className={`px-6 py-5 bg-[--color-active-bg]
                  border-b md:border-b-0 md:border-x ${activeTokens.cardDivider}
                  ${activeTokens.itemTopic}`}
              >
                {/* Mobile col label */}
                <p className="md:hidden text-[0.6rem] font-bold tracking-[0.1em] uppercase text-[--color-fg-brand] mb-1">
                  {usLabel}
                </p>
                <CellContent cell={row.us} />
              </div>

              {/* Them cell */}
              <div className={`px-6 py-5 ${activeTokens.itemDesc}`}>
                {/* Mobile col label */}
                <p className="md:hidden text-[0.6rem] font-bold tracking-[0.1em] uppercase text-[--color-fg-tertiary] mb-1">
                  {themLabel}
                </p>
                <CellContent cell={row.them} />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
