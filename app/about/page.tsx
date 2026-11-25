import type { Metadata } from "next";
import { SectionLayout, CardList } from "@/components/section";
import FAQSection from "@/components/faqs/FAQSection";
import AboutHero from "@/components/about/AboutHero";
import AboutDisciplines from "@/components/about/AboutDisciplines";
import AboutFounder from "@/components/about/AboutFounder";
import AboutPartnership from "@/components/about/AboutPartnership";
import AboutCapabilities from "@/components/about/AboutCapabilities";
import AboutSelectedWork from "@/components/about/AboutSelectedWork";
import AboutAudience from "@/components/about/AboutAudience";
import AboutCTA from "@/components/about/AboutCTA";
import AboutBenefits from "@/components/about/AboutBenefits";
import rawFaqs from "@/data/faqs/about.json";
import type { FAQGroup } from "@/lib/types/faqs";
import {
  FOUNDER_ID,
  ORGANIZATION_ID,
  SITE_URL,
  SPLASHBRANDS_ID,
  WEBSITE_ID,
} from "@/lib/constants/entities";

const faqs = rawFaqs as FAQGroup[];

const PAGE_URL = `${SITE_URL}/about`;
const TITLE = "About Blossom Rocket | Creative, Technology & Merchandise";
const DESCRIPTION =
  "Meet Blossom Rocket: a creative, technology-enabled merchandise partner for company stores, co-branding, brand systems, and on-demand merchandise.";

// ─── Page metadata ────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "About Blossom Rocket",
    "Alexia Standish",
    "Branded Merchandise Management",
    "On-Demand Branded Merchandise",
    "Company Store Solutions",
    "Co-Branded Merchandise",
    "Brand Systems",
    "Brand Consistency",
    "Corporate Merchandise Programs",
    "SplashBrands",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Blossom Rocket",
    type: "website",
  },
};

// ─── Schema ───────────────────────────────────────────────────────────────────
// Organization, founder Person, and SplashBrands are defined once in
// app/layout.tsx; this page references them by @id.

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: TITLE,
  description: DESCRIPTION,
  inLanguage: "en-US",
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": ORGANIZATION_ID },
  mainEntity: { "@id": ORGANIZATION_ID },
  mentions: [{ "@id": FOUNDER_ID }, { "@id": SPLASHBRANDS_ID }],
  breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "About", item: PAGE_URL },
  ],
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      <script
        id="schema-about-page"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── 1. Hero ── */}
      <AboutHero />

      {/* ── 2. Why Blossom Rocket exists — SectionLayout (split) + CardList ── */}
      <SectionLayout
        id="why-blossom-rocket"
        theme="light"
        eyebrow="Why Blossom Rocket Exists"
        heading={
          <>
            Creating a brand is one project.{" "}
            <em className="grad-text not-italic">
              Running it is every day after.
            </em>
          </>
        }
        subtext="As organizations grow, locations, departments, partners, and vendors start operating on their own. Logos drift, purchasing fragments, and the same design requests come back every quarter. Blossom Rocket closes the gap between creating a brand and operating it across an entire organization, because a brand should work consistently in the real world, not only in a guidelines document."
        cols={[1, 1]}
        stickyRight={false}
      >
        <CardList
          heading="What brand drift looks like:"
          items={[
            { topic: "Inconsistent logo usage across products", icon: "x" },
            { topic: "Purchasing split across too many vendors", icon: "x" },
            { topic: "Bulk minimums and excess inventory", icon: "x" },
            { topic: "Repeated design requests and manual approvals", icon: "x" },
            { topic: "Slow, manual merchandise distribution", icon: "x" },
            { topic: "Little visibility into merchandise spending", icon: "x" },
            { topic: "Multiple brands or logos, no single standard", icon: "x" },
            {
              topic: "Digital and physical experiences that don't match",
              icon: "x",
            },
          ]}
        />
      </SectionLayout>

      {/* ── 3. Creative · Technology · Execution ── */}
      <AboutDisciplines />

      {/* ── 4. Founder ── */}
      <AboutFounder />

      {/* ── 5. On-demand merchandise benefits ── */}
      <AboutBenefits />

      {/* ── 6. SplashBrands partnership ── */}
      <AboutPartnership />

      {/* ── 7. Capabilities ── */}
      <AboutCapabilities />

      {/* ── 8. Selected work ── */}
      <AboutSelectedWork />

      {/* ── 9. Who we work with ── */}
      <AboutAudience />

      {/* ── FAQ ── */}
      <FAQSection groups={faqs} theme="light" pageUrl={PAGE_URL} />

      {/* ── 10. Final CTA ── */}
      <AboutCTA />
    </>
  );
}
