import Link from "next/link";
import { nav, site } from "@/data/site";

function SocialIcon({ path }: { path: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

const icons = {
  instagram:
    "M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.51 5.51 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5zM17.75 6a1.25 1.25 0 1 0 1.25 1.25A1.25 1.25 0 0 0 17.75 6z",
  tiktok:
    "M16.5 2h-3v13.2a2.8 2.8 0 1 1-2-2.68V9.4a6 6 0 1 0 5 5.93V8.1a6.7 6.7 0 0 0 4 1.3V6.3a3.9 3.9 0 0 1-4-4.3z",
  facebook:
    "M13.5 22v-8h2.7l.5-3.3h-3.2V8.6c0-.95.3-1.6 1.7-1.6h1.7V4a15 15 0 0 0-2.5-.2c-2.6 0-4.4 1.6-4.4 4.4v2.5H7v3.3h2.9v8h3.6z",
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:px-8 lg:grid-cols-4">
        {/* Logo + blurb */}
        <div>
          <Link href="/" className="font-display text-2xl font-extrabold text-cream">
            <span className="text-cheese">Cheesy</span>Burger
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
            Fresh smashed beef, premium ingredients, and melted cheese — Maqabah&apos;s
            late-night burger destination.
          </p>
          <div className="mt-5 flex gap-3">
            {(["instagram", "tiktok", "facebook"] as const).map((key) => (
              
                key={key}
                href={site.social[key]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={key}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-cream/70 transition-colors hover:border-cheese hover:text-cheese"
              >
                <SocialIcon path={icons[key]} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="eyebrow mb-4">Quick Links</h3>
          <ul className="space-y-2.5 text-sm text-cream/70">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-cheese">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h3 className="eyebrow mb-4">Opening Hours</h3>
          <p className="text-sm text-cream/70">Open Daily</p>
          <p className="text-sm text-cream/70">Until 4:00 AM</p>
          <p className="mt-3 text-sm text-cream/70">{site.address}</p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="eyebrow mb-4">Get In Touch</h3>
          <a href={site.phoneHref} className="block text-sm text-cream/70 hover:text-cheese">
            {site.phone}
          </a>
          <Link href="/contact" className="mt-4 inline-block btn-outline !px-5 !py-2 text-xs">
            Contact Us
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center sm:px-8">
        <p className="text-xs text-cream/50">
          © {new Date().getFullYear()} Cheesy Burger. All rights reserved.
        </p>

        {/* --- Required agency branding: keep on every page --- */}
        <p className="mt-3 text-xs font-medium text-cream/70">
          Website Designed &amp; Developed by{" "}
          <span className="font-display font-semibold text-cheese">MarketMate</span>
        </p>
        <p className="text-[11px] text-cream/40">
          Digital Marketing • Website Development • Branding • Social Media Management
        </p>
        <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] text-cream/50">
          ⚡ Powered by MarketMate
        </div>
      </div>
    </footer>
  );
}
