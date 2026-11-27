"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { FamilyPhoto } from "@/data/families";

type Props = {
  photos: FamilyPhoto[];
  activeIndex: number | null;
  onClose: () => void;
  onChangeIndex: (index: number) => void;
};

export function PhotoLightbox({
  photos,
  activeIndex,
  onClose,
  onChangeIndex,
}: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (activeIndex !== null && !dialog.open) {
      dialog.showModal();
    } else if (activeIndex === null && dialog.open) {
      dialog.close();
    }
  }, [activeIndex]);

  const current = activeIndex !== null ? photos[activeIndex] : null;
  const total = photos.length;

  const handlePrev = () => {
    if (activeIndex === null) return;
    onChangeIndex((activeIndex - 1 + total) % total);
  };

  const handleNext = () => {
    if (activeIndex === null) return;
    onChangeIndex((activeIndex + 1) % total);
  };

  return (
    <dialog
      ref={dialogRef}
      data-lenis-prevent
      aria-label="Photo viewer"
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      className="tp-lightbox"
    >
      {current && activeIndex !== null && (
        <div className="h-dvh w-screen flex flex-col justify-between p-4 sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <span className="font-scrawl text-base sm:text-lg text-honey truncate max-w-[72vw]">
              {activeIndex + 1} / {total}
              {current.caption ? ` — ${current.caption}` : ""}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border-2 border-cocoa bg-milk px-5 py-2 text-sm font-semibold text-cocoa hover:bg-honey transition-colors shrink-0"
            >
              Close
            </button>
          </div>

          <div className="relative flex-1 my-4 flex items-center justify-center">
            <div className="relative w-full max-w-3xl h-full max-h-[70vh]">
              <Image
                src={current.image}
                alt={current.alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            {current.caption && (
              <p className="font-scrawl text-xl text-milk text-center">
                {current.caption}
              </p>
            )}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={handlePrev}
                className="rounded-full border-2 border-milk px-5 py-2 text-sm font-semibold text-milk hover:bg-milk hover:text-cocoa transition-colors"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="rounded-full border-2 border-cocoa bg-honey px-5 py-2 text-sm font-semibold text-cocoa hover:bg-milk transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
