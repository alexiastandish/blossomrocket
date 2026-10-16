import { FeatureItem } from "@/components/FeatureGrid/FeatureGrid";

export const featureServices: FeatureItem[] = [
  {
    num: "01",
    title: "Brand Identity",
    desc: "Get a recognizable look your team can apply consistently everywhere — no more one-off logo files and guesswork.",
    href: "/services/brand-identity",
    featured: false,
    tags: ["Logo Systems", "Typography", "Color"],
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" stroke="#9b5cf6" strokeWidth="1.5" />
        <path
          d="M8 11h6M11 8v6"
          stroke="#06b6d4"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },

  {
    num: "02",
    title: "Brand Systems",
    desc: "Keep every team applying your brand the same way as you grow — one set of rules and assets, not five versions floating around.",
    href: "/services/brand-systems",
    featured: false,
    tags: ["Brand Guidelines", "Templates", "Asset Libraries"],
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
          stroke="#06b6d4"
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
          stroke="#9b5cf6"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },

  {
    num: "03",
    title: "Digital Design",
    desc: "Give customers a digital experience that actually feels like your brand — websites, interfaces, and the code behind them.",
    href: "/services/digital-design",
    featured: false,
    tags: ["Websites", "UI/UX", "Front-End Development"],
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="2"
          y="4"
          width="18"
          height="13"
          rx="2"
          stroke="#9b5cf6"
          strokeWidth="1.5"
        />
        <path
          d="M8 20h6M11 17v3"
          stroke="#06b6d4"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },

  {
    num: "04",
    title: "Marketing Assets",
    desc: "Stop rebuilding the same deck or social post from scratch — reusable templates for everything marketing sends out.",
    href: "/services/marketing-assets",
    featured: false,
    tags: ["Campaign Creative", "Social Templates", "Presentations"],
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
          height="12"
          rx="2"
          stroke="#9b5cf6"
          strokeWidth="1.5"
        />
        <path
          d="M7 9h8M7 12h5"
          stroke="#06b6d4"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },

  {
    num: "05",
    title: "Print & Environmental Design",
    desc: "Carry your brand into the physical world — signage, packaging, and print that looks like it belongs to you.",
    href: "/services/print-and-environmental-design",
    featured: false,
    tags: ["Print Collateral", "Packaging", "Signage"],
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
];
