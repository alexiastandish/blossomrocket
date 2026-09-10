"use client";

import { useState } from "react";
import Link from "next/link";
import { ShopMegaMenuCategory } from "@/lib/types/navigation";

type ShopMegaMenuProps = {
  categories: ShopMegaMenuCategory[];
  open: boolean;
  onNavigate?: () => void;
};

export default function ShopMegaMenu({
  categories,
  open,
  onNavigate,
}: ShopMegaMenuProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = categories[activeIndex];

  return (
    <div
      className="absolute top-full right-0 transition-all duration-200 pt-4"
      style={{
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
        transform: `translateY(${open ? "0px" : "-6px"})`,
        width: "min(920px, calc(100vw - 40px))",
      }}
    >
      <div
        className="relative bg-white rounded-2xl border border-[rgba(24,24,27,0.08)] overflow-hidden"
        style={{
          boxShadow:
            "0 4px 24px rgba(24,24,27,0.08), 0 1px 4px rgba(24,24,27,0.04)",
        }}
      >
        {/* Category tabs */}
        <div className="flex items-center gap-1 overflow-x-auto px-3 pt-3">
          {categories.map((category, index) => (
            <button
              key={category.label}
              type="button"
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              className={`flex-shrink-0 rounded-lg px-3.5 py-2 body-sm font-medium tracking-[0.01em] transition-colors duration-150 ${
                index === activeIndex
                  ? "bg-violet-50 text-violet"
                  : "text-neutral-400 hover:text-neutral-900"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="mt-2 border-t border-[rgba(24,24,27,0.08)]" />

        {/* Active category columns */}
        <div className="p-6">
          <div
            className="grid gap-7"
            style={{
              gridTemplateColumns: `repeat(${active.groups.length}, minmax(0, 1fr))`,
            }}
          >
            {active.groups.map((group) => (
              <div key={group.title}>
                <p className="mb-3 pb-2.5 border-b border-[rgba(24,24,27,0.08)] text-[11px] font-semibold uppercase tracking-[0.06em] text-neutral-400">
                  {group.title}
                </p>
                <ul className="list-none">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={onNavigate}
                        className="block py-1.5 body-sm font-medium text-[rgba(24,24,27,0.65)] hover:text-violet transition-colors duration-150"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
