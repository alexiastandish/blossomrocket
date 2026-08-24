"use client";

import Image from "next/image";
import { useState } from "react";
import { PreviewTemplate } from "@/lib/types/preview";
import TEMPLATE_LABELS from "@/lib/constants/preview/template_labels.json";

type Props = {
  slug: string;
  token: string;
  company: string;
  logo: string;
  primaryColor: string;
  defaultTemplate: PreviewTemplate;
};

export function PreviewNav({
  company,
  logo,
  primaryColor,
  defaultTemplate,
}: Props) {
  const [active, setActive] = useState<PreviewTemplate>(defaultTemplate);

  // Expose active template so PreviewContent can read it
  // We use a custom event to avoid prop drilling through server/client boundary
  function handleSwitch(template: PreviewTemplate) {
    setActive(template);
    window.dispatchEvent(
      new CustomEvent("preview:template", { detail: template }),
    );
  }

  return (
    <header className="bg-white border-b border-[#e5e5e5] sticky top-0 z-50">
      <div
        className="max-w-[1400px] mx-auto px-6 flex items-stretch justify-between gap-8"
        style={{ height: 64 }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {logo ? (
            <div className="relative h-9 w-36">
              <Image
                src={logo}
                alt={`${company} logo`}
                fill
                className="object-contain object-left"
                unoptimized
              />
            </div>
          ) : (
            <span
              className="text-[16px] font-bold"
              style={{ color: primaryColor }}
            >
              {company}
            </span>
          )}
        </div>

        {/* Nav tabs */}
        <nav className="flex items-stretch gap-6">
          {(Object.entries(TEMPLATE_LABELS) as [PreviewTemplate, string][]).map(
            ([key, label]) => (
              <button
                key={key}
                onClick={() => handleSwitch(key)}
                className="text-[13px] font-medium border-b-2 transition-all duration-150 cursor-pointer bg-transparent border-0 px-0"
                style={{
                  color: active === key ? primaryColor : "#888",
                  fontWeight: active === key ? 700 : 500,
                  borderBottomColor:
                    active === key ? primaryColor : "transparent",
                }}
              >
                {label}
              </button>
            ),
          )}
        </nav>

        {/* Cart */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="text-[12px] text-[#999] hidden sm:block">
            {company} Store
          </span>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[12px] font-bold"
            style={{ background: primaryColor }}
          >
            0
          </div>
        </div>
      </div>
    </header>
  );
}
