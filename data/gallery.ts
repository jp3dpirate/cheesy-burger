export type GalleryCategory =
  | "Burgers"
  | "Fries"
  | "Drinks"
  | "Restaurant"
  | "Kitchen"
  | "Close-up";

export interface GalleryImage {
  id: string;
  src: string; // Placeholder — replace with real restaurant photography
  alt: string;
  category: GalleryCategory;
  // Controls the masonry span — some tiles are taller for visual rhythm.
  tall?: boolean;
}

export const galleryCategories: GalleryCategory[] = [
  "Burgers",
  "Fries",
  "Drinks",
  "Restaurant",
  "Kitchen",
  "Close-up",
];

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop",
    alt: "Stuffed beef burger with melted cheese pull",
    category: "Burgers",
    tall: true,
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=1000&auto=format&fit=crop",
    alt: "Loaded fries with cheese and toppings",
    category: "Fries",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=1000&auto=format&fit=crop",
    alt: "Cold soft drink can with condensation",
    category: "Drinks",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop",
    alt: "Interior seating area of the restaurant",
    category: "Restaurant",
    tall: true,
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop",
    alt: "Chef smashing a beef patty on the grill",
    category: "Kitchen",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=1000&auto=format&fit=crop",
    alt: "Close-up of double smash burger layers",
    category: "Close-up",
    tall: true,
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1000&auto=format&fit=crop",
    alt: "Double cheesy steak sandwich stacked high",
    category: "Burgers",
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1630431341973-02e1b662ec35?q=80&w=1000&auto=format&fit=crop",
    alt: "Basket of classic golden fries",
    category: "Fries",
    tall: true,
  },
  {
    id: "g9",
    src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1000&auto=format&fit=crop",
    alt: "Restaurant counter and menu board",
    category: "Restaurant",
  },
  {
    id: "g10",
    src: "https://images.unsplash.com/photo-1615996001121-1abd80879bec?q=80&w=1000&auto=format&fit=crop",
    alt: "Fresh buns and ingredients on the kitchen line",
    category: "Kitchen",
    tall: true,
  },
  {
    id: "g11",
    src: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1000&auto=format&fit=crop",
    alt: "Close-up of a burger with melted cheese dripping",
    category: "Close-up",
  },
  {
    id: "g12",
    src: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?q=80&w=1000&auto=format&fit=crop",
    alt: "Smoky BBQ smash burger on a tray",
    category: "Burgers",
    tall: true,
  },
];
