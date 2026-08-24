import Image from "next/image";
import Link from "next/link";
import { getPreview } from "@/lib/utils/getPreview";
import { resolveProspectProducts } from "@/lib/utils/resolveProspectProducts";
import { PRODUCTS_BY_TEMPLATE } from "@/data/preview/preview-products";
import { TrackView } from "@/components/preview/TrackView";
import { PreviewNav } from "@/components/preview/PreviewNav";
import { PreviewContent } from "@/components/preview/PreviewContent";

type Props = { params: Promise<{ slug: string; token: string }> };

export default async function PreviewPage({ params }: Props) {
  const { slug, token } = await params;
  const data = getPreview(slug, token);
  const { primaryColor, company, logo, template } = data;
  const products = resolveProspectProducts(slug, PRODUCTS_BY_TEMPLATE);
  return (
    <>
      <TrackView slug={slug} token={token} />

      <div
        className="min-h-screen bg-white"
        style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
      >
        {/* ── Concept banner ── */}
        <div
          className="w-full py-2 px-4 flex items-center justify-between gap-4 text-[11px] font-semibold tracking-[0.08em] uppercase text-white"
          style={{ background: primaryColor }}
        >
          <Link
            href="https://blossomrocket.studio"
            target="_blank"
            className="underline underline-offset-2 hover:opacity-80 transition-opacity shrink-0"
          >
            ← Back to Blossom Rocket
          </Link>
          <span>Store concept prepared for {company} — not a live store</span>
        </div>

        {/* ── Nav — client component handles active state ── */}
        <PreviewNav
          slug={slug}
          token={token}
          company={company}
          logo={logo}
          primaryColor={primaryColor}
          defaultTemplate={template}
        />

        {/* ── Content — driven by PreviewNav via URL search param ── */}
        <PreviewContent data={data} allProducts={products} />

        {/* ── Blossom Rocket CTA ── */}
        <section className="border-t border-[#e5e5e5] bg-white mt-12">
          <div className="max-w-[860px] mx-auto px-6 py-16 text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#e4e2f4] bg-[#f4f3fc]">
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#7c5ce8]">
                Concept prepared by
              </span>
              <Link
                href="https://blossomrocket.studio"
                className="text-[11px] font-bold text-[#7c5ce8] underline underline-offset-2"
              >
                Blossom Rocket
              </Link>
            </div>
            <h2 className="text-[clamp(24px,4vw,36px)] font-bold text-[#1a1a2e] leading-[1.15] tracking-[-0.02em] mb-4">
              {company} <span className="text-[#7c5ce8]">× Blossom Rocket</span>
            </h2>
            <p className="text-[15px] text-[#4a4a6a] leading-[1.7] max-w-xl mx-auto mb-10">
              This is a concept of what a {company} company store could look
              like — a centralized, brand-controlled storefront where your team
              orders branded merchandise on demand, powered by SplashBrands.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 text-left">
              {[
                "Curated branded merchandise",
                "Centralized ordering for your team",
                "Brand-controlled products",
                "On-demand fulfillment",
              ].map((f) => (
                <div key={f} className="bg-[#f4f3fc] rounded-xl p-4">
                  <span className="text-[#7c5ce8] text-[16px] block mb-2">
                    ✦
                  </span>
                  <p className="text-[12px] font-semibold text-[#1a1a2e] leading-[1.4]">
                    {f}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link
                href="https://blossomrocket.studio/services/company-stores"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[13px] font-semibold text-white bg-[#7c5ce8] hover:bg-[#4c35a8] hover:-translate-y-0.5 transition-all duration-200"
              >
                Explore Company Stores →
              </Link>
              <Link
                href="https://blossomrocket.studio"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[13px] font-semibold text-[#1a1a2e] border border-[#e4e2f4] hover:border-[#7c5ce8] hover:text-[#7c5ce8] transition-all duration-200"
              >
                blossomrocket.studio ↗
              </Link>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="border-t border-[#e5e5e5] bg-[#fafafa]">
          <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-[12px] text-[#999]">
              <span>Store powered by</span>
              <a
                href="https://splashbrands.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#555] hover:text-[#7c5ce8] transition-colors"
              >
                SplashBrands
              </a>
            </div>
            <p className="text-[11px] text-[#ccc]">
              Concept mockup created by Blossom Rocket for {company}. Not a live
              store.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
