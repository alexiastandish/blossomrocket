"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollReveal() {
  const pathname = usePathname();

  // Scroll reset — runs first on every route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Re-observe .rv elements and re-attach anchor listeners on every route change
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("on");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.1 },
    );

    // Small timeout to let Next.js finish rendering the new page's DOM
    const timer = setTimeout(() => {
      document.querySelectorAll(".rv").forEach((el) => obs.observe(el));
    }, 50);

    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const href = (a as HTMLAnchorElement).getAttribute("href");
        if (!href) return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    return () => {
      obs.disconnect();
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
