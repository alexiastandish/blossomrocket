"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { pageThemes } from "@/lib/utils/pageThemes";
import { useContactModal } from "@/contexts/contact-modal-context";
import { DropdownMenus, NavLink, NavTheme } from "@/lib/types/navigation";
import { dropdownLinks, links } from "@/lib/utils/navigation-schema";

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
    iconColor: string;
  }
> = {
  light: {
    linkIdle: "text-neutral-400",
    linkActive: "text-neutral-600",
    linkHover: "hover:text-neutral-900",
    ctaBg: "bg-[#18181b]",
    ctaText: "text-white",
    ctaHover: "hover:opacity-85",
    logoInvert: false,
    iconColor: "text-[#18181b]",
  },
  dark: {
    linkIdle: "text-[rgba(255,255,255,0.60)]",
    linkActive: "text-white",
    linkHover: "hover:text-white",
    ctaBg: "bg-white",
    ctaText: "text-[#18181b]",
    ctaHover: "hover:opacity-90",
    logoInvert: true,
    iconColor: "text-white",
  },
};

const scrolledTokens = {
  navBg:
    "bg-[rgba(250,250,248,0.92)] backdrop-blur-[18px] border-[rgba(24,24,27,0.10)]",
  linkIdle: "text-neutral-400",
  linkActive: "text-neutral-600",
  linkHover: "hover:text-neutral-900",
  ctaBg: "bg-[#18181b]",
  ctaText: "text-white",
  ctaHover: "hover:opacity-85",
  logoInvert: false,
  iconColor: "text-[#18181b]",
};

const firstDropdownHref = links.find((link) => link.dropdown)?.href;

const initialDropdownState: DropdownMenus = links.reduce<DropdownMenus>(
  (acc, { label, dropdown }) => {
    if (dropdown) acc[label.toLowerCase()] = false;
    return acc;
  },
  {},
);

export default function Nav() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<DropdownMenus>(
    initialDropdownState,
  );
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  const { open } = useContactModal();

  const pathname = usePathname();
  const navTheme: NavTheme = pageThemes[pathname] ?? "light";
  const activeTokens =
    scrolled || mobileOpen ? scrolledTokens : unscrolledTokens[navTheme];

  useEffect(() => {
    // Avoid synchronous setState in effect to prevent cascading renders;
    // schedule update on next animation frame instead.
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [pathname]);

  // Reset mobile menu state on route change (render-time adjustment,
  // not an Effect — avoids the cascading-render warning).
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }

  // Lock body scroll + close on Escape while the mobile panel is open.
  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  const mobilePanel = (
    <div
      id="mobile-nav-panel"
      className={`md:hidden fixed inset-x-0 transition-all duration-300 ${
        mobileOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      style={{
        top: "68px",
        bottom: 0,
        zIndex: 105,
        backgroundColor: "#fafaf8",
        opacity: mobileOpen ? 1 : 0,
        transform: mobileOpen ? "translateY(0)" : "translateY(-8px)",
      }}
    >
      <div className="flex h-full flex-col overflow-y-auto px-[clamp(20px,5vw,60px)] py-8">
        <ul className="flex flex-col list-none">
          {links.map(({ href, label, dropdown = false }) => {
            const isActive =
              pathname === href || pathname.startsWith(`${href}/`);

            if (!dropdown) {
              return (
                <li
                  key={href}
                  className="border-b border-[rgba(24,24,27,0.08)]"
                >
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-4 text-[22px] font-medium tracking-[-0.01em] ${
                      isActive ? "text-neutral-900" : "text-neutral-600"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            }

            return (
              <li key={href} className="border-b border-[rgba(24,24,27,0.08)]">
                <div className="flex items-center justify-between py-4">
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="text-[22px] font-medium tracking-[-0.01em] text-neutral-600"
                  >
                    {label}
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((prev) => !prev)}
                    aria-expanded={mobileServicesOpen}
                    aria-label={`Toggle ${label} submenu`}
                    className="flex h-8 w-8 items-center justify-center text-neutral-600"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                      className="transition-transform duration-200"
                      style={{
                        transform: mobileServicesOpen
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
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
                </div>
                <div
                  className="grid overflow-hidden transition-all duration-300"
                  style={{
                    gridTemplateRows: mobileServicesOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="min-h-0">
                    <ul className="flex flex-col list-none pb-3">
                      {dropdownLinks[label]?.map(
                        ({ href: svcHref, label: svcLabel }) => {
                          const isChildActive =
                            pathname === svcHref ||
                            pathname.startsWith(`${svcHref}/`);
                          return (
                            <li key={svcHref}>
                              <Link
                                href={svcHref}
                                onClick={() => setMobileOpen(false)}
                                className={`block py-2.5 text-[16px] ${isChildActive ? "font-semibold text-violet" : "font-medium text-[rgba(24,24,27,0.65)]"}`}
                              >
                                {svcLabel}
                              </Link>
                            </li>
                          );
                        },
                      )}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => {
            setMobileOpen(false);
            open();
          }}
          className="mt-8 w-full rounded-full bg-[#18181b] px-6 py-4 text-center text-[16px] font-semibold text-white transition-opacity hover:opacity-85"
        >
          Get In Touch
        </button>
      </div>
    </div>
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[clamp(20px,5vw,60px)] transition-all duration-400 border-b ${
          scrolled || mobileOpen
            ? "bg-[rgba(250,250,248,0.92)] backdrop-blur-[18px] border-[rgba(24,24,27,0.10)]"
            : "bg-transparent border-transparent"
        }`}
        style={{ height: "68px" }}
        role="navigation"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setMobileOpen(false)}
        >
          <Image
            src={activeTokens.logoInvert ? "/logo-inverted.svg" : "/logo.svg"}
            alt="Blossom Rocket"
            width={142}
            height={80}
            style={{ height: "80px", width: "auto" }}
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-9 list-none items-center h-full">
          {links.map(({ href, label, dropdown = false }: NavLink) => {
            const isFirst = href === firstDropdownHref;
            const menuIsOpen = dropdownOpen[label.toLowerCase()];
            const isActive =
              pathname === href || pathname.startsWith(`${href}/`);
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
                  className={`flex items-center gap-1.5 body-sm font-medium tracking-[0.01em] transition-colors duration-200 ${isActive ? activeTokens.linkActive : activeTokens.linkIdle} hover:${activeTokens.linkHover} hover:cursor-pointer ${
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
                      ({ href: svcHref, label: svcLabel }) => {
                        const isChildActive =
                          pathname === svcHref ||
                          pathname.startsWith(`${svcHref}/`);
                        return (
                          <li key={svcHref}>
                            <Link
                              href={svcHref}
                              className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl body-sm hover:text-ink hover:bg-off transition-colors duration-150 ${isChildActive ? "font-semibold text-violet" : "font-medium text-[rgba(24,24,27,0.65)]"}`}
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
                        );
                      },
                    )}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={href} className="flex items-center">
                <Link
                  href={href}
                  className={`body-sm font-medium tracking-[0.01em] transition-colors duration-200  ${isActive ? activeTokens.linkActive : activeTokens.linkIdle}  ${activeTokens.linkHover}  hover:cursor-pointer `}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <button
          type="button"
          onClick={open}
          className={`hidden md:inline-flex body-sm font-semibold tracking-[0.02em] px-[22px] py-[9px] rounded-full transition-all duration-200 hover:-translate-y-px ${activeTokens.ctaBg} ${activeTokens.ctaText} ${activeTokens.ctaHover}`}
        >
          Get In Touch
        </button>

        {/* Mobile hamburger toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-panel"
          className={`md:hidden relative flex h-10 w-10 items-center justify-center ${activeTokens.iconColor}`}
          style={{ zIndex: 110 }}
        >
          <span className="relative block h-4 w-5">
            <span
              className="absolute left-0 top-0 h-[1.5px] w-full rounded-full bg-current transition-all duration-300"
              style={{
                transform: mobileOpen
                  ? "translateY(7px) rotate(45deg)"
                  : "translateY(0) rotate(0)",
              }}
            />
            <span
              className="absolute left-0 top-[7px] h-[1.5px] w-full rounded-full bg-current transition-all duration-200"
              style={{
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              className="absolute left-0 top-[14px] h-[1.5px] w-full rounded-full bg-current transition-all duration-300"
              style={{
                transform: mobileOpen
                  ? "translateY(-7px) rotate(-45deg)"
                  : "translateY(0) rotate(0)",
              }}
            />
          </span>
        </button>
      </nav>

      {mounted && createPortal(mobilePanel, document.body)}
    </>
  );
}
