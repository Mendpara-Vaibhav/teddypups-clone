"use client";

import Image from "next/image";
import { useState } from "react";
import { FAMILY_PHOTOS } from "@/data/families";
import { PhotoLightbox } from "./PhotoLightbox";

const ROTATIONS = [
  "-rotate-2",
  "rotate-1",
  "-rotate-1",
  "rotate-2",
  "-rotate-[1.5deg]",
  "rotate-[1.5deg]",
];

const TAPE_STYLES = [
  "left-1/2 -translate-x-1/2 -top-2.5 w-14 h-5 bg-sky/85 -rotate-2",
  "left-3 -top-2.5 w-12 h-4 bg-honey-soft/95 -rotate-12",
  "right-3 -top-2.5 w-12 h-4 bg-blush/90 rotate-12",
  "left-1/2 -translate-x-1/2 -top-2.5 w-14 h-5 bg-honey/80 rotate-2",
];

export function HappyFamiliesWall() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-7">
        {FAMILY_PHOTOS.map((photo, idx) => (
          <li
            key={photo.id}
            className="tp-wall__item"
            style={{ "--d": `${Math.min(idx, 12) * 35}ms` } as React.CSSProperties}
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(idx)}
              className={`tp-wall__print group relative flex flex-col w-full bg-milk text-cocoa p-2.5 pb-4 rounded-sm border-2 border-cocoa shadow-[4px_6px_0_0_rgba(42,23,14,0.2)] text-left transition-transform duration-300 hover:scale-[1.03] hover:rotate-0 ${
                ROTATIONS[idx % ROTATIONS.length]
              }`}
            >
              <span
                aria-hidden="true"
                className={`absolute border border-cocoa/50 pointer-events-none ${
                  TAPE_STYLES[idx % TAPE_STYLES.length]
                }`}
              />
              <div className="relative aspect-square w-full overflow-hidden bg-honey-soft border border-cocoa/25">
                <Image
                  src={photo.image}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 45vw, 260px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              {photo.caption ? (
                <p className="mt-2.5 font-scrawl text-xs sm:text-sm text-cocoa text-center truncate px-1">
                  {photo.caption}
                </p>
              ) : (
                <span className="mt-2.5 h-4 block" aria-hidden="true" />
              )}
            </button>
          </li>
        ))}
      </ul>

      <PhotoLightbox
        photos={FAMILY_PHOTOS}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChangeIndex={setLightboxIndex}
      />
    </>
  );
}
