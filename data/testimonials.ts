export interface Testimonial {
  id: string;
  name: string;
  rating: number; // out of 5
  quote: string;
  visit: string; // e.g. "Regular customer" or "First visit"
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Ahmed K.",
    rating: 5,
    quote:
      "The Stuffed Beef Burger is unreal — cheese pouring out with every bite. My go-to order after work.",
    visit: "Regular customer",
  },
  {
    id: "t2",
    name: "Fatima Al-Sayed",
    rating: 5,
    quote:
      "We stopped by at 2am after a family gathering and the place was still buzzing. Loaded fries did not disappoint.",
    visit: "Late-night visit",
  },
  {
    id: "t3",
    name: "Yousif M.",
    rating: 4,
    quote:
      "Double Smash Burger has the best crust I've had in Bahrain. Quick service even during the weekend rush.",
    visit: "Weekend regular",
  },
  {
    id: "t4",
    name: "Sara H.",
    rating: 5,
    quote:
      "Cheesy Steak Melt is worth the drive to Budaiya on its own. Portion size is generous for the price.",
    visit: "First visit",
  },
  {
    id: "t5",
    name: "Mohammed R.",
    rating: 4,
    quote:
      "Good spot for a late bite with friends. The Cheese Fries alone could be a meal.",
    visit: "Regular customer",
  },
];
