import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import { CONTACT_EMAIL, FOUNDER } from "@/lib/constants/entities";
import type { AboutImage } from "./aboutImages";

const disciplines = [
  "Graphic Design",
  "Brand Identity & Systems",
  "UI/UX & Design Systems",
  "Full-Stack Engineering",
  "E-Commerce",
];

type AboutFounderProps = {
  /** Approved high-resolution founder portrait. Until one is supplied the
   *  profile card renders with the official logo instead of a photo. */
  portrait?: AboutImage;
};

export default function AboutFounder({ portrait }: AboutFounderProps) {
  return (
    <section
      id="founder"
      className="section relative bg-surface-base"
      aria-labelledby="founder-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] gap-[clamp(40px,7vw,100px)] items-start">
        {/* ── Story ── */}
        <div className="rv flex flex-col items-start">
          <SectionLabel text="Meet the Founder" />
          <h2 id="founder-heading" className="h2 text-zinc mb-8">
            Alexia Standish sees a brand as{" "}
            <em className="grad-text not-italic">
              something people have to use.
            </em>
          </h2>

          <div className="flex flex-col gap-5 body-lg text-fg-secondary leading-[1.8] max-w-[640px]">
            <p>
              <span className="font-semibold text-zinc">Alexia Standish</span>{" "}
              founded Blossom Rocket in 2026. She holds a degree in Graphic
              Design and built her career across brand identity, brand systems,
              and UI/UX design before moving into full-stack software
              engineering.
            </p>
            <p>
              From 2019 to 2025, Alexia worked at Tapcart, an e-commerce
              technology company focused on mobile commerce. Her engineering
              work spans modern web development, reusable component libraries,
              scalable front-end architecture, and e-commerce platforms.
            </p>
            <p>
              That combination shapes how Blossom Rocket works. Alexia looks at
              a brand the way a designer does — how it looks — and the way an
              engineer does: how it functions, how it scales, and how many steps
              it takes a team to apply it correctly. Blossom Rocket&apos;s
              programs are built to reduce those steps.
            </p>
          </div>
        </div>

        {/* ── Profile card ── */}
        <aside
          className="rv d2 lg:sticky lg:top-[88px] rounded-3xl border border-border-default bg-surface-page overflow-hidden"
          aria-label="Founder profile"
        >
          {portrait ? (
            <div className="relative aspect-[4/5] bg-surface-subtle">
              <Image
                src={portrait.src}
                alt={portrait.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="flex items-center justify-center bg-surface-subtle border-b border-border-default px-10 py-14">
              <Image
                src="/logo.svg"
                alt="Blossom Rocket"
                width={142}
                height={80}
                className="h-16 w-auto"
              />
            </div>
          )}

          <div className="p-8 flex flex-col gap-6">
            <div>
              <p className="h4 font-semibold text-zinc leading-tight font-display">
                {FOUNDER.name}
              </p>
              <p className="body text-ink-mid mt-1">Founder, Blossom Rocket</p>
            </div>

            <ul
              className="flex flex-wrap gap-2 list-none"
              aria-label="Areas of expertise"
            >
              {disciplines.map((d) => (
                <li
                  key={d}
                  className="text-[12px] font-medium px-3 py-1 rounded-full border border-border-default bg-surface-base text-fg-secondary"
                >
                  {d}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 pt-2 border-t border-border-default">
              <a
                href={FOUNDER.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-fit items-center gap-2 px-6 py-3 rounded-full bg-violet-dark text-fg-on-dark text-[14px] font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:bg-violet-700"
              >
                Connect on LinkedIn <span aria-hidden="true">→</span>
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-[14px] text-violet-dark hover:text-link-hover transition-colors duration-200"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
