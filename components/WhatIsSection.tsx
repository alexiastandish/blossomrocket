import { CTASlots } from "./CTASlot";
import SectionLabel from "./SectionLabel";

export default function WhatIsSection() {
  return (
    <section
      id="whatis"
      className="section bg-white"
      aria-labelledby="whatis-h"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(40px,7vw,100px)] items-start">
        <div className="rv">
          <SectionLabel text="What Is a Brand System?" />
          <h2
            id="whatis-h"
            className="rv font-semibold leading-[1.06] tracking-[-0.02em] mb-5 h2"
          >
            The Foundation Behind Every{" "}
            <em className="grad-text not-italic">Consistent Brand.</em>
          </h2>
          <p
            className="rv d1 text-[rgba(24,24,27,0.58)] leading-[1.8] mb-7 subtext"
            style={{ maxWidth: "560px" }}
          >
            A Brand System is a centralized framework that defines how a company
            presents itself across every customer, employee, and marketing
            touchpoint. It creates consistency across all channels — digital and
            physical.
          </p>

          <CTASlots
            ctas={[
              {
                label: "Explore Projects by Blossom Rocket",
                href: "/work",
                variant: "primary",
              },
            ]}
          />
        </div>

        {/* Right — insight card */}
        <div className="rv d2">
          <div className="relative bg-(--color-off) border border-[rgba(24,24,27,0.10)] rounded-3xl p-9 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] grad-bg" />
            <p className="text-[17px] font-semibold leading-[1.5] mb-1">
              Most companies have logos. Few companies have —
            </p>

            <span
              className="grad-text font-semibold block mb-4 h2"
              style={{
                lineHeight: "1.2",
              }}
            >
              scalable systems.
            </span>

            <p className="body-sm text-zinc-500 leading-[1.7] mb-3">
              Many organizations invest in logos, websites, marketing campaigns,
              promotional products, and print materials independently. As a
              result, brand experiences often become fragmented. Blossom Rocket
              solves this problem by helping businesses build and deploy their
              brand across every touchpoint.
            </p>

            <div className="mt-6 pt-6 border-t border-[rgba(24,24,27,0.10)]">
              <p className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[rgba(24,24,27,0.58)] mb-3">
                Trusted across every brand touchpoint
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Digital Design",
                  "Website Design",
                  "Print & Environmental Design",
                  "Merch & Promotional Products",
                  "Marketing Assets",
                  "Company Stores",
                ].map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2.5 py-1 rounded-full border border-[rgba(99,102,241,0.15)] font-semibold text-[#6366f1]"
                    style={{
                      background:
                        "linear-gradient(90deg,rgba(155,92,246,0.1),rgba(6,182,212,0.1))",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
