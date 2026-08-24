export type PreviewTemplate = "men" | "women" | "lifestyle-work";

export type PreviewProduct = {
  name: string;
  price: string;
  id: string;
  category: string;
  subcategory: string;
  url: string;
  colors?: string[];
};

// PreviewProduct with its image path resolved at runtime by
// resolveProspectProducts — this is what actually gets rendered.
export type ResolvedPreviewProduct = PreviewProduct & {
  image: string;
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
