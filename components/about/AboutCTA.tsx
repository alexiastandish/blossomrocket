import { CTASlots } from "@/components/CTASlot";
import SectionLabel from "@/components/SectionLabel";
import { Orb, DEFAULT_ORBS } from "@/components/ui/Orb";

export default function AboutCTA() {
  // The demo link uses the site's existing scheduling URL. Without it, both
  // buttons fall back to the contact modal (a CTA with no href opens it).
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  return (
    <section
      id="get-started"
      className="section relative overflow-hidden bg-surface-dark-neutral"
      aria-labelledby="get-started-heading"
    >
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {DEFAULT_ORBS.dark.map((orb, i) => (
          <Orb key={i} orb={orb} />
        ))}
      </div>

      <div className="rv relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
        <SectionLabel text="Get Started" />
        <h2 id="get-started-heading" className="h2 text-white mb-6">
          Let&apos;s make your brand{" "}
          <em className="grad-text not-italic">easier to manage.</em>
        </h2>
        <p className="subtext text-neutral-300 mb-4">
          Start with a 15-minute conversation about how your organization orders
          and manages branded merchandise today.
        </p>
        <p className="subtext text-fg-on-dark mb-10">
          Blossom Rocket can build a free, fully branded demo store so your team
          can try the platform with your own logos and products before
          committing.
        </p>
        <CTASlots
          theme="dark"
          ctas={[
            {
              label: "Request a Free Demo Store",
              href: calendlyUrl,
              variant: "primary",
            },
            { label: "Get in Touch", variant: "outline" },
          ]}
        />
      </div>
    </section>
  );
}
