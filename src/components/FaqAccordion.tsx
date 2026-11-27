"use client";

import Link from "next/link";
import { Fragment, useState } from "react";
import { FAQS, type FaqItem } from "@/data/faqs";
import { WHATSAPP_URL } from "@/data/navigation";
import { PupBuddy } from "./PupBuddy";

type Props = {
  mode?: "home" | "corkboard";
  items?: FaqItem[];
  searchQuery?: string;
  openIndex?: number | null;
  onToggleIndex?: (idx: number | null) => void;
};

const PIN_COLORS = [
  "bg-toffee-deep",
  "bg-sky-deep",
  "bg-honey",
  "bg-wa-green",
];

const STARS = [
  { top: "12%", left: "8%", delay: "0s", size: 16 },
  { top: "24%", left: "42%", delay: "0.9s", size: 12 },
  { top: "16%", right: "12%", delay: "1.6s", size: 18 },
  { top: "68%", left: "18%", delay: "0.5s", size: 14 },
  { top: "74%", right: "10%", delay: "1.3s", size: 12 },
];

function HighlightText({ text, query }: { text: string; query: string }) {
  const q = query.trim();
  if (!q) return <>{text}</>;
  const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escaped})`, "gi"));
  return (
    <>
      {parts.map((part, idx) =>
        part.toLowerCase() === q.toLowerCase() ? (
          <mark
            key={idx}
            className="rounded bg-honey px-0.5 text-cocoa font-semibold"
          >
            {part}
          </mark>
        ) : (
          <Fragment key={idx}>{part}</Fragment>
        )
      )}
    </>
  );
}

export function FaqAccordion({
  mode = "home",
  items = FAQS,
  searchQuery = "",
  openIndex: controlledOpenIndex,
  onToggleIndex,
}: Props) {
  const [internalOpenIndex, setInternalOpenIndex] = useState<number | null>(0);
  const openIndex =
    controlledOpenIndex !== undefined ? controlledOpenIndex : internalOpenIndex;

  const setOpen = (next: number | null) => {
    if (onToggleIndex) onToggleIndex(next);
    else setInternalOpenIndex(next);
  };

  if (mode === "home") {
    const homeItems = items.slice(0, 3);
    return (
      <section
        data-tone="dark"
        className="tp-scene py-20 text-milk relative overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, #4d2b19, #2f1a10)",
        }}
      >
        {/* Twinkling 4-point gold stars */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          {STARS.map((st, idx) => (
            <svg
              key={idx}
              width={st.size}
              height={st.size}
              viewBox="0 0 24 24"
              fill="#f2be6b"
              className="tp-twinkle absolute opacity-75"
              style={{
                top: st.top,
                left: st.left,
                right: st.right,
                animationDelay: st.delay,
              }}
            >
              <path d="M12 0c1.2 7.2 4.8 10.8 12 12-7.2 1.2-10.8 4.8-12 12-1.2-7.2-4.8-10.8-12-12 7.2-1.2 10.8-4.8 12-12z" />
            </svg>
          ))}
        </div>

        <div className="tp-gutter max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
          <div className="lg:col-span-5 min-w-0">
            <h2 className="font-plush text-[clamp(2.4rem,4.6vw,4.5rem)] leading-[0.95] text-milk">
              Questions, answered
            </h2>
            <div className="mt-8 flex items-center gap-6">
              <Link href="/faq" className="btn btn-ghost-light">
                Read all questions
              </Link>
              <div className="hidden sm:block">
                <PupBuddy pose="stand" facing="right" className="w-20" />
              </div>
            </div>
          </div>

          <dl className="lg:col-span-7 flex flex-col gap-8">
            {homeItems.map((item) => (
              <div
                key={item.q}
                className="border-b border-milk/20 pb-7 last:border-b-0"
              >
                <dt className="tp-qa__q text-milk">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#f2be6b"
                    aria-hidden="true"
                    className="shrink-0 mt-1.5"
                  >
                    <path d="M12 0c1.2 7.2 4.8 10.8 12 12-7.2 1.2-10.8 4.8-12 12-1.2-7.2-4.8-10.8-12-12 7.2-1.2 10.8-4.8 12-12z" />
                  </svg>
                  <span>{item.q}</span>
                </dt>
                <dd className="mt-3 pl-8 text-milk/85 leading-relaxed">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    );
  }

  const isSearching = searchQuery.trim().length > 0;

  return (
    <div className="tp-corkboard p-5 sm:p-8">
      {items.length === 0 ? (
        <div className="relative rounded-2xl border-2 border-cocoa bg-milk p-6 sm:p-8 shadow-[4px_6px_0_0_rgba(42,23,14,0.2)] text-center">
          <span
            aria-hidden="true"
            className="absolute -top-2 left-1/2 -translate-x-1/2 h-4 w-4 rounded-full border-2 border-cocoa bg-toffee-deep"
          />
          <p className="font-plush text-xl sm:text-2xl text-cocoa">
            No note about &ldquo;{searchQuery.trim()}&rdquo; yet.
          </p>
          <p className="mt-2 text-cocoa-soft">
            Ask us on WhatsApp and we&apos;ll answer right away.
          </p>
          <div className="mt-5">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          {items.map((item, idx) => {
            const isOpen = isSearching || openIndex === idx;
            const noteTilt = idx % 2 === 0 ? "md:-rotate-[0.4deg]" : "md:rotate-[0.4deg]";

            return (
              <article
                key={item.q}
                className={`relative rounded-2xl border-2 border-cocoa bg-milk p-5 sm:p-6 shadow-[4px_6px_0_0_rgba(42,23,14,0.2)] transition-transform ${noteTilt}`}
              >
                {/* Colored pushpin */}
                <span
                  aria-hidden="true"
                  className={`absolute -top-2.5 left-7 h-5 w-5 rounded-full border-2 border-cocoa shadow-[1px_2px_0_0_rgba(42,23,14,0.3)] ${
                    PIN_COLORS[idx % PIN_COLORS.length]
                  }`}
                />

                {/* Bottom-right dog-ear corner */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-t-2 border-l-2 border-cocoa/35 bg-honey-soft/75 rounded-tl-md"
                />

                <h2 className="tp-note__q">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => {
                      if (isSearching) return;
                      setOpen(isOpen ? null : idx);
                    }}
                    className="w-full flex items-center justify-between gap-4 text-left"
                  >
                    <span className="tp-qa__q text-cocoa">
                      <HighlightText text={item.q} query={searchQuery} />
                    </span>
                    <span
                      aria-hidden="true"
                      className={`shrink-0 h-8 w-8 rounded-full border-2 border-cocoa bg-honey-soft flex items-center justify-center text-cocoa transition-transform duration-250 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 6l4 4 4-4" />
                      </svg>
                    </span>
                  </button>
                </h2>

                <div
                  className={`grid transition-[grid-template-rows] duration-250 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pt-3 pr-4 text-cocoa-soft leading-relaxed">
                      <HighlightText text={item.a} query={searchQuery} />
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
