"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/types/blog";

export function FaqAccordionItem({
  faq,
  defaultOpen = false,
}: {
  faq: FaqItem;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const contentId = `faq-content-${slugify(faq.question)}`;

  return (
    <div className="py-4">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={contentId}
        className="flex w-full items-center justify-between text-left"
      >
        <h3 className="text-base font-medium text-text-primary">
          {faq.question}
        </h3>
        <span
          aria-hidden="true"
          className={`ml-4 shrink-0 text-text-secondary transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </button>

      {/* grid-row trick: content is always in the DOM, never unmounted or display:none.
          0fr collapses it visually; 1fr reveals it. Crawlers/LLMs read the text regardless. */}
      <div
        id={contentId}
        className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="min-h-0">
          <p className="pt-2 text-text-secondary">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}
