import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { PupBuddy } from "@/components/PupBuddy";
import { PuppyCatalogFilter } from "@/components/PuppyCatalogFilter";
import { GONE_HOME_PUPPIES } from "@/data/puppies";

export const metadata: Metadata = {
  title: "Available puppies",
  description:
    "Browse available Maltipoo, Pomeranian, Poodle, Cavapoo, and Shih Tzu teacup puppies in Dubai or imported for you.",
};

const GONE_HOME_PREVIEW = GONE_HOME_PUPPIES.slice(0, 5);

export default function PuppiesPage() {
  return (
    <div className="tp-scene tp-sketchbook pt-[calc(var(--header-h)+2.75rem)] pb-0">
      <div className="tp-gutter max-w-6xl mx-auto pb-16">
        {/* Sketchbook Hero */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <p className="font-scrawl text-xl text-toffee-ink mb-2">
              from Teddy&apos;s sketchbook
            </p>
            <div className="inline-block relative">
              <h1 className="text-huge text-cocoa">Available puppies</h1>
              <svg
                aria-hidden="true"
                viewBox="0 0 380 18"
                className="w-full h-4 text-toffee mt-1"
                fill="none"
              >
                <path
                  d="M4 12 C 95 2, 245 3, 374 11"
                  stroke="currentColor"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Circular "self-portrait" medallion with articulated PupBuddy */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <div className="relative flex flex-col items-center">
              <div className="h-28 w-28 sm:h-32 sm:w-32 rounded-full border-[3px] border-cocoa bg-honey-soft flex items-center justify-center overflow-hidden shadow-[5px_7px_0_0_rgba(42,23,14,0.16)] -rotate-3">
                <PupBuddy
                  pose="stand"
                  facing="front"
                  className="w-24 sm:w-28 mt-2"
                />
              </div>
              <span className="-mt-3 relative z-10 rounded-full border-2 border-cocoa bg-milk px-3 py-0.5 font-scrawl text-xs text-toffee-ink shadow-[2px_3px_0_0_rgba(42,23,14,0.16)] rotate-2">
                self-portrait
              </span>
            </div>
          </div>
        </header>

        {/* Filterable Catalog */}
        <Suspense
          fallback={
            <div className="tp-board p-8 text-center font-scrawl text-toffee-ink">
              Loading puppies...
            </div>
          }
        >
          <PuppyCatalogFilter />
        </Suspense>
      </div>

      {/* Honey-tinted "Already gone home" band */}
      <section
        aria-labelledby="gone-home-preview-title"
        className="mt-8 py-16 border-t-[3px] border-cocoa"
        style={{
          background: "linear-gradient(to bottom, #fbe3b4, #f7d18d)",
        }}
      >
        <div className="tp-gutter max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="font-scrawl text-lg text-toffee-ink mb-1">
                happy endings
              </p>
              <h2 id="gone-home-preview-title" className="text-huge text-cocoa">
                Already gone home
              </h2>
            </div>
            <Link
              href="/gone-home"
              className="btn btn-ghost self-start sm:self-auto"
            >
              See the puppies who&apos;ve gone home
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {GONE_HOME_PREVIEW.map((pup, idx) => (
              <Link
                key={pup.slug}
                href="/gone-home"
                className="group flex flex-col items-center text-center no-underline text-cocoa"
              >
                <div className="relative">
                  <span
                    className={`absolute -top-2 right-0 z-10 rounded-full border-2 border-cocoa bg-milk px-2.5 py-0.5 font-scrawl text-xs text-toffee-ink shadow-[2px_3px_0_0_rgba(42,23,14,0.18)] ${
                      idx % 2 === 0 ? "rotate-6" : "-rotate-6"
                    }`}
                  >
                    gone home ♥
                  </span>
                  <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full border-[3px] border-cocoa overflow-hidden bg-milk shadow-[4px_6px_0_0_rgba(42,23,14,0.18)] transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-105">
                    <Image
                      src={pup.image}
                      alt={`${pup.name} — ${pup.breed}`}
                      fill
                      sizes="150px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <span className="mt-3 font-plush text-lg text-cocoa">
                  {pup.name}
                </span>
                <span className="text-sm text-cocoa-soft">
                  {pup.breed} · {pup.gender}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
