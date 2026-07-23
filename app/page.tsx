import type { Metadata } from "next";
import Hero from "@/components/Hero";
import BestSellers from "@/components/BestSellers";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import SpecialOffers from "@/components/SpecialOffers";
import GalleryPreview from "@/components/GalleryPreview";
import LocationPreview from "@/components/LocationPreview";
import DripDivider from "@/components/DripDivider";

export const metadata: Metadata = {
  title: "Cheesy Burger | Best Smash Burgers in Budaiya, Bahrain",
  description:
    "The ultimate burger experience in Bahrain. Fresh smashed beef, stuffed cheese burgers, loaded fries, and steak sandwiches in Maqabah, Budaiya — open daily until 4AM.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <DripDivider />
      <BestSellers />
      <WhyChooseUs />
      <DripDivider />
      <Testimonials />
      <SpecialOffers />
      <DripDivider />
      <GalleryPreview />
      <LocationPreview />
    </>
  );
}
