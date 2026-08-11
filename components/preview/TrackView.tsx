"use client";
import { useEffect } from "react";

export function TrackView({ slug, token }: { slug: string; token: string }) {
  useEffect(() => {
    fetch("/api/preview/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, token }),
    }).catch(() => {});
  }, [slug, token]);

  return null;
}
