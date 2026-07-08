import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { WorkItem } from "@/lib/types/work";

export function PortfolioItem({ item }: { item: WorkItem }) {
  return (
    <Link
      href={item.href}
      className="group relative overflow-hidden block h-full bg-surface-subtle"
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 ease-out-expo group-hover:scale-[1.04]"
      />

      {/* Overlay — grad-dark-brand: only gradients use style= */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center p-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "var(--grad-dark-brand)" }}
      >
        {/* Tag */}
        <span className="text-[10px] font-semibold tracking-[0.12em] uppercase px-3 py-1 rounded-full border border-border-on-dark text-fg-on-dark opacity-70 mb-2.5">
          {item.tag}
        </span>

        {/* Title */}
        <h3
          className="font-display font-semibold text-fg-on-dark leading-[1.2] tracking-[-0.02em] mb-2"
          style={{ fontSize: "clamp(16px,2vw,22px)" }}
        >
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-[13px] leading-[1.6] text-fg-on-brand max-w-[260px] mb-5">
          {item.description}
        </p>

        {/* CTA */}
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-btn-primary-bg text-fg-on-dark text-[12px] font-semibold tracking-[0.02em] transition-colors duration-200 group-hover:bg-btn-primary-hover">
          View Service →
        </span>
      </div>
    </Link>
  );
}
