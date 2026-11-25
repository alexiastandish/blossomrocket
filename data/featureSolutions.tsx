import { FeatureItem } from "@/components/FeatureGrid/FeatureGrid";

/** Flagship offerings. Rendered as the homepage's most prominent service
 *  section, above the secondary merchandise and creative sections. */
export const featurePrimarySolutions: FeatureItem[] = [
  {
    num: "01",
    title: "Company Stores",
    desc: "Give every team, department, and location one place to order approved merchandise — no minimums, no inventory to buy, shipped in days.",
    href: "/solutions/company-stores",
    featured: true,
    partnerNote: "Powered through SplashBrands",
    tags: ["No Order Minimums", "Nothing to Stock", "From $10K/Year"],
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
    num: "02",
    title: "Co-Branding",
    desc: "Keep every partner, division, and location on-brand — even when more than one logo ends up on the same product.",
    href: "/solutions/co-branding",
    featured: true,
    partnerNote: "Powered through SplashBrands",
    tags: ["Multiple Approved Logos", "Always On-Brand", "$200/Month"],
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
    num: "03",
    title: "Swag Storefronts",
    desc: "Give your brand its own always-on storefront — without the commitment of a full Company Store.",
    href: "/solutions/swag-storefronts",
    featured: true,
    partnerNote: "Powered through SplashBrands",
    tags: ["Self-Serve Setup", "Always-On Access", "$200/Month"],
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
];

/** Supporting merchandise solutions — visible, but deliberately ranked
 *  below Company Stores, Co-Branding, and Swag Storefronts. */
export const featureMerchandiseSolutions: FeatureItem[] = [
  {
    num: "01",
    title: "Merchandise & Promotional Products",
    desc: "Get your brand onto real products — apparel, gifts, and giveaways — for a single campaign, event, or occasion.",
    href: "/solutions/merchandise-and-promotional-products",
    featured: false,
    tags: ["Branded Apparel", "Corporate Gifting", "Custom Merchandise"],
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
    desc: "Send a polished, personalized box — merch, print, and packaging already put together — for onboarding, sales, or events.",
    href: "/solutions/on-demand-kits",
    featured: false,
    tags: ["Onboarding Kits", "Personalized Print", "Ready to Ship"],
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
];
