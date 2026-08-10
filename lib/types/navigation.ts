export type NavTheme = "light" | "dark";

export type NavLink = {
  href: string;
  label: string;
  dropdown?: boolean;
};

export type DropdownMenus = Record<string, boolean>;
