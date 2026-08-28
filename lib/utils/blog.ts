import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import GithubSlugger from "github-slugger";
import type { BlogArticleData, TocItem } from "@/lib/types/blog";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

interface Frontmatter {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  authorName: string;
  authorRole?: string;
  authorUrl?: string;
  heroImageSrc: string;
  heroImageAlt: string;
  heroImageWidth: number;
  heroImageHeight: number;
  tldr: string[];
  tags: string[];
  category: string;
  featured?: boolean;
  faqs?: { question: string; answer: string }[];
}

export async function getAllSlugs(): Promise<string[]> {
  const files = fs.readdirSync(BLOG_DIR);
  return files
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx?$/, ""));
}

export async function getArticleBySlug(
  slug: string,
): Promise<BlogArticleData | null> {
  const mdPath = path.join(BLOG_DIR, `${slug}.md`);
  const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const filePath = fs.existsSync(mdPath)
    ? mdPath
    : fs.existsSync(mdxPath)
      ? mdxPath
      : null;

  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const frontmatter = data as Frontmatter;

  const bodyHtml = await renderMarkdownToHtml(content);
  const toc = extractToc(content);
  const readingTimeMinutes = estimateReadingTime(content);

  return {
    slug,
    title: frontmatter.title,
    description: frontmatter.description,
    publishedAt: frontmatter.publishedAt,
    updatedAt: frontmatter.updatedAt,
    author: {
      name: frontmatter.authorName,
      role: frontmatter.authorRole,
      url: frontmatter.authorUrl,
    },
    heroImage: {
      src: frontmatter.heroImageSrc,
      alt: frontmatter.heroImageAlt,
      width: frontmatter.heroImageWidth,
      height: frontmatter.heroImageHeight,
    },
    tldr: frontmatter.tldr ?? [],
    toc,
    faqs: frontmatter.faqs,
    tags: frontmatter.tags ?? [],
    category: frontmatter.category,
    featured: frontmatter.featured ?? false,
    readingTimeMinutes,
    bodyHtml,
  };
}

export async function getAllArticles(): Promise<BlogArticleData[]> {
  const slugs = await getAllSlugs();
  const articles = await Promise.all(
    slugs.map((slug) => getArticleBySlug(slug)),
  );

  return articles
    .filter((a): a is BlogArticleData => a !== null)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

export async function getFeaturedArticles(): Promise<BlogArticleData[]> {
  const slugs = await getAllSlugs();

  const articles = await Promise.all(
    slugs.map((slug) => getArticleBySlug(slug)),
  );

  return articles
    .filter((a): a is BlogArticleData => a !== null && a.featured === true)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

async function renderMarkdownToHtml(content: string): Promise<string> {
  const result = await remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(content);
  return result.toString();
}

// Pulls H2/H3 headings straight out of the raw markdown to build the TOC.
// Uses `github-slugger` directly — the same library rehype-slug uses
// internally to id the rendered headings in `renderMarkdownToHtml` — so
// repeated headings (e.g. "Why it matters" under every numbered section)
// get the identical `-1`, `-2`, ... suffixes on both sides and the TOC
// links actually resolve to the right heading instead of all colliding
// on the first occurrence.
function extractToc(content: string): TocItem[] {
  const headingLines = content.match(/^#{2,3}\s+.+$/gm) ?? [];
  const slugger = new GithubSlugger();

  return headingLines.map((line) => {
    const label = line.replace(/^#{2,3}\s+/, "").trim();
    const id = slugger.slug(label);
    return { id, label };
  });
}

// ~200 wpm, rounded up so a 90-second read shows "2 min" not "1 min"
function estimateReadingTime(rawMarkdown: string): number {
  const words = rawMarkdown.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}
