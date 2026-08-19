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

// TODO
export default function Solutions() {
  return (
    <div>
      <Hero
        pillItems={[
          "Company Stores",
          "Swag Storefronts",
          "Branded Merchandise",
          "On-Demand Kits",
          "Print & Environmental",
        ]}
        theme="dark"
        heading={
          <>
            <em className="grad-text not-italic">
              Company Stores, Swag Storefronts, & Branded Merch
            </em>
          </>
        }
        body={`Blossom Rocket is a branded merchandise and company store provider offering Company Stores, Swag Storefronts, on-demand branded merchandise, custom kits, promotional products, and print solutions powered by SplashBrands.

  Our solutions give businesses a centralized way to source branded products, manage approved merchandise, simplify recurring orders, and distribute swag to employees, customers, partners, teams, and events.`}
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
        pageUrl="https://blossomrocket.studio/solutions"
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
        subtext="Blossom Rocket connects branded merchandise, online storefronts, production, personalization, and fulfillment through one integrated offering. Choose a complete Company Store program, a streamlined Swag Storefront, standalone branded merchandise, personalized On-Demand Kits, or custom print and environmental production."
        listHeading="Blossom Rocket solutions include:"
        items={[
          {
            topic: "Company Stores",
            description:
              "A Company Store is a centralized online storefront for ordering approved branded merchandise, apparel, promotional products, gifts, and print materials. ",
          },
          {
            topic: "Swag Storefronts",
            description:
              "Swag Storefronts create a seamlessly set-up branded online marketplaces for print, promotional products and merchandise without the financial committment to a company store expereience.",
          },
          {
            topic: "Merchandise & Promotional Products",
            description:
              "Merchandise & Promotional Products create branded apparel, promotional products, employee kits, event giveaways, and custom merchandise that extend your brand beyond digital touchpoints.",
          },
          {
            topic: "On-Demand Kits",
            description:
              "Mix and match products from your catalog in a custom-printed box. Kits deliver a premium gift-ready solution.",
          },
          {
            topic: "Print & Environmental",
            description:
              "Print & Environmental solutions include printed materials, signage, displays, graphics, and physical brand applications produced for business, event, and merchandise programs.",
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
            Swag Storefronts Give Businesses{" "}
            <em className="grad-text not-italic">
              Ongoing Access to Approved Branded Merchandise.
            </em>
          </>
        }
        ctas={[
          {
            label: "Explore Blossom Rocket's Swag Storefronts",
            href: "/solutions/swag-storefronts",
            variant: "primary",
          },
        ]}
        subtext="Blossom Rocket Swag Storefronts are smaller-scale branded merchandise stores powered by SplashBrands' multi-logo storefront technology. Each storefront gives a business ongoing access to merchandise configured around its approved logos, logo variations, brand colors, and product preferences without requiring a full Company Store program."
        schemaItems={[
          { topic: "Branded Merchandise" },
          { topic: "Multiple Logo Variations" },
          { topic: "Approved Product Colors" },
          { topic: "Logo & Product Pairings" },
          { topic: "Brand Application Guidelines" },
        ]}
        pageUrl="https://blossomrocket.studio/solutions"
      >
        <CardList
          heading="Swag Storefronts can include:"
          items={[
            { topic: "Branded Merchandise" },
            { topic: "Multiple Logo Variations" },
            { topic: "Approved Product Colors" },
            { topic: "Logo & Product Pairings" },
            { topic: "Brand Application Guidelines" },
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
        pageUrl="https://blossomrocket.studio/solutions"
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
            On-demand branded merchandise is produced or decorated after an
            order is placed rather than purchasing every finished branded item
            in bulk in advance.
            <br />
            <br />
            Eligible products available through Blossom Rocket and SplashBrands
            can be ordered as needed, including products available one piece at
            a time without traditional order minimums. This model can reduce the
            need to forecast demand, store finished merchandise, distribute
            products internally, and manage unused branded inventory.
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
        subtext="Blossom Rocket creates Print & Environmental solutions that translate brand systems into physical materials and environments. Through SplashBrands' in-house production capabilities, businesses can produce branded print, signage, graphics, decals, displays, and other physical brand applications with technologies including wide-format printing, screen printing, engraving, UV inkjet, and dye-sublimation."
        ctas={[
          {
            label: "Explore Blossom Rocket's Print & Environmental Solutions",
            href: "/solutions/print-and-environmental",
            variant: "primary",
          },
        ]}
        schemaItems={[
          { topic: "Banners & Posters" },
          { topic: "Decals & Floor Graphics" },
          { topic: "Signs & Environmental Graphics" },
          { topic: "Branded Displays" },
          { topic: "Printed Fabrics" },
          { topic: "Custom Engraving" },
          { topic: "UV-Printed Materials" },
          { topic: "Screen-Printed Graphics" },
        ]}
        pageUrl="https://blossomrocket.studio/solutions#print-and-environmental"
      >
        <CardList
          heading="Print & Environmental solutions can include:"
          items={[
            { topic: "Banners & Posters" },
            { topic: "Decals & Floor Graphics" },
            { topic: "Signs & Environmental Graphics" },
            { topic: "Branded Displays" },
            { topic: "Printed Fabrics" },
            { topic: "Custom Engraving" },
            { topic: "UV-Printed Materials" },
            { topic: "Screen-Printed Graphics" },
          ]}
        />
        <CardCallout
          heading="SplashBrands' in-house manufacturing capabilities"
          body="support wide-format printing, screen printing, engraving, UV inkjet, dye-sublimation, and other production methods for branded physical materials."
        />
      </SectionLayout>

      <DiffBand />

      {/* ── On-Demand Kits ── */}
      <SectionItemList
        layout="inline"
        id="on-demand-kits"
        theme="light"
        pageUrl="https://blossomrocket.studio/solutions#on-demand-kits"
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

      <FAQSection
        groups={faqs}
        theme="light"
        pageUrl="https://blossomrocket.studio/services"
      />
    </div>
  );
}
