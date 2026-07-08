export type WorkItem = {
  src: string;
  alt: string;
  tag: string;
  title: string;
  description: string;
  client: string;
  href: string;
};

export type RowLayout =
  | { type: "full"; height: string }
  | { type: "cols"; cols: number; height: string }
  | { type: "asym-l"; height: string; stackHeight: string }
  | { type: "asym-r"; height: string }
  | { type: "cols-tall"; cols: number; height: string };

export type WorkRowType = {
  layout: RowLayout;
  items: WorkItem[];
};
