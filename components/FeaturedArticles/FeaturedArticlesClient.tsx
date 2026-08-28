"use client";

import Image from "next/image";
import { formatDate } from "@/lib/utils/formatDate";
import Link from "next/link";
import { SectionLayout } from "../section";
import { CTASlots } from "../CTASlot";

export interface ArticleIndexPost {
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

interface ArticleIndexClientProps {
  articles: ArticleIndexPost[];
}

export default function FeaturedArticlesClient({
  articles,
}: ArticleIndexClientProps) {
  return (
    <SectionLayout
      id="home--featured-articles"
      theme="light"
      eyebrow="Insights & Resources"
      ctaSlot={
        <CTASlots
          theme="light"
          ctas={[
            {
              label: "Explore Our Insights",
              href: "/blog",
              variant: "primary",
            },
            {
              label: "Get In Touch",
              variant: "outline",
            },
          ]}
        />
      }
      heading={
        <>
          Our <em className="grad-text not-italic">Resources & Insights</em>{" "}
          Inspire Brand Growth.
        </>
      }
      pageUrl="https://blossomrocket.studio"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
        {articles.map((article) => {
          return (
            <Link
              key={article.slug}
              href={article.href}
              className="group flex flex-col rounded-sm outline outline-2 outline-offset-[6px] outline-transparent hover:outline-violet transition-[outline-color] duration-200"
            >
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-surface-subtle mb-4">
                <Image
                  src={article.coverImage}
                  alt={article.coverAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 text-[10px] font-semibold tracking-[0.10em] uppercase text-violet bg-active-bg rounded-full px-2.5 py-1">
                  {article.category}
                </span>
              </div>

              <h3
                className="text-[17px] font-semibold leading-[1.3] tracking-[-0.01em] text-ink mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {article.title}
              </h3>
              <p className="text-[13px] leading-[1.65] text-ink-mid mb-3 line-clamp-2">
                {article.excerpt}
              </p>
              <div className="mt-auto flex items-center gap-2 text-[11px] text-ink-faint">
                <span>{formatDate(article.publishedAt)}</span>
                <span aria-hidden="true">·</span>
                <span>{article.readTime}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </SectionLayout>
  );
}

// <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
//   <Link
//     key={post.slug}
//     href={post.href}
//     className="group flex flex-col rounded-sm outline outline-2 outline-offset-[6px] outline-transparent hover:outline-violet transition-[outline-color] duration-200"
//   >
//     <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-surface-subtle mb-4">
//       <Image
//         src={post.coverImage}
//         alt={post.coverAlt}
//         fill
//         sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//         className="object-cover"
//       />
//       <span className="absolute top-3 left-3 text-[10px] font-semibold tracking-[0.10em] uppercase text-violet bg-active-bg rounded-full px-2.5 py-1">
//         {post.category}
//       </span>
//     </div>

//     <h3
//       className="text-[17px] font-semibold leading-[1.3] tracking-[-0.01em] text-ink mb-2"
//       style={{ fontFamily: "var(--font-display)" }}
//     >
//       {post.title}
//     </h3>
//     <p className="text-[13px] leading-[1.65] text-ink-mid mb-3 line-clamp-2">
//       {post.excerpt}
//     </p>
//     <div className="mt-auto flex items-center gap-2 text-[11px] text-ink-faint">
//       <span>{formatDate(post.publishedAt)}</span>
//       <span aria-hidden="true">·</span>
//       <span>{post.readTime}</span>
//     </div>
//   </Link>
// </div>
