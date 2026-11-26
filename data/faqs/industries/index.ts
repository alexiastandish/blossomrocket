import type { FAQGroup } from "@/lib/types/faqs";
import healthcare from "./healthcare-life-sciences.json";
import technology from "./technology-professional-services.json";
import manufacturing from "./manufacturing-industrial.json";
import construction from "./construction-field-services.json";
import retail from "./retail-hospitality-franchise.json";
import financial from "./financial-services-insurance.json";

/** Grouped FAQs per industry page, keyed by industry slug. */
export const industryFaqs: Record<string, FAQGroup[]> = {
  "healthcare-life-sciences": healthcare,
  "technology-professional-services": technology,
  "manufacturing-industrial": manufacturing,
  "construction-field-services": construction,
  "retail-hospitality-franchise": retail,
  "financial-services-insurance": financial,
};
