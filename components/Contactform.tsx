"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // NOTE: no backend is wired up yet — hook this up to your email/CRM
    // provider (e.g. an API route, Formspree, or your POS system).
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="card p-8 text-center">
        <p className="text-3xl">✅</p>
        <h3 className="mt-4 font-display text-xl font-semibold text-cream">Message sent</h3>
        <p className="mt-2 text-sm text-cream/60">
          Thanks for reaching out — our team will get back to you shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-outline mt-6 text-sm"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5 p-8">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-cream/80">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your full name"
          className="w-full rounded-lg border border-white/10 bg-char2 px-4 py-3 text-sm text-cream placeholder:text-cream/35 focus:border-cheese focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-cream/80">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-lg border border-white/10 bg-char2 px-4 py-3 text-sm text-cream placeholder:text-cream/35 focus:border-cheese focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-cream/80">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+973 ..."
            className="w-full rounded-lg border border-white/10 bg-char2 px-4 py-3 text-sm text-cream placeholder:text-cream/35 focus:border-cheese focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-cream/80">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="How can we help?"
          className="w-full resize-none rounded-lg border border-white/10 bg-char2 px-4 py-3 text-sm text-cream placeholder:text-cream/35 focus:border-cheese focus:outline-none"
        />
      </div>

      <button type="submit" className="btn-primary w-full">
        Send Message
      </button>
    </form>
  );
}
