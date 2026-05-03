import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LocationsFooterSection from "@/components/layout/LocationsFooterSection";
import BackToTopButton from "@/components/layout/BackToTopButton";
import { SITE_NAME, SITE_DESCRIPTION, localBusinessJsonLd, organizationJsonLd } from "@/lib/seo";

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
  metadataBase: new URL("https://www.buypalletjacks.com"),
  keywords: [
    "pallet jacks for sale",
    "refurbished pallet jacks",
    "used pallet jacks",
    "pallet jack near me",
    "buy pallet jack",
    "industrial pallet jacks",
    "warehouse equipment",
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
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Header />
        <main id="main-content">{children}</main>
        <LocationsFooterSection />
        <Footer />
        <BackToTopButton />
        {/* <MobileStickyCTA /> */}
      </body>
    </html>
  );
}
