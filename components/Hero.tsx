import Image from "next/image";
import Link from "next/link";
import NeonBadge from "./NeonBadge";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-24">
      {/* Background image — PLACEHOLDER: swap for Cheesy Burger's own hero photo */}
      <Image
        src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2000&auto=format&fit=crop"
        alt="Juicy stuffed beef burger with melted cheese"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8">
        <div className="max-w-xl">
          <NeonBadge />

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] text-cream sm:text-5xl lg:text-6xl">
            The Ultimate <span className="text-cheese">Burger</span> Experience in Bahrain
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-cream/75 sm:text-lg">
            Fresh smashed beef, premium ingredients, melted cheese, and unforgettable flavor.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/menu" className="btn-primary">
              View Menu
            </Link>
            <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Order Online
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 glass-cheese w-fit rounded-2xl px-5 py-3">
            <div>
              <p className="font-display text-2xl font-bold text-cheese">4.0★</p>
              <p className="text-xs text-cream/60">Google Rating</p>
            </div>
            <div className="h-8 w-px bg-white/15" />
            <div>
              <p className="font-display text-2xl font-bold text-cream">BHD 1–5</p>
              <p className="text-xs text-cream/60">Per Item</p>
            </div>
            <div className="h-8 w-px bg-white/15" />
            <div>
              <p className="font-display text-2xl font-bold text-cream">Maqabah</p>
              <p className="text-xs text-cream/60">Budaiya, Bahrain</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
