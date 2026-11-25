import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";

type Capability = { label: string; href: string; description: string };

const merchandiseSolutions: Capability[] = [
  {
    label: "Company Stores",
    href: "/solutions/company-stores",
    description:
      "Centralized online ordering for teams, departments, and locations.",
  },
  {
    label: "Co-Branding",
    href: "/solutions/co-branding",
    description:
      "One storefront for multiple approved logos, partners, and divisions.",
  },
  {
    label: "Swag Storefronts",
    href: "/solutions/swag-storefronts",
    description:
      "A lightweight self-serve storefront for a single brand's merchandise.",
  },
  {
    label: "Merchandise & Promotional Products",
    href: "/solutions/merchandise-and-promotional-products",
    description:
      "Apparel, drinkware, bags, gifts, and event merchandise, made on demand.",
  },
  {
    label: "On-Demand Kits",
    href: "/solutions/on-demand-kits",
    description:
      "Onboarding, gifting, and welcome kits with print, packaging, and fulfillment.",
  },
];

const creativeServices: Capability[] = [
  {
    label: "Brand Identity",
    href: "/services/brand-identity",
    description: "Logo systems, typography, color, and graphic elements.",
  },
  {
    label: "Brand Systems",
    href: "/services/brand-systems",
    description:
      "Guidelines, templates, asset libraries, and merchandise standards.",
  },
  {
    label: "Digital Design",
    href: "/services/digital-design",
    description:
      "Websites, UI/UX, component libraries, and front-end development.",
  },
  {
    label: "Marketing Assets",
    href: "/services/marketing-assets",
    description: "Campaign creative, presentations, and reusable templates.",
  },
  {
    label: "Print & Environmental Design",
    href: "/services/print-and-environmental-design",
    description: "Print collateral, packaging, signage, and displays.",
  },
];

function CapabilityColumn({
  id,
  title,
  intro,
  hubHref,
  hubLabel,
  items,
}: {
  id: string;
  title: string;
  intro: string;
  hubHref: string;
  hubLabel: string;
  items: Capability[];
}) {
  return (
    <div className="rounded-3xl border border-border-on-dark bg-surface-dark-raised p-8 sm:p-10 flex flex-col">
      <h3 id={id} className="h3 text-white mb-3">
        {title}
      </h3>
      <p className="body text-ink-faint leading-[1.7] mb-6">{intro}</p>
      <ul className="flex flex-col list-none mb-8" aria-labelledby={id}>
        {items.map((item) => (
          <li
            key={item.href}
            className="border-b last:border-b-0 border-border-on-dark"
          >
            <Link
              href={item.href}
              className="group flex items-start justify-between gap-6 py-4"
            >
              <span>
                <span className="block text-[16px] font-semibold text-white transition-colors duration-200 group-hover:text-violet-300">
                  {item.label}
                </span>
                <span className="block text-[14px] leading-[1.6] text-ink-faint mt-1">
                  {item.description}
                </span>
              </span>
              <span
                className="text-ink-faint transition-transform duration-200 group-hover:translate-x-1 group-hover:text-violet-300"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href={hubHref}
        className="mt-auto w-fit text-[14px] font-semibold text-violet-300 hover:text-pink transition-colors duration-200"
      >
        {hubLabel} <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}

export default function AboutCapabilities() {
  return (
    <section
      id="capabilities"
      className="section relative bg-surface-dark-neutral"
      aria-labelledby="capabilities-heading"
    >
      <div className="rv max-w-3xl mb-12">
        <SectionLabel text="Our Capabilities" />
        <h2 id="capabilities-heading" className="h2 text-white mb-5">
          Merchandise solutions and creative services,{" "}
          <em className="grad-text not-italic">designed to work together.</em>
        </h2>
        <p className="subtext text-ink-faint">
          Merchandise programs are Blossom Rocket&apos;s primary focus. Creative
          services set the standards those programs apply — and are available
          on their own when a brand needs a new identity, a website, or a
          system before it needs a store.
        </p>
      </div>

      <div className="rv d2 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <CapabilityColumn
          id="capabilities-merchandise"
          title="Merchandise Solutions"
          intro="On-demand, brand-controlled merchandise programs powered by SplashBrands."
          hubHref="/solutions"
          hubLabel="All merchandise solutions"
          items={merchandiseSolutions}
        />
        <CapabilityColumn
          id="capabilities-creative"
          title="Creative Services"
          intro="Brand and design work that defines how the brand looks and how it should be applied."
          hubHref="/services"
          hubLabel="All creative services"
          items={creativeServices}
        />
      </div>
    </section>
  );
}
