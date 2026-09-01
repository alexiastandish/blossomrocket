import FAQSection from "@/components/faqs/FAQSection";
import Hero from "@/components/Hero";
import {
  SectionLayout,
  CardList,
  CardPills,
  CardCallout,
  CardGrid,
  CardStatBento,
} from "@/components/section";
import SectionItemList from "@/components/section/ItemList";
import Marquee from "@/components/section/Marquee";
import BrandedApparel from "@/components/svgs/BrandedApparel";
import Brochures from "@/components/svgs/Brochures";
import BusinessCards from "@/components/svgs/BusinessCards";
import Catalogs from "@/components/svgs/Catalogs";
import ComponentLibraries from "@/components/svgs/ComponentLibraries";
import CorporateGiftingPrograms from "@/components/svgs/CorporateGiftingPrograms";
import CustomerPrograms from "@/components/svgs/CustomerPrograms";
import DigitalMarketing from "@/components/svgs/DigitalMarketing";
import EmployeePrograms from "@/components/svgs/EmployeePrograms";
import EnvironmentalGraphics from "@/components/svgs/EnvironmentalGraphics";
import EventMerchandise from "@/components/svgs/EventMerchandise";
import FrontendDevelopment from "@/components/svgs/FrontEndDev";
import MarketingMaterials from "@/components/svgs/MarketingMaterials";
import Packaging from "@/components/svgs/Packaging";
import PromotionalProducts from "@/components/svgs/PromotionalProducts";
import RecognitionRewardPrograms from "@/components/svgs/RecognitionRewardsPrograms";
import Signage from "@/components/svgs/Signage";
import UiUxDesign from "@/components/svgs/UiUxDesign";
import VehicleGraphics from "@/components/svgs/VehicleGraphics";
import WebAppDesign from "@/components/svgs/WebAppDesign";
import serviceItems from "@/data/marquees/services.json";
import faqs from "@/data/faqs/services/home.json";
import DiffBand from "@/components/DiffBand";
import { CTASlots } from "@/components/CTASlot";
import { CalendlyButton } from "@/components/CalendlyButton";

export default function Services() {
  return (
    <div>
      <Hero
        theme="dark"
        heading={
          <>
            Creative Services That Help Businesses{" "}
            <em className="grad-text not-italic">Build, Manage,</em> and{" "}
            <em className="grad-text not-italic"> Scale.</em>
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
        pageUrl="https://blossomrocket.studio/services"
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
            Blossom Rocket Provides{" "}
            <em className="grad-text not-italic">Creative Services</em> Across{" "}
            <em className="grad-text not-italic">
              Digital and Physical Brand Experiences.
            </em>
          </>
        }
        subtext="Blossom Rocket helps businesses create, manage, and apply consistent brand experiences across identity, digital design, marketing, print, and physical applications. Businesses can use one service independently or combine multiple services as their brand needs expand."
        listHeading="Blossom Rocket services include:"
        items={[
          {
            topic: "Brand Identity",
            description:
              "Brand Identity defines your logo, typography, color palette, imagery, graphics, and tagline to create a recognizable and memorable brand.",
          },
          {
            topic: "Brand Systems",
            description:
              "A Brand System is a complete set of rules and visual assets that show how a company looks and sounds.",
          },
          {
            topic: "Digital Design",
            description:
              "Digital Design services include Websites, UI/UX, Component Libraries, Front-End Development, and Branded Digital Experiences.",
          },
          {
            topic: "Marketing Assets",
            description:
              "Marketing Asset services include Campaign Creative, Social Media Templates, Presentation Templates, Digital Campaign Assets, Brochures, Email Signatures, and Reusable Marketing Templates.",
          },
          {
            topic: "Print & Environmental",
            description:
              "Print & Environmental services include Print Collateral, Packaging, Signage, Displays, Environmental Graphics, and Physical Brand Applications.",
          },
        ]}
      />

      {/* ── Brand Identity ── */}
      <SectionLayout
        stickyRight={true}
        id="brand-identity"
        theme="brand"
        cols={[5, 3]}
        mobileOrder="left-first"
        eyebrow="Brand Identity"
        heading={
          <>
            Brand Identity for Building{" "}
            <em className="grad-text not-italic">Recognition and Trust.</em>
          </>
        }
        ctas={[
          {
            label: "Explore Blossom Rocket's Brand Identity Service",
            href: "/services/brand-identity",
            variant: "primary",
          },
        ]}
        subtext="Brand Identity is the visual foundation of a business. Blossom Rocket helps businesses create Brand Identity systems that support recognition, trust, and consistency across digital design, marketing assets, print materials, merchandise, promotional products, and company stores."
        schemaItems={[
          { topic: "Visual Identity" },
          { topic: "Logo Suite & System" },
          { topic: "Typography" },
          { topic: "Color Palette" },
          { topic: "Iconography" },
        ]}
        pageUrl="https://blossomrocket.studio/services#brand-identity"
      >
        <CardList
          heading="Brand Identity services include:"
          items={[
            { topic: "Visual Identity" },
            { topic: "Logo Suite & System" },
            { topic: "Typography" },
            { topic: "Color Palette" },
            { topic: "Iconography" },
          ]}
        />
      </SectionLayout>

      {/* ── Brand Systems ── */}
      <SectionLayout
        id="brand-systems"
        theme="brandSoft"
        cols={[1, 1]}
        mobileOrder="left-first"
        eyebrow="Brand Systems"
        heading={
          <>
            Brand Systems that turn{" "}
            <em className="grad-text not-italic">Identity</em> Into a{" "}
            <em className="grad-text not-italic">Scalable Framework.</em>
          </>
        }
        subtext="A Brand System defines how a business documents, manages, and applies its brand across digital and physical experiences. Blossom Rocket helps businesses create Brand Systems that reduce inconsistency, improve collaboration, and support long-term growth."
        ctas={[
          {
            label: "Explore Blossom Rocket's Brand Systems Services",
            href: "/services/brand-systems",
            variant: "primary",
          },
        ]}
        schemaItems={[
          { topic: "Brand Guidelines" },
          { topic: "Brand Standards" },
          { topic: "Asset Libraries" },
          { topic: "Design Systems" },
          { topic: "Templates" },
          { topic: "Usage Guidelines" },
          { topic: "Graphics & Pattern Systems" },
        ]}
        pageUrl="https://blossomrocket.studio/services#brand-systems"
      >
        <CardPills
          heading="Brand Systems include:"
          items={[
            { topic: "Brand Guidelines" },
            { topic: "Brand Standards" },
            { topic: "Asset Libraries" },
            { topic: "Design Systems" },
            { topic: "Templates" },
            { topic: "Usage Guidelines" },
            { topic: "Graphics & Pattern Systems" },
          ]}
        />
        <CardCallout
          heading="Brand Systems help teams, vendors, departments, and partners"
          body="create consistent brand experiences without starting from scratch every time."
        />
      </SectionLayout>

      {/* ── Digital Design ── */}
      <SectionLayout
        id="digital-design"
        theme="light"
        cols={[1, 1]}
        stickyRight={false}
        mobileOrder="left-first"
        desktopOrder="reverse"
        eyebrow="Digital Design"
        heading={
          <>
            Digital Design Services for{" "}
            <em className="grad-text not-italic">
              Cohesive Online Brand Experiences.
            </em>
          </>
        }
        subtext="Blossom Rocket creates branded digital experiences that help businesses communicate clearly, engage users, and scale online. Digital Design connects brand standards with websites, applications, landing pages, digital marketing, and front-end implementation."
        ctas={[
          {
            label: "Explore Blossom Rocket's Digital Design Services",
            href: "/services/digital-design ",
            variant: "primary",
          },
        ]}
        schemaItems={[
          { topic: "UI/UX Design" },
          { topic: "Component Libraries" },
          { topic: "Web & App Design" },
          { topic: "Digital Marketing & Social Media Design" },
          { topic: "Front-End Development" },
        ]}
        pageUrl="https://blossomrocket.studio/services/digital-design"
      >
        <CardGrid
          items={[
            {
              topic: "UI/UX Design",
              image: <UiUxDesign />,
            },
            { topic: "Component Libraries", image: <ComponentLibraries /> },
            { topic: "Web & App Design", image: <WebAppDesign /> },
            {
              topic: "Digital Marketing & Social Media Design",
              image: <DigitalMarketing />,
            },
            { topic: "Front-End Development", image: <FrontendDevelopment /> },
          ]}
        />
        <CardCallout
          heading=""
          body={
            <>
              Blossom Rocket helps businesses create digital experiences that
              are <b>consistent, usable, maintainable, and built for growth.</b>
            </>
          }
        />
      </SectionLayout>
      {/* ── Marketing Assets ── */}
      <SectionLayout
        id="marketing-assets"
        theme="brand"
        cols={[1, 1]}
        mobileOrder="left-first"
        eyebrow="Marketing Assets"
        heading={
          <>
            Marketing Assets That Create{" "}
            <em className="grad-text not-italic">
              Consistency Across Every Channel.
            </em>
          </>
        }
        subtext="Marketing Assets help businesses communicate across social media, events, sales initiatives, email marketing, advertising, and customer communications. Blossom Rocket creates consistent marketing assets that help businesses build stronger recognition across every stage of the customer journey."
        ctas={[
          {
            label: "Explore Blossom Rocket's Marketing Assets Services",
            href: "/services/marketing-assets",
            variant: "primary",
          },
        ]}
        schemaItems={[
          { topic: "Campaign Creative" },
          { topic: "Social Media Templates" },
          { topic: "Social Media Content" },
          { topic: "Event Materials" },
          { topic: "Trade Show Graphics" },
          { topic: "Presentation Templates" },
          { topic: "Email Graphics" },
          { topic: "Digital Advertising Assets" },
        ]}
        pageUrl="https://blossomrocket.studio/services#marketing-assets"
      >
        <CardList
          heading="Marketing Asset services include:"
          items={[
            { topic: "Campaign Creative" },
            { topic: "Social Media Templates" },
            { topic: "Social Media Content" },
            { topic: "Event Materials" },
            { topic: "Trade Show Graphics" },
            { topic: "Presentation Templates" },
            { topic: "Email Graphics" },
            { topic: "Digital Advertising Assets" },
          ]}
        />
        <CardCallout
          heading="Consistent marketing assets "
          body="help businesses build stronger recognition across every stage of the customer journey."
        />
      </SectionLayout>

      <DiffBand />
      {/* ── Print & Environmental Design── */}
      <SectionLayout
        id="print-and-environmental-design"
        theme="brand"
        stickyRight={false}
        mobileOrder="left-first"
        desktopOrder="maintain"
        eyebrow="Print & Environmental Design"
        heading={
          <>
            Print & Environmental Design That{" "}
            <em className="grad-text not-italic">
              Brings Your Brand Into the Real World.
            </em>
          </>
        }
        subtext="Print & Environmental Design extends a brand into physical spaces, printed materials, packaging, signage, vehicles, events, and customer-facing environments. Blossom Rocket helps businesses create physical brand assets that align with their broader brand system."
        ctas={[
          {
            label:
              "Explore Blossom Rocket's Print & Environmental Design Services",
            href: "/services/print-and-environmental-design",
            variant: "primary",
          },
        ]}
        schemaItems={[
          { topic: "Business Cards" },
          { topic: "Brochures" },
          { topic: "Catalogs" },
          { topic: "Signage" },
          { topic: "Environmental Graphics" },
          { topic: "Vehicle Graphics" },
          { topic: "Packaging" },
        ]}
        pageUrl="https://blossomrocket.studio/services#print-and-environmental-design"
      >
        <CardGrid
          items={[
            {
              topic: "Business Cards",
              image: <BusinessCards />,
            },
            { topic: "Brochures", image: <Brochures /> },
            { topic: "Catalogs", image: <Catalogs /> },
            {
              topic: "Signage",
              image: <Signage />,
            },
            {
              topic: "Environmental Graphics",
              image: <EnvironmentalGraphics />,
            },
            { topic: "Vehicle Graphics", image: <VehicleGraphics /> },
            { topic: "Packaging", image: <Packaging /> },
          ]}
        />
        <CardCallout
          heading=""
          body={
            <>
              Physical brand touchpoints should feel as{" "}
              <b>consistent and intentional</b> as digital ones.
            </>
          }
        />
      </SectionLayout>

      <FAQSection
        groups={faqs}
        theme="light"
        pageUrl="https://blossomrocket.studio/services"
      />
    </div>
  );
}
