export type PreviewTemplate = "men" | "women" | "lifestyle-work";

export type PreviewProduct = {
  name: string;
  price: string;
  image: string;
  url: string;
  colors?: string[];
};

export type PreviewData = {
  slug: string;
  token: string;
  company: string;
  contactName: string;
  contactTitle: string;
  logo: string;
  primaryColor: string;
  secondaryColor: string;
  template: PreviewTemplate;
  createdAt: string;
  expiresAt: string;
  viewed?: boolean;
  viewedAt?: string;
};
