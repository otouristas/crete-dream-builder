import {
  HomeContact,
  HomeGallery,
  HomeHero,
  HomeLocation,
  HomeStay,
  HomeStory,
} from "@/components/site/home-sections";

export function HomeContent() {
  return (
    <div className="bg-cream text-foreground">
      <HomeHero />
      <HomeStory />
      <HomeGallery />
      <HomeStay />
      <HomeLocation />
      <HomeContact />
    </div>
  );
}
