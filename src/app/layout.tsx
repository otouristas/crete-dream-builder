import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Cormorant_Garamond, EB_Garamond, Inter } from "next/font/google";
import "@/app/globals.css";
import { JsonLdOrganization } from "@/components/site/json-ld-organization";
import { SiteWhatsAppFab } from "@/components/site/site-whatsapp-fab";
import { buildHomeMetadata } from "@/lib/build-page-metadata";
import { GEO, GEO_ICBM, GEO_POSITION } from "@/lib/geo-config";
import { SITE_NAME } from "@/lib/seo-config";
import { getSiteUrl } from "@/lib/site-url";

const inter = Inter({
  subsets: ["latin", "greek"],
  variable: "--font-inter",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  /** Display font: avoid an extra `<link rel="preload">` competing with Inter for LCP. */
  preload: false,
});

/** Greek glyphs for display headings. Latin text still resolves to Cormorant first. */
const greekDisplay = EB_Garamond({
  subsets: ["greek"],
  variable: "--font-greek-display",
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  preload: false,
});

const origin = getSiteUrl().origin;

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  ...buildHomeMetadata(),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "48x48" },
      { url: "/logo-final.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/logo-final.png", sizes: "180x180", type: "image/png" }],
  },
  verification: {
    google: "A4JaHDE52ZZ_-SCp-Ie61Shy0XvLl5kk4xSCOxSiLPk",
  },
  category: "travel",
  applicationName: SITE_NAME,
  formatDetection: { telephone: true, email: true },
  authors: [{ name: SITE_NAME, url: origin }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  other: {
    "geo.region": GEO.regionCode,
    "geo.placename": GEO.placename,
    "geo.position": GEO_POSITION,
    ICBM: GEO_ICBM,
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f0e8",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const lang = requestHeaders.get("x-locale") === "el" ? "el" : "en";

  return (
    <html
      lang={lang}
      className={`${inter.variable} ${cormorantGaramond.variable} ${greekDisplay.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh antialiased" suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <JsonLdOrganization />
        {children}
        <SiteWhatsAppFab />
      </body>
    </html>
  );
}
