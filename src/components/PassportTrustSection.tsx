const STAMPS = [
  {
    title: "Vet-checked & healthy",
    desc: "Every puppy comes vaccinated, dewormed, and with a verified health certificate.",
    rotate: "-rotate-2",
    tone: "bg-honey-soft",
    stamp: "APPROVED · VET",
  },
  {
    title: "Korea to Dubai, safely",
    desc: "Trusted breeders, safe travel, and premium care from start to finish.",
    rotate: "rotate-2",
    tone: "bg-sky",
    stamp: "ICN → DXB",
  },
  {
    title: "Support 24/7",
    desc: "Always here to help, from choosing your puppy to post-delivery support.",
    rotate: "rotate-1",
    tone: "bg-blush",
    stamp: "24 / 7 CARE",
  },
  {
    title: "Trusted by families worldwide",
    desc: "Puppies delivered to loving homes all around the world.",
    rotate: "-rotate-1",
    tone: "bg-honey-soft",
    stamp: "UAE & WORLD",
  },
];

export function PassportTrustSection() {
  return (
    <section
      className="tp-scene tp-passport pt-16 pb-0 relative"
      style={{
        background: "linear-gradient(to bottom, #f0b866, #a65a30)",
      }}
    >
      <div className="tp-gutter max-w-5xl mx-auto relative z-10">
        {/* Open 2-Page Passport Booklet */}
        <div
          data-reveal=""
          className="relative tp-board p-6 sm:p-10 md:p-12 -rotate-1 shadow-[10px_14px_0_0_rgba(42,23,14,0.28)]"
        >
          {/* Passport Spine Stitch */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-5 bottom-5 left-[41.6%] w-px border-l-2 border-dashed border-cocoa/35"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left passport page */}
            <div className="lg:col-span-5 lg:pr-8">
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-cocoa bg-honey-soft px-3.5 py-1 mb-4">
                <svg
                  width="16"
                  height="16"
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
                <span className="font-scrawl text-sm text-toffee-ink">
                  puppy passport
                </span>
              </div>

              <h2 className="font-plush text-4xl sm:text-5xl text-cocoa leading-[0.96]">
                Why families trust TeddyPups
              </h2>

              <p className="mt-4 font-scrawl text-sm text-cocoa-soft">
                official companion travel &amp; health record · U.A.E.
              </p>
            </div>

            {/* Right passport page: 2x2 stamp grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {STAMPS.map((stamp) => (
                <div
                  key={stamp.title}
                  className={`${stamp.tone} ${stamp.rotate} rounded-2xl border-2 border-dashed border-cocoa p-4 shadow-[3px_4px_0_0_rgba(42,23,14,0.16)] transition-transform duration-300 hover:rotate-0 hover:-translate-y-1`}
                >
                  <span className="inline-block mb-1.5 rounded border border-cocoa/40 px-1.5 py-0.5 text-[10px] font-bold tracking-widest text-toffee-ink">
                    {stamp.stamp}
                  </span>
                  <h3 className="font-plush text-[1.08rem] leading-[1.05] text-cocoa">
                    {stamp.title}
                  </h3>
                  <p className="mt-2 text-sm text-cocoa-soft leading-snug">
                    {stamp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Glowing Sun + Sunset Dubai Skyline Silhouette */}
      <div aria-hidden="true" className="mt-12 w-full overflow-hidden relative">
        <div className="mx-auto w-36 h-18 rounded-t-full bg-gradient-to-t from-toffee to-honey border-t-2 border-x-2 border-cocoa/35 -mb-8 shadow-[0_0_65px_rgba(242,190,107,0.85)]" />
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-20 md:h-24 text-cocoa/35 relative z-10"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0 100V68h60V46h45v54h30V32h35v68h40V55h55v45h45V36h30v64h50V6l7 28h5l8 22h20V48h50v52h60V38h40v62h55V24h35v76h45V54h60v46h40V32h35v68h50V44h45v56h55V22h30v78h45V50h60v50h50V36h40v64h55V48h45v52h70V100H0z" />
        </svg>
      </div>
    </section>
  );
}
