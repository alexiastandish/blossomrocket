import Image from "next/image";

type Item = {
  label: string;
  color: string;
  href?: string;
  alt?: string;
};

type Items = Item[];

type MarqueeTheme = "light" | "dark";

type MarqueeProps = {
  items: Items;
  theme?: MarqueeTheme;
};

export default function Marquee({ items, theme }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div
      style={{ overflowX: "clip" }}
      className={`border-t border-b py-2 border-[rgba(24,24,27,0.10)] ${theme === "dark" ? "bg-black" : "bg-white"}`}
      aria-hidden="true"
      role="presentation"
    >
      <div className="marquee-inner">
        {doubled.map((item, i) =>
          item?.href ? (
            <div
              key={`${item.href}-${i}`}
              className="relative h-14 w-32 shrink-0 -mx-6"
            >
              <Image
                src={item.href}
                alt={item.label || ""}
                loading="lazy"
                fill
                sizes="128px"
                className="object-contain"
              />
            </div>
          ) : (
            <span
              key={i}
              className={`py-[18px] flex items-center gap-12 text-[12px] tracking-[0.14em] uppercase ${theme === "dark" ? "text-white" : "text-[rgba(24,24,27,0.58)]"} whitespace-nowrap font-medium flex-shrink-0`}
            >
              {item.label}
              <span
                className="w-[5px] h-[5px] rounded-full flex-shrink-0"
                style={{ background: item.color }}
              />
            </span>
          ),
        )}
      </div>
    </div>
  );
}
