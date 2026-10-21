import type { Metadata } from "next";
import { GuidePage, GuideSection, TextLink } from "@/components/site/guide-page";
import { buildPageMetadata } from "@/lib/build-page-metadata";

const locale = "en" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Lasithi Plateau from Avdou",
  description:
    "The Lasithi Plateau and its 18 villages are 14 km from the stone houses in Avdou, Crete. Ask the host for the drive.",
  path: "/lasithi-plateau",
  locale,
});

export default function LasithiPlateauPage() {
  return (
    <GuidePage
      locale={locale}
      path="/lasithi-plateau"
      eyebrow="Οροπέδιο Λασιθίου"
      h1="The Lasithi Plateau, 14 km from Avdou"
      lede="The host lists the plateau and its 18 villages among the day trips from the two residences in Avdou."
      inShort="From Kagiampakis Concept Residences the Lasithi Plateau is 14 km away. The host describes 18 picturesque villages. No drive time is published, so ask Xrisa for the route before you set out. The same 14 km reaches the beaches of Hersonissos in the other direction."
      image={{
        src: "/property/bedroom-view.jpg",
        alt: "Bedroom in the Avdou stone house, looking toward the mountain",
      }}
    >
      <GuideSection title="What the host says">
        <p>
          The listing text places the Lasithi Plateau and its 18 picturesque villages 14 km from the
          houses. That is the figure to use. A driving time is not given, and this page does not
          invent one.
        </p>
        <p>
          Avdou itself sits between the mountain and the sea. The host describes direct access to
          both. The plateau is the mountain side of that pair. Hersonissos, for swimming, is the
          same 14 km toward the coast. Details of both are on{" "}
          <TextLink href="/day-trips">day trips from Avdou</TextLink>.
        </p>
      </GuideSection>
      <GuideSection title="A half day, without a timetable">
        <p>
          A half day from the houses is the 14 km out to the plain, time in the villages, and the
          drive back to Avdou. Which road to take, and how long it takes on the day you go, is a
          question for Xrisa. She answers on WhatsApp in Greek or English.
        </p>
        <p>
          The <TextLink href="/what-to-see">what to see</TextLink> page keeps the same 14 km
          distance beside the other trips: Agia Fotini cave at 3.6 km and the Aposelemis dam at 3.9
          km.
        </p>
      </GuideSection>
      <GuideSection title="Coming back to the houses">
        <p>
          <TextLink href="/residences/concept-1">Residence I</TextLink> sleeps up to 6, with a view
          toward the mountain of the Agia Fotini cave.{" "}
          <TextLink href="/residences/concept-2">Residence II</TextLink> sleeps up to 7. Check-in is
          after 15:00 and checkout is before 12:00. Directions from Heraklion are on{" "}
          <TextLink href="/getting-here">getting here</TextLink>. The village itself is described on
          the <TextLink href="/avdou-village">Avdou guide</TextLink>.
        </p>
      </GuideSection>
    </GuidePage>
  );
}
