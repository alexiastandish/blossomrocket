"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ProjectItem, ProjectImage } from "@/lib/types/projects";
import { isVideoSrc } from "@/lib/utils/isVideoSrc";

interface SelectedWorkModalProps {
  item: ProjectItem | null;
  onClose: () => void;
}

const DEFAULT_ROW_HEIGHT = "clamp(160px, 32vw, 420px)";

// Same grouping logic as PortfolioGrid.tsx — kept in sync so a project's
// modal gallery matches its /work row exactly. Consider extracting this
// to a shared lib (e.g. lib/utils/groupImagesIntoLines.ts) so both
// components import one source of truth instead of two copies drifting.
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

export default function SelectedWorkModal({
  item,
  onClose,
}: SelectedWorkModalProps) {
  const scrollableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!item) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    // Belt-and-suspenders scroll lock: `overflow: hidden` on <html>/<body>
    // doesn't reliably block wheel/touch scrolling in every browser, so we
    // also intercept the events directly — except inside the modal's own
    // scrollable gallery, which should keep scrolling normally.
    function blockScroll(e: Event) {
      if (
        scrollableRef.current &&
        e.target instanceof Node &&
        scrollableRef.current.contains(e.target)
      ) {
        return;
      }
      e.preventDefault();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("wheel", blockScroll, { passive: false });
    document.addEventListener("touchmove", blockScroll, { passive: false });
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("wheel", blockScroll);
      document.removeEventListener("touchmove", blockScroll);
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
    };
  }, [item, onClose]);

  if (!item) return null;

  const lines = groupImagesIntoLines(item.images);
  const rowStyle: CSSProperties & Record<`--${string}`, string> = {
    "--row-height": item.rowHeight ?? DEFAULT_ROW_HEIGHT,
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-5xl max-h-[90vh] flex flex-col bg-surface-base rounded-sm overflow-hidden">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-active-bg text-ink hover:text-violet transition-colors"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M1 1L13 13M13 1L1 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Header — mirrors the sidebar's tags/title/description on /work */}
        <div className="px-6 sm:px-8 pt-6 pb-4 shrink-0">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {(item.tags ?? []).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold tracking-[0.10em] uppercase text-violet bg-active-bg rounded-full px-2.5 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-[13px] leading-[1.7] text-ink-mid max-w-prose">
            {item.description}
          </p>
        </div>

        {/* Image rows — identical treatment to PortfolioGrid's rows */}
        <div
          ref={scrollableRef}
          className="overflow-y-auto px-6 sm:px-8 pb-8"
          style={rowStyle}
        >
          <div className="flex flex-col gap-1.5">
            {lines.map((line, lineIndex) => (
              <div
                key={`${item.slug}-line-${lineIndex}`}
                className="flex flex-col md:flex-row gap-1.5 max-w-full md:overflow-x-auto md:overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              >
                {line.map((img, imgIndex) => {
                  const video = isVideoSrc(img.src);
                  const hasRatio = Boolean(img.aspectRatio);
                  const key = `${item.slug}-${lineIndex}-${imgIndex}`;

                  if (hasRatio) {
                    return (
                      <div
                        key={key}
                        className="relative flex-none w-full h-auto md:w-auto md:h-[var(--row-height)] overflow-hidden rounded-sm bg-surface-subtle"
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
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        ) : (
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes="(max-width: 767px) 100vw, 60vw"
                            className="object-cover"
                          />
                        )}
                      </div>
                    );
                  }

                  return video ? (
                    <video
                      key={key}
                      src={img.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label={img.alt}
                      className="flex-none w-full h-auto md:w-auto md:h-[var(--row-height)] rounded-sm"
                    />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={key}
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      decoding="async"
                      className="flex-none w-full h-auto md:w-auto md:h-[var(--row-height)] rounded-sm"
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
