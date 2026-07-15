"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { WorkItem } from "@/lib/types/work";
import { isVideoSrc } from "@/lib/utils/isVideoSrc";

interface PortfolioGridProps {
  items: WorkItem[];
}

export function PortfolioGrid({ items }: PortfolioGridProps) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const active = items[displayedIndex];

  function handleHover(index: number) {
    if (index === activeIndex) return;
    setTransitioning(true);
    if (transitionTimer.current) clearTimeout(transitionTimer.current);
    transitionTimer.current = setTimeout(() => {
      setDisplayedIndex(index);
      setActiveIndex(index);
      setTransitioning(false);
    }, 200);
  }

  useEffect(() => {
    const els = itemRefs.current.filter(Boolean) as HTMLAnchorElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = els.indexOf(entry.target as HTMLAnchorElement);
            setTimeout(() => {
              (entry.target as HTMLElement).style.opacity = "1";
              (entry.target as HTMLElement).style.transform = "translateY(0)";
              if (index === 0) {
                setActiveIndex(0);
                setDisplayedIndex(0);
                setTransitioning(false);
              }
            }, index * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px] gap-12 items-start">
      {/* ── Main grid ── */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        {items.map((item, i) => {
          const video = isVideoSrc(item.src);
          const full = i === 0;
          const isActive = activeIndex === i;

          return (
            <Link
              key={`${item.src}-${i}`}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              href={item.href}
              onMouseEnter={() => handleHover(i)}
              className={[
                "group relative overflow-hidden block w-full bg-surface-subtle rounded-sm",
                "transition-[outline-color] duration-200",
                full ? "md:col-span-2" : "",
                isActive
                  ? "outline outline-2 outline-offset-[3px] outline-violet"
                  : "outline outline-2 outline-offset-[3px] outline-transparent",
              ].join(" ")}
              style={{
                aspectRatio: item.aspectRatio ?? "16/10",
                opacity: 0,
                transform: "translateY(24px)",
                transition:
                  "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1), outline-color 0.2s",
              }}
              itemScope
              itemType="https://schema.org/CreativeWork"
            >
              <meta itemProp="name" content={item.title} />
              <meta itemProp="description" content={item.description} />

              {video ? (
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={item.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out-expo group-hover:scale-[1.04]"
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes={full ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                  className="object-cover transition-transform duration-500 ease-out-expo group-hover:scale-[1.04]"
                />
              )}
            </Link>
          );
        })}
      </div>

      {/* ── Sidebar ── */}
      <aside className="hidden lg:block sticky top-[88px]">
        <div
          className="transition-[opacity,transform] duration-[220ms] ease-out"
          style={{
            opacity: transitioning ? 0 : 1,
            transform: transitioning ? "translateY(10px)" : "translateY(0)",
          }}
        >
          {/* Counter */}
          <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-ink-faint mb-5">
            {String(displayedIndex + 1).padStart(2, "0")} /{" "}
            {String(items.length).padStart(2, "0")}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {active.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold tracking-[0.10em] uppercase text-violet bg-active-bg rounded-full px-2.5 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2
            className="text-[26px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink mb-3"
            style={{ fontFamily: "'Parkinsans', sans-serif" }}
          >
            {active.title}
          </h2>

          {/* Description */}
          <p className="text-[13px] leading-[1.75] text-ink-mid mb-5">
            {active.description}
          </p>

          {/* CTA */}
          <Link
            href={active.href}
            className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-violet transition-[gap] duration-200 hover:gap-3 mb-8"
          >
            View Project →
          </Link>

          {/* ── Mini image grid ── */}
          {active.additionalImages && active.additionalImages.length > 0 && (
            <div>
              <p className="text-[10px] font-semibold tracking-[0.10em] uppercase text-ink-faint mb-3">
                From this project
              </p>
              <div className="grid grid-cols-2 gap-2">
                {active.additionalImages.map((img, i) => (
                  <Link
                    key={`${img.src}-${i}`}
                    href={active.href}
                    className="group/mini relative overflow-hidden rounded-sm bg-surface-subtle block"
                    style={{
                      aspectRatio: img.aspectRatio ?? "1/1",
                      opacity: 0,
                      transform: "translateY(10px)",
                      animation: `miniIn 0.4s cubic-bezier(0.16,1,0.3,1) ${i * 60}ms forwards`,
                    }}
                  >
                    {isVideoSrc(img.src) ? (
                      <video
                        src={img.src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/mini:scale-[1.06]"
                      />
                    ) : (
                      <Image
                        src={img.src}
                        alt={img.alt ?? active.title}
                        fill
                        sizes="160px"
                        className="object-cover transition-transform duration-500 group-hover/mini:scale-[1.06]"
                      />
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Hint */}
          <div className="mt-8 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-violet flex-shrink-0 animate-pulse" />
            <span className="text-[11px] text-ink-faint">
              Hover any project to explore
            </span>
          </div>
        </div>

        <style>{`
          @keyframes miniIn {
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </aside>
    </div>
  );
}
