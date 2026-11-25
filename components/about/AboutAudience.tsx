import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import { industries } from "@/data/industries";

const teams = [
  {
    team: "Marketing & brand teams",
    outcome:
      "Approved logos, colors, and products applied the same way everywhere — without reviewing every order.",
  },
  {
    team: "Procurement & purchasing",
    outcome:
      "Centralized ordering, budgets, approvals, and reporting in place of scattered vendor invoices.",
  },
  {
    team: "HR & people operations",
    outcome:
      "Onboarding kits, employee apparel, and recognition gifts that ship without a storage closet.",
  },
  {
    team: "Corporate communications",
    outcome:
      "Consistent brand presentation across events, partners, and co-branded programs.",
  },
  {
    team: "Operations & field leadership",
    outcome:
      "Branches, crews, and locations order what they need, one item at a time.",
  },
];

export default function AboutAudience() {
  return (
    <section
      id="who-we-work-with"
      className="section relative bg-surface-subtle"
      aria-labelledby="who-we-work-with-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-[clamp(40px,7vw,100px)] items-start">
        <div className="rv flex flex-col items-start">
          <SectionLabel text="Who We Work With" />
          <h2 id="who-we-work-with-heading" className="h2 text-zinc mb-5">
            For organizations where the brand has to{" "}
            <em className="grad-text not-italic">travel.</em>
          </h2>
          <p className="subtext text-fg-secondary mb-6">
            Blossom Rocket is built for growing, mid-market, and enterprise
            organizations with multiple locations, distributed teams, field
            employees, franchises, or partner networks — anywhere branded
            merchandise is ordered by many people and has to look the same.
          </p>
          <p className="body text-fg-secondary leading-[1.8] mb-6">
            Smaller teams are welcome too: a{" "}
            <Link
              href="/solutions/swag-storefronts"
              className="text-link-default hover:text-link-hover underline underline-offset-4"
            >
              Swag Storefront
            </Link>{" "}
            or a standalone{" "}
            <Link
              href="/services"
              className="text-link-default hover:text-link-hover underline underline-offset-4"
            >
              creative engagement
            </Link>{" "}
            is often the right starting point.
          </p>
          <nav aria-label="Industries" className="w-full">
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-ink-faint mb-3">
              Programs by industry
            </p>
            <ul className="flex flex-wrap gap-2 list-none">
              {industries.map(({ slug, name }) => (
                <li key={slug}>
                  <Link
                    href={`/industries/${slug}`}
                    className="inline-flex text-[13px] font-medium px-3.5 py-1.5 rounded-full border border-border-default bg-surface-base text-fg-secondary transition-colors duration-200 hover:border-border-brand hover:text-fg-brand"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <ul className="rv d2 flex flex-col gap-3 list-none">
          {teams.map((t) => (
            <li
              key={t.team}
              className="rounded-2xl border border-border-default bg-surface-base p-6 sm:p-7"
            >
              <h3 className="text-[17px] font-semibold text-zinc mb-1.5">
                {t.team}
              </h3>
              <p className="text-[15px] leading-[1.7] text-fg-secondary">
                {t.outcome}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
