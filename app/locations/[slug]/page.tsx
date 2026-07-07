import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationLandingPage from "@/components/locations/LocationLandingPage";
import {
  buildLocationDescription,
  buildLocationTitle,
  getLocationHref,
  getLocationPageBySlug,
  getLocationStaticParams,
} from "@/lib/location-pages";
import { buildMetadata } from "@/lib/seo";

type LocationRouteProps = {
  params: Promise<{ slug: string }>;
};

async function getLocationPage(params: LocationRouteProps["params"]) {
  const { slug } = await params;
  const page = getLocationPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return page;
}

export function generateStaticParams() {
  return getLocationStaticParams();
}

export async function generateMetadata({
  params,
}: LocationRouteProps): Promise<Metadata> {
  const page = await getLocationPage(params);

  return buildMetadata({
    title: buildLocationTitle(page),
    description: buildLocationDescription(page),
    path: getLocationHref(page),
    keywords: [
      `pallet jacks for sale ${page.city}`,
      `pallet jack for sale ${page.city}`,
      `used pallet jack for sale ${page.city}`,
      `pallet jacks for sale near me ${page.city}`,
      `${page.city} pallet jacks`,
      `refurbished pallet jacks ${page.city}`,
      `${page.city} ${page.stateCode} pallet jack pickup`,
      `${page.stateName} pallet jacks`,
      `pallet jack in stock ${page.city}`,
      `same day pallet jack ${page.city}`,
      `warehouse equipment ${page.city}`,
      `pallet jack supplier ${page.city}`,
      `pallet jack available now ${page.city}`,
    ],
  });
}

export default async function LocationPageRoute({
  params,
}: LocationRouteProps) {
  const page = await getLocationPage(params);

  return <LocationLandingPage page={page} />;
}
