"use client";

import {
  useState,
  useEffect,
  useMemo,
  useRef,
  type CSSProperties,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { ProjectItem, ProjectImage } from "@/lib/types/projects";
import { isVideoSrc } from "@/lib/utils/isVideoSrc";

interface PortfolioGridProps {
  items: ProjectItem[];
}

const DEFAULT_ROW_HEIGHT = "clamp(160px, 32vw, 420px)";

const EDGE_TOLERANCE = 2;

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

// URL-safe slug for a tag, e.g. "Brand Identity" -> "brand-identity".
// Used as both the query param value and the React key for each pill.
function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function PortfolioGrid({ items }: PortfolioGridProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [activeIndex, setActiveIndex] = useState(-1);
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<Record<string, HTMLElement | null>>({});
  const lineRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const pageBgRef = useRef<Record<string, string>>({});

  // All tags across the full (unfiltered) item set, deduped, in first-seen
  // order — this is what drives the pill bar. Slug is computed once here
  // and reused for both the button's query-param value and its label lookup.
  const allTags = useMemo(() => {
    const seen = new Map<string, string>(); // slug -> original label
    items.forEach((project) => {
      project.tags.forEach((tag) => {
        const slug = slugifyTag(tag);
        if (!seen.has(slug)) seen.set(slug, tag);
      });
    });
    return Array.from(seen.entries()).map(([slug, label]) => ({
      slug,
      label,
    }));
  }, [items]);

  const activeTagSlug = searchParams.get("tag");

  // Filtered project list — everything downstream (rows, refs, sidebar)
  // is built from this instead of the raw `items` prop.
  const filteredItems = useMemo(() => {
    if (!activeTagSlug) return items;
    return items.filter((project) =>
      project.tags.some((tag) => slugifyTag(tag) === activeTagSlug),
    );
  }, [items, activeTagSlug]);

  function handleTagClick(slug: string | null) {
    const params = new URLSearchParams(searchParams.toString());
    if (slug === null || slug === activeTagSlug) {
      params.delete("tag");
    } else {
      params.set("tag", slug);
    }
    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  // Computed once per filtered list change, then reused by the main rows
  // and the active project's sidebar thumbnails — this guarantees they use
  // identical keys, so a thumbnail click can look up the exact image
  // element to scroll to.
  const projectsWithLines = useMemo(
    () =>
      filteredItems.map((project) => ({
        project,
        lines: groupImagesIntoLines(project.images),
      })),
    [filteredItems],
  );

  const active = filteredItems[displayedIndex];
  const activeLines = projectsWithLines[displayedIndex]?.lines ?? [];

  // Whenever the filter changes, the previous displayedIndex/activeIndex
  // may no longer point at the right project (or may be out of bounds),
  // so snap back to the top of the new list.
  useEffect(() => {
    // Avoid synchronous state updates inside an effect which can cause
    // cascading renders; schedule the resets on the next tick.
    const t = setTimeout(() => {
      setDisplayedIndex(0);
      setActiveIndex(-1);
      setTransitioning(false);
    }, 0);
    return () => clearTimeout(t);
  }, [activeTagSlug]);

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

  function scrollToImage(key: string) {
    const el = imageRefs.current[key];
    if (!el) return;

    // Bring the row itself into view vertically. `inline: "nearest"` here
    // deliberately does NOT try to handle the horizontal scroll — nested
    // scrollIntoView across multiple scrollable ancestors (page + this row's
    // own horizontal scroll container) is inconsistent across browsers,
    // Safari in particular. The horizontal part is done explicitly below.
    el.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });

    const lineContainer = el.closest<HTMLElement>('[data-scroll-line="true"]');
    if (lineContainer) {
      const containerRect = lineContainer.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const delta =
        elRect.left -
        containerRect.left -
        (lineContainer.clientWidth - elRect.width) / 2;
      lineContainer.scrollTo({
        left: lineContainer.scrollLeft + delta,
        behavior: "smooth",
      });
    }
  }

  // Fades rows in on scroll into view, and (re)runs whenever the filtered
  // list changes so newly-shown rows — ones that were filtered out before —
  // still get observed and fade in rather than appearing already-visible
  // with stale opacity:0 inline styles.
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
  }, [filteredItems]);

  // Scroll-fade indicators: for each line's horizontal scroll container,
  // show/hide the left/right edge fades based on actual scroll position —
  // not a one-time "does this overflow" check, since that would go stale
  // the moment the user scrolls.
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    Object.entries(lineRefs.current).forEach(([lineKey, line]) => {
      if (!line) return;
      const wrapper = line.parentElement;
      if (!wrapper) return;
      const leftFade = wrapper.querySelector<HTMLElement>("[data-fade='left']");
      const rightFade = wrapper.querySelector<HTMLElement>(
        "[data-fade='right']",
      );
      if (!leftFade || !rightFade) return;

      // Walk up from the row to find the nearest ancestor with an actual
      // (non-transparent) background color, and fade to that exact color.
      // This avoids hardcoding a guess between near-identical tokens like
      // --color-surface-base (#fff) and --color-surface-page (#f4f3fc) —
      // whichever one is really behind this row, the fade will match it.
      // Cached per line so the hover effect below can instantly restore it
      // without re-reading computed styles mid-transition.
      let bg = "rgb(255, 255, 255)";
      let node: HTMLElement | null = wrapper;
      while (node) {
        const computed = getComputedStyle(node).backgroundColor;
        if (
          computed &&
          computed !== "rgba(0, 0, 0, 0)" &&
          computed !== "transparent"
        ) {
          bg = computed;
          break;
        }
        node = node.parentElement;
      }
      pageBgRef.current[lineKey] = bg;
      wrapper.style.setProperty("--fade-bg", bg);

      const update = () => {
        const canScrollLeft = line.scrollLeft > EDGE_TOLERANCE;
        const canScrollRight =
          line.scrollLeft <
          line.scrollWidth - line.clientWidth - EDGE_TOLERANCE;
        leftFade.classList.toggle("opacity-100", canScrollLeft);
        rightFade.classList.toggle("opacity-100", canScrollRight);
      };

      update();
      line.addEventListener("scroll", update, { passive: true });
      window.addEventListener("resize", update);

      // Image/video dimensions load asynchronously and change scrollWidth,
      // so recheck once each one finishes loading.
      const media = line.querySelectorAll<HTMLImageElement | HTMLVideoElement>(
        "img, video",
      );
      media.forEach((el) => {
        const loadEvent = el.tagName === "VIDEO" ? "loadedmetadata" : "load";
        el.addEventListener(loadEvent, update);
        cleanups.push(() => el.removeEventListener(loadEvent, update));
      });

      cleanups.push(() => {
        line.removeEventListener("scroll", update);
        window.removeEventListener("resize", update);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, [projectsWithLines]);

  // When a row becomes active/hovered, its fade should match the new hover
  // background instead of the page background behind it — swapped directly
  // via the CSS variable rather than re-reading computed styles, since doing
  // that mid-transition would just capture whatever color the transition
  // happened to be at that exact frame, not the final target color.
  useEffect(() => {
    projectsWithLines.forEach(({ project, lines }, i) => {
      const isActive = i === activeIndex;
      lines.forEach((_, lineIndex) => {
        const lineKey = `${project.slug}-line-${lineIndex}`;
        const line = lineRefs.current[lineKey];
        const wrapper = line?.parentElement as HTMLElement | null;
        if (!wrapper) return;
        wrapper.style.setProperty(
          "--fade-bg",
          isActive
            ? "var(--color-active-bg)"
            : (pageBgRef.current[lineKey] ?? "#ffffff"),
        );
      });
    });
  }, [activeIndex, projectsWithLines]);

  return (
    <div>
      {/* ── Tag filter pills ──
          "All" clears the `tag` query param entirely; each tag pill sets it
          to that tag's slug, so the page is linkable/shareable with a
          filter pre-applied (e.g. /work?tag=branding). */}
      <div
        role="group"
        aria-label="Filter projects by tag"
        className="flex flex-wrap gap-2 mb-8 sm:mb-10"
      >
        <button
          type="button"
          onClick={() => handleTagClick(null)}
          aria-pressed={!activeTagSlug}
          className={[
            "text-[11px] font-semibold tracking-[0.08em] uppercase rounded-full px-3.5 py-1.5 transition-colors duration-150",
            !activeTagSlug
              ? "bg-violet text-white"
              : "text-ink-mid outline outline-1 outline-border hover:text-violet hover:outline-violet",
          ].join(" ")}
        >
          All
        </button>
        {allTags.map(({ slug, label }) => {
          const isActive = slug === activeTagSlug;
          return (
            <button
              key={slug}
              type="button"
              onClick={() => handleTagClick(slug)}
              aria-pressed={isActive}
              className={[
                "text-[11px] font-semibold tracking-[0.08em] uppercase rounded-full px-3.5 py-1.5 transition-colors duration-150",
                isActive
                  ? "bg-violet text-white"
                  : "text-ink-mid outline outline-1 outline-border hover:text-violet hover:outline-violet",
              ].join(" ")}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_400px] gap-8 lg:gap-12 items-start">
        {/* ── Rows: one per project, image count varies ── */}
        <div
          className="flex flex-col gap-10 sm:gap-11 min-w-0"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          {projectsWithLines.map(({ project, lines }, i) => {
            const isActive = activeIndex === i;

            const rowStyle: CSSProperties & Record<`--${string}`, string> = {
              "--row-height": project.rowHeight ?? DEFAULT_ROW_HEIGHT,
              marginBottom: "4em",
              opacity: 0,
              transform: "translateY(20px)",
              transition:
                "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1), outline-color 0.2s, background-color 0.2s",
            };

            return (
              <div
                key={project.slug}
                ref={(el) => {
                  rowRefs.current[i] = el;
                }}
                onMouseEnter={() => handleHover(i)}
                className={[
                  "group flex flex-col gap-1.5 max-w-full rounded-sm p-1.5",
                  "outline outline-2 outline-offset-[6px] transition-[outline-color] duration-200",
                  isActive
                    ? "outline-violet bg-active-bg"
                    : "outline-transparent bg-transparent",
                ].join(" ")}
                style={rowStyle}
                itemScope
                itemType="https://schema.org/CreativeWork"
              >
                <meta itemProp="name" content={project.title} />
                <meta itemProp="description" content={project.description} />

                {lines.map((line, lineIndex) => {
                  const lineKey = `${project.slug}-line-${lineIndex}`;

                  return (
                    <div key={lineKey} className="relative">
                      {/* Edge fades — visibility toggled in the scroll-fade effect above based on real scroll position. Narrower on small screens so they don't eat too much of a smaller row. */}
                      <div
                        data-fade="left"
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 sm:w-16 opacity-0 transition-opacity duration-300"
                        style={{
                          background:
                            "linear-gradient(to right, var(--fade-bg, #ffffff), transparent)",
                        }}
                      />
                      <div
                        data-fade="right"
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 sm:w-16 opacity-0 transition-opacity duration-300"
                        style={{
                          background:
                            "linear-gradient(to left, var(--fade-bg, #ffffff), transparent)",
                        }}
                      />

                      <div
                        ref={(el) => {
                          lineRefs.current[lineKey] = el;
                        }}
                        data-scroll-line="true"
                        className={[
                          "flex gap-1.5 max-w-full",
                          "overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none]",
                          "[&::-webkit-scrollbar]:hidden [-webkit-overflow-scrolling:touch]",
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
                                ref={(el) => {
                                  imageRefs.current[key] = el;
                                }}
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
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out-expo"
                                  />
                                ) : (
                                  <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 60vw, 40vw"
                                    className="object-cover transition-transform duration-500 ease-out-expo"
                                  />
                                )}
                              </div>
                            );
                          }

                          return video ? (
                            // eslint-disable-next-line jsx-a11y/media-has-caption
                            <video
                              key={key}
                              ref={(el) => {
                                imageRefs.current[key] = el;
                              }}
                              src={img.src}
                              autoPlay
                              muted
                              loop
                              playsInline
                              preload="metadata"
                              aria-label={img.alt}
                              className="flex-none h-[var(--row-height)] w-auto rounded-sm transition-transform duration-500 ease-out-expo"
                            />
                          ) : (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              key={key}
                              ref={(el) => {
                                imageRefs.current[key] = el;
                              }}
                              src={img.src}
                              alt={img.alt}
                              className="flex-none h-[var(--row-height)] w-auto rounded-sm transition-transform duration-500 ease-out-expo"
                            />
                          );
                        })}
                      </div>
                    </div>
                  );
                })}

                {/* ── Mobile/tablet project info ──
                    The sidebar below is desktop-only (hidden until `lg`), so
                    without this, anyone on a phone or tablet would see rows of
                    images and nothing else — no title, no description, no way
                    to get to the project page. This mirrors the sidebar's
                    content but inline per-project, since there's no hover
                    affordance on touch devices to justify a single shared panel. */}
                <div className="lg:hidden mt-3">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold tracking-[0.10em] uppercase text-violet bg-active-bg rounded-full px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3
                    className="text-[19px] sm:text-[21px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink mb-1.5"
                    style={{ fontFamily: "'Parkinsans', sans-serif" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-[13px] leading-[1.65] text-ink-mid mb-3 max-w-prose">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Sidebar (desktop only — see the inline mobile/tablet block above for < lg) ── */}
        <aside className="hidden lg:block sticky top-[88px]">
          {active ? (
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
                {String(filteredItems.length).padStart(2, "0")}
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

              {/* Mini thumbnail grid — click to scroll to that image above */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {activeLines.map((line, lineIndex) =>
                  line.map((img, imgIndex) => {
                    const key = `${active.slug}-${lineIndex}-${imgIndex}`;
                    const video = isVideoSrc(img.src);

                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => scrollToImage(key)}
                        aria-label={`Scroll to ${img.alt}`}
                        className="relative flex-none w-11 h-11 rounded-sm overflow-hidden bg-surface-subtle outline outline-1 outline-border hover:outline-violet transition-[outline-color] duration-150"
                      >
                        {video ? (
                          <video
                            src={img.src}
                            muted
                            playsInline
                            preload="metadata"
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        ) : (
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes="44px"
                            className="object-cover"
                          />
                        )}
                      </button>
                    );
                  }),
                )}
              </div>

              {/* Hint */}
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-violet flex-shrink-0 animate-pulse" />
                <span className="text-[11px] text-ink-faint">
                  Hover over any project to explore
                </span>
              </div>
            </div>
          ) : (
            // Filtered list is empty — no project to show details for.
            <p className="text-[13px] text-ink-mid">
              No projects match this filter.
            </p>
          )}
        </aside>
      </div>
    </div>
  );
}
