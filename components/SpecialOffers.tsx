import RevealOnScroll from "./RevealOnScroll";
import { site } from "@/data/site";

const offers = [
  {
    title: "Late-Night Combo",
    desc: "Any smash burger + classic fries + a can of drink after 11pm.",
    price: "3.500",
    tag: "After 11PM",
  },
  {
    title: "Double Trouble Deal",
    desc: "Double Smash Burger + Loaded Fries, our two most-ordered items together.",
    price: "5.200",
    tag: "Most Popular",
  },
  {
    title: "Family Feast",
    desc: "Two signature burgers, two fries, and four drinks — built for sharing.",
    price: "10.900",
    tag: "Feeds 4",
  },
];

export default function SpecialOffers() {
  return (
    <section className="relative overflow-hidden bg-char2 py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <RevealOnScroll className="mb-12 max-w-lg">
          <p className="eyebrow">Limited-Time Deals</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-cream sm:text-4xl">
            Special Offers
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {offers.map((offer, i) => (
            <RevealOnScroll key={offer.title} delay={i * 100}>
              <div className="card relative flex h-full flex-col p-6">
                <span className="absolute -top-3 left-6 rounded-full bg-red px-3 py-1 font-display text-[11px] font-semibold text-white">
                  {offer.tag}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-cream">
                  {offer.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-cream/60">{offer.desc}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-display text-2xl font-bold text-cheese">
                    {offer.price} <span className="text-xs font-medium text-cheese/70">BHD</span>
                  </span>
                  <a href={site.whatsappHref} className="btn-primary !px-5 !py-2 text-xs">
                    Order Now
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
