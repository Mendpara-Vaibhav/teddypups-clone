import Image from "next/image";
import Link from "next/link";
import {
  CONTACT_INFO,
  FOOTER_EXPLORE_LINKS,
  SOCIAL_LINKS,
} from "@/data/navigation";
import { PupBuddy } from "./PupBuddy";

export function Footer() {
  return (
    <footer className="relative bg-night text-milk pt-16 pb-[calc(var(--bar-h)+2rem)] md:pb-12 overflow-hidden">
      {/* Decorative night twinkling 4-point stars & crescent moon */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-75"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="#fbe3b4"
          className="tp-twinkle absolute top-8 left-[12%]"
        >
          <path d="M12 0c1.2 7.2 4.8 10.8 12 12-7.2 1.2-10.8 4.8-12 12-1.2-7.2-4.8-10.8-12-12 7.2-1.2 10.8-4.8 12-12z" />
        </svg>
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="#fffdf8"
          className="tp-twinkle absolute top-16 left-[28%]"
          style={{ animationDelay: "1.1s" }}
        >
          <path d="M12 0c1.2 7.2 4.8 10.8 12 12-7.2 1.2-10.8 4.8-12 12-1.2-7.2-4.8-10.8-12-12 7.2-1.2 10.8-4.8 12-12z" />
        </svg>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="#f2be6b"
          className="tp-twinkle absolute top-10 right-[22%]"
          style={{ animationDelay: "0.7s" }}
        >
          <path d="M12 0c1.2 7.2 4.8 10.8 12 12-7.2 1.2-10.8 4.8-12 12-1.2-7.2-4.8-10.8-12-12 7.2-1.2 10.8-4.8 12-12z" />
        </svg>
        <svg
          className="absolute top-8 right-[8%] w-11 h-11 text-honey/85"
          viewBox="0 0 36 36"
          fill="currentColor"
        >
          <path d="M24.5 23.5A10.5 10.5 0 0 1 14 13c0-2.9 1.2-5.6 3.1-7.5A11 11 0 1 0 31.5 20a10.4 10.4 0 0 1-7 3.5z" />
        </svg>
      </div>

      <div className="tp-gutter relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-milk/15">
          {/* Left column */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <h2 className="font-plush text-4xl md:text-5xl text-milk">
              Home, at last.
            </h2>
            <p className="text-milk/80 max-w-sm">
              TeddyPups U.A.E. is a Dubai-based brand specializing in miniature
              puppies, offering premium services and worldwide shipping.
            </p>
            {/* Articulated PupBuddy resting inside a woven basket */}
            <div className="mt-2 inline-flex items-center gap-3 text-honey/90">
              <PupBuddy pose="basket" facing="front" className="w-24" />
              <span className="font-scrawl text-sm text-honey">
                sweet dreams from Dubai
              </span>
            </div>
          </div>

          {/* Middle column */}
          <div className="md:col-span-3">
            <h2 className="font-plush text-xl text-honey mb-4">Explore</h2>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_EXPLORE_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-semibold text-milk/90 hover:text-honey transition-colors no-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h2 className="font-plush text-xl text-honey mb-1">Say hello</h2>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-milk/90 hover:text-honey transition-colors no-underline"
            >
              WhatsApp {CONTACT_INFO.whatsappDisplay}
            </a>
            <a
              href={CONTACT_INFO.emailHref}
              className="font-semibold text-milk/90 hover:text-honey transition-colors no-underline"
            >
              {CONTACT_INFO.email}
            </a>
            <p className="text-milk/80">{CONTACT_INFO.address}</p>

            <ul
              aria-label="Social media"
              className="flex flex-wrap items-center gap-2.5 mt-2"
            >
              {SOCIAL_LINKS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-milk/30 px-4 py-1.5 text-sm font-semibold text-milk/90 hover:border-honey hover:text-honey transition-colors no-underline"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-milk p-0.5 overflow-hidden">
              <Image
                src="/images/logo.png"
                alt="TeddyPups"
                width={28}
                height={28}
                className="object-contain"
              />
            </span>
            <p className="text-sm text-milk/80">© 2026 TeddyPups U.A.E.</p>
          </div>
          <p className="font-scrawl text-lg text-honey">
            every puppy is family
          </p>
        </div>
      </div>
    </footer>
  );
}
