"use client";

import { useState, type FormEvent } from "react";
import { WHATSAPP_URL } from "@/data/navigation";
import { AVAILABLE_PUPPIES } from "@/data/puppies";
import { PupBuddy } from "./PupBuddy";

export function ContactPostcardForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");
  const [puppyChoice, setPuppyChoice] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError("Please fill in your name and phone or WhatsApp number.");
      return;
    }
    setError(null);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="tp-post__sent p-8 sm:p-12 text-center flex flex-col items-center">
        {/* Cartoon Mailbox with Raised Flag SVG */}
        <svg
          viewBox="0 0 200 150"
          className="w-40 h-auto mb-5"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="92"
            y="100"
            width="16"
            height="44"
            fill="#a24a1a"
            stroke="#2a170e"
            strokeWidth="3.5"
          />
          <path
            d="M42 98 V62 C42 42, 60 30, 82 30 H136 C154 30, 166 44, 166 64 V98 Z"
            fill="#fffdf8"
            stroke="#2a170e"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <path
            d="M42 98 V62 C42 42, 60 30, 82 30 C102 30, 114 44, 114 64 V98 Z"
            fill="#fbe3b4"
            stroke="#2a170e"
            strokeWidth="3.5"
          />
          {/* Raised Red/Toffee Flag */}
          <path
            d="M128 54 V16 H156 V32 H134 V54 Z"
            fill="#a24a1a"
            stroke="#2a170e"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <circle cx="131" cy="56" r="5" fill="#2a170e" />
        </svg>

        <h2 className="font-plush text-3xl sm:text-4xl text-cocoa">
          Message received!
        </h2>
        <p className="mt-3 text-cocoa-soft max-w-md leading-relaxed">
          Thank you — our team will get back to you promptly. For the quickest
          reply, message us on WhatsApp.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            WhatsApp us
          </a>
          <button
            type="button"
            onClick={() => setSent(false)}
            className="btn btn-ghost"
          >
            Write another letter
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="tp-letterform relative p-7 sm:p-10 pl-10 sm:pl-14"
    >
      {/* Top-right Paw Postage Stamp */}
      <div
        aria-hidden="true"
        className="hidden sm:flex flex-col items-center justify-center h-20 w-16 rounded-md border-2 border-dashed border-toffee-deep bg-honey-soft/50 rotate-3 float-right ml-4 mb-2"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="#a24a1a"
        >
          <circle cx="8" cy="7" r="2.2" />
          <circle cx="16" cy="7" r="2.2" />
          <circle cx="5" cy="12.5" r="2" />
          <circle cx="19" cy="12.5" r="2" />
          <path d="M12 11c-3 0-5.5 2.4-5.5 5 0 2 1.6 3.5 3.5 3.5 1 0 1.5-.4 2-.4s1 .4 2 .4c1.9 0 3.5-1.5 3.5-3.5 0-2.6-2.5-5-5.5-5z" />
        </svg>
        <span className="font-scrawl text-[10px] text-toffee-ink mt-1">
          UAE POST
        </span>
      </div>

      {error && (
        <p
          role="alert"
          className="mb-5 rounded-xl border-2 border-toffee-deep bg-blush/65 px-4 py-3 text-sm font-semibold text-cocoa"
        >
          {error}
        </p>
      )}

      <div className="space-y-4 font-plush-text text-lg sm:text-xl leading-loose text-cocoa">
        <p>Dear TeddyPups,</p>

        <p className="leading-[2.4rem]">
          my name is{" "}
          <input
            type="text"
            aria-label="Your name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="your name *"
            className="inline-block w-44 sm:w-52 border-b-2 border-dashed border-cocoa bg-transparent px-1.5 py-0.5 font-scrawl text-base sm:text-lg text-toffee-ink placeholder:text-cocoa-soft/45 focus:border-solid focus:border-toffee-deep focus:outline-none"
          />
          , and you can reach me on{" "}
          <input
            type="tel"
            aria-label="Phone or WhatsApp number with country code"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+971 50 123 4567"
            className="inline-block w-48 sm:w-56 border-b-2 border-dashed border-cocoa bg-transparent px-1.5 py-0.5 font-scrawl text-base sm:text-lg text-toffee-ink placeholder:text-cocoa-soft/45 focus:border-solid focus:border-toffee-deep focus:outline-none"
          />{" "}
          or by email at{" "}
          <input
            type="email"
            aria-label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="optional"
            className="inline-block w-44 sm:w-52 border-b-2 border-dashed border-cocoa bg-transparent px-1.5 py-0.5 font-scrawl text-base sm:text-lg text-toffee-ink placeholder:text-cocoa-soft/45 focus:border-solid focus:border-toffee-deep focus:outline-none"
          />
          .
        </p>

        <p className="leading-[2.4rem]">
          I live in{" "}
          <input
            type="text"
            aria-label="Your area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="e.g. Dubai Marina"
            className="inline-block w-44 sm:w-52 border-b-2 border-dashed border-cocoa bg-transparent px-1.5 py-0.5 font-scrawl text-base sm:text-lg text-toffee-ink placeholder:text-cocoa-soft/45 focus:border-solid focus:border-toffee-deep focus:outline-none"
          />
          , and I&apos;m curious about{" "}
          <select
            aria-label="Puppy you're interested in"
            value={puppyChoice}
            onChange={(e) => setPuppyChoice(e.target.value)}
            className="inline-block max-w-full border-b-2 border-dashed border-cocoa bg-transparent px-1.5 py-0.5 font-scrawl text-base sm:text-lg text-toffee-ink focus:border-solid focus:border-toffee-deep focus:outline-none"
          >
            <option value="">any puppy (not sure yet)</option>
            {AVAILABLE_PUPPIES.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name} ({p.breed}, {p.gender})
              </option>
            ))}
          </select>
          .
        </p>

        <div className="pt-2">
          <textarea
            aria-label="Your message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Anything else you'd like to tell us..."
            className="tp-ruled w-full rounded-xl border-2 border-cocoa/35 px-4 py-3 font-sans text-base text-cocoa placeholder:text-cocoa-soft/45 focus:border-cocoa focus:outline-none"
          />
        </div>

        <p className="font-scrawl text-base text-toffee-ink pt-1">
          with love, a future puppy parent
        </p>
      </div>

      <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
        <button type="submit" className="btn btn-primary">
          Post my letter
        </button>

        <div className="hidden sm:block -mb-4">
          <PupBuddy pose="sit" facing="left" className="w-20" />
        </div>
      </div>
    </form>
  );
}
