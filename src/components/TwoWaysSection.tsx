"use client";

import { useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { PupBuddy } from "./PupBuddy";

export function TwoWaysSection() {
  const flightWrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [planePos, setPlanePos] = useState({
    x: 215,
    y: 86,
    angle: -24,
    opacity: 1,
  });

  const { scrollYProgress } = useScroll({
    target: flightWrapRef,
    offset: ["start 95%", "end 25%"],
  });

  const updatePlane = (t: number) => {
    const path = pathRef.current;
    if (!path) return;
    const len = path.getTotalLength();
    const clamped = Math.max(0.04, Math.min(0.96, t));
    const pt = path.getPointAtLength(clamped * len);
    const ptAhead = path.getPointAtLength(Math.min(len, clamped * len + 4));
    const angle =
      (Math.atan2(ptAhead.y - pt.y, ptAhead.x - pt.x) * 180) / Math.PI;
    const opacity = clamped < 0.08 ? 0.35 : 1;
    setPlanePos({ x: pt.x, y: pt.y, angle, opacity });
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    updatePlane(latest);
  });

  return (
    <section
      className="tp-scene tp-paths py-20 md:py-24"
      style={{
        background: "linear-gradient(to bottom, #fbe3b4, #f7d18d)",
      }}
    >
      <div className="tp-gutter max-w-6xl mx-auto">
        <div className="text-center mb-10" data-reveal="">
          <h2 className="text-huge text-cocoa">Two ways to meet your puppy</h2>
        </div>

        {/* Center Wooden Signpost with PupBuddy */}
        <div
          aria-hidden="true"
          className="hidden md:flex flex-col items-center justify-center mb-10 relative"
        >
          <div className="flex flex-col items-center">
            <div className="tp-sign tp-sign--left -rotate-2 text-base px-5 py-2 mb-2">
              ← Puppies in Dubai
            </div>
            <div className="tp-sign tp-sign--right rotate-2 text-base px-5 py-2">
              Imported for you →
            </div>
            <div className="w-4 h-12 bg-[#a24a1a] border-x-[3px] border-cocoa" />
          </div>
          <div className="-mt-6">
            <PupBuddy pose="stand" facing="front" className="w-24" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Left: Puppies in Dubai */}
          <div
            data-reveal=""
            className="tp-board md:-rotate-2 transition-transform duration-300 hover:rotate-0 p-6 sm:p-8 flex flex-col justify-between gap-6 shadow-[8px_10px_0_0_rgba(42,23,14,0.16)]"
          >
            <div>
              <h3 className="tp-sign tp-sign--left mb-3">Puppies in Dubai</h3>
              <p className="font-scrawl text-lg text-toffee-ink mb-4">
                In our showroom
              </p>

              <div className="relative aspect-[16/10] rounded-2xl border-[3px] border-cocoa overflow-hidden bg-honey-soft mb-4">
                <div className="tp-awning z-10" aria-hidden="true" />
                <Image
                  src="/images/showroom.jpg"
                  alt="TeddyPups Downtown Dubai showroom"
                  fill
                  sizes="(max-width: 768px) 90vw, 480px"
                  className="object-cover"
                />
              </div>

              {/* Downtown Dubai Skyline Outline */}
              <svg
                viewBox="0 0 420 56"
                className="w-full h-10 text-cocoa/25 mb-3"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M0 56V40h28V26h22v30h16V18h20v38h24V30h30v26h28V22h18v34h26V4l5 16h3v36h22V28h28v28h32V20h20v36h26V32h32v24h36V56H0z" />
              </svg>

              <p className="text-cocoa-soft">
                See them, love them, take them home. Come meet our locally
                available puppies before you decide.
              </p>
            </div>

            <div>
              <Link href="/puppies?origin=local" className="btn btn-primary">
                Meet local puppies
              </Link>
            </div>
          </div>

          {/* Right: Imported for you with scroll-driven Korea -> Dubai airplane */}
          <div
            ref={flightWrapRef}
            data-reveal=""
            className="tp-board md:rotate-[1.5deg] transition-transform duration-300 hover:rotate-0 p-6 sm:p-8 flex flex-col justify-between gap-6 shadow-[8px_10px_0_0_rgba(42,23,14,0.16)]"
          >
            <div>
              <h3 className="tp-sign tp-sign--right mb-3">Imported for you</h3>

              <div className="tp-flight relative rounded-2xl border-[3px] border-cocoa bg-sky/75 overflow-hidden mb-5 p-3">
                <svg
                  viewBox="0 0 660 280"
                  fill="none"
                  aria-label="Flight path from Korea to Dubai"
                  className="w-full h-auto"
                >
                  <defs>
                    <clipPath id="tp-porthole-clip">
                      <circle cx="0" cy="0" r="24" />
                    </clipPath>
                  </defs>

                  {/* Curved flight path */}
                  <path
                    ref={pathRef}
                    d="M40 230 C 170 30, 470 20, 615 155"
                    stroke="#2a170e"
                    strokeWidth="4"
                    strokeDasharray="6 14"
                    strokeLinecap="round"
                  />

                  {/* Endpoint dots + labels */}
                  <circle
                    cx="40"
                    cy="230"
                    r="8"
                    fill="#a24a1a"
                    stroke="#2a170e"
                    strokeWidth="3"
                  />
                  <text
                    x="24"
                    y="264"
                    className="font-scrawl text-[24px]"
                    fill="#2a170e"
                  >
                    Korea
                  </text>

                  <circle
                    cx="615"
                    cy="155"
                    r="8"
                    fill="#1f7a4d"
                    stroke="#2a170e"
                    strokeWidth="3"
                  />
                  <text
                    x="570"
                    y="194"
                    className="font-scrawl text-[24px]"
                    fill="#2a170e"
                  >
                    Dubai
                  </text>

                  {/* Scroll-driven Airplane + Puppy Porthole */}
                  <g
                    transform={`translate(${planePos.x.toFixed(1)}, ${planePos.y.toFixed(1)}) rotate(${planePos.angle.toFixed(1)})`}
                    style={{ opacity: planePos.opacity }}
                  >
                    <path
                      d="M-54 -14 H36 C56 -14, 72 -4, 72 4 C72 12, 56 16, 36 16 H-54 L-72 -10 L-58 -10 Z"
                      fill="#fffdf8"
                      stroke="#2a170e"
                      strokeWidth="3.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M-12 -14 L10 -38 L24 -38 L12 -14 Z"
                      fill="#f2be6b"
                      stroke="#2a170e"
                      strokeWidth="3"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M-10 16 L8 36 L22 36 L10 16 Z"
                      fill="#f2be6b"
                      stroke="#2a170e"
                      strokeWidth="3"
                      strokeLinejoin="round"
                    />
                    <g transform="translate(8, 0)">
                      <circle
                        cx="0"
                        cy="0"
                        r="25"
                        fill="#fbe3b4"
                        stroke="#2a170e"
                        strokeWidth="3"
                      />
                      <image
                        href="/images/puppies/korean-teacup-maltipoo.jpg"
                        x="-25"
                        y="-25"
                        width="50"
                        height="50"
                        preserveAspectRatio="xMidYMid slice"
                        clipPath="url(#tp-porthole-clip)"
                      />
                    </g>
                  </g>
                </svg>

                <span className="absolute top-3 right-3 rounded-full border-2 border-cocoa bg-milk px-3 py-0.5 font-scrawl text-xs text-toffee-ink shadow-[2px_3px_0_0_rgba(42,23,14,0.16)]">
                  coming?
                </span>
              </div>

              <p className="text-cocoa-soft">
                Exclusive Korean teacup puppies, delivered. Order from the
                world&apos;s most reputable breeders and let us handle the
                import.
              </p>
            </div>

            <div>
              <Link
                href="/puppies?origin=imported"
                className="btn btn-primary"
              >
                See imported puppies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
