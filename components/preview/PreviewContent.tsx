"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  PreviewData,
  ResolvedPreviewProduct,
  PreviewTemplate,
} from "@/lib/types/preview";
import TEMPLATE_LABELS from "@/lib/constants/preview/template_labels.json";
import TEMPLATE_STORE_URLS from "@/lib/constants/preview/template_store_urls.json";

type Props = {
  data: PreviewData;
  allProducts: Record<PreviewTemplate, ResolvedPreviewProduct[]>;
};

// Decorative fallback swatch colors — used only for products that
// don't yet have real `colors` data on them. Once a product's
// `colors` array is populated in preview-products.ts, that's used
// instead automatically.
const FALLBACK_SWATCH_SETS = [
  ["#3d2b1f", "#c9bfa5", "#111111", "#e8e6e0", "#f5f5f0", "#1a2b6b"],
  ["#8a9a7e", "#1a2b6b", "#111111", "#d4a94c"],
  ["#9c9186", "#5b6ea3", "#111111"],
];

function swatchesFor(product: { colors?: string[] }, i: number) {
  return product.colors?.length
    ? product.colors
    : FALLBACK_SWATCH_SETS[i % FALLBACK_SWATCH_SETS.length];
}

export function PreviewContent({ data, allProducts }: Props) {
  const [template, setTemplate] = useState<PreviewTemplate>(data.template);
  const { primaryColor, company } = data;

  useEffect(() => {
    const handler = (e: Event) =>
      setTemplate((e as CustomEvent<PreviewTemplate>).detail);
    window.addEventListener("preview:template", handler);
    return () => window.removeEventListener("preview:template", handler);
  }, []);

  const products = allProducts[template] ?? allProducts.men;
  const templateLabel = TEMPLATE_LABELS[template];
  const storeUrl = TEMPLATE_STORE_URLS[template];

  return (
    <main>
      {/* ── Page heading ── */}
      <div className="max-w-[1400px] mx-auto px-6 pt-7 pb-4">
        <p className="text-[11px] font-semibold tracking-[0.10em] uppercase text-[#999] mb-1">
          {company} Store
        </p>
        <h1 className="text-[26px] font-bold text-[#1a1a1a]">
          {templateLabel}
        </h1>
        <div className="flex items-center gap-1.5 mt-2.5 text-[12px] text-[#bbb]">
          <span>{company} Store</span>
          <span>/</span>
          <span className="font-semibold" style={{ color: primaryColor }}>
            {templateLabel}
          </span>
        </div>
      </div>

      {/* ── Product grid ── */}
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-14">
          {products.map((product, i) => (
            <a
              key={product.id}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              {/* Image — no card border/shadow, subtle neutral bg box */}
              <div className="relative aspect-[4/5] mb-4 bg-white overflow-hidden">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-contain object-center group-hover:scale-[1.02] transition-transform duration-300"
                  />
                ) : null}
              </div>

              {/* NEW eyebrow */}
              <p className="text-[11px] font-bold tracking-[0.06em] uppercase text-[#1a1a1a] mb-2">
                New
              </p>

              {/* Color swatches */}
              <div className="flex items-center gap-1.5 mb-2.5">
                {swatchesFor(product, i).map((color, si) => (
                  <span
                    key={si}
                    className="w-[18px] h-[18px] rounded-full border border-black/10"
                    style={{ background: color }}
                  />
                ))}
              </div>

              {/* Name */}
              <p className="text-[14px] text-[#1a1a1a] leading-[1.4] mb-1">
                {product.name}
              </p>

              {/* Price */}
              <p className="text-[14px] text-[#1a1a1a]">{product.price}</p>
            </a>
          ))}
        </div>

        {/* ── More products bar ── */}
        <div className="mt-10 mb-12 bg-white border-[1.5px] border-dashed border-[#d0cce8] rounded-lg px-6 py-5 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <span className="text-[26px] flex-shrink-0">📦</span>
            <div>
              <p className="text-[13px] font-bold text-[#1a1a1a] mb-1">
                Hundreds more products available — all branded with the{" "}
                {company} logo
              </p>
              <p className="text-[12px] text-[#888] leading-[1.5]">
                Polos, hoodies, performance tees, bags, drinkware, tech
                accessories, print materials, onboarding kits, and more.
              </p>
            </div>
          </div>
          <a
            href={storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] font-bold px-5 py-2.5 rounded-full border-[1.5px] transition-all duration-150 flex-shrink-0 hover:text-white"
            style={{
              color: primaryColor,
              borderColor: primaryColor,
              background: `${primaryColor}14`,
            }}
          >
            Browse full catalog →
          </a>
        </div>
      </div>
    </main>
  );
}
