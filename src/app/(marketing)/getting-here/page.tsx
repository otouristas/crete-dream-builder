import type { Metadata } from "next";
import { GuidePage, GuideSection, TextLink } from "@/components/site/guide-page";
import { JsonLd } from "@/components/site/json-ld";
import { buildPageMetadata } from "@/lib/build-page-metadata";
import { GEO } from "@/lib/geo-config";
import { buildBreadcrumbJsonLd, buildWebPageJsonLd } from "@/lib/structured-data";

const title = "Getting to Avdou, Crete";
const description =
  "Heraklion Airport is 34.3 km (about 31 min) from the Avdou houses. The port is 37.5 km (about 41 min). Sokaki Kagiampidon.";
const path = "/getting-here";
const imageAlt = "Stone courtyard at Kagiampakis Concept Residences in Avdou, Crete";
const mapsHref = `https://maps.google.com/?q=${GEO.mapsQuery}`;

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
  ogImage: {
    url: "/property/exterior-courtyard.jpg",
    width: 1920,
    height: 1280,
    alt: imageAlt,
  },
});

export default function GettingHerePage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Getting here", path },
        ])}
      />
      <JsonLd data={buildWebPageJsonLd({ name: title, description, path })} />
      <GuidePage
        eyebrow="Airport, port, alley"
        title="Getting to the houses in Avdou"
        lede="Sokaki Kagiampidon, Avdou 70005. The pin is the same one used on the contact page. Distances below are the ones already published for these houses."
        imageSrc="/property/exterior-courtyard.jpg"
        imageAlt={imageAlt}
      >
        <GuideSection title="From Heraklion Airport and the port">
          <p>
            Heraklion Airport is 34.3 km from the houses, about 31 minutes. Heraklion port is 37.5
            km, about 41 minutes. Heraklion city, including the Archaeological Museum and Knossos,
            is about 35 km. These are the driving estimates published for the houses.
          </p>
          <p>
            Send flight or ferry details on WhatsApp and the host will help with directions, which
            is the same offer already on <TextLink href="/what-to-see">what to see</TextLink>. For a
            taxi fare or a transfer, ask Xrisa what she can arrange for those dates.
          </p>
        </GuideSection>

        <GuideSection title="The address and the pin">
          <p>
            The houses are at {GEO.streetAddress}, {GEO.locality} {GEO.postalCode},{" "}
            {GEO.countryName}. The map pin is {GEO.latitude}, {GEO.longitude}.{" "}
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Open the pin in Google Maps
            </a>
            . The contact page also embeds the same place.
          </p>
          <p>
            <TextLink href="/residences/concept-1">Residence I</TextLink> opens onto the traditional
            alley Sokaki Kagiampidon, described on that page as a private dead-end street used as a
            courtyard. <TextLink href="/residences/concept-2">Residence II</TextLink> is the second
            house in the village, for up to 7 guests. The two pages are the way to choose which door
            you are coming to.
          </p>
        </GuideSection>

        <GuideSection title="Parking">
          <p>
            Both residences include free on-premises and village parking. The main street is about a
            block from the alley. That is the parking note already in the{" "}
            <TextLink href="/faq">FAQ</TextLink>. The alley itself is the approach to Residence I,
            so leave the car in the parking the host points out rather than blocking the sokaki.
          </p>
          <p>
            For the village around the alley, see the{" "}
            <TextLink href="/avdou-village">Avdou guide</TextLink>. For the 14 km drive up to the
            plain, see the <TextLink href="/lasithi-plateau">Lasithi Plateau</TextLink>.
          </p>
        </GuideSection>
      </GuidePage>
    </>
  );
}
