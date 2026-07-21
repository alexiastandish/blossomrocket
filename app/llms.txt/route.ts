// app/llms.txt/route.ts
import { getAllArticles } from "@/lib/utils/blog";

export async function GET() {
  const articles = await getAllArticles();

  const lines: string[] = [
    "# Blossom Rocket",
    "",
    "> Branding and promotional products studio — brand identity, design systems,",
    "> digital design, marketing assets, print, and merchandise for company stores.",
    "",
    "## Site",
    "",
    "- [Home](https://blossomrocket.studio): Overview of services and studio approach",
    "- [Work](https://blossomrocket.studio/work): Portfolio of brand and design projects",
    "- [Blog](https://blossomrocket.studio/blog): Articles on branding, design systems, and merchandise strategy",
    "",
    "## Blog Articles",
    "",
    ...articles.map(
      (a) =>
        `- [${a.title}](https://blossomrocket.studio/blog/${a.slug}): ${a.description}`,
    ),
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
