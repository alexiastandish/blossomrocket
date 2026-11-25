/**
 * Existing portfolio and merchandise imagery reused on the About page.
 * Every source below is already served elsewhere on the site
 * (data/work.json, CompanyStoresSection, brand-identity page).
 *
 * Pending originals (flagged for review, not yet in the repository):
 * - Founder portrait (high resolution)
 * - Company store storefront example (Arrow Electronics crop)
 * - Merch Champions before/after logo artwork
 * - NextUp "Premium Embroidered Logo Gift Set" mockup
 */

const cf = (id: string) =>
  `https://imagedelivery.net/phVukYz6oCUHQR4c37ZNwQ/${id}/public`;

export type AboutImage = {
  src: string;
  alt: string;
};

export const aboutImages = {
  ivoryPromo: {
    src: cf("2922328a-6303-4a36-5d2f-96f847d54200"),
    alt: "Ivory Blossom Rocket merchandise composition with a beanie, apparel, and tote bag",
  },
  compassionBrandSystem: {
    src: cf("898f4d03-dafb-4cfe-85d0-140341352400"),
    alt: "Compassion For Kids brand system pages showing logo, color, and typography standards",
  },
  compassionPromo: {
    src: cf("d57af26b-1df4-4f66-8eea-261deb5b1c00"),
    alt: "Compassion For Kids branded promotional product",
  },
  meditationsMug: {
    src: cf("6a91f29e-b227-4fb6-1789-1cccb8370b00"),
    alt: "Modern Meditations branded mug promotional product",
  },
  meditationsStyleGuide: {
    src: cf("1e2de879-c925-486c-c740-8cf46e0f6e00"),
    alt: "Modern Meditations style guide pages",
  },
  pullerBranding: {
    src: cf("c2224266-1b55-4ac3-a2e4-1c91ddd50600"),
    alt: "Puller AI brand system and digital design",
  },
  almetaWeb: {
    src: cf("50be148f-5d88-4e4e-b338-b54239ff4e00"),
    alt: "Almeta Magazine website design",
  },
  leFronkBackdrop: {
    src: cf("d4976701-58c0-457c-d7db-84801c00d500"),
    alt: "Le Fronk LED stage backdrop designed for a festival performance",
  },
  convergenceDeck: {
    src: cf("997fc2ba-afe9-495b-ee0b-58b09ca84600"),
    alt: "Convergence Capital investor presentation slides",
  },
  beatsLookbook: {
    src: cf("0db02cf8-68a9-460c-dac8-732fe8a78600"),
    alt: "Beats by Dre 2016 identity lookbook cover",
  },
} satisfies Record<string, AboutImage>;
