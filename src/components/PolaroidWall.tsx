"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FAMILY_PHOTOS, HOME_WALL_PHOTOS, TESTIMONIALS } from "@/data/families";
import { PhotoLightbox } from "./PhotoLightbox";
import { PupBuddy } from "./PupBuddy";

const ROTATIONS = [
  "-rotate-2",
  "rotate-1",
  "-rotate-1",
  "rotate-2",
];

export function PolaroidWall() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const testimonial = TESTIMONIALS[0];

  return (
    <section
      data-tone="dark"
      className="tp-scene tp-dusk pt-20 pb-0 text-milk"
      style={{
        background: "linear-gradient(to bottom, #a65a30, #4d2b19)",
      }}
    >
      <div className="tp-gutter max-w-6xl mx-auto">
        {/* Top 2-column intro + Sarah M. quote card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
          <div className="lg:col-span-6" data-reveal="">
            <h2 className="text-huge text-milk">Happy families &amp; puppies</h2>
            <p className="mt-5 text-milk/85 text-lg max-w-xl">
              We are truly honored to see our puppies become cherished members
              of loving families. These heartwarming moments have been shared by
              our valued clients who welcomed a Teddy Pup into their homes and
              hearts.
            </p>
          </div>

          <div className="lg:col-span-6" data-reveal="">
            <blockquote className="relative bg-milk text-cocoa border-[3px] border-cocoa rounded-2xl p-6 sm:p-8 rotate-1 shadow-[8px_10px_0_0_rgba(42,23,14,0.35)]">
              <span
                aria-hidden="true"
                className="absolute -top-3 left-1/2 -translate-x-1/2 h-6 w-20 bg-honey/85 border-2 border-cocoa rotate-[-2deg]"
              />
              <p className="font-plush-text text-lg sm:text-xl leading-relaxed">
                “{testimonial.quote}”
              </p>
              <footer className="mt-4 font-scrawl text-lg text-toffee-ink">
                — {testimonial.author}
              </footer>
            </blockquote>
          </div>
        </div>

        {/* Wood-plank siding wall of Polaroid cards */}
        <div
          className="relative rounded-3xl border-[3px] border-cocoa p-5 sm:p-8 shadow-[0_12px_0_0_rgba(42,23,14,0.35)]"
          style={{
            background:
              "repeating-linear-gradient(180deg, #6c3e24 0 38px, #58301a 38px 42px, #77462a 42px 80px, #2a170e 80px 83px)",
          }}
        >
          {/* Sitting PupBuddy perched at top-right of the Polaroid wall */}
          <div className="hidden sm:block absolute -top-20 right-8 z-20">
            <PupBuddy pose="sit" facing="left" className="w-24" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {HOME_WALL_PHOTOS.map((photo, idx) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setLightboxIndex(idx)}
                className={`group relative flex flex-col w-full bg-milk text-cocoa p-2.5 pb-4 rounded-sm border-2 border-cocoa shadow-[4px_6px_0_0_rgba(42,23,14,0.28)] text-left transition-transform duration-300 hover:scale-[1.04] hover:rotate-0 ${
                  ROTATIONS[idx % ROTATIONS.length]
                }`}
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-2.5 left-1/2 -translate-x-1/2 h-4 w-12 bg-honey-soft/90 border border-cocoa/60"
                />
                <div className="relative aspect-square w-full overflow-hidden bg-honey-soft border border-cocoa/30">
                  <Image
                    src={photo.image}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 45vw, 240px"
                    className="object-cover"
                  />
                </div>
                {photo.caption && (
                  <p className="mt-2 font-scrawl text-xs sm:text-sm text-cocoa text-center truncate">
                    {photo.caption}
                  </p>
                )}
              </button>
            ))}
          </div>

          {/* Dusk streetlamp + Double wooden door CTA architectural sill */}
          <div className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div
              aria-hidden="true"
              className="hidden sm:flex items-end gap-2 text-honey"
            >
              <svg width="34" height="52" viewBox="0 0 34 52" fill="none">
                <circle
                  cx="17"
                  cy="14"
                  r="11"
                  fill="rgba(242,190,107,0.35)"
                />
                <path
                  d="M11 10 h12 l-2 10 h-8 z"
                  fill="#f2be6b"
                  stroke="#2a170e"
                  strokeWidth="2"
                />
                <rect
                  x="15"
                  y="20"
                  width="4"
                  height="30"
                  fill="#2a170e"
                />
              </svg>
            </div>
            <Link href="/happy-families" className="btn btn-primary">
              See every happy family
            </Link>
          </div>
        </div>
      </div>

      {/* Dusk Brick Pavement strip */}
      <div
        aria-hidden="true"
        className="mt-14 h-7 w-full border-t-[3px] border-cocoa"
        style={{
          background:
            "repeating-linear-gradient(90deg, #5a3a28 0 46px, #2a170e 46px 49px, #77462a 49px 95px, #2a170e 95px 98px)",
        }}
      />

      <PhotoLightbox
        photos={FAMILY_PHOTOS}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChangeIndex={setLightboxIndex}
      />
    </section>
  );
}
