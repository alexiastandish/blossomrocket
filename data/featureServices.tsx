import { FeatureItem } from "@/components/FeatureGrid/FeatureGrid";

export const featureServices: FeatureItem[] = [
  {
    num: "01",
    title: "Brand Identity",
    desc: "The visual foundation of your brand — creating a recognizable identity that can be applied consistently across digital and physical touchpoints.",
    href: "/services/brand-identity",
    featured: false,
    tags: [
      "Visual Identity",
      "Logo Systems",
      "Typography",
      "Color",
      "Graphic Elements",
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
    desc: "The standards, rules, templates, and approved assets that define how your brand should be applied consistently as it grows.",
    href: "/services/brand-systems",
    featured: false,
    tags: [
      "Brand Guidelines",
      "Application Standards",
      "Templates",
      "Asset Libraries",
      "Design Systems",
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
    desc: "Branded digital experiences designed to extend your Brand System across websites, interfaces, reusable components, and front-end applications.",
    href: "/services/digital-design",
    featured: false,
    tags: [
      "Websites",
      "UI/UX",
      "Component Libraries",
      "Front-End Development",
      "Branded Digital Experiences",
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
    desc: "Reusable branded assets for campaigns, presentations, social media, sales materials, and other recurring marketing needs.",
    href: "/services/marketing-assets",
    featured: false,
    tags: [
      "Campaign Creative",
      "Social Media Templates",
      "Presentation Templates",
      "Digital Campaign Assets",
      "Brochures",
      "Email Signatures",
      "Reusable Marketing Templates",
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
    title: "Print & Environmental",
    desc: "Physical brand applications that extend established standards into print, packaging, signage, displays, and branded environments.",
    href: "/services/print-environmental",
    featured: false,
    tags: [
      "Print Collateral",
      "Packaging",
      "Signage",
      "Displays",
      "Environmental Graphics",
      "Physical Brand Applications",
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
];
