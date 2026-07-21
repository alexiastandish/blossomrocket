// components/blog/BlogArticle.tsx
import Image from "next/image";
import type { BlogArticleData } from "@/lib/types/blog";
import { ArticleJsonLd } from "@/components/blog/ArticleJsonLd";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { KeyTakeaways } from "@/components/blog/KeyTakeaways";
import { ArticleFaqSection } from "@/components/blog/ArticleFaqSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export function BlogArticle({ article }: { article: BlogArticleData }) {
  return (
    <div className="max-w-[1200px] mx-auto px-6 sm:px-8 py-14 sm:py-20">
      <ArticleJsonLd article={article} />

      <Breadcrumbs
        items={[{ label: "Blog", href: "/blog" }, { label: article.title }]}
      />

      <article className="mx-auto">
        {/* Single H1 — the exact question/topic the article answers */}
        <header className="mb-10 mt-10">
          {article.category && (
            <span className="inline-block self-start text-[10px] font-semibold tracking-[0.10em] uppercase text-violet bg-active-bg rounded-full px-2.5 py-1 mb-4">
              {article.category}
            </span>
          )}

          <h1
            className="text-[36px] sm:text-[44px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink mb-4"
            style={{ fontFamily: "'Parkinsans', sans-serif" }}
          >
            {article.title}
          </h1>

          {/* Definition-first dek: this sentence should stand alone as a complete answer */}
          <p className="text-[15px] leading-[1.7] text-ink-mid mb-5">
            {article.description}
          </p>

          <div className="flex items-center gap-3 text-[12px] text-ink-faint">
            <span>{article.author.name}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={article.publishedAt}>
              {new Date(article.publishedAt).toLocaleDateString()}
            </time>
            {article.updatedAt && (
              <>
                <span aria-hidden="true">·</span>
                <span>
                  Updated {new Date(article.updatedAt).toLocaleDateString()}
                </span>
              </>
            )}
          </div>
        </header>

        {/* Fixed hero: same aspect/rounded/fill treatment as the blog index cards */}
        <div className="relative aspect-[16/9] rounded-sm overflow-hidden bg-surface-subtle mb-10">
          <Image
            src={article.heroImage.src}
            alt={article.heroImage.alt}
            fill
            sizes="(max-width: 768px) 100vw, 720px"
            className="object-cover"
            priority
          />
        </div>

        {/* Structured, liftable takeaways block — distinct DOM node, not prose */}
        <KeyTakeaways items={article.tldr} />

        {article.toc.length > 2 && <TableOfContents items={article.toc} />}

        {/* Server-rendered body — no lazy client fetch, no accordion-hidden content by default */}
        <div
          className="prose prose-blossom mt-8 max-w-none text-[16px] leading-[1.75] text-ink-mid [&_h2]:font-semibold [&_h2]:tracking-[-0.02em] [&_h2]:text-ink [&_h2]:mt-12 [&_h2]:text-[26px] [&_h3]:font-semibold [&_h3]:tracking-[-0.02em] [&_h3]:text-ink [&_h3]:mt-8 [&_h3]:text-[20px]"
          style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
          dangerouslySetInnerHTML={{ __html: article.bodyHtml }}
        />

        {article.faqs && article.faqs.length > 0 && (
          <ArticleFaqSection faqs={article.faqs} />
        )}

        {article.tags.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-active-bg text-violet text-[11px] font-semibold tracking-[0.06em] uppercase px-3 py-1.5"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </div>
  );
}
