"use client";

import { useState } from "react";
import { ProjectItem } from "@/lib/types/projects";
import SelectedWorkCard from "./SelectedWorkCard";
import SelectedWorkModal from "./SelectedWorkModal";

interface SelectedWorkProps {
  items: ProjectItem[];
}

export default function SelectedWork({ items }: SelectedWorkProps) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const activeItem = items.find((item) => item.slug === activeSlug) ?? null;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
        {items.map((item) => (
          <SelectedWorkCard
            key={item.slug}
            item={item}
            onClick={() => setActiveSlug(item.slug)}
          />
        ))}
      </div>

      <SelectedWorkModal
        item={activeItem}
        onClose={() => setActiveSlug(null)}
      />
    </>
  );
}
