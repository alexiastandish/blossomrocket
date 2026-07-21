"use client";
import { FAQGroup } from "@/lib/types/faqs";
import { useRef, useState, useLayoutEffect, type ReactNode } from "react";
import { useContactModal } from "@/contexts/contact-modal-context";
export interface AccordionTokens {
  bg: string;
  heading: string;
  text: string;
  mutedText: string;
  eyebrow: string;
  border: string;
  cardBg: string;
  itemDesc: string;
  accent: string;
  accentHex: string; // CSS var(), e.g. "var(--color-violet)" — for inline style={{}}
  pill: string;
  orb1: string; // CSS var(), e.g. "var(--color-violet)" — for inline style={{}}
  orb2: string;
  orb3: string;
  gradients: string[]; // CSS var(), e.g. "var(--grad-brand)" — for inline style={{}}
}

interface FAQAccordionGroupedProps {
  groups: FAQGroup[];
  activeTokens: AccordionTokens;
  showTopicNav?: boolean;
}

function AnimatedAnswer({
  open,
  children,
}: {
  open: boolean;
  children: ReactNode;
}) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | null>(null);

  useLayoutEffect(() => {
    if (!open || !innerRef.current) {
      setHeight(null);
      return;
    }
    setHeight(innerRef.current.scrollHeight);
  }, [open]);

  return (
    <div
      style={{
        height: open ? (height ?? "auto") : 0,
        opacity: open ? 1 : 0,
        overflow: "hidden",
        transition:
          "height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div ref={innerRef}>{children}</div>
    </div>
  );
}

export default function FAQAccordionGrouped({
  groups,
  activeTokens,
  showTopicNav = true,
}: FAQAccordionGroupedProps) {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [hoveredPill, setHoveredPill] = useState<string | null>(null);
  const { open: openContactModal } = useContactModal();

  const toggle = (key: string) =>
    setOpenKey((prev) => (prev === key ? null : key));

  const scrollToGroup = (groupId: string) => {
    document
      .getElementById(groupId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const gradientFor = (index: number) =>
    activeTokens.gradients[index % activeTokens.gradients.length];

  return (
    <div>
      {showTopicNav && groups.length > 1 && (
        <nav
          aria-label="FAQ topics"
          className="flex flex-wrap justify-center gap-2 mb-14 rv"
        >
          {groups.map((group) => {
            const isHovered = hoveredPill === group.id;
            return (
              <button
                key={group.id}
                type="button"
                onClick={() => scrollToGroup(group.id)}
                onMouseEnter={() => setHoveredPill(group.id)}
                onMouseLeave={() => setHoveredPill(null)}
                className={`text-sm font-medium px-4 py-2 rounded-full border transition-all duration-200 ${
                  isHovered
                    ? "text-white border-transparent -translate-y-0.5"
                    : activeTokens.pill
                }`}
                style={{
                  background: isHovered ? gradientFor(0) : undefined,
                  boxShadow: isHovered
                    ? `0 8px 20px -6px color-mix(in srgb, ${activeTokens.accentHex} 30%, transparent)`
                    : undefined,
                }}
              >
                {group.title}
              </button>
            );
          })}
        </nav>
      )}

      <div className="space-y-14">
        {groups.map((group, groupIndex) => (
          <div key={group.id} id={group.id} className="rv">
            <div className="flex items-center gap-2.5 mb-5">
              <span
                aria-hidden="true"
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: gradientFor(groupIndex) }}
              />
              <h3
                style={{ fontFamily: "'Parkinsans', sans-serif" }}
                className={`text-lg md:text-xl font-semibold ${activeTokens.text}`}
              >
                {group.title}
              </h3>
            </div>

            <div
              className={`rounded-2xl border ${activeTokens.border} ${activeTokens.cardBg} overflow-hidden`}
            >
              {group.items.map((item, itemIndex) => {
                const key = `${group.id}:${item.id}`;
                const open = openKey === key;

                return (
                  <div key={item.id}>
                    {itemIndex > 0 && (
                      <div
                        className={`border-t ${activeTokens.border} mx-5 md:mx-7`}
                      />
                    )}
                    <div
                      id={item.id}
                      itemScope
                      itemType="https://schema.org/Question"
                      className="relative px-5 md:px-7"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-0 bottom-0 w-[3px] origin-top transition-transform duration-300"
                        style={{
                          background: gradientFor(groupIndex),
                          transform: open ? "scaleY(1)" : "scaleY(0)",
                        }}
                      />

                      <button
                        type="button"
                        onClick={() => toggle(key)}
                        aria-expanded={open}
                        aria-controls={`${item.id}-answer`}
                        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                      >
                        <span
                          itemProp="name"
                          className={`font-medium pr-4 transition-colors duration-200 ${activeTokens.text}`}
                        >
                          {item.question}
                        </span>
                        <span
                          aria-hidden="true"
                          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                          style={{
                            background: open
                              ? gradientFor(groupIndex)
                              : `color-mix(in srgb, ${activeTokens.accentHex} 10%, transparent)`,
                            color: open ? "white" : activeTokens.accentHex,
                            transform: open ? "rotate(135deg)" : "rotate(0deg)",
                          }}
                        >
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 14 14"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          >
                            <line x1="7" y1="1" x2="7" y2="13" />
                            <line x1="1" y1="7" x2="13" y2="7" />
                          </svg>
                        </span>
                      </button>

                      <AnimatedAnswer open={open}>
                        <div
                          id={`${item.id}-answer`}
                          itemScope
                          itemProp="acceptedAnswer"
                          itemType="https://schema.org/Answer"
                          className={`pb-6 text-sm leading-relaxed max-w-2xl ${activeTokens.itemDesc}`}
                        >
                          <p itemProp="text">{item.answer}</p>
                        </div>
                      </AnimatedAnswer>
                    </div>
                  </div>
                );
              })}
            </div>

            {group.cta &&
              (group.cta.action === "contact-modal" ? (
                <button
                  type="button"
                  onClick={openContactModal}
                  className={`relative inline-flex items-center gap-1.5 mt-5 ml-1 text-sm font-semibold ${activeTokens.accent} group`}
                >
                  {group.cta.label}
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute left-0 -bottom-0.5 h-[2px] w-0 transition-all duration-300 group-hover:w-full"
                    style={{ background: gradientFor(groupIndex) }}
                  />
                </button>
              ) : (
                <a
                  href={group.cta.href}
                  className={`relative inline-flex items-center gap-1.5 mt-5 ml-1 text-sm font-semibold ${activeTokens.accent} group`}
                >
                  {group.cta.label}
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute left-0 -bottom-0.5 h-[2px] w-0 transition-all duration-300 group-hover:w-full"
                    style={{ background: gradientFor(groupIndex) }}
                  />
                </a>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
