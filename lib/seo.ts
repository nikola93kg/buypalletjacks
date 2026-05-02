import type { Metadata } from "next";

const BASE_URL = "https://www.buypalletjacks.com";

export const SITE_NAME = "Buy Pallet Jacks";
export const SITE_DESCRIPTION =
  "Professionally refurbished pallet jacks available nationwide. 28 locations across the USA. Call or text to schedule pickup. 2-month warranty included.";

export function buildMetadata({
  title,
  description,
  path = "",
  image = "/og-image.jpg",
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${BASE_URL}${path}`;
  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [image],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: BASE_URL,
  description: SITE_DESCRIPTION,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-800-BUY-JACK",
    contactType: "sales",
    availableLanguage: "English",
  },
  areaServed: "US",
  serviceType: "Pallet Jack Sales",
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: BASE_URL,
  description: SITE_DESCRIPTION,
  priceRange: "$$",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Refurbished Pallet Jacks",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Professionally Refurbished Pallet Jack",
          description:
            "Painted, sealed, and professionally refurbished pallet jack with 2-month warranty.",
        },
      },
    ],
  },
};
