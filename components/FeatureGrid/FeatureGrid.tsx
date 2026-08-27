import { ReactNode } from "react";
import SectionLabel from "../SectionLabel";
import FeatureGridCard from "./FeatureGridCard";
import { SectionTheme } from "@/lib/types/section";
import { tokens } from "@/lib/utils/sectionTailwindTokens";

export type FeatureItem = {
  num: string;
  title: string;
  desc: string;
  tags: string[];
  icon: ReactNode;
  href?: string;
  partnerNote?: string;
  partnerHref?: string;
  featured?: boolean;
};

type FeatureGridProps = {
  eyebrow?: string;
  heading: ReactNode;
  subtext?: string;
  items: FeatureItem[];
  id?: string;
  theme?: SectionTheme;
};

export default function FeatureGrid({
  eyebrow,
  heading,
  subtext,
  items,
  id = "feature-grid",
  theme = "neutral",
}: FeatureGridProps) {
  const t = tokens[theme];

  return (
    <section
      id={id}
      className={`section ${t.section}`}
      aria-labelledby={`${id}-h`}
    >
      <div className="flex justify-between items-end flex-wrap gap-7 mb-[52px]">
        <div>
          {eyebrow && <SectionLabel text={eyebrow} />}
          <h2
            id={`${id}-h`}
            className={`rv font-semibold leading-[1.06] tracking-[-0.02em] h2 ${t.heading}`}
          >
            {heading}
          </h2>
        </div>
        {subtext && (
          <p
            className={`rv d1 leading-[1.8] subtext ${t.subtext}`}
            style={{ maxWidth: "340px" }}
          >
            {subtext}
          </p>
        )}
      </div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-t ${t.gridCellBorder}`}
        role="list"
      >
        {items.map((item, i) => (
          <FeatureGridCard
            key={item.num}
            item={item}
            delay={i * 0.05}
            theme={theme}
          />
        ))}
      </div>
    </section>
  );
}
