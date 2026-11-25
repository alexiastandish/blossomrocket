import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import CTAs from "@/components/CTAs";
import { aboutImages, type AboutImage } from "./aboutImages";

type WorkTile = {
  project: string;
  disciplines: string;
  image: AboutImage;
  /** Grid placement at lg+ (12-column grid) and aspect ratio */
  layout: string;
  /** Marks work created before Blossom Rocket */
  note?: string;
};

const tiles: WorkTile[] = [
  {
    project: "Compassion For Kids",
    disciplines: "Brand system · Promotional products · Digital",
    image: aboutImages.compassionBrandSystem,
    layout: "lg:col-span-7 aspect-[16/10]",
  },
  {
    project: "Puller AI",
    disciplines: "Brand system · Web design · Development",
    image: aboutImages.pullerBranding,
    layout: "lg:col-span-5 aspect-[16/10] lg:aspect-auto",
  },
  {
    project: "Modern Meditations",
    disciplines: "Brand identity · Merchandise · Guidelines",
    image: aboutImages.meditationsStyleGuide,
    layout: "lg:col-span-4 aspect-[4/5]",
  },
  {
    project: "Le Fronk",
    disciplines: "Brand identity · Event graphics",
    image: aboutImages.leFronkBackdrop,
    layout: "lg:col-span-4 aspect-[4/5]",
  },
  {
    project: "Beats by Dre",
    disciplines: "Print identity lookbook",
    image: aboutImages.beatsLookbook,
    layout: "lg:col-span-4 aspect-[4/5]",
    note: "Founder portfolio, 2016",
  },
  {
    project: "Almeta Magazine",
    disciplines: "Web design · Publication design",
    image: aboutImages.almetaWeb,
    layout: "lg:col-span-6 aspect-[16/10]",
  },
  {
    project: "Convergence Capital",
    disciplines: "Brand identity · Presentation design",
    image: aboutImages.convergenceDeck,
    layout: "lg:col-span-6 aspect-[16/10]",
  },
];

export default function AboutSelectedWork() {
  return (
    <section
      id="selected-work"
      className="section relative bg-surface-base"
      aria-labelledby="selected-work-heading"
    >
      <div className="rv flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
        <div className="max-w-3xl">
          <SectionLabel text="Selected Work" />
          <h2 id="selected-work-heading" className="h2 text-zinc mb-5">
            Identity, systems, and the{" "}
            <em className="grad-text not-italic">things brands become.</em>
          </h2>
          <p className="subtext text-fg-secondary">
            A cross-section of brand identity, brand systems, digital design,
            merchandise, and physical applications — the same range a
            merchandise program draws on.
          </p>
        </div>
        <div className="flex-shrink-0">
          <CTAs
            ctas={[
              { label: "View All Work", href: "/work", variant: "outline" },
            ]}
          />
        </div>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 list-none">
        {tiles.map((t, i) => (
          <li
            key={t.project}
            className={[
              "rv group relative rounded-[20px] overflow-hidden bg-surface-subtle border border-border-default",
              i % 3 === 1 ? "d1" : i % 3 === 2 ? "d2" : "",
              t.layout,
            ].join(" ")}
          >
            <figure className="absolute inset-0">
              <Image
                src={t.image.src}
                alt={t.image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 pt-16 bg-gradient-to-t from-overlay-heavy to-transparent">
                <span className="block text-[16px] font-semibold text-white">
                  {t.project}
                </span>
                <span className="block text-[13px] text-fg-on-dark opacity-80">
                  {t.disciplines}
                  {t.note && <> · {t.note}</>}
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
