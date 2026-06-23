import Hero from "@/components/Hero";
import {
  SectionLayout,
  CardList,
  CardPills,
  CardCallout,
  CardGrid,
} from "@/components/section";
import SectionItemList from "@/components/section/ItemList";
import Marquee from "@/components/section/Marquee";
import Brochures from "@/components/svgs/Brochures";
import BusinessCards from "@/components/svgs/BusinessCards";
import Catalogs from "@/components/svgs/Catalogs";
import ComponentLibraries from "@/components/svgs/ComponentLibraries";
import DigitalMarketing from "@/components/svgs/DigitalMarketing";
import EnvironmentalGraphics from "@/components/svgs/EnvironmentalGraphics";
import FrontendDevelopment from "@/components/svgs/FrontEndDev";
import Packaging from "@/components/svgs/Packaging";
import Signage from "@/components/svgs/Signage";
import UiUxDesign from "@/components/svgs/UiUxDesign";
import VehicleGraphics from "@/components/svgs/VehicleGraphics";
import WebAppDesign from "@/components/svgs/WebAppDesign";
import serviceItems from "@/data/marquees/services.json";

export default function Services() {
  return (
    <div>
      <Hero
        theme="dark"
        heading={
          <>
            Creative Services That Help Businesses
            <br />
            <em className="grad-text not-italic">Build, Manage, and Scale.</em>
          </>
        }
        body={`Blossom Rocket helps businesses create cohesive brand experiences across digital platforms, physical materials, merchandise, marketing assets, and company stores through SplashBrands.`}
        ctas={[
          {
            label: "Schedule a call today to launch your brand into orbit 🚀",
            href: "/contact",
            variant: "primary",
          },
        ]}
      />

      <Marquee items={serviceItems} theme="dark" />

      <SectionItemList
        pageUrl="https://blossomrocket.studio/services#services"
        layout="inline"
        id="services"
        theme="light"
        eyebrow="Beyond Traditional Creative Services"
        heading={
          <>
            Blossom Rocket Services:
            <br />
            <em className="grad-text not-italic">
              From Brand Strategy To Store Deployment
            </em>
          </>
        }
        subtext="Most agencies stop at design. Blossom Rocket helps businesses build, manage, and deploy their brands across digital experiences, printed materials, merchandise programs, and company stores through SplashBrands."
        listHeading="Blossom Rocket services include:"
        items={[
          {
            topic: "Brand Identity",
            description:
              "TODO: description description description description",
          },
          {
            topic: "Brand Systems",
            description:
              "TODO: description description description description",
          },
          {
            topic: "Brand Marketing",
            description:
              "TODO: description description description description",
          },
          {
            topic: "Brand Print",
            description:
              "TODO: description description description description",
          },
          {
            topic: "Promotional Identity",
            description:
              "TODO: description description description description",
          },
          {
            topic: "Brand Optimization",
            description:
              "TODO: description description description description",
          },
        ]}
      />

      {/* ── Brand Identity ── */}
      <SectionLayout
        id="brand-identity"
        theme="brand"
        cols={[5, 3]}
        mobileOrder="left-first"
        eyebrow="Brand Identity"
        heading={
          <>
            Brand Identity for Building{" "}
            <em className="grad-text not-italic">Recognition and Trust</em>.
          </>
        }
        subtext="Brand Identity is the visual foundation of a business. Blossom Rocket helps businesses create Brand Identity systems that support recognition, trust, and consistency across digital design, marketing assets, print materials, merchandise, promotional products, and company stores."
        ctas={[
          {
            label: "Explore Blossom Rocket's Brand Identity Services",
            href: "/services/brand-identity",
            variant: "primary",
          },
        ]}
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
        <CardCallout
          heading="A strong Brand Identity"
          body="helps every customer touchpoint feel connected, recognizable, and aligned."
        />
      </SectionLayout>

      {/* ── Brand Systems ── */}
      <SectionLayout
        id="brand-systems"
        theme="light"
        cols={[5, 3]}
        mobileOrder="left-first"
        eyebrow="Brand Systems"
        heading={
          <>
            Brand Systems that turn{" "}
            <em className="grad-text not-italic">Identity</em> Into a{" "}
            <em className="grad-text not-italic">Scalable Framework</em>.
          </>
        }
        subtext="A Brand System defines how a business documents, manages, and applies its brand across digital and physical experiences. Blossom Rocket helps businesses create Brand Systems that reduce inconsistency, improve collaboration, and support long-term growth."
        ctas={[
          {
            label: "Explore Blossom Rocket Brand Systems",
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
        theme="brandSoft"
        cols={[1, 1]}
        stickyRight={false}
        mobileOrder="left-first"
        desktopOrder="reverse"
        eyebrow="Digital Design"
        heading={
          <>
            Digital Design Services for{" "}
            <em className="grad-text not-italic">
              Cohesive Online Brand Experiences
            </em>
            .
          </>
        }
        subtext="Blossom Rocket creates branded digital experiences that help businesses communicate clearly, engage users, and scale online. Digital Design connects brand standards with websites, applications, landing pages, digital marketing, and front-end implementation."
        ctas={[
          {
            label: "Explore Blossom Rocket Digital Design Services",
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
      {/* ── Campaign & Marketing Assets ── */}
      <SectionLayout
        id="campaign-and-marketing-assets"
        theme="brand"
        cols={[5, 3]}
        mobileOrder="left-first"
        eyebrow="Campaign & Marketing Assets"
        heading={
          <>
            Campaign & Marketing Assets That Create{" "}
            <em className="grad-text not-italic">
              Consistency Across Every Channel
            </em>
            .
          </>
        }
        subtext="Campaign & Marketing Assets help businesses communicate across social media, events, sales initiatives, email marketing, advertising, and customer communications. Blossom Rocket develops creative assets that align with Brand Identity and Brand System standards."
        ctas={[
          {
            label: "Explore Campaign & Marketing Assets with Blossom Rocket",
            href: "/services/campaign-and-marketing-assets",
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
        pageUrl="https://blossomrocket.studio/services#campaign-and-marketing-assets"
      >
        <CardList
          heading="Campaign & Marketing Asset services include:"
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

      <div>TODO:: BREAK UP SECTIONS HERE WITH SOMETHING </div>
      {/* ── Print & Environmental Design── */}
      <SectionLayout
        id="print-and-environmental-design"
        theme="dark"
        cols={[1, 1]}
        stickyRight={false}
        mobileOrder="left-first"
        desktopOrder="maintain"
        eyebrow="Print & Environmental Design"
        heading={
          <>
            Print & Environmental Design That{" "}
            <em className="grad-text not-italic">
              Brings Your Brand Into the Real World
            </em>
            .
          </>
        }
        subtext="Print & Environmental Design extends a brand into physical spaces, printed materials, packaging, signage, vehicles, events, and customer-facing environments. Blossom Rocket helps businesses create physical brand assets that align with their broader brand system."
        ctas={[
          {
            label: "Explore Print & Environmental Design with Blossom Rocket",
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

      {/* ── Merchandise & Promotional Products */}
      <SectionItemList
        layout="inline"
        id="merchandise-and-promotional-products"
        theme="light"
        pageUrl="https://blossomrocket.studio/services#merchandise-and-promotional-products"
        eyebrow="Merchandise & Promotional Products"
        heading={
          <>
            Merchandise & Promotional Products That{" "}
            <em className="grad-text not-italic">Expand Brand Recognition</em>.
          </>
        }
        ctas={[
          {
            label: "Expand Your Brand with Merch and Promotional Products",
            href: "/services/merchandise-and-promotional-products",
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
              "TODO: description description description description",
          },
          {
            topic: "Promotional Products",
            description:
              "TODO: description description description description",
          },
          {
            topic: "Event Merchandising",
            description:
              "TODO: description description description description",
          },
          {
            topic: "Corporate Gifting",
            description:
              "TODO: description description description description",
          },
          {
            topic: "Customer Appreciation Programs",
            description:
              "TODO: description description description description",
          },
          {
            topic: "Onboarding Kits",
            description:
              "TODO: description description description description",
          },
          {
            topic: "Merchandise Custom Designs",
            description:
              "TODO: description description description description",
          },
        ]}
      />
      {/* ── Company Stores */}
    </div>
  );
}
