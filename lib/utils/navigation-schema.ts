import { NavLink } from "../types/navigation";

const services: NavLink[] = [
  { href: "/services/brand-identity", label: "Brand Identity" },
  { href: "/services/brand-systems", label: "Brand Systems" },
  { href: "/services/digital-design", label: "Digital Design" },
  { href: "/services/marketing-assets", label: "Marketing Assets" },
  {
    href: "/services/print-and-environmental-design",
    label: "Print & Environmental Design",
  },
];

const solutions: NavLink[] = [
  { href: "/solutions/company-stores", label: "Company Stores" },
  { href: "/solutions/swag-storefronts", label: "Swag Storefronts" },
  {
    href: "/solutions/merchandise-and-promotional-products",
    label: "Merchandise & Promotional Products",
  },
  {
    href: "/solutions/print-and-environmental",
    label: "Print & Environmental",
  },
  {
    href: "/solutions/on-demand-kits",
    label: "On-Demand Kits",
  },
];

export const dropdownLinks: Record<string, NavLink[]> = {
  "Design Services": services,
  "Swag & Store Solutions": solutions,
};

export const links: NavLink[] = [
  { href: "/services", label: "Design Services", dropdown: true },
  { href: "/solutions", label: "Swag & Store Solutions", dropdown: true },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
];
