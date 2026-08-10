import SectionLayout from "@/components/section/SectionLayout";
import ComparisonTable, { ComparisonGroup } from "./ComparisonTable";

// ─── Data ─────────────────────────────────────────────────────────────────────

const groups: ComparisonGroup[] = [
  {
    label: "Setup & Production",
    rows: [
      {
        feature: "Store Setup Time",
        us: {
          badge: { label: "⚡ Fast turnaround", intent: "win" },
          content:
            "Simple stores live in 2 weeks. Complex stores ready in 4 weeks.",
        },
        them: {
          badge: { label: "⏱ 8–12 weeks", intent: "slow" },
          content: "Normal set up 8–12 weeks.",
        },
      },
      {
        feature: "In-House Production",
        us: {
          check: true,
          content:
            "All items decorated on-demand in house — full quality control, no middlemen.",
        },
        them: {
          check: false,
          content:
            "Most are brokers & produce nothing. Some have limited embroidery or screen-print and broker all other items.",
        },
      },
    ],
  },
  {
    label: "Fulfillment",
    rows: [
      {
        feature: "Lead Times",
        us: {
          badge: { label: "📦 Ships in 24–48 hrs", intent: "win" },
          content: "Items ship within 24–48 hours of order.",
        },
        them: {
          content:
            "Longer lead times or back orders if items are not in stock.",
        },
      },
      {
        feature: "Order Minimums",
        us: {
          check: true,
          content: "No order minimums — order just one. No set-up charges.",
        },
        them: {
          check: false,
          content:
            "Order minimums and set-up charges for items not sitting in inventory.",
        },
      },
    ],
  },
  {
    label: "Catalog & Customization",
    rows: [
      {
        feature: "Selection",
        us: {
          check: true,
          content:
            "Hundreds of items available for on-demand shipment. No inventory commitment.",
        },
        them: {
          content:
            "Either inventory commitment for limited items or long lead times.",
        },
      },
      {
        feature: "Store Style Builder",
        us: {
          check: true,
          content:
            "Create sliders, ads, featured items, and email campaigns in minutes.",
        },
        them: {
          badge: { label: "Not available", intent: "na" },
          content: "",
        },
      },
    ],
  },
  {
    label: "Admin & Reporting",
    rows: [
      {
        feature: "Controls",
        us: {
          check: true,
          content: "Approvals, Budgets, Reporting — built in.",
        },
        them: {
          content: "Limited off-the-shelf options.",
        },
      },
      {
        feature: "SEO & Analytics",
        us: {
          check: true,
          content:
            "Built-in SEO, Meta Title, Meta Description tool, and Store Analytics.",
        },
        them: {
          badge: { label: "Not available", intent: "na" },
          content: "",
        },
      },
    ],
  },
];

// ─── Section ──────────────────────────────────────────────────────────────────

export default function CompanyStoreComparisonSection() {
  return (
    <SectionLayout
      id="company-store-comparison"
      theme="light"
      layout="stacked"
      eyebrow="Company Stores"
      heading={
        <>
          Blossom Rocket <em className="grad-text not-italic">vs</em> The Market
        </>
      }
      subtext="See exactly how our company store solution stacks up — from setup speed to in-house production, we built this to be different."
    >
      <ComparisonTable
        usLabel="Blossom Rocket"
        themLabel="The Competition"
        groups={groups}
      />
    </SectionLayout>
  );
}
