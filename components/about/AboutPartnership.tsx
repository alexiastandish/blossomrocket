import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";

const blossomRocketProvides = [
  "Program strategy",
  "Creative direction",
  "Brand identity and brand systems",
  "Merchandise program development",
  "Brand and store configuration",
  "Store implementation support",
  "Approved artwork and product applications",
  "Customer relationships and program support",
];

const splashBrandsProvides = [
  "Company store platform technology",
  "E-commerce ordering infrastructure",
  "Product catalog infrastructure",
  "On-demand manufacturing",
  "In-house decoration",
  "Fulfillment and distribution",
  "Administrative platform tools",
];

const platformFeatures = [
  "Single-quantity ordering",
  "Multi-logo configurations",
  "Logo variations",
  "Automatic black-and-white logo treatments",
  "Logo-to-product color mapping",
  "User groups and permissions",
  "Purchasing approvals",
  "Budgets and cost centers",
  "Reporting and analytics",
  "Store merchandising and promotions",
];

const proofPoints = [
  {
    value: "2,500+",
    label: "products, subject to program and catalog availability",
  },
  {
    value: "$10M+",
    label: "invested in developing the underlying technology",
  },
  {
    value: "7+",
    label:
      "in-house decoration methods, including embroidery, engraving, screen printing, direct-to-garment, wide-format, dye sublimation, and UV printing",
  },
];

function ResponsibilityList({
  title,
  items,
  accent,
}: {
  title: string;
  items: string[];
  accent: boolean;
}) {
  return (
    <div
      className={[
        "rounded-3xl p-8 sm:p-9 border",
        accent
          ? "bg-surface-base border-border-brand"
          : "bg-surface-base border-border-default",
      ].join(" ")}
    >
      <h3 className="h4 font-semibold font-display text-zinc mb-5 leading-tight">
        {title}
      </h3>
      <ul className="flex flex-col list-none">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 py-3 border-b last:border-b-0 border-border-default text-[15px] text-fg-secondary"
          >
            <span
              className={[
                "w-1.5 h-1.5 rounded-full flex-shrink-0",
                accent ? "grad-bg" : "bg-neutral-300",
              ].join(" ")}
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AboutPartnership() {
  return (
    <section
      id="splashbrands-partnership"
      className="section relative bg-surface-page"
      aria-labelledby="splashbrands-partnership-heading"
    >
      <div className="rv max-w-3xl mb-12">
        <SectionLabel text="Technology & Production Partner" />
        <h2 id="splashbrands-partnership-heading" className="h2 text-zinc mb-5">
          Powered by an established{" "}
          <em className="grad-text not-italic">technology partner.</em>
        </h2>
        <p className="subtext text-fg-secondary">
          Blossom Rocket works with{" "}
          <a
            href="https://splashbrands.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link-default hover:text-link-hover underline underline-offset-4 decoration-border-strong"
          >
            SplashBrands
          </a>{" "}
          to provide the on-demand merchandise infrastructure behind every
          program. Blossom Rocket owns the brand, the program, and the
          relationship. SplashBrands runs the platform, production, and
          fulfillment.
        </p>
      </div>

      <div className="rv d2 grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <ResponsibilityList
          title="Blossom Rocket provides"
          items={blossomRocketProvides}
          accent
        />
        <ResponsibilityList
          title="SplashBrands provides"
          items={splashBrandsProvides}
          accent={false}
        />
      </div>

      <dl className="rv d3 grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {proofPoints.map((p) => (
          <div
            key={p.value}
            className="rounded-3xl p-8 border border-border-default bg-surface-base"
          >
            <dt className="h3 grad-text mb-2 w-fit">{p.value}</dt>
            <dd className="text-[14px] leading-[1.6] text-fg-secondary">
              {p.label}
            </dd>
          </div>
        ))}
      </dl>

      <div className="rv grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-10 items-start">
        <div>
          <h3 className="text-[11px] font-semibold tracking-[0.16em] uppercase text-ink-faint mb-4">
            What the platform supports
          </h3>
          <ul className="flex flex-wrap gap-2 list-none">
            {platformFeatures.map((f) => (
              <li
                key={f}
                className="text-[13px] font-medium px-3.5 py-1.5 rounded-full border border-border-default bg-surface-base text-fg-secondary"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-[14px] leading-[1.7] text-fg-tertiary">
          Organizations including Lincoln Financial, Samsung, Pfizer, Toyota,
          and QXO have used the SplashBrands platform. They are SplashBrands
          platform customers, not Blossom Rocket clients — Blossom Rocket&apos;s
          own work is shown below and on the{" "}
          <Link
            href="/work"
            className="text-link-default hover:text-link-hover underline underline-offset-4"
          >
            Work
          </Link>{" "}
          page.
        </p>
      </div>
    </section>
  );
}
