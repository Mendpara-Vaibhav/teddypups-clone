"use client";

import { CONTACT_INFO, WHATSAPP_URL } from "@/data/navigation";

export function MobileStickyBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-milk/95 backdrop-blur-sm border-t-2 border-cocoa px-4 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] flex items-center gap-2.5"
      style={{ minHeight: "var(--bar-h)" }}
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-whatsapp flex-1 !min-h-12 !shadow-none !py-3"
      >
        WhatsApp us
      </a>
      <a
        href={CONTACT_INFO.phoneHref}
        className="btn btn-ghost !bg-milk !min-h-12 !px-5 !py-3"
      >
        Call
      </a>
    </div>
  );
}
