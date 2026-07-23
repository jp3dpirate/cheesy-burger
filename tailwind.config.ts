import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ---- Core brand tokens (from brief) ----
        ink: "#111111", // near-black base
        char: "#1B1B1B", // card surface
        char2: "#232323", // hover / raised surface
        cheese: {
          DEFAULT: "#FFC107",
          dark: "#C98A00",
          light: "#FFD966",
        },
        red: {
          DEFAULT: "#E53935",
          dark: "#B71C1C",
        },
        cream: "#F5F3EE", // soft off-white for body text on black
      },
      fontFamily: {
        display: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "cheese-gradient": "linear-gradient(135deg, #FFC107 0%, #C98A00 100%)",
        "drip-fade": "linear-gradient(180deg, rgba(17,17,17,0) 0%, #111111 85%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(255,193,7,0.25)",
        card: "0 10px 30px rgba(0,0,0,0.45)",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "8%": { opacity: "0.4" },
          "10%": { opacity: "1" },
          "20%": { opacity: "0.6" },
          "22%": { opacity: "1" },
          "70%": { opacity: "1" },
          "72%": { opacity: "0.5" },
          "74%": { opacity: "1" },
        },
        drip: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        flicker: "flicker 5s infinite",
        drip: "drip 2.4s ease-in-out infinite",
        rise: "rise 0.7s ease-out forwards",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
