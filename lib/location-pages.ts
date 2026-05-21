import {
  getCityFromCityState,
  getStateName,
  locations,
  type Location,
} from "@/lib/locations";

export type LocationPage = Location & {
  slug: string;
  city: string;
  stateCode: string;
  stateName: string;
};

export function slugifyLocation(cityState: string) {
  return cityState
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getLocationPages(): LocationPage[] {
  return locations.map((location) => {
    const stateCode = location.state.toUpperCase();

    return {
      ...location,
      slug: slugifyLocation(location.cityState),
      city: getCityFromCityState(location.cityState),
      stateCode,
      stateName: getStateName(stateCode),
    };
  });
}

export function getLocationPageBySlug(slug: string) {
  return getLocationPages().find((page) => page.slug === slug);
}

export function getLocationHref(location: Location) {
  return `/locations/${slugifyLocation(location.cityState)}`;
}
