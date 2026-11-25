// Industry landing pages — one entry per /industries/[slug] route. Each page
// renders exactly three sections (hero, applications, platform benefits), so
// copy lives here and the layout lives in components/industries/IndustryPage.

export type IndustryLink = { label: string; href: string };

export type Industry = {
  slug: string;
  name: string;
  title: string;
  description: string;
  keywords: string[];
  /** Schema.org Audience.audienceType */
  audience: string;
  serviceName: string;
  /** Schema.org WebPage.about topics */
  about: string[];
  hero: {
    pills: string[];
    headingLead: string;
    headingAccent: string;
    body: string;
    cta: string;
  };
  solutions: {
    eyebrow: string;
    headingLead: string;
    headingAccent: string;
    body: string;
    applications: { topic: string; description: string }[];
  };
  benefits: {
    eyebrow: string;
    headingLead: string;
    headingAccent: string;
    body: string;
    closing: string;
    capabilities: string[];
    links: IndustryLink[];
    cta: string;
  };
};

const COMPANY_STORES = "/solutions/company-stores";
const CO_BRANDING = "/solutions/co-branding";
const SWAG_STOREFRONTS = "/solutions/swag-storefronts";
const MERCHANDISE = "/solutions/merchandise-and-promotional-products";
const ON_DEMAND_KITS = "/solutions/on-demand-kits";
const EMPLOYEE_APPAREL = "/blog/custom-apparel-for-employees";

export const industries: Industry[] = [
  {
    slug: "healthcare-life-sciences",
    name: "Healthcare & Life Sciences",
    title: "Healthcare Company Stores & Branded Apparel | Blossom Rocket",
    description:
      "Centralize healthcare branded merchandise, staff apparel, onboarding kits, and hospital promotional products with on-demand company stores.",
    keywords: [
      "Healthcare Company Stores",
      "Healthcare Branded Merchandise",
      "Hospital Employee Apparel",
      "Hospital Promotional Products",
      "Medical Staff Merchandise",
      "Healthcare Merchandise Fulfillment",
      "Healthcare Onboarding Kits",
    ],
    audience:
      "Hospitals, health systems, clinics, and life sciences organizations",
    serviceName: "Healthcare Company Stores and Merchandise Programs",
    about: [
      "Healthcare company stores",
      "Healthcare branded merchandise",
      "Hospital employee apparel",
      "Healthcare onboarding kits",
    ],
    hero: {
      pills: [
        "Staff Apparel",
        "Onboarding Kits",
        "Recognition",
        "Community Outreach",
        "Multi-Facility",
      ],
      headingLead: "Healthcare Company Stores &",
      headingAccent: "Branded Merchandise Programs.",
      body: "Simplify branded apparel, medical staff merchandise, onboarding kits, and promotional product fulfillment across hospitals, clinics, healthcare networks, and life sciences organizations. Blossom Rocket helps healthcare organizations implement centralized company stores powered by SplashBrands, giving departments, employees, and facilities access to approved branded merchandise without traditional bulk orders or inventory commitments.",
      cta: "Explore Healthcare Merchandise Solutions",
    },
    solutions: {
      eyebrow: "Healthcare Merchandise Programs",
      headingLead: "One Merchandise Program.",
      headingAccent: "Every Department, Facility & Team.",
      body: "Healthcare systems manage branded materials across clinical departments, administrative teams, recruiting, education, and community outreach. Separate vendors, manual ordering, and inconsistent artwork make these programs difficult to scale. Blossom Rocket combines merchandise program strategy with SplashBrands company store technology to centralize approved products and simplify purchasing across multiple facilities.",
      applications: [
        {
          topic: "Healthcare Staff Apparel",
          description:
            "Branded polos, jackets, and apparel for clinical and administrative teams. Scrubs and lab coats depend on catalog availability.",
        },
        {
          topic: "Employee Onboarding",
          description:
            "Welcome kits, new-hire apparel, orientation materials, and employee gifts.",
        },
        {
          topic: "Recognition & Retention",
          description:
            "Employee appreciation merchandise, milestone gifts, and team rewards.",
        },
        {
          topic: "Events & Community Outreach",
          description:
            "Health fair merchandise, recruiting giveaways, conference apparel, and promotional products.",
        },
        {
          topic: "Multi-Facility Brand Management",
          description:
            "Approved merchandise for hospitals, clinics, departments, and affiliated brands.",
        },
      ],
    },
    benefits: {
      eyebrow: "Powered by SplashBrands",
      headingLead: "Automated Healthcare Merchandise Fulfillment,",
      headingAccent: "Without the Inventory.",
      body: "Instead of forecasting apparel sizes or buying promotional products in bulk, healthcare teams order approved merchandise as they need it. Blossom Rocket supports the brand and merchandise program, while SplashBrands provides the ordering technology, production, and fulfillment infrastructure. This matters in healthcare because staff turnover, new hires, and multiple facilities make apparel sizes and quantities hard to forecast in advance.",
      closing: "Build a more efficient healthcare merchandise program.",
      capabilities: [
        "On-demand production with single-item ordering",
        "One centralized catalog for every facility",
        "Budget management and order approval workflows",
        "Reporting on orders across departments",
      ],
      links: [
        { label: "Explore on-demand company stores", href: COMPANY_STORES },
        {
          label: "How employee apparel programs work",
          href: EMPLOYEE_APPAREL,
        },
        {
          label: "Build onboarding and recognition kits",
          href: ON_DEMAND_KITS,
        },
      ],
      cta: "Talk About Your Healthcare Company Store",
    },
  },
  {
    slug: "technology-professional-services",
    name: "Technology & Professional Services",
    title: "Technology Company Swag & Employee Stores | Blossom Rocket",
    description:
      "Company swag stores, employee onboarding kits, corporate gifting, and on-demand branded merchandise for technology and professional services firms.",
    keywords: [
      "Technology Company Swag",
      "SaaS Company Swag",
      "Corporate Swag Stores",
      "Employee Merchandise Stores",
      "Tech Employee Onboarding Kits",
      "Corporate Gifting Programs",
      "Print-on-Demand Company Swag",
    ],
    audience:
      "SaaS, AI, fintech, and cybersecurity companies and professional services firms",
    serviceName: "Technology Company Swag Stores and Merchandise Programs",
    about: [
      "Technology company swag",
      "Corporate swag stores",
      "Employee onboarding kits",
      "Corporate gifting programs",
    ],
    hero: {
      pills: [
        "Onboarding",
        "Swag Stores",
        "Conferences",
        "Client Gifting",
        "Culture",
      ],
      headingLead: "Technology Company Swag,",
      headingAccent: "Employee Stores & Branded Merchandise.",
      body: "Scale employee swag, onboarding kits, corporate gifting, and event merchandise without managing inventory or coordinating multiple promotional product vendors. Blossom Rocket helps SaaS companies, AI businesses, fintech organizations, cybersecurity providers, and professional services firms create centralized branded merchandise programs through SplashBrands-powered company stores and on-demand fulfillment.",
      cta: "Explore Technology Merchandise Solutions",
    },
    solutions: {
      eyebrow: "Technology Swag Programs",
      headingLead: "Company Swag Built for",
      headingAccent: "Growing, Distributed Teams.",
      body: "Technology companies and professional services firms need branded merchandise for employees, customers, conferences, recruiting, and internal programs. As teams spread across offices and remote locations, managing swag through spreadsheets, bulk orders, and individual vendors becomes inefficient. Blossom Rocket creates cohesive branded merchandise experiences supported by centralized ordering and on-demand production.",
      applications: [
        {
          topic: "Employee Onboarding",
          description:
            "Branded welcome kits, apparel, drinkware, notebooks, and accessories for new hires, in office or remote.",
        },
        {
          topic: "Corporate Swag Stores",
          description:
            "Self-service merchandise ordering for employees and distributed teams.",
        },
        {
          topic: "Conferences & Events",
          description:
            "Trade show giveaways, event apparel, promotional products, and marketing materials.",
        },
        {
          topic: "Client & Partner Gifting",
          description:
            "Branded gifts, customer appreciation merchandise, and partner kits.",
        },
        {
          topic: "Recruiting & Culture",
          description:
            "Team merchandise, employee recognition, milestone gifts, and employer branding.",
        },
      ],
    },
    benefits: {
      eyebrow: "Powered by SplashBrands",
      headingLead: "On-Demand Swag Fulfillment That",
      headingAccent: "Scales With Your Business.",
      body: "A centralized company store replaces disconnected swag ordering with approved products, preconfigured artwork, single-item ordering, and direct fulfillment. SplashBrands lets organizations manage merchandise access, ordering permissions, budgets, and approvals with less reliance on inventory, while Blossom Rocket keeps the brand consistent across products, campaigns, and employee experiences. That matters for growing teams because headcount changes faster than a bulk swag order can be planned.",
      closing:
        "Give every team access to your brand, without the operational overhead.",
      capabilities: [
        "Preconfigured artwork on every approved product",
        "Single-item ordering for remote employees",
        "Ordering permissions and budgets by team",
        "Direct shipping to homes and offices",
      ],
      links: [
        { label: "See how company stores work", href: COMPANY_STORES },
        {
          label: "Start with a self-serve Swag Storefront",
          href: SWAG_STOREFRONTS,
        },
        { label: "Plan onboarding and gifting kits", href: ON_DEMAND_KITS },
      ],
      cta: "Build Your Company Swag Program",
    },
  },
  {
    slug: "manufacturing-industrial",
    name: "Manufacturing & Industrial",
    title: "Manufacturing Company Stores & Workwear | Blossom Rocket",
    description:
      "Centralized company stores, branded workwear, distributor merchandise, and on-demand promotional products for manufacturing and industrial businesses.",
    keywords: [
      "Manufacturing Company Stores",
      "Industrial Branded Workwear",
      "Manufacturing Employee Apparel",
      "Distributor Merchandise Programs",
      "Industrial Promotional Products",
      "Multi-Facility Merchandise Management",
      "Branded Workwear Fulfillment",
    ],
    audience:
      "Manufacturers, distributors, wholesalers, and industrial organizations",
    serviceName: "Manufacturing Company Stores and Workwear Programs",
    about: [
      "Manufacturing company stores",
      "Industrial branded workwear",
      "Distributor merchandise programs",
      "Multi-facility merchandise management",
    ],
    hero: {
      pills: [
        "Workwear",
        "Distributor Programs",
        "Recognition",
        "Trade Shows",
        "Multi-Facility",
      ],
      headingLead: "Manufacturing Company Stores,",
      headingAccent: "Branded Workwear & Industrial Merchandise.",
      body: "Centralize employee apparel, branded workwear, promotional products, and distributor merchandise across manufacturing facilities, warehouses, and industrial networks. Blossom Rocket helps manufacturers, distributors, wholesalers, and industrial organizations implement company stores powered by SplashBrands, with on-demand production and no traditional minimum order quantities for eligible products.",
      cta: "Explore Industrial Merchandise Solutions",
    },
    solutions: {
      eyebrow: "Industrial Merchandise Programs",
      headingLead: "Branded Merchandise for Facilities,",
      headingAccent: "Employees & Distribution Networks.",
      body: "Manufacturing and industrial businesses often operate across multiple facilities, departments, distributors, and dealer networks, and each location needs approved apparel, branded accessories, promotional products, and marketing materials. Blossom Rocket standardizes the merchandise program while letting individual teams and locations order what they need.",
      applications: [
        {
          topic: "Employee Workwear",
          description:
            "Branded polos, jackets, hats, work shirts, and facility apparel.",
        },
        {
          topic: "Distributor & Dealer Programs",
          description:
            "Co-branded merchandise for channel partners and distribution networks.",
        },
        {
          topic: "Employee Recognition",
          description:
            "Service awards, safety milestone merchandise, and employee appreciation gifts.",
        },
        {
          topic: "Trade Shows & Sales",
          description:
            "Industrial event giveaways, branded promotional products, and sales materials.",
        },
        {
          topic: "Multi-Facility Programs",
          description:
            "Approved merchandise catalogs for plants, warehouses, offices, and regional teams.",
        },
      ],
    },
    benefits: {
      eyebrow: "Powered by SplashBrands",
      headingLead: "Centralized Merchandise Management",
      headingAccent: "Across Every Location.",
      body: "SplashBrands-powered company stores let industrial organizations standardize branded products, manage access by team or location, configure approval workflows, and order merchandise on demand. Less bulk purchasing and stored inventory means approved apparel and promotional products can reach distributed facilities with consistent branding. That matters because crews across plants and shifts need consistent, correctly branded workwear without each site sourcing its own.",
      closing: "One company store. Multiple facilities. Consistent branding.",
      capabilities: [
        "Access controls by facility, team, or distributor",
        "Approval workflows before orders are produced",
        "Multiple approved logos for dealer co-branding",
        "On-demand production instead of stockpiled workwear",
      ],
      links: [
        {
          label: "Explore company stores for multiple facilities",
          href: COMPANY_STORES,
        },
        {
          label: "Learn about co-branded distributor merchandise",
          href: CO_BRANDING,
        },
        { label: "Plan a branded workwear program", href: EMPLOYEE_APPAREL },
      ],
      cta: "Simplify Your Industrial Merchandise Program",
    },
  },
  {
    slug: "construction-field-services",
    name: "Construction & Field Services",
    title: "Construction Company Stores & Workwear | Blossom Rocket",
    description:
      "Branded workwear, construction company stores, crew apparel, and on-demand merchandise fulfillment for contractors and field service businesses.",
    keywords: [
      "Construction Company Stores",
      "Construction Branded Apparel",
      "Contractor Workwear",
      "Field Service Apparel",
      "Crew Apparel Programs",
      "Branded Work Shirts",
      "On-Demand Contractor Merchandise",
    ],
    audience:
      "Construction companies, contractors, engineering firms, facilities management providers, and field service organizations",
    serviceName: "Construction Company Stores and Field Team Apparel Programs",
    about: [
      "Construction company stores",
      "Contractor branded apparel",
      "Field team apparel",
      "Crew workwear programs",
    ],
    hero: {
      pills: [
        "Crew Apparel",
        "Onboarding",
        "Recognition",
        "Branch Ordering",
        "Trade Events",
      ],
      headingLead: "Construction Company Stores,",
      headingAccent: "Branded Workwear & Field Team Apparel.",
      body: "Keep field crews, project teams, technicians, and office employees in consistent branded apparel through centralized, on-demand ordering. Blossom Rocket provides company store and merchandise solutions for construction companies, contractors, engineering firms, facilities management providers, and field service organizations, powered by SplashBrands technology.",
      cta: "Explore Construction Merchandise Solutions",
    },
    solutions: {
      eyebrow: "Field Team Merchandise",
      headingLead: "Branded Apparel & Merchandise",
      headingAccent: "for Teams in the Field.",
      body: "Construction and field service organizations manage employees across changing jobsites, service territories, regional offices, and project teams. Traditional bulk apparel orders create sizing problems, surplus inventory, and inconsistent branding. Blossom Rocket builds approved merchandise programs that support both field operations and corporate branding. Branded apparel complements, but does not replace, required safety and protective equipment.",
      applications: [
        {
          topic: "Crew & Technician Apparel",
          description:
            "Branded work shirts, polos, jackets, hats, and outerwear.",
        },
        {
          topic: "New-Hire & Project Onboarding",
          description:
            "Employee welcome kits, branded apparel, and orientation materials.",
        },
        {
          topic: "Safety & Recognition Programs",
          description:
            "Safety milestone gifts, employee awards, and branded accessories.",
        },
        {
          topic: "Regional & Branch Ordering",
          description:
            "Centralized merchandise access for offices, field crews, and service locations.",
        },
        {
          topic: "Customer & Trade Events",
          description:
            "Promotional products, contractor gifts, and trade show merchandise.",
        },
      ],
    },
    benefits: {
      eyebrow: "Powered by SplashBrands",
      headingLead: "Give Every Crew Access to",
      headingAccent: "Approved Branded Merchandise.",
      body: "SplashBrands company stores provide on-demand branded apparel and promotional products with centralized ordering, approved artwork, and configurable access and approval controls. Instead of coordinating repeated bulk purchases, field service businesses give every team one consistent catalog and order products as crews grow. That matters because field crews change from project to project, so apparel should be ordered when people join instead of stocked in advance.",
      closing: "Simplify branded apparel for every crew, branch, and project.",
      capabilities: [
        "Order the right sizes as new crew members join",
        "One catalog for every branch and service territory",
        "Approved artwork on every work shirt and jacket",
        "Shipping to offices, branches, or individual employees",
      ],
      links: [
        {
          label: "Explore on-demand company stores for crews",
          href: COMPANY_STORES,
        },
        {
          label: "Compare apparel and uniform programs",
          href: EMPLOYEE_APPAREL,
        },
        {
          label: "Discover promotional products for trade events",
          href: MERCHANDISE,
        },
      ],
      cta: "Create Your Construction Company Store",
    },
  },
  {
    slug: "retail-hospitality-franchise",
    name: "Retail, Hospitality & Franchise",
    title: "Franchise Company Stores & Merchandise | Blossom Rocket",
    description:
      "Centralize franchise merchandise, employee apparel, co-branded products, and multi-location ordering with on-demand company stores.",
    keywords: [
      "Franchise Company Stores",
      "Franchise Branded Merchandise",
      "Multi-Location Merchandise Management",
      "Retail Employee Apparel",
      "Hospitality Branded Merchandise",
      "Co-Branded Franchise Merchandise",
      "Franchise Promotional Products",
    ],
    audience:
      "Franchise networks, retail chains, restaurants, hotels, and dealership groups",
    serviceName: "Franchise Company Stores and Multi-Location Merchandise",
    about: [
      "Franchise company stores",
      "Co-branded franchise merchandise",
      "Multi-location merchandise management",
      "Retail and hospitality employee apparel",
    ],
    hero: {
      pills: [
        "Employee Apparel",
        "Franchise Stores",
        "Co-Branding",
        "Grand Openings",
        "Multi-Location",
      ],
      headingLead: "Franchise Company Stores, Branded Apparel &",
      headingAccent: "Multi-Location Merchandise.",
      body: "Manage branded merchandise, employee apparel, promotional products, and location-specific marketing materials across franchise networks, retail chains, restaurants, hotels, and dealership groups. Blossom Rocket helps multi-location organizations implement centralized merchandise programs and co-branded ordering powered by SplashBrands.",
      cta: "Explore Franchise Merchandise Solutions",
    },
    solutions: {
      eyebrow: "Multi-Location Merchandise",
      headingLead: "Brand Consistency Across Every",
      headingAccent: "Store, Franchise & Location.",
      body: "Franchise and multi-location businesses must keep branding consistent while serving individual locations, operators, employees, and regional marketing teams. Blossom Rocket combines approved merchandise standards with company store and co-branding solutions, so consistent products reach every location in a growing network.",
      applications: [
        {
          topic: "Employee Apparel",
          description:
            "Branded polos, shirts, hats, jackets, and hospitality staff merchandise.",
        },
        {
          topic: "Franchise Merchandise Stores",
          description:
            "Approved merchandise catalogs for franchisees, locations, and operators.",
        },
        {
          topic: "Co-Branded Products",
          description:
            "Corporate and local brand combinations for dealers, franchisees, and partners.",
        },
        {
          topic: "Grand Openings & Promotions",
          description:
            "Promotional products, event merchandise, and campaign materials.",
        },
        {
          topic: "Location-Specific Programs",
          description:
            "Merchandise for individual stores, restaurants, hotels, and regional groups.",
        },
      ],
    },
    benefits: {
      eyebrow: "Powered by SplashBrands",
      headingLead: "Centralized Brand Control.",
      headingAccent: "Flexible Local Ordering.",
      body: "SplashBrands-powered company stores let franchise networks and multi-location businesses keep approved catalogs while giving individual locations and user groups their own ordering access. On-demand production and single-item ordering reduce the need for location-level inventory, and Blossom Rocket handles merchandise strategy, brand applications, and co-branding so local teams order products that match corporate standards. That matters because each location needs local flexibility while the brand still has to look the same in every store.",
      closing:
        "One brand system. Multiple locations. One streamlined ordering experience.",
      capabilities: [
        "Ordering access by location, operator, or region",
        "Corporate and local logos in one approved catalog",
        "No location-level inventory to manage",
        "Single-item ordering for new staff",
      ],
      links: [
        {
          label: "Learn about co-branded franchise merchandise",
          href: CO_BRANDING,
        },
        {
          label: "Explore multi-location company stores",
          href: COMPANY_STORES,
        },
        {
          label: "Give single locations a Swag Storefront",
          href: SWAG_STOREFRONTS,
        },
      ],
      cta: "Build Your Franchise Merchandise Program",
    },
  },
  {
    slug: "financial-services-insurance",
    name: "Financial Services & Insurance",
    title: "Banking & Financial Services Company Stores | Blossom Rocket",
    description:
      "Company stores, branch apparel, corporate gifting, and on-demand branded merchandise for banks, credit unions, and insurance organizations.",
    keywords: [
      "Banking Company Stores",
      "Financial Services Branded Merchandise",
      "Insurance Company Merchandise",
      "Bank Employee Apparel",
      "Branch Promotional Products",
      "Corporate Gifting Programs",
      "Insurance Agent Merchandise",
    ],
    audience:
      "Banks, credit unions, insurance organizations, and financial services networks",
    serviceName: "Financial Services Company Stores and Branch Merchandise",
    about: [
      "Banking company stores",
      "Financial services branded merchandise",
      "Branch merchandise programs",
      "Insurance agent merchandise",
    ],
    hero: {
      pills: [
        "Branch Apparel",
        "Client Gifting",
        "Agent Programs",
        "Community Events",
        "Recognition",
      ],
      headingLead: "Financial Services Company Stores &",
      headingAccent: "Branded Merchandise Programs.",
      body: "Centralize employee apparel, branch merchandise, corporate gifting, promotional products, and brand-approved materials across banks, credit unions, insurance organizations, and financial services networks. Blossom Rocket helps financial institutions implement branded merchandise programs through SplashBrands-powered company stores, with consistent branding, controlled ordering, and on-demand fulfillment.",
      cta: "Explore Financial Services Merchandise Solutions",
    },
    solutions: {
      eyebrow: "Branch & Agent Merchandise",
      headingLead: "Consistent Branded Merchandise Across",
      headingAccent: "Branches, Agents & Teams.",
      body: "Financial services organizations distribute branded materials across branch networks, sales teams, advisors, insurance agents, and corporate departments. Decentralized purchasing leads to inconsistent merchandise, duplicated orders, and limited visibility into spending. Blossom Rocket establishes approved merchandise programs supported by centralized ordering and brand-controlled product catalogs.",
      applications: [
        {
          topic: "Branch & Employee Apparel",
          description:
            "Branded polos, jackets, accessories, and employee merchandise.",
        },
        {
          topic: "Client & Corporate Gifting",
          description:
            "Customer appreciation gifts, advisor merchandise, and relationship-building products.",
        },
        {
          topic: "Agent & Advisor Programs",
          description:
            "Approved branded products for insurance agents, financial advisors, and regional offices.",
        },
        {
          topic: "Events & Community Outreach",
          description:
            "Financial literacy events, recruiting merchandise, sponsorship giveaways, and promotional products.",
        },
        {
          topic: "Employee Recognition",
          description:
            "Onboarding kits, service awards, and team appreciation merchandise.",
        },
      ],
    },
    benefits: {
      eyebrow: "Powered by SplashBrands",
      headingLead: "More Control Over Merchandise,",
      headingAccent: "Branding & Spending.",
      body: "SplashBrands company stores provide centralized merchandise ordering with configurable budgets, approvals, user groups, and reporting. Financial institutions give branches, employees, and authorized partners access to approved branded products with less manual ordering and inventory, while Blossom Rocket aligns the program with organizational brand standards. That matters in financial services because client trust depends on every branch presenting the same approved logo and materials.",
      closing:
        "Simplify merchandise purchasing while protecting brand consistency.",
      capabilities: [
        "Budgets and spending limits by branch or team",
        "Order approvals before anything is produced",
        "Reporting on merchandise spend",
        "Access for authorized agents and partners",
      ],
      links: [
        {
          label: "Explore company stores with budget controls",
          href: COMPANY_STORES,
        },
        {
          label: "Discover branded merchandise and promotional products",
          href: MERCHANDISE,
        },
        {
          label: "Build client and corporate gifting kits",
          href: ON_DEMAND_KITS,
        },
      ],
      cta: "Centralize Your Financial Services Merchandise",
    },
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}
