import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LocationsFooterSection from "@/components/layout/LocationsFooterSection";
import MobileStickyCTA from "@/components/layout/MobileStickyCTA";
import { SITE_NAME, SITE_DESCRIPTION, localBusinessJsonLd, organizationJsonLd } from "@/lib/seo";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Restore saved theme before first paint to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('bpj-theme');if(t)document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
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
        <MobileStickyCTA />
      </body>
    </html>
  );
}
