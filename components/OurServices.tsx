import SectionLabel from "./SectionLabel";

type Service = {
  num: string;
  title: string;
  desc: string;
  tags: string[];
  icon: React.ReactNode;
  partnerNote?: string;
  featured?: boolean;
};

const services: Service[] = [
  {
    num: "01",
    title: "Brand Identity",
    desc: "The visual representation of your business — creating recognition, trust, and consistency across every customer touchpoint.",
    tags: [
      "Visual Identity",
      "Logo Systems",
      "Typography",
      "Color Palettes",
      "Brand Voice",
      "Graphic Elements",
      "Iconography",
    ],
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
    title: "Brand Systems",
    desc: "A framework that defines how your business applies its brand across digital and physical experiences — reducing confusion and duplication.",
    tags: [
      "Brand Guidelines",
      "Brand Standards",
      "Asset Libraries",
      "Design Systems",
      "Templates",
      "Pattern Systems",
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
          width="7"
          height="7"
          rx="1.5"
          stroke="#9b5cf6"
          strokeWidth="1.5"
        />
        <rect
          x="12"
          y="3"
          width="7"
          height="7"
          rx="1.5"
          stroke="#9b5cf6"
          strokeWidth="1.5"
        />
        <rect
          x="3"
          y="12"
          width="7"
          height="7"
          rx="1.5"
          stroke="#06b6d4"
          strokeWidth="1.5"
        />
        <rect
          x="12"
          y="12"
          width="7"
          height="7"
          rx="1.5"
          stroke="#06b6d4"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Digital Design",
    desc: "Branded digital experiences that align with brand standards while supporting usability, scalability, and growth.",
    tags: ["Web Design", "Front-end Development", "UI Libraries"],
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
    num: "04",
    title: "Marketing Assets",
    desc: "Assets that support marketing, sales, and promotional initiatives — maintaining consistent communication across channels and campaigns.",
    tags: [
      "Social Media Content & Templates",
      "Event Materials",
      "Trade Show Materials",
      "Presentation Templates",
      "Email Graphics",
      "Advertising Assets",
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
    num: "05",
    title: "Print & Environmental",
    desc: "Branding extended into physical experiences — cohesive across offices, events, retail spaces, and customer interactions.",
    tags: [
      "Business Cards",
      "Brochures",
      "Catalogs",
      "Packaging",
      "Signage",
      "Environmental Graphics",
    ],
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
    num: "06",
    title: "Merchandise & Promotional Products",
    desc: "Branded merchandise that strengthens awareness, engagement, company culture, and customer relationships.",
    tags: [
      "Apparel",
      "Event Merchandise",
      "Corporate Gifting",
      "Merchandise Design",
    ],
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
    num: "07",
    title: "Company Stores",
    desc: "Online company stores that make approved branded merchandise accessible to employees, customers, and partners — while maintaining brand consistency at every order.",
    tags: [
      "Approved Products",
      "No Order Minimums",
      "No Holding Inventory",
      "On Demand Ordering",
      "In-House Manufacturing",
    ],
    partnerNote: "SplashBrands",
    featured: true,
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
  {
    num: "08",
    title: "Search Everything Optimization Consulting",
    desc: "Helping businesses improve discoverability across modern search platforms — making your brand easier to find, understand, and trust online.",
    tags: [
      "AI Search Experiences",
      "Knowledge Graphs",
      "Content Writing Prompts",
      "Page Structure Strategy",
      "Semantic Content Checklist",
      "Ranking & Performance Analysis",
    ],
    featured: true,
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="8.5" cy="10" r="5" stroke="#9b5cf6" strokeWidth="1.5" />
        <line
          x1="12.5"
          y1="14"
          x2="17"
          y2="18.5"
          stroke="#9b5cf6"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="17"
          y1="2.5"
          x2="17"
          y2="6.5"
          stroke="#06b6d4"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="15"
          y1="4.5"
          x2="19"
          y2="4.5"
          stroke="#06b6d4"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="20"
          y1="8"
          x2="20"
          y2="10.5"
          stroke="#06b6d4"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <line
          x1="18.75"
          y1="9.25"
          x2="21.25"
          y2="9.25"
          stroke="#06b6d4"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function OurServices() {
  return (
    <section
      id="services"
      className="bg-[#fafaf8]"
      style={{ padding: "clamp(80px,11vw,160px) clamp(20px,5vw,60px)" }}
      aria-labelledby="svc-h"
    >
      <div className="flex justify-between items-end flex-wrap gap-7 mb-[52px]">
        <div>
          <SectionLabel text="Our Services" />
          <h2
            id="svc-h"
            className="rv font-semibold leading-[1.06] tracking-[-0.02em] h2"
          >
            Everything You Need to
            <br />
            <em className="grad-text not-italic">Build, Launch & Scale</em>
            <br />
            Your Brand.
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

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-[rgba(24,24,27,0.10)]"
        role="list"
      >
        {services.map((svc, i) => (
          <ServiceCard key={svc.num} svc={svc} delay={i * 0.05} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ svc, delay }: { svc: Service; delay: number }) {
  const { featured } = svc;

  return (
    <div
      className="svc-grad-bar relative border-r border-b border-[rgba(24,24,27,0.10)] p-10 transition-colors duration-300 overflow-hidden rv flex flex-col"
      style={{
        transitionDelay: `${delay}s`,
        background: featured
          ? "linear-gradient(135deg, rgba(155,92,246,0.03) 0%, rgba(6,182,212,0.02) 100%)"
          : "white",
      }}
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
            "linear-gradient(135deg, rgba(155,92,246,0.10), rgba(6,182,212,0.10))",
        }}
      >
        {svc.icon}
      </div>

      <h3
        className="font-semibold mb-3 leading-[1.2] text-[rgba(24,24,27,0.92)]"
        style={{ fontFamily: "'Parkinsans', sans-serif", fontSize: "22px" }}
        itemProp="name"
      >
        {svc.title}
      </h3>

      <p
        className="text-[14px] leading-[1.75] mb-5 flex-1 text-[rgba(24,24,27,0.58)]"
        itemProp="description"
      >
        {svc.desc}
      </p>

      {svc.partnerNote && (
        <p className="text-[12px] mb-4 text-[rgba(24,24,27,0.40)]">
          Powered through{" "}
          <span className="font-medium" style={{ color: "#9b5cf6" }}>
            {svc.partnerNote}
          </span>
        </p>
      )}

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
