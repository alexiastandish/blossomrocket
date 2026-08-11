import type { Metadata } from "next";
import Script from "next/script";
import Hero from "@/components/Hero";

import CardGrid from "@/components/section/CardGrid";
import CardList from "@/components/section/CardList";
import { SectionLayout } from "@/components/section";
import FAQSection from "@/components/faqs/FAQSection";
import rawFaqs from "@/data/faqs/solutions/swag-storefronts.json";
import type { FAQGroup } from "@/lib/types/faqs";
import { CTASlots } from "@/components/CTASlot";
import { CalendlyButton } from "@/components/CalendlyButton";
import CentralizeLogoFiles from "@/components/svgs/CentralizeLogoFiles";
import MatchBrandColors from "@/components/svgs/MatchBrandColors";
import MatchLogoColors from "@/components/svgs/MatchLogoColors";
import DirectAccessMerch from "@/components/svgs/DirectAccessMerch";
import ReduceRepeatedDecisions from "@/components/svgs/ReduceRepeatedDecisions";
import ConsistentBrandingProducts from "@/components/svgs/ConsistentBrandingProducts";
import SectionItemList from "@/components/section/ItemList";
import CardComparison from "@/components/section/CardComparison";

const faqs = rawFaqs as FAQGroup[];

// ─── Page metadata ────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Swag Storefronts — Blossom Rocket",
  description: "",
  keywords: [], // TODO
  openGraph: {
    title: "Swag Storefronts — Blossom Rocket",
    description: "",
    url: "https://blossomrocke.studio/services/swag-storefronts",
    siteName: "Blossom Rocket",
    type: "website",
  },
};

// ─── Schema ───────────────────────────────────────────────────────────────────

const PAGE_URL = "https://blossomrocke.studio/services/swag-storefronts";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}/#service`,
  name: "Swag Storefronts",
  url: PAGE_URL,
  provider: {
    "@type": "Organization",
    name: "Blossom Rocket",
    url: "https://blossomrocke.studio",
  },
  description:
    "Blossom Rocket helps businesses implement Swag Storefront solutions through SplashBrands that simplify ordering, improve brand consistency, and support scalable merchandise programs.",
  serviceType: "Swag Storefronts & Branded Merchandise Management",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Swag Storefront Solutions",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Multiple Logo Variations" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Brand-Controlled Product Colors",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Instant Shopping Access" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Extensive Product Selection",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "$200/Month" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Recognition & Reward Programs",
        },
      },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://blossomrocke.studio",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://blossomrocke.studio/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Swag Storefronts",
      item: PAGE_URL,
    },
  ],
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SwagStorefronts() {
  return (
    <>
      <Script
        id="schema-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div>
        {/* ── Section 1: Hero (light) ── */}
        <Hero
          theme="light"
          pillItems={[
            "Multiple Logo Variations",
            "Brand-Controlled Colors",
            "Instant Shopping Access",
            "Extensive Product Selection",
            "$200/Month",
          ]}
          heading={
            <>
              Your Own On-Branded Storefront{" "}
              <em className="grad-text not-italic">
                Without the Company Store Commitment.
              </em>
            </>
          }
          body={
            <>
              Blossom Rocket Swag Storefronts give growing businesses a simpler
              way to access branded apparel and promotional products through a
              dedicated storefront powered by SplashBrands. Businesses can
              upload approved logo variations, select product colors that align
              with their brand, define how each logo should appear across those
              colors, and create a storefront where branded products are ready
              to shop.
            </>
          }
          ctaSlot={
            <CTASlots
              theme="light"
              ctas={[
                {
                  label: "Explore Swag Storefronts With SplashBrands",
                  href: "https://splashbrands.com/", // TODO
                  variant: "primary",
                },
              ]}
            >
              <CalendlyButton theme="light">Talk With an Expert</CalendlyButton>
            </CTASlots>
          }
        />

        {/* ── Section 2: Why Swag Storefronts
            SectionLayout (stacked) + CardGrid (4 cols) ── */}
        <SectionLayout
          id="why-dswag-storefronts"
          theme="brand"
          layout="stacked"
          eyebrow="Why Swag Storefronts"
          heading={
            <>
              Branded Merchandising Made{" "}
              <em className="grad-text not-italic">
                Simple, Seamless, & Speedy.
              </em>
            </>
          }
          subtext={
            "Blossom Rocket Swag Storefronts give businesses a repeatable way to order branded apparel and promotional products using approved logos, brand colors, and product selections. Once the brand setup is complete, users can shop pre-configured branded products without reselecting logo files, product colors, and logo treatments for every\u00A0order.\n\nSwag Storefronts help businesses:"
          }
          pageUrl={PAGE_URL}
          schemaItems={[
            { topic: "Centralize approved logo files and logo variations" },
            { topic: "Match merchandise to brand-appropriate product colors" },
            {
              topic:
                "Match approved logo treatments to light and dark product colors",
            },
            {
              topic:
                "Give users direct access to branded apparel and promotional products",
            },
            {
              topic:
                "Reduce repeated brand decisions across recurring merchandise orders",
            },
            {
              topic:
                "Maintain more consistent branding across products and purchases",
            },
          ]}
        >
          <CardGrid
            columns={4}
            items={[
              {
                topic: "Centralize approved logo files and logo variations",
                image: <CentralizeLogoFiles />,
              },
              {
                topic: "Match merchandise to brand-appropriate product colors",
                image: <MatchBrandColors />,
              },
              {
                topic:
                  "Match approved logo treatments to light and dark product colors",
                image: <MatchLogoColors />,
              },
              {
                topic:
                  "Give users direct access to branded apparel and promotional products",
                image: <DirectAccessMerch />,
              },
              {
                topic:
                  "Reduce repeated brand decisions across recurring merchandise orders",
                image: <ReduceRepeatedDecisions />,
              },
              {
                topic:
                  "Maintain more consistent branding across products and purchases",
                image: <ConsistentBrandingProducts />,
              },
            ]}
          />
        </SectionLayout>

        {/* ── Section 3: Setup Your Brand Once── */}
        <SectionLayout
          id="splashbrands-platform"
          theme="light"
          eyebrow="From Brand Files to Storefront"
          heading={
            <>
              <em className="grad-text not-italic">Set Up Your Brand Once</em>{" "}
              and Let the Storefront Handle the Rest.
            </>
          }
          subtext="SplashBrands technology uses your approved logos, preferred product colors, and application rules to build the foundation of the shopping experience."
          cols={[1, 1]}
          pageUrl={PAGE_URL}
          schemaItems={[
            { topic: "Step 1 — Upload Your Logo" },
            { topic: "Step 2 — Add Additional Logo Variations" },
            { topic: "Step 3 — Select Brand-Appropriate Product Colors" },
            { topic: "Step 4 — Match Logos to Product Colors" },
            { topic: "Step 5 — Add Brand Context" },
            { topic: "Step 6 — Review and Submit" },
          ]}
        >
          <CardList
            heading="Simple Steps to Setup Your Swag Storefront:"
            items={[
              {
                topic: "Step 1 — Upload Your Logo",
                description:
                  "Upload your primary logo to begin the storefront setup. The system generates black and white logo versions that can be used when a full-color logo does not provide enough contrast against a product color.",
              },
              {
                topic: "Step 2 — Add Additional Logo Variations",
                description:
                  "Businesses can also upload other approved versions of their identity, including: horizontal or flat logos, stacked logos, logo marks, etc. Each logo variation can be configured independently.",
              },
              {
                topic: "Step 3 — Select Brand-Appropriate Product Colors",
                description:
                  "Choose the apparel and promotional product colors you want represented in the storefront. This allows the product experience to reflect the business's Brand Identity instead of displaying unrelated color options.",
              },
              {
                topic: "Step 4 — Match Logos to Product Colors",
                description:
                  "The storefront setup previews each logo against the selected product colors. SplashBrands recommends the logo version that provides the strongest visual contrast, and the selection can be changed when another approved logo treatment is preferred.",
              },
              {
                topic: "Step 5 — Add Brand Context",
                description:
                  "Provide your company website or social profile so the SplashBrands logo team can reference the existing brand if questions arise. Additional application notes can also be provided, such as: Use the flat logo for full-chest T-shirts. Businesses with existing Brand Guidelines can upload those files during setup as another source of brand direction.",
              },
              {
                topic: "Step 6 — Review and Submit",
                description:
                  "Review the uploaded logos, product-color selections, logo pairings, and brand information before submitting the storefront setup. The SplashBrands logo team can follow up if clarification is needed before the brand configuration is finalized.",
              },
            ]}
          />
        </SectionLayout>

        {/* ── Section 4: What's Included
            SectionLayout (stacked) + CardList with descriptions ── */}
        <SectionLayout
          id="swag-storefronts-included"
          theme="dark"
          layout="stacked"
          eyebrow="What's Included"
          heading={
            <>
              <em className="grad-text not-italic">What&apos;s included</em> in
              Swag Storefront Setup?
            </>
          }
          pageUrl={PAGE_URL}
          schemaItems={[
            { topic: "Logo Version Setup" },
            { topic: "Black & White Logo Treatments" },
            { topic: "Brand-Based Product Colors" },
            { topic: "Logo-to-Color Matching" },
            { topic: "Brand Guidelines & Application Notes" },
            { topic: "Direct Product Shopping" },
          ]}
        >
          <CardList
            heading="Swag Storefront Solutions Include:"
            items={[
              {
                topic: "Logo Version Setup",
                description:
                  "Upload your primary logo and additional approved logo variations, including horizontal, stacked, icon, or logo-mark formats.",
              },
              {
                topic: "Black & White Logo Treatments",
                description:
                  "The setup workflow creates black and white treatments of uploaded logos to support products where alternate contrast is required.",
              },
              {
                topic: "Brand-Based Product Colors",
                description:
                  "Select the apparel and promotional product colors that align with your visual identity and should be available through the storefront.",
              },
              {
                topic: "Logo-to-Color Matching",
                description:
                  "Preview how each logo appears against different product colors and control which approved logo treatment should be used for each one.",
              },
              {
                topic: "Brand Guidelines & Application Notes",
                description:
                  "Upload Brand Guidelines and provide additional instructions so the SplashBrands logo team has context for how your identity should be applied.",
              },
              {
                topic: "Direct Product Shopping",
                description:
                  "The storefront is available on the fly! Users can shop branded products directly instead of initiating a new merchandise project every time they need something.",
              },
            ]}
          />
        </SectionLayout>

        {/* ── Section 5: Who Swag Storefronts Are For
            SectionLayout (stacked) + CardLinkGrid ── */}
        <SectionItemList
          pageUrl="https://blossomrocket.studio/services/swag-storefronts"
          id="swag-storefronts-use-cases"
          theme="brandSoft"
          layout="inline"
          eyebrow="Who Swag Storefronts Best Serve"
          heading={
            <>
              Built for Businesses That Want{" "}
              <em className="grad-text not-italic">
                Easier Access to Branded Merchandise.
              </em>
            </>
          }
          subtext="Swag Storefronts are designed for organizations that have recurring merchandise needs but do not yet need the infrastructure of a full Swag Store program."
          listHeading="Swag Storefronts Benefit:"
          items={[
            {
              topic: "Growing Businesses",
              description:
                "Give a smaller or growing company an ongoing branded merchandise destination without requiring a larger Company Store commitment.",
            },
            {
              topic: "Employee Apparel Programs",
              description:
                "Make branded apparel easier to access when employees or teams need additional pieces throughout the year.",
            },
            {
              topic: "Event Merchandise",
              description:
                "Provide a repeatable way to purchase branded apparel and promotional products for conferences, trade shows, activations, and company events.",
            },
            {
              topic: "Corporate Gifting",
              description:
                "Access branded products for customer, employee, partner, and prospect gifting without rebuilding each merchandise order.",
            },
            {
              topic: "Customer Merchandise",
              description:
                "Give customers a direct way to purchase approved branded products.",
            },
            {
              topic: "Recurring Promotional Product Needs",
              description:
                "Create an always-available merchandise resource for businesses that purchase branded products throughout the year.",
            },
            {
              topic: "Multiple Logo Configurations",
              description:
                "Support brands that regularly use horizontal, stacked, icon, or alternate logo treatments across different product applications.",
            },
            {
              topic: "Businesses Not Ready for a Full Company Store",
              description:
                "Get many of the practical benefits of ongoing branded merchandise access at a smaller monthly commitment.",
            },
          ]}
        />
        {/* ── Section 6: Swag Storefront vs Company Store
            SectionLayout (stacked) + CardLinkGrid ── */}

        <SectionLayout
          id="swag-storefronts-vs-company-stores"
          layout="stacked"
          theme="dark"
          eyebrow="Choosing the Right Store"
          heading={
            <>
              What&apos;s the Difference Between{" "}
              <em className="grad-text not-italic">Swag Storefronts </em>and{" "}
              <em className="grad-text not-italic">Company Stores.</em>
            </>
          }
          subtext="The right option depends on how complex your merchandise program needs to be."
          pageUrl="https://blossomrocket.studio/services/swag-storefronts"
        >
          <CardComparison
            heading="Swag Storefronts vs Company Stores:"
            leftLabel="Swag Storefronts"
            rightLabel="Company Store"
            pairs={[
              {
                left: "Ongoing access to branded apparel and promotional products",
                right: "Fully customized enterprise merchandise program",
              },
              {
                left: "$200 per month",
                right: "10K per year",
              },
              {
                left: "Brand-based product colors + multiple approved logo variations",
                right:
                  "Advanced branding controls and expanded customization options with product selection flexibility",
              },
              {
                left: "Businesses needing a simple, repeatable way to order branded merchandise",
                right:
                  "Organizations needing a fully managed, scalable merchandise system with advanced reporting features and administrative controls",
              },
              {
                left: "Lightweight, always-on branded shopping experience",
                right: "Comprehensive company-wide merchandise infrastructure",
              },
            ]}
          />
        </SectionLayout>

        <FAQSection
          groups={faqs}
          theme="dark"
          pageUrl="https://blossomrocket.studio/services/swag-storefronts"
        />
      </div>
    </>
  );
}
