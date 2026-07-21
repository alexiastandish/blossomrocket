import SectionLabel from "./SectionLabel";

const steps = [
  {
    num: "1",
    label: "Foundation",
    title: "Brand Identity",
    desc: "Logo systems, typography, color palettes, brand voice, and foundational brand standards.",
  },
  {
    num: "2",
    label: "Framework",
    title: "Brand System",
    desc: "The centralized framework that defines how your brand presents itself across every touchpoint.",
  },
  {
    num: "3",
    label: "Digital Layer",
    title: "Design System & Asset Library",
    desc: "Reusable components, layouts, and marketing templates built on your brand standards.",
  },
  {
    num: "4",
    label: "Physical Layer",
    title: "Approved Merchandise Standards",
    desc: "Apparel guidelines, embroidery specs, logo placement rules, print and packaging standards.",
  },
  {
    num: "5",
    label: "Operations",
    title: "Company Store",
    desc: "The operational layer that makes brand-compliant ordering accessible to every team and department.",
  },
  {
    num: "✓",
    label: "Result",
    title: "Consistent Brand Experience",
    desc: "A brand that feels like one company — everywhere, every time, without exception.",
    isResult: true,
  },
];

const whoWeWorkWith = [
  "Startups",
  "Growing Businesses",
  "Multi-Location Orgs",
  "Professional Services",
  "Construction",
  "Healthcare",
  "Manufacturing",
  "Franchises",
  "Recruiting Teams",
  "Event Marketing",
];

const resources = [
  {
    label:
      "How Merch Strengthens Brand Identity and Creates Public Brand Awareness",
    href: "/blog/how-merch-strengthens-brand-identity-and-creates-public-brand-awareness",
  },
  {
    label: "Print vs. Digital Marketing: When Each Works Best",
    href: "/blog/print-vs-digital-marketing",
  },
  {
    label: "The ROI of Branded Merchandise",
    href: "/blog/the-roi-of-branded-merchandise",
  },
  {
    label: "Why Every Growing Company Eventually Needs a Brand System",
    href: "/blog/why-every-growing-company-eventually-needs-a-brand-system",
  },
  {
    label: "Why Print Still Matters for Premium Brands",
    href: "/blog/why-print-still-matters-for-premium-brands",
  },
];

export default function FrameworkSection() {
  return (
    <section
      id="framework"
      className="section bg-[var(--color-off)]"
      aria-labelledby="fw-h"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(40px,7vw,80px)] items-start">
        <div>
          <SectionLabel text="The Blossom Rocket Framework" />
          <h2
            id="fw-h"
            className="rv font-semibold leading-[1.06] tracking-[-0.02em] mb-5 h2"
          >
            One Framework.
            <br />
            <em className="grad-text not-italic">Complete Consistency.</em>
          </h2>
          <p
            className="rv d1 text-[rgba(24,24,27,0.58)] leading-[1.8] mb-[22px] subtext"
            style={{ maxWidth: "560px" }}
          >
            A single source of truth for your brand that makes future growth
            easier to manage.
          </p>

          <div className="rv d2">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`grid gap-6 items-start py-7 ${i < steps.length - 1 ? "border-b border-[rgba(24,24,27,0.10)]" : ""}`}
                style={{ gridTemplateColumns: "40px 1fr" }}
              >
                <div className="flex flex-col items-center pt-1">
                  <div
                    className="w-9 h-9 rounded-full border border-[rgba(24,24,27,0.12)] flex items-center justify-center text-[15px] font-semibold text-[rgba(24,24,27,0.58)] transition-all duration-300 hover:bg-[#9b5cf6] hover:border-[#9b5cf6] hover:text-white"
                    style={{ fontFamily: "'Parkinsans', sans-serif" }}
                  >
                    {step.num}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.14em] uppercase text-[rgba(24,24,27,0.58)] mb-1 font-semibold">
                    {step.label}
                  </div>
                  <div
                    className={`font-semibold mb-1.5 h5 font-display leading-[1.2] ${step.isResult ? "grad-text" : ""}`}
                  >
                    {step.title}
                  </div>
                  <div className="body-sm text-zinc-500 leading-[1.75]">
                    {step.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — sticky, no rv/transform on this element or its direct parent */}
        <div className="lg:sticky" style={{ top: "calc(68px + 20px)" }}>
          <div className="bg-white border border-[rgba(24,24,27,0.10)] rounded-3xl p-9">
            <h3 className="rv d3 font-semibold mb-5 leading-[1.2] font-display h3">
              Who We Work With
            </h3>
            <p className="rv d3 text-[14px] text-[rgba(24,24,27,0.58)] leading-[1.75] mb-5">
              Blossom Rocket partners with any organization looking to create a
              more consistent brand experience across digital and physical
              channels.
            </p>
            <div className="rv d3 flex flex-wrap gap-2.5 mb-7">
              {whoWeWorkWith.map((tag) => (
                <span
                  key={tag}
                  className="text-[12px] font-semibold tracking-[0.06em] px-3.5 py-1.5 rounded-full border border-[rgba(24,24,27,0.12)] text-[rgba(24,24,27,0.58)] transition-all duration-300 hover:border-[rgba(99,102,241,0.4)] hover:text-[#6366f1] hover:bg-[rgba(99,102,241,0.05)] cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* TODO_ */}

            <div className="rv d3 pt-6 border-t border-[rgba(24,24,27,0.10)]">
              <p className="text-[13px] text-[rgba(24,24,27,0.58)] leading-[1.7] mb-4">
                Explore resources covering brand identity, design systems,
                website design, promotional products, company stores, and more.
              </p>
              <div className="flex flex-col gap-2">
                {resources.map((r: { label: string; href: string }) => (
                  <a
                    key={r.label}
                    href={r.href}
                    className="text-[13px] font-medium text-[#6366f1] flex items-center gap-1.5 transition-all duration-200 hover:gap-3"
                  >
                    {r.label} →
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
