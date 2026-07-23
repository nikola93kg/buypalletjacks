import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { buildBreadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import InteractiveLocationsHero from "@/components/locations/InteractiveLocationsHero";
import LocationsDirectory from "@/components/locations/LocationsDirectory";

export const metadata: Metadata = buildMetadata({
  title: "Pallet Jacks for Sale Near Me – 28 Pickup Locations",
  description:
    "Find pallet jacks for sale near me with 28 Buy Pallet Jacks pickup locations across the USA. Select your state to see local refurbished and used pallet jack availability.",
  path: "/locations",
  keywords: [
    "pallet jacks for sale near me",
    "pallet jack for sale near me",
    "pallet jack near me",
    "used pallet jack for sale near me",
    "pallet jack Dallas",
    "pallet jack Houston",
    "pallet jack Austin",
    "pallet jack San Antonio",
    "refurbished pallet jack Dallas",
    "warehouse equipment Dallas",
    "pallet jack supplier",
    "pallet jack supplier Texas",
    "pallet jack Grand Prairie",
    "pallet jack Irving",
    "pallet jack Mesquite",
    "pallet jack in stock",
    "same day pallet jack",
    "pallet jack available now",
  ],
});

export default function LocationsPage() {
  return (
    <>
      <JsonLd
        id="locations-breadcrumb-jsonld"
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
        ])}
      />
      {/* Interactive map hero */}
      <InteractiveLocationsHero />

      {/* Searchable full location directory */}
      <LocationsDirectory />
    </>
  );
}
