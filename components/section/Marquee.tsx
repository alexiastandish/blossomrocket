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
      className={`overflow-hidden py-[18px] border-t border-b border-[rgba(24,24,27,0.10)] ${theme === "dark" ? "bg-black" : "bg-white"}`}
      aria-hidden="true"
      role="presentation"
    >
      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <div
            key={i}
            className={`flex items-center gap-12 text-[12px] tracking-[0.14em] uppercase ${theme === "dark" ? "text-[rgb(255,255,255)]" : "text-[rgba(24,24,27,0.58)]"} whitespace-nowrap font-medium`}
          >
            {item?.href ? (
              <Image
                src={item.href}
                alt={item.label || ""}
                width={160}
                height={60}
                style={{ height: "40px", width: "auto", objectFit: "contain" }}
              />
            ) : (
              <>
                {item.label}
                <span
                  className="w-[5px] h-[5px] rounded-full flex-shrink-0"
                  style={{ background: item.color }}
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
