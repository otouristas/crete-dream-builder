import { JsonLd } from "@/components/site/json-ld";
import {
  HomeCalculatorSection,
  HomeContact,
  HomeFaqSection,
  HomeHero,
  HomeLocation,
  HomeResidencesSection,
  HomeStory,
} from "@/components/site/home-sections";
import { buildFaqJsonLd } from "@/lib/structured-data";

export function HomeContent() {
  return (
    <div className="bg-cream text-foreground">
      <JsonLd data={buildFaqJsonLd()} />
      <HomeHero />
      <HomeResidencesSection />
      <HomeCalculatorSection />
      <HomeStory />
      <HomeLocation />
      <HomeFaqSection />
      <HomeContact />
    </div>
  );
}
