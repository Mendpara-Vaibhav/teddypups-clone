import type { Metadata } from "next";
import Link from "next/link";
import { GoneHomeTicket } from "@/components/GoneHomeTicket";
import { GONE_HOME_PUPPIES } from "@/data/puppies";

export const metadata: Metadata = {
  title: "Gone home",
  description:
    "27 TeddyPups puppies who have already found their loving families in Dubai and worldwide.",
};

export default function GoneHomePage() {
  return (
    <div
      className="tp-scene pt-[calc(var(--header-h)+2.5rem)] pb-24"
      style={{
        background: "linear-gradient(to bottom, #fffdf8, #fff1d8, #fbe3b4)",
      }}
    >
      <div className="tp-gutter max-w-6xl mx-auto">
        {/* Hero */}
        <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4">
              <h1 className="text-huge text-cocoa">Gone home</h1>
              <svg
                width="46"
                height="42"
                viewBox="0 0 46 42"
                fill="none"
                aria-hidden="true"
                className="shrink-0 text-toffee-deep mt-2"
              >
                <path
                  d="M23 38C23 38 5 26.5 5 14C5 8.5 9.2 4 14.5 4C18.1 4 21.2 6 23 9.1C24.8 6 27.9 4 31.5 4C36.8 4 41 8.5 41 14C41 26.5 23 38 23 38Z"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p className="mt-5 text-lg text-cocoa-soft leading-relaxed">
              Every puppy here has already joined a loving family. Looking for
              one just like them? Tell us — we&apos;ll help you find your match.
            </p>

            <div className="mt-7">
              <Link href="/puppies" className="btn btn-primary">
                See available puppies
              </Link>
            </div>
          </div>

          {/* Mascot sign */}
          <div className="flex items-center gap-3 self-start lg:self-auto">
            <div className="flex items-center gap-3 rounded-2xl border-[3px] border-cocoa bg-milk px-5 py-3 shadow-[5px_7px_0_0_rgba(42,23,14,0.16)] rotate-2">
              <svg
                width="44"
                height="44"
                viewBox="0 0 72 72"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="20"
                  cy="22"
                  r="8"
                  fill="#e4a85b"
                  stroke="#2a170e"
                  strokeWidth="2.5"
                />
                <circle
                  cx="52"
                  cy="22"
                  r="8"
                  fill="#e4a85b"
                  stroke="#2a170e"
                  strokeWidth="2.5"
                />
                <circle
                  cx="36"
                  cy="38"
                  r="20"
                  fill="#f2be6b"
                  stroke="#2a170e"
                  strokeWidth="2.5"
                />
                <circle cx="29" cy="35" r="2.2" fill="#2a170e" />
                <circle cx="43" cy="35" r="2.2" fill="#2a170e" />
                <ellipse cx="36" cy="42" rx="3.2" ry="2.2" fill="#2a170e" />
              </svg>
              <span className="font-scrawl text-base text-toffee-ink">
                tickets home
              </span>
            </div>
          </div>
        </header>

        {/* Boarding-pass Grid (27 puppies) */}
        <section aria-label="Puppies who have gone home">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GONE_HOME_PUPPIES.map((puppy, idx) => (
              <GoneHomeTicket key={puppy.slug} puppy={puppy} index={idx} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
