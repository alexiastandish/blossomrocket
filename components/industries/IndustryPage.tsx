import type { Metadata } from "next";
import Hero from "@/components/Hero";
import { SectionLayout, CardList } from "@/components/section";
import CardLinkGrid from "@/components/section/CardLinkGrid";
import { CTASlots } from "@/components/CTASlot";
import type { Industry } from "@/data/industries";

const SITE_URL = "https://blossomrocket.studio";

export function industryUrl(industry: Industry) {
  return `${SITE_URL}/industries/${industry.slug}`;
}

export function industryMetadata(industry: Industry): Metadata {
  const url = industryUrl(industry);
  return {
    title: industry.title,
    description: industry.description,
    keywords: industry.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: industry.title,
      description: industry.description,
      url,
      siteName: "Blossom Rocket",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: industry.title,
      description: industry.description,
    },
  };
}

// One connected graph per page; provider and website reuse the root layout's
// entity ids so crawlers don't see duplicate organizations.
function industrySchema(industry: Industry) {
  const url = industryUrl(industry);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: industry.title,
        description: industry.description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: industry.about.map((name) => ({ "@type": "Thing", name })),
        mentions: { "@id": "https://splashbrands.com/#organization" },
        mainEntity: { "@id": `${url}#service` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: industry.serviceName,
        serviceType: "Company stores and branded merchandise programs",
        url,
        description: industry.hero.body,
        provider: { "@id": `${SITE_URL}/#organization` },
        audience: { "@type": "Audience", audienceType: industry.audience },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${industry.name} Merchandise Applications`,
          itemListElement: industry.solutions.applications.map((app) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: app.topic,
              description: app.description,
            },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Industries",
            item: `${SITE_URL}/industries`,
          },
          { "@type": "ListItem", position: 3, name: industry.name, item: url },
        ],
      },
    ],
  };
}

export default function IndustryPage({ industry }: { industry: Industry }) {
  const url = industryUrl(industry);
  const { hero, solutions, benefits } = industry;

  return (
    <>
      <script
        id="schema-industry"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(industrySchema(industry)),
        }}
      />

      <div>
        {/* ── Section 1: Hero ── */}
        <Hero
          theme="light"
          pillItems={hero.pills}
          heading={
            <>
              {hero.headingLead}{" "}
              <em className="grad-text not-italic">{hero.headingAccent}</em>
            </>
          }
          body={hero.body}
          ctaSlot={
            <CTASlots
              ctas={[
                {
                  label: hero.cta,
                  href: "#industry-applications",
                  variant: "primary",
                },
              ]}
            />
          }
        />

        {/* ── Section 2: Industry applications
            SectionLayout (stacked) + CardList ── */}
        <SectionLayout
          id="industry-applications"
          theme="light"
          layout="stacked"
          eyebrow={solutions.eyebrow}
          heading={
            <>
              {solutions.headingLead}{" "}
              <em className="grad-text not-italic">
                {solutions.headingAccent}
              </em>
            </>
          }
          subtext={solutions.body}
          pageUrl={url}
          schemaItems={solutions.applications.map(({ topic }) => ({ topic }))}
        >
          <CardList
            heading={`${industry.name} Applications:`}
            layout="stacked"
            items={solutions.applications}
          />
        </SectionLayout>

        {/* ── Section 3: Platform benefits & conversion
            SectionLayout (split) + CardList + CardLinkGrid ── */}
        <SectionLayout
          id="industry-platform"
          theme="dark"
          eyebrow={benefits.eyebrow}
          heading={
            <>
              {benefits.headingLead}{" "}
              <em className="grad-text not-italic">{benefits.headingAccent}</em>
            </>
          }
          subtext={benefits.body}
          ctaSlot={
            <CTASlots
              theme="dark"
              ctas={[{ label: benefits.cta, variant: "primary" }]}
            />
          }
          cols={[1, 1]}
        >
          <div className="flex flex-col gap-6">
            <CardList
              heading={benefits.closing}
              items={benefits.capabilities.map((topic) => ({ topic }))}
            />
            <CardLinkGrid
              heading="Related Solutions"
              items={benefits.links}
              footerText="Blossom Rocket provides the merchandise strategy and brand implementation. SplashBrands provides the company store technology, on-demand production, and fulfillment."
            />
          </div>
        </SectionLayout>
      </div>
    </>
  );
}
