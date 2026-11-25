import type { Metadata } from "next";
import CardLinks from "@/components/section/CardLinks";
import { DEFAULT_OG_IMAGE } from "@/lib/constants/entities";
import { CalendlyButton } from "@/components/CalendlyButton";
import { CTASlots } from "@/components/CTASlot";
import FAQSection from "@/components/faqs/FAQSection";
import Hero from "@/components/Hero";
import { CardCallout, CardList, SectionLayout } from "@/components/section";
import SectionItemList from "@/components/section/ItemList";
import rawFaqs from "@/data/faqs/solutions/on-demand-kits.json";
import { FAQGroup } from "@/lib/types/faqs";

const faqs = rawFaqs as FAQGroup[];

const PAGE_URL = "https://blossomrocket.studio/solutions/on-demand-kits";

const META_DESCRIPTION =
  "Branded kits combining merchandise, personalized print, packaging, and fulfillment for onboarding, corporate gifts, client appreciation, and events.";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}/#service`,
  name: "On-Demand Kits",
  alternateName: ["Branded Kit Programs", "Corporate Gift Kits"],
  url: PAGE_URL,
  provider: {
    "@type": "Organization",
    "@id": "https://blossomrocket.studio/#organization",
    name: "Blossom Rocket",
    url: "https://blossomrocket.studio",
  },
  description: META_DESCRIPTION,
  serviceType: "Branded Kit Programs & Corporate Gifting",
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
      name: "On-Demand Kits",
      item: PAGE_URL,
    },
  ],
};

export const metadata: Metadata = {
  title: "On-Demand Gift & Onboarding Kits | Blossom Rocket",
  description: META_DESCRIPTION,
  keywords: [
    "On-Demand Kits",
    "Onboarding Kits",
    "Branded Kit Programs",
    "Corporate Gifts",
    "Corporate Gifting",
    "Employee Appreciation Gifts",
    "Client Appreciation Gifts",
    "Branded Merchandise Programs",
    "Personalized Print",
    "Kit Fulfillment",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    images: [DEFAULT_OG_IMAGE],
    title: "On-Demand Gift & Onboarding Kits | Blossom Rocket",
    description: META_DESCRIPTION,
    url: PAGE_URL,
    siteName: "Blossom Rocket",
    type: "website",
  },
};

export default function page() {
  return (
    <div>
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
      <Hero
        theme="dark"
        heading={
          <>
            On-Demand Kits Combine
            <em className="grad-text not-italic">
              {" "}
              Branded Merchandise, Personalization & Fulfillment.
            </em>
          </>
        }
        body={
          <>
            On-Demand Kits are branded kit programs that combine{" "}
            <a
              href="/solutions/merchandise-and-promotional-products"
              className="underline"
            >
              branded merchandise
            </a>
            , personalized print, coordinated packaging, and fulfillment in one
            program. Blossom Rocket builds On-Demand Kits through SplashBrands
            for new hire onboarding, corporate gifts, customer and sales
            outreach, supplier and partner appreciation, events and milestones,
            or flexible merchandise programs that do not require a custom box.
          </>
        }
        ctaSlot={
          <CTASlots
            ctas={[
              {
                label:
                  "Explore On-Demand Kit Options with Blossom Rocket & Splash Brands",
                variant: "primary",
                href: "https://splashbrands-blanks-store.orderspath.com/c/kits/",
              },
            ]}
          />
        }
        pillItems={[
          "New Hire & Onboarding",
          "Customer & Sales Programs",
          "Supplier & Partner Kits",
          "Events & Occasions",
          "Flexible Formats",
        ]}
      />
      {/* Section 3: why brand kits matter */}
      <SectionLayout
        id="why-branded-kits-matter"
        eyebrow="Why Branded Kits Matter"
        theme="light"
        cols={[1, 1]}
        mobileOrder="left-first"
        heading={
          <>
            On-Demand Kits Connect
            <em className="grad-text not-italic"> Brand Experience </em>
            With
            <em className="grad-text not-italic"> Scalable Fulfillment.</em>
          </>
        }
        ctaSlot={
          <CTASlots
            theme="light"
            ctas={[
              {
                label: "Build a Branded Kit Program with Blossom Rocket",
                variant: "primary",
              },
            ]}
          />
        }
        subtext="On-Demand Kits bring branded products, personalization, packaging, and fulfillment into one program, creating stronger first impressions for employees, customers, and partners."
        schemaItems={[
          { topic: "Brand Experience" },
          { topic: "Operational Efficiency" },
          { topic: "Scalable Distribution" },
        ]}
        pageUrl="https://blossomrocket.studio/solutions/on-demand-kits#why-branded-kits-matter"
      >
        <CardList
          heading="Branded Kit Programs Support:"
          items={[
            { topic: "Brand Experience" },
            { topic: "Operational Efficiency" },
            {
              topic: "Scalable Distribution",
            },
          ]}
        />
        <CardCallout heading="First impressions, onboarding, and partnerships deserve more than a logo on a box." />
        <CardLinks
          label="Related programs and guides:"
          links={[
            {
              label: "Company Stores for ongoing employee merchandise",
              href: "/solutions/company-stores",
            },
            {
              label: "Custom Apparel for Employees",
              href: "/blog/custom-apparel-for-employees",
            },
            {
              label: "Promotional Products People Actually Find Useful",
              href: "/blog/promotional-products-that-people-actually-find-useful",
            },
          ]}
        />
      </SectionLayout>

      {/* Section 3: centralized-kit-management */}
      <SectionLayout
        id="centralized-kit-management"
        eyebrow="Centralized Kit Management"
        theme="dark"
        cols={[1, 1]}
        mobileOrder="left-first"
        desktopOrder="reverse"
        heading={
          <>
            On-Demand Kits Centralize{" "}
            <em className="grad-text not-italic">
              Sourcing, Inventory, Fulfillment & Distribution.
            </em>
          </>
        }
        ctaSlot={
          <CTASlots
            theme="light"
            ctas={[
              {
                label: "Plan an On-Demand Kit Program with Blossom Rocket",
                variant: "primary",
              },
            ]}
          />
        }
        subtext="SplashBrands manages sourcing, decoration, print, inventory, and distribution under one program, from production to recipients."
        schemaItems={[
          { topic: "Centralized Sourcing" },
          { topic: "Inventory & Asset Control" },
          { topic: "Managed Fulfillment" },
          { topic: "Nationwide Shipping" },
          { topic: "Direct-to-Recipient Fulfillment" },
          { topic: "Bulk Program Distribution" },
        ]}
        pageUrl="https://blossomrocket.studio/solutions/on-demand-kits#centralized-kit-management"
      >
        <CardList
          heading="Centralized Kit Management Can Include:"
          items={[
            { topic: "Centralized Sourcing" },
            { topic: "Inventory & Asset Control" },
            {
              topic: "Managed Fulfillment",
            },
            {
              topic: "Nationwide Shipping",
            },
            {
              topic: "Direct-to-Recipient Fulfillment",
            },
            {
              topic: "Bulk Program Distribution",
            },
          ]}
        />
        <CardCallout heading="One program coordinates sourcing, decoration, print, and shipping, so kits move from production to recipients without a separate vendor for each component." />
      </SectionLayout>
      {/* Section 4: personalized-kit-management */}
      <SectionLayout
        id="personalized-kit-experiences"
        eyebrow="Personalized Kit Experiences"
        theme="brand"
        cols={[1, 1]}
        layout="stacked"
        mobileOrder="left-first"
        heading={
          <>
            On-Demand Kits{" "}
            <em className="grad-text not-italic">
              Create Recipient-Specific Experiences{" "}
            </em>
            Without the Operational Overhead.
          </>
        }
        subtext="Variable-data print, custom letters, and recipient-specific messaging make onboarding, appreciation, and corporate gifting kits feel personal at scale."
        schemaItems={[
          { topic: "Add personalized business cards" },
          { topic: "Custom welcome letters" },
          { topic: "QR codes linked to digital portals" },
          { topic: "Variable data printing" },
          { topic: "Pre-loaded gift cards or store credits" },
          { topic: "Branded products" },
          { topic: "Coordinated packaging" },
          { topic: "Direct-to-recipient fulfillment" },
        ]}
        pageUrl="https://blossomrocket.studio/solutions/on-demand-kits#personalized-kit-experiences"
      >
        <CardList
          layout="stacked"
          heading="Personalized Kits Can Include:"
          items={[
            { topic: "Add personalized business cards" },
            { topic: "Custom welcome letters" },
            { topic: "QR codes linked to digital portals" },
            { topic: "Variable data printing" },
            { topic: "Pre-loaded gift cards or store credits" },
            { topic: "Branded products" },
            { topic: "Coordinated packaging" },
            { topic: "Direct-to-recipient fulfillment" },
          ]}
        />
        <div className="mb-4" />
        <CardCallout heading="Variable data allows one branded kit program to produce different recipient-specific print and messaging without changing the overall program structure." />
      </SectionLayout>
      {/* -- Section 5: What's Included -- */}
      <SectionItemList
        pageUrl="https://blossomrocket.studio/solutions/on-demand-kits#what-is-included"
        layout="stacked"
        id="what-is-included"
        theme="brandSoft"
        eyebrow="What Is Included?"
        subtext="Every kit is built from the same five parts. The mix depends on the audience, occasion, budget, and delivery needs."
        heading={
          <>
            <em className="grad-text not-italic"> What&apos;s Included </em> in
            an On-Demand Kit Program?
          </>
        }
        listHeading="Blossom Rocket On-Demand Kit Programs Can Include:"
        items={[
          {
            topic: "Branded Merchandise",
            description:
              "Apparel, desk essentials, drinkware, promotional products, and seasonal gifts chosen for the kit's purpose.",
          },
          {
            topic: "Personalized Print & Messaging",
            description:
              "Letters, business cards, recognition cards, and QR codes carrying recipient-specific details.",
          },
          {
            topic: "Coordinated Packaging",
            description:
              "Branded boxes, inserts, and interiors that present everything as one branded package.",
          },
          {
            topic: "Fulfillment & Distribution",
            description:
              "Nationwide shipping direct to recipients, or bulk delivery to offices, events, and branches.",
          },
          {
            topic: "Flexible Kit Formats",
            description:
              "A custom box, branded tote, no-box bundle, event handout kit, or seasonal shipment.",
          },
        ]}
        ctaSlot={
          <CTASlots
            theme="light"
            ctas={[
              {
                label: "Create Your On-Demand Kit with Blossom Rocket",
                variant: "primary",
              },
            ]}
          />
        }
      />
      {/* -- Section 6: Core Kit Programs -- */}
      <SectionLayout
        id="core-kit-programs"
        eyebrow="Core Kit Programs"
        theme="dark"
        cols={[1, 1]}
        mobileOrder="left-first"
        desktopOrder="maintain"
        heading={
          <>
            On-Demand Kit Programs Support{" "}
            <em className="grad-text not-italic">
              Onboarding, Sales, Partnerships, Events & Recognition.
            </em>
          </>
        }
        ctaSlot={
          <CTASlots theme="light">
            <CalendlyButton theme="dark">
              Talk With an Expert About Your On-Demand Kit Needs
            </CalendlyButton>
          </CTASlots>
        }
        subtext="Kit programs are built around recurring business relationships and occasions."
        schemaItems={[
          { topic: "New Hire & Onboarding" },
          { topic: "Customer & Sales Programs" },
          { topic: "Supplier & Partner Kits" },
          { topic: "Events & Occasions" },
          { topic: "Flexible Formats" },
        ]}
        pageUrl="https://blossomrocket.studio/solutions/on-demand-kits#core-kit-programs"
      >
        <CardList
          heading="Blossom Rocket On-Demand Kit Programs Include:"
          items={[
            {
              topic: "New Hire & Onboarding",
              description:
                "Welcome letters, business cards, branded apparel, and desk essentials for new employees.",
            },
            {
              topic: "Customer & Sales Programs",
              description:
                "Branded kits for customer outreach and relationship building.",
            },
            {
              topic: "Supplier & Partner Kits",
              description:
                "Appreciation letters, co-branded merchandise, and seasonal gifts shipped directly to partners.",
            },
            {
              topic: "Events & Occasions",
              description:
                "Recognition, anniversaries, holidays, and other employee or client milestones.",
            },
            {
              topic: "Flexible Formats",
              description:
                "Tote kits, no-box bundles, and handout kits for different budgets and scales.",
            },
          ]}
        />
        <CardCallout heading="Not every On-Demand Kit requires a custom box. Flexible formats can reduce packaging requirements while still supporting high-volume rollouts and direct-to-recipient shipping." />
      </SectionLayout>
      {/* ── Section 5: FAQs ── */}
      <FAQSection groups={faqs} theme="dark" pageUrl={PAGE_URL} />
    </div>
  );
}
