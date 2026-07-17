import type { ReactNode } from "react";

type CalendlyButtonProps = {
  children?: ReactNode;
  className?: string;
};

export function CalendlyButton({
  children = "Book a Demo to Launch Your Company Store",
  className = "",
}: CalendlyButtonProps) {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  if (!calendlyUrl) {
    console.warn("NEXT_PUBLIC_CALENDLY_URL is not configured.");
    return null;
  }

  return (
    <a
      href={calendlyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium transition-all duration-200 hover:-translate-y-0.5 ${className}`}
      aria-label={`${children} through Calendly`}
    >
      {children} <span className="relative z-10">↗</span>
    </a>
  );
}
