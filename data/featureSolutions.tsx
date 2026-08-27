import { FeatureItem } from "@/components/FeatureGrid/FeatureGrid";

export const featureSolutions: FeatureItem[] = [
  {
    num: "01",
    title: "Merchandise & Promotional Products",
    desc: "Branded apparel, promotional products, gifting, and custom merchandise designed to extend your brand into tangible experiences.",
    href: "/solutions/merchandise-and-promotional-products",
    featured: false,
    tags: [
      "Branded Apparel",
      "Promotional Products",
      "Corporate Gifting",
      "Event Merchandise",
      "Custom Merchandise",
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
          d="M6 2l-3 5h16l-3-5H6z"
          stroke="#9b5cf6"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <rect
          x="3"
          y="7"
          width="16"
          height="13"
          rx="1.5"
          stroke="#06b6d4"
          strokeWidth="1.5"
        />
        <path d="M9 7v4a2 2 0 004 0V7" stroke="#9b5cf6" strokeWidth="1.5" />
      </svg>
    ),
  },

  {
    num: "02",
    title: "On-Demand Kits",
    desc: "Personalized branded kits that combine merchandise, print, packaging, and fulfillment for onboarding, customers, sales programs, partners, and events.",
    href: "/solutions/on-demand-kits",
    featured: false,
    tags: [
      "Onboarding Kits",
      "Customer Kits",
      "Sales Programs",
      "Partner Kits",
      "Event Kits",
      "Personalized Print",
      "Coordinated Packaging",
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
          d="M4 7l7-4 7 4-7 4-7-4z"
          stroke="#9b5cf6"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M4 7v8l7 4 7-4V7M11 11v8"
          stroke="#06b6d4"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },

  {
    num: "03",
    title: "Swag Storefronts",
    desc: "Streamlined online storefronts that give businesses recurring access to curated, pre-approved branded merchandise without rebuilding each order from scratch.",
    href: "/solutions/swag-storefronts",
    featured: false,
    tags: [
      "Curated Merchandise",
      "Approved Products",
      "Approved Artwork",
      "On-Demand Ordering",
      "Recurring Merchandise Access",
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
          d="M4 8h14l-1-4H5L4 8z"
          stroke="#9b5cf6"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M5 8v10h12V8M8 18v-5h6v5"
          stroke="#06b6d4"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },

  {
    num: "04",
    title: "Company Stores",
    desc: "Centralized online ordering environments that turn approved merchandise, artwork, and brand applications into scalable programs for teams, locations, and organizations.",
    href: "/solutions/company-stores",
    featured: true,
    partnerNote: "Powered through SplashBrands",
    tags: [
      "Centralized Ordering",
      "Approved Merchandise",
      "Brand-Controlled Applications",
      "On-Demand Production",
      "Fulfillment",
      "Reduced Inventory",
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
