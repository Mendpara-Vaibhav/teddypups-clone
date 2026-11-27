"use client";

import { useMemo, useState } from "react";
import { FAQS } from "@/data/faqs";
import { WHATSAPP_URL } from "@/data/navigation";
import { FaqAccordion } from "./FaqAccordion";
import { PupBuddy } from "./PupBuddy";

export function FaqCorkboardClient() {
  const [query, setQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return FAQS;
    return FAQS.filter(
      (item) =>
        item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
    );
  }, [query]);

  const isSearching = query.trim().length > 0;
  const count = filteredFaqs.length;
  const countLabel = isSearching
    ? `${count} ${count === 1 ? "note" : "notes"} found`
    : `${count} notes on the board`;

  const buddyBubble = isSearching || openIndex !== null ? "!" : "?";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
      {/* Left Sticky Sidebar */}
      <aside
        aria-label="Find a question"
        className="tp-notes__side lg:col-span-4 lg:sticky lg:top-[calc(var(--header-h)+2rem)] lg:self-start"
      >
        <div className="tp-board p-6 shadow-[8px_10px_0_0_rgba(42,23,14,0.28)]">
          <p className="font-scrawl text-lg text-toffee-ink mb-2">
            sniff out a question
          </p>

          <div className="relative">
            <input
              type="search"
              aria-label="Search questions"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="delivery, Korea, vaccinated..."
              className="w-full rounded-full border-2 border-cocoa bg-milk pl-4 pr-10 py-2.5 text-sm sm:text-base text-cocoa placeholder:text-cocoa-soft/55 focus:outline-none focus:ring-2 focus:ring-toffee-deep"
            />
            {isSearching && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-honey-soft border border-cocoa text-xs font-bold text-cocoa flex items-center justify-center hover:bg-honey"
              >
                ×
              </button>
            )}
          </div>

          <p
            aria-live="polite"
            className="mt-3 font-scrawl text-sm text-cocoa-soft"
          >
            {countLabel}
          </p>

          <div className="mt-6 flex items-end justify-between gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp text-sm px-4 py-2.5"
            >
              Ask your own question
            </a>

            <div className="shrink-0 -mb-2">
              <PupBuddy
                pose="sit"
                facing="right"
                bubble={buddyBubble}
                className="w-20"
              />
            </div>
          </div>
        </div>
      </aside>

      {/* Right Corkboard Accordion */}
      <div className="lg:col-span-8">
        <FaqAccordion
          mode="corkboard"
          items={filteredFaqs}
          searchQuery={query}
          openIndex={openIndex}
          onToggleIndex={setOpenIndex}
        />
      </div>
    </div>
  );
}
