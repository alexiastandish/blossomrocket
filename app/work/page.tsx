import type { Metadata } from "next";
import Script from "next/script";
import { WorkItem } from "@/lib/types/work";
import workItemsData from "@/data/work.json";
import { PortfolioGrid } from "./components/PortfolioItem";

// ─── Metadata ────────────────────────────────────────────────────────────────

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
    url: "https://blossomrocket.studio/work",
    siteName: "Blossom Rocket",
    type: "website",
  },
};

// ─── Work data ────────────────────────────────────────────────────────────────

const workItems: WorkItem[] = workItemsData;

// ─── Video helper ─────────────────────────────────────────────────────────────
// Any item whose src points to a video file renders via <video> instead of
// next/image.

// ─── Schema ───────────────────────────────────────────────────────────────────

const PAGE_URL = "https://blossomrocket.studio/work";

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
    url: `https://blossomrocket.studio${item.href}`,
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
      item: "https://blossomrocket.studio",
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
    url: "https://blossomrocket.studio",
  },
  about: workItems.map((item) => ({
    "@type": "CreativeWork",
    name: item.title,
    description: item.description,
    tags: item.tags,
    creator: { "@type": "Organization", name: "Blossom Rocket" },
  })),
};

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
        <div className="section ">
          <header className="mb-8">
            <div className="rv flex items-center gap-3 mb-5">
              <div
                className="h-px w-6 flex-shrink-0"
                style={{ background: "var(--grad-cool-arc)" }}
              />
              <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-fg-tertiary">
                Selected Work
              </span>
            </div>
            <h1 className="rv font-display  tracking-[-0.03em] mb-6 text-fg-primary h1">
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
              style={{ maxWidth: "560px" }}
            >
              A selection of brand identity, digital design, print, and
              marketing work across industries. Every project is built on a
              brand system designed to work across every touchpoint.
            </p>
          </header>

          {/* ── Portfolio grid ── */}
          <div
            className="grid grid-cols-1 md:grid-cols-1 gap-3"
            itemScope
            itemType="https://schema.org/ItemList"
          >
            <PortfolioGrid items={workItems} />
          </div>
        </div>
      </div>
    </>
  );
}
