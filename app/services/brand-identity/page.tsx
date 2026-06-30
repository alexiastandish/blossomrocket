import Hero from "@/components/Hero";
import {
  CardCallout,
  CardList,
  CardPills,
  SectionLayout,
} from "@/components/section";
import CardComparison from "@/components/section/CardComparison";

export default function page() {
  return (
    <div>
      <Hero
        theme="light"
        heading={
          <>
            Brand Identity that Builds{" "}
            <em className="grad-text not-italic">Recognition and Trust</em>.
          </>
        }
        body={`Blossom Rocket helps businesses create Brand Identity systems that establish consistency across company stores, digital design, marketing assets, print and promo products.`}
        ctas={[
          {
            label: "Schedule a call today to launch your brand into orbit 🚀",
            href: "/contact",
            variant: "primary",
          },
        ]}
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
        cols={[4, 4]}
        mobileOrder="left-first"
        eyebrow="More Than a Logo"
        heading={
          <>Many businesses think Brand Identity begins and ends with a logo.</>
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
        id="brand-systems"
        theme="light"
        mobileOrder="left-first"
        desktopOrder="reverse"
        eyebrow="Designed to Scale "
        heading={
          <>
            Brand Identity Designed to{" "}
            <em className="grad-text not-italic">Scale</em> for{" "}
            <em className="grad-text not-italic">Expansion</em>.
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
      <SectionLayout
        layout="stacked"
        theme="dark"
        eyebrow="Brand Fundamentals"
        heading="What Is the Difference Between Brand Identity and a Brand System?"
        subtext="Brand Identity defines what a brand looks like. A Brand System defines how a brand is applied — together they create consistency and help it scale."
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
    </div>
  );
}
