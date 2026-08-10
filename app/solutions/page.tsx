import FAQSection from "@/components/faqs/FAQSection";
import Hero from "@/components/Hero";
import {
  SectionLayout,
  CardList,
  CardPills,
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
import serviceItems from "@/data/marquees/services.json";
import faqs from "@/data/faqs/solutions/home.json";
import DiffBand from "@/components/DiffBand";
import { CTASlots } from "@/components/CTASlot";
import { CalendlyButton } from "@/components/CalendlyButton";
import CompanyStoreComparisonSection from "@/components/ComparisonTable/CompanyStoreComparisonSection";

// TODO
export default function Solutions() {
  return (
    <div>
      <Hero
        theme="dark"
        heading={
          <>
            Merch, Print, and Store Solutions That{" "}
            <em className="grad-text not-italic">Help Brands Grow.</em>
          </>
        }
        body={`Blossom Rocket helps businesses create cohesive brand experiences across digital platforms, physical materials, merchandise, marketing assets, and company stores through SplashBrands.`}
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

      <Marquee items={serviceItems} theme="dark" />

      <SectionItemList
        pageUrl="https://blossomrocket.studio/solutions"
        layout="inline"
        id="beyond-traditional-creative-services"
        theme="neutral"
        eyebrow="Beyond Traditional Creative Services"
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
        subtext="Most agencies stop at design. Blossom Rocket helps businesses build, manage, and deploy their brands across digital experiences, printed materials, merchandise programs, and company stores through SplashBrands."
        listHeading="Blossom Rocket solutions include:"
        items={[
          {
            topic: "Company Stores",
            description:
              "Company Stores build branded online storefronts that simplify merchandise ordering, employee programs, client gifting, onboarding kits, and promotional product fulfillment.",
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
              "Print & Environmental designs packaging, signage, trade show displays, printed collateral, and environmental graphics that bring your brand into physical spaces.",
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
        pageUrl="https://blossomrocket.studio/solutions#swag-storefronts"
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
        id="merchandise-and-promotional-products"
        theme="brandSoft"
        pageUrl="https://blossomrocket.studio/services#merchandise-and-promotional-products"
        eyebrow="Merchandise & Promotional Products"
        heading={
          <>
            Merchandise & Promotional Products That{" "}
            <em className="grad-text not-italic">Expand Brand Recognition.</em>
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
            Blossom Rocket helps businesses create branded merchandise programs
            that support marketing campaigns, employee programs, customer
            engagement, events, gifting, onboarding, and long-term brand
            visibility.
            <br />
            <br />
            Strategic merchandise helps businesses create lasting connections
            with customers, employees, partners, and event attendees.
          </>
        }
        listHeading="Merchandise & Promotional Product services include:"
        items={[
          {
            topic: "Branded Apparel",
            description:
              "Branded Apparel creates custom shirts, hoodies, hats, uniforms, and wearable merchandise that increase brand recognition and team visibility.",
          },
          {
            topic: "Promotional Products",
            description:
              "Promotional Products include branded drinkware, office supplies, technology accessories, and giveaways that keep your brand visible long after an event.",
          },
          {
            topic: "Event Merchandising",
            description:
              "Event Merchandising develops branded products, apparel, and promotional materials that create memorable experiences at conferences, trade shows, and events.",
          },
          {
            topic: "Corporate Gifting",
            description:
              "Corporate Gifting delivers thoughtfully curated branded gifts that strengthen relationships with clients, employees, partners, and prospects.",
          },
          {
            topic: "Customer Appreciation Programs",
            description:
              "Customer Appreciation Programs create branded merchandise campaigns that reward loyal customers, increase engagement, and build lasting brand connections.",
          },
          {
            topic: "Onboarding Kits",
            description:
              "Onboarding Kits combine branded merchandise, welcome materials, and company essentials to create a consistent employee and client onboarding experience.",
          },
          {
            topic: "Merchandise Custom Designs",
            description:
              "Merchandise Custom Designs create original artwork, product graphics, and custom merchandise concepts that transform branded products into unique brand experiences.",
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
