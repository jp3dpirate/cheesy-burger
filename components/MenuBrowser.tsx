"use client";

import { useMemo, useState } from "react";
import { categories, menuItems, MenuCategory } from "@/data/menu";
import MenuCard from "./MenuCard";

export default function MenuBrowser() {
  const [active, setActive] = useState<MenuCategory | "All">("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = active === "All" || item.category === active;
      const matchesQuery = item.name.toLowerCase().includes(query.trim().toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [active, query]);

  const grouped = useMemo(() => {
    const map = new Map<MenuCategory, typeof menuItems>();
    categories.forEach((cat) => {
      const items = filtered.filter((i) => i.category === cat);
      if (items.length) map.set(cat, items);
    });
    return map;
  }, [filtered]);

  return (
    <div>
      {/* Search + filters */}
      <div className="sticky top-[72px] z-30 -mx-6 mb-10 bg-ink/95 px-6 py-4 backdrop-blur sm:top-[84px] sm:-mx-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-xs">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the menu…"
              aria-label="Search menu items"
              className="w-full rounded-full border border-white/10 bg-char px-5 py-2.5 text-sm text-cream placeholder:text-cream/40 focus:border-cheese focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {(["All", ...categories] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-4 py-2 font-display text-xs font-semibold transition-colors ${
                  active === cat
                    ? "bg-cheese text-ink"
                    : "border border-white/10 bg-char text-cream/70 hover:border-cheese/50 hover:text-cheese"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      {grouped.size === 0 && (
        <p className="py-20 text-center text-cream/50">
          No items match “{query}”. Try a different search or category.
        </p>
      )}

      <div className="space-y-16">
        {Array.from(grouped.entries()).map(([cat, items]) => (
          <section key={cat} id={cat.toLowerCase().replace(/\s+/g, "-")}>
            <h2 className="mb-6 font-display text-2xl font-bold text-cream sm:text-3xl">
              {cat}
              <span className="ml-3 inline-block h-1.5 w-1.5 rounded-full bg-cheese align-middle" />
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
