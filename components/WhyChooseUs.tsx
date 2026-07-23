import RevealOnScroll from "./RevealOnScroll";

const points = [
  {
    title: "Smashed Fresh, Daily",
    desc: "Beef is smashed to order on a scorching flat-top for a crust you can hear.",
    icon: "🔥",
  },
  {
    title: "Real Stuffed Cheese",
    desc: "Our signature burgers hide a molten cheese core inside the patty itself.",
    icon: "🧀",
  },
  {
    title: "Open Until 4AM",
    desc: "Bahrain's late-night cravings, covered — every single night of the week.",
    icon: "🌙",
  },
  {
    title: "Budget-Friendly",
    desc: "Full meals from BHD 1–5, without cutting corners on ingredients.",
    icon: "💰",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
      <RevealOnScroll className="mb-12 max-w-lg">
        <p className="eyebrow">Why Maqabah Chooses Us</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-cream sm:text-4xl">
          Why Customers Love Us
        </h2>
      </RevealOnScroll>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {points.map((p, i) => (
          <RevealOnScroll key={p.title} delay={i * 100}>
            <div className="card h-full p-6 hover:-translate-y-1 hover:border-cheese/30">
              <span className="text-3xl">{p.icon}</span>
              <h3 className="mt-4 font-display text-lg font-semibold text-cream">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/60">{p.desc}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
