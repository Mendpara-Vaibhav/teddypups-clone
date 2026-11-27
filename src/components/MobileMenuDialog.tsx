"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { CONTACT_INFO, NAV_LINKS, WHATSAPP_URL } from "@/data/navigation";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenuDialog({ open, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-label="Site menu"
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      className="tp-menu"
    >
      <div className="tp-gutter py-6 min-h-dvh flex flex-col justify-between gap-8">
        <div className="flex items-center justify-between">
          <p className="font-scrawl text-xl text-toffee-ink">
            where to, friend?
          </p>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-cocoa text-milk px-5 py-2 text-sm font-semibold"
          >
            Close
          </button>
        </div>

        <nav aria-label="Mobile navigation" className="flex flex-col gap-3">
          {NAV_LINKS.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`font-plush text-4xl leading-tight no-underline transition-colors ${
                  active ? "text-toffee-deep" : "text-cocoa hover:text-toffee-deep"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex flex-col gap-3 pb-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp w-full"
          >
            WhatsApp us
          </a>
          <a
            href={CONTACT_INFO.phoneHref}
            className="text-center font-semibold text-cocoa underline-offset-4 hover:underline"
          >
            {CONTACT_INFO.phoneDisplay}
          </a>
        </div>
      </div>
    </dialog>
  );
}
