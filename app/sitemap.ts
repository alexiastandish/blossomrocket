import { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/utils/blog";

const baseUrl = "https://blossomrocket.studio";

const staticRoutes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/services", priority: 0.9 },
  { path: "/services/brand-identity", priority: 0.8 },
  { path: "/services/brand-systems", priority: 0.8 },
  { path: "/services/digital-design", priority: 0.8 },
  { path: "/services/marketing-assets", priority: 0.8 },
  { path: "/services/print-and-environmental-design", priority: 0.8 },
  { path: "/services/merchandise-and-promotional-products", priority: 0.8 },
  { path: "/services/company-stores", priority: 0.8 },
  { path: "/services/company-storefronts", priority: 0.8 },
  { path: "/work", priority: 0.9 },
  { path: "/blog", priority: 0.9 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getAllArticles();

  return [
    ...staticRoutes.map(({ path, priority }) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority,
    })),
    ...articles.map((article) => ({
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified: new Date(article.updatedAt ?? article.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
