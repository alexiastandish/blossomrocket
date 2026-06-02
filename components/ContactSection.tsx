"use client";
import { useState } from "react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden text-white text-center bg-[#18181b]"
      style={{ padding: "clamp(100px,14vw,180px) clamp(20px,8vw,80px)" }}
      aria-labelledby="contact-h"
    >
      {/* Orbs */}
      <div
        className="absolute w-[500px] h-[500px] -top-[150px] -left-[100px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle,rgba(155,92,246,0.2),transparent 70%)",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] -bottom-[100px] -right-[80px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle,rgba(6,182,212,0.2),transparent 70%)",
        }}
      />

      <p className="flex items-center justify-center gap-3 text-[12px] font-semibold tracking-[0.16em] uppercase text-[rgba(255,255,255,0.4)] mb-6 before:content-[''] before:w-9 before:h-px before:bg-[rgba(255,255,255,0.2)] after:content-[''] after:w-9 after:h-px after:bg-[rgba(255,255,255,0.2)]">
        Let&apos;s build the system behind your brand
      </p>

      <h2
        id="contact-h"
        className="relative z-10 font-semibold leading-[1.04] tracking-[-0.02em] mb-6"
        style={{
          fontFamily: "'Parkinsans', sans-serif",
          fontSize: "clamp(44px,7vw,96px)",
        }}
      >
        Brand Expansion
        <br />
        That <em className="grad-text not-italic">Scales.</em>
      </h2>

      <p
        className="relative z-10 text-[rgba(255,255,255,0.45)] leading-[1.8] mx-auto mb-[52px]"
        style={{ fontSize: "clamp(15px,1.5vw,18px)", maxWidth: "540px" }}
      >
        Create a brand that works consistently across websites, marketing
        materials, promotional products, apparel, signage, onboarding kits,
        tradeshow materials, and company stores.
      </p>

      <form
        className="relative z-10 flex max-w-[500px] mx-auto"
        onSubmit={handleSubmit}
        aria-label="Contact form"
      >
        <input
          type="email"
          className="flex-1 bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.12)] border-r-0 text-white text-[14px] px-5 py-[15px] outline-none rounded-l-full placeholder:text-[rgba(255,255,255,0.3)] focus:border-[rgba(155,92,246,0.6)] transition-colors duration-200"
          placeholder="your@email.com"
          required
          aria-label="Email address"
          autoComplete="email"
        />
        <button
          type="submit"
          className="text-white text-[13px] font-bold tracking-[0.06em] uppercase px-7 py-[15px] rounded-r-full transition-opacity duration-200 hover:opacity-90 whitespace-nowrap"
          style={{
            background: sent
              ? "linear-gradient(90deg,#10b981,#06b6d4)"
              : "linear-gradient(90deg,#9b5cf6,#06b6d4)",
          }}
        >
          {sent ? "Sent ✓" : "Schedule A Consultation"}
        </button>
      </form>
    </section>
  );
}
