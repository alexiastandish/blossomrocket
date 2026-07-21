// components/blog/BlogArticle.tsx
import Image from "next/image";
import type { BlogArticleData } from "@/lib/types/blog";
import { ArticleJsonLd } from "@/components/blog/ArticleJsonLd";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { KeyTakeaways } from "@/components/blog/KeyTakeaways";
import { ArticleFaqSection } from "@/components/blog/ArticleFaqSection";

export function BlogArticle({ article }: { article: BlogArticleData }) {
  return (
    <article className="mx-auto max-w-[720px] px-4 py-12 text-text-primary">
      <ArticleJsonLd article={article} />

      {/* Single H1 — the exact question/topic the article answers */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold leading-tight text-text-primary">
          {article.title}
        </h1>

        {/* Definition-first dek: this sentence should stand alone as a complete answer */}
        <p className="mt-4 text-lg text-text-secondary">
          {article.description}
        </p>

        <div className="mt-4 flex items-center gap-3 text-sm text-text-muted">
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

      <Image
        src={article.heroImage.src}
        alt={article.heroImage.alt}
        width={article.heroImage.width}
        height={article.heroImage.height}
        priority
        className="mb-10 w-full rounded-lg"
      />

      {/* Structured, liftable takeaways block — distinct DOM node, not prose */}
      <KeyTakeaways items={article.tldr} />

      {article.toc.length > 2 && <TableOfContents items={article.toc} />}

      {/* Server-rendered body — no lazy client fetch, no accordion-hidden content by default */}
      <div
        className="prose prose-blossom mt-8 max-w-none [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-semibold [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold"
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
              className="rounded-full bg-surface-secondary px-3 py-1 text-xs text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
