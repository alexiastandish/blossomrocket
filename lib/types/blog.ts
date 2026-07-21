export interface Author {
  name: string;
  role?: string;
  url?: string;
  imageUrl?: string;
}

export interface FaqItem {
  question: string;
  answer: string; // plain text, no JSX — used in JSON-LD directly
}

export interface TocItem {
  id: string;
  label: string;
}

export interface BlogArticleData {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: Author;
  heroImage: { src: string; alt: string; width: number; height: number };
  tldr: string[];
  toc: TocItem[];
  faqs?: FaqItem[];
  tags: string[];
  category: string; // new — powers the filter pills
  featured?: boolean; // new — explicit override for the hero slot
  readingTimeMinutes: number; // new — computed, not authored
  bodyHtml: string;
}
