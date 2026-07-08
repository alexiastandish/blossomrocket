import { SectionTheme } from "./section";

export interface FAQItem {
  /** Unique id, used for anchor links + schema @id (e.g. "services-what-services") */
  id: string;
  question: string;
  /** Plain-text answer. Used verbatim in JSON-LD, so keep markup-free. */
  answer: string;
}

export interface FAQGroup {
  /** Unique id for the group, used for anchor links (e.g. "brand-foundation-services") */
  id: string;
  /** Heading shown above the group, e.g. "Brand Foundation Services" */
  title: string;
  items: FAQItem[];
  cta?: {
    label: string;
    href: string;
  };
}

export interface FAQSectionProps {
  /** Eyebrow/kicker text above the title, e.g. "FAQ" */
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  groups: FAQGroup[];
  id?: string;
  theme?: SectionTheme;
  /** Canonical URL of the page this FAQ lives on — required for correct JSON-LD @id values */
  pageUrl: string;
  /** Renders a topic filter/jump nav above the accordion. Default true. */
  showTopicNav?: boolean;
}
