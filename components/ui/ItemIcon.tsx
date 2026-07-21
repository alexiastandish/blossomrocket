import { IconVariant } from "@/lib/types/section";
import { iconPresets } from "@/lib/utils/sectionTailwindTokens";

export function ItemIcon({ icon = "x" }: { icon?: IconVariant }) {
  if (typeof icon !== "string") {
    return (
      <div className="w-[18px] h-[18px] flex-shrink-0 flex items-center justify-center">
        {icon}
      </div>
    );
  }

  const preset = iconPresets[icon] ?? iconPresets.x;

  return (
    <div
      className={`w-[18px] h-[18px] rounded-full flex items-center justify-center text-[10px] flex-shrink-0 border ${preset.bg} ${preset.border} ${preset.color}`}
    >
      {preset.glyph}
    </div>
  );
}
