"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import SectionLabel from "../SectionLabel";

export interface BlogIndexPost {
  slug: string;
  href: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  coverImage: string;
  coverAlt: string;
  publishedAt: string;
  readTime: string;
  featured: boolean;
}

interface BlogIndexClientProps {
  posts: BlogIndexPost[];
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

// URL-safe slug for a tag, e.g. "Brand Strategy" -> "brand-strategy".
// Used both as the query param value and to look the original label back up.
function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function BlogIndexClient({ posts }: BlogIndexClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState("");

  const featured = useMemo(
    () => posts.find((post) => post.featured) ?? posts[0],
    [posts],
  );

  // All tags across posts, deduped, with a slug<->label map so the URL can
  // store slugs while the UI still shows the original label casing.
  const { tags, slugToLabel } = useMemo(() => {
    const map = new Map<string, string>();
    posts.forEach((post) => {
      post.tags.forEach((tag) => {
        const slug = slugifyTag(tag);
        if (!map.has(slug)) map.set(slug, tag);
      });
    });
    return {
      tags: Array.from(map.values()).sort(),
      slugToLabel: map,
    };
  }, [posts]);

  // Active tags come straight from the URL — no separate local state to
  // keep in sync. `tags` param is a comma-separated list of slugs.
  const activeTagSlugs = useMemo(() => {
    const raw = searchParams.get("tags");
    if (!raw) return [];
    return raw.split(",").filter((slug) => slugToLabel.has(slug));
  }, [searchParams, slugToLabel]);

  const activeTags = useMemo(
    () => activeTagSlugs.map((slug) => slugToLabel.get(slug)!),
    [activeTagSlugs, slugToLabel],
  );

  // Toggling is a frequent, low-stakes interaction (unlike a single filter
  // pill), so this uses replace rather than push — otherwise every toggle
  // would push a new history entry and the back button would just replay
  // the user's own clicks instead of leaving the page.
  function setTagSlugs(slugs: string[]) {
    const params = new URLSearchParams(searchParams.toString());
    if (slugs.length === 0) {
      params.delete("tags");
    } else {
      params.set("tags", slugs.join(","));
    }
    const search = params.toString();
    router.replace(search ? `${pathname}?${search}` : pathname, {
      scroll: false,
    });
  }

  function toggleTag(tag: string) {
    const slug = slugifyTag(tag);
    setTagSlugs(
      activeTagSlugs.includes(slug)
        ? activeTagSlugs.filter((s) => s !== slug)
        : [...activeTagSlugs, slug],
    );
  }

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return posts.filter((post) => {
      if (post.slug === featured.slug) return false;
      if (
        activeTags.length > 0 &&
        !activeTags.some((tag) => post.tags.includes(tag))
      ) {
        return false;
      }
      if (!normalizedQuery) return true;
      return (
        post.title.toLowerCase().includes(normalizedQuery) ||
        post.excerpt.toLowerCase().includes(normalizedQuery)
      );
    });
  }, [posts, featured, activeTags, query]);

  const hasActiveFilters = Boolean(query || activeTags.length > 0);

  return (
    <div className="max-w-[1200px] mx-auto px-6 sm:px-8 py-14 sm:py-20">
      <header className="max-w-[640px] mb-14 sm:mb-20">
        <SectionLabel text="Insights" />
        <h1
          className="text-[36px] sm:text-[44px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink mb-4"
          style={{ fontFamily: "'Parkinsans', sans-serif" }}
        >
          The Blossom <em className="grad-text not-italic">Blog</em>
        </h1>
        <p className="text-[15px] leading-[1.7] text-ink-mid">
          Practical insights on branding, design, and growth—from identity
          systems to the real-world execution that brings brands to life.
        </p>
      </header>

      <Link
        href={featured.href}
        className="group grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-6 lg:gap-10 items-stretch rounded-sm outline outline-2 outline-offset-[6px] outline-transparent hover:outline-violet transition-[outline-color] duration-200 mb-16 sm:mb-24"
      >
        <div className="relative aspect-[16/10] lg:aspect-auto rounded-sm overflow-hidden bg-surface-subtle order-1">
          <Image
            src={featured.coverImage}
            alt={featured.coverAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col justify-center order-2">
          <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-ink-faint mb-4">
            Featured
          </p>
          <span className="inline-block self-start text-[10px] font-semibold tracking-[0.10em] uppercase text-violet bg-active-bg rounded-full px-2.5 py-1 mb-4">
            {featured.category}
          </span>
          <h2
            className="text-[26px] sm:text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink mb-3"
            style={{ fontFamily: "'Parkinsans', sans-serif" }}
          >
            {featured.title}
          </h2>
          <p className="text-[14px] leading-[1.75] text-ink-mid mb-5 max-w-[46ch]">
            {featured.excerpt}
          </p>
          <div className="flex items-center gap-3 text-[12px] text-ink-faint mb-6">
            <span>{formatDate(featured.publishedAt)}</span>
            <span aria-hidden="true">·</span>
            <span>{featured.readTime}</span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-violet transition-[gap] duration-200 group-hover:gap-3">
            Read article →
          </span>
        </div>
      </Link>

      <div className="flex flex-col gap-5 mb-10">
        <div className="relative w-full sm:max-w-[360px]">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles…"
            aria-label="Search articles"
            className="w-full rounded-sm border border-border-default bg-transparent text-[13px] text-ink placeholder:text-ink-faint px-3.5 py-2.5 outline-none transition-colors duration-150 focus:border-violet"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setTagSlugs([])}
            className={[
              "text-[11px] font-semibold tracking-[0.06em] uppercase rounded-full px-3 py-1.5 transition-colors duration-150",
              activeTags.length === 0
                ? "bg-violet text-white"
                : "bg-active-bg text-violet hover:bg-violet-100",
            ].join(" ")}
          >
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => toggleTag(tag)}
              aria-pressed={activeTags.includes(tag)}
              className={[
                "text-[11px] font-semibold tracking-[0.06em] uppercase rounded-full px-3 py-1.5 transition-colors duration-150",
                activeTags.includes(tag)
                  ? "bg-violet text-white"
                  : "bg-active-bg text-violet hover:bg-violet-100",
              ].join(" ")}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={post.href}
              className="group flex flex-col rounded-sm outline outline-2 outline-offset-[6px] outline-transparent hover:outline-violet transition-[outline-color] duration-200"
            >
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-surface-subtle mb-4">
                <Image
                  src={post.coverImage}
                  alt={post.coverAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 text-[10px] font-semibold tracking-[0.10em] uppercase text-violet bg-active-bg rounded-full px-2.5 py-1">
                  {post.category}
                </span>
              </div>

              <h3
                className="text-[17px] font-semibold leading-[1.3] tracking-[-0.01em] text-ink mb-2"
                style={{ fontFamily: "'Parkinsans', sans-serif" }}
              >
                {post.title}
              </h3>
              <p className="text-[13px] leading-[1.65] text-ink-mid mb-3 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="mt-auto flex items-center gap-2 text-[11px] text-ink-faint">
                <span>{formatDate(post.publishedAt)}</span>
                <span aria-hidden="true">·</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      ) : hasActiveFilters ? (
        <div className="flex flex-col items-center text-center py-20 rounded-sm bg-surface-subtle">
          <p
            className="text-[18px] font-semibold text-ink mb-2"
            style={{ fontFamily: "'Parkinsans', sans-serif" }}
          >
            No articles match that search
          </p>
          <p className="text-[13px] text-ink-mid mb-5 max-w-[40ch]">
            Try a different term, or clear the tag filters to see everything
            again.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setTagSlugs([]);
            }}
            className="text-[12px] font-semibold text-violet transition-[gap] duration-200 hover:gap-3"
          >
            Clear search and filters
          </button>
        </div>
      ) : (
        <p className="text-center text-[13px] text-ink-mid py-20">
          More articles coming soon.
        </p>
      )}
    </div>
  );
}
