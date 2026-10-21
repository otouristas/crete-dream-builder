import type { Metadata } from "next";
import { GuidePage, GuideSection, TextLink } from "@/components/site/guide-page";
import { buildPageMetadata } from "@/lib/build-page-metadata";
import { localizedHref } from "@/lib/i18n/locale";

const locale = "en" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Avdou village guide",
  description:
    "Avdou, Crete: the stone village around Kagiampakis Concept Residences, the Rosa gorge, Agia Fotini cave at 3.6 km, and summer celebrations.",
  path: "/avdou-village",
  locale,
});

export default function AvdouVillagePage() {
  return (
    <GuidePage
      locale={locale}
      path="/avdou-village"
      eyebrow="Αβδού · Crete"
      h1="Avdou, the village around the stone houses"
      lede="Two restored stone houses in Avdou, hosted by Xrisa, who speaks Greek and English."
      inShort="Avdou is a village of small stone-and-wood houses, narrow flower-filled streets, and inscriptions on the buildings. Kagiampakis Concept Residences is two residences here: one for up to 6 guests and one for up to 7. Check-in is after 15:00 and checkout is before 12:00."
      image={{
        src: "/property/entrance-evening.jpg",
        alt: "Stone entrance and flowers in Avdou at dusk",
      }}
    >
      <GuideSection title="What the village is like">
        <p>
          The host describes Avdou as small renovated houses that keep stone and wood, with narrow
          streets full of flowers. Inscriptions on the buildings recall the history of each one.
          People are welcoming and ready to help a guest.
        </p>
        <p>
          In the summer months there are more visitors, and the village holds music, dance, theatre,
          concerts, and traditional celebrations. The houses sit on Sokaki Kagiampidon, a dead-end
          lane the host describes as a courtyard, in the postal area 70005.
        </p>
      </GuideSection>
      <GuideSection title="Out of the front door">
        <p>
          From the houses you can cross the Rosa gorge, go paragliding, or go horseback riding. The
          cave of Agia Fotini is 3.6 km away. Residence I looks toward the mountain where that cave
          sits. The Aposelemis dam is 3.9 km away, either on foot or by driving along the dam.
        </p>
        <p>
          Longer notes are on the <TextLink href="/day-trips">day trips</TextLink> page. The Lasithi
          Plateau and its 18 villages are 14 km away (
          <TextLink href="/lasithi-plateau">plateau guide</TextLink>
          ). Hersonissos, for the sea, is also 14 km, and Aqua Plus water park is 11.2 km.
        </p>
      </GuideSection>
      <GuideSection title="Staying here">
        <p>
          <TextLink href={localizedHref(locale, "/residences/concept-1")}>Residence I</TextLink>{" "}
          sleeps up to 6 guests in 2 bedrooms and 1 bathroom, with a 2-night minimum. Pets are not
          accepted there; service animals are the exception. Registration 00000846700. On Airbnb it
          is rated 5.0 from 26 reviews.
        </p>
        <p>
          <TextLink href={localizedHref(locale, "/residences/concept-2")}>Residence II</TextLink>{" "}
          sleeps up to 7 guests in 3 bedrooms and 2 bathrooms, with a 3-night minimum, and allows 1
          pet. Registration 00001845501. That Airbnb listing has no reviews yet.
        </p>
        <p>
          They are two residences in Avdou. A group of up to 13 uses both, each with its own minimum
          stay. See <TextLink href="/groups">groups and families</TextLink>,{" "}
          <TextLink href="/getting-here">getting here</TextLink>, and the{" "}
          <TextLink href="/faq">FAQ</TextLink>.
        </p>
      </GuideSection>
    </GuidePage>
  );
}
