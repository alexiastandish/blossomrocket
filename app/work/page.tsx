import type { Metadata } from "next";
import Link from "next/link";
import { DEFAULT_OG_IMAGE } from "@/lib/constants/entities";
import { WorkItem } from "@/lib/types/work";
import { ProjectItem } from "@/lib/types/projects";
import workItemsData from "@/data/work.json";
import { PortfolioGrid } from "./components/PortfolioGrid";
import Marquee from "@/components/section/Marquee";
import logos from "@/data/marquees/logos.json";
import SectionLabel from "@/components/SectionLabel";
// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Work — Blossom Rocket",
  description:
    "Brand identity, digital design, print, and marketing work from Blossom Rocket, each built on a brand system designed for every touchpoint.",
  keywords: [
    "Brand Identity Portfolio",
    "Digital Design Work",
    "Print Design Portfolio",
    "UI UX Design",
    "Web Design Portfolio",
    "Marketing Design",
    "Blossom Rocket Work",
  ],
  alternates: { canonical: "https://blossomrocket.studio/work" },
  openGraph: {
    images: [DEFAULT_OG_IMAGE],
    title: "Work — Blossom Rocket",
    description:
      "A selection of brand identity, digital design, print, and marketing work from Blossom Rocket.",
    url: "https://blossomrocket.studio/work",
    siteName: "Blossom Rocket",
    type: "website",
  },
};

// ─── Work data ────────────────────────────────────────────────────────────────

const workItems: ProjectItem[] = workItemsData;

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
      <script
        id="schema-itemlist"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="schema-creative"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      />

      <div>
        <div className="section">
          <header className="mb-8">
            <SectionLabel text="Selected Work" />

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
                Your Brand to&nbsp;Life.
              </em>
            </h1>
            <p
              className="rv text-fg-secondary leading-[1.72]"
              style={{ maxWidth: "560px" }}
            >
              A selection of brand identity, brand systems, digital design,
              marketing assets, print, and promotional products across
              industries.
            </p>
            <p className="rv text-[14px] text-fg-secondary leading-[1.7] mt-4">
              Explore the{" "}
              <Link
                href="/services"
                className="text-link-default hover:text-link-hover underline underline-offset-4"
              >
                creative services
              </Link>{" "}
              and{" "}
              <Link
                href="/solutions"
                className="text-link-default hover:text-link-hover underline underline-offset-4"
              >
                merchandise solutions
              </Link>{" "}
              behind this work, or read{" "}
              <Link
                href="/about"
                className="text-link-default hover:text-link-hover underline underline-offset-4"
              >
                about Blossom Rocket
              </Link>
              .
            </p>
          </header>

          {/* Logo Marquee */}
          <div className="h-20 mb-12">
            <div className="w-[100vw] absolute left-0 right-0">
              <Marquee items={logos} theme="light" />
            </div>
          </div>

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
