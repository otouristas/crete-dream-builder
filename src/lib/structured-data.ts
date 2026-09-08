import { SITE_FAQ } from "@/lib/faq-data";
import { GEO } from "@/lib/geo-config";
import { getReviewStats } from "@/lib/review-stats";
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

function sameAs() {
  return [
    INSTAGRAM_URL,
    GOOGLE_BUSINESS_URL,
    TRIPADVISOR_URL,
    AIRBNB_RESI_1_URL,
    AIRBNB_RESI_2_URL,
  ];
}

export function buildWebsiteJsonLd() {
  const url = getAbsoluteUrl("/");
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url,
    inLanguage: "en-GB",
    description: HOME_DESCRIPTION,
    publisher: { "@type": "Organization", name: SITE_NAME, url },
  };
}

export function buildLodgingBusinessJsonLd() {
  const url = getAbsoluteUrl("/");
  const image = getAbsoluteUrl(DEFAULT_OG_IMAGE_PATH);
  const { count, rating } = getReviewStats();
  const residences = getAllResidences();

  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: SITE_NAME,
    description: HOME_DESCRIPTION,
    url,
    image: [image],
    telephone: [PHONE_1, PHONE_2],
    email: EMAIL,
    priceRange: "€60-€180",
    address: postalAddress(),
    geo: geoCoordinates(),
    hasMap: `https://maps.google.com/?q=${GEO.mapsQuery}`,
    sameAs: sameAs(),
    identifier: ["00000846700", "00001845501"],
    numberOfRooms: 2,
    starRating: { "@type": "Rating", ratingValue: String(rating), bestRating: "5" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating,
      reviewCount: count,
      bestRating: 5,
      worstRating: 1,
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Kitchen", value: true },
      { "@type": "LocationFeatureSpecification", name: "Air conditioning", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free parking", value: true },
    ],
    containsPlace: residences.map((residence) => ({
      "@type": "VacationRental",
      name: residence.title,
      url: getAbsoluteUrl(`/residences/${residence.id}`),
      occupancy: { "@type": "QuantitativeValue", maxValue: residence.maxGuests },
      numberOfBedrooms: residence.bedrooms,
      numberOfBathroomsTotal: residence.bathrooms,
      identifier: residence.registrationNumber,
    })),
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
        text: item.answer,
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
  const { count, rating } = getReviewStats();

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
    amenityFeature: residence.amenities.map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating,
      reviewCount: count,
      bestRating: 5,
      worstRating: 1,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: residence.startingPriceSunThu,
      availability: "https://schema.org/InStock",
      url,
    },
  };
}

export function buildReviewsJsonLd() {
  const { count, rating } = getReviewStats();
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: SITE_NAME,
    url: getAbsoluteUrl("/reviews"),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating,
      reviewCount: count,
      bestRating: 5,
      worstRating: 1,
    },
  };
}
