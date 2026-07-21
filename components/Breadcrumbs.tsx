import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

/**
 * Full-width, sticky sub-header bar. Sticks just below the main <Nav />
 * while scrolling. `top` must match your Nav's actual rendered height —
 * currently set to 72px, adjust if your nav is a different height.
 */
export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <div className="sticky top-[68px] z-40 w-full bg-off/95 backdrop-blur-sm border-b border-[rgba(24,24,27,0.10)]">
      <nav
        aria-label="Breadcrumb"
        style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
        className="mx-auto py-3.5 flex items-center gap-2 text-[13px] font-medium text-ink-faint"
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <span
              key={`${item.label}-${index}`}
              className="flex items-center gap-2 min-w-0"
            >
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="shrink-0 hover:text-violet transition-colors duration-150"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={
                    isLast ? "text-ink-mid truncate max-w-[420px]" : "shrink-0"
                  }
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
              {!isLast && (
                <span aria-hidden="true" className="text-ink-faint">
                  ·
                </span>
              )}
            </span>
          );
        })}
      </nav>
    </div>
  );
}
