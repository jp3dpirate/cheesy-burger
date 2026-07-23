import { bestSellers } from "@/data/menu";
import MenuCard from "./MenuCard";
import RevealOnScroll from "./RevealOnScroll";

export default function BestSellers() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
      <RevealOnScroll className="mb-10 max-w-lg">
        <p className="eyebrow">Fan Favorites</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-cream sm:text-4xl">
          Best Sellers
        </h2>
        <p className="mt-3 text-cream/60">
          The dishes our regulars order on repeat — start here if it&apos;s your first visit.
        </p>
      </RevealOnScroll>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {bestSellers.map((item, i) => (
          <RevealOnScroll key={item.id} delay={i * 100}>
            <MenuCard item={item} />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
