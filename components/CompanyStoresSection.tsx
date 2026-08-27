import Image from "next/image";
import { CalendlyButton } from "./CalendlyButton";
import SectionLabel from "./SectionLabel";
import CardList from "./section/CardPills";
import { tokens } from "@/lib/utils/sectionTailwindTokens";
import { PrimaryButton } from "./ui/PrimaryButton";

export default function CompanyStoresSection() {
  return (
    <section
      id="home--company-stores"
      className="section bg-(--color-surface-dark-neutral) text-white"
      aria-labelledby="company-stores"
    >
      <SectionLabel text="Company Stores" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(40px,7vw,100px)] items-start">
        <div className="flex-col items-start">
          <h2
            id="company-stores"
            className="rv font-semibold leading-[1.06] tracking-[-0.02em] mb-5 h2"
          >
            What is a <em className="grad-text not-italic">Company Store?</em>
          </h2>
          <p
            className="rv d1 text-[rgba(255,255,255,0.45)] leading-[1.8] mb-[52px] subtext"
            style={{ maxWidth: "560px" }}
          >
            Blossom Rocket Company Stores are the operational execution layer
            for a Brand System. Blossom Rocket helps businesses launch Company
            Stores powered through SplashBrands, giving approved users
            centralized access to branded merchandise while keeping products,
            logos, colors, decoration methods, and applications aligned with
            approved brand standards.
          </p>

          <div className="mb-6">
            <CardList
              activeTheme={tokens["dark"]}
              items={[
                {
                  topic: "On-Demand Production",
                },
                {
                  topic: "No Order Minimums",
                },
                {
                  topic: "No Inventory",
                },
                {
                  topic:
                    "Ships in 2 to 5 days (industry standard is 3 to 4 weeks)",
                },
              ]}
            />
          </div>
          <div className="flex gap-2">
            <PrimaryButton
              label="Explore Company Store Solutions"
              href="/solutions/company-stores"
              theme="dark"
            />
            <CalendlyButton theme="dark">
              Launch Your Company Store
            </CalendlyButton>
          </div>
        </div>

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
    </section>
  );
}
