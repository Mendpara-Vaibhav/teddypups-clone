"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { AVAILABLE_PUPPIES, type Puppy } from "@/data/puppies";
import { PupBuddy } from "./PupBuddy";

const SEAT_SPECS = [
  { w: 8.6, k: 0.72, tilt: -5 },
  { w: 10.4, k: 0.9, tilt: 3 },
  { w: 9.2, k: 0.8, tilt: -2 },
  { w: 9.4, k: 0.84, tilt: 3 },
  { w: 10.6, k: 0.92, tilt: -3 },
  { w: 8.4, k: 0.7, tilt: 4 },
] as const;

const SWAP_DELAYS = [1900, 2500, 1700, 2300, 2000, 2800, 1800];

export function HeroLineup() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [seats, setSeats] = useState<Puppy[]>(() =>
    AVAILABLE_PUPPIES.slice(0, 6)
  );
  const [duckedIndex, setDuckedIndex] = useState<number | null>(null);
  const [poppedIndex, setPoppedIndex] = useState<number | null>(1);
  const [inView, setInView] = useState(true);
  const pausedUntilRef = useRef(0);
  const tickCountRef = useRef(0);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        setInView(Boolean(entries[0]?.isIntersecting));
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced || !inView) return;

    let cycleTimer = 0;
    let swapTimer = 0;
    let hideNameTimer = 0;

    const scheduleNext = () => {
      const delay = SWAP_DELAYS[tickCountRef.current % SWAP_DELAYS.length];
      tickCountRef.current += 1;

      cycleTimer = window.setTimeout(() => {
        if (Date.now() < pausedUntilRef.current) {
          scheduleNext();
          return;
        }

        const seatIdx = Math.floor(Math.random() * 6);
        setDuckedIndex(seatIdx);
        setPoppedIndex(null);

        swapTimer = window.setTimeout(() => {
          setSeats((prev) => {
            const visibleSlugs = new Set(prev.map((p) => p.slug));
            const pool = AVAILABLE_PUPPIES.filter(
              (p) => !visibleSlugs.has(p.slug)
            );
            if (pool.length === 0) return prev;
            const replacement = pool[Math.floor(Math.random() * pool.length)];
            const copy = [...prev];
            copy[seatIdx] = replacement;
            return copy;
          });

          setDuckedIndex(null);
          setPoppedIndex(seatIdx);

          hideNameTimer = window.setTimeout(() => {
            setPoppedIndex((curr) => (curr === seatIdx ? null : curr));
          }, 1800);

          scheduleNext();
        }, 420);
      }, delay);
    };

    scheduleNext();

    return () => {
      window.clearTimeout(cycleTimer);
      window.clearTimeout(swapTimer);
      window.clearTimeout(hideNameTimer);
    };
  }, [inView]);

  const pauseBriefly = () => {
    pausedUntilRef.current = Date.now() + 1400;
  };

  return (
    <div
      ref={stageRef}
      onPointerEnter={pauseBriefly}
      onPointerDown={pauseBriefly}
      className="tp-hero__stage mt-10 md:mt-14 pt-8"
    >
      <div className="tp-gutter max-w-6xl mx-auto">
        <div className="relative flex items-end justify-center gap-2 sm:gap-3.5 md:gap-5 px-1">
          {seats.slice(0, 3).map((pup, idx) => {
            const spec = SEAT_SPECS[idx];
            const isDucked = duckedIndex === idx;
            const isPopped = poppedIndex === idx;
            return (
              <div
                key={idx}
                className="tp-lineup__seat flex-1 max-w-[165px]"
                data-pop={isPopped ? "true" : undefined}
                style={
                  {
                    "--w": `${spec.w}rem`,
                    "--seat-k": spec.k,
                    "--i": idx,
                    transform: `rotate(${spec.tilt}deg)`,
                  } as CSSProperties
                }
              >
                <span className="tp-lineup__name">{pup.name}</span>
                <Link
                  href={`/puppies/${pup.slug}`}
                  className="tp-lineup__pup"
                  data-duck={isDucked ? "true" : undefined}
                >
                  <span className="tp-lineup__photo relative block w-full h-[125px] sm:h-[175px] md:h-[215px]">
                    <Image
                      src={pup.image}
                      alt={pup.name}
                      fill
                      sizes="(max-width: 768px) 22vw, 175px"
                      className="object-cover"
                      priority
                    />
                  </span>
                </Link>
              </div>
            );
          })}

          {/* Center articulated PupBuddy */}
          <div className="relative shrink-0 z-10 -mb-2 sm:-mb-3 px-0.5 sm:px-2">
            <PupBuddy
              pose="peek"
              facing="front"
              bubble={poppedIndex !== null ? "say hi!" : null}
              className="w-24 sm:w-32 md:w-36"
            />
          </div>

          {seats.slice(3, 6).map((pup, offset) => {
            const idx = offset + 3;
            const spec = SEAT_SPECS[idx];
            const isDucked = duckedIndex === idx;
            const isPopped = poppedIndex === idx;
            return (
              <div
                key={idx}
                className="tp-lineup__seat flex-1 max-w-[165px]"
                data-pop={isPopped ? "true" : undefined}
                style={
                  {
                    "--w": `${spec.w}rem`,
                    "--seat-k": spec.k,
                    "--i": idx,
                    transform: `rotate(${spec.tilt}deg)`,
                  } as CSSProperties
                }
              >
                <span className="tp-lineup__name">{pup.name}</span>
                <Link
                  href={`/puppies/${pup.slug}`}
                  className="tp-lineup__pup"
                  data-duck={isDucked ? "true" : undefined}
                >
                  <span className="tp-lineup__photo relative block w-full h-[125px] sm:h-[175px] md:h-[215px]">
                    <Image
                      src={pup.image}
                      alt={pup.name}
                      fill
                      sizes="(max-width: 768px) 22vw, 175px"
                      className="object-cover"
                      priority
                    />
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scalloped Diamond-Stitched Quilted Blanket (edge-to-edge top seam only) */}
      <div
        aria-hidden="true"
        className="relative z-20 w-full overflow-hidden -mt-4 sm:-mt-6"
      >
        <svg
          viewBox="0 0 1440 72"
          preserveAspectRatio="none"
          className="w-full h-14 sm:h-18 block"
        >
          <defs>
            <pattern
              id="tp-quilt-diamonds"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M24 0 L48 24 L24 48 L0 24 Z"
                fill="none"
                stroke="rgba(162, 74, 26, 0.22)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </pattern>
          </defs>
          <path
            d="M0 16 Q60 0 120 16 T240 16 T360 16 T480 16 T600 16 T720 16 T840 16 T960 16 T1080 16 T1200 16 T1320 16 T1440 16 L1440 72 L0 72 Z"
            fill="#fff1d8"
          />
          <path
            d="M0 24 Q60 8 120 24 T240 24 T360 24 T480 24 T600 24 T720 24 T840 24 T960 24 T1080 24 T1200 24 T1320 24 T1440 24 L1440 72 L0 72 Z"
            fill="url(#tp-quilt-diamonds)"
          />
          <path
            d="M-6 16 Q60 0 120 16 T240 16 T360 16 T480 16 T600 16 T720 16 T840 16 T960 16 T1080 16 T1200 16 T1320 16 T1446 16"
            fill="none"
            stroke="#2a170e"
            strokeWidth="3.5"
          />
        </svg>
      </div>
    </div>
  );
}
