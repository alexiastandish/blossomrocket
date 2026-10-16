import type { Metadata } from "next";

import Hero from "@/components/Hero";
import Marquee from "@/components/section/Marquee";

import CompanyStoresSection from "@/components/CompanyStoresSection";
import marqueeItems from "@/data/marquees/homepage.json";
import FAQSection from "@/components/faqs/FAQSection";
import homePageFAQs from "@/data/faqs/home.json";
import { CardCallout, CardList, SectionLayout } from "@/components/section";
import HomeHeroVideo from "@/components/HomeHeroVideo";
import { CTASlots } from "@/components/CTASlot";
import SelectedWork from "@/components/SelectedWork/SelectedWork";
import selectedWork from "@/data/selectedWork.json";
import FeatureGrid from "@/components/FeatureGrid/FeatureGrid";
import { featureServices } from "@/data/featureServices";
import {
  featureMerchandiseSolutions,
  featurePrimarySolutions,
} from "@/data/featureSolutions";
import FeaturedArticles from "@/components/FeaturedArticles/FeaturedArticles";

const PAGE_URL = "https://blossomrocket.studio";

export const metadata: Metadata = {
  title:
    "Blossom Rocket | Company Stores, Co-Branding & Branded Merchandise Programs",
  description:
    "Blossom Rocket helps organizations centralize and scale branded merchandise through on-demand Company Stores and Co-Branding programs powered by SplashBrands — no order minimums, no inventory, supported by in-house creative services.",
  keywords: [
    "Company Stores",
    "Branded Merchandise Company Stores",
    "Corporate Merchandise Stores",
    "Employee Merchandise Stores",
    "On-Demand Company Stores",
    "Co-Branding",
    "Co-Branded Merchandise",
    "Branded Merchandise Programs",
    "Promotional Products",
    "Corporate Merchandise Management",
    "Centralized Merchandise Ordering",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Blossom Rocket | Company Stores, Co-Branding & Branded Merchandise Programs",
    description:
      "Centralized, automated branded merchandise for teams, departments, and locations — Company Stores and Co-Branding programs powered by SplashBrands, supported by in-house creative services.",
    url: PAGE_URL,
    siteName: "Blossom Rocket",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Hero
        pillItems={[
          "Company Stores",
          "Co-Branding",
          "Swag Storefronts",
          "No Minimums",
          "No Inventory",
        ]}
        heading={
          <>
            Branded Merchandise,{" "}
            <em className="grad-text not-italic">Centralized and On Demand.</em>
          </>
        }
        body="Blossom Rocket builds Company Stores, Co-Branding programs, and Swag Storefronts that give marketing, brand, communications, procurement, and operations teams a place to order approved branded merchandise. Thousands of pre-approved products, no order minimums, no inventory to buy or hold, and typical shipping in 2 to 5 days — powered through SplashBrands, with in-house creative services on hand when the brand itself needs building."
        ctaSlot={
          <CTASlots
            ctas={[
              {
                label: "Explore Company Stores  🚀",
                variant: "primary",
                href: "/solutions/company-stores",
              },
              {
                label: "Explore Co-Branding",
                href: "/solutions/co-branding",
                variant: "outline",
              },
            ]}
          />
        }
      />
      <Marquee items={marqueeItems} />

      {/* ── Section 2: Primary Solutions ── */}
      <FeatureGrid
        theme="brand"
        columns={3}
        eyebrow="Primary Solutions"
        heading={
          <>
            Three Ways to Put Branded Merchandise{" "}
            <em className="grad-text not-italic">On Autopilot.</em>
          </>
        }
        subtext="Company Stores centralize merchandise ordering across an entire organization. Co-Branding keeps merchandise consistent when it has to carry more than one approved mark. Swag Storefronts give a single brand the same self-serve access without a full Company Store. All three run on demand through SplashBrands."
        items={featurePrimarySolutions}
        id="home--primary-solutions"
      />

      {/* ── Section 2b: What a Company Store actually is ── */}
      <CompanyStoresSection />

      {/* ── Section 3: The Blossom Rocket Difference ── */}
      <SectionLayout
        id="home--the-blossom-rocket-difference"
        theme="brandSoft"
        eyebrow="The Blossom Rocket Difference"
        cols={[3, 5]}
        ctaSlot={
          <CTASlots
            theme="neutral"
            ctas={[
              {
                label: "Explore Company Stores",
                href: "/solutions/company-stores",
                variant: "primary",
              },
              {
                label: "Get In Touch",
                variant: "outline",
              },
            ]}
          />
        }
        heading={
          <>
            Not a Promo Distributor.{" "}
            <em className="grad-text not-italic">Not a Design Agency.</em>
          </>
        }
        subtext="Traditional promotional product distributors sell merchandise order by order, with minimums, setup charges, and inventory you buy up front. Creative agencies stop at logos and guidelines. Blossom Rocket operates the ordering environment itself — approved products, approved artwork, and automated fulfillment — and brings the creative capability to define what 'approved' means in the first place."
        schemaItems={[
          { topic: "Centralized Merchandise Ordering" },
          { topic: "Brand-Controlled Logos, Colors & Decoration Methods" },
          { topic: "On-Demand Production" },
          { topic: "No Order Minimums" },
          { topic: "No Inventory Investment" },
          { topic: "Fulfillment in 2 to 5 Days" },
          { topic: "Reduced Administrative Work" },
        ]}
        pageUrl={PAGE_URL}
      >
        <CardList
          heading="Operational Control"
          items={[
            { topic: "Centralized Ordering" },
            { topic: "Teams, Departments & Locations" },
            { topic: "Reduced Vendor Coordination" },
            { topic: "Less Manual Ordering & Admin Work" },
          ]}
        />{" "}
        <CardList
          heading="Production & Fulfillment"
          items={[
            { topic: "On-Demand Production" },
            { topic: "No Order Minimums" },
            { topic: "No Inventory Investment" },
            { topic: "One Item or Thousands" },
            { topic: "Typically Ships in 2 to 5 Days" },
          ]}
        />{" "}
        <CardList
          heading="Brand Control"
          items={[
            { topic: "Pre-Approved Product Catalog" },
            { topic: "Approved Logos & Logo Variations" },
            { topic: "Approved Colors & Decoration Methods" },
          ]}
        />
        <CardCallout
          heading="Powered Through SplashBrands"
          body="Blossom Rocket is the customer-facing partner for these programs — scoping the program, configuring the brand, and supporting the people who order from it. SplashBrands provides the underlying company store platform, in-house decoration, and fulfillment operations that make on-demand production and 2-to-5-day shipping possible."
        />
        <CardCallout
          heading="Physical Merchandise Standards"
          body="Blossom Rocket extends brand standards beyond digital assets to define how a brand should appear on physical products and materials. Standards can include approved apparel, logo placement, embroidery, print methods, signage, packaging, promotional products, and trade show displays."
        />
      </SectionLayout>

      {/* ── Section 4: Merchandise Solutions ── */}
      <FeatureGrid
        theme="neutral"
        columns={2}
        eyebrow="Merchandise Solutions"
        heading={
          <>
            More Ways to Get Branded Product Into{" "}
            <em className="grad-text not-italic">People&apos;s Hands.</em>
          </>
        }
        subtext="Standalone merchandise and personalized kits cover one-off campaigns, events, onboarding, and gifting — produced on demand through the same supply chain as a storefront, without needing one."
        items={featureMerchandiseSolutions}
        id="home--merchandise-solutions"
      />

      {/* ── Section 5: Creative Services ── */}
      <FeatureGrid
        theme="light"
        eyebrow="Creative Services"
        heading={
          <>
            The In-House Creative That Makes{" "}
            <em className="grad-text not-italic">&ldquo;On Brand&rdquo;</em>{" "}
            Mean Something.
          </>
        }
        subtext="Brand-controlled merchandise only works when the brand is defined. Blossom Rocket's creative team establishes identity, standards, and assets — available as part of a merchandise program or entirely on their own."
        items={featureServices}
        id="home--feature-services"
      />

      {/* ── Section 5b: Establish it, then deploy it ── */}
      <SectionLayout
        id="home--what-we-do"
        theme="brand"
        mobileOrder="left-first"
        eyebrow="What We Do"
        heading={
          <>
            Establish the Brand. Then{" "}
            <em className="grad-text not-italic">Deploy It Everywhere.</em>
          </>
        }
        subtext="Most organizations hire one firm to design the brand and a different vendor to produce the merchandise — which is exactly where consistency gets lost. Blossom Rocket does both: defining visual identity, standards, and assets, then carrying that identity into physical products, digital experiences, and the company stores people order from. Either half can be engaged on its own."
        ctas={[
          {
            label: "Explore Merchandise Solutions",
            href: "/solutions",
            variant: "primary",
          },
          {
            label: "Explore Creative Services",
            href: "/services",
            variant: "outline",
          },
        ]}
        schemaItems={[
          { topic: "Company Stores" },
          { topic: "Co-Branding" },
          { topic: "Merchandise & Promotional Products" },
          { topic: "On-Demand Kits" },
          { topic: "Brand Identity" },
          { topic: "Brand Systems" },
          { topic: "Digital Design" },
          { topic: "Marketing Assets" },
          { topic: "Print & Environmental Design" },
        ]}
        pageUrl={PAGE_URL}
      >
        <div>
          <HomeHeroVideo />
        </div>
      </SectionLayout>

      {/* ── Section 6: Selected Work ── */}
      <SectionLayout
        id="home--selected-work"
        theme="light"
        eyebrow="Selected Work"
        ctaSlot={
          <CTASlots
            theme="dark"
            ctas={[
              {
                label: "View All Our Work",
                href: "/work",
                variant: "primary",
              },
              {
                label: "Get In Touch",
                variant: "outline",
              },
            ]}
          />
        }
        heading={
          <>
            See the System in <em className="grad-text not-italic">Action.</em>
          </>
        }
        subtext="Explore selected Blossom Rocket projects that connect brand identity, digital design, marketing assets, print, merchandise, and physical brand experiences."
        pageUrl={PAGE_URL}
      >
        <SelectedWork items={selectedWork} />
      </SectionLayout>

      {/* ── Section 7: FAQs ── */}
      <FAQSection groups={homePageFAQs} theme="dark" pageUrl={PAGE_URL} />

      {/* ── Section 8: Insights & Resources ── */}
      <FeaturedArticles />
    </>
  );
}
