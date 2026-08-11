import { PreviewData } from "@/lib/types/preview";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";

export function getPreview(slug: string, token: string): PreviewData {
  const filePath = path.join(process.cwd(), "data", "previews", `${slug}.json`);
  if (!fs.existsSync(filePath)) notFound();
  const data: PreviewData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  if (data.token !== token) notFound();
  if (new Date(data.expiresAt) < new Date()) notFound();
  return data;
}
