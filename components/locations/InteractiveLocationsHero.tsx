"use client";

import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";
import dynamic from "next/dynamic";
import { getAllStatesWithLocations, STATE_NAMES } from "@/lib/locations";
import StateSelectFallback from "./StateSelectFallback";
import styles from "./locations.module.css";
import type { ComponentProps } from "react";

type UsaMapProps = ComponentProps<typeof import("./UsaMap")["default"]>;
type LocationsPanelProps = ComponentProps<typeof import("./LocationsPanel")["default"]>;

const UsaMap = dynamic<UsaMapProps>(() => import("./UsaMap"), {
  ssr: false,
  loading: () => (
    <div className={styles.mapLoadingPlaceholder}>
      <span>Loading map…</span>
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

  useEffect(() => {
    if (selectedState && window.innerWidth < 1024) {
      const panel = document.getElementById("locations-panel");
      panel?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [selectedState]);

  return (
    <>
      {/* ── Dark navy gradient header ─────────────────────── */}
      <section className={styles.pageHeader} aria-labelledby="locations-hero-heading">
        <div className="container-site">
          <div className={styles.headerInner}>
            {/* Eyebrow */}
            <div>
              <span className={styles.pageEyebrow}>
                <MapPin aria-hidden="true" width={12} height={12} />
                Pickup Locations
              </span>
            </div>

            {/* Headline */}
            <h1 id="locations-hero-heading" className={styles.pageHeadline}>
              Find a Pickup Location{" "}
              <span className={styles.headlineAccent}>Near You</span>
            </h1>

            {/* Subline */}
            <p className={styles.pageSubline}>
              Click your state on the map — or use the dropdown to jump straight
              to your nearest location.
            </p>

            {/* Stats strip */}
            <div className={styles.statsStrip}>
              <div className={styles.statCell}>
                <span className={styles.statNumber}>26</span>
                <span className={styles.statLabel}>Locations</span>
              </div>
              <div className={styles.statDivider} aria-hidden="true" />
              <div className={styles.statCell}>
                <span className={styles.statNumber}>19</span>
                <span className={styles.statLabel}>States</span>
              </div>
              <div className={styles.statDivider} aria-hidden="true" />
              <div className={styles.statCell}>
                <span className={styles.statNumberOrange}>Free</span>
                <span className={styles.statLabel}>Pickup</span>
              </div>
            </div>

            {/* Accessible state select fallback */}
            <div className={styles.selectWrap}>
              <StateSelectFallback
                statesWithLocations={statesWithLocations}
                selectedState={selectedState}
                onStateSelect={setSelectedState}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Dark map section ──────────────────────────────── */}
      <section className={styles.mapSection} aria-label="Interactive location map">
        <div className="container-site">
          <div className={styles.mapGrid}>
            {/* Map */}
            <div className={`${styles.mapBox} lg:flex-1`}>
              <div className={styles.mapLegend} aria-hidden="true">
                <span className={styles.legendDot}>
                  <span className={`${styles.legendSwatch} ${styles.legendSwatchBlue}`} />
                  Has Locations
                </span>
                <span className={styles.legendDot}>
                  <span className={`${styles.legendSwatch} ${styles.legendSwatchSelected}`} />
                  Selected
                </span>
                <span className={styles.legendDot}>
                  <span className={`${styles.legendSwatch} ${styles.legendSwatchGrey}`} />
                  No Locations
                </span>
              </div>

              <UsaMap
                statesWithLocations={statesWithLocations}
                selectedState={selectedState}
                onStateSelect={setSelectedState}
              />

              {selectedState && (
                <p className={styles.mapFootnote}>
                  Showing locations in{" "}
                  <strong className={styles.mapFootnoteHighlight}>
                    {STATE_NAMES[selectedState] || selectedState}
                  </strong>{" "}
                  —{" "}
                  <button
                    onClick={() => setSelectedState(null)}
                    className={styles.mapClearBtn}
                  >
                    Clear selection
                  </button>
                </p>
              )}
            </div>

            {/* Locations panel */}
            <div
              id="locations-panel"
              className={styles.panelBox}
              aria-live="polite"
              aria-label="Location results"
            >
              <LocationsPanel
                selectedState={selectedState}
                onClear={() => setSelectedState(null)}
                compact={false}
                theme="dark"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
