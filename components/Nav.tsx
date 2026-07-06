"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { pageThemes } from "@/lib/utils/pageThemes";

type NavTheme = "light" | "dark";

type NavLink = {
  href: string;
  label: string;
  dropdown?: boolean;
};

type DropdownMenus = Record<string, boolean>;

const services: NavLink[] = [
  { href: "/services/brand-identity", label: "Brand Identity" },
  { href: "/services/brand-systems", label: "Brand Systems" },
  { href: "/services/digital-design", label: "Digital Design" },
  { href: "/services/marketing-assets", label: "Marketing Assets" },
  { href: "/services/print-and-environmental", label: "Print & Environmental" },
  {
    href: "/services/merchandise-and-promotional-products",
    label: "Merchandise & Promotional Products",
  },
  { href: "/services/company-stores", label: "Company Stores" },
];

const resources: NavLink[] = [
  { href: "/resources/blog", label: "Blog" },
  { href: "/resources/store-systems", label: "Live Store Systems" },
];

const dropdownLinks: Record<string, NavLink[]> = {
  Services: services,
  Resources: resources,
};

const links: NavLink[] = [
  { href: "/services", label: "Services", dropdown: true },
  { href: "/work", label: "Work" },
  { href: "/resources", label: "Resources", dropdown: true },
];

const unscrolledTokens: Record<
  NavTheme,
  {
    linkIdle: string;
    linkActive: string;
    linkHover: string;
    ctaBg: string;
    ctaText: string;
    ctaHover: string;
    logoInvert: boolean;
  }
> = {
  light: {
    linkIdle: "text-ink-60",
    linkActive: "text-ink",
    linkHover: "text-ink",
    ctaBg: "bg-[#18181b]",
    ctaText: "text-white",
    ctaHover: "hover:opacity-85",
    logoInvert: false,
  },
  dark: {
    linkIdle: "text-[rgba(255,255,255,0.60)]",
    linkActive: "text-white",
    linkHover: "text-white",
    ctaBg: "bg-white",
    ctaText: "text-[#18181b]",
    ctaHover: "hover:opacity-90",
    logoInvert: true,
  },
};

const scrolledTokens = {
  navBg:
    "bg-[rgba(250,250,248,0.92)] backdrop-blur-[18px] border-[rgba(24,24,27,0.10)]",
  linkIdle: "text-ink-60",
  linkActive: "text-ink",
  linkHover: "text-ink",
  ctaBg: "bg-[#18181b]",
  ctaText: "text-white",
  ctaHover: "hover:opacity-85",
  logoInvert: false,
};

const dropdowns: DropdownMenus = { services: false, resources: false };

export default function Nav() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<DropdownMenus>(dropdowns);

  const pathname = usePathname();
  const navTheme: NavTheme = pageThemes[pathname] ?? "light";
  const activeTokens = scrolled ? scrolledTokens : unscrolledTokens[navTheme];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[clamp(20px,5vw,60px)] transition-all duration-400 border-b ${
        scrolled
          ? "bg-[rgba(250,250,248,0.92)] backdrop-blur-[18px] border-[rgba(24,24,27,0.10)]"
          : "bg-transparent border-transparent"
      }`}
      style={{ height: "68px" }}
      role="navigation"
      aria-label="Main navigation"
    >
      <Link href="/" className="flex items-center gap-2.5">
        <Image
          src={activeTokens.logoInvert ? "/logo-inverted.svg" : "/logo.svg"}
          alt="Blossom Rocket"
          width={142}
          height={80}
          style={{ height: "80px", width: "auto" }}
          priority
        />
      </Link>

      <ul className="hidden md:flex gap-9 list-none items-center h-full">
        {links.map(({ href, label, dropdown = false }: NavLink) => {
          const isFirst = href === "/services" || href === "/resources";
          const menuIsOpen = dropdownOpen[label.toLowerCase()];

          return dropdown ? (
            <li
              key={href}
              className="relative"
              onMouseEnter={() =>
                setDropdownOpen((prev) => ({
                  ...prev,
                  [label.toLowerCase()]: true,
                }))
              }
              onMouseLeave={() =>
                setDropdownOpen((prev) => ({
                  ...prev,
                  [label.toLowerCase()]: false,
                }))
              }
            >
              <Link
                href={href}
                className={`flex items-center gap-1.5 text-[13.5px] font-medium tracking-[0.01em] transition-colors duration-200 hover:${activeTokens.linkHover} ${
                  menuIsOpen ? activeTokens.linkActive : activeTokens.linkIdle
                }`}
              >
                {label}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                  className="transition-transform duration-200"
                  style={{
                    transform: menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <path
                    d="M2 4l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              <div
                className="absolute top-full transition-all duration-200 pt-4"
                style={{
                  opacity: menuIsOpen ? 1 : 0,
                  pointerEvents: menuIsOpen ? "auto" : "none",
                  left: isFirst ? "0" : "50%",
                  transform: isFirst
                    ? `translateY(${menuIsOpen ? "0px" : "-6px"})`
                    : `translateX(-50%) translateY(${menuIsOpen ? "0px" : "-6px"})`,
                  width: "260px",
                }}
              >
                {!isFirst && (
                  <div
                    className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-white border-l border-t border-[rgba(24,24,27,0.08)]"
                    aria-hidden="true"
                  />
                )}
                <ul
                  className="relative bg-white rounded-2xl border border-[rgba(24,24,27,0.08)] overflow-hidden list-none p-1.5"
                  style={{
                    boxShadow:
                      "0 4px 24px rgba(24,24,27,0.08), 0 1px 4px rgba(24,24,27,0.04)",
                  }}
                >
                  {dropdownLinks[label]?.map(
                    ({ href: svcHref, label: svcLabel }) => (
                      <li key={svcHref}>
                        <Link
                          href={svcHref}
                          className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-[13px] font-medium text-[rgba(24,24,27,0.65)] hover:text-ink hover:bg-off transition-colors duration-150"
                          onClick={() =>
                            setDropdownOpen((prev) => ({
                              ...prev,
                              [label.toLowerCase()]: false,
                            }))
                          }
                        >
                          {svcLabel}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </li>
          ) : (
            <li key={href} className="flex items-center">
              <Link
                href={href}
                className={`text-[13.5px] font-medium tracking-[0.01em] transition-colors duration-200 hover:${activeTokens.linkHover}  ${activeTokens.linkIdle}`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>

      <a
        href="/contact"
        className={`text-[13px] font-semibold tracking-[0.02em] px-[22px] py-[9px] rounded-full transition-all duration-200 hover:-translate-y-px ${activeTokens.ctaBg} ${activeTokens.ctaText} ${activeTokens.ctaHover}`}
      >
        Get In Touch
      </a>
    </nav>
  );
}
