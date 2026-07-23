import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Cheesy Burger in Maqabah, Budaiya, Bahrain. Call +973 1728 0070 or send us a message — open daily until 4AM.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-32 pb-20 sm:px-8">
      <div className="mb-12 max-w-2xl">
        <p className="eyebrow">We&apos;d Love to Hear From You</p>
        <h1 className="mt-2 font-display text-4xl font-extrabold text-cream sm:text-5xl">
          Contact Us
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="card overflow-hidden">
            <iframe
              src={site.mapsEmbedSrc}
              title="Cheesy Burger location map"
              className="h-72 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="card space-y-4 p-6">
            <div>
              <p className="eyebrow">Cheesy Burger</p>
              <p className="mt-1 text-cream/80">{site.address}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-cheese">📞</span>
              <a href={site.phoneHref} className="text-cream/80 hover:text-cheese">
                {site.phone}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-cheese">🕓</span>
              <div>
                <p className="text-cream/80">Open Daily</p>
                <p className="text-cream/80">Until 4:00 AM</p>
              </div>
            </div>
            
              href={site.mapsDirectionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex text-sm"
            >
              Get Directions
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
