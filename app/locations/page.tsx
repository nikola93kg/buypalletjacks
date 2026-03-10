import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import InteractiveLocationsHero from "@/components/locations/InteractiveLocationsHero";
import { getLocationsGroupedByState, STATE_NAMES } from "@/lib/locations";
import { MapPin, ExternalLink } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Pallet Jack Pickup Locations – 26 Cities Nationwide",
  description:
    "Find a Buy Pallet Jacks pickup location near you. We have 26 locations across the USA — select your state on the interactive map to see available inventory.",
  path: "/locations",
});

export default function LocationsPage() {
  const grouped = getLocationsGroupedByState();
  const states = Object.keys(grouped).sort();

  return (
    <>
      {/* Interactive map hero */}
      <InteractiveLocationsHero />

      {/* Full location directory */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="text-center mb-12">
            <p className="section-eyebrow">Directory</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-graphite mb-4">
              All Pickup Locations
            </h2>
            <p className="text-steel text-lg max-w-2xl mx-auto">
              Browse every location by state. Click "Get Directions" to open
              Google Maps with turn-by-turn navigation.
            </p>
          </div>

          <div className="grid gap-10">
            {states.map((stateCode) => {
              const locs = grouped[stateCode];
              const stateName =
                STATE_NAMES[stateCode as keyof typeof STATE_NAMES] ??
                stateCode;
              return (
                <div key={stateCode} id={`state-${stateCode}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-graphite">
                      {stateName}
                      <span className="ml-2 text-sm font-medium text-steel">
                        ({locs.length}{" "}
                        {locs.length === 1 ? "location" : "locations"})
                      </span>
                    </h3>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {locs.map((loc, idx) => (
                      <div
                        key={idx}
                        className="card-base p-5 flex flex-col gap-3"
                      >
                        <div>
                          <p className="font-semibold text-graphite text-sm leading-snug">
                            {loc.facility}
                          </p>
                          {loc.unitNumber && (
                            <p className="text-xs text-steel mt-0.5">
                              {loc.unitNumber}
                            </p>
                          )}
                          <p className="text-sm text-steel mt-1">
                            {loc.cityState}
                          </p>
                        </div>
                        {loc.gmaps && (
                          <a
                            href={loc.gmaps}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue hover:underline mt-auto"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            Get Directions
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
