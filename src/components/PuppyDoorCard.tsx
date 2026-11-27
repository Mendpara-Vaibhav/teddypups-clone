"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { Puppy } from "@/data/puppies";

type Props = {
  puppy: Puppy;
  forceOpen?: boolean;
  labelAbove?: boolean;
};

export function PuppyDoorCard({ puppy, forceOpen, labelAbove = false }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [inViewOpen, setInViewOpen] = useState(false);

  useEffect(() => {
    if (forceOpen !== undefined) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInViewOpen(true);
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [forceOpen]);

  const isOpen = forceOpen !== undefined ? forceOpen : inViewOpen;

  const infoBlock = (
    <div className={labelAbove ? "pb-3 px-1" : "pt-3 px-1"}>
      <h3 className="tp-door__name">{puppy.name}</h3>
      <p className="tp-door__meta mt-1">{puppy.metaLine}</p>
    </div>
  );

  return (
    <Link
      ref={ref}
      href={`/puppies/${puppy.slug}`}
      data-open={isOpen ? "true" : "false"}
      className="tp-door__link group w-full"
      style={{ "--door": puppy.doorColor } as CSSProperties}
    >
      {labelAbove && infoBlock}

      <div className="tp-door__arch">
        <span className="tp-door__tag">{puppy.status}</span>
        {puppy.hasVideo && (
          <span className="absolute bottom-3 left-3 z-10 rounded-full border-2 border-cocoa bg-milk/95 px-2.5 py-0.5 text-xs font-semibold text-cocoa">
            ▶ video
          </span>
        )}
        <div className="tp-door__room">
          <Image
            src={puppy.image}
            alt={puppy.name}
            fill
            sizes="(max-width: 768px) 45vw, 260px"
            className="object-cover"
          />
        </div>
        <div className="tp-door__way" aria-hidden="true">
          <div className="tp-door__leaf flex flex-col items-center justify-center">
            {/* Paw Crest & Brass Knob on Door Leaf */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="rgba(42, 23, 14, 0.28)"
              className="-mt-6"
            >
              <circle cx="8" cy="7" r="2.2" />
              <circle cx="16" cy="7" r="2.2" />
              <circle cx="5" cy="12.5" r="2" />
              <circle cx="19" cy="12.5" r="2" />
              <path d="M12 11c-3 0-5.5 2.4-5.5 5 0 2 1.6 3.5 3.5 3.5 1 0 1.5-.4 2-.4s1 .4 2 .4c1.9 0 3.5-1.5 3.5-3.5 0-2.6-2.5-5-5.5-5z" />
            </svg>
            <span className="absolute right-3 top-1/2 h-3.5 w-3.5 rounded-full border-2 border-cocoa bg-honey shadow-[1px_1px_0_0_#2a170e]" />
          </div>
        </div>
      </div>

      {!labelAbove && infoBlock}
    </Link>
  );
}
