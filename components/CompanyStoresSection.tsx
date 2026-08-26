import Image from "next/image";
import { CalendlyButton } from "./CalendlyButton";
import SectionLabel from "./SectionLabel";

const pillars = [
  {
    title: "Standardize Brand Merch",
    desc: "Curated merchandise aligned with brand standards — nothing off-brand makes it to an order.",
  },
  {
    title: "Simplify Ordering Process",
    desc: "Eliminate the hassle of managing company swag. An online company store gives approved users a simple, centralized way to order branded merchandise.",
  },
  {
    title: "Improve Brand Consistency",
    desc: "Consistent branding builds trust and can increase revenue. A custom company store helps ensure every product aligns with your brand standards, from logo usage and color selection to approved merchandise and suppliers.",
  },
  {
    title: "Controlled Ordering",
    desc: "Simple purchasing workflows for teams and departments — no brand approvals required for every order.",
  },
  {
    title: "Cost Efficient",
    desc: "Save time and reduce operational costs with a centralized company store. Features like inventory management, flexible ordering, and preferred pricing help maximize your budget and efficiency.",
  },
  {
    title: "Improved Employee Engagement",
    desc: "Support employee engagement with a company store that allows team members to choose their own branded apparel, gifts, and supplies. Personalized rewards often create stronger connections than one-size-fits-all merchandise.",
  },
  {
    title: "Streamlined Gifting for Clients and Events",
    desc: "Strengthen customer relationships by giving clients easy access to branded merchandise and promotional items.",
  },
];

export default function CompanyStoresSection() {
  return (
    <section
      id="stores"
      className="section bg-(--color-surface-dark-neutral) text-white"
      aria-labelledby="stores-h"
    >
      <SectionLabel text="Company Stores" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(40px,7vw,100px)] items-start">
        <div className="flex-col items-start">
          <h2
            id="stores-h"
            className="rv font-semibold leading-[1.06] tracking-[-0.02em] mb-5 h2"
          >
            What is a <em className="grad-text not-italic">Company Store?</em>
          </h2>
          <p
            className="rv d1 text-[rgba(255,255,255,0.45)] leading-[1.8] mb-[52px] subtext"
            style={{ maxWidth: "560px" }}
          >
            A Company Store is a centralized platform that provides access to
            approved branded products and materials.
          </p>
          {/* <div className="rv d2"> */}
          {/* <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-9">
              <h3 className="h3 font-display font-semibold text-fg-on-dark leading-[1.2] tracking-[-0.02em] mb-2">
                The result is a brand experience that remains consistent no
                matter who places the order.
              </h3>
              <p className="body text-[rgba(255,255,255,0.5)] leading-[1.75] mb-4">
                Company Stores remove the friction between brand standards and
                execution. Teams get access to what they need. Brand managers
                get peace of mind. Customers get consistency.
              </p>
              <p className="body text-[rgba(255,255,255,0.5)] leading-[1.75] mb-6">
                Blossom Rocket launches Store Systems that are easy to use,
                brand-compliant by design, and scalable as your organization
                grows.
              </p>
              <CalendlyButton theme="dark" />
            </div> */}
          <div className="relative w-full aspect-square">
            <Image
              src="https://imagedelivery.net/phVukYz6oCUHQR4c37ZNwQ/2922328a-6303-4a36-5d2f-96f847d54200/public"
              alt="Blossom Rocket Ivory Promo Products"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
              priority
              fill
            />
          </div>
        </div>

        {/* Pillars */}
        <div>
          <p className="rv text-[15px] font-semibold tracking-[0.06em] uppercase text-[rgba(255,255,255,0.4)] mb-4">
            Company Stores help businesses:
          </p>
          <div
            className="rv d1 rounded-2xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`px-7 py-[22px] transition-colors duration-300 hover:bg-[rgba(155,92,246,0.08)] ${i < pillars.length - 1 ? "border-b border-[rgba(255,255,255,0.06)]" : ""}`}
              >
                <div className="flex items-center gap-2.5 text-[14px] font-semibold text-white mb-1">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 grad-bg" />
                  {p.title}
                </div>
                <div className="text-[13px] text-[rgba(255,255,255,0.45)] leading-[1.6] pl-4">
                  {p.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
