import type { Metadata } from "next";

import Hero from "@/components/Hero";
import Marquee from "@/components/section/Marquee";
import WhatIsSection from "@/components/WhatIsSection";
import WhySection from "@/components/WhySection";
import DiffBand from "@/components/DiffBand";
import DeploymentSection from "@/components/DeploymentSection";
import CompanyStoresSection from "@/components/CompanyStoresSection";
import FrameworkSection from "@/components/FrameworkSection";
import OurServices from "@/components/OurServices";
import marqueeItems from "@/data/marquees/homepage.json";
import FAQSection from "@/components/faqs/FAQSection";
import homePageFAQs from "@/data/faqs/home.json";
import { CardCallout, CardList, SectionLayout } from "@/components/section";
import HomeHeroVideo from "@/components/HomeHeroVideo";
import { CTASlots } from "@/components/CTASlot";
import SelectedWork from "@/components/SelectedWork/SelectedWork";
import selectedWork from "@/data/selectedWork.json";

export const metadata: Metadata = {
  title: "Blossom Rocket | Brand Systems, Branded Merchandise & Company Stores",
  description:
    "Blossom Rocket builds and deploys scalable brand systems across digital design, marketing, print, branded merchandise, on-demand kits, and SplashBrands-powered company stores.",
};

// TODO: sage store link
// label:
//             "Explore Hundreds of Product Options for Growing Your Brand",
//           href: "https://www.shopblossomrocket.com/",
//           variant: "outline",

export default function Home() {
  return (
    <>
      <Hero
        body="Blossom Rocket builds brands and the systems that keep them consistent across digital and physical experiences. Engagements can begin with the service a business needs now - such as branding, a website, a design system, visual identity, or marketing support - and can expand into print, apparel, signage, onboarding kits, promotional products, trade show materials, and company stores when those needs arise."
        ctaSlot={
          <CTASlots
            ctas={[
              {
                label: "Explore Blossom Rocket Services  🚀",
                variant: "primary",
                href: "/services",
              },
              {
                label: "See Our Work",
                href: "/work",
                variant: "outline",
              },
            ]}
          />
        }
      />

      <Marquee items={marqueeItems} />

      <SectionLayout
        id="home--what-we-do"
        theme="light"
        mobileOrder="left-first"
        eyebrow="What We Do"
        heading={
          <>
            Brand Expansion That{" "}
            <em className="grad-text not-italic">Scales.</em>
          </>
        }
        subtext="Blossom Rocket is a branding, digital design, physical brand deployment, branded merchandise, and company store partner. Unlike a traditional branding agency or promotional-products distributor, Blossom Rocket connects the creative brand system to the standards, assets, merchandise, and operational tools used to execute it in the real world."
        ctas={[
          {
            label: "Explore Blossom Rocket Design Services",
            href: "/services",
            variant: "primary",
          },
          {
            label:
              "Explore Blossom Rocket Company Store and Branded Merchandise Solutions",
            href: "/services",
            variant: "outline",
          },
        ]}
        schemaItems={[
          { topic: "Brand Identity" },
          { topic: "Brand Systems" },
          { topic: "Digital Design" },
          { topic: "Marketing Assets" },
          { topic: "Print & Environmental" },
          { topic: "Merchandise & Store Solutions" },
        ]}
        pageUrl="https://blossomrocket.studio"
      >
        <div>
          <HomeHeroVideo />
        </div>
      </SectionLayout>

      <div className="bg-white px-[clamp(32px,7vw,100px)] pb-[clamp(80px,11vw,160px)]">
        <CardList
          items={[
            {
              topic: "Brand Identity",
              description:
                "Logos, typography, color, graphic elements, and visual foundations.",
            },
            {
              topic: "Brand Systems",
              description:
                "Guidelines, standards, templates, asset libraries, and scalable rules for applying the brand.",
            },
            {
              topic: "Digital Design",
              description:
                "Websites, UI/UX, component libraries, front-end implementation, and branded digital experiences.",
            },
            {
              topic: "Marketing Assets",
              description:
                "Social media templates, presentation templates, recruiting materials, onboarding graphics, banner templates, brochure templates, email signatures, and digital campaign assets — plus campaign, event, and sales-support creative.",
            },
            {
              topic: "Print & Environmental",
              description:
                "Print collateral, packaging, signage, displays, environmental graphics, and physical brand applications.",
            },
            {
              topic: "Merchandise & Store Solutions",
              description:
                "Branded apparel, promotional products, kits, Swag Storefronts, and Company Stores powered through SplashBrands.",
            },
          ]}
        />
      </div>
      <SectionLayout
        id="home--the-blossom-rocket-difference"
        theme="brandSoft"
        eyebrow="The Blossom Rocket Difference"
        cols={[3, 5]}
        heading={
          <>
            Brand Strategy Meets{" "}
            <em className="grad-text not-italic">Real World Execution.</em>
          </>
        }
        subtext="Blossom Rocket connects brand strategy and design with the physical and operational ways a brand is deployed. Most branding agencies focus on identity and design. Most promotional product distributors focus on merchandise and production. Blossom Rocket connects both."
        // TODO: JSON SCHEMA STUFF FOR THIS
        // schemaItems={[
        // ]}
        pageUrl="https://blossomrocket.studio"
      >
        <CardList
          heading="Brand & Digital"
          items={[
            { topic: "Brand Identity" },
            { topic: "Websites" },
            { topic: "Design Systems" },
            { topic: "Marketing Assets" },
          ]}
        />{" "}
        <CardList
          heading="Physical Brand Deployment"
          items={[
            { topic: "Apparel" },
            { topic: "Print & Signage" },
            { topic: "Promotional Products" },
            { topic: "Packaging" },
            { topic: "Onboarding & Event Materials" },
          ]}
        />{" "}
        <CardList
          heading="Operational Deployment"
          items={[
            { topic: "Merchandise Standards" },
            { topic: "Company Stores" },
            { topic: "On-Demand Ordering & Fulfillment" },
          ]}
        />
        <CardCallout
          heading="Physical Merchandise Standards"
          body="Blossom Rocket extends brand standards beyond digital assets to define how a brand should appear on physical products and materials. Standards can include approved apparel, logo placement, embroidery, print methods, signage, packaging, promotional products, and trade show displays."
        />
        <CardCallout
          heading="One Brand System. More Places It Can Work."
          body="Clients can engage Blossom Rocket for an individual project or connect multiple services as their needs grow. For organizations that need a more centralized brand ecosystem, the same standards can extend across logos, templates, digital assets, print, merchandise, signage, onboarding materials, and Company Stores."
        />
      </SectionLayout>

      <SectionLayout
        id="home--selected-work"
        theme="light"
        eyebrow="Selected Work"
        ctaSlot={
          <CTASlots
            theme="dark"
            ctas={[
              {
                label: "View All Our Work",
                href: "/work",
                variant: "primary",
              },
              {
                label: "Get In Touch",
                variant: "outline",
              },
            ]}
          />
        }
        heading={
          <>
            See the System in <em className="grad-text not-italic">Action.</em>
          </>
        }
        subtext="Explore selected Blossom Rocket projects that connect brand identity, digital design, marketing assets, print, merchandise, and physical brand experiences."
        pageUrl="https://blossomrocket.studio"
      >
        <SelectedWork items={selectedWork} />
      </SectionLayout>

      <FrameworkSection />

      {/* TODO */}
      {/* <WhatIsSection />
      <WhySection /> */}
      <OurServices />
      <DiffBand />
      <DeploymentSection />
      <CompanyStoresSection />

      <FAQSection
        groups={homePageFAQs}
        theme="dark"
        pageUrl="https://blossomrocket.studio"
      />
    </>
  );
}
