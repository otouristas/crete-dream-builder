import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "@/app/globals.css";
import { JsonLdOrganization } from "@/components/site/json-ld-organization";
import { SiteWhatsAppFab } from "@/components/site/site-whatsapp-fab";
import { buildHomeMetadata } from "@/lib/build-page-metadata";
import { getSiteUrl } from "@/lib/site-url";

const inter = Inter({
  subsets: ["latin"],
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

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  ...buildHomeMetadata(),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png", sizes: "any" },
    ],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
  },
  category: "travel",
  applicationName: "Kagiampakis Residences",
  formatDetection: { telephone: true, email: true },
  authors: [{ name: "Kagiampakis Concept Residences", url: getSiteUrl().origin }],
  creator: "Kagiampakis Concept Residences",
  publisher: "Kagiampakis Concept Residences",
};

export const viewport: Viewport = {
  themeColor: "#f5f0e8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorantGaramond.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh antialiased" suppressHydrationWarning>
        <JsonLdOrganization />
        {children}
        <SiteWhatsAppFab />
      </body>
    </html>
  );
}
