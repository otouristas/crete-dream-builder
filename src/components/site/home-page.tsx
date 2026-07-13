import {
  HomeCalculatorSection,
  HomeContact,
  HomeHero,
  HomeLocation,
  HomeResidencesSection,
  HomeStory,
} from "@/components/site/home-sections";

export function HomeContent() {
  return (
    <div className="bg-cream text-foreground">
      <HomeHero />
      <HomeResidencesSection />
      <HomeCalculatorSection />
      <HomeStory />
      <HomeLocation />
      <HomeContact />
    </div>
  );
}
