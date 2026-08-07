import { CTASlots } from "@/components/CTASlot";
import FAQSection from "@/components/faqs/FAQSection";
import Hero from "@/components/Hero";
import { CardCallout, CardList, SectionLayout } from "@/components/section";
import CardLinkGrid from "@/components/section/CardLinkGrid";
import SectionItemList from "@/components/section/ItemList";
import faqs from "@/data/faqs/services/brand-systems.json";

export default function page() {
  return (
    <div>
      <Hero
        theme="dark"
        heading={
          <>
            Turn Brand Identity Into a{" "}
            <em className="grad-text not-italic">Scalable System.</em>
          </>
        }
        body={
          <>
            A strong Brand System helps teams create consistent experiences
            while reducing confusion, duplication, and brand fragmentation.
            Blossom Rocket helps businesses create Brand Systems that support
            consistency across websites, marketing assets, print materials,
            packaging, promotional products, signage, apparel, company stores,
            and more.
          </>
        }
        ctaSlot={
          <CTASlots
            ctas={[
              {
                label:
                  "Expand your brand and grow your store with Blossom Rocket",
                variant: "primary",
              },
            ]}
          />
        }
        pillItems={[
          "Brand Guidelines",
          "Brand Standards",
          "Asset Library",
          "Graphics & Pattern Systems",
        ]}
      />
      <SectionLayout
        id="single-source-of-truth"
        eyebrow="Single Source of Truth"
        theme="light"
        cols={[1, 1]}
        mobileOrder="left-first"
        heading={
          <>
            Brand Systems Create A{" "}
            <em className="grad-text not-italic">Single Source of Truth.</em>
          </>
        }
        ctaSlot={
          <CTASlots
            ctas={[
              {
                label: "Explore Brand Systems Created by Blossom Rocket",
                variant: "primary",
                href: "/work?tag=brand-systems",
              },
            ]}
          />
        }
        subtext="Blossom Rocket helps businesses establish brand systems that operate as a rce of truth which define how brand assets should be created, managed, and applied. The result is a more consistent brand experience across both digital and physical channels."
        schemaItems={[
          { topic: "Marketing teams create campaign assets." },
          { topic: "Sales teams create presentations." },
          { topic: "Operations teams order signage and promotional products." },
          { topic: "External vendors create branded materials." },
        ]}
        pageUrl="https://blossomrocket.studio/services/brand-systems#built-for-growth"
      >
        <CardList
          heading="As businesses grow, brand assets are often created by different teams, departments, vendors, and partners..."
          items={[
            { topic: "Marketing teams create campaign assets." },
            { topic: "Sales teams create presentations." },
            {
              topic: "Operations teams order signage and promotional products.",
            },
            { topic: "External vendors create branded materials." },
          ]}
        />
        <CardCallout heading="Without clear standards, inconsistencies begin to appear across customer touchpoints." />
      </SectionLayout>
      <SectionLayout
        id="built-for-growth"
        eyebrow="Built for Growth"
        theme="brand"
        cols={[1, 1]}
        layout="stacked"
        mobileOrder="left-first"
        heading={
          <>
            Scalable Systems{" "}
            <em className="grad-text not-italic">Built for Growth.</em>
          </>
        }
        subtext="Brand Systems help businesses scale without sacrificing consistency. Blossom Rocket Brand System services are designed to help organizations create repeatable processes that support future growth. The result is a more consistent brand experience across both digital and physical channels."
        schemaItems={[
          { topic: "Maintain visual consistency" },
          { topic: "Reduce duplicate work" },
          {
            topic: "Improve collaboration",
          },
          { topic: "Streamline asset creation" },
          { topic: "Support multiple departments" },
          { topic: "Simplify vendor management" },
          { topic: "Protect brand standards" },
        ]}
        pageUrl="https://blossomrocket.studio/services/brand-systems#single-source-of-truth"
      >
        <CardList
          layout="stacked"
          heading="A Brand System helps teams:"
          items={[
            { topic: "Maintain visual consistency" },
            { topic: "Reduce duplicate work" },
            {
              topic: "Improve collaboration",
            },
            { topic: "Streamline asset creation" },
            { topic: "Support multiple departments" },
            { topic: "Simplify vendor management" },
            { topic: "Protect brand standards" },
          ]}
        />
        <div className="mb-4" />
        <CardCallout heading="As more people contribute to a brand, clear systems become increasingly important." />
      </SectionLayout>
      {/* -- What's Included -- */}
      <SectionItemList
        pageUrl="https://blossomrocket.studio/services/brand-systems"
        layout="stacked"
        id="what-is-included"
        theme="brandSoft"
        eyebrow="What Is Included?"
        subtext="Blossom Rocket Brand Systems include the documentation, standards, and creative resources businesses need to build consistent brand experiences. From Brand Guidelines and Asset Libraries to Design Systems, Templates, and Usage Guidelines, every component works together to create a scalable foundation for growth."
        heading={
          <>
            <em className="grad-text not-italic"> What&apos;s Included </em> in
            a Brand&nbsp;System?
          </>
        }
        listHeading="Blossom Rocket Brand System Includes:"
        items={[
          {
            topic: "Brand Guidelines",
            description:
              "Brand Guidelines define the core visual standards that govern how a brand should be presented.",
          },
          {
            topic: "Brand Standards",
            description:
              "Brand Standards establish approved rules for applying logos, typography, colors, graphics, and supporting assets.",
          },
          {
            topic: "Asset Library",
            description:
              "Asset Libraries provide centralized access to approved brand resources and creative assets.",
          },
          {
            topic: "Graphics & Pattern Systems",
            description:
              "Graphics & Pattern Systems establish supporting visual elements that reinforce brand recognition beyond logos and typography.",
          },
        ]}
        ctaSlot={
          <CTASlots
            theme="light"
            ctas={[
              {
                label: "Build Your Brand System with Blossom Rocket",
                variant: "primary",
              },
            ]}
          />
        }
      />
      {/* -- Touchpoints -- */}
      <SectionLayout
        id="brand-system-touchpoints"
        heading={
          <>
            Designed For{" "}
            <em className="grad-text not-italic">Digital And Physical </em>{" "}
            Touchpoints.
          </>
        }
        theme="dark"
        eyebrow="Touchpoints"
        desktopOrder="reverse"
        subtext="Modern brands exist across dozens of channels and experiences. A Brand System helps ensure those experiences remain connected."
        pageUrl="https://blossomrocket.studio/services/brand-systems"
      >
        <CardLinkGrid
          heading="Blossom Rocket creates Brand Systems that support:"
          items={[
            { label: "Websites", href: "/services/digital-marketing#website" },
            {
              label: "Social Media",
            },
            {
              label: "Marketing Campaigns",
            },
            {
              label: "Presentations",
            },
            {
              label: "Print Materials",
            },
            {
              label: "Packaging",
            },
            {
              label: "Signage",
            },
            {
              label: "Promotional Products",
            },
            {
              label: "Apparel",
            },
            {
              label: "Trade Show Materials",
            },
            { label: "Company Stores" },
          ]}
          footerText="This creates a more unified experience for customers, employees, partners, and stakeholders alike."
        />
      </SectionLayout>
      {/* ── Section 5: FAQs ── */}
      <FAQSection
        groups={faqs}
        theme="dark"
        pageUrl="https://blossomrocket.studio/services/brand-identity"
      />
    </div>
  );
}
