import type { FaqItem } from "@/lib/types/blog";
import { FaqAccordionItem } from "@/components/blog/FaqAccordionItem";

export function ArticleFaqSection({ faqs }: { faqs: FaqItem[] }) {
  return (
    <section aria-label="Frequently asked questions" className="mt-12">
      <h2 className="mb-4 text-2xl font-semibold text-text-primary">FAQ</h2>
      <div className="divide-y divide-border-subtle">
        {faqs.map((faq, i) => (
          <FaqAccordionItem
            key={faq.question}
            faq={faq}
            defaultOpen={i === 0}
          />
        ))}
      </div>
    </section>
  );
}
