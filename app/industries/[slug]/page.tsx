import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getIndustry, industries } from "@/data/industries";
import IndustryPage, {
  industryMetadata,
} from "@/components/industries/IndustryPage";

// Only the six configured industries exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return industryMetadata(industry);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();
  return <IndustryPage industry={industry} />;
}
