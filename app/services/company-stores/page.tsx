import type { Metadata } from "next";
import Script from "next/script";
import Hero from "@/components/Hero";

import CardGrid from "@/components/section/CardGrid";
import CardList from "@/components/section/CardList";
import CardLinkGrid from "@/components/section/CardLinkGrid";
import { SectionLayout } from "@/components/section";
import SectionCardOverlayList from "@/components/section/CardOverlayList";
import FAQSection from "@/components/faqs/FAQSection";
import faqs from "@/data/faqs/services/company-stores.json";
import { CTASlots } from "@/components/CTASlot";
import { CalendlyButton } from "@/components/CalendlyButton";

// ─── Page metadata ────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Company Stores — Blossom Rocket",
  description:
    "Blossom Rocket helps businesses implement Company Store solutions through SplashBrands that simplify ordering, improve brand consistency, and support scalable merchandise programs.",
  keywords: [
    "Company Stores",
    "SplashBrands",
    "Branded Merchandise",
    "Employee Programs",
    "Corporate Gifting",
    "Promotional Products",
    "Brand Consistency",
    "Merchandise Management",
  ],
  openGraph: {
    title: "Company Stores — Blossom Rocket",
    description:
      "A Company Store transforms branded merchandise from individual purchasing decisions into a scalable brand management system.",
    url: "https://blossomrocke.studio/services/company-stores",
    siteName: "Blossom Rocket",
    type: "website",
  },
};

// ─── Schema ───────────────────────────────────────────────────────────────────

const PAGE_URL = "https://blossomrocke.studio/services/company-stores";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}/#service`,
  name: "Company Stores",
  url: PAGE_URL,
  provider: {
    "@type": "Organization",
    name: "Blossom Rocket",
    url: "https://blossomrocke.studio",
  },
  description:
    "Blossom Rocket helps businesses implement Company Store solutions through SplashBrands that simplify ordering, improve brand consistency, and support scalable merchandise programs.",
  serviceType: "Company Store & Branded Merchandise Management",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Company Store Solutions",
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
        itemOffered: { "@type": "Service", name: "Corporate Gifting Programs" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Employee Programs" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Customer Programs" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Event Merchandise" },
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
      name: "Company Stores",
      item: PAGE_URL,
    },
  ],
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CompanyStores() {
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
        {/* ── Section 1: Hero (dark) ── */}
        <Hero
          theme="dark"
          pillItems={[
            "Branded Apparel",
            "Promotional Products",
            "Corporate Gifting",
            "Employee Programs",
            "Customer Programs",
            "Event Merchandise",
            "Recognition & Rewards",
          ]}
          heading={
            <>
              Company Stores Create A Centralized Home{" "}
              <em className="grad-text not-italic">For Branded Merchandise.</em>
            </>
          }
          body="A Company Store is a centralized online storefront that provides employees, customers, teams, departments, and event organizers with access to approved branded merchandise, apparel, promotional products, and marketing materials. Blossom Rocket helps businesses implement Company Store solutions through SplashBrands that simplify ordering, improve brand consistency, and support scalable merchandise programs."
          ctaSlot={
            <CTASlots
              theme="light"
              ctas={[
                {
                  label: "Explore Company Store Solutions Through SplashBrands",
                  href: "https://splashbrands.com/",
                  variant: "primary",
                },
              ]}
            >
              <CalendlyButton theme="dark" />
            </CTASlots>
          }
        />

        {/* ── Section 2: Why Company Stores
            SectionLayout (stacked) + CardGrid (4 cols) ── */}
        <SectionLayout
          id="why-company-stores"
          theme="light"
          layout="stacked"
          eyebrow="Why Businesses Use Company Stores"
          heading={
            <>
              Why Businesses Use
              <em className="grad-text not-italic"> Company Stores.</em>
            </>
          }
          subtext="As organizations grow, branded merchandise often becomes fragmented across departments, locations, vendors, and events. Different teams order different products, branding becomes inconsistent, and approval processes become difficult to manage. Blossom Rocket helps businesses implement Company Stores that centralize merchandise management while providing employees, customers, and teams with access to approved branded products."
          pageUrl={PAGE_URL}
          schemaItems={[
            { topic: "Centralize Branded Merchandise" },
            { topic: "Maintain Brand Consistency" },
            { topic: "Simplify Ordering" },
            { topic: "Manage Approved Products" },
            { topic: "Support Multiple Locations" },
            { topic: "Support Multiple Departments" },
            { topic: "Reduce Administrative Work" },
            { topic: "Improve Product Access" },
          ]}
        >
          <CardGrid
            columns={4}
            items={[
              { topic: "Centralize Branded Merchandise" },
              { topic: "Maintain Brand Consistency" },
              { topic: "Simplify Ordering" },
              { topic: "Manage Approved Products" },
              { topic: "Support Multiple Locations" },
              { topic: "Support Multiple Departments" },
              { topic: "Reduce Administrative Work" },
              { topic: "Improve Product Access" },
            ]}
          />
        </SectionLayout>

        {/* ── Section 3: Why Blossom Rocket Works With SplashBrands
            SectionCardOverlayList (dark, list) ── */}
        <SectionCardOverlayList
          id="blossom-rocket-splashbrands"
          theme="dark"
          eyebrow="Blossom Rocket + SplashBrands"
          heading={
            <>
              Why Blossom Rocket Works{" "}
              <em className="grad-text not-italic">With SplashBrands.</em>
            </>
          }
          subtext="Blossom Rocket helps businesses create the brand systems, merchandise programs, and creative assets that support successful Company Store initiatives. SplashBrands provides the technology, manufacturing, fulfillment, and operational infrastructure that powers those programs. Together, Blossom Rocket and SplashBrands help businesses create scalable merchandise solutions that support employees, customers, departments, events, and locations through a centralized Company Store platform."
          cardHeading="Together, Blossom Rocket and SplashBrands cover:"
          cardVariant="list"
          items={[
            { topic: "Brand Identity & System Development" },
            { topic: "Merchandise Program Strategy" },
            { topic: "Creative Asset Production" },
            { topic: "Company Store Technology" },
            { topic: "On-Demand Manufacturing & Fulfillment" },
            { topic: "Ordering & Distribution Infrastructure" },
          ]}
          callout={{
            heading: "Two specialists, one seamless program.",
            body: "Blossom Rocket handles brand and creative. SplashBrands handles technology and production. Your team gets a complete, scalable merchandise program.",
          }}
          pageUrl={PAGE_URL}
        />

        {/* ── Section 4: SplashBrands Platform
            SectionLayout (split) + CardList with descriptions ── */}
        <SectionLayout
          id="splashbrands-platform"
          theme="light"
          eyebrow="The SplashBrands Platform"
          heading={
            <>
              What Makes SplashBrands The Best{" "}
              <em className="grad-text not-italic">Company Store Platform?</em>
            </>
          }
          subtext="SplashBrands provides a technology-driven Company Store platform built specifically for branded merchandise programs — combining e-commerce functionality with on-demand production, in-house manufacturing, and tools designed for scalable brand management."
          ctas={[
            {
              label: "Explore SplashBrands Company Store Technology",
              href: "https://splashbrands.com/",
              variant: "primary",
            },
          ]}
          cols={[1, 1]}
          pageUrl={PAGE_URL}
          schemaItems={[
            { topic: "No Inventory Requirements" },
            { topic: "No Minimum Orders" },
            { topic: "In-House Manufacturing" },
            { topic: "Company Store Technology" },
            { topic: "Store Marketing Tools" },
          ]}
        >
          <CardList
            heading="SplashBrands Platform Advantages:"
            items={[
              {
                topic: "No Inventory Requirements",
                description:
                  "SplashBrands uses an on-demand production model that allows products to be manufactured when they are ordered, reducing inventory requirements and inventory liability.",
              },
              {
                topic: "No Minimum Orders",
                description:
                  "SplashBrands supports single-quantity ordering, allowing employees, departments, and teams to order only what they need.",
              },
              {
                topic: "In-House Manufacturing",
                description:
                  "SplashBrands operates in-house production capabilities including embroidery, direct-to-garment printing, engraving, dye sublimation, wide-format printing, screen printing, UV printing, and additional decoration methods. This provides greater control over quality, consistency, and production workflows.",
              },
              {
                topic: "Company Store Technology",
                description:
                  "SplashBrands combines e-commerce functionality with tools designed specifically for branded merchandise programs. Administrators can manage products, approvals, user groups, promotions, reporting, and communications through a centralized platform.",
              },
              {
                topic: "Store Marketing Tools",
                description:
                  "SplashBrands includes tools for featured products, promotions, email campaigns, store communications, and merchandising initiatives.",
              },
            ]}
          />
        </SectionLayout>

        {/* ── Section 5: Company Store Examples
            SectionLayout (stacked) + CardLinkGrid ── */}
        <SectionLayout
          id="company-store-examples"
          theme="dark"
          layout="stacked"
          eyebrow="Company Store Examples"
          heading={
            <>
              Businesses Use SplashBrands Company Stores To Manage{" "}
              <em className="grad-text not-italic">
                Employee, Customer, And Event Programs.
              </em>
            </>
          }
          subtext="Businesses use SplashBrands Company Stores to manage employee apparel programs, promotional products, event merchandise, customer gifting initiatives, and branded product distribution across multiple teams and locations."
          ctaSlot={
            <CTASlots
              theme="light"
              ctas={[
                {
                  label: "Explore Company Store Customers",
                  href: "https://splashbrands.com/customers/",
                  variant: "primary",
                },
              ]}
            >
              <CalendlyButton theme="dark">Talk With an Expert</CalendlyButton>
            </CTASlots>
          }
          pageUrl={PAGE_URL}
        >
          <CardLinkGrid
            heading="Example Company Store Programs:"
            footerText="Every Company Store is built on SplashBrands technology and powered by Blossom Rocket brand systems."
            items={[
              {
                label: "Employee Apparel Programs",
                href: "https://splashbrands.com/#employee-apparel",
              },
              {
                label: "Promotional Product Programs",
                href: "https://splashbrands.com/#promotional",
              },
              {
                label: "Event Merchandise Programs",
                href: "https://splashbrands.com/#events",
              },
              {
                label: "Customer Gifting Initiatives",
                href: "https://splashbrands.com/#gifting",
              },
              {
                label: "Recognition & Reward Programs",
                href: "https://splashbrands.com/#recognition",
              },
              {
                label: "Onboarding Kit Programs",
                href: "https://splashbrands.com/#onboarding",
              },
              {
                label: "Multi-Location Brand Programs",
                href: "https://splashbrands.com/#locations",
              },
              {
                label: "Department Merchandise Programs",
                href: "https://splashbrands.com/#departments",
              },
            ]}
          />
        </SectionLayout>
        <FAQSection
          groups={faqs}
          theme="dark"
          pageUrl="https://blossomrocket.studio/services/company-stores"
        />
      </div>
    </>
  );
}
