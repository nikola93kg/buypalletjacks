import locationsData from "@/data/locations.json";

export type Location = {
  cityState: string;
  state: string;
  facility?: string;
  unitNumber?: string;
  gmaps: string;
};

export const locations: Location[] = locationsData as Location[];

export function getLocationsByState(stateCode: string): Location[] {
  return locations.filter(
    (loc) => loc.state.toUpperCase() === stateCode.toUpperCase()
  );
}

export function getAllStatesWithLocations(): string[] {
  const states = new Set(locations.map((loc) => loc.state.toUpperCase()));
  return Array.from(states).sort();
}

export function getLocationsGroupedByState(): Record<string, Location[]> {
  return locations.reduce(
    (acc, loc) => {
      const state = loc.state.toUpperCase();
      if (!acc[state]) acc[state] = [];
      acc[state].push(loc);
      return acc;
    },
    {} as Record<string, Location[]>
  );
}

export function searchLocations(query: string): Location[] {
  const q = query.toLowerCase().trim();
  if (!q) return locations;
  return locations.filter(
    (loc) =>
      loc.cityState.toLowerCase().includes(q) ||
      loc.state.toLowerCase().includes(q) ||
      (loc.facility && loc.facility.toLowerCase().includes(q))
  );
}

/** Normalize SVG state IDs like "US-TX" or "TX" to just "TX" */
export function normalizeStateId(rawId: string): string {
  return rawId.replace(/^US-/i, "").toUpperCase();
}

export const STATE_NAMES: Record<string, string> = {
  AL: "Alabama", AK: "Alaska", AZ: "Arizona", AR: "Arkansas",
  CA: "California", CO: "Colorado", CT: "Connecticut", DE: "Delaware",
  FL: "Florida", GA: "Georgia", HI: "Hawaii", ID: "Idaho",
  IL: "Illinois", IN: "Indiana", IA: "Iowa", KS: "Kansas",
  KY: "Kentucky", LA: "Louisiana", ME: "Maine", MD: "Maryland",
  MA: "Massachusetts", MI: "Michigan", MN: "Minnesota", MS: "Mississippi",
  MO: "Missouri", MT: "Montana", NE: "Nebraska", NV: "Nevada",
  NH: "New Hampshire", NJ: "New Jersey", NM: "New Mexico", NY: "New York",
  NC: "North Carolina", ND: "North Dakota", OH: "Ohio", OK: "Oklahoma",
  OR: "Oregon", PA: "Pennsylvania", RI: "Rhode Island", SC: "South Carolina",
  SD: "South Dakota", TN: "Tennessee", TX: "Texas", UT: "Utah",
  VT: "Vermont", VA: "Virginia", WA: "Washington", WV: "West Virginia",
  WI: "Wisconsin", WY: "Wyoming", DC: "Washington D.C.",
};
