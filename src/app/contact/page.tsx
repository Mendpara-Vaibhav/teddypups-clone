import type { Metadata } from "next";
import Image from "next/image";
import { ContactPostcardForm } from "@/components/ContactPostcardForm";
import { CONTACT_INFO } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Visit & contact",
  description:
    "Contact TeddyPups U.A.E. on WhatsApp, phone, or email, or visit our Downtown Dubai showroom.",
};

export default function ContactPage() {
  return (
    <div
      className="tp-scene pt-[calc(var(--header-h)+2.75rem)] pb-24"
      style={{
        background: "linear-gradient(to bottom, #fff9ee, #f9dca4)",
      }}
    >
      <div className="tp-gutter max-w-6xl mx-auto">
        <header className="max-w-3xl mb-12">
          <p className="font-scrawl text-xl text-toffee-ink mb-2">
            we&apos;d love to hear from you
          </p>
          <h1 className="text-huge text-cocoa">Get in touch with us</h1>
          <p className="mt-5 text-lg text-cocoa-soft leading-relaxed">
            Have questions about our puppies or adoption process? Fill out the
            form, and our team will get back to you promptly. Whether ready to
            adopt or just seeking info, we&apos;d love to hear from you!
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Direct Contacts + Downtown Dubai Shopfront */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="tp-board p-6 sm:p-7 shadow-[6px_8px_0_0_rgba(42,23,14,0.16)] flex flex-col gap-5">
              <div>
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp w-full"
                >
                  WhatsApp {CONTACT_INFO.whatsappDisplay}
                </a>
              </div>

              <div className="border-t border-cocoa/15 pt-4">
                <p className="font-scrawl text-sm text-toffee-ink">call us</p>
                <a
                  href={CONTACT_INFO.phoneHref}
                  className="font-plush text-2xl text-cocoa hover:text-toffee-deep transition-colors no-underline"
                >
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </div>

              <div className="border-t border-cocoa/15 pt-4">
                <p className="font-scrawl text-sm text-toffee-ink">email</p>
                <a
                  href={CONTACT_INFO.emailHref}
                  className="font-semibold text-lg text-cocoa underline decoration-2 underline-offset-4 hover:text-toffee-deep"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            {/* Downtown Dubai Shopfront */}
            <section
              aria-labelledby="showroom-title"
              className="tp-shopfront overflow-hidden"
            >
              <div className="tp-awning" aria-hidden="true" />
              <div className="p-6">
                <h2
                  id="showroom-title"
                  className="font-plush text-2xl sm:text-3xl text-cocoa"
                >
                  Visit us in Downtown Dubai
                </h2>
                <p className="mt-2 text-sm text-cocoa-soft leading-relaxed">
                  Step into our Downtown Dubai showroom and experience the joy
                  of choosing your puppy face-to-face.
                </p>

                <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cocoa">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="#a24a1a"
                    aria-hidden="true"
                  >
                    <circle cx="8" cy="7" r="2.2" />
                    <circle cx="16" cy="7" r="2.2" />
                    <circle cx="5" cy="12.5" r="2" />
                    <circle cx="19" cy="12.5" r="2" />
                    <path d="M12 11c-3 0-5.5 2.4-5.5 5 0 2 1.6 3.5 3.5 3.5 1 0 1.5-.4 2-.4s1 .4 2 .4c1.9 0 3.5-1.5 3.5-3.5 0-2.6-2.5-5-5.5-5z" />
                  </svg>
                  <span>{CONTACT_INFO.address}</span>
                </p>

                <div className="mt-4">
                  <a
                    href={CONTACT_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost text-sm py-2 px-4 min-h-0"
                  >
                    Open in Google Maps
                  </a>
                </div>

                <div className="mt-6 relative aspect-[4/3] w-full rounded-t-full border-[3px] border-cocoa overflow-hidden bg-milk">
                  <Image
                    src="/images/showroom.jpg"
                    alt="TeddyPups Downtown Dubai showroom"
                    fill
                    sizes="(max-width: 1024px) 90vw, 420px"
                    className="object-cover"
                  />
                </div>
              </div>
            </section>
          </div>

          {/* Right: Fill-in-the-blank Postcard Form */}
          <div className="lg:col-span-7">
            <ContactPostcardForm />
          </div>
        </div>
      </div>
    </div>
  );
}
