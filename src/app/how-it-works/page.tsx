import type { Metadata } from "next";
import Link from "next/link";
import { HowItWorksTabs } from "@/components/HowItWorksTabs";
import { PupBuddy } from "@/components/PupBuddy";
import {
  DELIVERY_CARDS,
  PROMISE_ITEMS,
  WHY_CHOOSE_ITEMS,
} from "@/data/howItWorks";
import { WHATSAPP_URL } from "@/data/navigation";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "How TeddyPups U.A.E. works: meet teacup puppies in our Downtown Dubai showroom or order rare breeds imported safely from Korea and Europe.",
};

const ANCHOR_PILLS = [
  { num: "1", label: "Two ways home", href: "#ways" },
  { num: "2", label: "Our premium puppy promise", href: "#promise" },
  { num: "3", label: "Delivery & collection", href: "#delivery" },
  { num: "4", label: "Why choose us", href: "#why" },
];

export default function HowItWorksPage() {
  return (
    <div
      className="tp-scene pt-[calc(var(--header-h)+2.75rem)] pb-24"
      style={{
        background: "linear-gradient(to bottom, #fffbf3, #f6cc85)",
      }}
    >
      <div className="tp-gutter max-w-6xl mx-auto">
        {/* Hero */}
        <header className="max-w-3xl mb-10">
          <p className="font-scrawl text-xl text-toffee-ink mb-2">
            from hello to home
          </p>
          <h1 className="text-huge text-cocoa">How it works</h1>
          <p className="mt-5 text-lg text-cocoa-soft leading-relaxed">
            Whether you choose to visit us locally or order a premium breed from
            overseas, TeddyPups is here to make the experience unforgettable.
          </p>

          <nav
            aria-label="Page sections"
            className="mt-7 flex flex-wrap gap-2.5"
          >
            {ANCHOR_PILLS.map((pill) => (
              <a
                key={pill.href}
                href={pill.href}
                className="inline-flex items-center gap-2 rounded-full border-2 border-cocoa bg-milk px-4 py-1.5 text-sm font-semibold text-cocoa shadow-[2px_3px_0_0_rgba(42,23,14,0.16)] hover:bg-honey-soft transition-colors no-underline"
              >
                <span className="font-scrawl text-toffee-ink">{pill.num}</span>
                <span>{pill.label}</span>
              </a>
            ))}
          </nav>
        </header>

        {/* Section 1: Interactive Two Ways Tabs */}
        <HowItWorksTabs />

        {/* Section 2: Our Premium Puppy Promise */}
        <section id="promise" aria-labelledby="promise-title" className="mt-20">
          <div className="relative tp-board p-7 sm:p-11 shadow-[8px_10px_0_0_rgba(42,23,14,0.18)] overflow-hidden">
            {/* Guilloche circular security watermark */}
            <svg
              aria-hidden="true"
              viewBox="0 0 260 260"
              className="pointer-events-none absolute -right-10 -top-10 w-64 h-64 text-toffee/10"
              fill="none"
            >
              <circle
                cx="130"
                cy="130"
                r="110"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              <circle
                cx="130"
                cy="130"
                r="82"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle
                cx="130"
                cy="130"
                r="52"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </svg>

            <p className="font-scrawl text-lg text-toffee-ink mb-2">
              puppy passport
            </p>
            <h2
              id="promise-title"
              className="font-plush text-3xl sm:text-5xl text-cocoa mb-8"
            >
              Our premium puppy promise
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PROMISE_ITEMS.map((item, idx) => (
                <div
                  key={item.title}
                  className={`rounded-2xl border-2 border-dashed border-cocoa p-6 ${
                    idx === 0
                      ? "bg-honey-soft -rotate-1"
                      : idx === 1
                        ? "bg-sky rotate-1"
                        : "bg-blush -rotate-1"
                  }`}
                >
                  <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-cocoa bg-milk text-toffee-deep">
                    {idx === 0 ? "♥" : idx === 1 ? "✈" : "💬"}
                  </div>
                  <h3 className="font-plush text-2xl text-cocoa">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-cocoa-soft leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Delivery & Collection (#delivery) */}
        <section
          id="delivery"
          aria-labelledby="delivery-title"
          className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
        >
          <div className="lg:col-span-7">
            <p className="font-scrawl text-lg text-toffee-ink mb-2">
              safe arrival
            </p>
            <h2
              id="delivery-title"
              className="font-plush text-4xl sm:text-5xl text-cocoa mb-8"
            >
              Delivery &amp; collection
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {DELIVERY_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="tp-board p-5 shadow-[5px_6px_0_0_rgba(42,23,14,0.14)]"
                >
                  <h3 className="font-plush text-xl text-cocoa">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-cocoa-soft leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="tp-board p-6 bg-sky/70 shadow-[8px_10px_0_0_rgba(42,23,14,0.16)]">
              <svg
                viewBox="0 0 380 230"
                fill="none"
                className="w-full h-auto"
                aria-label="A plane flying puppies from Korea to Dubai"
              >
                <path
                  d="M42 175 C 125 45, 255 40, 338 145"
                  stroke="#2a170e"
                  strokeWidth="3.5"
                  strokeDasharray="6 10"
                  strokeLinecap="round"
                />
                <circle
                  cx="42"
                  cy="175"
                  r="8"
                  fill="#a24a1a"
                  stroke="#2a170e"
                  strokeWidth="2.5"
                />
                <text
                  x="22"
                  y="206"
                  className="font-scrawl text-[18px]"
                  fill="#2a170e"
                >
                  Korea
                </text>
                <circle
                  cx="338"
                  cy="145"
                  r="8"
                  fill="#1f7a4d"
                  stroke="#2a170e"
                  strokeWidth="2.5"
                />
                <text
                  x="306"
                  y="206"
                  className="font-scrawl text-[18px]"
                  fill="#2a170e"
                >
                  Dubai
                </text>
                <path
                  d="M270 185 V158 h18 V140 h14 v45 h16 V110 l4 24 h4 v51 h24 V152 h18 v33 H270 Z"
                  fill="#e4a85b"
                  stroke="#2a170e"
                  strokeWidth="2"
                />
                <g transform="translate(185 68) rotate(-4)">
                  <path
                    d="M-30 -9 H22 C35 -9, 44 -3, 44 2 C44 7, 35 9, 22 9 H-30 L-42 -7 L-32 -7 Z"
                    fill="#fffdf8"
                    stroke="#2a170e"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M-4 -9 L9 -26 L18 -26 L9 -9 Z"
                    fill="#f2be6b"
                    stroke="#2a170e"
                    strokeWidth="2"
                  />
                </g>
              </svg>
            </div>
          </div>
        </section>

        {/* Section 4: Why Choose Us (#why) */}
        <section
          id="why"
          aria-labelledby="why-title"
          className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
        >
          <div className="lg:col-span-5">
            <p className="font-scrawl text-lg text-toffee-ink mb-2">
              trusted by families
            </p>
            <h2
              id="why-title"
              className="font-plush text-4xl sm:text-5xl text-cocoa"
            >
              Why choose us
            </h2>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-5">
            {WHY_CHOOSE_ITEMS.map((item, idx) => (
              <div
                key={item.title}
                className="tp-board p-6 flex items-start gap-4 shadow-[5px_6px_0_0_rgba(42,23,14,0.14)]"
              >
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-cocoa bg-honey-soft text-lg text-toffee-deep"
                >
                  {idx === 0 ? "✈" : idx === 1 ? "💬" : "♥"}
                </span>
                <div>
                  <h3 className="font-plush text-2xl text-cocoa">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-cocoa-soft leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Board */}
        <section className="tp-board mt-20 p-7 sm:p-12 grid items-center gap-8 md:grid-cols-[1fr_auto] shadow-[8px_10px_0_0_rgba(42,23,14,0.18)]">
          <div>
            <h2 className="font-plush text-3xl sm:text-5xl text-cocoa">
              Unique and high quality puppies
            </h2>
            <p className="mt-3 text-cocoa-soft text-lg max-w-2xl">
              Have a breed in mind or want to see who is available right now?
              Explore our current puppies or chat with our concierge team.
            </p>
            <div className="mt-6 flex flex-wrap gap-3.5">
              <Link href="/puppies" className="btn btn-primary">
                Browse all puppies
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                WhatsApp us
              </a>
            </div>
          </div>

          <div className="justify-self-center md:justify-self-end">
            <PupBuddy pose="stand" facing="left" className="w-28" />
          </div>
        </section>
      </div>
    </div>
  );
}
