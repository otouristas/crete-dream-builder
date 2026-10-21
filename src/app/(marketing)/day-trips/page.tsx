import type { Metadata } from "next";
import { GuidePage, GuideSection, TextLink } from "@/components/site/guide-page";
import { buildPageMetadata } from "@/lib/build-page-metadata";

const locale = "en" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Day trips from Avdou",
  description:
    "Day trips from Avdou, Crete: Agia Fotini cave 3.6 km, Aposelemis dam 3.9 km, Lasithi Plateau 14 km, Hersonissos 14 km.",
  path: "/day-trips",
  locale,
});

export default function DayTripsPage() {
  return (
    <GuidePage
      locale={locale}
      path="/day-trips"
      eyebrow="From the houses"
      h1="Day trips from Avdou"
      lede="Distances below are the ones the host publishes from the two residences in Avdou."
      inShort="Agia Fotini cave is 3.6 km away and the Aposelemis dam is 3.9 km. The Rosa gorge, paragliding, and horseback riding are also listed from the door. The Lasithi Plateau, its 18 villages, and the beaches of Hersonissos are each 14 km. Aqua Plus is 11.2 km."
      image={{
        src: "/property/exterior-courtyard.jpg",
        alt: "Stone courtyard at the houses in Avdou",
      }}
    >
      <GuideSection id="agia-fotini" title="Cave of Agia Fotini">
        <p>
          The cave of Agia Fotini is 3.6 km from the houses. Residence I looks onto the mountain
          where the cave is. The host lists it with the Rosa gorge, paragliding, and horseback
          riding as things to do from the village.
        </p>
      </GuideSection>
      <GuideSection id="aposelemis" title="Aposelemis dam">
        <p>
          The Aposelemis dam is 3.9 km away. The host says you can reach it by hiking or by driving
          along the dam. The village of Avdou is described as near the dam, and Heraklion city is
          about 35 km from the houses.
        </p>
      </GuideSection>
      <GuideSection id="hersonissos" title="The coast">
        <p>
          Hersonissos is 14 km away, for swimming. Aqua Plus water park is 11.2 km away. The host
          describes the location as having direct access to the mountain and the sea.
        </p>
      </GuideSection>
      <GuideSection id="lasithi" title="Lasithi Plateau">
        <p>
          The Lasithi Plateau and its 18 picturesque villages are 14 km away. The{" "}
          <TextLink href="/lasithi-plateau">plateau guide</TextLink> stays with that distance. A
          drive time is not published. Ask Xrisa which way she uses.
        </p>
        <p>
          More of the village is on the <TextLink href="/avdou-village">Avdou guide</TextLink>, and
          the airport and port distances are on{" "}
          <TextLink href="/getting-here">getting here</TextLink>. The shorter cards remain on{" "}
          <TextLink href="/what-to-see">what to see</TextLink>.
        </p>
      </GuideSection>
    </GuidePage>
  );
}
