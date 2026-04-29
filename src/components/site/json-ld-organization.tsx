import { getAbsoluteUrl } from "@/lib/site-url";
import { EMAIL, PHONE } from "@/lib/site-constants";
import { DEFAULT_OG_IMAGE_PATH, SITE_NAME } from "@/lib/seo-config";

/**
 * Vacation rental / local business structured data for rich results.
 */
export function JsonLdOrganization() {
  const url = getAbsoluteUrl("/");
  const image = getAbsoluteUrl(DEFAULT_OG_IMAGE_PATH);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VacationRental",
    name: SITE_NAME,
    description:
      "Renovated three-level stone house in Avdou, Crete. Sleeps up to 6. Wood stove, courtyard, mountain views. Book direct via WhatsApp or email.",
    url,
    image: [image],
    telephone: PHONE,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Avdou",
      addressRegion: "Crete",
      addressCountry: "GR",
    },
    identifier: "00000846700",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.230902,
      longitude: 25.430079,
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "WiFi" },
      { "@type": "LocationFeatureSpecification", name: "Kitchen" },
      { "@type": "LocationFeatureSpecification", name: "Free parking" },
    ],
    numberOfRooms: 2,
    occupancy: { "@type": "QuantitativeValue", maxValue: 6 },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
