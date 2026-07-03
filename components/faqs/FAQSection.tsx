import FAQAccordionGrouped from "./FAQAccordionGrouped";
import { FAQSectionProps } from "@/lib/types/faqs";
import { sectionTokens } from "./faqSectionTokens";
import Script from "next/script";

function buildFAQSchema(groups: FAQSectionProps["groups"], pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: groups.flatMap((group) =>
      group.items.map((item) => ({
        "@type": "Question",
        "@id": `${pageUrl}#${item.id}`,
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    ),
  };
}

export default function FAQSection({
  groups,
  theme = "light",
  pageUrl,
  id,
  showTopicNav = true,
}: FAQSectionProps) {
  const activeTokens = sectionTokens[theme];
  const schema = buildFAQSchema(groups, pageUrl);
  const schemaId = id ?? "section";

  return (
    <section
      id={id}
      className={[
        "relative overflow-hidden",
        activeTokens.bg,
        activeTokens.text,
      ].join(" ")}
      style={{ padding: "clamp(80px,11vw,160px) clamp(20px,5vw,60px)" }}
      aria-labelledby={`${schemaId}-heading`}
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      {/* Server-rendered JSON-LD — present in initial HTML for crawlers/AI search */}
      <Script
        id={`schema-itemlist-${schemaId}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Subtle background glow — kept low-opacity so it reads as texture, not decoration */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background: activeTokens.orb1,
          filter: "blur(80px)",
          opacity: 0.12,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-[30%] -right-40 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{
          background: activeTokens.orb2,
          filter: "blur(80px)",
          opacity: 0.12,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/4 w-[320px] h-[320px] rounded-full pointer-events-none"
        style={{
          background: activeTokens.orb3,
          filter: "blur(80px)",
          opacity: 0.12,
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="text-center mb-14 rv">
          <h2
            className={`font-semibold leading-[1.06] tracking-[-0.02em] mb-5 ${activeTokens.heading} h2`}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <FAQAccordionGrouped
          groups={groups}
          activeTokens={activeTokens}
          showTopicNav={showTopicNav}
        />
      </div>
    </section>
  );
}

export type { FAQSectionProps };
