"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { galleryCategories, galleryImages, GalleryCategory } from "@/data/gallery";

export default function GalleryGrid() {
  const [active, setActive] = useState<GalleryCategory | "All">("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = galleryImages.filter((img) => active === "All" || img.category === active);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i! + 1) % filtered.length);
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i! - 1 + filtered.length) % filtered.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, filtered.length]);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {(["All", ...galleryCategories] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-4 py-2 font-display text-xs font-semibold transition-colors ${
              active === cat
                ? "bg-cheese text-ink"
                : "border border-white/10 bg-char text-cream/70 hover:border-cheese/50 hover:text-cheese"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry via CSS columns */}
      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
        {filtered.map((img, i) => (
          <button
            key={img.id}
            onClick={() => setLightboxIndex(i)}
            className={`group relative block w-full overflow-hidden rounded-xl ${
              img.tall ? "aspect-[3/4]" : "aspect-square"
            }`}
            aria-label={`Open image: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <span className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/30" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            aria-label="Close image viewer"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-cream hover:bg-white/20"
          >
            ✕
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i! - 1 + filtered.length) % filtered.length);
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-cream hover:bg-white/20 sm:left-6"
          >
            ‹
          </button>

          <div
            className="relative max-h-[80vh] w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                fill
                className="rounded-xl object-contain"
              />
            </div>
            <p className="mt-3 text-center text-sm text-cream/60">{filtered[lightboxIndex].alt}</p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i! + 1) % filtered.length);
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-cream hover:bg-white/20 sm:right-6"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
