import type { Metadata } from "next";
import { HappyFamiliesWall } from "@/components/HappyFamiliesWall";
import { PupBuddy } from "@/components/PupBuddy";
import { FAMILY_PHOTOS, TESTIMONIALS } from "@/data/families";

export const metadata: Metadata = {
  title: "Happy families",
  description:
    "64 heartwarming moments shared by TeddyPups families who welcomed a teacup puppy into their homes.",
};

export default function HappyFamiliesPage() {
  const testimonial = TESTIMONIALS[0];

  return (
    <div className="tp-scene tp-memories pt-[calc(var(--header-h)+2.75rem)] pb-0">
      <div className="tp-gutter max-w-6xl mx-auto pb-16">
        {/* Hero 2-col */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
          <div className="lg:col-span-6">
            <p className="font-scrawl text-xl text-toffee-ink mb-2">
              our wall of happy endings
            </p>
            <div className="flex items-center gap-3.5">
              <h1 className="text-huge text-cocoa">Happy families</h1>
              <svg
                width="44"
                height="40"
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
            <p className="mt-5 text-lg text-cocoa-soft leading-relaxed max-w-xl">
              Nothing makes us happier than seeing our puppies in loving homes!
              Here are some beautiful moments shared by our amazing clients
              after welcoming their furry friends.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border-2 border-cocoa bg-milk px-4 py-1.5 font-scrawl text-base text-toffee-ink shadow-[3px_4px_0_0_rgba(42,23,14,0.14)]">
              {FAMILY_PHOTOS.length} moments and counting
            </p>
          </div>

          <div className="lg:col-span-6">
            <blockquote className="tp-ruled relative text-cocoa border-[3px] border-cocoa rounded-2xl p-6 sm:p-8 rotate-1 shadow-[8px_10px_0_0_rgba(42,23,14,0.18)]">
              <span
                aria-hidden="true"
                className="absolute -top-3 left-1/2 -translate-x-1/2 h-6 w-24 bg-sky/85 border-2 border-cocoa -rotate-2"
              />
              <p className="font-plush-text text-lg sm:text-xl leading-[1.9rem]">
                “{testimonial.quote}”
              </p>
              <footer className="mt-4 font-scrawl text-lg text-toffee-ink">
                — {testimonial.author}
              </footer>
            </blockquote>
          </div>
        </header>

        {/* Full 64-photo Polaroid Wall */}
        <section aria-label="Happy families photo gallery">
          <HappyFamiliesWall />
        </section>

        {/* Bottom PupBuddy */}
        <div className="mt-16 pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <PupBuddy pose="sit" facing="right" className="w-24 sm:w-28" />
          <p className="font-scrawl text-xl text-toffee-ink">
            every one of them was a Teddy Pup once
          </p>
        </div>
      </div>
    </div>
  );
}
