import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { buildBreadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import InteractiveLocationsHero from "@/components/locations/InteractiveLocationsHero";
import LocationsDirectory from "@/components/locations/LocationsDirectory";

export const metadata: Metadata = buildMetadata({
  title: "Pallet Jack Pickup Locations – 28 Cities Nationwide",
  description:
    "Find a Buy Pallet Jacks pickup location near you. We have 28 locations across the USA — select your state on the interactive map to see available inventory.",
  path: "/locations",
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
