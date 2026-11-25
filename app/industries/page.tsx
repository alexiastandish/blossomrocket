import type { Metadata } from "next";
import Hero from "@/components/Hero";
import { SectionLayout } from "@/components/section";
import CardLinkGrid from "@/components/section/CardLinkGrid";
import { CTASlots } from "@/components/CTASlot";
import { industries } from "@/data/industries";

const SITE_URL = "https://blossomrocket.studio";
const PAGE_URL = `${SITE_URL}/industries`;

const TITLE =
  "Company Stores & Branded Merchandise by Industry | Blossom Rocket";
const META_DESCRIPTION =
  "Company stores and branded merchandise programs for healthcare, technology, manufacturing, construction, franchise, and financial services organizations.";

export const metadata: Metadata = {
  title: TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "Company Stores by Industry",
    "Branded Merchandise Solutions for Businesses",
    "On-Demand Merchandise Programs",
    "Multi-Location Merchandise Management",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: META_DESCRIPTION,
    url: PAGE_URL,
    siteName: "Blossom Rocket",
    type: "website",
  },
  twitter: { card: "summary", title: TITLE, description: META_DESCRIPTION },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: TITLE,
      description: META_DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: industries.map((industry, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: industry.name,
          url: `${PAGE_URL}/${industry.slug}`,
        })),
      },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Industries",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function Industries() {
  return (
    <>
      <script
        id="schema-industries"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div>
        <Hero
          theme="light"
          pillItems={industries.map(({ name }) => name)}
          heading={
            <>
              Company Stores & Branded Merchandise{" "}
              <em className="grad-text not-italic">by Industry.</em>
            </>
          }
          body="Blossom Rocket provides branded merchandise programs for organizations managing multiple locations, departments, and employee populations. Every program runs on SplashBrands-powered company stores, with on-demand production that reduces reliance on bulk inventory."
          ctaSlot={
            <CTASlots
              ctas={[
                {
                  label: "Find Your Industry",
                  href: "#industries-list",
                  variant: "primary",
                },
              ]}
            />
          }
        />

        <SectionLayout
          id="industries-list"
          theme="dark"
          eyebrow="Industries We Serve"
          heading={
            <>
              Merchandise Programs Built Around{" "}
              <em className="grad-text not-italic">How Your Industry Works.</em>
            </>
          }
          subtext="Hospitals need staff apparel across facilities. Franchises need co-branded merchandise for every location. Field crews need workwear that fits as teams grow. Each industry page explains the merchandise challenges in that sector and how company stores solve them."
          ctaSlot={
            <CTASlots
              theme="dark"
              ctas={[
                {
                  label: "Explore On-Demand Company Stores",
                  href: "/solutions/company-stores",
                  variant: "primary",
                },
              ]}
            />
          }
          cols={[1, 1]}
        >
          <CardLinkGrid
            heading="Choose Your Industry:"
            items={industries.map(({ name, slug }) => ({
              label: name,
              href: `/industries/${slug}`,
            }))}
            footerText="Not listed? Company Stores, Co-Branding, and Swag Storefronts work for any organization that orders branded merchandise across teams or locations."
          />
        </SectionLayout>
      </div>
    </>
  );
}
