import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import InteractiveLocationsHero from "@/components/locations/InteractiveLocationsHero";
import LocationsDirectory from "@/components/locations/LocationsDirectory";

export const metadata: Metadata = buildMetadata({
  title: "Pallet Jack Pickup Locations – 26 Cities Nationwide",
  description:
    "Find a Buy Pallet Jacks pickup location near you. We have 26 locations across the USA — select your state on the interactive map to see available inventory.",
  path: "/locations",
});

export default function LocationsPage() {
  return (
    <>
      {/* Interactive map hero */}
      <InteractiveLocationsHero />

      {/* Searchable full location directory */}
      <LocationsDirectory />
    </>
  );
}
