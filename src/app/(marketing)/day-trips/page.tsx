import type { Metadata } from "next";
import { GuidePage, GuideSection, TextLink } from "@/components/site/guide-page";
import { JsonLd } from "@/components/site/json-ld";
import { buildPageMetadata } from "@/lib/build-page-metadata";
import { buildBreadcrumbJsonLd, buildWebPageJsonLd } from "@/lib/structured-data";

const title = "Day trips from Avdou";
const description =
  "Day trips from Avdou: Aposelemis Dam (3.9 km), Agia Fotini cave (3.6 km), and Hersonissos beaches (about 14 km).";
const path = "/day-trips";
const imageAlt = "Courtyard at Kagiampakis Residences";

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

export default function DayTripsPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Day trips", path },
        ])}
      />
      <JsonLd data={buildWebPageJsonLd({ name: title, description, path })} />
      <GuidePage
        eyebrow="From the alley"
        title="Day trips from Avdou"
        lede="Three trips already measured from the houses: the Aposelemis Dam, the cave of Agia Fotini, and the coast at Hersonissos. The longer Lasithi Plateau drive has its own page."
        imageSrc="/property/exterior-courtyard.jpg"
        imageAlt={imageAlt}
      >
        <GuideSection id="aposelemis" title="Aposelemis Dam">
          <p>
            The houses list the Aposelemis Dam at about 3.9 km. The Avdou cultural association
            describes it as the reservoir built to supply drinking water and irrigation along the
            north coast of eastern Crete, from Heraklion to Agios Nikolaos. Construction finished in
            2012. The stated capacity is 27 million cubic metres. The association says the water
            comes mainly from the springs of Kastamonitsa and from the Lasithi Plateau, and that the
            lake has become a wetland.
          </p>
          <p>
            As the water rises and falls, the old village of Sfentyli disappears and comes back into
            view. The association also notes the vaulted church of Saint Nikolaos, on the road
            between Heraklion and Lasithi about two kilometres before Avdou, which the reservoir
            covered and which low water has brought back to the surface. Both are sights that depend
            on the water level that week.
          </p>
          <p>
            On the plateau, floodwater reaches this reservoir through a tunnel of about 3.5 km. That
            connection is why a morning at the dam and an afternoon on the{" "}
            <TextLink href="/lasithi-plateau">Lasithi Plateau</TextLink> are two halves of the same
            water system, even though the distances from the houses are different: 3.9 km to the
            dam, about 14 km to the plain.
          </p>
        </GuideSection>

        <GuideSection id="agia-fotini" title="Cave of Agia Fotini">
          <p>
            The houses list the Cave of Agia Fotini at about 3.6 km. The village association places
            the cave at 760 metres. The visitable temple chamber is 44 metres long, 1.8 to 7.5
            metres wide, and 5.3 to 20 metres high. Twelve metres in, there is a side cavity. A
            narrow passage, an old watercourse, leads to the last room, used as a church of Agia
            Fotini. At the start of that room are six stone steps and two stalagmites the
            association calls the knees of Agia Fotini. A white column beside the sanctuary is 6.5
            metres high.
          </p>
          <p>
            The association says worship in the cave is traced by P. Faure to the 19th century, and
            that at least one monk lived there at the end of that century. It records the cave as a
            refuge during the Cretan revolts. In a letter of 1899 the residents asked their bishop
            for help maintaining the place, and they named the hieromonk Daniel Tzekakis. A local
            festival is held on the fourth Sunday after Easter.
          </p>
          <p>
            The Municipality of Hersonissos describes the road south from Avdou toward this cave,
            and toward the monastery of Agios Ioannis and Agia Anna, as steep, with a poor surface
            and sharp turns. Follow the signs. The houses publish the distance as about 3.6 km. The
            association says the forestry service proposed the kermes-oak wood above the cave, and
            the environment ministry accepted it, as a landscape of exceptional natural beauty. The
            forest runs from about 700 metres to about 1,100 metres.
          </p>
          <p>
            Residence I’s upper bedroom looks toward this mountain. The village context is on the{" "}
            <TextLink href="/avdou-village">Avdou guide</TextLink>.
          </p>
        </GuideSection>

        <GuideSection id="hersonissos" title="Hersonissos and the coast">
          <p>
            Avdou belongs to the Municipality of Hersonissos. The coastal town of Hersonissos is
            about 14 km from the houses, the distance this site gives for swimming and an evening by
            the sea. Aqua Plus water park is listed at about 11.2 km, as a family day between a
            mountain morning and the coast.
          </p>
          <p>
            A coast day still ends in the village.{" "}
            <TextLink href="/residences/concept-1">Residence I</TextLink> and{" "}
            <TextLink href="/residences/concept-2">Residence II</TextLink> are the two doors. If the
            group is large enough to want both, the night split is on{" "}
            <TextLink href="/groups">groups and families</TextLink>. The airport and port times, if
            the coast day is also an arrival day, are on{" "}
            <TextLink href="/getting-here">getting here</TextLink>.
          </p>
          <p>
            The shorter list of distances, including Knossos and the city at about 35 km, stays on{" "}
            <TextLink href="/what-to-see">what to see</TextLink>.
          </p>
        </GuideSection>
      </GuidePage>
    </>
  );
}
