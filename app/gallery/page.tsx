import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A look inside Cheesy Burger — burgers, loaded fries, drinks, the kitchen, and the restaurant in Maqabah, Budaiya, Bahrain.",
};

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-32 pb-20 sm:px-8">
      <div className="mb-12 max-w-2xl">
        <p className="eyebrow">Behind the Grill</p>
        <h1 className="mt-2 font-display text-4xl font-extrabold text-cream sm:text-5xl">
          Gallery
        </h1>
        <p className="mt-4 text-cream/60">
          Tap any photo for a closer look. Filter by category to jump straight to what you&apos;re
          craving.
        </p>
      </div>

      <GalleryGrid />
    </section>
  );
}
