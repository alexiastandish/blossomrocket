import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSlugs, getArticleBySlug } from "@/lib/utils/blog";
import { BlogArticle } from "@/components/blog/BlogArticle";

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};

  const title = article.seoTitle ?? article.title;
  const description = article.seoDescription ?? article.description;

  return {
    title,
    description,
    alternates: {
      canonical: `https://blossomrocket.studio/blog/${article.slug}`,
    },
    openGraph: {
      type: "article",
      title,
      description,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt ?? article.publishedAt,
      images: [article.heroImage.src],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();
  return <BlogArticle article={article} />;
}
