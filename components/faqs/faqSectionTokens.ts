import { SectionTheme } from "@/lib/types/section";

export const sectionTokens: Record<
  SectionTheme,
  {
    bg: string;
    text: string;
    mutedText: string;
    border: string;
    cardBg: string;
    accent: string;
    accentHex: string;
    heading: string;
    eyebrow: string;
    gradients: string[];
    orb1: string;
    orb2: string;
    orb3: string;
  }
> = {
  light: {
    heading: "text-[#18181b]",
    bg: "bg-white",
    text: "text-[#1B1A3B]",
    mutedText: "text-[#5B5876]",
    border: "border-[#E6E2F2]",
    cardBg: "bg-[#FAF9FD]",
    accent: "text-[#7B4FE0]",
    accentHex: "#7B4FE0",
    eyebrow: "text-[#C45FA0]",
    gradients: [
      "linear-gradient(135deg, #7C5CE8, #06C4A4)",
      "linear-gradient(135deg, #D946A8, #F5A623)",
      "linear-gradient(135deg, #7C5CE8, #D946A8)",
      "linear-gradient(135deg, #06C4A4, #3DE9A4)",
    ],
    orb1: "#9B7FE0",
    orb2: "#E0B8D4",
    orb3: "#C98FB8",
  },
  dark: {
    heading: "text-white",
    bg: "bg-[#13122B]",
    text: "text-white",
    mutedText: "text-[#B8B4D6]",
    border: "border-[#2E2C54]",
    cardBg: "bg-[#1B1A3B]",
    accent: "text-[#C68CF0]",
    accentHex: "#C68CF0",
    eyebrow: "text-[#F0A8D0]",
    gradients: [
      "linear-gradient(135deg, #7C5CE8, #06C4A4)",
      "linear-gradient(135deg, #D946A8, #F5A623)",
      "linear-gradient(135deg, #7C5CE8, #D946A8)",
      "linear-gradient(135deg, #06C4A4, #3DE9A4)",
    ],
    orb1: "#9B7FE0",
    orb2: "#E0B8D4",
    orb3: "#C98FB8",
  },
  brand: {
    heading: "text-white",
    bg: "bg-[#1B1A3B]",
    text: "text-white",
    mutedText: "text-[#C9C5E6]",
    border: "border-[#3A3768]",
    cardBg: "bg-[#23215080]",
    accent: "text-[#E8A9D9]",
    accentHex: "#E8A9D9",
    eyebrow: "text-[#E8A9D9]",
    gradients: [
      "linear-gradient(135deg, #7C5CE8, #06C4A4)",
      "linear-gradient(135deg, #D946A8, #F5A623)",
      "linear-gradient(135deg, #7C5CE8, #D946A8)",
      "linear-gradient(135deg, #06C4A4, #3DE9A4)",
    ],
    orb1: "#9B7FE0",
    orb2: "#E0B8D4",
    orb3: "#C98FB8",
  },
  brandSoft: {
    heading: "text-[#1a1a2e]",
    bg: "bg-[#F3EEFB]",
    text: "text-[#1B1A3B]",
    mutedText: "text-[#5B5876]",
    border: "border-[#DDD4F2]",
    cardBg: "bg-white",
    accent: "text-[#7B4FE0]",
    accentHex: "#7B4FE0",
    eyebrow: "text-[#C45FA0]",
    gradients: [
      "linear-gradient(135deg, #7C5CE8, #06C4A4)",
      "linear-gradient(135deg, #D946A8, #F5A623)",
      "linear-gradient(135deg, #7C5CE8, #D946A8)",
      "linear-gradient(135deg, #06C4A4, #3DE9A4)",
    ],
    orb1: "#9B7FE0",
    orb2: "#E0B8D4",
    orb3: "#C98FB8",
  },
};
