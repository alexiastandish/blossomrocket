"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type ServiceLink = {
  href: string;
  label: string;
};

type NavLink = {
  href: string;
  label: string;
  dropdown?: boolean;
};

const services: ServiceLink[] = [
  { href: "/services/brand-identity", label: "Brand Identity" },
  { href: "/services/brand-systems", label: "Brand Systems" },
  { href: "/services/digital-design", label: "Digital Design" },
  {
    href: "/services/campaign-marketing-assets",
    label: "Campaign & Marketing Assets",
  },
  { href: "/services/print-environmental", label: "Print & Environmental" },
  {
    href: "/services/merchandise-promotional-products",
    label: "Merchandise & Promotional Products",
  },
  { href: "/services/company-stores", label: "Company Stores" },
  {
    href: "/services/search-everything-optimization",
    label: "Search Everything Optimization",
  },
];

const links: NavLink[] = [
  { href: "#whatis", label: "Brand Systems" },
  { href: "#services", label: "Services", dropdown: true },
  { href: "#deployment", label: "Deployment" },
  { href: "#stores", label: "Company Stores" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleAnchor = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ): void => {
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
          src="/logo.svg"
          alt="Blossom Rocket"
          width={142}
          height={80}
          style={{ height: "80px", width: "auto" }}
          priority
        />
      </Link>

      <ul className="hidden md:flex gap-9 list-none items-center">
        {links.map(({ href, label, dropdown }) =>
          dropdown ? (
            <li key={href} ref={dropdownRef} className="relative">
              <button
                className={`flex items-center gap-1.5 text-[13.5px] font-medium tracking-[0.01em] transition-colors duration-200 hover:text-[#18181b] bg-transparent border-none cursor-pointer p-0 ${
                  dropdownOpen ? "text-[#18181b]" : "text-[rgba(24,24,27,0.58)]"
                }`}
                onClick={() => setDropdownOpen((v) => !v)}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
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
                    transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
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
              </button>

              <div
                className="absolute top-[calc(100%+16px)] left-1/2 transition-all duration-200"
                style={{
                  opacity: dropdownOpen ? 1 : 0,
                  pointerEvents: dropdownOpen ? "auto" : "none",
                  transform: `translateX(-50%) translateY(${dropdownOpen ? "0px" : "-6px"})`,
                  width: "260px",
                }}
              >
                <div
                  className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-white border-l border-t border-[rgba(24,24,27,0.08)]"
                  aria-hidden="true"
                />

                <ul
                  className="relative bg-white rounded-2xl border border-[rgba(24,24,27,0.08)] overflow-hidden list-none p-1.5"
                  style={{
                    boxShadow:
                      "0 4px 24px rgba(24,24,27,0.08), 0 1px 4px rgba(24,24,27,0.04)",
                  }}
                >
                  {services.map(({ href: svcHref, label: svcLabel }) => (
                    <li key={svcLabel}>
                      <Link
                        href={svcHref}
                        className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-[13px] font-medium text-[rgba(24,24,27,0.65)] hover:text-[#18181b] hover:bg-[#fafaf8] transition-colors duration-150"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {svcLabel}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ) : (
            <li key={href}>
              <a
                href={href}
                className="nav-link relative text-[13.5px] font-medium text-[rgba(24,24,27,0.58)] tracking-[0.01em] transition-colors duration-200 hover:text-[#18181b]"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                  handleAnchor(e, href)
                }
              >
                {label}
              </a>
            </li>
          ),
        )}
      </ul>

      <a
        href="#contact"
        className="text-[13px] font-semibold tracking-[0.02em] px-[22px] py-[9px] rounded-full bg-[#18181b] text-white transition-all duration-200 hover:opacity-85 hover:-translate-y-px"
        onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
          handleAnchor(e, "#contact")
        }
      >
        Schedule a Consultation
      </a>
    </nav>
  );
}
