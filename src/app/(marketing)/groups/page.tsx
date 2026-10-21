import type { Metadata } from "next";
import { GuidePage, GuideSection, TextLink } from "@/components/site/guide-page";
import { JsonLd } from "@/components/site/json-ld";
import { buildPageMetadata } from "@/lib/build-page-metadata";
import { RESIDENCES_DATA } from "@/lib/residences-data";
import { buildBreadcrumbJsonLd, buildWebPageJsonLd } from "@/lib/structured-data";

const residenceI = RESIDENCES_DATA["concept-1"];
const residenceII = RESIDENCES_DATA["concept-2"];

const title = "Groups and families, up to 13";
const description =
  "Both Avdou stone houses sleep 13 together. Residence I from €60 a night, Residence II from €170. Book each house direct.";
const path = "/groups";
const imageAlt = "Authentic stone interior architecture";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
  ogImage: {
    url: "/property/stone-living.jpg",
    width: 1200,
    height: 800,
    alt: imageAlt,
  },
});

export default function GroupsPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Groups and families", path },
        ])}
      />
      <JsonLd data={buildWebPageJsonLd({ name: title, description, path })} />
      <GuidePage
        eyebrow="Up to 13 guests"
        title="Both houses for a group of 13"
        lede="Residence I sleeps 6 and Residence II sleeps 7. Reserved together, they sleep 13. Each house keeps its own published rate and its own minimum stay."
        imageSrc="/property/stone-living.jpg"
        imageAlt={imageAlt}
      >
        <GuideSection title="The two houses">
          <p>
            <TextLink href="/residences/concept-1">Residence I</TextLink> is the three-level stone
            house: {residenceI.bedrooms} bedrooms, {residenceI.bathrooms} bathroom, up to{" "}
            {residenceI.maxGuests} guests, minimum {residenceI.minStayNights} nights. The ground
            floor has the kitchen and the wood-burning stove. One bedroom is on the first floor,
            with a balcony. The upper bedroom looks toward the Agia Fotini mountain.
          </p>
          <p>
            <TextLink href="/residences/concept-2">Residence II</TextLink> sleeps up to{" "}
            {residenceII.maxGuests} guests in {residenceII.bedrooms} bedrooms and{" "}
            {residenceII.bathrooms} bathrooms, with a minimum of {residenceII.minStayNights} nights.
            It has a workspace, an in-unit washing machine, and air conditioning in the rooms.
          </p>
          <p>
            The houses are both in <TextLink href="/avdou-village">Avdou</TextLink>. Book them as
            two stays, each at the rate on its own page. Ask on WhatsApp to hold both calendars for
            the same dates.
          </p>
        </GuideSection>

        <GuideSection title="Published rates">
          <p>Residence I, from the house page:</p>
          <ul className="list-disc space-y-2 pl-5">
            {residenceI.pricingNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
          <p>Residence II, from the house page:</p>
          <ul className="list-disc space-y-2 pl-5">
            {residenceII.pricingNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
          <p>
            For a full Residence I (6 guests) the published rates are €120 a night Sunday to
            Thursday and €130 on Friday and Saturday. Residence II is €170 and €180 for up to 7
            guests. Added together, those published nightly rates are €290 Sunday to Thursday and
            €310 on Friday and Saturday.
          </p>
          <p>
            The <TextLink href="/#calculator">rate calculator</TextLink> prices one house at a time
            from the same figures. Run it twice if you are holding both, then send both quotes to
            Xrisa.
          </p>
        </GuideSection>

        <GuideSection title="Families and a shared week">
          <p>
            The residences page already describes booking both for a family gathering of up to 13
            guests. Residence I’s minimum is {residenceI.minStayNights} nights and Residence II’s
            minimum is {residenceII.minStayNights} nights, so a shared booking has to satisfy each
            house. Kitchens, Wi-Fi, air conditioning, and free parking are on both. Residence I adds
            the stove and the balcony. Residence II adds the second bathroom, the workspace, and the
            washer.
          </p>
          <p>
            Daytime, the group can split between the{" "}
            <TextLink href="/lasithi-plateau">plateau</TextLink>, the{" "}
            <TextLink href="/day-trips">dam, the cave, and the coast</TextLink>, and meet again in
            the village. Arrival notes are on <TextLink href="/getting-here">getting here</TextLink>
            .
          </p>
        </GuideSection>
      </GuidePage>
    </>
  );
}
