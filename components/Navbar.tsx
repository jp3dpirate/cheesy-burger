"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { nav } from "@/data/site";
import NeonBadge from "./NeonBadge";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3 shadow-card" : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Primary">
        <Link href="/" className="flex items-center gap-2 font-display text-xl font-extrabold text-cream">
          <span className="text-cheese">Cheesy</span>Burger
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`font-display text-sm font-medium tracking-wide transition-colors hover:text-cheese ${
                  pathname === item.href ? "text-cheese" : "text-cream/85"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <NeonBadge compact />
          <Link href="/menu" className="btn-primary !px-6 !py-2.5 text-sm">
            Order Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 p-2 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-0.5 w-6 bg-cream transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 bg-cream transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-cream transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`glass mx-4 mt-3 overflow-hidden rounded-2xl transition-all duration-300 lg:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 p-4">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block rounded-lg px-3 py-2.5 font-display text-sm font-medium ${
                  pathname === item.href ? "bg-cheese/10 text-cheese" : "text-cream/85"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="mt-2">
            <Link href="/menu" className="btn-primary w-full text-sm">
              Order Now
            </Link>
          </li>
          <li className="flex justify-center pt-2">
            <NeonBadge compact />
          </li>
        </ul>
      </div>
    </header>
  );
}
