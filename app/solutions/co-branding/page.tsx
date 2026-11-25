import type { Metadata } from "next";
import CardLinks from "@/components/section/CardLinks";
import { DEFAULT_OG_IMAGE } from "@/lib/constants/entities";
import Hero from "@/components/Hero";

import CardGrid from "@/components/section/CardGrid";
import CardList from "@/components/section/CardList";
import { SectionLayout } from "@/components/section";
import FAQSection from "@/components/faqs/FAQSection";
import rawFaqs from "@/data/faqs/solutions/co-branding.json";
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

const PAGE_URL = "https://blossomrocket.studio/solutions/co-branding";

const META_DESCRIPTION =
  "Manage multiple approved logos, logo variations, and brand colors in one SplashBrands-powered storefront for partners, teams, and locations.";

export const metadata: Metadata = {
  title: "Co-Branding: Co-Branded Merchandise | Blossom Rocket",
  description: META_DESCRIPTION,
  keywords: [
    "Co-Branding",
    "Co-Branded Merchandise",
    "Multi-Logo Merchandise",
    "Partner Merchandise Programs",
    "Branded Merchandise Programs",
    "Brand Consistency",
    "Corporate Merchandise Management",
    "SplashBrands",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: [DEFAULT_OG_IMAGE],
    title: "Co-Branding: Co-Branded Merchandise | Blossom Rocket",
    description: META_DESCRIPTION,
    url: PAGE_URL,
    siteName: "Blossom Rocket",
    type: "website",
  },
};

// ─── Schema ───────────────────────────────────────────────────────────────────

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}/#service`,
  name: "Co-Branding",
  alternateName: "Co-Branded Merchandise Programs",
  url: PAGE_URL,
  provider: {
    "@type": "Organization",
    name: "Blossom Rocket",
    url: "https://blossomrocket.studio",
  },
  description: META_DESCRIPTION,
  serviceType:
    "Co-Branded Merchandise Programs & Branded Merchandise Management",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Co-Branding Solutions",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Multiple Approved Logos & Logo Variations",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Controlled Logo Usage & Product Applications",
        },
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
        itemOffered: {
          "@type": "Service",
          name: "Co-Branded Merchandise for Partnerships & Programs",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "On-Demand Ordering & Deployment",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "$200/Month" },
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
      item: "https://blossomrocket.studio",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Solutions",
      item: "https://blossomrocket.studio/solutions",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Co-Branding",
      item: PAGE_URL,
    },
  ],
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CoBranding() {
  return (
    <>
      <script
        id="schema-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div>
        {/* ── Section 1: Hero (light) ── */}
        <Hero
          theme="light"
          pillItems={[
            "Multiple Approved Logos",
            "Controlled Logo Usage",
            "Brand-Controlled Colors",
            "On-Demand Ordering",
            "$200/Month",
          ]}
          heading={
            <>
              Co-Branded Merchandise That Keeps{" "}
              <em className="grad-text not-italic">Every Logo On Brand.</em>
            </>
          }
          body={
            <>
              Co-Branding is a branded merchandise storefront for merchandise
              that carries more than one approved mark — partner logos,
              divisional logos, location logos, program logos, and alternate
              logo variations. Blossom Rocket configures Co-Branding programs on
              SplashBrands&apos; multi-logo storefront technology, which pairs
              each approved logo with approved brand colors and product
              applications before anyone places an order.
            </>
          }
          ctaSlot={
            <CTASlots
              theme="light"
              ctas={[
                {
                  label: "Explore Co-Branding With SplashBrands",
                  href: "https://splashbrands.com/",
                  variant: "primary",
                },
                {
                  label: "Compare With Company Stores",
                  href: "/solutions/company-stores",
                  variant: "outline",
                },
              ]}
            >
              <CalendlyButton theme="light">Talk With an Expert</CalendlyButton>
            </CTASlots>
          }
        />

        {/* ── Section 2: Why Co-Branding
            SectionLayout (stacked) + CardGrid (4 cols) ── */}
        <SectionLayout
          id="why-co-branding"
          theme="brand"
          layout="stacked"
          eyebrow="Why Co-Branding"
          heading={
            <>
              Multiple Logos. One{" "}
              <em className="grad-text not-italic">Set of Brand Rules.</em>
            </>
          }
          subtext={
            "Every partnership, division, and location brings its own logo files, and every order reopens the same decisions about which mark, size, and color to use. Co-Branding settles those decisions once and helps businesses: Co-Branding settles those decisions once, because each approved logo is mapped in advance to the products and colors it may appear on."
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
                "Give partners, teams, and locations direct access to approved co-branded merchandise",
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
                  "Give partners, teams, and locations direct access to approved co-branded merchandise",
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
              <em className="grad-text not-italic">Set Up Each Logo Once</em>{" "}
              and Let the Storefront Handle the Rest.
            </>
          }
          subtext="SplashBrands technology uses your approved logos, preferred product colors, and application rules to build the foundation of the shopping experience."
          cols={[1, 1]}
          pageUrl={PAGE_URL}
          schemaItems={[
            { topic: "Step 1 — Upload Your Logo" },
            { topic: "Step 2 — Add Additional Logos and Logo Variations" },
            { topic: "Step 3 — Select Brand-Appropriate Product Colors" },
            { topic: "Step 4 — Match Logos to Product Colors" },
            { topic: "Step 5 — Add Brand Context" },
            { topic: "Step 6 — Review and Submit" },
          ]}
        >
          <CardList
            heading="Simple Steps to Set Up Co-Branding:"
            items={[
              {
                topic: "Step 1 — Upload Your Logo",
                description:
                  "Upload your primary logo. The system creates black and white versions for products where a full-color logo lacks contrast.",
              },
              {
                topic: "Step 2 — Add Additional Logos and Logo Variations",
                description:
                  "Add partner, divisional, location, and program logos, plus their horizontal, stacked, or logo-mark versions. Each is configured independently.",
              },
              {
                topic: "Step 3 — Select Brand-Appropriate Product Colors",
                description:
                  "Choose the apparel and promotional product colors that fit your brand identity.",
              },
              {
                topic: "Step 4 — Match Logos to Product Colors",
                description:
                  "Preview each logo on each product color. SplashBrands recommends the highest-contrast version, and you can change it.",
              },
              {
                topic: "Step 5 — Add Brand Context",
                description:
                  'Share your website, brand guidelines, and application notes (for example, "use the flat logo on full-chest T-shirts").',
              },
              {
                topic: "Step 6 — Review and Submit",
                description:
                  "Review your logos, colors, and pairings, then submit. The SplashBrands logo team follows up if anything needs clarifying.",
              },
            ]}
          />
          <CardLinks
            label="Compare merchandise programs:"
            links={[
              {
                label: "Company Stores for larger programs",
                href: "/solutions/company-stores",
              },
              {
                label: "Swag Storefronts for a single brand",
                href: "/solutions/swag-storefronts",
              },
              {
                label: "How to Choose a Company Store Platform",
                href: "/blog/how-to-choose-a-company-store-platform",
              },
            ]}
          />
        </SectionLayout>

        {/* ── Section 4: What's Included
            SectionLayout (stacked) + CardList with descriptions ── */}
        <SectionLayout
          id="co-branding-included"
          theme="dark"
          layout="stacked"
          eyebrow="What's Included"
          heading={
            <>
              <em className="grad-text not-italic">What&apos;s included</em> in
              Co-Branding Setup?
            </>
          }
          pageUrl={PAGE_URL}
          schemaItems={[
            { topic: "Multi-Logo Setup" },
            { topic: "Black & White Logo Treatments" },
            { topic: "Brand-Based Product Colors" },
            { topic: "Logo-to-Color Matching" },
            { topic: "Brand Guidelines & Application Notes" },
            { topic: "Direct Product Shopping" },
          ]}
        >
          <CardList
            heading="Co-Branding Solutions Include:"
            items={[
              {
                topic: "Multi-Logo Setup",
                description:
                  "Your primary logo plus partner, divisional, location, and program marks in any approved format.",
              },
              {
                topic: "Black & White Logo Treatments",
                description:
                  "Black and white versions of each logo for high-contrast products.",
              },
              {
                topic: "Brand-Based Product Colors",
                description:
                  "Only product colors that match your visual identity.",
              },
              {
                topic: "Logo-to-Color Matching",
                description:
                  "Control which approved logo appears on each product color.",
              },
              {
                topic: "Brand Guidelines & Application Notes",
                description:
                  "Guidelines and instructions that tell the SplashBrands logo team how to apply each identity.",
              },
              {
                topic: "Direct Product Shopping",
                description:
                  "Users shop approved co-branded products directly, with no new project for each order.",
              },
            ]}
          />
        </SectionLayout>

        {/* ── Section 5: Who Co-Branding Is For
            SectionItemList (inline) ── */}
        <SectionItemList
          pageUrl={PAGE_URL}
          id="co-branding-use-cases"
          theme="brandSoft"
          layout="inline"
          eyebrow="Who Co-Branding Best Serves"
          heading={
            <>
              Built for Brands That Show Up{" "}
              <em className="grad-text not-italic">Alongside Other Brands.</em>
            </>
          }
          subtext="Co-Branding is designed for organizations whose merchandise has to carry more than one approved mark, or more than one version of their own."
          listHeading="Co-Branding Benefits:"
          items={[
            {
              topic: "Partnership & Sponsorship Programs",
              description:
                "Produce merchandise that pairs your mark with a partner's or sponsor's using logo treatments both sides have already approved.",
            },
            {
              topic: "Multi-Brand Organizations",
              description:
                "Hold parent, divisional, and sub-brand logos in one storefront so each group orders its own approved mark without maintaining separate merchandise processes.",
            },
            {
              topic: "Multi-Location Teams",
              description:
                "Give offices, franchises, and regional teams access to location-specific logo variations that still follow one set of brand rules.",
            },
            {
              topic: "Multiple Logo Configurations",
              description:
                "Support brands that regularly use horizontal, stacked, icon, or alternate logo treatments across different product applications.",
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
              topic: "Recurring Promotional Product Needs",
              description:
                "Create an always-available merchandise resource for businesses that purchase branded products throughout the year.",
            },
          ]}
        />
        {/* ── Section 6: Co-Branding vs Company Stores ── */}

        <SectionLayout
          id="co-branding-vs-company-stores"
          layout="stacked"
          theme="dark"
          eyebrow="Choosing the Right Program"
          heading={
            <>
              How <em className="grad-text not-italic">Co-Branding </em>and{" "}
              <em className="grad-text not-italic">Company Stores</em> Differ.
            </>
          }
          subtext="Both are brand-controlled, on-demand merchandise programs powered by SplashBrands. The right one depends on how much store administration and program infrastructure your organization needs around the ordering experience."
          pageUrl={PAGE_URL}
        >
          <CardComparison
            heading="Co-Branding vs Company Stores:"
            leftLabel="Co-Branding"
            rightLabel="Company Stores"
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
                left: "Multiple approved logos and logo variations paired with brand-based product colors",
                right:
                  "Advanced branding controls and expanded customization options with product selection flexibility",
              },
              {
                left: "Organizations that need merchandise to carry several approved marks consistently",
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

        <FAQSection groups={faqs} theme="dark" pageUrl={PAGE_URL} />
      </div>
    </>
  );
}
