import { isValidElement, type ReactNode } from "react";

/** Flatten a ReactNode (e.g. a heading with an <em> accent) to plain text,
 *  for schema names that must be strings. */
export function nodeToText(node: ReactNode): string {
  if (node === null || node === undefined || typeof node === "boolean") {
    return "";
  }
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(nodeToText).join("");
  }
  if (isValidElement<{ children?: ReactNode }>(node)) {
    return nodeToText(node.props.children);
  }
  return "";
}

export function headingText(node: ReactNode): string | undefined {
  const text = nodeToText(node).replace(/\s+/g, " ").trim();
  return text || undefined;
}
