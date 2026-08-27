import { CTASlots } from "./CTASlot";
import { SectionLayout } from "./section";
import SectionLabel from "./SectionLabel";

const steps = [
  {
    num: "1",
    label: "Foundation",
    title: "Brand Identity",
    desc: "Establish the visual foundation.",
  },
  {
    num: "2",
    label: "Framework",
    title: "Brand System",
    desc: "Defines the standards, rules, and approved assets that establish how the brand should be applied.",
  },
  {
    num: "3",
    label: "Standards",
    title: "Digital + Physical Brand Standards",
    desc: "Creates reusable digital assets and defines physical brand execution, including apparel, embroidery, logo placement, signage, print, promotional products, booths, and packaging.",
  },
  {
    num: "4",
    label: "Operations",
    title: "Operational Deployment",
    desc: "Extends approved brand standards into recurring programs, Swag Storefronts, and Company Stores that make approved products, artwork, and applications accessible for ordering.",
  },
  {
    num: "✓",
    label: "Result",
    title: "Consistent Brand Experience",
    desc: "Gives teams, vendors, customers, and employees a more recognizable and consistent brand experience across every touchpoint.",
    isResult: true,
  },
];

// TODO: are we deleting this right section; lets maybe add an image instead
// const whoWeWorkWith = [
//   "Startups",
//   "Growing Businesses",
//   "Multi-Location Orgs",
//   "Professional Services",
//   "Construction",
//   "Healthcare",
//   "Manufacturing",
//   "Franchises",
//   "Recruiting Teams",
//   "Event Marketing",
// ];

// const resources = [
//   {
//     label:
//       "How Merch Strengthens Brand Identity and Creates Public Brand Awareness",
//     href: "/blog/how-merch-strengthens-brand-identity-and-creates-public-brand-awareness",
//   },
//   {
//     label: "Print vs. Digital Marketing: When Each Works Best",
//     href: "/blog/print-vs-digital-marketing",
//   },
//   {
//     label: "The ROI of Branded Merchandise",
//     href: "/blog/the-roi-of-branded-merchandise",
//   },
//   {
//     label: "Why Every Growing Company Eventually Needs a Brand System",
//     href: "/blog/why-every-growing-company-eventually-needs-a-brand-system",
//   },
//   {
//     label: "Why Print Still Matters for Premium Brands",
//     href: "/blog/why-print-still-matters-for-premium-brands",
//   },
// ];

export default function FrameworkSection() {
  return (
    <SectionLayout
      id="home--blossom-rocket-framework"
      theme="neutral"
      eyebrow="One Frakework. Complete Consistency"
      ctaSlot={
        <CTASlots
          theme="neutral"
          ctas={[
            {
              label: "Explore Our Services",
              href: "/services",
              variant: "primary",
            },
            {
              label: "Get In Touch",
              variant: "outline",
            },
          ]}
        />
      }
      heading={
        <>
          The Blossom Rocket Framework Powers{" "}
          <em className="grad-text not-italic">Brand Expansion.</em>
        </>
      }
      subtext="Blossom Rocket turns brand identity into a practical system that can be used across digital and physical touchpoints."
      pageUrl="https://blossomrocket.studio"
    >
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
                style={{ fontFamily: "var(--font-display)" }}
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
    </SectionLayout>
  );
}
