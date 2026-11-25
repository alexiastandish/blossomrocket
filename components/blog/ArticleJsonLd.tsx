import type { BlogArticleData } from "@/lib/types/blog";
import {
  FOUNDER,
  FOUNDER_ID,
  ORGANIZATION_ID,
  SITE_URL,
} from "@/lib/constants/entities";

/** Resolve the byline to the right entity. Posts credited to the studio are
 *  the Organization, not a Person named "Blossom Rocket"; posts credited to
 *  the founder point at the site-wide founder Person by @id. */
function authorEntity(author: BlogArticleData["author"]) {
  if (author.name === "Blossom Rocket") {
    return {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: author.name,
    };
  }
  if (author.name === FOUNDER.name) {
    return {
      "@type": "Person",
      "@id": FOUNDER_ID,
      name: author.name,
      url: `${SITE_URL}/about`,
    };
  }
  return {
    "@type": "Person",
    name: author.name,
    ...(author.url && { url: author.url }),
  };
}

export function ArticleJsonLd({ article }: { article: BlogArticleData }) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: [article.heroImage.src],
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    author: authorEntity(article.author),
    publisher: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "Blossom Rocket",
      logo: {
        "@type": "ImageObject",
        url: "https://blossomrocket.studio/logo.jpg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://blossomrocket.studio/blog/${article.slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://blossomrocket.studio",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://blossomrocket.studio/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://blossomrocket.studio/blog/${article.slug}`,
      },
    ],
  };

  const faqSchema = article.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
