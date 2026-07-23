export type MenuCategory =
  | "Signature Burgers"
  | "Smash Burgers"
  | "Steak Sandwiches"
  | "Fries"
  | "Drinks";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number; // BHD
  category: MenuCategory;
  image: string; // Placeholder — swap for real photography
  badge?: "Best Seller" | "New" | "Spicy" | "Signature";
}

export const categories: MenuCategory[] = [
  "Signature Burgers",
  "Smash Burgers",
  "Steak Sandwiches",
  "Fries",
  "Drinks",
];

// ⚠️ PLACEHOLDER IMAGES: every `image` field below points to a royalty-free
// Unsplash photo standing in for the real dish. Before launch, replace each
// URL with Cheesy Burger's own food photography (same aspect ratio ~4:3).
export const menuItems: MenuItem[] = [
  // ---------------- Signature Burgers ----------------
  {
    id: "stuffed-beef-burger",
    name: "Stuffed Beef Burger",
    description:
      "A hand-pressed beef patty stuffed with a molten cheese core, seared until the crust cracks and the middle spills out. Served in a toasted brioche bun with house sauce.",
    price: 3.5,
    category: "Signature Burgers",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
    badge: "Signature",
  },
  {
    id: "stuffed-chicken-corn-burger",
    name: "Stuffed Chicken Burger with Cheese & Corn",
    description:
      "Juicy chicken breast stuffed with a sweet-corn and mozzarella filling, breaded and fried golden, layered with lettuce and a light garlic mayo.",
    price: 3.2,
    category: "Signature Burgers",
    image:
      "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "double-smash-burger",
    name: "Double Smash Burger",
    description:
      "Two thin, lace-edged smashed patties stacked with double American cheese, pickles, and smash sauce on a griddled bun. Built for the serious burger crowd.",
    price: 3.8,
    category: "Signature Burgers",
    image:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=1200&auto=format&fit=crop",
    badge: "Best Seller",
  },
  {
    id: "double-cheesy-steak",
    name: "Double Cheesy Steak",
    description:
      "Two layers of tender sliced steak smothered in a double blanket of melted cheese, stacked high with grilled onions inside a soft bun.",
    price: 4.5,
    category: "Signature Burgers",
    image:
      "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1200&auto=format&fit=crop",
    badge: "Signature",
  },
  {
    id: "stuffed-chicken-beef-fries",
    name: "Stuffed Chicken & Beef with Fries",
    description:
      "The best of both worlds — a stuffed chicken patty and a stuffed beef patty on one burger, plated with a full side of our classic fries.",
    price: 5.0,
    category: "Signature Burgers",
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "stuffed-beef-chicken-fries",
    name: "Stuffed Beef & Chicken with Fries",
    description:
      "Our stuffed beef and stuffed chicken patties layered together with melted cheese and house sauce, served with a generous side of fries.",
    price: 5.0,
    category: "Signature Burgers",
    image:
      "https://images.unsplash.com/photo-1550317138-10000687a72b?q=80&w=1200&auto=format&fit=crop",
  },

  // ---------------- Smash Burgers ----------------
  {
    id: "classic-smash",
    name: "Classic Smash",
    description:
      "One smashed beef patty, crisp on the edges, with American cheese, onions, pickles, and smash sauce. Simple, fast, and exactly what a smash burger should be.",
    price: 2.2,
    category: "Smash Burgers",
    image:
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "smoky-bbq-smash",
    name: "Smoky BBQ Smash",
    description:
      "Smashed beef patty glazed in a smoky BBQ sauce, crispy fried onions, and melted cheddar for a sweet-and-charred bite.",
    price: 2.6,
    category: "Smash Burgers",
    image:
      "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?q=80&w=1200&auto=format&fit=crop",
    badge: "New",
  },
  {
    id: "spicy-jalapeno-smash",
    name: "Spicy Jalapeño Smash",
    description:
      "Smashed beef, pepper-jack cheese, pickled jalapeños, and a chipotle mayo drizzle. Built for the heat-seekers.",
    price: 2.6,
    category: "Smash Burgers",
    image:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=1200&auto=format&fit=crop",
    badge: "Spicy",
  },
  {
    id: "triple-smash-stack",
    name: "Triple Smash Stack",
    description:
      "Three smashed patties, triple cheese, caramelized onions, and smash sauce stacked between a toasted bun. For the truly hungry.",
    price: 4.0,
    category: "Smash Burgers",
    image:
      "https://images.unsplash.com/photo-1611949261335-24e7d0ac0a3a?q=80&w=1200&auto=format&fit=crop",
  },

  // ---------------- Steak Sandwiches ----------------
  {
    id: "classic-steak-sandwich",
    name: "Classic Steak Sandwich",
    description:
      "Thin-sliced grilled steak, melted cheese, and sautéed onions and peppers, pressed inside a toasted baguette.",
    price: 3.9,
    category: "Steak Sandwiches",
    image:
      "https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "cheesy-steak-melt",
    name: "Cheesy Steak Melt",
    description:
      "Grilled steak strips buried under a thick layer of melted cheese with garlic butter toast — a knife-and-fork sandwich in every bite.",
    price: 4.3,
    category: "Steak Sandwiches",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop",
    badge: "Best Seller",
  },
  {
    id: "spicy-steak-sandwich",
    name: "Spicy Steak Sandwich",
    description:
      "Grilled steak with jalapeños, pepper-jack cheese, and a spicy sriracha mayo for a sandwich with a kick.",
    price: 4.3,
    category: "Steak Sandwiches",
    image:
      "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?q=80&w=1200&auto=format&fit=crop",
    badge: "Spicy",
  },

  // ---------------- Fries ----------------
  {
    id: "hash-browns",
    name: "Hash Browns",
    description: "Golden, crispy potato hash browns — the perfect side or late-night snack.",
    price: 1.2,
    category: "Fries",
    image:
      "https://images.unsplash.com/photo-1619715127572-9d0e7c11e6dd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "classic-fries",
    name: "Classic Fries",
    description: "Crispy, golden-cut fries seasoned with our house spice blend.",
    price: 1.0,
    category: "Fries",
    image:
      "https://images.unsplash.com/photo-1630431341973-02e1b662ec35?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "cheese-fries",
    name: "Cheese Fries",
    description: "Classic fries drenched in warm, melted cheese sauce.",
    price: 1.6,
    category: "Fries",
    image:
      "https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "loaded-fries",
    name: "Loaded Fries",
    description:
      "Fries loaded with melted cheese, crispy beef bits, jalapeños, and a drizzle of house sauce.",
    price: 2.4,
    category: "Fries",
    image:
      "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=1200&auto=format&fit=crop",
    badge: "Best Seller",
  },
  {
    id: "curly-fries",
    name: "Curly Fries",
    description: "Seasoned curly-cut fries, crispy on the outside and fluffy inside.",
    price: 1.4,
    category: "Fries",
    image:
      "https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=1200&auto=format&fit=crop",
  },

  // ---------------- Drinks ----------------
  {
    id: "pepsi",
    name: "Pepsi",
    description: "Ice-cold can of Pepsi.",
    price: 0.4,
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "coca-cola",
    name: "Coca-Cola",
    description: "Ice-cold can of Coca-Cola.",
    price: 0.4,
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "sprite",
    name: "Sprite",
    description: "Crisp, refreshing lemon-lime Sprite.",
    price: 0.4,
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "mountain-dew",
    name: "Mountain Dew",
    description: "Bold, citrus-charged Mountain Dew.",
    price: 0.4,
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "water",
    name: "Water",
    description: "Chilled bottled water.",
    price: 0.2,
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1560023907-5f339617ea30?q=80&w=1200&auto=format&fit=crop",
  },
];

export const bestSellers = menuItems.filter((item) => item.badge === "Best Seller");
