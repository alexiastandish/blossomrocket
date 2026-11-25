import Image from "next/image";
import CTAs from "@/components/CTAs";
import SectionLabel from "@/components/SectionLabel";
import { Orb, DEFAULT_ORBS } from "@/components/ui/Orb";
import { aboutImages } from "./aboutImages";

export default function AboutHero() {
  return (
    <header
      id="hero"
      className="section hero relative overflow-hidden bg-surface-page"
    >
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {DEFAULT_ORBS.light.map((orb, i) => (
          <Orb key={i} orb={orb} />
        ))}
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-[clamp(40px,6vw,88px)] items-center">
        {/* ── Copy ── */}
        <div className="flex flex-col items-start text-left">
          <div className="anim-fade-up anim-delay-1">
            <SectionLabel text="About Blossom Rocket" />
          </div>
          <h1 className="anim-fade-up anim-delay-2 h1 text-zinc mb-7">
            Built at the intersection of creativity, technology, and{" "}
            <em className="grad-text not-italic">brand execution.</em>
          </h1>
          <p className="anim-fade-up anim-delay-3 subtext text-fg-secondary max-w-[600px] mb-8">
            Blossom Rocket is a creative and technology-enabled branded
            merchandise partner. We help organizations create a brand, then run
            it everywhere it shows up — through Company Stores, Co-Branding,
            on-demand merchandise, and the brand systems that keep every
            application consistent.
          </p>
          <CTAs
            ctas={[
              {
                label: "Explore Our Solutions",
                href: "/solutions",
                variant: "primary",
              },
              { label: "View Our Work", href: "/work", variant: "outline" },
            ]}
          />
        </div>

        {/* ── Image composition: identity → system → product ── */}
        <div
          className="anim-fade-up anim-delay-3 grid grid-cols-6 grid-rows-[auto_auto] gap-3 sm:gap-4"
          aria-label="Examples of Blossom Rocket brand and merchandise work"
          role="group"
        >
          <figure className="col-span-6 sm:col-span-4 row-span-2 relative aspect-square rounded-[20px] overflow-hidden bg-surface-subtle border border-border-default">
            <Image
              src={aboutImages.ivoryPromo.src}
              alt={aboutImages.ivoryPromo.alt}
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 34vw"
              className="object-contain"
            />
          </figure>
          <figure className="col-span-3 sm:col-span-2 relative aspect-[4/5] rounded-[20px] overflow-hidden bg-surface-subtle border border-border-default">
            <Image
              src={aboutImages.compassionBrandSystem.src}
              alt={aboutImages.compassionBrandSystem.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 17vw"
              className="object-cover"
            />
          </figure>
          <figure className="col-span-3 sm:col-span-2 relative aspect-[4/5] rounded-[20px] overflow-hidden bg-surface-subtle border border-border-default">
            <Image
              src={aboutImages.meditationsMug.src}
              alt={aboutImages.meditationsMug.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 17vw"
              className="object-cover"
            />
          </figure>
        </div>
      </div>
    </header>
  );
}
