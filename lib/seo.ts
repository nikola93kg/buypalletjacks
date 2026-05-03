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
  telephone: "+1-262-254-1835",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-262-254-1835",
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
  telephone: "+1-262-254-1835",
  priceRange: "$$",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-262-254-1835",
    contactType: "sales",
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

export const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are these new or used pallet jacks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They are professionally refurbished. Every unit has been fully disassembled, inspected, repaired where needed, repainted, and sealed. The result is a pallet jack that works like new without the new price.",
      },
    },
    {
      "@type": "Question",
      name: "What brands do you carry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We carry two proven brands — Crown and Altra. Both are trusted names in material handling, fully rebuilt to perform like new.",
      },
    },
    {
      "@type": "Question",
      name: "How does the warranty work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every unit comes with a full 2-month warranty covering mechanical components. If you experience an issue within that period, reach out and we'll resolve it.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get delivery instead of pickup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — delivery is available for select quantities and locations. Contact us to find out if delivery works for your area.",
      },
    },
    {
      "@type": "Question",
      name: "What payment methods do you accept?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We accept Cash, Credit Card, Zelle, and CashApp. Payment is made at pickup.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer bulk or multi-unit discounts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Pricing improves with quantity. Text us for a multi-unit quote.",
      },
    },
    {
      "@type": "Question",
      name: "What is the weight capacity of your pallet jacks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All standard units are rated at 5,500 lbs — capacity maintained after the full rebuild.",
      },
    },
  ],
};

export const productListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Refurbished Pallet Jacks",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "Altra Refurbished Pallet Jack",
        description:
          "Altra pallet jacks engineered for heavy-duty warehouse use — durable steel frames, smooth hydraulics. 5,500 lb lifting capacity. Professionally refurbished with 2-month warranty.",
        brand: { "@type": "Brand", name: "Altra" },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "Buy Pallet Jacks" },
          areaServed: "US",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "Crown Refurbished Pallet Jack",
        description:
          "Crown pallet jacks known for precision engineering and ergonomic design. 5,500 lb lifting capacity. Rebuilt to manufacturer specifications with 2-month warranty.",
        brand: { "@type": "Brand", name: "Crown" },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "Buy Pallet Jacks" },
          areaServed: "US",
        },
      },
    },
  ],
};

export const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Buy a Refurbished Pallet Jack",
  description: "3 steps to get a professionally refurbished pallet jack from Buy Pallet Jacks.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Call or Text Us",
      text: "Reach out to confirm what's available in your area. We'll match you with the nearest location and answer any questions about brand, capacity, or condition.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Find Your Location",
      text: "We'll give you the exact address of the nearest storage facility. Most are accessible 7 days a week during extended hours — no appointment required.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Pick Up & Go",
      text: "Pay on pickup with Cash, Card, Zelle, or CashApp. Load it in your vehicle and you're done. Your pallet jack is ready to work from day one.",
    },
  ],
};
