import FAQSection from "@/components/faqs/FAQSection";
import Hero from "@/components/Hero";
import {
  SectionLayout,
  CardList,
  CardCallout,
  CardStatBento,
} from "@/components/section";
import SectionItemList from "@/components/section/ItemList";
import Marquee from "@/components/section/Marquee";
import BrandedApparel from "@/components/svgs/BrandedApparel";
import CorporateGiftingPrograms from "@/components/svgs/CorporateGiftingPrograms";
import CustomerPrograms from "@/components/svgs/CustomerPrograms";
import EmployeePrograms from "@/components/svgs/EmployeePrograms";
import EventMerchandise from "@/components/svgs/EventMerchandise";
import MarketingMaterials from "@/components/svgs/MarketingMaterials";
import PromotionalProducts from "@/components/svgs/PromotionalProducts";
import RecognitionRewardPrograms from "@/components/svgs/RecognitionRewardsPrograms";
import solutions from "@/data/marquees/solutions.json";
import faqs from "@/data/faqs/solutions/home.json";
import DiffBand from "@/components/DiffBand";
import { CTASlots } from "@/components/CTASlot";
import { CalendlyButton } from "@/components/CalendlyButton";
import { CompanyStoreComparisonSection } from "@/components/ComparisonTable/CompanyStoreComparisonSection";
import type { Metadata } from "next";

const PAGE_URL = "https://blossomrocket.studio/solutions";

const META_DESCRIPTION =
  "Branded merchandise solutions from Blossom Rocket: on-demand Company Stores and Co-Branding programs powered by SplashBrands, plus promotional products, On-Demand Kits, and print production — centralized ordering with no minimums and no inventory.";

export const metadata: Metadata = {
  title:
    "Branded Merchandise Solutions — Company Stores & Co-Branding | Blossom Rocket",
  description: META_DESCRIPTION,
  keywords: [
    "Company Stores",
    "Corporate Merchandise Stores",
    "Employee Merchandise Stores",
    "Co-Branding",
    "Co-Branded Merchandise",
    "Branded Merchandise Programs",
    "Promotional Products",
    "Centralized Merchandise Ordering",
    "Corporate Merchandise Management",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Branded Merchandise Solutions — Company Stores & Co-Branding | Blossom Rocket",
    description: META_DESCRIPTION,
    url: PAGE_URL,
    siteName: "Blossom Rocket",
    type: "website",
  },
};

export default function Solutions() {
  return (
    <div>
      <Hero
        pillItems={[
          "Company Stores",
          "Co-Branding",
          "Swag Storefronts",
          "Branded Merchandise",
          "On-Demand Kits",
        ]}
        theme="dark"
        heading={
          <>
            Company Stores, Co-Branding &{" "}
            <em className="grad-text not-italic">Branded Merchandise.</em>
          </>
        }
        body="Blossom Rocket helps organizations centralize, automate, and scale branded merchandise. Company Stores and Co-Branding programs powered by SplashBrands give teams, departments, and locations on-demand access to pre-approved products — supported by promotional products, On-Demand Kits, and print production for everything a storefront does not cover."
        ctaSlot={
          <CTASlots
            theme="dark"
            ctas={[
              {
                label: "Launch Your Brand Into Orbit with Blossom Rocket 🚀",
                variant: "primary",
              },
              {
                label: "Explore Blossom Rocket's Work",
                href: "/work",
                variant: "outline",
              },
            ]}
          />
        }
      />

      <Marquee items={solutions} theme="dark" />

      <SectionItemList
        pageUrl={PAGE_URL}
        layout="inline"
        id="beyond-traditional-creative-solutions"
        theme="neutral"
        eyebrow="Beyond Traditional Creative Solutions"
        ctas={[
          {
            label: "Explore Brand Experiences Created by Blossom Rocket",
            href: "/work",
            variant: "primary",
          },
        ]}
        heading={
          <>
            Blossom Rocket Solutions:
            <br />
            <em className="grad-text not-italic">
              From Print to Merch to Company Stores.
            </em>
          </>
        }
        subtext="Blossom Rocket connects branded merchandise, online storefronts, production, personalization, and fulfillment through one integrated offering. Start with a full Company Store program, a Co-Branding program, or a self-serve Swag Storefront, and add standalone branded merchandise, personalized On-Demand Kits, or custom print and environmental production as needed."
        listHeading="Blossom Rocket solutions include:"
        items={[
          {
            topic: "Company Stores",
            description:
              "A centralized, automated storefront for ordering branded merchandise, apparel, promotional products, gifts, and print materials on demand — no minimums, no inventory.",
          },
          {
            topic: "Co-Branding",
            description:
              "Brand-controlled merchandise programs built around multiple approved logos and logo variations, for partnerships, divisions, and multi-location teams.",
          },
          {
            topic: "Swag Storefronts",
            description:
              "A self-serve storefront for a single brand's own approved logo and product colors — ongoing merchandise access without a full Company Store commitment.",
          },
          {
            topic: "Merchandise & Promotional Products",
            description:
              "Branded apparel, promotional products, employee kits, event giveaways, and custom merchandise that extend your brand beyond digital touchpoints.",
          },
          {
            topic: "On-Demand Kits",
            description:
              "Mix and match products from your catalog in a custom-printed box. Kits deliver a premium gift-ready solution.",
          },
          {
            topic: "Print & Environmental",
            description:
              "Signage, displays, decals, business cards, trade show materials, and more produced for business, event, and merchandise programs.",
          },
        ]}
      />

      {/* ── Company Stores */}
      <SectionLayout
        theme="brandSoft"
        id="company-stores"
        cols={[5, 3]}
        stickyRight={false}
        mobileOrder="right-first"
        desktopOrder="reverse"
        eyebrow="Company Stores"
        stackedBtns={true}
        heading={
          <>
            Company Store Solutions{" "}
            <em className="grad-text not-italic">Through SplashBrands.</em>
          </>
        }
        subtext="Blossom Rocket helps businesses implement Company Store solutions through SplashBrands that centralize branded merchandise, simplify ordering, maintain brand consistency, and support scalable employee, customer, and event programs."
        ctaSlot={
          <CTASlots
            theme="light"
            stacked
            alignLeft
            ctas={[
              {
                label:
                  "Explore Company Stores by Blossom Rocket, Powered by SplashBrands",
                href: "/solutions/company-stores",
                variant: "primary",
              },
            ]}
          >
            <CalendlyButton />
          </CTASlots>
        }
      >
        <CardStatBento
          items={[
            {
              label: "Branded Apparel",
              graphic: <BrandedApparel />,
              size: "lg",
            },
            { label: "Promotional Products", graphic: <PromotionalProducts /> },
            {
              label: "Corporate Gifting Programs",
              graphic: <CorporateGiftingPrograms />,
            },
            {
              label: "Employee Programs",
              graphic: <EmployeePrograms />,
              size: "sm",
            },
            {
              label: "Customer Programs",
              graphic: <CustomerPrograms />,
              size: "sm",
            },
            { label: "Event Merchandise", graphic: <EventMerchandise /> },
            {
              label: "Recognition & Rewards Programs",
              graphic: <RecognitionRewardPrograms />,
              size: "lg",
            },
            {
              label: "Marketing Materials",
              graphic: <MarketingMaterials />,
              size: "sm",
            },
          ]}
        />
      </SectionLayout>

      {/* ── Co-Branding ── */}
      <SectionLayout
        stickyRight={true}
        id="co-branding"
        theme="brand"
        cols={[5, 3]}
        mobileOrder="left-first"
        eyebrow="Co-Branding"
        heading={
          <>
            Co-Branding Keeps Every Approved Mark{" "}
            <em className="grad-text not-italic">
              On Brand, On Every Product.
            </em>
          </>
        }
        ctas={[
          {
            label: "Explore Blossom Rocket's Co-Branding Programs",
            href: "/solutions/co-branding",
            variant: "primary",
          },
        ]}
        subtext="Blossom Rocket Co-Branding programs are powered by SplashBrands' multi-logo storefront technology. Each program gives an organization ongoing access to merchandise configured around multiple approved logos, logo variations, brand colors, and product preferences — so partnerships, divisions, and locations order co-branded product that follows one set of brand rules."
        schemaItems={[
          { topic: "Co-Branded Merchandise" },
          { topic: "Multiple Approved Logos & Logo Variations" },
          { topic: "Approved Product Colors" },
          { topic: "Logo & Product Pairings" },
          { topic: "Brand Application Guidelines" },
        ]}
        pageUrl={PAGE_URL}
      >
        <CardList
          heading="Co-Branding programs can include:"
          items={[
            { topic: "Co-Branded Merchandise" },
            { topic: "Multiple Approved Logos & Logo Variations" },
            { topic: "Approved Product Colors" },
            { topic: "Logo & Product Pairings" },
            { topic: "Brand Application Guidelines" },
          ]}
        />
      </SectionLayout>

      {/* ── Swag Storefronts ── */}
      <SectionLayout
        stickyRight={true}
        id="swag-storefronts"
        theme="brand"
        cols={[5, 3]}
        mobileOrder="left-first"
        eyebrow="Swag Storefronts"
        heading={
          <>
            A Self-Serve Storefront for{" "}
            <em className="grad-text not-italic">Your Own Brand.</em>
          </>
        }
        ctas={[
          {
            label: "Explore Blossom Rocket's Swag Storefronts",
            href: "/solutions/swag-storefronts",
            variant: "primary",
          },
        ]}
        subtext="Blossom Rocket Swag Storefronts run on the same SplashBrands storefront technology as Co-Branding, but carry a single organization's own approved logo and its variations. Each storefront gives a business ongoing, self-serve access to merchandise configured around its brand colors and product preferences — without the commitment of a full Company Store program."
        schemaItems={[
          { topic: "Self-Serve Setup" },
          { topic: "Approved Logo & Logo Variations" },
          { topic: "Brand-Controlled Product Colors" },
          { topic: "Instant Shopping Access" },
          { topic: "$200/Month" },
        ]}
        pageUrl={PAGE_URL}
      >
        <CardList
          heading="Swag Storefronts can include:"
          items={[
            { topic: "Self-Serve Setup" },
            { topic: "Approved Logo & Logo Variations" },
            { topic: "Brand-Controlled Product Colors" },
            { topic: "Instant Shopping Access" },
            { topic: "$200/Month" },
          ]}
        />
      </SectionLayout>

      {/* ── Comparison Table── */}
      <CompanyStoreComparisonSection />

      {/* ── Merchandise & Promotional Products */}
      <SectionItemList
        layout="inline"
        id="on-demand-merchandise"
        theme="brandSoft"
        pageUrl={PAGE_URL}
        eyebrow="On-Demand Merchandise & Promotional Products"
        heading={
          <>
            Branded Merchandise{" "}
            <em className="grad-text not-italic">
              Without Traditional Inventory Requirements.
            </em>
          </>
        }
        ctas={[
          {
            label:
              "Explore Blossom Rocket's Merchandise & Promotional Product Services",
            href: "/solutions/merchandise-and-promotional-products",
            variant: "primary",
          },
        ]}
        subtext={
          <>
            On-demand branded merch is produced after an order is placed rather
            than purchasing every finished branded item in bulk in advance.
            <br />
            <br />
            Merch and promo products can be ordered as needed, including
            products available one piece at a time without traditional order
            minimums. This model can reduce the need to forecast demand, store
            finished merchandise, distribute products internally, and manage
            unused branded inventory.
          </>
        }
        listHeading="On-Demand Merchandise Is Well Suited For:"
        items={[
          {
            topic: "Employee apparel and company swag",
            description: "",
          },
          {
            topic: "Distributed teams and locations",
            description: "",
          },
          {
            topic: "Customer and partner programs",
            description: "",
          },
          {
            topic: "Recognition and rewards",
            description: "",
          },
          {
            topic: "Corporate gifting",
            description: "",
          },
          {
            topic: "Event merchandise",
            description: "",
          },
          {
            topic: "Ongoing promotional programs",
            description: "",
          },
          {
            topic: "Merchandise with unpredictable demand",
            description: "",
          },
        ]}
      />

      {/* ── Print & Environmental  ── */}
      <SectionLayout
        id="print-and-environmental"
        theme="brand"
        cols={[1, 1]}
        mobileOrder="left-first"
        eyebrow="Print & Environmental"
        heading={
          <>
            Print & Environmental Solutions{" "}
            <em className="grad-text not-italic">
              Extend Brand Systems Into Physical Spaces.
            </em>
          </>
        }
        subtext="Blossom Rocket provides Print & Environmental Design solutions that help businesses apply their Brand Identity across printed materials, signage, packaging, vehicle graphics, and branded environments — creating consistent customer-facing materials across every location, department, campaign, and vendor."
        ctas={[
          {
            label: "Explore Blossom Rocket's Print & Environmental Solutions",
            href: "/solutions/print-and-environmental",
            variant: "primary",
          },
        ]}
        schemaItems={[
          { topic: "Business Cards" },
          { topic: "Brochures" },
          { topic: "Catalogs" },
          { topic: "Signage" },
          { topic: "Environmental Graphics" },
          { topic: "Packaging" },
          { topic: "Vehicle Graphics" },
        ]}
        pageUrl={PAGE_URL + "#print-and-environmental"}
      >
        <CardList
          heading="Print & Environmental solutions can include:"
          items={[
            { topic: "Business Cards" },
            { topic: "Brochures" },
            { topic: "Catalogs" },
            { topic: "Signage" },
            { topic: "Environmental Graphics" },
            { topic: "Packaging" },
            { topic: "Vehicle Graphics" },
          ]}
        />
        <CardCallout
          heading="Not standalone projects — a long-term brand system."
          body="Rather than treating every project as a one-off design, Blossom Rocket develops Print & Environmental Design as part of a system that supports future growth."
        />
      </SectionLayout>

      <DiffBand />

      {/* ── On-Demand Kits ── */}
      <SectionItemList
        layout="inline"
        id="on-demand-kits"
        theme="light"
        pageUrl={PAGE_URL + "#on-demand-kits"}
        eyebrow="On-Demand Kits"
        heading={
          <>
            On-Demand Kits Combine{" "}
            <em className="grad-text not-italic">
              Branded Merchandise, Personalization & Fulfillment.
            </em>
          </>
        }
        ctas={[
          {
            label: "Explore Blossom Rocket's On-Demand Kits",
            href: "/solutions/on-demand-kits",
            variant: "primary",
          },
        ]}
        subtext={
          <>
            Blossom Rocket On-Demand Kits are scalable branded kit programs
            powered by SplashBrands that combine branded merchandise,
            personalized print, coordinated packaging, fulfillment, and
            distribution in one program.
            <br />
            <br />
            Businesses can use On-Demand Kits for employee onboarding, customer
            and sales outreach, supplier and partner appreciation, events,
            milestones, seasonal programs, and other branded gifting
            initiatives.
          </>
        }
        listHeading="Blossom Rocket On-Demand Kit Programs Include:"
        items={[
          {
            topic: "New Hire & Onboarding",
            description:
              "New hire and onboarding kits can combine personalized welcome letters, variable-data business cards, branded apparel and desk essentials, custom inserts, packaging, and personalization across print and products.",
          },
          {
            topic: "Customer & Sales Programs",
            description:
              "Customer and sales programs use branded kits for outreach and relationship-building initiatives that combine merchandise, print, packaging, and fulfillment.",
          },
          {
            topic: "Supplier & Partner Kits",
            description:
              "Supplier and partner kits can include personalized appreciation letters, variable-data recognition cards, co-branded merchandise, seasonal gifts, custom box interiors, and direct-to-recipient shipping.",
          },
          {
            topic: "Events & Occasions",
            description:
              "Event and milestone programs can support baby and family celebrations, birthdays and anniversaries, employee recognition and awards, holiday campaigns, seasonal programs, and other employee or client occasions.",
          },
          {
            topic: "Flexible Formats",
            description:
              "Flexible formats include branded tote or bag kits, curated merchandise bundles without a box, event-ready handout kits, and seasonal appreciation shipments for different budgets, scales, and distribution needs.",
          },
        ]}
      />

      <FAQSection groups={faqs} theme="light" pageUrl={PAGE_URL} />
    </div>
  );
}
