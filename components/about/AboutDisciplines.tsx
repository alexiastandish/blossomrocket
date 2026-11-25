import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import { aboutImages, type AboutImage } from "./aboutImages";

type Discipline = {
  number: string;
  name: string;
  lead: string;
  body: string;
  links: { label: string; href: string }[];
  image: AboutImage;
  /** Tailwind aspect class for the image tile */
  aspect: string;
};

const disciplines: Discipline[] = [
  {
    number: "01",
    name: "Creative",
    lead: "Establish the identity, standards, and visual applications that define the brand.",
    body: "Brand identity sets how an organization looks. Brand systems set how it should be applied — on a website, a polo, a trade show banner, or a co-branded partner kit — so the next decision is already made.",
    links: [
      { label: "Brand Identity", href: "/services/brand-identity" },
      { label: "Brand Systems", href: "/services/brand-systems" },
    ],
    image: aboutImages.compassionBrandSystem,
    aspect: "aspect-[4/3]",
  },
  {
    number: "02",
    name: "Technology",
    lead: "Create scalable systems and ordering environments that help organizations manage the brand.",
    body: "Company Stores and Co-Branding storefronts turn approved logos, product colors, budgets, and approvals into rules a platform enforces — so teams order on their own and the brand stays intact.",
    links: [
      { label: "Company Stores", href: "/solutions/company-stores" },
      { label: "Co-Branding", href: "/solutions/co-branding" },
      { label: "Digital Design", href: "/services/digital-design" },
    ],
    image: aboutImages.pullerBranding,
    aspect: "aspect-[4/3]",
  },
  {
    number: "03",
    name: "Execution",
    lead: "Bring the brand into the real world through merchandise, digital experiences, print, and physical applications.",
    body: "Apparel, promotional products, On-Demand Kits, signage, and packaging are produced on demand and shipped direct — the point where a brand system either holds together or falls apart.",
    links: [
      {
        label: "Merchandise & Promotional Products",
        href: "/solutions/merchandise-and-promotional-products",
      },
      { label: "On-Demand Kits", href: "/solutions/on-demand-kits" },
    ],
    image: aboutImages.compassionPromo,
    aspect: "aspect-[4/3]",
  },
];

export default function AboutDisciplines() {
  return (
    <section
      id="creative-technology-execution"
      className="section relative bg-surface-dark-neutral"
      aria-labelledby="creative-technology-execution-heading"
    >
      <div className="rv max-w-3xl mb-[clamp(48px,7vw,96px)]">
        <SectionLabel text="How We Work" />
        <h2
          id="creative-technology-execution-heading"
          className="h2 text-white mb-5"
        >
          Where creativity meets{" "}
          <em className="grad-text not-italic">execution.</em>
        </h2>
        <p className="subtext text-neutral-300">
          Blossom Rocket connects three disciplines that are usually handled by
          different vendors. Each one makes the next easier: the creative work
          defines the standards, the technology enforces them, and execution
          puts them in people&apos;s hands.
        </p>
      </div>

      <div className="relative">
        {/* Connecting spine — desktop only */}
        <span
          className="hidden lg:block absolute left-[calc(50%-1px)] top-4 bottom-4 w-[2px] grad-bg opacity-40 rounded-full"
          aria-hidden="true"
        />
        <ol className="relative flex flex-col gap-[clamp(56px,8vw,112px)] list-none">
          {disciplines.map((d, i) => {
            const reversed = i % 2 === 1;
            return (
              <li
                key={d.name}
                className="rv relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[clamp(64px,8vw,120px)] items-center"
              >
                <figure
                  className={[
                    "relative rounded-[20px] overflow-hidden border border-border-on-dark bg-surface-dark-raised",
                    d.aspect,
                    reversed ? "lg:order-2" : "lg:order-1",
                  ].join(" ")}
                >
                  <Image
                    src={d.image.src}
                    alt={d.image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                </figure>

                <div
                  className={[
                    "flex flex-col items-start",
                    reversed ? "lg:order-1" : "lg:order-2",
                  ].join(" ")}
                >
                  <p className="flex items-baseline gap-4 mb-4">
                    <span className="grad-text font-semibold text-[15px] tracking-[0.12em]">
                      {d.number}
                    </span>
                    <span className="h3 text-white">{d.name}</span>
                  </p>
                  <p className="body-lg text-fg-on-dark font-medium leading-[1.6] mb-4">
                    {d.lead}
                  </p>
                  <p className="body text-neutral-300 leading-[1.8] mb-6">
                    {d.body}
                  </p>
                  <ul className="flex flex-wrap gap-2 list-none">
                    {d.links.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className="inline-flex items-center gap-1.5 text-[13px] font-medium px-3.5 py-1.5 rounded-full border border-border-on-dark text-neutral-300 transition-colors duration-200 hover:border-border-brand hover:text-violet-300"
                        >
                          {l.label}
                          <span aria-hidden="true">→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
