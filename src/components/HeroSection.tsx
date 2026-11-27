import Link from "next/link";
import { WHATSAPP_URL } from "@/data/navigation";
import { HeroLineup } from "./HeroLineup";

export function HeroSection() {
  return (
    <section
      className="tp-scene tp-hero pt-[calc(var(--header-h)+3.25rem)] pb-0"
      style={{
        background:
          "radial-gradient(circle at 50% 28%, rgba(251, 227, 180, 0.45), transparent 60%), linear-gradient(to bottom, #fffdf8, #fff1d8)",
      }}
    >
      <div className="tp-gutter flex flex-col items-center text-center">
        {/* Eyebrow with hand-drawn underline */}
        <p className="font-scrawl text-xl md:text-2xl text-toffee-ink relative inline-block mb-4">
          every puppy is family
          <svg
            aria-hidden="true"
            viewBox="0 0 220 14"
            className="w-full h-3 text-toffee -mt-1"
            fill="none"
          >
            <path
              d="M4 9.5C58 3.5 142 3 216 9"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </p>

        <h1
          id="hero-title"
          className="font-plush text-cocoa max-w-[15ch] text-[clamp(2.6rem,min(9.2vw,11vh),8.4rem)] leading-[0.92] tracking-[-0.025em]"
        >
          Premium teacup puppies in Dubai
        </h1>

        <p className="mt-6 text-cocoa-soft max-w-[46ch] text-[clamp(1.05rem,1.25vw,1.28rem)] leading-[1.5]">
          Meet your new best friend in our Dubai showroom, or order a rare
          miniature breed from trusted breeders worldwide.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link href="/puppies" className="btn btn-primary w-full sm:w-auto">
            View available puppies
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp w-full sm:w-auto"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>

      {/* Animated staggered puppy lineup + PupBuddy + Quilted blanket */}
      <HeroLineup />
    </section>
  );
}
