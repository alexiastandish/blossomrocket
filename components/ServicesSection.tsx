import SectionLabel from "./SectionLabel";

const services = [
  {
    num: "01",
    title: "Brand Identity",
    desc: "Logo systems, typography, color palettes, brand voice, visual direction, and foundational brand standards. The complete visual identity your business needs to show up consistently everywhere.",
    tags: ["Logo Systems", "Typography", "Color Palettes", "Brand Voice"],
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" stroke="#9b5cf6" strokeWidth="1.5" />
        <path d="M6 11h10M11 6v10" stroke="#06b6d4" strokeWidth="1.5" />
        <circle cx="11" cy="11" r="2.5" fill="#9b5cf6" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Website Design",
    desc: "Marketing websites that communicate your value, establish trust, support search visibility, and create a consistent customer experience from first click to conversion.",
    tags: ["Marketing Sites", "UX Design", "SEO Structure"],
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="5"
          width="16"
          height="13"
          rx="2"
          stroke="#9b5cf6"
          strokeWidth="1.5"
        />
        <path d="M7 5V3m8 2V3M3 10h16" stroke="#06b6d4" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Design Systems & UI Libraries",
    desc: "Reusable components, layouts, buttons, forms, icons, navigation systems, and interface standards that improve consistency and speed across every digital experience you build.",
    tags: ["Components", "UI Libraries", "Interface Standards"],
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="4"
          y="4"
          width="14"
          height="14"
          stroke="#9b5cf6"
          strokeWidth="1.5"
        />
        <path d="M4 9h14M9 4v14" stroke="#06b6d4" strokeWidth="1" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Marketing Asset Libraries",
    desc: "Social media templates, presentation templates, recruiting materials, onboarding graphics, email signatures, campaign assets, and reusable marketing systems your whole team can use.",
    tags: ["Social Templates", "Presentations", "Marketing Assets"],
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3 18L8 7l5 7 3-4 3 6"
          stroke="#9b5cf6"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Merchandise Standards",
    desc: "Guidelines that define how your brand appears across physical products and environments — approved apparel styles, embroidery standards, logo placement, print specifications, and packaging standards.",
    tags: ["Apparel Standards", "Logo Placement", "Print Specs"],
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 15l4-4 3 3 5-7"
          stroke="#9b5cf6"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="18" cy="7" r="2" stroke="#06b6d4" strokeWidth="1.2" />
        <path d="M3 19h16" stroke="#9b5cf6" strokeWidth="1" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Company Stores",
    desc: "Centralized storefronts that make approved products, apparel, and branded materials accessible to employees, departments, and customers — while maintaining brand consistency at every order.",
    tags: [
      "Approved Products",
      "Controlled Ordering",
      "Brand Compliance",
      "Team Access",
      "Standardized Execution",
    ],
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="3"
          width="16"
          height="16"
          rx="3"
          stroke="#9b5cf6"
          strokeWidth="1.5"
        />
        <path d="M7 11h8M11 7v8" stroke="#06b6d4" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#fafaf8]"
      style={{ padding: "clamp(80px,11vw,160px) clamp(20px,5vw,60px)" }}
      aria-labelledby="svc-h"
    >
      <div className="flex justify-between items-end flex-wrap gap-7 mb-[52px]">
        <div>
          <SectionLabel text="Our Approach" />
          <h2
            id="svc-h"
            className="rv font-semibold leading-[1.06] tracking-[-0.02em]"
            style={{
              fontFamily: "'Parkinsans', sans-serif",
              fontSize: "clamp(38px,5.5vw,76px)",
            }}
          >
            Build Once.
            <br />
            <em className="grad-text not-italic">Deploy Everywhere.</em>
          </h2>
        </div>
        <p
          className="rv d1 text-[rgba(24,24,27,0.58)] leading-[1.8]"
          style={{ fontSize: "clamp(15px,1.4vw,18px)", maxWidth: "340px" }}
        >
          Blossom Rocket helps businesses create a complete brand ecosystem that
          scales across digital and physical experiences.
        </p>
      </div>

      {/*
        Row 1: 4 equal columns (cards 01–04)
        Row 2: 2 equal columns (cards 05–06)
        Each card stretches to equal height within its row via flex-col + flex-1 content.
        On md: 2-col. On sm: 1-col.
      */}

      {/* Row 1 — 4 cards */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(24,24,27,0.10)]"
        role="list"
      >
        {services.slice(0, 4).map((svc, i) => (
          <ServiceCard key={svc.num} svc={svc} delay={i * 0.05} />
        ))}
      </div>

      {/* Row 2 — 2 cards */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[rgba(24,24,27,0.10)] mt-px"
        role="list"
      >
        {services.slice(4).map((svc, i) => (
          <ServiceCard key={svc.num} svc={svc} delay={(i + 4) * 0.05} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({
  svc,
  delay,
}: {
  svc: (typeof services)[0];
  delay: number;
}) {
  return (
    <div
      className="svc-grad-bar relative bg-white p-10 transition-colors duration-300 hover:bg-[#fafaf8] overflow-hidden rv flex flex-col"
      style={{ transitionDelay: `${delay}s` }}
      role="listitem"
      itemScope
      itemType="https://schema.org/Service"
    >
      <span className="block text-[12px] font-semibold tracking-[0.1em] mb-[26px] grad-text">
        {svc.num}
      </span>
      <div
        className="w-11 h-11 rounded-2xl mb-5 flex items-center justify-center flex-shrink-0"
        style={{
          background:
            "linear-gradient(135deg,rgba(155,92,246,0.1),rgba(6,182,212,0.1))",
        }}
      >
        {svc.icon}
      </div>
      <h3
        className="font-semibold mb-3 leading-[1.2]"
        style={{ fontFamily: "'Parkinsans', sans-serif", fontSize: "22px" }}
        itemProp="name"
      >
        {svc.title}
      </h3>
      <p
        className="text-[14px] text-[rgba(24,24,27,0.58)] leading-[1.75] mb-5 flex-1"
        itemProp="description"
      >
        {svc.desc}
      </p>
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {svc.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10.5px] font-semibold tracking-[0.08em] uppercase px-3 py-1 rounded-full border border-[rgba(24,24,27,0.12)] text-[rgba(24,24,27,0.58)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
