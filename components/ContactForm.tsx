"use client";

import { useEffect, useState, type SubmitEventHandler } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

type Web3FormsResponse = {
  success: boolean;
  message?: string;
};

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SERVICES = [
  "Brand Identity",
  "Brand Systems",
  "Digital Design",
  "Marketing Assets",
  "Print & Environmental",
  "Merchandise & Promotional Products",
  "Company Stores",
  "Swag Storefront",
  "Not sure yet",
] as const;

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const raf = requestAnimationFrame(() => setVisible(true));
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
      setVisible(false);
      setStatus("idle");
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error("NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is not configured.");
      setStatus("error");
      return;
    }

    setStatus("submitting");

    const formData = new FormData(form);
    formData.append("access_key", accessKey);
    formData.append("subject", "New Blossom Rocket brand inquiry");
    formData.append("from_name", "Blossom Rocket");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = (await response.json()) as Web3FormsResponse;

      if (!response.ok || !result.success) {
        throw new Error(result.message ?? "Submission failed");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`absolute inset-0 bg-overlay-heavy backdrop-blur-sm transition-opacity duration-500 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        className={`relative w-full max-w-lg overflow-hidden rounded-3xl border border-border-subtle bg-surface-base shadow-2xl transition-all duration-500 [transition-timing-function:var(--ease-out-expo)] ${
          visible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-4 scale-[0.98] opacity-0"
        }`}
      >
        <div className="max-h-[85vh] overflow-y-auto p-8 md:p-10">
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close contact form"
            className="absolute right-5 top-6 flex h-9 w-9 items-center justify-center rounded-full text-fg-tertiary transition-colors hover:bg-btn-ghost-hover hover:text-fg-primary"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 1L15 15M15 1L1 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Header */}
          <div className="mb-4 pr-8">
            <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-fg-tertiary">
              <span className="text-divider-dot-gradient" />
              Get in touch
            </span>
            <h3 id="contact-modal-title" className="h3 text-fg-primary">
              Let&apos;s work together to{" "}
              <span className="bg-[image:var(--grad-brand)] bg-clip-text text-transparent">
                launch your brand for expansion.{" "}
              </span>
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="modal-name"
                  className="body-sm mb-2 block font-medium text-fg-primary"
                >
                  Name
                </label>
                <input
                  id="modal-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  disabled={status === "submitting"}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-border-default bg-surface-page px-4 py-3 text-fg-primary placeholder:text-fg-tertiary transition-colors focus:border-border-focus focus:outline-none focus:ring-2 focus:ring-[color:var(--color-overlay-focus-halo)] disabled:opacity-50"
                />
              </div>

              <div>
                <label
                  htmlFor="modal-company"
                  className="body-sm mb-2 block font-medium text-fg-primary"
                >
                  Company
                </label>
                <input
                  id="modal-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  required
                  disabled={status === "submitting"}
                  placeholder="Your company"
                  className="w-full rounded-xl border border-border-default bg-surface-page px-4 py-3 text-fg-primary placeholder:text-fg-tertiary transition-colors focus:border-border-focus focus:outline-none focus:ring-2 focus:ring-[color:var(--color-overlay-focus-halo)] disabled:opacity-50"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="modal-email"
                className="body-sm mb-2 block font-medium text-fg-primary"
              >
                Email
              </label>
              <input
                id="modal-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                disabled={status === "submitting"}
                placeholder="you@company.com"
                className="w-full rounded-xl border border-border-default bg-surface-page px-4 py-3 text-fg-primary placeholder:text-fg-tertiary transition-colors focus:border-border-focus focus:outline-none focus:ring-2 focus:ring-[color:var(--color-overlay-focus-halo)] disabled:opacity-50"
              />
            </div>

            <div>
              <label
                htmlFor="modal-service"
                className="body-sm mb-2 block font-medium text-fg-primary"
              >
                What are you looking to build?{" "}
                <span className="text-[color:var(--color-zinc-58)] font-normal">
                  (optional)
                </span>
              </label>
              <select
                id="modal-service"
                name="service"
                disabled={status === "submitting"}
                defaultValue=""
                className="w-full rounded-xl border border-border-default bg-surface-page px-4 py-3 text-fg-primary transition-colors focus:border-border-focus focus:outline-none focus:ring-2 focus:ring-[color:var(--color-overlay-focus-halo)] disabled:opacity-50"
              >
                <option value="">Select a service</option>
                {SERVICES.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="modal-message"
                className="body-sm mb-2 block font-medium text-fg-primary"
              >
                Tell us about your brand{" "}
                <span className="text-[color:var(--color-zinc-58)] font-normal">
                  (optional)
                </span>
              </label>
              <textarea
                id="modal-message"
                name="message"
                rows={4}
                disabled={status === "submitting"}
                placeholder="What's fragmented, what's growing, and where you want your brand to feel consistent"
                className="w-full resize-none rounded-xl border border-border-default bg-surface-page px-4 py-3 text-fg-primary placeholder:text-fg-tertiary transition-colors focus:border-border-focus focus:outline-none focus:ring-2 focus:ring-[color:var(--color-overlay-focus-halo)] disabled:opacity-50"
              />
            </div>

            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <button
              type="submit"
              disabled={status === "submitting"}
              className="group relative w-full overflow-hidden rounded-full px-6 py-3.5 font-semibold text-fg-on-brand transition-transform duration-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span className="absolute inset-0 bg-[image:var(--grad-brand)] transition-opacity duration-300 group-hover:opacity-90" />
              <span className="relative">
                {status === "submitting"
                  ? "Sending..."
                  : "Launch the conversation"}
              </span>
            </button>

            <div aria-live="polite" className="body-sm text-center">
              {status === "success" && (
                <p
                  role="status"
                  className="text-[color:var(--color-green-600)]"
                >
                  Thanks — we&apos;ll be in touch within one business day.
                </p>
              )}
              {status === "error" && (
                <p role="alert" className="text-[color:var(--color-pink-600)]">
                  Something went wrong. Please try again, or email us directly
                  at hello@blossomrocket.co.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
