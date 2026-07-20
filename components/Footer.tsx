import Image from "next/image";

const services = [
  "Brand Identity",
  "Brand Systems",
  "Digital Design",
  "Marketing Assets",
  "Print & Environmental Design",
  "Merchandise & Promotional Products",
  "Company Stores",
  // "Search Everything Optimization Consulting",
];
const company = [
  { label: "What Is a Brand System?", href: "#whatis" },
  { label: "Why Brands Become Inconsistent", href: "#why" },
  { label: "Brand Deployment", href: "#deployment" },
  { label: "Our Framework", href: "#framework" },
  { label: "FAQ", href: "#faq" },
];
const connect = [
  // { label: "LinkedIn", href: "#" },
  // { label: "Twitter / X", href: "#" },
  // { label: "Instagram", href: "#" },
  {
    label: "alexia@blossomrocket.studio",
    href: "mailto:alexia@blossomrocket.studio",
  },
];

export default function Footer() {
  return (
    <footer
      className="bg-[#fafaf8] border-t border-[rgba(24,24,27,0.10)]"
      style={{ padding: "48px clamp(20px,5vw,60px) 36px" }}
      role="contentinfo"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      {/* Gradient top bar */}
      <div
        className="grad-bg h-[2.5px] rounded-full mb-10"
        style={{ gridColumn: "1/-1" }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5 mb-3.5">
            <Image
              src="/logo.svg"
              alt="Blossom Rocket"
              width={142}
              height={80}
              style={{ height: "52px", width: "auto" }}
            />
          </div>
          <p className="text-[13px] text-[rgba(24,24,27,0.58)] leading-[1.7] max-w-[260px]">
            Blossom Rocket helps growing businesses create scalable brand
            systems that connect digital experiences, marketing assets,
            merchandise, and company stores.
          </p>
        </div>

        {/* Services */}
        <nav aria-label="Services">
          <h4 className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[rgba(24,24,27,0.58)] mb-3.5">
            Services
          </h4>
          <ul className="list-none space-y-2">
            {services.map((s) => (
              <li key={s}>
                <a
                  href="#services"
                  className="text-[13px] font-medium transition-colors duration-200 hover:text-[#9b5cf6]"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Company */}
        <nav aria-label="Company">
          <h4 className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[rgba(24,24,27,0.58)] mb-3.5">
            Company
          </h4>
          <ul className="list-none space-y-2">
            {company.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-[13px] font-medium transition-colors duration-200 hover:text-[#9b5cf6]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Connect */}
        <nav aria-label="Connect">
          <h4 className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[rgba(24,24,27,0.58)] mb-3.5">
            Connect
          </h4>
          <ul className="list-none space-y-2">
            {connect.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-[13px] font-medium transition-colors duration-200 hover:text-[#9b5cf6]"
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom bar */}
      <div className="pt-6 border-t border-[rgba(24,24,27,0.10)] flex justify-between items-center flex-wrap gap-3 text-[12px] text-[rgba(24,24,27,0.58)]">
        <span>© 2025 Blossom Rocket. All rights reserved.</span>
        <div className="flex gap-5">
          <a
            href="#"
            className="transition-colors duration-200 hover:text-[#9b5cf6]"
          >
            Privacy
          </a>
          <a
            href="#"
            className="transition-colors duration-200 hover:text-[#9b5cf6]"
          >
            Terms
          </a>
          <a
            href="#"
            className="transition-colors duration-200 hover:text-[#9b5cf6]"
          >
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
}
