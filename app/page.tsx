import type { Metadata } from "next";
import {
  buildMetadata,
  buildBreadcrumbJsonLd,
  buildPageFaqJsonLd,
  productListJsonLd,
  howToJsonLd,
} from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import Hero from "@/components/home/Hero";
import PalletJackModels from "@/components/home/PalletJackModels";
import Benefits from "@/components/home/Benefits";
import WhyRefurbished from "@/components/home/WhyRefurbished";
import HowItWorks from "@/components/home/HowItWorks";
import Warranty from "@/components/home/Warranty";
import DeliveryBulk from "@/components/home/DeliveryBulk";
import GalleryPreview from "@/components/home/GalleryPreview";
import GoogleReviews from "@/components/home/GoogleReviews";
import Faq, { HOME_FAQS } from "@/components/home/Faq";
import FinalCTA from "@/components/home/FinalCTA";
import { LOCATION_COUNT } from "@/lib/locations";

export const metadata: Metadata = buildMetadata({
  title: "Pallet Jacks for Sale – Refurbished & Used Options Nationwide",
  description: `Shop professionally refurbished and used pallet jacks for sale with a 2-month warranty. ${LOCATION_COUNT} pickup locations across the USA, same-day availability, bulk discounts, and delivery options.`,
  path: "/",
  keywords: [
    "pallet jack for sale",
    "pallet jacks for sale",
    "refurbished pallet jacks",
    "used pallet jack for sale",
    "used pallet jacks for sale",
    "pallet jacks for sale near me",
    "commercial pallet jack",
    "industrial pallet jack",
    "warehouse pallet jack",
    "same day pallet jack",
    "affordable pallet jack",
    "pallet jack in stock",
    "ready for delivery",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        id="home-breadcrumb-jsonld"
        data={buildBreadcrumbJsonLd([{ name: "Home", path: "/" }])}
      />
      <JsonLd id="home-faq-jsonld" data={buildPageFaqJsonLd(HOME_FAQS)} />
      <JsonLd id="home-product-jsonld" data={productListJsonLd} />
      <JsonLd id="home-howto-jsonld" data={howToJsonLd} />
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
