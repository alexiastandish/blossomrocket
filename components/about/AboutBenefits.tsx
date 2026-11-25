import SectionLabel from "@/components/SectionLabel";
import { CardStatBento } from "@/components/section";
import { tokens } from "@/lib/utils/sectionTailwindTokens";
import NoInventoryMinimums from "@/components/svgs/NoInventoryMinimums";
import OnDemandManufacturing from "@/components/svgs/OnDemandManufacturing";
import SimplifyOrdering from "@/components/svgs/SimplifyOrdering";
import MaintainBrandConsistency from "@/components/svgs/MaintainBrandConsistency";
import CentralizeBrandedMerchandise from "@/components/svgs/CentralizedBrandedMerchandise";
import OrderApprovalsBudget from "@/components/svgs/OrderApprovalsBudget";

/** Full-width variant of the stacked SectionLayout pattern, so the stat bento
 *  gets the whole content width instead of the stacked layout's max-w-3xl. */
export default function AboutBenefits() {
  return (
    <section
      id="on-demand-merchandise"
      className="section relative bg-surface-subtle"
      aria-labelledby="on-demand-merchandise-heading"
    >
      <div className="rv max-w-3xl mx-auto flex flex-col items-center text-center mb-12">
        <SectionLabel text="On-Demand Branded Merchandise" />
        <h2 id="on-demand-merchandise-heading" className="h2 text-ink mb-5">
          Less inventory. Less administration.{" "}
          <em className="grad-text not-italic">More control.</em>
        </h2>
        <p className="subtext text-fg-secondary">
          Traditional promotional merchandise runs on bulk orders, long
          production timelines, and manual purchasing. Blossom Rocket programs
          run on demand: products are made when someone orders them, inside a
          storefront that already knows your brand rules.
        </p>
      </div>

      <div className="rv d2">
        <CardStatBento
          activeTheme={tokens.brandSoft}
          items={[
            {
              label: "Order one. Order one thousand.",
              description:
                "No traditional order minimums. Every program supports single-quantity ordering.",
              graphic: <NoInventoryMinimums />,
              size: "wide",
            },
            {
              label: "No finished inventory",
              description: "Nothing to buy in advance, store, or count.",
              graphic: <OnDemandManufacturing />,
            },
            {
              label: "Typically ships in 2–5 days",
              description: "On eligible items, produced and shipped direct.",
              graphic: <SimplifyOrdering />,
            },
            {
              label: "Brand controls built in",
              description:
                "Approved logos, product colors, and decoration methods.",
              graphic: <MaintainBrandConsistency />,
            },
            {
              label: "Centralized ordering",
              description:
                "Teams, departments, and locations order from one place.",
              graphic: <CentralizeBrandedMerchandise />,
            },
            {
              label: "Budgets, approvals, and reporting",
              description:
                "Purchasing rules and spending visibility without spreadsheets.",
              graphic: <OrderApprovalsBudget />,
              size: "wide",
            },
          ]}
        />
      </div>
    </section>
  );
}
