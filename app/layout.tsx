import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";
import StructuredData from "@/components/StructuredData";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cheesyburgerbahrain.com"),
  title: {
    default: "Cheesy Burger | Best Smash Burgers in Budaiya, Bahrain",
    template: "%s | Cheesy Burger Bahrain",
  },
  description:
    "Cheesy Burger in Maqabah, Budaiya serves fresh smashed beef, stuffed cheese burgers, loaded fries, and steak sandwiches — open daily until 4AM. Best late-night burger in Bahrain.",
  keywords: [
    "Cheesy Burger Bahrain",
    "Best Burger in Bahrain",
    "Burger Restaurant Budaiya",
    "Smash Burger Bahrain",
    "Cheesy Burger Maqabah",
    "Late Night Burger Bahrain",
  ],
  openGraph: {
    title: "Cheesy Burger | Best Smash Burgers in Budaiya, Bahrain",
    description:
      "Fresh smashed beef, premium ingredients, melted cheese, and unforgettable flavor. Open daily until 4AM in Maqabah, Budaiya.",
    type: "website",
    locale: "en_BH",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <StructuredData />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
        <ScrollToTop />
      </body>
    </html>
  );
}
