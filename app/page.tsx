import type { Metadata } from "next";

import Hero from "@/components/Hero";
import Marquee from "@/components/section/Marquee";

import CompanyStoresSection from "@/components/CompanyStoresSection";
import marqueeItems from "@/data/marquees/homepage.json";
import FAQSection from "@/components/faqs/FAQSection";
import homePageFAQs from "@/data/faqs/home.json";
import { CardCallout, SectionLayout } from "@/components/section";
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
            <em className="grad-text not-italic">Without the Busywork.</em>
          </>
        }
        body="No more spreadsheets, vendor chasing, or guessing what's on-brand. Blossom Rocket gives your team one place to order approved merchandise — any amount, shipped in days — powered through SplashBrands."
        ctaSlot={
          <CTASlots
            ctas={[
              {
                label: "Get Started  🚀",
                variant: "primary",
              },
              {
                label: "See How It Works",
                href: "/solutions",
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
        subtext="Company Stores centralize ordering for your whole organization. Co-Branding keeps multi-logo merchandise on-brand. Swag Storefronts give one brand the same self-serve simplicity. All three run on demand through SplashBrands."
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
        subtext="Traditional promotional product distributors sell merchandise order by order, with minimums and upfront inventory. Creative agencies stop at logos and guidelines. Blossom Rocket runs the ordering environment itself, so what's “approved” actually ships."
        schemaItems={[
          { topic: "Centralized Ordering" },
          { topic: "Nothing to Stock" },
          { topic: "Always On-Brand" },
        ]}
        pageUrl={PAGE_URL}
      >
        <CardCallout
          heading="One Place to Order."
          body="Every team, department, and location orders from the same approved catalog — so admin work and vendor back-and-forth disappear."
        />
        <CardCallout
          heading="Nothing to Stock."
          body="Products are made after you order, one at a time or thousands — no minimums, no inventory to buy or store, shipped in 2 to 5 days."
        />
        <CardCallout
          heading="Always On-Brand."
          body="Only approved logos, colors, and products make it into the catalog, so there's nothing for anyone to get wrong."
        />
        <CardCallout
          heading="Powered Through SplashBrands."
          body="Blossom Rocket configures the brand and supports your team; SplashBrands' platform and in-house production make the on-demand speed possible."
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
        subtext="Most companies hire one firm to design the brand and another to produce the merchandise — which is exactly where consistency breaks down. Blossom Rocket does both, so the brand you design is the brand that ships. Either half works on its own, too."
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
