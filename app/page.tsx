import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Hero from "@/components/home/Hero";
import PalletJackModels from "@/components/home/PalletJackModels";
import Benefits from "@/components/home/Benefits";
import WhyRefurbished from "@/components/home/WhyRefurbished";
import HowItWorks from "@/components/home/HowItWorks";
import Warranty from "@/components/home/Warranty";
import DeliveryBulk from "@/components/home/DeliveryBulk";
import GalleryPreview from "@/components/home/GalleryPreview";
import GoogleReviews from "@/components/home/GoogleReviews";
import Faq from "@/components/home/Faq";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = buildMetadata({
  title: "Buy Refurbished Pallet Jacks – 26 Pickup Locations Nationwide",
  description:
    "Shop professionally refurbished pallet jacks with a 2-month warranty. 26 pickup locations across the USA — same-day availability, bulk discounts, and delivery options.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <PalletJackModels />
      <Benefits />
      <WhyRefurbished />
      <HowItWorks />
      <Warranty />
      <DeliveryBulk />
      <GalleryPreview />
      <GoogleReviews />
      <Faq />
      <FinalCTA />
    </>
  );
}

