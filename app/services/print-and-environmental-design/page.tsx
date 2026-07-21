import FAQSection from "@/components/faqs/FAQSection";
import faqs from "@/data/faqs/services/print.json";

import Hero from "@/components/Hero";
import CardList from "@/components/section/CardList";
import CardLinkGrid from "@/components/section/CardLinkGrid";
import { SectionLayout } from "@/components/section";
import SectionCardOverlayList from "@/components/section/CardOverlayList";
import { Metadata } from "next";
import Script from "next/script";
import { CTASlots } from "@/components/CTASlot";

const PAGE_URL =
  "https://blossomrocket.studio/services/print-and-environmental";

export const metadata: Metadata = {
  title: "Print & Environmental Design — Blossom Rocket",
  description:
    "Blossom Rocket provides Print & Environmental Design services that help businesses apply their Brand Identity across printed materials, signage, packaging, vehicle graphics, and branded environments.",
  keywords: [
    "Print Design",
    "Environmental Graphics",
    "Signage Design",
    "Packaging Design",
    "Vehicle Graphics",
    "Business Cards",
    "Brochures",
    "Brand Identity",
  ],
  openGraph: {
    title: "Print & Environmental Design — Blossom Rocket",
    description:
      "Create consistent customer-facing materials across every location, department, campaign, and vendor with Blossom Rocket's Print & Environmental Design services.",
    url: "https://blossomrocket.studio/services/print-and-environmental",
    siteName: "Blossom Rocket",
    type: "website",
  },
};

// ─── Schema constants ─────────────────────────────────────────────────────────

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}/#service`,
  name: "Print & Environmental Design",
  url: PAGE_URL,
  provider: {
    "@type": "Organization",
    name: "Blossom Rocket",
    url: "https://blossomrocket.studio",
  },
  description:
    "Blossom Rocket provides Print & Environmental Design services that help businesses apply their Brand Identity across printed materials, signage, packaging, vehicle graphics, and branded environments.",
  serviceType: "Print & Environmental Design",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Print & Environmental Design Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Business Cards" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Brochures" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Catalogs" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Signage" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Environmental Graphics" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Packaging" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Vehicle Graphics" },
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
      name: "Services",
      item: "https://blossomrocket.studio/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Print & Environmental Design",
      item: PAGE_URL,
    },
  ],
};

export default function page() {
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
          theme="brand"
          heading={
            <>
              Bring Your Brand
              <br /> Into The{" "}
              <em className="grad-text not-italic">Real World. </em>
            </>
          }
          body={
            <>
              Print & Environmental Design extends branding beyond digital
              experiences and into physical environments.While websites, social
              media, and marketing campaigns help businesses communicate online,
              physical brand experiences influence how customers, employees, and
              visitors interact with a brand in the real world.{" "}
              <span className="block h-4" />
              Blossom Rocket helps businesses create Print & Environmental
              Design systems that align with Brand Identity and Brand System
              standards across physical touchpoints. `
            </>
          }
          ctaSlot={
            <CTASlots
              ctas={[
                {
                  label:
                    "Launch Your Brand into the Real World with Blossom Rocket 🚀",
                  variant: "primary",
                },
              ]}
            />
          }
        />
        {/* ── Section 2: Print & Environmental Design Services
            SectionLayout (split) + CardLinkGrid ── */}
        <SectionLayout
          id="print-environmental-services"
          theme="light"
          eyebrow="Print & Environmental Design"
          heading={
            <>
              Print & Environmental Design Services
              <br />
              <em className="grad-text not-italic">from Blossom Rocket.</em>
            </>
          }
          subtext="Blossom Rocket provides Print & Environmental Design services that help businesses apply their Brand Identity across printed materials, signage, packaging, vehicle graphics, and branded environments. Every Print & Environmental Design project is developed using your Brand Identity and Brand System, allowing your business to create consistent customer-facing materials across every location, department, campaign, and vendor."
          ctaSlot={
            <CTASlots
              ctas={[
                {
                  label:
                    "Start Your Print & Environmental Design Project With Blossom Rocket",
                  variant: "primary",
                },
              ]}
            />
          }
          cols={[5, 3]}
          pageUrl={PAGE_URL}
          schemaItems={[
            { topic: "Business Cards" },
            { topic: "Brochures" },
            { topic: "Catalogs" },
            { topic: "Signage" },
            { topic: "Environmental Graphics" },
            { topic: "Packaging" },
            { topic: "Vehicle Graphics" },
          ]}
        >
          <CardLinkGrid
            heading="Print & Environmental Design services include:"
            footerText="Blossom Rocket designs Print & Environmental Design assets that support every stage of a business."
            items={[
              { label: "Business Cards", href: "/contact-us#business-cards" },
              { label: "Brochures", href: "/contact-us#brochures" },
              { label: "Catalogs", href: "/contact-us#catalogs" },
              { label: "Signage", href: "/contact-us#signage" },
              {
                label: "Environmental Graphics",
                href: "/contact-us#environmental-graphics",
              },
              { label: "Packaging", href: "/contact-us#packaging" },
              {
                label: "Vehicle Graphics",
                href: "/contact-us#vehicle-graphics",
              },
            ]}
          />
        </SectionLayout>

        {/* ── Section 3: Build Stronger Brands
            SectionCardOverlayList (dark, list) ── */}
        <SectionCardOverlayList
          id="build-stronger-brands"
          theme="dark"
          eyebrow="One Brand System, Every Touchpoint"
          heading={
            <>
              How Blossom Rocket Uses Print & Environmental Design
              <br />
              <em className="grad-text not-italic">
                to Build Stronger Brands.
              </em>
            </>
          }
          subtext="Print & Environmental Design is more than creating printed materials. Blossom Rocket uses Print & Environmental Design to help businesses build recognizable brands across every physical touchpoint where customers, employees, vendors, and partners interact with the organization. Businesses rarely communicate through one printed asset — when these assets are designed independently, Brand Identity becomes inconsistent."
          cardHeading="Blossom Rocket develops Print & Environmental Design systems that connect:"
          cardVariant="list"
          items={[
            { topic: "Marketing Materials" },
            { topic: "Workplaces & Retail Environments" },
            { topic: "Product Packaging" },
            { topic: "Trade Show Assets" },
            { topic: "Customer Onboarding" },
            { topic: "Everyday Business Operations" },
          ]}
          callout={{
            heading: "Not standalone projects — a long-term brand system.",
            body: "Rather than treating every project as a one-off design, Blossom Rocket develops Print & Environmental Design as part of a system that supports future growth.",
          }}
          pageUrl={PAGE_URL}
        />

        {/* ── Section 4: What's Included
            SectionLayout (stacked) + CardList with descriptions ── */}
        <SectionLayout
          id="print-environmental-included"
          theme="light"
          layout="stacked"
          eyebrow="What's Included"
          heading={
            <>
              <em className="grad-text not-italic">What&apos;s included</em> in
              Print & Environmental Design Services?
            </>
          }
          pageUrl={PAGE_URL}
          schemaItems={[
            { topic: "Business Cards" },
            { topic: "Brochures" },
            { topic: "Catalogs" },
            { topic: "Signage" },
            { topic: "Environmental Graphics" },
            { topic: "Packaging" },
            { topic: "Vehicle Graphics" },
          ]}
          ctaSlot={
            <CTASlots
              ctas={[
                {
                  label:
                    "Create Production-Ready Print & Environmental Design Assets",
                  variant: "primary",
                },
              ]}
            />
          }
        >
          <CardList
            heading="Print & Environmental Design Services Include:"
            items={[
              {
                topic: "Business Cards",
                description:
                  "Blossom Rocket designs Business Cards that support networking, recruiting, sales meetings, and customer interactions. Every Business Card is developed using established Brand Identity standards to create professional, production-ready assets that remain consistent across teams and future reprints.",
              },
              {
                topic: "Brochures",
                description:
                  "Blossom Rocket designs Brochures that communicate products, services, capabilities, and company information using organized layouts, clear information hierarchy, and consistent visual branding.",
              },
              {
                topic: "Catalogs",
                description:
                  "Blossom Rocket develops Catalogs that organize products, collections, and service offerings into branded publications that improve customer decision-making while reinforcing Brand Identity across every page.",
              },
              {
                topic: "Signage",
                description:
                  "Blossom Rocket creates Signage systems for offices, retail environments, facilities, trade shows, events, and customer-facing spaces. Signage improves navigation, reinforces Brand Identity, and creates consistent branded environments across every location.",
              },
              {
                topic: "Environmental Graphics",
                description:
                  "Blossom Rocket designs Environmental Graphics that integrate Brand Identity directly into physical spaces. Environmental Graphics may include wall graphics, window graphics, dimensional graphics, murals, wayfinding systems, exhibit graphics, and workplace branding that transform environments into recognizable brand experiences.",
              },
              {
                topic: "Packaging",
                description:
                  "Blossom Rocket develops Packaging systems that protect products while reinforcing Brand Identity throughout manufacturing, distribution, retail presentation, and customer unboxing experiences. Consistent Packaging strengthens recognition while supporting long-term product consistency.",
              },
              {
                topic: "Vehicle Graphics",
                description:
                  "Blossom Rocket designs Vehicle Graphics that convert company vehicles into mobile branded assets. Vehicle Graphics extend Brand Identity into local markets while creating consistent visibility across service fleets, delivery vehicles, and transportation assets.",
              },
            ]}
          />
        </SectionLayout>

        {/* ── Section 5: Why Blossom Rocket?
            SectionCardOverlayList (dark, list) ── */}
        <SectionCardOverlayList
          id="why-blossom-rocket"
          theme="dark"
          eyebrow="Why Choose Blossom Rocket"
          heading={
            <>
              Why Choose Blossom Rocket for
              <br />
              <em className="grad-text not-italic">
                Print & Environmental Design?
              </em>
            </>
          }
          subtext="Blossom Rocket develops Print & Environmental Design systems that connect Brand Identity, Brand Systems, Marketing Assets, Merchandise, and Digital Design into one consistent visual ecosystem. Every project is designed to support long-term brand consistency rather than one-time creative execution."
          ctas={[
            {
              label: "Why Print Still Matters for Premium Brands",
              href: "/blog/why-print-still-matters-for-premium-brands",
              variant: "primary",
            },
          ]}
          cardHeading="Blossom Rocket helps organizations:"
          cardVariant="list"
          items={[
            {
              topic:
                "Apply Brand Identity consistently across printed materials",
            },
            {
              topic:
                "Standardize Signage across offices, retail environments, and facilities",
            },
            {
              topic:
                "Develop Packaging systems that strengthen product recognition",
            },
            {
              topic:
                "Create Environmental Graphics that reinforce workplace branding",
            },
            {
              topic:
                "Produce Business Cards, Brochures, and Catalogs using consistent visual standards",
            },
            {
              topic:
                "Coordinate assets across internal teams, printers, manufacturers, and production vendors",
            },
            {
              topic:
                "Scale branded materials as organizations grow into new products, locations, and markets",
            },
          ]}
          callout={{
            heading: "Every project is connected to a broader Brand System.",
            body: "This allows Blossom Rocket clients to expand marketing initiatives, launch new products, update facilities, and create additional branded materials without rebuilding their visual identity from the beginning.",
          }}
          pageUrl={PAGE_URL}
        />

        {/* ── Section 7: FAQs ── */}
        <FAQSection
          groups={faqs}
          theme="dark"
          pageUrl="https://blossomrocket.studio/services/print-and-environmental-design"
        />
      </div>
    </>
  );
}
