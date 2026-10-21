import type { Metadata } from "next";
import { GuidePage, GuideSection, TextLink } from "@/components/site/guide-page";
import { buildPageMetadata } from "@/lib/build-page-metadata";

const locale = "en" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Groups and families, up to 13",
  description:
    "Two residences in Avdou, Crete: up to 6 guests and up to 7 guests, 13 when both are reserved. Each house keeps its own stay rules.",
  path: "/groups",
  locale,
});

export default function GroupsPage() {
  return (
    <GuidePage
      locale={locale}
      path="/groups"
      eyebrow="Families"
      h1="Two residences in Avdou, for up to 13 guests"
      lede="A larger party reserves both houses. Each one keeps its own minimum stay and its own house rules."
      inShort="Residence I sleeps up to 6 guests in 2 bedrooms. Residence II sleeps up to 7 guests in 3 bedrooms. Together, the two residences in Avdou sleep up to 13. Check-in is after 15:00 and checkout is before 12:00. Xrisa, who speaks Greek and English, confirms both dates."
      image={{
        src: "/property/stone-living.jpg",
        alt: "Stone interior at Kagiampakis Concept Residences",
      }}
    >
      <GuideSection title="Residence I">
        <p>
          <TextLink href="/residences/concept-1">Residence I</TextLink> is a three-level stone house
          for up to 6 guests, with 2 bedrooms, 3 beds, and 1 bathroom. The minimum stay is 2 nights.
          Pets are not accepted. Service animals are the exception. Registration 00000846700. On
          Airbnb the house is rated 5.0 from 26 reviews. In the winter months the host describes a
          wood-burning stove on the ground floor.
        </p>
      </GuideSection>
      <GuideSection title="Residence II">
        <p>
          <TextLink href="/residences/concept-2">Residence II</TextLink> sleeps up to 7 guests in 3
          bedrooms and 2 bathrooms. The minimum stay is 3 nights. One pet is allowed. Registration
          00001845501. The Airbnb listing has no reviews yet. The host for that listing is the same
          Xrisa, with co-host Korina.
        </p>
      </GuideSection>
      <GuideSection title="Booking both">
        <p>
          Ask for both houses on the same dates if the party needs up to 13 guests across the two
          residences in Avdou. Residence I still needs at least 2 nights and Residence II at least
          3. Write the guest count for each house. The <TextLink href="/faq">FAQ</TextLink> answers
          check-in, pets, and the airport distance, and{" "}
          <TextLink href="/getting-here">getting here</TextLink> has the port and airport
          kilometres.
        </p>
        <p>
          The village, the Rosa gorge, and the summer celebrations are on the{" "}
          <TextLink href="/avdou-village">Avdou guide</TextLink>. The plateau, 14 km away, is on the{" "}
          <TextLink href="/lasithi-plateau">Lasithi page</TextLink>.
        </p>
      </GuideSection>
    </GuidePage>
  );
}
