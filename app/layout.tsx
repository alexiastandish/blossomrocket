import type { Metadata } from "next";
import "./globals.css";
import Cursor from "@/components/Cursor";
import ScrollReveal from "@/components/ScrollReveal";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ContactModalProvider } from "@/contexts/contact-modal-context";
import { ContactModalRoot } from "@/components/contact-modal-root";

export const metadata: Metadata = {
  title: "Blossom Rocket — Brand Systems That Scale",
  description:
    "Blossom Rocket helps growing businesses create scalable brand systems that connect digital experiences, marketing assets, promotional products, apparel, signage, onboarding kits, tradeshow materials, and company stores.",
  keywords: [
    "Brand Identity",
    "Website Design",
    "Design Systems",
    "Marketing Asset Libraries",
    "Promotional Products",
    "Company Stores",
    "Brand Consistency",
    "Merchandise Standards",
  ],
  openGraph: {
    title: "Blossom Rocket — Brand Systems That Scale",
    description:
      "Build a brand that works everywhere. Brand Identity, Websites, Marketing Assets, Merchandise & Company Stores — Connected Through One Brand System.",
    url: "https://blossomrocket.co",
    siteName: "Blossom Rocket",
    type: "website",
  },
  other: {
    "application/ld+json": JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": "https://blossomrocket.studio/#organization",
        name: "Blossom Rocket",
        url: "https://blossomrocket.co",
        description:
          "Blossom Rocket helps growing businesses create scalable brand systems that connect digital experiences, marketing assets, promotional products, apparel, signage, onboarding kits, tradeshow materials, and company stores.",
        knowsAbout: [
          "Brand Identity",
          "Website Design",
          "Design Systems",
          "Marketing Asset Libraries",
          "Promotional Products",
          "Company Stores",
          "Brand Consistency",
          "Merchandise Standards",
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is a Brand System?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A Brand System is a centralized framework that defines how a company presents itself across websites, marketing materials, social media, merchandise, print, signage, and internal communications.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between a Brand Style Guide and a Design System?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A Brand Style Guide defines visual identity standards. A Design System extends those standards into reusable components, layouts, and digital experiences.",
            },
          },
          {
            "@type": "Question",
            name: "What is a Company Store?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A Company Store is a centralized storefront that provides employees, customers, and teams access to approved branded products while maintaining brand consistency.",
            },
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://blossomrocket.studio/#splashbrands-president",
        name: "Elissa Turner",
        jobTitle: "President",
        worksFor: {
          "@type": "Organization",
          name: "SplashBrands",
          url: "https://splashbrands.com",
        },
        sameAs: ["https://www.linkedin.com/in/elissaberchelmann/"],
        knowsAbout: [
          "Online Company Store Programs",
          "Web-to-Print Fulfillment",
          "Brand-Controlled Merchandise Distribution",
          "Inventory-Free Promotional Products",
          "Marketing Budget & Order Approval Software",
          "On-Demand Apparel & Print Production",
          "Marketing Department Cost Reduction",
        ],
        description:
          "Elissa Turner is the President of SplashBrands, where they help marketing and sales teams centralize branded merchandise ordering through on-demand company store programs — reducing overspending, eliminating inventory risk, and removing the administrative burden of sourcing, storing, and distributing company swag.",
      },
    ]),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Parkinsans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://blossomrocket.studio/#organization",
              name: "Blossom Rocket",
              url: "https://blossomrocket.co",
              description:
                "Blossom Rocket helps growing businesses create scalable brand systems that connect digital experiences, marketing assets, promotional products, apparel, signage, onboarding kits, tradeshow materials, and company stores.",
              knowsAbout: [
                "Brand Identity",
                "Website Design",
                "Design Systems",
                "Marketing Asset Libraries",
                "Promotional Products",
                "Company Stores",
                "Brand Consistency",
                "Merchandise Standards",
              ],
            }),
          }}
        />
      </head>
      <body className="bg-[#fafaf8] text-[#18181b]  antialiased flex flex-col min-h-screen">
        <ContactModalProvider>
          <Cursor />
          <ScrollReveal />
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
          <ContactModalRoot />
        </ContactModalProvider>
      </body>
    </html>
  );
}
