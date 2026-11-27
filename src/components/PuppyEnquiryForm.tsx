"use client";

import { useState, type FormEvent } from "react";
import { WHATSAPP_URL } from "@/data/navigation";

type Props = {
  puppyName: string;
};

export function PuppyEnquiryForm({ puppyName }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError("Please fill in your name and phone or WhatsApp number.");
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        id="enquiry"
        className="tp-board p-7 sm:p-10 shadow-[8px_10px_0_0_rgba(42,23,14,0.16)]"
      >
        <p className="font-scrawl text-xl text-toffee-ink mb-2">
          note received!
        </p>
        <h2 className="font-plush text-3xl text-cocoa">
          Thank you, {name.trim()}
        </h2>
        <p className="mt-3 text-cocoa-soft leading-relaxed">
          We&apos;ve noted your enquiry about <strong>{puppyName}</strong> and
          our team will contact you on <strong>{phone.trim()}</strong> shortly
          with photos, videos, and health details. Want an instant reply?
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            Chat on WhatsApp now
          </a>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="btn btn-ghost"
          >
            Send another note
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      id="enquiry"
      onSubmit={handleSubmit}
      noValidate
      className="tp-board p-7 sm:p-10 shadow-[8px_10px_0_0_rgba(42,23,14,0.16)]"
    >
      <p className="font-scrawl text-lg text-toffee-ink mb-1">
        send us a quick note
      </p>
      <h2 className="font-plush text-3xl sm:text-4xl text-cocoa mb-6">
        Ask about {puppyName}
      </h2>

      {error && (
        <p
          role="alert"
          className="mb-5 rounded-xl border-2 border-toffee-deep bg-blush/60 px-4 py-3 text-sm font-semibold text-cocoa"
        >
          {error}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="enquiry-name"
            className="block text-sm font-semibold text-cocoa mb-1.5"
          >
            Your name <span className="text-toffee-deep">*</span>
          </label>
          <input
            id="enquiry-name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Sarah"
            className="w-full rounded-xl border-2 border-cocoa bg-milk px-4 py-3 text-cocoa placeholder:text-cocoa-soft/50 focus:outline-none focus:ring-2 focus:ring-toffee-deep"
          />
        </div>

        <div>
          <label
            htmlFor="enquiry-phone"
            className="block text-sm font-semibold text-cocoa mb-1.5"
          >
            Phone or WhatsApp <span className="text-toffee-deep">*</span>
          </label>
          <input
            id="enquiry-phone"
            name="phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+971 50 123 4567"
            className="w-full rounded-xl border-2 border-cocoa bg-milk px-4 py-3 text-cocoa placeholder:text-cocoa-soft/50 focus:outline-none focus:ring-2 focus:ring-toffee-deep"
          />
        </div>

        <div>
          <label
            htmlFor="enquiry-email"
            className="block text-sm font-semibold text-cocoa mb-1.5"
          >
            Email
          </label>
          <input
            id="enquiry-email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="optional"
            className="w-full rounded-xl border-2 border-cocoa bg-milk px-4 py-3 text-cocoa placeholder:text-cocoa-soft/50 focus:outline-none focus:ring-2 focus:ring-toffee-deep"
          />
        </div>

        <div>
          <label
            htmlFor="enquiry-area"
            className="block text-sm font-semibold text-cocoa mb-1.5"
          >
            Your area
          </label>
          <input
            id="enquiry-area"
            name="area"
            type="text"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="e.g. Downtown Dubai"
            className="w-full rounded-xl border-2 border-cocoa bg-milk px-4 py-3 text-cocoa placeholder:text-cocoa-soft/50 focus:outline-none focus:ring-2 focus:ring-toffee-deep"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="enquiry-message"
            className="block text-sm font-semibold text-cocoa mb-1.5"
          >
            Message
          </label>
          <textarea
            id="enquiry-message"
            name="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={`Tell us anything you'd like to know about ${puppyName}...`}
            className="w-full rounded-xl border-2 border-cocoa bg-milk px-4 py-3 text-cocoa placeholder:text-cocoa-soft/50 focus:outline-none focus:ring-2 focus:ring-toffee-deep"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn-primary">
          Send enquiry
        </button>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-toffee-ink underline decoration-2 underline-offset-4 hover:text-toffee-deep"
        >
          Or message us directly on WhatsApp
        </a>
      </div>
    </form>
  );
}
