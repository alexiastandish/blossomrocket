import type { Metadata } from "next";
import { getAllArticles } from "@/lib/utils/blog";
import { BlogIndexClient } from "@/components/blog/BlogIndexClient";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "The Blossom Blog | Blossom Rocket",
  description:
    "Practical insights on branding, design, and growth—from identity systems to the real-world execution that brings brands to life.",
  alternates: { canonical: "https://blossomrocket.studio/blog" },
};

export default async function BlogIndexPage() {
  const articles = await getAllArticles();

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "The Blossom Blog",
    url: "https://blossomrocket.studio/blog",
    blogPost: articles.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      description: article.description,
      datePublished: article.publishedAt,
      dateModified: article.updatedAt ?? article.publishedAt,
      url: `https://blossomrocket.studio/blog/${article.slug}`,
    })),
  };

  const posts = articles.map((article) => ({
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <Suspense>
        <BlogIndexClient posts={posts} />
      </Suspense>
    </>
  );
}
