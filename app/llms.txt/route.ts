import { getAllArticles } from "@/lib/utils/blog";
import { industries } from "@/data/industries";

export async function GET() {
  const articles = await getAllArticles();

  const lines: string[] = [
    "# Blossom Rocket",
    "",
    "> Branded merchandise solutions for medium and large organizations —",
    "> on-demand Company Stores and Co-Branding programs powered by SplashBrands,",
    "> supported by in-house creative services.",
    "",
    "Blossom Rocket helps organizations simplify, centralize, automate, and scale",
    "branded merchandise across teams, departments, locations, and partner",
    "organizations. Company Stores and Co-Branding programs are the primary",
    "offerings; creative services (brand identity, brand systems, digital design,",
    "marketing assets, print) establish and maintain the standards those programs",
    "apply, and are also available independently.",
    "",
    "Blossom Rocket was founded in 2026 by Alexia Standish, a designer and full-stack",
    "software engineer with a degree in Graphic Design.",
    "",
    "Blossom Rocket is the customer-facing brand for these programs. SplashBrands",
    "provides the underlying company store platform, in-house decoration,",
    "production, and fulfillment.",
    "",
    "## Primary Solutions",
    "",
    "- [Company Stores](https://blossomrocket.studio/solutions/company-stores): Centralized, automated branded merchandise ordering for teams, departments, and locations — thousands of pre-approved products, no order minimums, no inventory, typically shipping in 2-5 days",
    "- [Co-Branding](https://blossomrocket.studio/solutions/co-branding): Merchandise programs built around multiple approved logos and logo variations, for partnerships, divisions, and multi-location teams",
    "",
    "## Merchandise Solutions",
    "",
    "- [Solutions Overview](https://blossomrocket.studio/solutions): All branded merchandise and operational solutions",
    "- [Merchandise & Promotional Products](https://blossomrocket.studio/solutions/merchandise-and-promotional-products): Promotional products and branded merchandise for businesses — custom apparel, promotional items, corporate gifts, and event merchandise, produced on demand through SplashBrands",
    "- [Swag Storefronts](https://blossomrocket.studio/solutions/swag-storefronts): Self-serve storefront for a single brand's own approved logo and product colors, on the same SplashBrands technology as Co-Branding",
    "- [On-Demand Kits](https://blossomrocket.studio/solutions/on-demand-kits): Branded kit programs for corporate gifts, employee onboarding, and client and partner appreciation — combining merchandise, personalized print, packaging, and fulfillment",
    "",
    "## Industries",
    "",
    "- [Industries Overview](https://blossomrocket.studio/industries): Company stores and branded merchandise programs by industry",
    ...industries.map(
      (i) =>
        `- [${i.name}](https://blossomrocket.studio/industries/${i.slug}): ${i.description}`,
    ),
    "",
    "## Creative Services",
    "",
    "- [Creative Services Overview](https://blossomrocket.studio/services): Brand and design services, available independently",
    "- [Brand Identity](https://blossomrocket.studio/services/brand-identity): Logo systems, typography, color, and graphic elements",
    "- [Brand Systems](https://blossomrocket.studio/services/brand-systems): Guidelines, application standards, templates, and asset libraries",
    "- [Digital Design](https://blossomrocket.studio/services/digital-design): Websites, UI/UX, component libraries, and front-end development",
    "- [Marketing Assets](https://blossomrocket.studio/services/marketing-assets): Campaign creative and reusable marketing templates",
    "- [Print & Environmental Design](https://blossomrocket.studio/services/print-and-environmental-design): Print collateral, packaging, signage, displays, and environmental graphics",
    "",
    "## Site",
    "",
    "- [Home](https://blossomrocket.studio): Overview of solutions and services",
    "- [About](https://blossomrocket.studio/about): Who Blossom Rocket is, founder Alexia Standish, the Creative, Technology, and Execution approach, and the SplashBrands partnership",
    "- [Work](https://blossomrocket.studio/work): Portfolio of brand and design projects",
    "- [Blog](https://blossomrocket.studio/blog): Articles on branded merchandise, branding, and design systems",
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
