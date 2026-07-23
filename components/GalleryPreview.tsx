import Image from "next/image";
import Link from "next/link";
import { galleryImages } from "@/data/gallery";
import RevealOnScroll from "./RevealOnScroll";

export default function GalleryPreview() {
  const preview = galleryImages.slice(0, 6);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
      <RevealOnScroll className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow">A Taste, In Pictures</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-cream sm:text-4xl">
            Gallery Preview
          </h2>
        </div>
        <Link href="/gallery" className="btn-outline text-sm">
          View Full Gallery
        </Link>
      </RevealOnScroll>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {preview.map((img, i) => (
          <RevealOnScroll key={img.id} delay={i * 60} className="aspect-square overflow-hidden rounded-xl">
            <div className="relative h-full w-full">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                loading="lazy"
                sizes="200px"
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
