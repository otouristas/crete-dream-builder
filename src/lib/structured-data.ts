import { faqAnswerText, SITE_FAQ } from "@/lib/faq-data";
import { GEO } from "@/lib/geo-config";
import { DEFAULT_OG_IMAGE_PATH, HOME_DESCRIPTION, SITE_NAME } from "@/lib/seo-config";
import { getAbsoluteUrl } from "@/lib/site-url";
import {
  AIRBNB_RESI_1_URL,
  AIRBNB_RESI_2_URL,
  EMAIL,
  GOOGLE_BUSINESS_URL,
  INSTAGRAM_URL,
  PHONE_1,
  PHONE_2,
  TRIPADVISOR_URL,
} from "@/lib/site-constants";
import { getAllResidences, type ResidenceDetails } from "@/lib/residences-data";

function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: GEO.streetAddress,
    addressLocality: GEO.locality,
    addressRegion: GEO.region,
    postalCode: GEO.postalCode,
    addressCountry: GEO.country,
  };
}

function geoCoordinates() {
  return {
    "@type": "GeoCoordinates",
    latitude: GEO.latitude,
    longitude: GEO.longitude,
  };
}

/**
 * Profiles already linked from the site. No Booking URL is published in the repo.
 */
function sameAs() {
  return [
    INSTAGRAM_URL,
    GOOGLE_BUSINESS_URL,
    TRIPADVISOR_URL,
    AIRBNB_RESI_1_URL,
    AIRBNB_RESI_2_URL,
  ];
}

function logo() {
  return {
    "@type": "ImageObject" as const,
    url: getAbsoluteUrl("/logo-final.png"),
  };
}

function contactPoints() {
  return [
    {
      "@type": "ContactPoint" as const,
      telephone: PHONE_1,
      email: EMAIL,
      contactType: "reservations",
      availableLanguage: ["English", "Greek"],
    },
    {
      "@type": "ContactPoint" as const,
      telephone: PHONE_2,
      contactType: "reservations",
      availableLanguage: ["English", "Greek"],
    },
  ];
}

export function organizationId(): string {
  return `${getAbsoluteUrl("/")}#organization`;
}

export function websiteId(): string {
  return `${getAbsoluteUrl("/")}#website`;
}

export function buildOrganizationJsonLd() {
  const url = getAbsoluteUrl("/");
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId(),
    name: SITE_NAME,
    url,
    logo: logo(),
    email: EMAIL,
    telephone: PHONE_1,
    contactPoint: contactPoints(),
    sameAs: sameAs(),
  };
}

export function buildWebsiteJsonLd() {
  const url = getAbsoluteUrl("/");
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId(),
    name: SITE_NAME,
    url,
    inLanguage: "en-GB",
    description: HOME_DESCRIPTION,
    publisher: { "@id": organizationId() },
  };
}

export function buildWebPageJsonLd(page: {
  readonly name: string;
  readonly description: string;
  readonly path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.name,
    description: page.description,
    url: getAbsoluteUrl(page.path),
    inLanguage: "en-GB",
    isPartOf: { "@id": websiteId() },
  };
}

/**
 * Bed details copied from each house's sleeping arrangements.
 * "1 Single Bed / Sofa" stays as written — the slash is not resolved into an extra bed.
 */
function bedDetails(residence: ResidenceDetails) {
  return residence.sleepingArrangements.flatMap((arrangement) =>
    arrangement.beds.split(" & ").map((clause) => {
      const match = clause.trim().match(/^(\d+)\s+(.+)$/);
      if (!match?.[1] || !match[2]) {
        return {
          "@type": "BedDetails" as const,
          name: arrangement.room,
          description: arrangement.beds,
        };
      }
      const rest = match[2].trim();
      const simple = rest.match(/^(Double|Single) Bed$/);
      return {
        "@type": "BedDetails" as const,
        name: arrangement.room,
        numberOfBeds: Number(match[1]),
        typeOfBed: simple?.[1] ?? rest,
      };
    }),
  );
}

function residencePlace(residence: ResidenceDetails) {
  return {
    "@type": "VacationRental" as const,
    name: residence.title,
    url: getAbsoluteUrl(`/residences/${residence.id}`),
    occupancy: { "@type": "QuantitativeValue", maxValue: residence.maxGuests },
    numberOfBedrooms: residence.bedrooms,
    numberOfBathroomsTotal: residence.bathrooms,
    bed: bedDetails(residence),
    identifier: residence.registrationNumber,
  };
}

export function buildLodgingBusinessJsonLd() {
  const url = getAbsoluteUrl("/");
  const image = getAbsoluteUrl(DEFAULT_OG_IMAGE_PATH);
  const residences = getAllResidences();

  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: SITE_NAME,
    description: HOME_DESCRIPTION,
    url,
    image: [image],
    logo: logo(),
    telephone: [PHONE_1, PHONE_2],
    email: EMAIL,
    contactPoint: contactPoints(),
    priceRange: "€60-€180",
    address: postalAddress(),
    geo: geoCoordinates(),
    hasMap: `https://maps.google.com/?q=${GEO.mapsQuery}`,
    sameAs: sameAs(),
    identifier: ["00000846700", "00001845501"],
    numberOfRooms: 2,
    parentOrganization: { "@id": organizationId() },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Kitchen", value: true },
      { "@type": "LocationFeatureSpecification", name: "Air conditioning", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free parking", value: true },
    ],
    containsPlace: residences.map((residence) => residencePlace(residence)),
  };
}

export function buildFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SITE_FAQ.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faqAnswerText(item.answer),
      },
    })),
  };
}

export function buildBreadcrumbJsonLd(items: readonly { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getAbsoluteUrl(item.path),
    })),
  };
}

export function buildVacationRentalJsonLd(residence: ResidenceDetails) {
  const url = getAbsoluteUrl(`/residences/${residence.id}`);
  const images = residence.photos
    .slice(0, 8)
    .map((photo) => (photo.src.startsWith("http") ? photo.src : getAbsoluteUrl(photo.src)));

  return {
    "@context": "https://schema.org",
    "@type": "VacationRental",
    name: residence.title,
    description: residence.description.join(" "),
    url,
    image: images,
    telephone: PHONE_1,
    email: EMAIL,
    identifier: residence.registrationNumber,
    address: postalAddress(),
    geo: geoCoordinates(),
    numberOfBedrooms: residence.bedrooms,
    numberOfBathroomsTotal: residence.bathrooms,
    occupancy: { "@type": "QuantitativeValue", maxValue: residence.maxGuests },
    bed: bedDetails(residence),
    amenityFeature: residence.amenities.map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: residence.startingPriceSunThu,
      availability: "https://schema.org/InStock",
      url,
    },
  };
}
