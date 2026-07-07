import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LocationsFooterSection from "@/components/layout/LocationsFooterSection";
import BackToTopButton from "@/components/layout/BackToTopButton";
import JsonLd from "@/components/seo/JsonLd";
import {
  BASE_URL,
  DEFAULT_SOCIAL_IMAGE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  localBusinessJsonLd as baseLocalBusinessJsonLd,
  organizationJsonLd as baseOrganizationJsonLd,
} from "@/lib/seo";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — Professionally Refurbished Pallet Jacks Nationwide`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(BASE_URL),
  keywords: [
    "pallet jack for sale",
    "pallet jacks for sale",
    "refurbished pallet jacks",
    "used pallet jack for sale",
    "used pallet jacks for sale",
    "pallet jack near me",
    "pallet jacks for sale near me",
    "buy pallet jack",
    "commercial pallet jack",
    "industrial pallet jack",
    "warehouse pallet jack",
    "pallet truck for sale",
    "manual pallet jack",
    "hand pallet jack",
    "pallet jack supplier",
    "Crown pallet jack for sale",
    "same day pallet jack",
    "affordable pallet jack",
    "warehouse equipment",
    "warehouse equipment supplier",
    "material handling equipment",
    "pallet jack in stock",
    "pallet jack nationwide",
  ],
  openGraph: {
    title: `${SITE_NAME} — Professionally Refurbished Pallet Jacks`,
    description: SITE_DESCRIPTION,
    url: "https://www.buypalletjacks.com",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Professionally Refurbished Pallet Jacks`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: "googlea4af0fa047fb1716",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

const organizationJsonLd = {
  ...baseOrganizationJsonLd,
  "@id": `${BASE_URL}/#organization`,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/logo.webp`,
  },
  image: DEFAULT_SOCIAL_IMAGE_URL,
};

const localBusinessJsonLd = {
  ...baseLocalBusinessJsonLd,
  "@id": `${BASE_URL}/#local-business`,
  image: DEFAULT_SOCIAL_IMAGE_URL,
  parentOrganization: {
    "@id": `${BASE_URL}/#organization`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5KRZJW95"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <JsonLd id="organization-jsonld" data={organizationJsonLd} />
        <JsonLd id="local-business-jsonld" data={localBusinessJsonLd} />
        <Header />
        <main id="main-content">{children}</main>
        <LocationsFooterSection />
        <Footer />
        <BackToTopButton />
        {/* <MobileStickyCTA /> */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5KRZJW95');`}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TTV25THJJH"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TTV25THJJH');
          `}
        </Script>
      </body>
    </html>
  );
}
