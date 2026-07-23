import Link from "next/link";
import { site } from "@/data/site";
import RevealOnScroll from "./RevealOnScroll";

export default function LocationPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
      <div className="card grid grid-cols-1 overflow-hidden lg:grid-cols-2">
        <div className="p-8 sm:p-12">
          <RevealOnScroll>
            <p className="eyebrow">Find Us</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-cream sm:text-4xl">
              Visit Cheesy Burger
            </h2>
            <p className="mt-4 max-w-md text-cream/60">
              Tucked in Maqabah, Budaiya — easy to find, easy to park, open long after the rest of
              Bahrain has closed the kitchen.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-cream/80">
              <li className="flex items-center gap-3">
                <span className="text-cheese">📍</span> {site.address}
              </li>
              <li className="flex items-center gap-3">
                <span className="text-cheese">📞</span> {site.phone}
              </li>
              <li className="flex items-center gap-3">
                <span className="text-cheese">🕓</span> {site.hours}
              </li>
            </ul>

            <Link href="/contact" className="btn-primary mt-8 inline-flex">
              Get Directions
            </Link>
          </RevealOnScroll>
        </div>

        {/* Map placeholder */}
        <div className="min-h-[280px] w-full">
          <iframe
            src={site.mapsEmbedSrc}
            title="Cheesy Burger location map"
            className="h-full w-full min-h-[280px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
