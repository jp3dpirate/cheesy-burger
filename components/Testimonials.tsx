"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/data/testimonials";
import StarRating from "./StarRating";
import RevealOnScroll from "./RevealOnScroll";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5500);
    return () => window.clearInterval(id);
  }, []);

  const current = testimonials[index];

  return (
    <section className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-8">
      <RevealOnScroll>
        <p className="eyebrow">Customer Reviews</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-cream sm:text-4xl">
          What Bahrain Is Saying
        </h2>
      </RevealOnScroll>

      <div className="card mt-10 min-h-[220px] p-8 sm:p-12" aria-live="polite">
        <div className="flex justify-center">
          <StarRating rating={current.rating} size={20} />
        </div>
        <p className="mt-6 text-lg leading-relaxed text-cream/85 sm:text-xl">
          &ldquo;{current.quote}&rdquo;
        </p>
        <p className="mt-6 font-display font-semibold text-cheese">{current.name}</p>
        <p className="text-xs text-cream/50">{current.visit}</p>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((t, i) => (
          <button
            key={t.id}
            aria-label={`Show testimonial from ${t.name}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-8 bg-cheese" : "w-2.5 bg-white/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
