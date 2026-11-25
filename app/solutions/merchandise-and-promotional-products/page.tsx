import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CardGrid from "@/components/section/CardGrid";
import CardList from "@/components/section/CardList";
import CardLinkGrid from "@/components/section/CardLinkGrid";
import { SectionLayout } from "@/components/section";
import SectionCardOverlayList from "@/components/section/CardOverlayList";
import FAQSection from "@/components/faqs/FAQSection";
import faqs from "@/data/faqs/solutions/merchandise-and-promotional-products.json";
import { CTASlots } from "@/components/CTASlot";
import BrandAwareness from "@/components/svgs/BrandAwareness";
import CustomerEngagement from "@/components/svgs/CustomerEngagement";
import EmployeePrograms from "@/components/svgs/EmployeePrograms";
import EmployeeEngagement from "@/components/svgs/EmployeeEngagement";
import CompanyCulture from "@/components/svgs/CompanyCulture";
import RecruitingInitiatives from "@/components/svgs/RecruitingInitiatives";
import EventMarketing from "@/components/svgs/EventMarketing";
import CustomerRetention from "@/components/svgs/CustomerRetention";
import PartnerRelationships from "@/components/svgs/PartnerRelationships";
import SalesAndMarketingPrograms from "@/components/svgs/SalesAndMarketingPrograms";

// ─── Page metadata ────────────────────────────────────────────────────────────

const META_DESCRIPTION =
  "Custom promotional products and branded merchandise for businesses — apparel, promotional items, corporate gifts, and event merchandise with your logo. Produced on demand through SplashBrands, with no traditional order minimums.";

export const metadata: Metadata = {
  title:
    "Promotional Products & Branded Merchandise for Businesses | Blossom Rocket",
  description: META_DESCRIPTION,
  keywords: [
    "Promotional Products",
    "Branded Merchandise",
    "Promotional Products Supplier",
    "Custom Promotional Products",
    "Promotional Items",
    "Custom Apparel",
    "Event Merchandise",
    "Corporate Gifting",
    "Branded Apparel",
    "Onboarding Kits",
    "Merchandise Design",
    "Company Stores",
  ],
  alternates: {
    canonical:
      "https://blossomrocket.studio/solutions/merchandise-and-promotional-products",
  },
  openGraph: {
    title:
      "Promotional Products & Branded Merchandise for Businesses | Blossom Rocket",
    description: META_DESCRIPTION,
    url: "https://blossomrocket.studio/solutions/merchandise-and-promotional-products",
    siteName: "Blossom Rocket",
    type: "website",
  },
};

// ─── Schema constants ─────────────────────────────────────────────────────────

const PAGE_URL =
  "https://blossomrocket.studio/solutions/merchandise-and-promotional-products";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}/#service`,
  name: "Merchandise & Promotional Products",
  alternateName: ["Promotional Products", "Branded Merchandise"],
  url: PAGE_URL,
  provider: {
    "@type": "Organization",
    "@id": "https://blossomrocket.studio/#organization",
    name: "Blossom Rocket",
    url: "https://blossomrocket.studio",
  },
  description:
    "Blossom Rocket helps businesses source, customize, and deploy promotional products and branded merchandise — including branded apparel, promotional items, event merchandise, corporate gifts, onboarding kits, and merchandise design — with on-demand production through SplashBrands.",
  serviceType: "Brand Merchandise & Promotional Products",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Merchandise & Promotional Product Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Branded Apparel" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Promotional Products" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Event Merchandise" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Corporate Gifting" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Customer Appreciation Programs",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Onboarding Kits" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Merchandise Design" },
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
      name: "Merchandise & Promotional Products",
      item: PAGE_URL,
    },
  ],
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MerchandiseAndPromotionalProducts() {
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
        {/* ── Section 1: Hero ── */}
        <Hero
          showPills={false}
          theme="light"
          pillItems={[
            "Branded Apparel",
            "Promotional Products",
            "Event Merchandise",
            "Corporate Gifting",
            "Customer Appreciation",
            "Onboarding Kits",
            "Merchandise Design",
          ]}
          heading={
            <>
              Create Branded Merchandise That{" "}
              <em className="grad-text not-italic">
                Expands Your Brand Recognition.
              </em>
            </>
          }
          body={
            <>
              Promotional products are branded items — custom apparel,
              drinkware, bags, tech accessories, and corporate gifts — that
              businesses decorate with their logo for marketing campaigns,
              events, employee programs, and customer engagement. Blossom Rocket
              sources, designs, and deploys promotional products for businesses,
              and SplashBrands produces them on demand, so there are no
              traditional order minimums or inventory to hold. Recurring
              programs can run through{" "}
              <a href="/solutions/company-stores" className="underline">
                Company Stores
              </a>
              , and gifting through{" "}
              <a href="/solutions/on-demand-kits" className="underline">
                On-Demand Kits
              </a>
              .
            </>
          }
          ctaSlot={
            <CTASlots
              ctas={[
                {
                  label:
                    "Explore Blossom Rocket Merchandise & Promotional Product Services 🚀",
                  variant: "primary",
                },
              ]}
            />
          }
        />

        {/* ── Section 2: Ongoing Brand Visibility
            SectionCardOverlayList (dark, pills) ── */}
        <SectionCardOverlayList
          id="ongoing-brand-visibility"
          theme="dark"
          eyebrow="Beyond The Campaign"
          heading={
            <>
              Branded Merchandise Creates{" "}
              <em className="grad-text not-italic">
                Ongoing Brand Visibility.
              </em>
            </>
          }
          subtext="Branded apparel, promotional products, corporate gifts, and event merchandise keep generating exposure long after a campaign, event, or employee initiative ends."
          ctas={[
            {
              label: "Promotional Products That People Actually Find Useful",
              href: "/blog/promotional-products-that-people-actually-find-useful",
              variant: "primary",
            },
          ]}
          cardHeading="Blossom Rocket helps businesses create merchandise programs that support:"
          cardVariant="pills"
          items={[
            { topic: "Brand Awareness" },
            { topic: "Customer Engagement" },
            { topic: "Employee Engagement" },
            { topic: "Company Culture" },
            { topic: "Recruiting Initiatives" },
            { topic: "Event Marketing" },
            { topic: "Customer Retention" },
            { topic: "Partner Relationships" },
          ]}
          callout={{
            heading: "Merchandise works after the moment ends.",
            body: "A branded item given at an event, during onboarding, or as a gift continues generating visibility and connection long after the interaction.",
          }}
          pageUrl={PAGE_URL}
        />

        {/* ── Section 3: What's Included
            SectionLayout (stacked) + CardList with descriptions ── */}
        <SectionLayout
          id="merchandise-included"
          theme="light"
          layout="stacked"
          eyebrow="What's Included"
          heading={
            <>
              <em className="grad-text not-italic"> What&apos;s Included </em>{" "}
              in Merchandise & Promotional Product Services?
            </>
          }
          pageUrl={PAGE_URL}
          schemaItems={[
            { topic: "Branded Apparel" },
            { topic: "Promotional Products" },
            { topic: "Event Merchandise" },
            { topic: "Corporate Gifting" },
            { topic: "Customer Appreciation Programs" },
            { topic: "Onboarding Kits" },
            { topic: "Merchandise Design" },
          ]}
          ctaSlot={
            <CTASlots
              ctas={[
                {
                  label:
                    "Explore Branded Apparel, Promotional Products, Corporate Gifts, And Merchandise Programs",
                  variant: "primary",
                },
              ]}
            />
          }
        >
          <CardList
            heading="Merchandise & Promotional Product Services Include:"
            items={[
              {
                topic: "Branded Apparel",
                description:
                  "Custom t-shirts, polos, outerwear, and headwear, decorated with embroidery or screen printing, for employees, recruiting, campaigns, and events.",
              },
              {
                topic: "Promotional Products",
                description:
                  "Drinkware, bags, writing instruments, and tech accessories, sourced and decorated for campaigns, trade shows, and customer engagement.",
              },
              {
                topic: "Event Merchandise",
                description:
                  "Merchandise for conferences, trade shows, sponsorships, and activations that extends brand visibility before, during, and after the event.",
              },
              {
                topic: "Corporate Gifting",
                description:
                  "Branded corporate gifts for employee and client appreciation, including On-Demand Kits with personalized print, packaging, and direct-to-recipient shipping.",
              },
              {
                topic: "Customer Appreciation Programs",
                description:
                  "Branded gifts and recognition for existing customers that support retention, loyalty, and referrals.",
              },
              {
                topic: "Onboarding Kits",
                description:
                  "Branded welcome kits that introduce new employees, customers, and partners to your company and culture.",
              },
              {
                topic: "Merchandise Design",
                description:
                  "Merchandise concepts, graphics, and product designs that apply your brand to apparel, promotional products, and gifts.",
              },
            ]}
          />
        </SectionLayout>

        {/* ── Section 4: Merchandise Supports More Than Marketing
            SectionLayout (stacked) + CardGrid (3 cols) ── */}
        <SectionLayout
          id="merchandise-supports"
          theme="dark"
          layout="stacked"
          eyebrow="More Than Marketing"
          heading={
            <>
              Merchandise Supports{" "}
              <em className="grad-text not-italic">More Than Marketing.</em>
            </>
          }
          subtext="Merchandise programs also support recruiting, onboarding, customer retention, and company culture, not just marketing campaigns."
          ctaSlot={
            <CTASlots
              theme="dark"
              ctas={[
                {
                  label:
                    "Support Marketing, Employee Engagement, And Customer Programs With Branded Merchandise",
                  variant: "primary",
                },
              ]}
            />
          }
          pageUrl={PAGE_URL}
          schemaItems={[
            { topic: "Brand Awareness" },
            { topic: "Customer Engagement" },
            { topic: "Employee Engagement" },
            { topic: "Company Culture" },
            { topic: "Recruiting Initiatives" },
            { topic: "Event Marketing" },
            { topic: "Customer Retention" },
            { topic: "Partner Relationships" },
            { topic: "Sales & Marketing Programs" },
          ]}
        >
          <CardGrid
            columns={3}
            items={[
              { topic: "Brand Awareness", image: <BrandAwareness /> },
              { topic: "Customer Engagement", image: <CustomerEngagement /> },
              { topic: "Employee Engagement", image: <EmployeeEngagement /> },
              { topic: "Company Culture", image: <CompanyCulture /> },
              {
                topic: "Recruiting Initiatives",
                image: <RecruitingInitiatives />,
              },
              { topic: "Event Marketing", image: <EventMarketing /> },
              { topic: "Customer Retention", image: <CustomerRetention /> },
              {
                topic: "Partner Relationships",
                image: <PartnerRelationships />,
              },
              {
                topic: "Sales & Marketing Programs",
                image: <SalesAndMarketingPrograms />,
              },
            ]}
          />
        </SectionLayout>

        {/* ── Section 5: Company Stores
            SectionLayout (split) + CardLinkGrid ── */}
        <SectionLayout
          id="company-stores"
          theme="light"
          eyebrow="Scale Your Merchandise Program"
          heading={
            <>
              Merchandise Programs Can{" "}
              <em className="grad-text not-italic">
                Grow Into Company Stores.
              </em>
            </>
          }
          subtext="As merchandise programs grow, a Company Store powered by SplashBrands centralizes ordering of approved apparel, promotional products, kits, and gifts across teams, locations, and events."
          ctas={[
            {
              label: "Explore SplashBrands Company Store Examples",
              href: "https://splashbrands.com/customers/",
              variant: "primary",
            },
            {
              label: "Learn More About Company Stores Through SplashBrands",
              href: "https://splashbrands.com/",
              variant: "outline",
            },
          ]}
          cols={[1, 1]}
          pageUrl={PAGE_URL}
          schemaItems={[
            { topic: "Centralize branded merchandise" },
            { topic: "Simplify ordering and fulfillment" },
            { topic: "Maintain brand consistency" },
            { topic: "Support employee programs" },
            { topic: "Manage event merchandise" },
            { topic: "Improve access to approved products" },
            {
              topic: "Scale merchandise initiatives across teams and locations",
            },
          ]}
        >
          <CardLinkGrid
            heading="Company Stores Help Businesses:"
            footerText="Whether supporting employee recognition programs, customer gifting initiatives, recruiting efforts, or event marketing, a Company Store creates a scalable foundation for long-term merchandise management."
            items={[
              {
                label: "Centralize Branded Merchandise",
              },
              {
                label: "Simplify Ordering & Fulfillment",
              },
              {
                label: "Maintain Brand Consistency",
              },
              {
                label: "Support Employee Programs",
              },
              {
                label: "Manage Event Merchandise",
              },
              {
                label: "Improve Access To Approved Products",
              },
              {
                label: "Scale Across Teams & Locations",
              },
            ]}
          />
        </SectionLayout>
        {/* ── Section 7: FAQs ── */}
        <FAQSection
          groups={faqs}
          theme="dark"
          pageUrl="https://blossomrocket.studio/solutions/merchandise-and-promotional-products"
        />
      </div>
    </>
  );
}
