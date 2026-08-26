import { CTASlots } from "@/components/CTASlot";
import FAQSection from "@/components/faqs/FAQSection";
import Hero from "@/components/Hero";
import {
  CardCallout,
  CardGrid,
  CardList,
  CardPills,
  SectionLayout,
} from "@/components/section";
import CardComparison from "@/components/section/CardComparison";
import ColorPalette from "@/components/svgs/ColorPalette";
import GraphicElements from "@/components/svgs/GraphicElements";
import Iconography from "@/components/svgs/Iconography";
import LogoDesign from "@/components/svgs/LogoDesign";
import Typography from "@/components/svgs/Typography";
import VisualIdentity from "@/components/svgs/VisualIdentity";
import faqs from "@/data/faqs/services/brand-identity.json";
import Image from "next/image";

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
                  "Get in touch with Blossom Rocket to launch your brand into orbit 🚀",
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
        cols={[5, 3]}
        mobileOrder="left-first"
        ctaSlot={
          <CTASlots
            ctas={[
              {
                label: "Explore Branding Projects by Blossom Rocket",
                variant: "primary",
                href: "/work?tag=brand-identity",
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
        pageUrl="https://blossomrocket.studio/services#brand-identity"
      >
        <div className="self-stretch order-2 lg:order-1 flex items-stretch">
          <Image
            src="https://imagedelivery.net/phVukYz6oCUHQR4c37ZNwQ/1a2b038f-b24e-41e5-b906-a6f62d58c800/public"
            alt="Blossom Rocket Ivory Promo Products"
            width={1200}
            height={900}
            className="h-full w-auto object-contain rounded-2xl shadow-2xl"
            priority
          />
        </div>
      </SectionLayout>

      {/* ──What's Included ── */}
      <SectionLayout
        id="brand-identity-included"
        theme="brandSoft"
        layout="stacked"
        eyebrow="Brand Identity Services"
        heading={
          <>
            <em className="grad-text not-italic">What&apos;s included</em> in
            Brand Identity services?
          </>
        }
        subtext="What's included in Blossom Rocket's brand identity services:"
        pageUrl="https://blossomrocket.studio/services/brand-identity"
        schemaItems={[
          { topic: "Visual Identity" },
          { topic: "Logo Design" },
          { topic: "Color Palette" },
          { topic: "Typography" },
          { topic: "Iconography" },
          { topic: "Graphic Elements" },
        ]}
      >
        <CardGrid
          columns={3}
          items={[
            { topic: "Visual Identity", image: <VisualIdentity /> },
            { topic: "Logo Design", image: <LogoDesign /> },
            { topic: "Color Palette", image: <ColorPalette /> },
            { topic: "Typography", image: <Typography /> },
            { topic: "Iconography", image: <Iconography /> },
            { topic: "Graphic Elements", image: <GraphicElements /> },
          ]}
        />
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
        pageUrl="https://blossomrocket.studio/services/brand-identity"
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
