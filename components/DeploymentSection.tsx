import SectionLabel from "./SectionLabel";

const row1 = [
  {
    title: "Apparel",
    desc: "Employee apparel, team merchandise, uniforms, recruiting apparel, and branded clothing that represents your brand consistently in the real world.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M3 10h14M10 3l7 7-7 7"
          stroke="#9b5cf6"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Promotional Products",
    desc: "Strategic merchandise designed to support brand awareness, customer engagement, and internal culture — all aligned to your brand standards.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect
          x="3"
          y="5"
          width="14"
          height="12"
          rx="2"
          stroke="#9b5cf6"
          strokeWidth="1.5"
        />
        <path d="M7 5V3m6 2V3" stroke="#06b6d4" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: "Print Materials",
    desc: "Business cards, brochures, catalogs, sales collateral, direct mail, inserts, and printed marketing assets — brand-consistent across every format.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect
          x="3"
          y="3"
          width="14"
          height="14"
          rx="2"
          stroke="#9b5cf6"
          strokeWidth="1.5"
        />
        <path d="M7 10h6M10 7v6" stroke="#06b6d4" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: "Signage",
    desc: "Office signage, environmental graphics, event signage, retail signage, and branded environments that make your brand visible and consistent on-site.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M4 16h12M7 16V8l3-5 3 5v8"
          stroke="#9b5cf6"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Tradeshow Materials",
    desc: "Booths, displays, banners, event collateral, branded apparel, and promotional giveaways that make your brand unforgettable at every event.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M2 17l4-8 4 5 3-4 3 7"
          stroke="#9b5cf6"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const row2 = [
  {
    title: "Onboarding Kits",
    desc: "Welcome packages, employee gifts, recruiting materials, culture kits, and internal brand experiences that make your brand felt from day one.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect
          x="3"
          y="7"
          width="14"
          height="10"
          rx="2"
          stroke="#9b5cf6"
          strokeWidth="1.5"
        />
        <path d="M7 7V5a3 3 0 016 0v2" stroke="#06b6d4" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: "Packaging",
    desc: "Boxes, inserts, labels, shipping materials, and branded customer touchpoints that turn every delivery into a brand experience.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect
          x="4"
          y="2"
          width="12"
          height="16"
          rx="2"
          stroke="#9b5cf6"
          strokeWidth="1.5"
        />
        <path d="M7 7h6M7 11h4" stroke="#06b6d4" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: "Company Stores",
    desc: "Centralized storefronts that operationalize your brand standards and make approved products accessible to every team, department, and location.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="#9b5cf6" strokeWidth="1.5" />
        <path d="M7 10h6M10 7v6" stroke="#06b6d4" strokeWidth="1.2" />
      </svg>
    ),
  },
];

function DeployCard({
  item,
}: {
  item: { title: string; desc: string; icon: React.ReactNode };
}) {
  return (
    <div
      className="svc-grad-bar relative bg-[#fafaf8] p-8 transition-colors duration-300 hover:bg-white overflow-hidden rv flex flex-col"
      role="listitem"
    >
      <div
        className="w-[42px] h-[42px] rounded-xl mb-[18px] flex items-center justify-center flex-shrink-0"
        style={{
          background:
            "linear-gradient(135deg,rgba(155,92,246,0.1),rgba(6,182,212,0.1))",
        }}
      >
        {item.icon}
      </div>
      <h3
        className="font-semibold mb-2.5 leading-[1.2] h5"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {item.title}
      </h3>
      <p className="text-[13px] text-[rgba(24,24,27,0.58)] leading-[1.7] flex-1">
        {item.desc}
      </p>
    </div>
  );
}

export default function DeploymentSection() {
  return (
    <section
      id="deployment"
      className="section bg-white"
      aria-labelledby="deploy-h"
    >
      <SectionLabel text="Brand Deployment" />
      <h2
        id="deploy-h"
        className="rv font-semibold leading-[1.06] tracking-[-0.02em] mb-5 h2"
      >
        Your Brand Doesn&apos;t
        <br />
        Stop at Your <em className="grad-text not-italic">Website.</em>
      </h2>
      <p
        className="rv d1 text-[rgba(24,24,27,0.58)] leading-[1.8] mb-[52px] subtext"
        style={{ maxWidth: "560px" }}
      >
        A strong brand should feel recognizable whether someone encounters it
        online, in person, at an event, or inside your organization.
      </p>

      {/* Row 1 — 5 cards */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[rgba(24,24,27,0.10)]"
        role="list"
      >
        {row1.map((item) => (
          <DeployCard key={item.title} item={item} />
        ))}
      </div>

      {/* Row 2 — 3 cards */}
      <div
        className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[rgba(24,24,27,0.10)] mt-px"
        role="list"
      >
        {row2.map((item) => (
          <DeployCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
