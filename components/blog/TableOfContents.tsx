// components/blog/TableOfContents.tsx
import type { TocItem } from "@/lib/types/blog";

export function TableOfContents({ items }: { items: TocItem[] }) {
  return (
    <nav
      aria-label="Table of contents"
      className="mb-10 rounded-lg border border-border-subtle p-5"
    >
      <p className="mb-2 text-sm font-semibold text-text-secondary">
        In this article
      </p>
      <ol className="space-y-1 text-sm">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-brand-accent hover:underline"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
