import type { Metadata } from "next";
import { FaqCorkboardClient } from "@/components/FaqCorkboardClient";

export const metadata: Metadata = {
  title: "Questions & answers",
  description:
    "Answers to frequently asked questions about TeddyPups U.A.E. vaccinations, Dubai showroom visits, Korea & Europe imports, and delivery.",
};

export default function FaqPage() {
  return (
    <div
      data-tone="dark"
      className="tp-scene tp-faqroom pt-[calc(var(--header-h)+2.75rem)] pb-24 text-milk"
      style={{
        background: "linear-gradient(to bottom, #a95e32, #331c11)",
      }}
    >
      <div className="tp-gutter max-w-6xl mx-auto">
        <header className="max-w-3xl mb-12">
          <p className="font-scrawl text-xl text-honey mb-2">
            the notice board
          </p>
          <h1 className="text-huge text-milk">Questions &amp; answers</h1>
          <p className="mt-5 text-lg text-milk/85 leading-relaxed">
            Can&apos;t find what you&apos;re looking for? Message us on WhatsApp
            — our team is available 24/7.
          </p>
        </header>

        <FaqCorkboardClient />
      </div>
    </div>
  );
}
