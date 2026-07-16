// lib/types/blog.ts

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  coverImage: string;
  coverAlt: string;
  publishedAt: string;
  readTime: string;
  href: string;
  featured?: boolean;
}
