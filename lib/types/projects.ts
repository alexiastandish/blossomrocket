// lib/types/project.ts

export interface ProjectImage {
  /** Image or video URL — isVideoSrc(src) determines how it renders */
  src: string;
  alt: string;
  /** e.g. "16/9", "4/5", "1/1". Optional — falls back to auto-width in the component when not set */
  aspectRatio?: string;
  /**
   * Start a new line within this project's row immediately before this image.
   * This is manual/author-controlled wrapping (not responsive auto-wrap) — the
   * same break points apply at every viewport width. Ignored on the first
   * image of a project (there's nothing before it to break from).
   */
  wrapBefore?: boolean;
}

export interface ProjectItem {
  slug: string;
  title: string;
  description: string;
  client?: string;
  tags: string[];
  href: string;
  /**
   * Overrides the default row height for this project only. Accepts any CSS
   * length/clamp, e.g. "320px" or "clamp(200px, 30vw, 480px)". Falls back to
   * DEFAULT_ROW_HEIGHT in PortfolioGrid when not set.
   */
  rowHeight?: string;
  /** 1–4+ images or videos, rendered left-to-right at their natural aspect ratio within the row height. First item is typically the project's hero media. */
  images: ProjectImage[];
}
