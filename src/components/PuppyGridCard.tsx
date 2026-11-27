import Link from "next/link";
import type { CSSProperties } from "react";
import type { Puppy } from "@/data/puppies";

const WASH_PALETTE = [
  "#f2be6b",
  "#f9cdbf",
  "#bfddf5",
  "#fbe3b4",
  "#e8c39a",
];

function fnv1a(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i += 1) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function makeRng(seed: number) {
  let s = seed || 1;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function catmullClosedPath(
  seedStr: string,
  baseR: number,
  amp: number,
  pointsCount = 12
): string {
  const rand = makeRng(fnv1a(seedStr));
  const pts: Array<[number, number]> = [];
  for (let i = 0; i < pointsCount; i += 1) {
    const a = (i / pointsCount) * Math.PI * 2;
    const r = baseR + (rand() * 2 - 1) * amp;
    pts.push([50 + Math.cos(a) * r, 50 + Math.sin(a) * r]);
  }

  const n = pts.length;
  let d = `M ${pts[0][0].toFixed(2)} ${pts[0][1].toFixed(2)}`;
  for (let i = 0; i < n; i += 1) {
    const p0 = pts[(i - 1 + n) % n];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % n];
    const p3 = pts[(i + 2) % n];

    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;

    d += ` C ${c1x.toFixed(2)} ${c1y.toFixed(2)}, ${c2x.toFixed(2)} ${c2y.toFixed(2)}, ${p2[0].toFixed(2)} ${p2[1].toFixed(2)}`;
  }
  return `${d} Z`;
}

const DOODLE_KINDS = [
  "sparkle",
  "heart",
  "dashes",
  "swirl",
  "dots",
  "paw",
] as const;

function DoodleSvg({ kind }: { kind: (typeof DOODLE_KINDS)[number] }) {
  switch (kind) {
    case "sparkle":
      return (
        <path
          d="M12 2c1 6 4 9 10 10-6 1-9 4-10 10-1-6-4-9-10-10 6-1 9-4 10-10z"
          fill="#f2be6b"
          stroke="#2a170e"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      );
    case "heart":
      return (
        <path
          d="M12 20s-7-4.6-7-9.6C5 7.4 7.3 5.5 9.8 5.5c1.5 0 2.2.8 2.2 1.8 0-1 .7-1.8 2.2-1.8 2.5 0 4.8 1.9 4.8 4.9 0 5-7 9.6-7 9.6z"
          fill="#f9cdbf"
          stroke="#2a170e"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      );
    case "dashes":
      return (
        <g stroke="#a24a1a" strokeWidth="2.4" strokeLinecap="round">
          <path d="M4 10 L10 5" />
          <path d="M8 16 L17 10" />
          <path d="M13 21 L20 17" />
        </g>
      );
    case "swirl":
      return (
        <path
          d="M12 12c2 0 3 1.5 3 3s-2 3-4 3c-3 0-5-2.5-5-5.5C6 8.5 9.5 6 13.5 6c4.5 0 7.5 3.5 7.5 7.5"
          fill="none"
          stroke="#2f6e9e"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      );
    case "dots":
      return (
        <g fill="#2a170e">
          <circle cx="7" cy="9" r="2.2" />
          <circle cx="15" cy="7" r="1.6" />
          <circle cx="13" cy="16" r="2.4" />
        </g>
      );
    case "paw":
      return (
        <g fill="#c2622b" stroke="#2a170e" strokeWidth="1.3">
          <circle cx="8" cy="7" r="2" />
          <circle cx="16" cy="7" r="2" />
          <circle cx="5.5" cy="12" r="1.8" />
          <circle cx="18.5" cy="12" r="1.8" />
          <path d="M12 11c-2.8 0-5 2.2-5 4.6 0 1.8 1.4 3.2 3.2 3.2.9 0 1.3-.3 1.8-.3s.9.3 1.8.3c1.8 0 3.2-1.4 3.2-3.2 0-2.4-2.2-4.6-5-4.6z" />
        </g>
      );
  }
}

type Props = {
  puppy: Puppy;
  index: number;
};

export function PuppyGridCard({ puppy, index }: Props) {
  const clipId = `tp-clip-${puppy.slug}`;
  const washPath = catmullClosedPath(`${puppy.slug}-wash`, 44.5, 2.5);
  const photoPath = catmullClosedPath(`${puppy.slug}-photo`, 45.2, 2.8);
  const ringPath = catmullClosedPath(`${puppy.slug}-ring`, 47.4, 3.0);
  const washColor = WASH_PALETTE[index % WASH_PALETTE.length];
  const doodle = DOODLE_KINDS[index % DOODLE_KINDS.length];
  const delay = `${Math.min(index, 7) * 55}ms`;

  return (
    <Link
      href={`/puppies/${puppy.slug}`}
      data-reveal=""
      className="tp-sketch group text-cocoa"
      style={{ "--d": delay } as CSSProperties}
    >
      <div className="relative aspect-square w-full transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-[1.02]">
        <span className="tp-sketch__sticker absolute top-[6%] right-[-0.2rem] z-10 inline-block rounded-full border-2 border-cocoa bg-milk px-2.5 py-0.5 text-sm text-cocoa">
          {puppy.status}
        </span>

        {puppy.hasVideo && (
          <span className="absolute bottom-3 left-2 z-10 rounded-full border-2 border-cocoa bg-milk/95 px-2.5 py-0.5 text-xs font-semibold text-cocoa shadow-[2px_3px_0_0_rgba(42,23,14,0.18)] -rotate-3">
            ▶ video
          </span>
        )}

        {/* Hand-drawn doodle accent top-left */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="tp-sketch__doodle absolute -top-1 -left-1 z-10 pointer-events-none"
        >
          <DoodleSvg kind={doodle} />
        </svg>

        <svg
          viewBox="0 0 100 100"
          className="w-full h-full overflow-visible"
          role="img"
          aria-label={puppy.name}
        >
          <defs>
            <clipPath id={clipId}>
              <path d={photoPath} />
            </clipPath>
          </defs>

          {/* Offset pastel wash */}
          <path
            d={washPath}
            fill={washColor}
            transform="translate(2.5, 3)"
          />

          {/* Photo clipped to organic blob */}
          <image
            href={puppy.image}
            x="2"
            y="2"
            width="96"
            height="96"
            preserveAspectRatio="xMidYMid slice"
            clipPath={`url(#${clipId})`}
          />

          {/* Hand-drawn ink border ring */}
          <path
            d={ringPath}
            fill="none"
            stroke="#2a170e"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="pt-2.5 px-1">
        <h3 className="tp-door__name">{puppy.name}</h3>
        <p className="tp-door__meta mt-1">{puppy.metaLine}</p>
      </div>
    </Link>
  );
}
