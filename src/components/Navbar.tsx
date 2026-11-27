"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS, WHATSAPP_URL } from "@/data/navigation";
import { MobileMenuDialog } from "./MobileMenuDialog";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastYRef = useRef(0);
  const isHome = pathname === "/";

  useEffect(() => {
    let rafId = 0;
    const update = () => {
      rafId = 0;
      const y = window.scrollY;
      setScrolled(y > 8);
      if (y > 220 && y - lastYRef.current > 6) {
        setHidden(true);
      } else if (lastYRef.current - y > 6 || y <= 220) {
        setHidden(false);
      }
      lastYRef.current = y;
    };

    const onScroll = () => {
      if (!rafId) rafId = requestAnimationFrame(update);
    };

    const onFocusIn = () => setHidden(false);

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("focusin", onFocusIn);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("focusin", onFocusIn);
    };
  }, []);

  return (
    <>
      <header
        id="site-header"
        data-scrolled={scrolled ? "true" : undefined}
        data-hidden={hidden ? "true" : undefined}
        data-home={isHome ? "true" : undefined}
        className="tp-header fixed top-0 inset-x-0 z-50 h-[var(--header-h)] bg-transparent"
      >
        <div className="tp-header__hem" aria-hidden="true">
          <svg
            width="100%"
            height="16"
            className="w-full h-full block"
          >
            <defs>
              <pattern
                id="tp-header-scallop"
                width="44"
                height="16"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0,0 L44,0 L44,1 Q22,22 0,1 Z"
                  fill="#fffdf8"
                />
                <path
                  d="M0,1 Q22,22 44,1"
                  fill="none"
                  stroke="rgba(42, 23, 14, 0.18)"
                  strokeWidth="1.5"
                />
              </pattern>
            </defs>
            <rect
              x="0"
              y="0"
              width="100%"
              height="16"
              fill="url(#tp-header-scallop)"
            />
          </svg>
        </div>
        <div className="tp-gutter h-full flex items-center justify-between gap-4">
          <Link
            href="/"
            aria-label="TeddyPups U.A.E. — home"
            className="inline-flex items-center gap-2.5 text-cocoa no-underline group"
          >
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-cocoa bg-milk shadow-[2px_3px_0_0_rgba(42,23,14,0.2)] overflow-hidden transition-transform group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="Teddy Pups U.A.E."
                width={38}
                height={38}
                className="object-contain"
                priority
              />
            </span>
            <span className="font-plush text-xl tracking-tight text-cocoa">
              TeddyPups
            </span>
          </Link>

          <nav aria-label="Main" className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-active={active ? "true" : "false"}
                  className="tp-nav-link no-underline"
                >
                  {item.label}
                  {active && (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 text-toffee-deep"
                    >
                      <circle cx="8" cy="7" r="2.2" />
                      <circle cx="16" cy="7" r="2.2" />
                      <circle cx="5" cy="12.5" r="2" />
                      <circle cx="19" cy="12.5" r="2" />
                      <path d="M12 11c-3 0-5.5 2.4-5.5 5 0 2 1.6 3.5 3.5 3.5 1 0 1.5-.4 2-.4s1 .4 2 .4c1.9 0 3.5-1.5 3.5-3.5 0-2.6-2.5-5-5.5-5z" />
                    </svg>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp tp-header__wa"
            >
              WhatsApp us
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="md:hidden inline-flex items-center gap-2 rounded-full border-2 border-cocoa bg-milk px-4 py-2 text-sm font-semibold text-cocoa shadow-[2px_3px_0_0_#2a170e]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <circle cx="8" cy="7" r="2.2" />
                <circle cx="16" cy="7" r="2.2" />
                <circle cx="5" cy="12.5" r="2" />
                <circle cx="19" cy="12.5" r="2" />
                <path d="M12 11c-3 0-5.5 2.4-5.5 5 0 2 1.6 3.5 3.5 3.5 1 0 1.5-.4 2-.4s1 .4 2 .4c1.9 0 3.5-1.5 3.5-3.5 0-2.6-2.5-5-5.5-5z" />
              </svg>
              Menu
            </button>
          </div>
        </div>
      </header>

      <MobileMenuDialog open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
