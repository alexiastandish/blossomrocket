import { CalendlyButton } from "@/components/CalendlyButton";
import { CTASlots } from "@/components/CTASlot";
import FAQSection from "@/components/faqs/FAQSection";
import Hero from "@/components/Hero";
import { CardCallout, CardList, SectionLayout } from "@/components/section";
import SectionItemList from "@/components/section/ItemList";
import rawFaqs from "@/data/faqs/solutions/on-demand-kits.json";
import { FAQGroup } from "@/lib/types/faqs";

const faqs = rawFaqs as FAQGroup[];

export default function page() {
  return (
    <div>
      <Hero
        theme="dark"
        heading={
          <>
            On-Demand Kits Combine
            <em className="grad-text not-italic">
              {" "}
              Branded Merchandise, Personalization & Fulfillment.
            </em>
          </>
        }
        body={
          <>
            Blossom Rocket On-Demand Kits are scalable branded kit programs
            powered by SplashBrands that combine branded merchandise,
            personalized print, coordinated packaging, and fulfillment in one
            program. Businesses can use On-Demand Kits for new hire onboarding,
            customer and sales outreach, supplier and partner appreciation,
            events and milestones, or flexible merchandise programs that do not
            require a custom box.
          </>
        }
        ctaSlot={
          <CTASlots
            ctas={[
              {
                label:
                  "Explore On-Demand Kit Options with Blossom Rocket & Splash Brands",
                variant: "primary",
                href: "https://splashbrands-blanks-store.orderspath.com/c/kits/",
              },
            ]}
          />
        }
        pillItems={[
          "New Hire & Onboarding",
          "Customer & Sales Programs",
          "Supplier & Partner Kits",
          "Events & Occasions",
          "Flexible Formats",
        ]}
      />
      {/* Section 3: why brand kits matter */}
      <SectionLayout
        id="why-branded-kits-matter"
        eyebrow="Why Branded Kits Matter"
        theme="light"
        cols={[1, 1]}
        mobileOrder="left-first"
        heading={
          <>
            On-Demand Kits Connect
            <em className="grad-text not-italic"> Brand Experience </em>
            With
            <em className="grad-text not-italic"> Scalable Fulfillment.</em>
          </>
        }
        ctaSlot={
          <CTASlots
            theme="light"
            ctas={[
              {
                label: "Build a Branded Kit Program with Blossom Rocket",
                variant: "primary",
              },
            ]}
          />
        }
        subtext="On-Demand Kits bring branded products, personalization, packaging, fulfillment, and distribution into one coordinated program. Blossom Rocket helps businesses create branded kit experiences that support stronger first impressions, more efficient program management, and scalable distribution across employees, customers, partners, and events."
        schemaItems={[
          { topic: "Brand Experience" },
          { topic: "Operational Efficiency" },
          { topic: "Scalable Distribution" },
        ]}
        pageUrl="https://blossomrocket.studio/solutions/on-demand-kits#why-branded-kits-matter"
      >
        <CardList
          heading="Branded Kit Programs Support:"
          items={[
            { topic: "Brand Experience" },
            { topic: "Operational Efficiency" },
            {
              topic: "Scalable Distribution",
            },
          ]}
        />
        <CardCallout heading="First impressions, onboarding, and partnerships deserve more than a logo on a box." />
      </SectionLayout>

      {/* Section 3: centralized-kit-management */}
      <SectionLayout
        id="centralized-kit-management"
        eyebrow="Centralized Kit Management"
        theme="dark"
        cols={[1, 1]}
        mobileOrder="left-first"
        desktopOrder="reverse"
        heading={
          <>
            On-Demand Kits Centralize{" "}
            <em className="grad-text not-italic">
              Sourcing, Inventory, Fulfillment & Distribution.
            </em>
          </>
        }
        ctaSlot={
          <CTASlots
            theme="light"
            ctas={[
              {
                label: "Plan an On-Demand Kit Program with Blossom Rocket",
                variant: "primary",
              },
            ]}
          />
        }
        subtext="On-Demand Kit programs centralize the operational work required to deliver branded kits. SplashBrands manages sourcing, decoration, print, inventory, and distribution under one program, which gives businesses a single system for controlling branded assets and moving kits from production to recipients."
        schemaItems={[
          { topic: "Centralized Sourcing" },
          { topic: "Inventory & Asset Control" },
          { topic: "Managed Fulfillment" },
          { topic: "Nationwide Shipping" },
          { topic: "Direct-to-Recipient Fulfillment" },
          { topic: "Bulk Program Distribution" },
        ]}
        pageUrl="https://blossomrocket.studio/solutions/on-demand-kits#centralized-kit-management"
      >
        <CardList
          heading="Recipient-Level Personalization Can Include::"
          items={[
            { topic: "Centralized Sourcing" },
            { topic: "Inventory & Asset Control" },
            {
              topic: "Managed Fulfillment",
            },
            {
              topic: "Nationwide Shipping",
            },
            {
              topic: "Direct-to-Recipient Fulfillment",
            },
            {
              topic: "Bulk Program Distribution",
            },
          ]}
        />
        <CardCallout heading="Variable data allows one branded kit program to produce different recipient-specific print and messaging without changing the overall program structure." />
      </SectionLayout>
      {/* Section 4: personalized-kit-management */}
      <SectionLayout
        id="personalized-kit-experiences"
        eyebrow="Personalized Kit Experiences"
        theme="brand"
        cols={[1, 1]}
        layout="stacked"
        mobileOrder="left-first"
        heading={
          <>
            On-Demand Kits{" "}
            <em className="grad-text not-italic">
              Create Recipient-Specific Experiences{" "}
            </em>
            Without the Operational Overhead.
          </>
        }
        subtext="Brand Systems help businesses scale without sacrificing consistency. Blossom Rocket Brand System services are designed to help organizations create repeatable processes that support future growth. The result is a more consistent brand experience across both digital and physical channels."
        schemaItems={[
          { topic: "Add personalized business cards" },
          { topic: "Custom welcome letters" },
          { topic: "QR codes linked to digital portals" },
          { topic: "Variable data printing" },
          { topic: "Pre-loaded gift cards or store credits" },
          { topic: "Branded products" },
          { topic: "Coordinated packaging" },
          { topic: "Direct-to-recipient fulfillment" },
        ]}
        pageUrl="https://blossomrocket.studio/solutions/on-demand-kits#personalized-kit-experiences"
      >
        <CardList
          layout="stacked"
          heading="A Brand System helps teams:"
          items={[
            { topic: "Add personalized business cards" },
            { topic: "Custom welcome letters" },
            { topic: "QR codes linked to digital portals" },
            { topic: "Variable data printing" },
            { topic: "Pre-loaded gift cards or store credits" },
            { topic: "Branded products" },
            { topic: "Coordinated packaging" },
            { topic: "Direct-to-recipient fulfillment" },
          ]}
        />
        <div className="mb-4" />
        <CardCallout heading="As more people contribute to a brand, clear systems become increasingly important." />
      </SectionLayout>
      {/* -- Section 5: What's Included -- */}
      <SectionItemList
        pageUrl="https://blossomrocket.studio/solutions/on-demand-kits#what-is-included"
        layout="stacked"
        id="what-is-included"
        theme="brandSoft"
        eyebrow="What Is Included?"
        subtext="Blossom Rocket On-Demand Kits can combine branded merchandise, personalized print, packaging, fulfillment, and flexible distribution into one program. The exact components depend on the audience, occasion, budget, scale, and delivery requirements of the kit program."
        heading={
          <>
            <em className="grad-text not-italic"> What&apos;s Included </em> in
            an On-Demand Kit Program?
          </>
        }
        listHeading="Blossom Rocket On-Demand Kit Programs Can Include:"
        items={[
          {
            topic: "Branded Merchandise",
            description:
              "Branded apparel, desk essentials, drinkware, promotional products, co-branded merchandise, seasonal gifts, and other products can be selected around the purpose of the kit.",
          },
          {
            topic: "Personalized Print & Messaging",
            description:
              "Welcome letters, appreciation letters, business cards, recognition cards, variable-data pieces, QR codes, and other printed materials can carry recipient-specific information.",
          },
          {
            topic: "Coordinated Packaging",
            description:
              "Custom inserts, branded boxes, custom box interiors, and program-specific messaging can connect the products and printed materials into a single branded presentation.",
          },
          {
            topic: "Fulfillment & Distribution",
            description:
              "Programs can support managed fulfillment, nationwide shipping, direct-to-recipient fulfillment, and bulk distribution to offices, events, branches, or other central destinations.",
          },
          {
            topic: "Flexible Kit Formats",
            description:
              "Programs can use a custom box, branded tote or bag, curated merchandise bundle without a box, event-ready handout kit, or seasonal appreciation shipment.",
          },
        ]}
        ctaSlot={
          <CTASlots
            theme="light"
            ctas={[
              {
                label: "Create Your On-Demand Kit with Blossom Rocket",
                variant: "primary",
              },
            ]}
          />
        }
      />
      {/* -- Section 6: Core Kit Programs -- */}
      <SectionLayout
        id="core-kit-programs"
        eyebrow="Core Kit Programs"
        theme="dark"
        cols={[1, 1]}
        mobileOrder="left-first"
        desktopOrder="maintain"
        heading={
          <>
            On-Demand Kit Programs Support On-Demand Kits Centralize{" "}
            <em className="grad-text not-italic">
              Onboarding, Sales, Partnerships, Events & Recognition.
            </em>
          </>
        }
        ctaSlot={
          <CTASlots theme="light">
            <CalendlyButton theme="dark">
              Talk With an Expert About Your On-Demand Kit Needs
            </CalendlyButton>
          </CTASlots>
        }
        subtext="SplashBrands structures branded kit programs around recurring business relationships and occasions. Blossom Rocket can use these program types to create kits for employees, customers, suppliers, partners, events, milestones, and high-volume merchandise rollouts."
        schemaItems={[
          { topic: "New Hire & Onboarding" },
          { topic: "Customer & Sales Programs" },
          { topic: "Supplier & Partner Kits" },
          { topic: "Events & Occasions" },
          { topic: "Flexible Formats" },
        ]}
        pageUrl="https://blossomrocket.studio/solutions/on-demand-kits#core-kit-programs"
      >
        <CardList
          heading="Blossom Rocket On-Demand Kit Programs Include:"
          items={[
            {
              topic: "New Hire & Onboarding",
              description:
                "New hire and onboarding kits can include personalized welcome letters, variable-data business cards, branded apparel and desk essentials, custom inserts and packaging, and personalization across print and products.",
            },
            {
              topic: "Customer & Sales Programs",
              description:
                "Customer and sales programs use branded kits for outreach and relationship-building initiatives that combine merchandise, print, packaging, and fulfillment.",
            },
            {
              topic: "Supplier & Partner Kits",
              description:
                "Supplier and partner kits can include personalized appreciation letters, variable-data recognition cards, co-branded merchandise, seasonal gifts, custom box interiors, and direct-to-recipient shipping.",
            },
            {
              topic: "Events & Occasions",
              description:
                "Event and milestone programs can support baby and family celebrations, birthdays and anniversaries, employee recognition and awards, holiday campaigns, seasonal programs, and other employee or client occasions.",
            },
            {
              topic: "Flexible Formats",
              description:
                "Flexible formats include branded tote or bag kits, curated merchandise bundles without a box, event-ready handout kits, and seasonal appreciation shipments for different budgets, scales, and distribution needs.",
            },
          ]}
        />
        <CardCallout heading="Not every On-Demand Kit requires a custom box. Flexible formats can reduce packaging requirements while still supporting high-volume rollouts and direct-to-recipient shipping." />
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
