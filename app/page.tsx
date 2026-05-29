import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import WhatIsSection from '@/components/WhatIsSection'
import WhySection from '@/components/WhySection'
import ServicesSection from '@/components/ServicesSection'
import DiffBand from '@/components/DiffBand'
import DeploymentSection from '@/components/DeploymentSection'
import CompanyStoresSection from '@/components/CompanyStoresSection'
import FrameworkSection from '@/components/FrameworkSection'
import FAQSection from '@/components/FAQSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import Cursor from '@/components/Cursor'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <Cursor />
      <ScrollReveal />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <WhatIsSection />
        <WhySection />
        <ServicesSection />
        <DiffBand />
        <DeploymentSection />
        <CompanyStoresSection />
        <FrameworkSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
