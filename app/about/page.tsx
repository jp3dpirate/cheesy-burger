import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import DripDivider from "@/components/DripDivider";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Cheesy Burger is Maqabah's favorite late-night burger destination — fresh ingredients, premium beef, and signature sauces, open daily until 4AM in Budaiya, Bahrain.",
};

const pillars = [
  {
    title: "Fresh Ingredients",
    desc: "Produce and buns are sourced daily — nothing sits in the walk-in longer than it should.",
  },
  {
    title: "Premium Beef",
    desc: "Every patty is hand-smashed from quality beef cuts, seasoned simply and seared hot.",
  },
  {
    title: "Signature Sauces",
    desc: "Our house sauces are made in-house and are the one thing regulars can never quite copy at home.",
  },
  {
    title: "Family-Friendly",
    desc: "A relaxed spot in Maqabah where families and friend groups linger over fries and conversation.",
  },
  {
    title: "Late-Night Dining",
    desc: "Bahrain doesn't stop at midnight, and neither do we — open every night until 4AM.",
  },
  {
    title: "Quality & Consistency",
    desc: "The burger you loved last month is the same burger you'll get tonight. Every time.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2">
          <RevealOnScroll>
            <p className="eyebrow">Our Story</p>
            <h1 className="mt-2 font-display text-4xl font-extrabold text-cream sm:text-5xl">
              Maqabah&apos;s Favorite Late-Night Burger Stop
            </h1>
            <p className="mt-5 leading-relaxed text-cream/70">
              Cheesy Burger started with a simple idea: Bahrain deserved a burger spot that took
              smash burgers and stuffed-cheese patties seriously, without charging a fortune for
              them. Today, we&apos;re a go-to destination in Budaiya for anyone chasing a
              proper burger — whether that&apos;s at 1pm or 3am.
            </p>
            <p className="mt-4 leading-relaxed text-cream/70">
              Every order is built fresh on the grill, layered with our house sauces, and served
              the way we&apos;d want to eat it ourselves — hot, generous, and a little bit messy.
            </p>
            <Link href="/menu" className="btn-primary mt-8 inline-flex">
              Explore the Menu
            </Link>
          </RevealOnScroll>

          <RevealOnScroll delay={150} className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            {/* PLACEHOLDER — replace with a real photo of the kitchen/team */}
            <Image
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200&auto=format&fit=crop"
              alt="Chef preparing a smash burger on the grill at Cheesy Burger"
              fill
              className="object-cover"
            />
          </RevealOnScroll>
        </div>
      </section>

      <DripDivider />

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <RevealOnScroll className="mb-12 max-w-lg">
          <p className="eyebrow">What We Stand For</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-cream sm:text-4xl">
            The Cheesy Burger Standard
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <RevealOnScroll key={p.title} delay={i * 80}>
              <div className="card h-full p-6">
                <h3 className="font-display text-lg font-semibold text-cheese">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">{p.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}
