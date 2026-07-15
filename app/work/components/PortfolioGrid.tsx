"use client";

import { useState, useEffect, useRef, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectItem, ProjectImage } from "@/lib/types/projects";
import { isVideoSrc } from "@/lib/utils/isVideoSrc";

interface PortfolioGridProps {
  items: ProjectItem[];
}

// Used whenever a project doesn't set its own `rowHeight`.
const DEFAULT_ROW_HEIGHT = "clamp(160px, 32vw, 420px)";

/**
 * Splits a project's flat `images` array into lines, breaking immediately
 * before any image with `wrapBefore: true`. This is deliberate/author-defined
 * wrapping — the same break points apply at every viewport width, unlike
 * flex-wrap's automatic reflow.
 */
function groupImagesIntoLines(images: ProjectImage[]): ProjectImage[][] {
  const lines: ProjectImage[][] = [[]];
  images.forEach((img, i) => {
    if (i > 0 && img.wrapBefore) {
      lines.push([]);
    }
    lines[lines.length - 1].push(img);
  });
  return lines;
}

export function PortfolioGrid({ items }: PortfolioGridProps) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    const els = rowRefs.current.filter(
      (el): el is HTMLDivElement => el !== null,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = els.indexOf(entry.target as HTMLDivElement);
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
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_520px] gap-12 items-start">
      {/* ── Rows: one per project, image count varies ── */}
      <div
        className="flex flex-col gap-8 sm:gap-11 min-w-0"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        {items.map((project, i) => {
          const isActive = activeIndex === i;
          const lines = groupImagesIntoLines(project.images);

          const rowStyle: CSSProperties & Record<`--${string}`, string> = {
            "--row-height": project.rowHeight ?? DEFAULT_ROW_HEIGHT,
            opacity: 0,
            transform: "translateY(20px)",
            transition:
              "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1), outline-color 0.2s",
          };

          return (
            <div
              key={project.slug}
              ref={(el) => {
                rowRefs.current[i] = el;
              }}
              // href={project.href}
              onMouseEnter={() => handleHover(i)}
              className={[
                "group flex flex-col gap-1.5 max-w-full rounded-sm",
                "outline outline-2 outline-offset-[6px] transition-[outline-color] duration-200",
                isActive ? "outline-violet" : "outline-transparent",
              ].join(" ")}
              style={rowStyle}
              itemScope
              itemType="https://schema.org/CreativeWork"
            >
              <meta itemProp="name" content={project.title} />
              <meta itemProp="description" content={project.description} />

              {lines.map((line, lineIndex) => (
                <div
                  key={`${project.slug}-line-${lineIndex}`}
                  className={[
                    "flex gap-1.5 max-w-full",
                    "overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none]",
                    "[&::-webkit-scrollbar]:hidden",
                  ].join(" ")}
                >
                  {line.map((img, imgIndex) => {
                    const video = isVideoSrc(img.src);
                    const hasRatio = Boolean(img.aspectRatio);
                    const key = `${project.slug}-${lineIndex}-${imgIndex}`;

                    // Two rendering paths:
                    // 1. aspectRatio is set → sized container + next/image `fill`
                    // 2. no aspectRatio → no container sizing at all; the media
                    //    itself is height: var(--row-height), width: auto, so its
                    //    own natural intrinsic ratio decides how wide it renders.
                    //    next/image's `fill` mode requires a container with a
                    //    definite size, so it can't express "auto width" — that's
                    //    why this path drops to a plain <img>/<video>.
                    if (hasRatio) {
                      return (
                        <div
                          key={key}
                          className="relative flex-none overflow-hidden rounded-sm bg-surface-subtle h-[var(--row-height)]"
                          style={{ aspectRatio: img.aspectRatio }}
                        >
                          {video ? (
                            <video
                              src={img.src}
                              autoPlay
                              muted
                              loop
                              playsInline
                              preload="metadata"
                              aria-label={img.alt}
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out-expo group-hover:scale-[1.035]"
                            />
                          ) : (
                            <Image
                              src={img.src}
                              alt={img.alt}
                              fill
                              sizes="(max-width: 768px) 60vw, 40vw"
                              className="object-cover transition-transform duration-500 ease-out-expo group-hover:scale-[1.035]"
                            />
                          )}
                        </div>
                      );
                    }

                    return video ? (
                      // eslint-disable-next-line jsx-a11y/media-has-caption
                      <video
                        key={key}
                        src={img.src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        aria-label={img.alt}
                        className="flex-none h-[var(--row-height)] w-auto rounded-sm transition-transform duration-500 ease-out-expo group-hover:scale-[1.035]"
                      />
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={key}
                        src={img.src}
                        alt={img.alt}
                        className="flex-none h-[var(--row-height)] w-auto rounded-sm transition-transform duration-500 ease-out-expo group-hover:scale-[1.035]"
                      />
                    );
                  })}
                </div>
              ))}
            </div>
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
            {active.tags.map((tag: string) => (
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

          {/* Hint */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-violet flex-shrink-0 animate-pulse" />
            <span className="text-[11px] text-ink-faint">
              Hover any project to explore
            </span>
          </div>
        </div>
      </aside>
    </div>
  );
}
