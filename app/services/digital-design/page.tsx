import Hero from "@/components/Hero";
import faqs from "@/data/faqs/services/digital-design.json";

import CardGrid from "@/components/section/CardGrid";
import CardComparison from "@/components/section/CardComparison";
import CardStatBento from "@/components/section/CardStatBento";
import { SectionLayout } from "@/components/section";
import FAQSection from "@/components/faqs/FAQSection";
import UiUxDesign from "@/components/svgs/UiUxDesign";
import ComponentLibraries from "@/components/svgs/ComponentLibraries";
import WebAppDesign from "@/components/svgs/WebAppDesign";
import DigitalMarketing from "@/components/svgs/DigitalMarketing";
import FrontendDevelopment from "@/components/svgs/FrontEndDev";
import ConsistentUIComponents from "@/components/svgs/ConsistentUIComponents";
import ResponsiveAcrossDevices from "@/components/svgs/ResponsiveAcrossDevices";
import BuiltOnBrandStandards from "@/components/svgs/BuiltOnBrandStandards";
import DesignedToScale from "@/components/svgs/DesignedToScale";
import SocialMediaReady from "@/components/svgs/SocialMediaReady";
import BuiltForAccessibility from "@/components/svgs/BuiltForAccessibility";
import { CTASlots } from "@/components/CTASlot";

const PAGE_URL = "https://blossomrocket.studio/services/digital-design";

export default function page() {
  return (
    <div>
      {/* ── Section 1: Hero ── */}
      <Hero
        pillItems={[]}
        showPills={false}
        theme="brandSoft"
        heading={
          <>
            Let Blossom Rocket Bring Your{" "}
            <em className="grad-text not-italic">Brand To Life Online.</em>
          </>
        }
        ctaSlot={
          <CTASlots
            ctas={[
              {
                label:
                  "Create Consistent Digital Experiences Across Every Platform 🚀",
                variant: "primary",
              },
            ]}
          />
        }
        body="Digital Design focuses on creating branded digital experiences that help businesses communicate, engage, and grow. Blossom Rocket helps businesses create websites and digital experiences that align with brand standards while supporting usability, scalability, and long-term growth."
      />

      {/* ── Section 2: Cohesive Digital Experiences — SectionLayout + CardStatBento ── */}
      <SectionLayout
        id="cohesive-digital-experiences"
        theme="light"
        eyebrow="Scalable By Design"
        heading={
          <>
            <em className="grad-text not-italic">
              Cohesive digital experiences{" "}
            </em>
            that scale.
          </>
        }
        subtext="As businesses grow, websites, landing pages, and digital experiences often become inconsistent and difficult to maintain. Blossom Rocket helps organizations create cohesive digital experiences through website design, user interface design, and scalable design systems that support long-term growth, usability, and brand consistency."
        ctas={[
          {
            label: "Get in Touch to Improve Your Digital Experience",
            href: "/contact-us",
            variant: "primary",
          },
        ]}
        cols={[3, 5]}
        stickyRight={false}
      >
        <CardStatBento
          items={[
            {
              label: "Consistent UI Components",
              size: "tall",
              graphic: <ConsistentUIComponents />,
            },
            {
              label: "Responsive Across Devices",
              size: "sm",
              graphic: <ResponsiveAcrossDevices />,
            },
            {
              label: "Built On Brand Standards",
              size: "sm",
              graphic: <BuiltOnBrandStandards />,
            },
            {
              label: "Designed To Scale",
              size: "wide",
              graphic: <DesignedToScale />,
            },
            {
              label: "Social Media Ready",
              size: "sm",
              graphic: <SocialMediaReady />,
            },
            {
              label: "Built For Accessibility",
              size: "sm",
              graphic: <BuiltForAccessibility />,
            },
          ]}
        />
      </SectionLayout>

      {/* ── Section 3: What's Included — SectionLayout (stacked) + CardGrid ── */}
      <SectionLayout
        id="digital-design-included"
        theme="dark"
        layout="stacked"
        eyebrow="Digital Design Services"
        heading={
          <>
            <em className="grad-text not-italic">What&apos;s included</em> in
            Digital Design services?
          </>
        }
        subtext="What's included in Blossom Rocket's design services:"
        pageUrl={PAGE_URL}
        schemaItems={[
          { topic: "UI/UX Design" },
          { topic: "Component Library" },
          { topic: "Web and App Design" },
          { topic: "Digital Marketing and Social Media Design" },
          { topic: "Front-End Development" },
        ]}
      >
        <CardGrid
          columns={3}
          items={[
            { topic: "UI/UX Design", image: <UiUxDesign /> },
            {
              topic: "Component Library",
              image: <ComponentLibraries />,
            },
            { topic: "Web and App Design", image: <WebAppDesign /> },
            {
              topic: "Digital Marketing and Social Media Design",
              image: <DigitalMarketing />,
            },
            {
              topic: "Front-End Development",
              image: <FrontendDevelopment />,
            },
          ]}
        />
      </SectionLayout>

      {/* ── Section 5: FAQs ── */}
      <FAQSection
        groups={faqs}
        theme="light"
        pageUrl="https://blossomrocket.studio/services/digital-design"
      />
    </div>
  );
}
