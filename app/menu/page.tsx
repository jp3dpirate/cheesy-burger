import type { Metadata } from "next";
import MenuBrowser from "@/components/MenuBrowser";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Browse Cheesy Burger's full menu — signature stuffed burgers, smash burgers, steak sandwiches, loaded fries, and drinks. Prices in BHD, Maqabah, Budaiya, Bahrain.",
};

export default function MenuPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-32 pb-20 sm:px-8">
      <div className="mb-12 max-w-2xl">
        <p className="eyebrow">Fresh. Stuffed. Smashed.</p>
        <h1 className="mt-2 font-display text-4xl font-extrabold text-cream sm:text-5xl">
          Our Menu
        </h1>
        <p className="mt-4 text-cream/60">
          Every burger is built to order. Search by name or filter by category to find your next
          favorite.
        </p>
      </div>

      <MenuBrowser />
    </section>
  );
}
