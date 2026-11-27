"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AVAILABLE_PUPPIES } from "@/data/puppies";
import { PupBuddy } from "./PupBuddy";
import { PuppyDoorCard } from "./PuppyDoorCard";

export function MeetThePupsBoardwalk() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [maxShift, setMaxShift] = useState(0);
  const [isWalking, setIsWalking] = useState(false);

  useEffect(() => {
    let walkTimeout = 0;

    const updateMetrics = () => {
      if (!trackRef.current) return;
      const overflow =
        trackRef.current.scrollWidth - trackRef.current.clientWidth;
      setMaxShift(Math.max(0, overflow));
    };

    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const totalScrollable = el.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;
      const scrolled = Math.min(Math.max(-rect.top, 0), totalScrollable);
      const nextProgress = scrolled / totalScrollable;
      setProgress(nextProgress);

      if (nextProgress > 0.01 && nextProgress < 0.99) {
        setIsWalking(true);
        window.clearTimeout(walkTimeout);
        walkTimeout = window.setTimeout(() => setIsWalking(false), 180);
      }
    };

    updateMetrics();
    handleScroll();
    window.addEventListener("resize", updateMetrics);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", updateMetrics);
      window.removeEventListener("scroll", handleScroll);
      window.clearTimeout(walkTimeout);
    };
  }, []);

  const totalDoors = AVAILABLE_PUPPIES.length;

  return (
    <section
      ref={sectionRef}
      className="tp-scene tp-meet py-16 md:py-0 md:min-h-[260vh]"
      style={{
        background: "linear-gradient(to bottom, #fff1d8, #fbe3b4)",
      }}
    >
      {/* Desktop: Scroll-pinned horizontal boardwalk */}
      <div className="hidden md:flex md:sticky md:top-0 md:h-screen md:flex-col md:justify-between md:pt-20 md:pb-0 overflow-hidden">
        <div
          data-reveal=""
          className="tp-gutter flex flex-col lg:flex-row lg:items-end justify-between gap-6"
        >
          <div>
            <h2 id="meet-title" className="text-huge text-cocoa">
              Meet the pups
            </h2>
            <p className="mt-3 text-cocoa-soft text-lg">
              Real puppies, real photos, looking for their families right now.
            </p>
          </div>
          <Link href="/puppies" className="btn btn-primary self-start lg:self-auto">
            See all available puppies
          </Link>
        </div>

        <div ref={trackRef} className="tp-gutter overflow-visible mt-auto mb-0 pb-0">
          <div
            className="flex items-end gap-7 transition-transform duration-75 ease-out will-change-transform"
            style={{
              transform: `translate3d(-${progress * maxShift}px, 0, 0)`,
            }}
          >
            {AVAILABLE_PUPPIES.map((pup, idx) => {
              const doorThreshold = Math.max(0, (idx - 1) / (totalDoors + 1));
              const isDoorOpen = progress >= doorThreshold || idx < 3;
              return (
                <div key={pup.slug} className="w-[240px] shrink-0">
                  <PuppyDoorCard puppy={pup} forceOpen={isDoorOpen} labelAbove />
                </div>
              );
            })}
            <div className="w-[220px] shrink-0 flex flex-col items-center justify-center pb-14">
              <Link href="/puppies" className="btn btn-ghost">
                Meet them all
              </Link>
            </div>
          </div>
        </div>

        {/* Wooden plank boardwalk + walking PupBuddy */}
        <div
          className="relative w-full border-t-[3px] border-cocoa h-20"
          style={{
            background:
              "repeating-linear-gradient(90deg, #d38f45 0 92px, #c2622b 92px 96px, #e4a85b 96px 188px, #2a170e 188px 190px)",
            backgroundPositionX: `${-progress * maxShift}px`,
          }}
        >
          <div
            className="absolute -top-24 transition-transform duration-75 will-change-transform z-20"
            style={{
              left: "6%",
              transform: `translateX(${progress * 70}vw)`,
            }}
          >
            <PupBuddy
              pose="walk"
              facing="right"
              walking={isWalking}
              className="w-28"
            />
          </div>
        </div>
      </div>

      {/* Mobile: 2-column grid */}
      <div className="md:hidden tp-gutter">
        <h2 className="text-huge text-cocoa">Meet the pups</h2>
        <p className="mt-3 text-cocoa-soft">
          Real puppies, real photos, looking for their families right now.
        </p>
        <div className="mt-5">
          <Link href="/puppies" className="btn btn-primary w-full sm:w-auto">
            See all available puppies
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          {AVAILABLE_PUPPIES.map((pup) => (
            <PuppyDoorCard key={pup.slug} puppy={pup} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/puppies" className="btn btn-ghost">
            Meet them all
          </Link>
        </div>
      </div>
    </section>
  );
}
