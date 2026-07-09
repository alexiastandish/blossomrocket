import Hero from "@/components/Hero";
import Marquee from "@/components/section/Marquee";
import WhatIsSection from "@/components/WhatIsSection";
import WhySection from "@/components/WhySection";
import DiffBand from "@/components/DiffBand";
import DeploymentSection from "@/components/DeploymentSection";
import CompanyStoresSection from "@/components/CompanyStoresSection";
import FrameworkSection from "@/components/FrameworkSection";
import ContactSection from "@/components/ContactSection";
import OurServices from "@/components/OurServices";
import marqueeItems from "@/data/marquees/homepage.json";
import FAQSection from "@/components/faqs/FAQSection";
import homePageFAQs from "@/data/faqs/home.json";
import { SectionLayout } from "@/components/section";

export default function Home() {
  return (
    <>
      <Hero
        ctas={[
          {
            label: "Launch Your Brand with Blossom Rocket 🚀",
            href: "/contact",
            variant: "primary",
          },
          {
            label: "Explore Blossom Rocket Services",
            href: "/services",
            variant: "outline",
          },
        ]}
      />
      <Marquee items={marqueeItems} />
      <SectionLayout
        id="home--brand-expansion-that-scales"
        theme="light"
        mobileOrder="left-first"
        eyebrow="Let's build the system behind your brand"
        heading={
          <>
            Brand Expansion
            <br /> That <em className="grad-text not-italic">Scales.</em>
          </>
        }
        subtext="Create a brand that works consistently across websites, marketing materials, promotional products, apparel, signage, onboarding kits, tradeshow materials, and company stores."
        ctas={[
          {
            label: "Explore Blossom Rocket Brand Systems",
            href: "/services/brand-systems",
            variant: "primary",
          },
        ]}
        schemaItems={[
          { topic: "Typography changes" },
          { topic: "Colors drift" },
          { topic: "Marketing materials become disconnected" },
          { topic: "Merchandise no longer feels aligned with the brand" },
        ]}
        pageUrl="https://blossomrocket.studio/services#brand-systems"
      >
        <div></div>
      </SectionLayout>

      <FrameworkSection />
      <WhatIsSection />
      <WhySection />
      <OurServices />
      <DiffBand />
      <DeploymentSection />
      <CompanyStoresSection />
      <FAQSection
        groups={homePageFAQs}
        theme="dark"
        pageUrl="https://blossomrocket.studio"
      />
      <ContactSection />
    </>
  );
}
