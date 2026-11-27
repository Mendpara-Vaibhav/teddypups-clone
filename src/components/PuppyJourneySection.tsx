"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { WHATSAPP_URL } from "@/data/navigation";
import { PupBuddy, cuePup } from "./PupBuddy";

const JOURNEY_STEPS = [
  {
    num: 1,
    title: "Choose your breed",
    desc: "Select your preferred breed or tell us what you're looking for. We'll guide you based on availability and your lifestyle.",
    say: undefined,
  },
  {
    num: 2,
    title: "Get photos & details",
    desc: "Our team will share real photos, health details, and all necessary information directly on WhatsApp.",
    say: "ooh, photos!",
  },
  {
    num: 3,
    title: "Secure & safe delivery",
    desc: "Once confirmed, we handle everything professionally and ensure your puppy reaches you safely and stress-free.",
    say: "home soon!",
  },
];

export function PuppyJourneySection() {
  const [activeStep, setActiveStep] = useState(0);
  const [typing, setTyping] = useState(false);
  const [visibleStep, setVisibleStep] = useState(0);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);
  const prevStepRef = useRef(0);

  const selectStep = (idx: number) => {
    setActiveStep(idx);
    if (idx !== prevStepRef.current) {
      prevStepRef.current = idx;
      const say = JOURNEY_STEPS[idx]?.say;
      if (say) cuePup({ say, secs: 1.6 });

      setTyping(true);
      window.setTimeout(() => {
        setTyping(false);
        setVisibleStep(idx);
      }, 650);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-step"));
            if (!Number.isNaN(idx)) {
              selectStep(idx);
            }
          }
        });
      },
      { rootMargin: "-18% 0px -38% 0px", threshold: 0.15 }
    );

    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const buddySay = JOURNEY_STEPS[activeStep]?.say ?? null;

  return (
    <section
      className="tp-scene tp-chat py-20"
      style={{
        background: "linear-gradient(to bottom, #f7d18d, #f0b866)",
      }}
    >
      <div className="tp-gutter max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: 3 steps */}
        <div className="lg:col-span-6 lg:pb-28 relative">
          <div data-reveal="">
            <h2 className="text-huge text-cocoa">Your puppy journey</h2>
            <p className="mt-4 text-cocoa-soft text-lg max-w-lg">
              A premium, step-by-step concierge experience. We make adoption
              simple, secure, and purely joyful.
            </p>
          </div>

          <ol className="tp-chat__steps mt-8 flex flex-col gap-5">
            {JOURNEY_STEPS.map((step, i) => {
              const isActive = activeStep === i;
              const isDone = activeStep > i;
              return (
                <li
                  key={step.num}
                  ref={(el) => {
                    stepRefs.current[i] = el;
                  }}
                  data-step={i}
                  data-active={isActive ? "true" : undefined}
                  data-done={isDone ? "true" : undefined}
                  onClick={() => selectStep(i)}
                  className={`rounded-2xl border-2 p-5 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "border-cocoa bg-milk shadow-[5px_6px_0_0_rgba(42,23,14,0.18)]"
                      : "border-cocoa/30 bg-milk/55 opacity-80 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-cocoa font-plush text-lg transition-colors ${
                        isActive || isDone
                          ? "bg-toffee-deep text-milk"
                          : "bg-honey-soft text-cocoa"
                      }`}
                    >
                      {step.num}
                    </span>
                    <div>
                      <h3 className="font-plush text-2xl text-cocoa">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-cocoa-soft">{step.desc}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="mt-8">
            <Link href="/how-it-works" className="btn btn-ghost">
              How it works
            </Link>
          </div>
        </div>

        {/* Right: Pinned Tilted WhatsApp Phone Mockup + Sticky PupBuddy */}
        <div className="lg:col-span-6 lg:sticky lg:top-32 lg:self-start flex justify-center pt-16">
          <div className="absolute top-2 left-4 sm:left-10 z-20">
            <PupBuddy
              pose="stand"
              facing="right"
              bubble={buddySay}
              listenCue
              className="w-20 sm:w-24"
            />
          </div>
          <div className="relative w-full max-w-[370px] rotate-2 rounded-[2.2rem] border-[4px] border-cocoa bg-[#efeae2] shadow-[10px_14px_0_0_rgba(42,23,14,0.22)] overflow-hidden">
            {/* Phone Header */}
            <div className="bg-wa-green text-white px-5 py-4 flex items-center gap-3 border-b-2 border-cocoa">
              <div className="relative h-10 w-10 rounded-full bg-milk border-2 border-cocoa overflow-hidden shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="TeddyPups"
                  fill
                  sizes="40px"
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <p className="font-semibold leading-tight">TeddyPups U.A.E.</p>
                <p className="text-xs text-white/85">
                  {typing ? "typing..." : "online"}
                </p>
              </div>
            </div>

            {/* Chat Body with subtle paw wallpaper */}
            <div
              className="p-4 flex flex-col gap-3 min-h-[340px]"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(42,23,14,0.06) 1.2px, transparent 1.2px)",
                backgroundSize: "18px 18px",
              }}
            >
              {/* Outgoing user message (Step 1) */}
              <div className="self-end bg-honey border-2 border-cocoa rounded-2xl rounded-br-sm px-3.5 py-2.5 text-sm text-cocoa max-w-[88%] shadow-[2px_3px_0_0_rgba(42,23,14,0.14)]">
                Hi TeddyPups! I&apos;d love to know more about your puppies.
              </div>

              {/* Group 2: Photos & Video preview card */}
              {visibleStep >= 1 && (
                <div className="flex flex-col gap-2">
                  <div className="grid grid-cols-3 gap-1.5 max-w-[88%]">
                    <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-cocoa bg-milk">
                      <Image
                        src="/images/puppies/max-maltipoo.webp"
                        alt="Max preview"
                        fill
                        sizes="90px"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-cocoa bg-milk">
                      <Image
                        src="/images/puppies/korean-teacup-poodle.jpg"
                        alt="Poodle preview"
                        fill
                        sizes="90px"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-cocoa bg-milk">
                      <Image
                        src="/images/puppies/copper-cavapoo.jpg"
                        alt="Cavapoo preview"
                        fill
                        sizes="90px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="self-start bg-milk border-2 border-cocoa rounded-2xl rounded-bl-sm px-3.5 py-2.5 text-sm text-cocoa max-w-[88%] shadow-[2px_3px_0_0_rgba(42,23,14,0.14)]">
                    Our team will share real photos, health details, and all
                    necessary information directly on WhatsApp.
                  </div>
                </div>
              )}

              {/* Group 3: Delivery route SVG (tp-route) */}
              {visibleStep >= 2 && (
                <div className="self-start bg-milk border-2 border-cocoa rounded-2xl rounded-bl-sm p-3 text-sm text-cocoa max-w-[90%] shadow-[2px_3px_0_0_rgba(42,23,14,0.14)]">
                  <svg
                    viewBox="0 0 220 70"
                    className="w-full h-14 mb-1.5"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M14 52 C 60 6, 120 70, 170 28"
                      stroke="#a24a1a"
                      strokeWidth="2.5"
                      strokeDasharray="4 7"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="14"
                      cy="52"
                      r="5"
                      fill="#f2be6b"
                      stroke="#2a170e"
                      strokeWidth="2"
                    />
                    <g transform="translate(70 22) scale(.3) rotate(70 32 32)" fill="#2a170e">
                      <circle cx="32" cy="40" r="10" />
                    </g>
                    <g transform="translate(104 38) scale(.3) rotate(100 32 32)" fill="#2a170e">
                      <circle cx="32" cy="40" r="10" />
                    </g>
                    <path
                      d="M164 32 l12 -12 l12 12 v14 h-24 z"
                      fill="#fbe3b4"
                      stroke="#2a170e"
                      strokeWidth="2.2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M176 42 c-2-3-7-2-6 2c1 3 6 5 6 5s5-2 6-5c1-4-4-5-6-2z"
                      fill="#a24a1a"
                    />
                  </svg>
                  <p>
                    Once confirmed, we handle everything professionally and ensure
                    your puppy reaches you safely and stress-free.
                  </p>
                </div>
              )}

              {/* Typing 3-dot pill */}
              {typing && (
                <div className="self-start inline-flex items-center gap-1.5 rounded-full border-2 border-cocoa bg-milk px-3.5 py-2 shadow-[2px_3px_0_0_rgba(42,23,14,0.12)]">
                  <span className="tp-typing-dot" />
                  <span className="tp-typing-dot" />
                  <span className="tp-typing-dot" />
                </div>
              )}

              {/* Action bar */}
              <div className="mt-auto pt-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp w-full text-sm py-3"
                >
                  Say hello on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
