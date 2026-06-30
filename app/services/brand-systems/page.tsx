import Hero from "@/components/Hero";
import {
  CardCallout,
  CardList,
  CardPills,
  SectionLayout,
} from "@/components/section";
import CardComparison from "@/components/section/CardComparison";

export default function page() {
  return (
    <div>
      <Hero
        theme="dark"
        heading={
          <>
            Brand Identity that Builds{" "}
            {/* <em className="grad-text not-italic">Recognition and Trust</em>. */}
          </>
        }
        body={`Blossom Rocket helps businesses create Brand Identity systems that establish consistency across company stores, digital design, marketing assets, print and promo products.`}
        ctas={[
          {
            label: "Schedule a call today to launch your brand into orbit 🚀",
            href: "/contact",
            variant: "primary",
          },
        ]}
        pillItems={[
          "Visual Identity",
          "Logo Design",
          "Color Palette",
          "Typography",
          "Iconography",
          "Graphic Elements",
        ]}
      />
      {/* ── More Than a Logo ── */}
    </div>
  );
}
