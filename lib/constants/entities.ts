/**
 * Canonical entity identifiers and facts shared by the site-wide JSON-LD
 * (app/layout.tsx), the About page, and article authorship.
 *
 * Only verified facts belong here. Do not add a founding date, address,
 * ratings, or company size until they are confirmed.
 */

export const SITE_URL = "https://blossomrocket.studio";

export const WEBSITE_ID = `${SITE_URL}/#website`;
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const FOUNDER_ID = `${SITE_URL}/#founder`;
export const SPLASHBRANDS_ID = "https://splashbrands.com/#organization";

export const CONTACT_EMAIL = "alexia@blossomrocket.studio";

export const FOUNDER = {
  name: "Alexia Standish",
  jobTitle: "Founder",
  shortBio:
    "Alexia Standish is the founder of Blossom Rocket. She combines a degree in Graphic Design with years of full-stack software engineering, including Tapcart from 2019 to 2025, to help organizations build brands that are easier to manage at scale.",
  linkedin: "https://www.linkedin.com/in/alexiastandish/",
  knowsAbout: [
    "Brand Identity",
    "Brand Systems",
    "Graphic Design",
    "UI/UX Design",
    "Design Systems",
    "Component Libraries",
    "Full-Stack Software Engineering",
    "E-Commerce",
    "Company Stores",
    "Branded Merchandise Programs",
  ],
} as const;

/** Person entity for the founder. Rendered site-wide so every page can
 *  reference it by @id (Organization.founder, Article.author, AboutPage). */
export const founderSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": FOUNDER_ID,
  name: FOUNDER.name,
  jobTitle: FOUNDER.jobTitle,
  url: `${SITE_URL}/about`,
  description: FOUNDER.shortBio,
  worksFor: { "@id": ORGANIZATION_ID },
  knowsAbout: [...FOUNDER.knowsAbout],
  sameAs: [FOUNDER.linkedin],
};

/** Default social share image for pages without their own artwork. */
export const DEFAULT_OG_IMAGE = {
  url: `${SITE_URL}/logo.jpg`,
  width: 1920,
  height: 1080,
  alt: "Blossom Rocket",
};
