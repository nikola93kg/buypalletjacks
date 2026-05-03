"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { getAllStatesWithLocations, STATE_NAMES } from "@/lib/locations";
import StateSelectFallback from "./StateSelectFallback";
import type { ComponentProps } from "react";
import styles from "./InteractiveLocationsHero.module.css";

type UsaMapProps = ComponentProps<typeof import("./UsaMap")["default"]>;
type LocationsPanelProps = ComponentProps<typeof import("./LocationsPanel")["default"]>;

const UsaMap = dynamic<UsaMapProps>(() => import("./UsaMap"), {
  ssr: false,
  loading: () => (
    <div className={`${styles.loadingContainer} animate-pulse`}>
      <span className={styles.loadingText}>Loading map…</span>
    </div>
  ),
});

const LocationsPanel = dynamic<LocationsPanelProps>(
  () => import("./LocationsPanel"),
  { ssr: false }
);

export default function InteractiveLocationsHero() {
  const statesWithLocations = getAllStatesWithLocations();
  const [selectedState, setSelectedState] = useState<string | null>(null);

  // Auto-scroll panel into view on mobile when state is selected
  useEffect(() => {
    if (selectedState && window.innerWidth < 1024) {
      const panel = document.getElementById("locations-panel");
      panel?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [selectedState]);

  return (
    <section
      className={`section-padding ${styles.sectionBg}`}
      aria-labelledby="locations-hero-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="section-eyebrow">Locations</span>
          <h1 id="locations-hero-heading" className={styles.heading}>
            Find a Pickup Location{" "}
            <span className={styles.headingAccent}>Near You</span>
          </h1>
          <p className={`${styles.textMuted} text-base max-w-xl mx-auto`}>
            Click your state on the map — or use the search below to find the
            nearest pickup point.
          </p>

          {/* Stats strip */}
          <div className="flex items-center justify-center gap-8 flex-wrap mt-8 mb-8">
            <div className="flex flex-col items-center gap-0.5">
              <span className={`${styles.statNumber} ${styles.default}`}>
                28
              </span>
              <span className={styles.textLabel}>
                Locations
              </span>
            </div>
            <div className={styles.divider} />
            <div className="flex flex-col items-center gap-0.5">
              <span className={`${styles.statNumber} ${styles.default}`}>
                19
              </span>
              <span className={styles.textLabel}>
                States
              </span>
            </div>
            <div className={styles.divider} />
            <div className="flex flex-col items-center gap-0.5">
              <span className={`${styles.statNumber} ${styles.accent}`}>
                Free
              </span>
              <span className={styles.textLabel}>
                Pickup
              </span>
            </div>
          </div>

          {/* Accessible fallback for screen readers / keyboard-only users */}
          <div className="max-w-sm mx-auto">
            <StateSelectFallback
              statesWithLocations={statesWithLocations}
              selectedState={selectedState}
              onStateSelect={setSelectedState}
            />
          </div>
        </div>

        {/* Map + panel grid */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Map */}
          <div className="lg:flex-1">
            <div className={styles.mapContainer}>
              {/* Legend */}
              <div className={styles.legendContainer}>
                <span className={styles.legendItem}>
                  <span className={`${styles.legendSwatch} ${styles.legendSwatchActive}`} aria-hidden="true" />
                  Has Locations
                </span>
                <span className={styles.legendItem}>
                  <span className={`${styles.legendSwatch} ${styles.legendSwatchSelected}`} aria-hidden="true" />
                  Selected
                </span>
                <span className={styles.legendItem}>
                  <span className={`${styles.legendSwatch} ${styles.legendSwatchInactive}`} aria-hidden="true" />
                  No Locations
                </span>
              </div>
              <UsaMap
                statesWithLocations={statesWithLocations}
                selectedState={selectedState}
                onStateSelect={setSelectedState}
              />
              {selectedState && (
                <p className={styles.selectedText}>
                  Showing locations in{" "}
                  <strong className={styles.selectedStateName}>
                    {STATE_NAMES[selectedState] || selectedState}
                  </strong>{" "}
                  —{" "}
                  <button
                    onClick={() => setSelectedState(null)}
                    className={styles.clearButton}
                  >
                    Clear selection
                  </button>
                </p>
              )}
            </div>
          </div>

          {/* Locations panel */}
          <div
            id="locations-panel"
            className="lg:w-80 xl:w-96"
            aria-live="polite"
            aria-label="Location results"
          >
            <div className={`${styles.mapContainer} ${styles.panelContainer}`}>
              <LocationsPanel
                selectedState={selectedState}
                onClear={() => setSelectedState(null)}
                compact={false}
                theme="dark"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
