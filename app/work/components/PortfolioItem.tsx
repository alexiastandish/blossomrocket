import Image from "next/image";
import Link from "next/link";
import { WorkItem } from "@/lib/types/work";
import { isVideoSrc } from "@/lib/utils/isVideoSrc";

export function PortfolioItem({
  item,
  full,
}: {
  item: WorkItem;
  full: boolean;
}) {
  const video = isVideoSrc(item.src);
  console.log({ item });
  console.log(item?.aspectRatio);

  return (
    <Link
      href={item.href}
      className={`group relative overflow-hidden block w-full bg-surface-subtle ${
        full && `md:col-span-2 }`
      }`}
      style={{ aspectRatio: item.aspectRatio ? item.aspectRatio : "16/10" }}
    >
      {video ? (
        <video
          src={item.src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={item.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out-expo group-hover:scale-[1.04]`}
        />
      ) : (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes={full ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
          className="object-cover transition-transform duration-500 ease-out-expo group-hover:scale-[1.04]"
        />
      )}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center p-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "var(--grad-dark-brand)" }}
      >
        <span className="text-[10px] font-semibold tracking-[0.12em] uppercase px-3 py-1 rounded-full border border-border-on-dark text-fg-on-dark opacity-70 mb-2.5">
          {item.tags.map((tag) => tag.toUpperCase()).join(" • ")}
        </span>
        <h4 className="h4 font-display font-semibold text-fg-on-dark leading-[1.2] tracking-[-0.02em] mb-2">
          {item.title}
        </h4>
        <p className="text-[13px] leading-[1.6] text-fg-on-brand max-w-[260px] mb-5">
          {item.description}
        </p>
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-btn-primary-bg text-fg-on-dark text-[12px] font-semibold tracking-[0.02em] transition-colors duration-200 group-hover:bg-btn-primary-hover">
          View Service →
        </span>
      </div>
    </Link>
  );
}
