import type { Metadata } from "next";
import { GuidePage, GuideSection, TextLink } from "@/components/site/guide-page";
import { buildPageMetadata } from "@/lib/build-page-metadata";
import { GEO } from "@/lib/geo-config";

const locale = "en" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Getting to Avdou, Crete",
  description:
    "Heraklion Airport is 34.3 km (about 31 minutes) from the stone houses in Avdou. The port is 37.5 km, about 41 minutes.",
  path: "/getting-here",
  locale,
});

export default function GettingHerePage() {
  return (
    <GuidePage
      locale={locale}
      path="/getting-here"
      eyebrow="Arrival"
      h1="Getting to the houses in Avdou"
      lede="The pin is Sokaki Kagiampidon, Avdou 70005. Check-in is after 15:00 and the host greets you."
      inShort="Heraklion Airport, Nikos Kazantzakis, is 34.3 km from the houses, about 31 minutes. The port of Heraklion is 37.5 km, about 41 minutes. Heraklion city is about 35 km. Checkout is before 12:00. Ask Xrisa on WhatsApp for the route you should drive."
      image={{
        src: "/property/entrance-evening.jpg",
        alt: "Stone entrance of the houses in Avdou",
      }}
    >
      <GuideSection title="Airport, port, and city">
        <p>
          The host&apos;s getting-around note for Residence I gives 31 minutes and 34.3 km from
          Nikos Kazantzakis Airport, and 41 minutes and 37.5 km from the port of Heraklion. The
          house description also places Avdou about 35 km from the city of Heraklion.
        </p>
        <p>
          Coordinates used on this site: {GEO.latitude}, {GEO.longitude}.{" "}
          <a
            href={`https://maps.google.com/?q=${GEO.mapsQuery}`}
            className="font-medium text-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open the pin in Google Maps
          </a>
          . The street is {GEO.streetAddress}, {GEO.locality} {GEO.postalCode}.
        </p>
      </GuideSection>
      <GuideSection title="When you arrive">
        <p>
          Check-in is after 15:00. Checkout is before 12:00. The same hours apply to both
          residences. The host greets you. Message Xrisa in Greek or English with your arrival time
          so she knows which house to open: Residence I (up to 6 guests, 2-night minimum) or
          Residence II (up to 7 guests, 3-night minimum).
        </p>
        <p>
          The <TextLink href="/avdou-village">Avdou guide</TextLink> describes the village. Day
          trips and their kilometres are on <TextLink href="/day-trips">day trips</TextLink>. A
          group using both houses should read{" "}
          <TextLink href="/groups">groups and families</TextLink> and the{" "}
          <TextLink href="/faq">FAQ</TextLink>.
        </p>
      </GuideSection>
    </GuidePage>
  );
}
