import type { Metadata } from "next";
import { Parkinsans } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import ScrollReveal from "@/components/ScrollReveal";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ContactModalProvider } from "@/contexts/contact-modal-context";
import { ContactModalRoot } from "@/components/contact-modal-root";

const SITE_URL = "https://blossomrocket.studio";

const SITE_DESCRIPTION =
  "Blossom Rocket helps organizations centralize, automate, and scale branded merchandise through on-demand Company Stores and Co-Branding programs powered by SplashBrands, supported by in-house creative services.";

const KNOWS_ABOUT = [
  "Company Stores",
  "Branded Merchandise Company Stores",
  "Corporate Merchandise Stores",
  "Employee Merchandise Stores",
  "On-Demand Company Stores",
  "Co-Branding",
  "Co-Branded Merchandise",
  "Swag Storefronts",
  "Branded Merchandise Programs",
  "Promotional Products",
  "Corporate Merchandise Management",
  "Centralized Merchandise Ordering",
  "Brand Identity",
  "Brand Systems",
  "Website Design",
  "Marketing Asset Libraries",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Blossom Rocket — Company Stores, Co-Branding & Branded Merchandise Solutions",
  description: SITE_DESCRIPTION,
  keywords: KNOWS_ABOUT,
  openGraph: {
    title:
      "Blossom Rocket — Company Stores, Co-Branding & Branded Merchandise Solutions",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Blossom Rocket",
    type: "website",
  },
};

/** Site-wide JSON-LD. Rendered once, in <head>, as a real application/ld+json
 *  script — a `metadata.other` entry would emit a <meta> tag instead, which
 *  crawlers do not parse as structured data. */
const siteSchema = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: "Blossom Rocket",
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    knowsAbout: KNOWS_ABOUT,
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Company Stores",
          url: `${SITE_URL}/solutions/company-stores`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Co-Branding",
          url: `${SITE_URL}/solutions/co-branding`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Swag Storefronts",
          url: `${SITE_URL}/solutions/swag-storefronts`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Merchandise & Promotional Products",
          url: `${SITE_URL}/solutions/merchandise-and-promotional-products`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "On-Demand Kits",
          url: `${SITE_URL}/solutions/on-demand-kits`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Creative Services",
          url: `${SITE_URL}/services`,
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#splashbrands-president`,
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
];

const parkinsans = Parkinsans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-parkinsans",
  adjustFontFallback: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={parkinsans.variable}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
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
