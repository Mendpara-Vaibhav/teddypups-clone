import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { PuppyEnquiryForm } from "@/components/PuppyEnquiryForm";
import { PuppyMediaViewer } from "@/components/PuppyMediaViewer";
import { IMPORTED_STEPS } from "@/data/howItWorks";
import { WHATSAPP_URL } from "@/data/navigation";
import { AVAILABLE_PUPPIES } from "@/data/puppies";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return AVAILABLE_PUPPIES.map((puppy) => ({ slug: puppy.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const puppy = AVAILABLE_PUPPIES.find((p) => p.slug === slug);
  if (!puppy) {
    return { title: "Puppy not found" };
  }
  return {
    title: puppy.name,
    description: `${puppy.name} — ${puppy.breed} (${puppy.gender}, ${puppy.ageLabel}). Available for loving homes via TeddyPups U.A.E.`,
  };
}

const INCLUDED_CHECKLIST = [
  "Verified health certificate from licensed vets",
  "Vaccinated & dewormed on schedule before travel",
  "Microchipped with full travel & import passport",
  "24/7 concierge support before and after arrival",
];

async function PuppyDetailContent({ params }: Props) {
  const { slug } = await params;
  const index = AVAILABLE_PUPPIES.findIndex((p) => p.slug === slug);

  if (index === -1) {
    notFound();
  }

  const puppy = AVAILABLE_PUPPIES[index];
  const prevPuppy =
    AVAILABLE_PUPPIES[
      (index - 1 + AVAILABLE_PUPPIES.length) % AVAILABLE_PUPPIES.length
    ];
  const nextPuppy =
    AVAILABLE_PUPPIES[(index + 1) % AVAILABLE_PUPPIES.length];

  return (
    <div className="tp-gutter max-w-6xl mx-auto">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8 text-sm font-semibold">
        <ol className="flex flex-wrap items-center gap-2 text-cocoa-soft">
          <li>
            <Link
              href="/puppies"
              className="text-toffee-ink underline decoration-2 underline-offset-4 hover:text-toffee-deep"
            >
              Available puppies
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-cocoa">{puppy.name}</li>
        </ol>
      </nav>

      {/* Top 2-col Viewer + Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-6">
          <PuppyMediaViewer
            name={puppy.name}
            image={puppy.image}
            videoUrl={puppy.videoUrl}
          />
        </div>

        <div className="lg:col-span-6 min-w-0">
          <div className="tp-board p-7 sm:p-9 shadow-[8px_10px_0_0_rgba(42,23,14,0.16)]">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="inline-block rounded-full border-2 border-cocoa bg-honey-soft px-3.5 py-1 font-scrawl text-sm text-cocoa">
                {puppy.status}
              </span>
              {puppy.isKoreanTeacup && (
                <span className="inline-block rounded-full border-2 border-cocoa bg-sky px-3.5 py-1 font-scrawl text-sm text-cocoa">
                  Korean Teacup
                </span>
              )}
            </div>

            <h1 className="font-plush text-[clamp(2.4rem,4.5vw,3.75rem)] leading-[0.95] text-cocoa">
              {puppy.name}
            </h1>

            <dl className="mt-6 divide-y divide-cocoa/15 border-y border-cocoa/15">
              <div className="py-3.5 flex items-center justify-between gap-4">
                <dt className="font-scrawl text-base text-toffee-ink">Breed</dt>
                <dd className="font-semibold text-cocoa">{puppy.breed}</dd>
              </div>
              <div className="py-3.5 flex items-center justify-between gap-4">
                <dt className="font-scrawl text-base text-toffee-ink">
                  Boy or girl
                </dt>
                <dd className="font-semibold text-cocoa capitalize">
                  {puppy.gender}
                </dd>
              </div>
              <div className="py-3.5 flex items-center justify-between gap-4">
                <dt className="font-scrawl text-base text-toffee-ink">Age</dt>
                <dd className="font-semibold text-cocoa">{puppy.ageLabel}</dd>
              </div>
              <div className="py-3.5 flex items-center justify-between gap-4">
                <dt className="font-scrawl text-base text-toffee-ink">Where</dt>
                <dd className="font-semibold text-cocoa">Imported for you</dd>
              </div>
            </dl>

            <div className="mt-7 flex flex-wrap gap-3.5">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp flex-1 min-w-[220px] !whitespace-normal text-center"
              >
                Ask about {puppy.name} on WhatsApp
              </a>
              <a href="#enquiry" className="btn btn-ghost">
                Send an enquiry
              </a>
            </div>
          </div>

          {/* Every Teddy Pup comes */}
          <div className="mt-8 tp-board p-6 sm:p-8 shadow-[6px_8px_0_0_rgba(42,23,14,0.14)]">
            <h2 className="font-plush text-2xl sm:text-3xl text-cocoa mb-4">
              Every Teddy Pup comes
            </h2>
            <ul className="space-y-3">
              {INCLUDED_CHECKLIST.map((item) => (
                <li key={item} className="flex items-start gap-3 text-cocoa-soft">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-cocoa bg-honey-soft text-xs font-bold text-cocoa"
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Coming home from abroad */}
      <section className="mt-16" aria-labelledby="abroad-title">
        <div className="mb-8">
          <p className="font-scrawl text-lg text-toffee-ink mb-1">
            how your puppy travels
          </p>
          <h2
            id="abroad-title"
            className="font-plush text-[clamp(2rem,4vw,3.25rem)] leading-tight text-cocoa"
          >
            Coming home from abroad
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {IMPORTED_STEPS.map((step) => (
            <div
              key={step.step}
              className="tp-board p-6 flex flex-col gap-2.5 shadow-[5px_7px_0_0_rgba(42,23,14,0.14)]"
            >
              <span className="font-scrawl text-sm text-toffee-ink">
                {step.step}
              </span>
              <h3 className="font-plush text-xl text-cocoa">{step.title}</h3>
              <p className="text-sm text-cocoa-soft leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="mt-16 max-w-3xl mx-auto">
        <PuppyEnquiryForm puppyName={puppy.name} />
      </section>

      {/* Prev / Next Navigation */}
      <nav
        aria-label="Browse other puppies"
        className="mt-16 pt-8 border-t-2 border-cocoa/15 flex flex-wrap items-center justify-between gap-4"
      >
        <Link
          href={`/puppies/${prevPuppy.slug}`}
          className="btn btn-ghost text-sm sm:text-base"
        >
          ← Previous pup ({prevPuppy.name})
        </Link>
        <Link
          href={`/puppies/${nextPuppy.slug}`}
          className="btn btn-ghost text-sm sm:text-base"
        >
          Next pup ({nextPuppy.name}) →
        </Link>
      </nav>
    </div>
  );
}

export default function PuppyDetailPage({ params }: Props) {
  return (
    <div
      className="tp-scene pt-[calc(var(--header-h)+2rem)] pb-20"
      style={{
        background: "linear-gradient(to bottom, #fffdf8, #fff1d8, #fbe3b4)",
      }}
    >
      <Suspense
        fallback={
          <div className="tp-gutter max-w-6xl mx-auto">
            <div className="tp-board p-8 text-center font-scrawl text-toffee-ink">
              Loading puppy details...
            </div>
          </div>
        }
      >
        <PuppyDetailContent params={params} />
      </Suspense>
    </div>
  );
}
