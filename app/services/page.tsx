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
import ComponentLibraries from "@/components/svgs/ComponentLibraries";
import DigitalMarketing from "@/components/svgs/DigitalMarketing";
import FrontendDevelopment from "@/components/svgs/FrontEndDev";
import UiUxDesign from "@/components/svgs/UiUxDesign";
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
        layout="inline"
        id="services-list"
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
            description: "description description description description",
          },
          {
            topic: "Brand Systems",
            description: "description description description description",
          },
          {
            topic: "Brand Marketing",
            description: "description description description description",
          },
          {
            topic: "Brand Print",
            description: "description description description description",
          },
          {
            topic: "Promotional Identity",
            description: "description description description description",
          },
          {
            topic: "Brand Optimization",
            description: "description description description description",
          },
        ]}
        pageUrl="https://blossomrocket.studio/services"
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
            <em className="grad-text not-italic">Recognition and Trust</em>
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
        pageUrl="https://blossomrocket.studio/services/brand-identity"
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
        pageUrl="https://blossomrocket.studio/services/brand-systems"
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
    </div>
  );
}
