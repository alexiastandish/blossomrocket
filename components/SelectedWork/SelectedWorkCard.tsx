import Image from "next/image";
import { ProjectItem } from "@/lib/types/projects";
import { isVideoSrc } from "@/lib/utils/isVideoSrc";

interface SelectedWorkCardProps {
  item: ProjectItem;
  onClick: () => void;
}

export default function SelectedWorkCard({
  item,
  onClick,
}: SelectedWorkCardProps) {
  const cover = item.images[0];
  const coverIsVideo = cover ? isVideoSrc(cover.src) : false;

  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex flex-col text-left rounded-sm outline outline-2 outline-offset-[6px] outline-transparent hover:outline-violet transition-[outline-color] duration-200"
    >
      <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-surface-subtle mb-4">
        {cover &&
          (coverIsVideo ? (
            <video
              src={cover.src}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={cover.alt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          ) : (
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          ))}

        {item.tags?.[0] && (
          <span className="absolute top-3 left-3 text-[10px] font-semibold tracking-[0.10em] uppercase text-violet bg-active-bg rounded-full px-2.5 py-1">
            {item.tags[0]}
          </span>
        )}
      </div>

      <h3
        className="text-[17px] font-semibold leading-[1.3] tracking-[-0.01em] text-ink mb-1"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {item.title}
      </h3>
      <p className="text-[11px] font-medium tracking-[0.02em] uppercase text-ink-faint mb-2.5">
        {item.client}
      </p>
      <p className="text-[13px] leading-[1.65] text-ink-mid mb-3 line-clamp-2">
        {item.description}
      </p>

      <div className="mt-auto flex items-center gap-1.5 text-[12px] font-medium text-violet">
        <span>View project</span>
        <span
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        >
          →
        </span>
      </div>
    </button>
  );
}
