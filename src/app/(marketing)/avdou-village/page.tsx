import type { Metadata } from "next";
import { GuidePage, GuideSection, TextLink } from "@/components/site/guide-page";
import { JsonLd } from "@/components/site/json-ld";
import { buildPageMetadata } from "@/lib/build-page-metadata";
import { buildBreadcrumbJsonLd, buildWebPageJsonLd } from "@/lib/structured-data";

const title = "Avdou village guide";
const description =
  "Avdou (Αβδού), Crete: a Hersonissos village at 230 m, with Byzantine churches, Rosa gorge, and two stone houses.";
const path = "/avdou-village";
const imageAlt = "Stone entrance and flowers in Avdou at dusk";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
  ogImage: {
    url: "/property/entrance-evening.jpg",
    width: 1200,
    height: 800,
    alt: imageAlt,
  },
});

export default function AvdouVillagePage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Avdou village", path },
        ])}
      />
      <JsonLd data={buildWebPageJsonLd({ name: title, description, path })} />
      <GuidePage
        eyebrow="The village"
        title="Avdou, a hillside village in Crete"
        lede="Two stone houses on Sokaki Kagiampidon, in Avdou, postal code 70005. The village sits in the Municipality of Hersonissos, about 35 km from Heraklion."
        imageSrc="/property/entrance-evening.jpg"
        imageAlt={imageAlt}
      >
        <GuideSection title="Where Avdou is">
          <p>
            Avdou (Αβδού) is a village in the Heraklion region of Crete, in the Municipality of
            Hersonissos. The village association places it at an altitude of 230 metres, on the
            eastern side of the Lagkada valley. The 2021 census recorded 238 residents. These houses
            are about 35 km from Heraklion city, 34.3 km from Heraklion Airport, and 37.5 km from
            the port.
          </p>
          <p>
            The oldest written mention the association cites is a document of 1381, when the village
            was recorded as a fief. Later Venetian records spell the name in several ways. The
            association links the name to the Prophet Avdios. The{" "}
            <TextLink href="/getting-here">drive from Heraklion</TextLink> uses the airport and port
            distances above. Parking at the houses is free on the premises and in the village.
          </p>
        </GuideSection>

        <GuideSection title="Churches in the village">
          <p>
            The cultural association describes a large group of churches in and around Avdou. A few
            of them are dated by inscriptions or by the association’s own chronology.
          </p>
          <p>
            The Church of the Annunciation of the Theotokos is a cruciform church with old frescoes.
            The association places it in the 12th or 13th century and calls it a Byzantine monument.
            The church of Saint Leontios is placed in the first half of the 13th century. The church
            of Saint Constantine keeps frescoes the association dates to 1445 from an inscription on
            the west wall, painted by Manuel and John Fokas, whom the association describes as
            forerunners of the Cretan school.
          </p>
          <p>
            Panagia Pantanassa is a small vaulted church about 300 metres northwest of the village.
            An inscription names the noble Nikolaos Ligizos and the year 1600. It is dedicated to
            the Dormition of the Virgin and the association says it is celebrated on 15 August. The
            path from the village passes Agia Paraskevi and the stream the association calls Loutra.
            Other feast days the association records include 6 August at the church of Our Lord
            Christ, and the cave festival on the{" "}
            <TextLink href="/day-trips#agia-fotini">Agia Fotini</TextLink> section. For a taverna,
            ask the host.
          </p>
        </GuideSection>

        <GuideSection title="Rosa gorge and the valley">
          <p>
            The houses already point guests to Rosa gorge, paragliding, and horseback riding. The
            Heraklion mountaineering club describes Rosa gorge as a walk that starts in Avdou and
            climbs toward Kera, with railings along steep rock and geological formations. The
            Municipality of Hersonissos describes a separate signed gorge: follow the road from
            Avdou toward the church of Agios Georgios in Melanies, then the gorge itself, about 2 km
            long, down to the Aposelemis river.
          </p>
          <p>
            South of the houses, Lagkada is the green valley the association describes, from about
            120 metres in the bottom to about 1,160 metres on the ridges. Riverbanks carry plane
            trees and reeds. Above Agia Fotini, the kermes-oak wood is the largest forest in that
            valley, and the association says the forestry service proposed it, and the environment
            ministry accepted it, as a landscape of exceptional natural beauty. A note by the
            botanist Z. Kypriotakis, published on the association’s site, records Cretan zelkova
            growing here near 200 metres, though on the rest of Crete that tree is a high-mountain
            species.
          </p>
          <p>
            Saint Antonios keeps frescoes the association places in the 13th or 14th century, with a
            limited palette it calls rare in Crete. The church of the Prophet Avdios, which the
            association connects with the village name, was built in 2002 on the foundations of a
            Venetian church and is celebrated on 19 November.
          </p>
          <p>
            South of the village the association and the municipality describe the cave of Agia
            Fotini, a shrine cave at 760 metres. This site lists it about 3.6 km from the houses.
            The dam of Aposelemis is listed about 3.9 km away. Both are written up under{" "}
            <TextLink href="/day-trips">day trips</TextLink>. The Lasithi Plateau is about 14 km
            away, on the <TextLink href="/lasithi-plateau">plateau guide</TextLink>.
          </p>
        </GuideSection>

        <GuideSection title="Staying in Avdou">
          <p>
            <TextLink href="/residences/concept-1">Residence I</TextLink> is a three-level stone
            house for up to 6 guests, with a wood-burning stove, from €60 a night and a 2-night
            minimum. <TextLink href="/residences/concept-2">Residence II</TextLink> sleeps up to 7,
            with 3 bedrooms and 2 bathrooms, from €170 a night and a 3-night minimum. Together the
            houses sleep 13. Rates and the minimum stays are on each house page and on{" "}
            <TextLink href="/groups">groups and families</TextLink>.
          </p>
          <p>
            Questions about a walk, a church service, or which taverna the host would send you to go
            to Xrisa on WhatsApp or the <TextLink href="/contact">contact page</TextLink>. The{" "}
            <TextLink href="/faq">FAQ</TextLink> covers rates, parking, and the airport drive.
          </p>
        </GuideSection>
      </GuidePage>
    </>
  );
}
