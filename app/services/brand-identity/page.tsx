import { CTASlots } from "@/components/CTASlot";
import FAQSection from "@/components/faqs/FAQSection";
import Hero from "@/components/Hero";
import {
  CardCallout,
  CardList,
  CardPills,
  SectionLayout,
} from "@/components/section";
import CardComparison from "@/components/section/CardComparison";
import faqs from "@/data/faqs/services/brand-identity.json";

export default function page() {
  return (
    <div>
      <Hero
        theme="light"
        ctaSlot={
          <CTASlots
            ctas={[
              {
                label:
                  "Schedule a call today to launch your brand into orbit 🚀",
                variant: "primary",
              },
            ]}
          />
        }
        heading={
          <>
            Brand Identity that Builds{" "}
            <em className="grad-text not-italic">Recognition and Trust.</em>
          </>
        }
        body={`Blossom Rocket helps businesses create Brand Identity systems that establish consistency across company stores, digital design, marketing assets, print and promo products.`}
        pillItems={[
          "Visual Identity",
          "Logo Design",
          "Color Palette",
          "Typography",
          "Iconography",
          "Graphic Elements",
        ]}
      />
      {/* ── More Than a Logo ── */}
      <SectionLayout
        id="brand-identity--more-than-a-logo"
        theme="brand"
        cols={[1, 1]}
        mobileOrder="left-first"
        ctaSlot={
          <CTASlots
            ctas={[
              {
                label: "Explore Branding Projects by Blossom Rocket",
                variant: "primary",
                // TODO: update to work page with brand-identity filter on
                href: "/work",
              },
            ]}
          />
        }
        eyebrow="More Than a Logo"
        heading={
          <>
            Many businesses think Brand Identity{" "}
            <em className="grad-text not-italic">begins and ends </em> with a
            logo.
          </>
        }
        subtext="A complete Brand Identity includes the visual systems that define how a business appears across digital and physical experience. The logo is just one component of a brand system."
        schemaItems={[
          { topic: "Websites" },
          { topic: "Marketing Assets" },
          { topic: "Social Media" },
          { topic: "Packaging" },
          { topic: "Signage" },
          { topic: "Promo Products" },
          { topic: "Apparel" },
          { topic: "Company Stores" },
        ]}
        pageUrl="https://blossomrocket.studio/services#brand-identity"
      >
        <CardList
          heading="Blossom Rocket develops Brand Identity systems that support:"
          items={[
            { topic: "Websites" },
            { topic: "Marketing Assets" },
            { topic: "Social Media" },
            { topic: "Packaging" },
            { topic: "Signage" },
            { topic: "Promo Products" },
            { topic: "Apparel" },
            { topic: "Company Stores" },
            { topic: "& Much More..." },
          ]}
        />
        <CardCallout body="This creates a consistent experience wherever and whenever a brand is displayed to the public." />
      </SectionLayout>
      {/* ── Designed to Scale ── */}
      <SectionLayout
        id="brand-identity--designed-to-scale"
        theme="light"
        mobileOrder="left-first"
        desktopOrder="reverse"
        eyebrow="Designed to Scale"
        heading={
          <>
            Brand Identity Designed to{" "}
            <em className="grad-text not-italic">Scale</em> for{" "}
            <em className="grad-text not-italic">Expansion.</em>
          </>
        }
        subtext="As businesses grow, new assets are created by different teams, departments, vendors, and partners. Without clear Brand Identity standards, inconsistency becomes inevitable."
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
        <CardPills
          heading="Common inconsistencies:"
          items={[
            { topic: "Typography changes" },
            { topic: "Colors drift" },
            { topic: "Marketing materials become disconnected" },
            { topic: "Merchandise no longer feels aligned with the brand" },
          ]}
        />
        <CardCallout body="Blossom Rocket helps businesses establish Brand Identity systems that support long-term growth and consistency." />
      </SectionLayout>
      {/* ── Brand Identity vs Brand Systems ── */}
      <SectionLayout
        id="brand-identity--brand-fundamentals"
        layout="stacked"
        theme="dark"
        eyebrow="Brand Identity vs. Brand Systems"
        heading={
          <>
            What&apos;s the Difference Between{" "}
            <em className="grad-text not-italic">Brand Identity </em> and a{" "}
            <em className="grad-text not-italic">Brand System.</em>
          </>
        }
        subtext="Brand Identity defines what a brand looks like. A Brand System defines how a brand is applied — together they create consistency and help it scale."
        schemaItems={[
          { topic: "Brand Identity defines what a brand looks like." },
          { topic: "A Brand System defines how a brand is applied." },
          {
            topic:
              "Brand Identity includes logos, typography, color systems, iconography, and graphic elements.",
          },
          {
            topic:
              "Brand Systems include guidelines, standards, templates, asset libraries, and usage rules.",
          },
          { topic: "Brand Identity creates consistency." },
          { topic: "Brand Systems maintain consistency as a business grows." },
        ]}
        pageUrl="https://blossomrocket.studio/services#brand-identity-vs-brand-system"
      >
        <CardComparison
          heading="Brand Identity vs Brand System"
          leftLabel="Brand Identity"
          rightLabel="Brand System"
          pairs={[
            {
              left: "Defines what a brand looks like.",
              right: "Defines how a brand is applied.",
            },
            {
              left: "Includes logos, typography, color systems, iconography, and graphic elements.",
              right:
                "Includes guidelines, standards, templates, asset libraries, and usage rules.",
            },
            {
              left: "Creates consistency.",
              right: "Maintains consistency as a business grows.",
            },
          ]}
        />
      </SectionLayout>
      {/* ── Section 5: FAQs ── */}
      <FAQSection
        groups={faqs}
        theme="neutral"
        pageUrl="https://blossomrocket.studio/services/brand-identity"
      />
    </div>
  );
}
