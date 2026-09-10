export type NavTheme = "light" | "dark";

export type NavLink = {
  href: string;
  label: string;
  dropdown?: boolean;
  megaMenu?: boolean;
  external?: boolean;
};

export type DropdownMenus = Record<string, boolean>;

export type ShopMegaMenuItem = {
  label: string;
  href: string;
};

export type ShopMegaMenuGroup = {
  title: string;
  items: ShopMegaMenuItem[];
};

export type ShopMegaMenuCategory = {
  label: string;
  groups: ShopMegaMenuGroup[];
};
