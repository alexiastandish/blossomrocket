"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const links = [
  { href: "#whatis", label: "Brand Systems" },
  { href: "#services", label: "Services" },
  { href: "#deployment", label: "Deployment" },
  { href: "#stores", label: "Company Stores" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleAnchor = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
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
      <a
        href="#"
        className="flex items-center gap-2.5"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <Image
          src="/logo.svg"
          alt="Blossom Rocket"
          width={142}
          height={80}
          style={{ height: "80px", width: "auto" }}
          priority
        />
      </a>

      <ul className="hidden md:flex gap-9 list-none">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="nav-link relative text-[13.5px] font-medium text-[rgba(24,24,27,0.58)] tracking-[0.01em] transition-colors duration-200 hover:text-[#18181b]"
              onClick={(e) => handleAnchor(e, href)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="text-[13px] font-semibold tracking-[0.02em] px-[22px] py-[9px] rounded-full bg-[#18181b] text-white transition-all duration-200 hover:opacity-85 hover:-translate-y-px"
        onClick={(e) => handleAnchor(e, "#contact")}
      >
        Schedule a Consultation
      </a>
    </nav>
  );
}
