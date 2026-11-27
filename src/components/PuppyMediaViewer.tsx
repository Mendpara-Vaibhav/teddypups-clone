"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type MediaSlide =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; alt: string };

type Props = {
  name: string;
  image: string;
  videoUrl?: string;
};

export function PuppyMediaViewer({ name, image, videoUrl }: Props) {
  const slides: MediaSlide[] = [
    { type: "image", src: image, alt: name },
    ...(videoUrl
      ? [{ type: "video" as const, src: videoUrl, alt: `${name} video` }]
      : []),
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const total = slides.length;
  const current = slides[activeIndex] ?? slides[0];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const openFullscreen = () => {
    setIsFullscreen(true);
    dialogRef.current?.showModal();
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    dialogRef.current?.close();
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="relative tp-board overflow-hidden p-3 sm:p-4 shadow-[8px_10px_0_0_rgba(42,23,14,0.16)]">
        {/* Main media frame */}
        <div className="relative aspect-[4/5] w-full rounded-2xl border-2 border-cocoa overflow-hidden bg-honey-soft flex items-center justify-center">
          {current.type === "image" ? (
            <Image
              src={current.src}
              alt={current.alt}
              fill
              sizes="(max-width: 1024px) 95vw, 560px"
              className="object-cover"
              priority
            />
          ) : (
            <video
              key={current.src}
              src={current.src}
              controls
              playsInline
              poster={image}
              className="w-full h-full object-cover bg-night"
            />
          )}

          {/* Top-right fullscreen trigger */}
          <button
            type="button"
            onClick={openFullscreen}
            className="absolute top-3 right-3 z-10 rounded-full border-2 border-cocoa bg-milk/95 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-cocoa shadow-[2px_3px_0_0_rgba(42,23,14,0.2)] hover:bg-honey-soft transition-colors"
          >
            Open full screen
          </button>
        </div>

        {/* Viewer controls bar */}
        <div className="mt-4 flex items-center justify-between gap-3 px-1">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              disabled={total <= 1}
              className="rounded-full border-2 border-cocoa bg-milk px-4 py-1.5 text-sm font-semibold text-cocoa disabled:opacity-45 hover:bg-honey-soft transition-colors"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={total <= 1}
              className="rounded-full border-2 border-cocoa bg-milk px-4 py-1.5 text-sm font-semibold text-cocoa disabled:opacity-45 hover:bg-honey-soft transition-colors"
            >
              Next
            </button>
          </div>

          <span className="font-scrawl text-base text-toffee-ink">
            {activeIndex + 1} / {total}
          </span>
        </div>
      </div>

      {/* Thumbnail strip when multiple slides exist */}
      {total > 1 && (
        <div className="flex items-center gap-3">
          {slides.map((slide, idx) => {
            const active = idx === activeIndex;
            return (
              <button
                key={`${slide.type}-${idx}`}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`View ${slide.type} ${idx + 1}`}
                aria-pressed={active}
                className={`relative h-20 w-20 rounded-xl border-2 overflow-hidden transition-transform ${
                  active
                    ? "border-toffee-deep scale-105 shadow-[3px_4px_0_0_#2a170e]"
                    : "border-cocoa opacity-80 hover:opacity-100"
                }`}
              >
                <Image
                  src={image}
                  alt={slide.alt}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
                {slide.type === "video" && (
                  <span className="absolute inset-0 flex items-center justify-center bg-cocoa/45 text-milk font-semibold text-xs">
                    ▶ Video
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Fullscreen native dialog */}
      <dialog
        ref={dialogRef}
        aria-label={`${name} full screen media viewer`}
        onCancel={(e) => {
          e.preventDefault();
          closeFullscreen();
        }}
        className="tp-lightbox"
      >
        {isFullscreen && (
          <div className="h-dvh w-screen flex flex-col justify-between p-4 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <span className="font-scrawl text-lg text-honey">
                {activeIndex + 1} / {total} — {name}
              </span>
              <button
                type="button"
                onClick={closeFullscreen}
                className="rounded-full border-2 border-milk bg-cocoa px-5 py-2 text-sm font-semibold text-milk hover:bg-milk hover:text-cocoa transition-colors"
              >
                Close
              </button>
            </div>

            <div className="relative flex-1 my-4 flex items-center justify-center">
              {current.type === "image" ? (
                <div className="relative w-full max-w-3xl h-full max-h-[72vh]">
                  <Image
                    src={current.src}
                    alt={current.alt}
                    fill
                    sizes="95vw"
                    className="object-contain"
                  />
                </div>
              ) : (
                <video
                  key={`fs-${current.src}`}
                  src={current.src}
                  controls
                  autoPlay
                  playsInline
                  poster={image}
                  className="max-h-[72vh] max-w-full rounded-2xl border-2 border-milk bg-night"
                />
              )}
            </div>

            <div className="flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={handlePrev}
                disabled={total <= 1}
                className="rounded-full border-2 border-milk px-5 py-2 text-sm font-semibold text-milk disabled:opacity-40 hover:bg-milk hover:text-cocoa transition-colors"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={total <= 1}
                className="rounded-full border-2 border-milk px-5 py-2 text-sm font-semibold text-milk disabled:opacity-40 hover:bg-milk hover:text-cocoa transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}
