import { getFeaturedArticles } from "@/lib/utils/blog";
import { Suspense } from "react";
import FeaturedArticlesClient from "./FeaturedArticlesClient";

export default async function FeaturedArticles() {
  const articles = await getFeaturedArticles();

  const featuredArticles = articles.map((article) => ({
    slug: article.slug,
    href: `/blog/${article.slug}`,
    title: article.title,
    excerpt: article.description,
    category: article.category,
    tags: article.tags,
    coverImage: article.heroImage.src,
    coverAlt: article.heroImage.alt,
    publishedAt: article.publishedAt,
    readTime: `${article.readingTimeMinutes} min read`,
    featured: article.featured ?? false,
  }));

  const articlesSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "The Blossom Blog",
    url: "https://blossomrocket.studio",
    blogPost: articles.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      description: article.description,
      datePublished: article.publishedAt,
      dateModified: article.updatedAt ?? article.publishedAt,
      url: `https://blossomrocket.studio/blog/${article.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articlesSchema) }}
      />
      <Suspense>
        <FeaturedArticlesClient articles={featuredArticles} />
      </Suspense>
    </>
  );
}
