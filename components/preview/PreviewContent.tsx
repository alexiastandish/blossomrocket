// app/preview/[slug]/[token]/PreviewContent.tsx
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { PreviewData, PreviewTemplate } from "@/lib/types/preview";
import TEMPLATE_LABELS from "@/lib/constants/preview/template_labels.json";
import TEMPLATE_STORE_URLS from "@/lib/constants/preview/template_store_urls.json";

type Props = {
  data: PreviewData;
  allProducts: Record<
    PreviewTemplate,
    { name: string; price: string; image: string; url: string }[]
  >;
};

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
      <div className="max-w-[1100px] mx-auto px-6 pt-7 pb-4">
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
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, i) => (
            <a
              key={i}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-[#e8e8e8] rounded-sm overflow-hidden hover:border-[#ccc] hover:shadow-md transition-all duration-200 block"
            >
              <div className="relative aspect-square bg-[#f5f5f5] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-contain p-6 group-hover:scale-[1.03] transition-transform duration-300"
                />
                <div
                  className="absolute bottom-2 right-2 text-[10px] font-semibold px-2 py-1 rounded text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ background: `${primaryColor}dd` }}
                >
                  + {company} Logo
                </div>
              </div>
              <div className="p-3 pb-4">
                <p className="text-[12px] font-medium text-[#1a1a1a] leading-[1.4] mb-1.5 line-clamp-2">
                  {product.name}
                </p>
                <p
                  className="text-[13px] font-bold"
                  style={{ color: primaryColor }}
                >
                  {product.price}
                </p>
                <p className="text-[11px] text-[#bbb] mt-0.5">
                  More colors available
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* ── More products bar ── */}
        <div className="mt-4 mb-12 bg-white border-[1.5px] border-dashed border-[#d0cce8] rounded-lg px-6 py-5 flex items-center justify-between flex-wrap gap-4">
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
