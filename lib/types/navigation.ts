export type NavTheme = "light" | "dark";

export type NavLink = {
  href: string;
  label: string;
  dropdown?: boolean;
  megaMenu?: boolean;
  external?: boolean;
};

/** A titled section inside a dropdown menu. An omitted title renders an
 *  untitled run of links, which keeps single-group menus visually unchanged. */
export type NavGroup = {
  title?: string;
  items: NavLink[];
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
