export interface ProjectImage {
  src: string;
  alt: string;
  aspectRatio?: string;
  wrapBefore?: boolean;
}

export interface ProjectItem {
  slug: string;
  title: string;
  description: string;
  client?: string;
  tags: string[];
  href: string;
  rowHeight?: string;
  images: ProjectImage[];
}
