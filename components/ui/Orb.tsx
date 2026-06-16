import { OrbConfig, SectionTheme } from "../../lib/types/section";
import defaultOrbs from "@/lib/constants/default_orbs.json";

export const DEFAULT_ORBS = defaultOrbs as Record<SectionTheme, OrbConfig[]>;

export const DEFAULT_DARK_ORBS = DEFAULT_ORBS.dark;

export function Orb({ orb }: { orb: OrbConfig }) {
  const {
    color,
    size = 500,
    top,
    left,
    right,
    bottom,
    opacity = 0.18,
    blur = 80,
  } = orb;

  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        opacity,
        background: `radial-gradient(circle,${color},transparent 70%)`,
        filter: `blur(${blur}px)`,
      }}
    />
  );
}
