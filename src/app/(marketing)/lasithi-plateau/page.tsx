import type { Metadata } from "next";
import { GuidePage, GuideSection, TextLink } from "@/components/site/guide-page";
import { JsonLd } from "@/components/site/json-ld";
import { buildPageMetadata } from "@/lib/build-page-metadata";
import { buildBreadcrumbJsonLd, buildWebPageJsonLd } from "@/lib/structured-data";

const title = "Lasithi Plateau from Avdou";
const description =
  "Lasithi Plateau is about 14 km from Avdou. Windmills, Tzermiado, and Psychro Cave, then back to the stone houses.";
const path = "/lasithi-plateau";
const imageAlt = "Bedroom with mountain views at Kagiampakis Concept Residences";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
  ogImage: {
    url: "/property/bedroom-view.jpg",
    width: 1200,
    height: 800,
    alt: imageAlt,
  },
});

export default function LasithiPlateauPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Lasithi Plateau", path },
        ])}
      />
      <JsonLd data={buildWebPageJsonLd({ name: title, description, path })} />
      <GuidePage
        eyebrow="About 14 km"
        title="The Lasithi Plateau from Avdou"
        lede="The houses list the Lasithi Plateau at about 14 km. This page is the plain itself: size, windmills, villages, and the cave above Psychro. Ask the host for a drive time."
        imageSrc="/property/bedroom-view.jpg"
        imageAlt={imageAlt}
      >
        <GuideSection title="The plain">
          <p>
            The Lasithi Plateau (Οροπέδιο Λασιθίου) is a high plain in the Lasithi regional unit of
            eastern Crete. It runs about 11 km east to west and about 6 km north to south, at an
            average altitude of 840 metres. Heraklion is about 70 km to the west. From these houses
            in <TextLink href="/avdou-village">Avdou</TextLink> the same plain is about 14 km.
          </p>
          <p>
            The plain is a basin with no river outlet to the sea. Floodwater is diverted through a
            tunnel of about 3.5 km into the Aposelemis reservoir. That dam is a separate, much
            shorter trip from Avdou, about 3.9 km, and is described with the{" "}
            <TextLink href="/day-trips#aposelemis">day trips</TextLink>. Winters on the plateau can
            be harsh, and snow on the plain and the surrounding mountains can last into mid-spring.
          </p>
          <p>
            The rock just under the plain does not let water drain away, and the water table sits
            high. Burials on the plateau are often placed above ground, in stone mausoleums.
          </p>
          <p>
            Tzermiado is the municipal seat. Agios Georgios is the second largest settlement on the
            plain. Psychro is the village under the cave. Between them the road crosses the fields
            and the lines of wind-pumps. From Avdou the published distance is 14 km. From Heraklion
            city the plain is about 70 km, and the houses are about 35 km from the city.
          </p>
        </GuideSection>

        <GuideSection title="Windmills">
          <p>
            The plateau is known for white-sailed wind-pumps, built to a local pattern and used to
            lift irrigation water. They have been part of the plain since the 1920s. There were once
            about 10,000 of them. Most have since been left in favour of diesel and electric pumps.
            You still see the white wheels as you cross the plain. They are field machines.
          </p>
        </GuideSection>

        <GuideSection title="Psychro Cave">
          <p>
            Psychro Cave, above the village of Psychro, is an ancient Minoan sacred cave in the
            Dikti mountains. Visitors often hear it called the Diktaian Cave, and the story that
            Zeus was born in a cave on Dikte is the reason many people make the trip. Ancient
            writers do place that birth on Dikte. Modern historians do not all agree that Psychro is
            the cave those texts meant. The disagreement is about the place name, not about the cave
            being an archaeological site.
          </p>
          <p>
            The cave was a place of cult offerings. Material from it is in the Archaeological Museum
            of Heraklion, which the houses already list among the reasons to drive into the city,
            about 35 km from Avdou. Check the cave’s own notice for tickets and hours before you go.
          </p>
          <p>
            North of the plateau, the ridge site of Karfi is described by archaeologists as a late
            refuge of Minoan settlement. It sits in the mountains above the plain.
          </p>
        </GuideSection>

        <GuideSection title="A half day from the houses">
          <p>
            A half day from Avdou is the 14 km drive onto the plain, time among the windmills and a
            village, and Psychro if the cave is open that day. The return is the same road back to
            the alley. The published figure is the 14 km. Ask Xrisa on WhatsApp for the time she
            allows, the same way the <TextLink href="/what-to-see">what to see</TextLink> page
            already suggests.
          </p>
          <p>
            Come back to <TextLink href="/residences/concept-1">Residence I</TextLink> or{" "}
            <TextLink href="/residences/concept-2">Residence II</TextLink>. Residence I has the
            wood-burning stove if the plateau was cold. Both houses have air conditioning.
            Directions from the airport and the port are on{" "}
            <TextLink href="/getting-here">getting here</TextLink>.
          </p>
        </GuideSection>
      </GuidePage>
    </>
  );
}
