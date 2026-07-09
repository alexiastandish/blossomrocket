import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { WorkItem, RowLayout, WorkRowType } from "@/lib/types/work";
import workItemsData from "@/data/work.json";
// ─── Metadata ────────────────────────────────────────────────────────────────
console.log("workItemsData", workItemsData);
debugger;
export const metadata: Metadata = {
  title: "Work — Blossom Rocket",
  description:
    "A selection of brand identity, digital design, print, and marketing work from Blossom Rocket across industries. Every project is built on a brand system designed to work across every touchpoint.",
  keywords: [
    "Brand Identity Portfolio",
    "Digital Design Work",
    "Print Design Portfolio",
    "UI UX Design",
    "Web Design Portfolio",
    "Marketing Design",
    "Blossom Rocket Work",
  ],
  openGraph: {
    title: "Work — Blossom Rocket",
    description:
      "A selection of brand identity, digital design, print, and marketing work from Blossom Rocket.",
    url: "https://blossomrocket.co/work",
    siteName: "Blossom Rocket",
    type: "website",
  },
};

// ─── Work data ────────────────────────────────────────────────────────────────

const workItems: WorkItem[] = workItemsData;

// ─── Row layout config ────────────────────────────────────────────────────────
// Maps items into rows by index. To add/reorder items, update workItems above
// and adjust the slice indices here to match.

const workRows: WorkRowType[] = [
  {
    layout: { type: "full", height: "clamp(300px,40vw,560px)" },
    items: workItems.slice(0, 1),
  },
  {
    layout: { type: "cols", cols: 3, height: "clamp(200px,22vw,320px)" },
    items: workItems.slice(1, 4),
  },
  {
    layout: {
      type: "asym-l",
      height: "clamp(280px,36vw,520px)",
      stackHeight: "clamp(130px,16vw,254px)",
    },
    items: workItems.slice(4, 7),
  },
  {
    layout: { type: "cols", cols: 2, height: "clamp(240px,28vw,420px)" },
    items: workItems.slice(7, 9),
  },
  {
    layout: { type: "cols", cols: 3, height: "clamp(200px,22vw,340px)" },
    items: workItems.slice(9, 12),
  },
  {
    layout: { type: "asym-r", height: "clamp(280px,34vw,480px)" },
    items: workItems.slice(12, 14),
  },
  {
    layout: { type: "cols-tall", cols: 2, height: "clamp(300px,36vw,520px)" },
    items: workItems.slice(14, 16),
  },
];

// ─── Schema ───────────────────────────────────────────────────────────────────

const PAGE_URL = "https://blossomrocket.co/work";

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Blossom Rocket — Selected Work",
  description:
    "A selection of brand identity, digital design, print, and marketing work from Blossom Rocket.",
  url: PAGE_URL,
  numberOfItems: workItems.length,
  itemListElement: workItems.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.title,
    description: item.description,
    url: `https://blossomrocket.co${item.href}`,
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://blossomrocket.co",
    },
    { "@type": "ListItem", position: 2, name: "Work", item: PAGE_URL },
  ],
};

const creativeWorkSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "@id": `${PAGE_URL}/#portfolio`,
  name: "Blossom Rocket Portfolio",
  description:
    "Brand identity, digital design, print design, editorial design, UI/UX, and marketing work by Blossom Rocket.",
  url: PAGE_URL,
  creator: {
    "@type": "Organization",
    name: "Blossom Rocket",
    url: "https://blossomrocket.co",
  },
  about: workItems.map((item) => ({
    "@type": "CreativeWork",
    name: item.title,
    description: item.description,
    genre: item.tag,
    creator: { "@type": "Organization", name: "Blossom Rocket" },
  })),
};

// ─── Portfolio item ───────────────────────────────────────────────────────────

function PortfolioItem({ item }: { item: WorkItem }) {
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
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center p-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "var(--grad-dark-brand)" }}
      >
        <span className="text-[10px] font-semibold tracking-[0.12em] uppercase px-3 py-1 rounded-full border border-border-on-dark text-fg-on-dark opacity-70 mb-2.5">
          {item.tag}
        </span>
        <h3
          className="font-display font-semibold text-fg-on-dark leading-[1.2] tracking-[-0.02em] mb-2"
          style={{ fontSize: "clamp(16px,2vw,22px)" }}
        >
          {item.title}
        </h3>
        <p className="text-[13px] leading-[1.6] text-fg-on-brand max-w-[260px] mb-5">
          {item.description}
        </p>
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-btn-primary-bg text-fg-on-dark text-[12px] font-semibold tracking-[0.02em] transition-colors duration-200 group-hover:bg-btn-primary-hover">
          View Service →
        </span>
      </div>
    </Link>
  );
}

// ─── Row renderer ─────────────────────────────────────────────────────────────

function WorkRow({ row }: { row: WorkRowType }) {
  const { layout, items } = row;

  console.log({ items });
  if (layout.type === "full") {
    return (
      <div className="relative" style={{ height: layout.height }}>
        <PortfolioItem item={items[0]} />
      </div>
    );
  }

  if (layout.type === "cols" || layout.type === "cols-tall") {
    return (
      <div
        className={`grid gap-[3px] grid-cols-1 ${
          layout.cols === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
        }`}
      >
        {items.map((item) => (
          <div
            key={item.src}
            className="relative"
            style={{ height: layout.height }}
          >
            <PortfolioItem item={item} />
          </div>
        ))}
      </div>
    );
  }

  if (layout.type === "asym-l") {
    const [main, ...stack] = items;
    return (
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-[3px]">
        <div className="relative" style={{ height: layout.height }}>
          <PortfolioItem item={main} />
        </div>
        <div className="flex flex-col gap-[3px]">
          {stack.map((item) => (
            <div
              key={item.src}
              className="relative flex-1"
              style={{ minHeight: layout.stackHeight }}
            >
              <PortfolioItem item={item} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (layout.type === "asym-r") {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-[3px]">
        {items.map((item) => (
          <div
            key={item.src}
            className="relative"
            style={{ height: layout.height }}
          >
            <PortfolioItem item={item} />
          </div>
        ))}
      </div>
    );
  }

  return null;
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WorkPage() {
  return (
    <>
      <Script
        id="schema-itemlist"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="schema-creative"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      />

      <div>
        {/* ── Page header ── */}
        <header
          className="bg-surface-base"
          style={{
            padding:
              "calc(68px + 60px) clamp(20px,5vw,60px) clamp(48px,6vw,80px)",
          }}
        >
          <div className="rv flex items-center gap-3 mb-5">
            <div
              className="h-px w-6 flex-shrink-0"
              style={{ background: "var(--grad-cool-arc)" }}
            />
            <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-fg-tertiary">
              Selected Work
            </span>
          </div>
          <h1
            className="rv font-display font-semibold leading-[1.0] tracking-[-0.03em] mb-6 text-fg-primary"
            style={{ fontSize: "clamp(48px,7vw,88px)" }}
          >
            Blossom Rocket Brings
            <br />
            <em
              className="not-italic"
              style={{
                background: "var(--grad-spectrum)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Your Brand to Life.
            </em>
          </h1>
          <p
            className="rv text-fg-secondary leading-[1.72]"
            style={{ fontSize: "clamp(15px,1.6vw,18px)", maxWidth: "560px" }}
          >
            A selection of brand identity, digital design, print, and marketing
            work across industries. Every project is built on a brand system
            designed to work across every touchpoint.
          </p>
        </header>

        {/* ── Portfolio grid ── */}
        <div
          className="flex flex-col gap-[3px]"
          style={{ padding: "0 clamp(20px,5vw,60px) clamp(60px,8vw,100px)" }}
          itemScope
          itemType="https://schema.org/ItemList"
        >
          {workRows.map((row, i) => (
            <WorkRow key={i} row={row} />
          ))}
        </div>
      </div>
    </>
  );
}
