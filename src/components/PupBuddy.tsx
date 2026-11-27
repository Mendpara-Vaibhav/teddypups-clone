"use client";

import { useEffect, useRef, useState } from "react";

export type PupPose = "peek" | "walk" | "stand" | "sit" | "run" | "basket";

type Props = {
  pose?: PupPose;
  facing?: "left" | "right" | "front";
  bubble?: string | null;
  walking?: boolean;
  listenCue?: boolean;
  className?: string;
};

export function cuePup(payload: { say?: string; secs?: number }) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("tp:cue-pup", { detail: payload }));
}

export function PupBuddy({
  pose = "stand",
  facing = "front",
  bubble: initialBubble = null,
  walking = false,
  listenCue = false,
  className = "w-28 sm:w-32",
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<SVGGElement>(null);
  const earLRef = useRef<SVGGElement>(null);
  const earRRef = useRef<SVGGElement>(null);
  const tailRef = useRef<SVGPathElement>(null);
  const pawFLRef = useRef<SVGGElement>(null);
  const pawFRRef = useRef<SVGGElement>(null);
  const [blinking, setBlinking] = useState(false);
  const [happy, setHappy] = useState(false);
  const [cueBubble, setCueBubble] = useState<string | null>(null);
  const gazeTargetRef = useRef({ x: 0, y: 0 });
  const walkingRef = useRef(walking);

  useEffect(() => {
    walkingRef.current = walking;
  }, [walking]);

  const activeBubble = cueBubble ?? initialBubble;

  // Listen to global cuePup events when opted in
  useEffect(() => {
    if (!listenCue) return;
    let timer = 0;
    const handler = (ev: Event) => {
      const detail = (ev as CustomEvent<{ say?: string; secs?: number }>)
        .detail;
      if (detail?.say) {
        setCueBubble(detail.say);
        setHappy(true);
        window.clearTimeout(timer);
        timer = window.setTimeout(() => {
          setCueBubble(null);
          setHappy(false);
        }, (detail.secs ?? 2) * 1000);
      }
    };
    window.addEventListener("tp:cue-pup", handler);
    return () => {
      window.removeEventListener("tp:cue-pup", handler);
      window.clearTimeout(timer);
    };
  }, [listenCue]);

  // Pointer gaze tracking + automatic natural blinking
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedMotion) return;

    const onMove = (e: PointerEvent) => {
      const el = rootRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height * 0.4;
      const dx = Math.max(-1, Math.min(1, (e.clientX - cx) / 360));
      const dy = Math.max(-1, Math.min(1, (e.clientY - cy) / 360));
      gazeTargetRef.current = { x: dx, y: dy };
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    let gx = 0;
    let gy = 0;
    let t = 0;
    let last = performance.now();
    let rafId = 0;

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      t += dt;

      const damp = 1 - Math.exp(-dt / 0.14);
      gx += (gazeTargetRef.current.x - gx) * damp;
      gy += (gazeTargetRef.current.y - gy) * damp;

      if (headRef.current) {
        const bob =
          pose === "run" || walkingRef.current ? Math.sin(t * 9) * 3 : Math.sin(t * 2.2) * 1.4;
        const tilt = gx * 5 + (pose === "sit" ? -2 : 0);
        headRef.current.setAttribute(
          "transform",
          `translate(${(gx * 4).toFixed(2)}, ${(gy * 3 + bob).toFixed(2)}) rotate(${tilt.toFixed(2)} 100 72)`
        );
      }

      if (earLRef.current && earRRef.current) {
        const earFlutter = Math.sin(t * 3.1) * 2.4 + Math.abs(gx) * 3;
        earLRef.current.setAttribute(
          "transform",
          `rotate(${(-earFlutter).toFixed(2)} 64 56)`
        );
        earRRef.current.setAttribute(
          "transform",
          `rotate(${earFlutter.toFixed(2)} 136 56)`
        );
      }

      if (tailRef.current) {
        const wagSpeed = walkingRef.current || pose === "run" ? 13 : 6;
        const wagAngle = Math.sin(t * wagSpeed) * 16;
        tailRef.current.setAttribute(
          "transform",
          `rotate(${wagAngle.toFixed(2)} 55 128)`
        );
      }

      if (pawFLRef.current && pawFRRef.current && (walkingRef.current || pose === "run")) {
        const stride = Math.sin(t * 10) * 11;
        pawFLRef.current.setAttribute(
          "transform",
          `rotate(${stride.toFixed(2)} 78 140)`
        );
        pawFRRef.current.setAttribute(
          "transform",
          `rotate(${(-stride).toFixed(2)} 122 140)`
        );
      }

      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    let blinkTimeout = 0;
    const scheduleBlink = () => {
      const delay = 2200 + Math.random() * 3600;
      blinkTimeout = window.setTimeout(() => {
        setBlinking(true);
        window.setTimeout(() => {
          setBlinking(false);
          if (Math.random() < 0.18) {
            window.setTimeout(() => {
              setBlinking(true);
              window.setTimeout(() => setBlinking(false), 120);
            }, 150);
          }
          scheduleBlink();
        }, 140);
      }, delay);
    };
    scheduleBlink();

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(rafId);
      window.clearTimeout(blinkTimeout);
    };
  }, [pose]);

  const flipScale = facing === "left" ? -1 : 1;

  return (
    <div
      ref={rootRef}
      className={`pup-buddy select-none ${className}`}
      aria-hidden="true"
    >
      <div
        className="pup-bubble"
        data-show={activeBubble ? "true" : "false"}
      >
        {activeBubble}
      </div>

      <svg
        viewBox="0 0 200 185"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: flipScale === -1 ? "scaleX(-1)" : undefined,
        }}
      >
        {/* Ground shadow */}
        {pose !== "peek" && pose !== "basket" && (
          <ellipse
            cx="100"
            cy="173"
            rx="48"
            ry="7"
            fill="rgba(42, 23, 14, 0.16)"
          />
        )}

        {/* Basket for Footer */}
        {pose === "basket" && (
          <g>
            <path
              d="M28 118 Q100 132 172 118 L158 168 Q100 182 42 168 Z"
              fill="#d38f45"
              stroke="#fffdf8"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <path
              d="M40 138 Q100 150 160 138 M46 155 Q100 165 154 155"
              stroke="#a24a1a"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>
        )}

        {/* Tail */}
        {pose !== "peek" && pose !== "basket" && (
          <path
            ref={tailRef}
            d="M55 128 C34 114, 30 92, 46 86 C56 82, 62 96, 58 116"
            fill="#e4a85b"
            stroke="#2a170e"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}

        {/* Body */}
        {pose !== "peek" && pose !== "basket" && (
          <g>
            <path
              d="M60 105 C56 142, 68 160, 100 160 C132 160, 144 142, 140 105 Z"
              fill="#f2be6b"
              stroke="#2a170e"
              strokeWidth="4.5"
              strokeLinejoin="round"
            />
            {/* Belly patch */}
            <ellipse cx="100" cy="134" rx="20" ry="18" fill="#fbe3b4" />
            {/* Collar */}
            <path
              d="M72 106 Q100 118 128 106"
              stroke="#a24a1a"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <circle
              cx="100"
              cy="117"
              r="5.5"
              fill="#f2be6b"
              stroke="#2a170e"
              strokeWidth="2.5"
            />
            {/* Front legs */}
            <g ref={pawFLRef}>
              <rect
                x="69"
                y="134"
                width="18"
                height="32"
                rx="9"
                fill="#e4a85b"
                stroke="#2a170e"
                strokeWidth="4"
              />
            </g>
            <g ref={pawFRRef}>
              <rect
                x="113"
                y="134"
                width="18"
                height="32"
                rx="9"
                fill="#e4a85b"
                stroke="#2a170e"
                strokeWidth="4"
              />
            </g>
          </g>
        )}

        {/* Peeking Shoulders + Ledge-gripping Paws */}
        {pose === "peek" && (
          <g>
            <path
              d="M64 110 C56 126, 62 145, 100 145 C138 145, 144 126, 136 110 Z"
              fill="#f2be6b"
              stroke="#2a170e"
              strokeWidth="4.2"
              strokeLinejoin="round"
            />
            <path
              d="M72 110 Q100 120 128 110"
              stroke="#a24a1a"
              strokeWidth="6.5"
              strokeLinecap="round"
            />
            <g>
              <ellipse
                cx="64"
                cy="134"
                rx="16"
                ry="11"
                fill="#e4a85b"
                stroke="#2a170e"
                strokeWidth="4"
              />
              <path
                d="M58 130 v8 M64 129 v9 M70 130 v8"
                stroke="#2a170e"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </g>
            <g>
              <ellipse
                cx="136"
                cy="134"
                rx="16"
                ry="11"
                fill="#e4a85b"
                stroke="#2a170e"
                strokeWidth="4"
              />
              <path
                d="M130 130 v8 M136 129 v9 M142 130 v8"
                stroke="#2a170e"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </g>
          </g>
        )}

        {/* Articulated Head */}
        <g ref={headRef} data-p="head">
          {/* Floppy Ears */}
          <g ref={earLRef} data-p="earL">
            <path
              d="M64 46 C40 42, 30 76, 42 98 C50 110, 66 96, 66 72 Z"
              fill="#c2622b"
              stroke="#2a170e"
              strokeWidth="4.5"
              strokeLinejoin="round"
            />
          </g>
          <g ref={earRRef} data-p="earR">
            <path
              d="M136 46 C160 42, 170 76, 158 98 C150 110, 134 96, 134 72 Z"
              fill="#c2622b"
              stroke="#2a170e"
              strokeWidth="4.5"
              strokeLinejoin="round"
            />
          </g>

          {/* Head Fluffy Contour */}
          <path
            d="M100 22 C66 22, 48 46, 50 76 C52 104, 72 114, 100 114 C128 114, 148 104, 150 76 C152 46, 134 22, 100 22 Z"
            fill="#f2be6b"
            stroke="#2a170e"
            strokeWidth="4.5"
            strokeLinejoin="round"
          />

          {/* Cheek Rosy Blush */}
          <ellipse cx="68" cy="84" rx="7" ry="4.5" fill="#f9cdbf" opacity="0.75" />
          <ellipse cx="132" cy="84" rx="7" ry="4.5" fill="#f9cdbf" opacity="0.75" />

          {/* Muzzle */}
          <ellipse cx="100" cy="84" rx="22" ry="17" fill="#fffdf8" />

          {/* Eyes */}
          {blinking || happy ? (
            <g stroke="#2a170e" strokeWidth="3.8" strokeLinecap="round" fill="none">
              <path d="M74 68 Q82 59 90 68" />
              <path d="M110 68 Q118 59 126 68" />
            </g>
          ) : (
            <g data-p="eyes">
              <ellipse cx="82" cy="67" rx="6.5" ry="7.6" fill="#2a170e" />
              <circle cx="84.5" cy="64" r="2.3" fill="#fffdf8" />
              <circle cx="80.5" cy="70" r="1.1" fill="#fffdf8" />

              <ellipse cx="118" cy="67" rx="6.5" ry="7.6" fill="#2a170e" />
              <circle cx="120.5" cy="64" r="2.3" fill="#fffdf8" />
              <circle cx="116.5" cy="70" r="1.1" fill="#fffdf8" />
            </g>
          )}

          {/* Nose & Happy Mouth */}
          <ellipse cx="100" cy="79" rx="7" ry="5" fill="#2a170e" />
          <path
            d="M91 88 Q100 96 109 88"
            stroke="#2a170e"
            strokeWidth="3.2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M95 92 C95 101, 105 101, 105 92 Z"
            fill="#e98c8c"
            stroke="#2a170e"
            strokeWidth="2.2"
          />
        </g>
      </svg>
    </div>
  );
}
