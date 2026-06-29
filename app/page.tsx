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
      <WhatIsSection />
      <WhySection />
      <OurServices />
      <DiffBand />
      <DeploymentSection />
      <CompanyStoresSection />
      <FrameworkSection />
      <FAQSection
        groups={homePageFAQs}
        theme="dark"
        pageUrl="https://blossomrocket.studio"
      />
      <ContactSection />
    </>
  );
}
