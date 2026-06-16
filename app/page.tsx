import Hero from "@/components/Hero";
import Marquee from "@/components/section/Marquee";
import WhatIsSection from "@/components/WhatIsSection";
import WhySection from "@/components/WhySection";
import DiffBand from "@/components/DiffBand";
import DeploymentSection from "@/components/DeploymentSection";
import CompanyStoresSection from "@/components/CompanyStoresSection";
import FrameworkSection from "@/components/FrameworkSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import OurServices from "@/components/OurServices";
import marqueeItems from "@/data/marquees/homepage.json";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee items={marqueeItems} />
      <WhatIsSection />
      <WhySection />
      <OurServices />
      <DiffBand />
      <DeploymentSection />
      <CompanyStoresSection />
      <FrameworkSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
