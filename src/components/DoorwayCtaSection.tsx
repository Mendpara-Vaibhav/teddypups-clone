import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_URL } from "@/data/navigation";
import { PupBuddy } from "./PupBuddy";

export function DoorwayCtaSection() {
  return (
    <section
      data-tone="dark"
      className="tp-scene tp-home pt-16 pb-20 text-milk"
      style={{
        background: "linear-gradient(to bottom, #2f1a10, #24130b)",
      }}
    >
      <div className="tp-gutter max-w-4xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-huge text-milk" data-reveal="">
          Ready to meet your new best friend?
        </h2>
        <p className="mt-6 text-milk/85 text-lg max-w-2xl" data-reveal="">
          Bring home a healthy, happy teacup or designer puppy with expert
          guidance every step of the way. We help you find the right match and
          ensure a smooth, safe delivery across the UAE.
        </p>

        {/* Warm-lit wooden clapboard doorway + glowing open door + welcome home mat */}
        <div
          aria-hidden="true"
          className="my-12 relative w-full max-w-xl rounded-3xl border-[3px] border-milk/30 p-6 pb-8 overflow-visible"
          style={{
            background:
              "repeating-linear-gradient(180deg, #5a3a28 0 32px, #3b2216 32px 35px, #6c3e24 35px 67px, #2a170e 67px 70px)",
          }}
        >
          {/* Wall Sconce */}
          <div className="hidden sm:block absolute top-10 left-12">
            <div className="w-8 h-8 rounded-full bg-honey/55 blur-md" />
            <div className="-mt-6 mx-auto w-5 h-6 rounded-t-full border-2 border-cocoa bg-honey" />
          </div>

          <div className="flex items-end justify-center gap-6 relative">
            {/* Running PupBuddy heading home */}
            <div className="hidden sm:block -mb-2">
              <PupBuddy
                pose="run"
                facing="right"
                bubble="welcome home!"
                className="w-24"
              />
            </div>

            {/* Glowing Open Arched Door revealing Max */}
            <div className="relative mx-auto sm:mx-0 w-40 h-52 rounded-t-full border-[3px] border-milk/85 bg-gradient-to-b from-honey via-honey-soft to-toffee flex items-end justify-center overflow-hidden shadow-[0_0_55px_rgba(242,190,107,0.45)]">
              <Image
                src="/images/puppies/max-maltipoo.webp"
                alt="Max waiting at the doorway"
                fill
                sizes="160px"
                className="object-cover"
              />
            </div>

            {/* Potted plant */}
            <svg
              width="42"
              height="60"
              viewBox="0 0 42 60"
              fill="none"
              className="hidden sm:block shrink-0"
            >
              <path
                d="M11 38 h20 l-3 20 h-14 z"
                fill="#c2622b"
                stroke="#2a170e"
                strokeWidth="2.5"
              />
              <path
                d="M21 38 C16 20, 6 18, 6 10 C14 12, 19 22, 21 38 Z"
                fill="#1f7a4d"
                stroke="#2a170e"
                strokeWidth="2"
              />
              <path
                d="M21 38 C26 18, 36 16, 36 8 C28 10, 23 20, 21 38 Z"
                fill="#2f6e9e"
                stroke="#2a170e"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Welcome Home Doormat */}
          <div className="mx-auto mt-2 w-48 rounded-lg border-2 border-cocoa bg-[#e4a85b] px-4 py-1.5 font-scrawl text-sm text-cocoa shadow-[3px_4px_0_0_rgba(42,23,14,0.4)]">
            welcome home
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp w-full sm:w-auto"
          >
            Enquire on WhatsApp
          </a>
          <Link href="/contact" className="btn btn-ghost-light w-full sm:w-auto">
            Visit &amp; contact
          </Link>
        </div>
      </div>
    </section>
  );
}
