import type { Metadata } from "next";
import Script from "next/script";
import Hero from "@/components/Hero";
import CardGrid from "@/components/section/CardGrid";
import CardList from "@/components/section/CardList";
import CardLinkGrid from "@/components/section/CardLinkGrid";
import { SectionLayout } from "@/components/section";
import SectionCardOverlayList from "@/components/section/CardOverlayList";
import FAQSection from "@/components/faqs/FAQSection";
import faqs from "@/data/faqs/services/merchandise-and-promotional-products.json";
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

export const metadata: Metadata = {
  title: "Merchandise & Promotional Products — Blossom Rocket",
  description:
    "Blossom Rocket provides Merchandise & Promotional Product services including branded apparel, promotional products, event merchandise, corporate gifting, customer appreciation programs, onboarding kits, and merchandise design.",
  keywords: [
    "Branded Merchandise",
    "Promotional Products",
    "Event Merchandise",
    "Corporate Gifting",
    "Branded Apparel",
    "Onboarding Kits",
    "Merchandise Design",
    "Company Stores",
  ],
  openGraph: {
    title: "Merchandise & Promotional Products — Blossom Rocket",
    description:
      "Create branded merchandise programs that increase visibility, strengthen recognition, and create lasting connections with customers, employees, and audiences.",
    url: "https://blossomrocket.co/services/merchandise-and-promotional-products",
    siteName: "Blossom Rocket",
    type: "website",
  },
};

// ─── Schema constants ─────────────────────────────────────────────────────────

const PAGE_URL =
  "https://blossomrocket.co/services/merchandise-and-promotional-products";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}/#service`,
  name: "Merchandise & Promotional Products",
  url: PAGE_URL,
  provider: {
    "@type": "Organization",
    name: "Blossom Rocket",
    url: "https://blossomrocket.co",
  },
  description:
    "Blossom Rocket provides Merchandise & Promotional Product services including branded apparel, promotional products, event merchandise, corporate gifting, customer appreciation programs, onboarding kits, and merchandise design.",
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
      item: "https://blossomrocket.co",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://blossomrocket.co/services",
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
              Create Branded Merchandise That
              <br />
              <em className="grad-text not-italic">
                Expands Your Brand Recognition.
              </em>
            </>
          }
          body="Merchandise & Promotional Products include apparel, event merchandise, corporate gifts, promotional products, and branded items used to support marketing campaigns, events, employee programs, customer engagement, and brand awareness. Blossom Rocket provides Merchandise & Promotional Product services that help businesses create branded merchandise programs that increase visibility, strengthen recognition, and create lasting connections with customers, employees, and audiences."
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
              Branded Merchandise Creates
              <br />
              <em className="grad-text not-italic">
                Ongoing Brand Visibility.
              </em>
            </>
          }
          subtext="Merchandise & Promotional Products help businesses create brand visibility beyond traditional marketing campaigns. Branded apparel, promotional products, corporate gifts, and event merchandise can continue generating exposure long after a campaign, event, customer interaction, or employee initiative has ended."
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
                  "Branded Apparel transforms logos, messaging, and visual identity systems into wearable brand assets. Blossom Rocket helps businesses create apparel programs that support employee apparel, recruiting initiatives, company culture programs, promotional campaigns, and event merchandise.",
              },
              {
                topic: "Promotional Products",
                description:
                  "Promotional Products help businesses increase visibility through branded items used by customers, employees, prospects, and event attendees. Blossom Rocket helps businesses create Promotional Product programs that support marketing campaigns, trade shows, customer engagement initiatives, and brand awareness efforts.",
              },
              {
                topic: "Event Merchandise",
                description:
                  "Event Merchandise supports conferences, trade shows, sponsorships, activations, community events, and promotional initiatives. Blossom Rocket develops Event Merchandise programs that help businesses create memorable experiences while extending brand visibility before, during, and after an event.",
              },
              {
                topic: "Corporate Gifting",
                description:
                  "Corporate Gifting helps businesses strengthen relationships with customers, employees, prospects, partners, and vendors. Blossom Rocket creates Corporate Gifting programs that support appreciation initiatives, relationship building, employee engagement, and customer retention efforts.",
              },
              {
                topic: "Customer Appreciation Programs",
                description:
                  "Customer Appreciation Programs help businesses strengthen relationships with existing customers through branded gifts, promotional products, and recognition initiatives. Blossom Rocket creates Customer Appreciation Programs that support retention, loyalty, referrals, and long-term customer relationships.",
              },
              {
                topic: "Onboarding Kits",
                description:
                  "Onboarding Kits help businesses create consistent experiences for new employees, customers, partners, and program participants. Blossom Rocket develops branded Onboarding Kits that introduce recipients to a company while reinforcing culture, values, and brand identity.",
              },
              {
                topic: "Merchandise Design",
                description:
                  "Merchandise Design focuses on applying branding to apparel, promotional products, event merchandise, corporate gifts, and branded programs. Blossom Rocket creates merchandise concepts, graphics, and product designs that align with broader marketing and business objectives.",
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
              Merchandise Supports
              <br />
              <em className="grad-text not-italic">More Than Marketing.</em>
            </>
          }
          subtext="Blossom Rocket helps businesses create merchandise programs that increase brand visibility, strengthen relationships, support marketing and engagement initiatives, and deliver consistent brand experiences across events, recruiting, onboarding, customer retention, and company culture efforts. By aligning merchandise with broader business goals, organizations can create more valuable and effective branded experiences."
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
              Merchandise Programs Can
              <br />
              <em className="grad-text not-italic">
                Grow Into Company Stores.
              </em>
            </>
          }
          subtext="As branded merchandise programs expand, businesses often need a more efficient way to manage products, ordering, inventory, and distribution across teams, departments, locations, and events. Blossom Rocket helps businesses create Merchandise & Promotional Product programs that can be supported through Company Stores powered by SplashBrands. A Company Store provides centralized access to approved branded apparel, promotional products, onboarding kits, corporate gifts, event merchandise, and other branded items."
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
          pageUrl="https://blossomrocket.studio/services/merchandise-and-promotional-products"
        />
      </div>
    </>
  );
}
