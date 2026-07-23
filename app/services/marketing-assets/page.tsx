import FAQSection from "@/components/faqs/FAQSection";
import faqs from "@/data/faqs/services/marketing-assets.json";

import Hero from "@/components/Hero";
import CardGrid from "@/components/section/CardGrid";
import CardList from "@/components/section/CardList";
import CardLinkGrid from "@/components/section/CardLinkGrid";
import CardStatBento from "@/components/section/CardStatBento";
import { SectionLayout } from "@/components/section";
import SectionCardOverlayList from "@/components/section/CardOverlayList";
import { CTASlots } from "@/components/CTASlot";
import BrandAwareness from "@/components/svgs/BrandAwareness";
import LeadGeneration from "@/components/svgs/LeadGeneration";
import CustomerEngagement from "@/components/svgs/CustomerEngagement";
import ProductLaunches from "@/components/svgs/ProductLaunches";
import EventMarketing from "@/components/svgs/EventMarketing";
import SalesEnablement from "@/components/svgs/SalesEnablement";
import CustomerRetention from "@/components/svgs/CustomerRetention";
import PromotionalCampaigns from "@/components/svgs/PromotionalCampaigns";
import OneOffProjects from "@/components/svgs/OneOffProjects";
import OngoingSupport from "@/components/svgs/OngoingSupport";
import BuiltToConnect from "@/components/svgs/BuiltToConnect";

const PAGE_URL = "https://blossomrocket.studio/services/marketing-assets";

export default function MarketingAssets() {
  return (
    <div>
      {/* ── Section 1: Hero ── */}
      <Hero
        theme="light"
        heading={
          <>
            Creating Consistent{" "}
            <em className="grad-text not-italic">
              Marketing&nbsp;Experiences{" "}
            </em>
            Across All Channels.
          </>
        }
        body="Marketing Assets help businesses create marketing materials across campaigns, social media, events, sales initiatives, and customer communications. Blossom Rocket develops campaign creative, social media assets, presentation templates, event materials, email graphics, and digital advertising assets that align with Brand Identity and Brand System standards while supporting engagement, lead generation, and business growth."
        ctaSlot={
          <CTASlots
            ctas={[
              {
                label:
                  "Create Marketing Assets That Support Business Growth 🚀",
                variant: "primary",
              },
            ]}
          />
        }
      />

      {/* ── Section 2: Customer Journey — SectionLayout (stacked) + CardGrid ──
          8 short capability items map cleanly onto the numbered grid cells */}
      <SectionLayout
        id="customer-journey"
        theme="brandSoft"
        layout="stacked"
        eyebrow="Every Stage, Covered"
        heading={
          <>
            Blossom Rocket&apos;s Marketing Services Support{" "}
            <em className="grad-text not-italic">Every Stage </em> Of The{" "}
            <em className="grad-text not-italic">Customer Journey.</em>
          </>
        }
        subtext="Marketing assets play an important role throughout the customer experience. Every interaction contributes to how customers perceive a business. Consistent marketing materials help create stronger and more recognizable experiences across every stage of the customer journey."
        ctaSlot={
          <CTASlots
            ctas={[
              {
                label:
                  "Create marketing assets that support every stage of your journey",
                variant: "primary",
              },
            ]}
          />
        }
        pageUrl={PAGE_URL}
        schemaItems={[
          { topic: "Brand Awareness" },
          { topic: "Lead Generation" },
          { topic: "Customer Engagement" },
          { topic: "Product Launches" },
          { topic: "Event Marketing" },
          { topic: "Sales Enablement" },
          { topic: "Customer Retention" },
          { topic: "Promotional Campaigns" },
        ]}
      >
        <CardGrid
          columns={4}
          items={[
            { topic: "Brand Awareness", image: <BrandAwareness /> },
            { topic: "Lead Generation", image: <LeadGeneration /> },
            { topic: "Customer Engagement", image: <CustomerEngagement /> },
            { topic: "Product Launches", image: <ProductLaunches /> },
            { topic: "Event Marketing", image: <EventMarketing /> },
            { topic: "Sales Enablement", image: <SalesEnablement /> },
            { topic: "Customer Retention", image: <CustomerRetention /> },
            { topic: "Promotional Campaigns", image: <PromotionalCampaigns /> },
          ]}
        />
      </SectionLayout>

      {/* ── Section 3: Marketing Asset Creation — SectionCardOverlayList (pills variant) ──
          Narrative problem/solution paired with a pill-style overlay showing
          the systems it supports */}
      <SectionCardOverlayList
        id="marketing-asset-creation"
        theme="dark"
        eyebrow="Built To Scale"
        heading={
          <>
            Marketing assets{" "}
            <em className="grad-text not-italic">
              that scale with your business.
            </em>
          </>
        }
        subtext="Many businesses create marketing assets one project at a time. A social media graphic is designed for one campaign. A presentation is created for a sales meeting. An event banner is developed for a trade show. Over time, marketing materials become inconsistent, design styles evolve independently, and assets no longer feel connected to the same brand."
        cardHeading="Blossom Rocket helps businesses build asset systems that support:"
        cardVariant="pills"
        items={[
          { topic: "Social Media" },
          { topic: "Presentations" },
          { topic: "Event Materials" },
          { topic: "Email Marketing" },
          { topic: "Digital Advertising" },
          { topic: "Future Campaigns" },
        ]}
        callout={{
          heading: "Consistency improves efficiency.",
          body: "When every asset is built on the same brand system, new campaigns launch faster and feel connected from day one.",
        }}
        pageUrl={PAGE_URL}
      />

      {/* ── Section 4: What's Included — SectionLayout (stacked) + CardList ──
          7 services each with a real description — fits a description-bearing
          list rather than a grid since the content here is denser */}
      <SectionLayout
        id="marketing-asset-included"
        theme="light"
        layout="split"
        eyebrow="Marketing Asset Services"
        heading={
          <>
            <em className="grad-text not-italic">What&apos;s Included </em>
            in Our Marketing Asset Services?
          </>
        }
        pageUrl={PAGE_URL}
        ctaSlot={
          <CTASlots
            ctas={[
              {
                label:
                  "Schedule a Consultation to Discuss Your Marketing Goals",
                variant: "primary",
              },
            ]}
          />
        }
      >
        <CardList
          heading="Marketing Asset Services Include:"
          items={[
            {
              topic: "Campaign Creative",
              description:
                "Campaign Creative supports product launches, promotions, seasonal campaigns, brand initiatives, and marketing programs. Blossom Rocket develops creative assets that help businesses communicate effectively while maintaining consistency across campaign touchpoints.",
            },
            {
              topic: "Social Media Templates",
              description:
                "Social Media Templates provide reusable frameworks that help teams create content more efficiently. Templates support consistency across social channels while simplifying ongoing content creation.",
            },
            {
              topic: "Social Media Content",
              description:
                "Social Media Content helps businesses connect with customers, communities, and audiences through branded visual communication. Consistent social content helps strengthen recognition, engagement, and visibility over time.",
            },
            {
              topic: "Event Materials",
              description:
                "Event Materials support conferences, networking events, trade shows, community events, internal initiatives, and promotional programs. These materials help businesses create professional and cohesive event experiences.",
            },
            {
              topic: "Trade Show Graphics",
              description:
                "Trade Show Graphics include displays, banners, booth graphics, signage, and supporting event assets. Effective trade show materials help businesses create recognizable and engaging branded environments.",
            },
            {
              topic: "Email Graphics",
              description:
                "Email Graphics support newsletters, announcements, promotional campaigns, customer communications, and marketing initiatives. Branded email assets help create a more connected customer experience across digital channels.",
            },
            {
              topic: "Digital Advertising Assets",
              description:
                "Digital Advertising Assets support campaigns across social media, search engines, display networks, and other digital advertising platforms. Consistent advertising creative helps improve recognition and campaign effectiveness.",
            },
          ]}
        />
      </SectionLayout>

      {/* ── Section 5: One-off and Ongoing — SectionLayout + CardStatBento ──
          Two contrasting modes (one-off vs ongoing) suit a bento layout that
          visually weighs them against each other */}
      <SectionLayout
        id="one-off-and-ongoing"
        theme="dark"
        eyebrow="Flexible By Design"
        heading={
          <>
            We Support <em className="grad-text not-italic">One-Off </em>{" "}
            Projects and <em className="grad-text not-italic">Ongoing</em>{" "}
            Marketing Efforts.
          </>
        }
        subtext="Not every project requires a complete marketing system. Sometimes businesses need a trade show display for an upcoming event. Other times they need social media content for a campaign, presentation materials for a sales initiative, or advertising creative for a product launch. Blossom Rocket supports both one-off creative projects and ongoing marketing initiatives. Every asset is designed to support immediate goals while contributing to a more cohesive marketing presence over time."
        ctaSlot={
          <CTASlots
            ctas={[
              {
                label:
                  "Launch Your Next Campaign, Event, Or Marketing Initiative",
                variant: "primary",
              },
            ]}
          />
        }
        stickyRight={false}
      >
        <CardStatBento
          items={[
            {
              label: "One-Off Projects",
              description:
                "Trade show displays, single campaigns, individual events.",
              size: "sm",
              graphic: <OneOffProjects />,
            },
            {
              label: "Ongoing Support",
              description: "Recurring social, email, and advertising creative.",
              size: "wide",
              graphic: <OngoingSupport />,
            },
            {
              label: "Built To Connect",
              description: "Every asset reinforces the same brand system.",
              size: "md",
              graphic: <BuiltToConnect />,
            },
          ]}
        />
      </SectionLayout>

      {/* ── Section 6: Digital And Physical Marketing Channels — SectionLayout (stacked) + CardLinkGrid ──
          Functions as a closing CTA section, so a link-style closer with
          channel coverage fits well */}
      <SectionLayout
        id="digital-physical-channels"
        theme="light"
        layout="stacked"
        eyebrow="Every Channel, Every Environment"
        heading="Designed For Digital And Physical Marketing Channels"
        subtext="Modern marketing happens across multiple platforms and environments. Creating consistent marketing materials across channels helps businesses communicate more effectively and build stronger connections with their audiences."
        ctaSlot={
          <CTASlots
            ctas={[
              {
                label:
                  "Launch with marketing assets that work across every channel and customer touchpoint",
                variant: "primary",
              },
            ]}
          />
        }
        pageUrl={PAGE_URL}
      >
        <CardLinkGrid
          heading="Marketing Assets That Work Across Channels"
          footerText="..."
          items={[
            { label: "Social Media" },
            { label: "Email Marketing" },
            {
              label: "Digital Advertising",
            },
            {
              label: "Sales Presentations",
            },
            { label: "Events" },
            { label: "Trade Shows" },
            {
              label: "Promotional Campaigns",
            },
            {
              label: "Customer Communications",
            },
          ]}
        />
      </SectionLayout>

      {/* ── Section 7: FAQs ── */}
      <FAQSection
        groups={faqs}
        theme="dark"
        pageUrl="https://blossomrocket.studio/services/digital-design"
      />
    </div>
  );
}
