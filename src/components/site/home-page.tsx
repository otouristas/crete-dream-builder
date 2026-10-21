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
import type { Locale } from "@/lib/i18n/locale";
import { buildFaqJsonLd } from "@/lib/structured-data";

export function HomeContent({ locale = "en" }: { readonly locale?: Locale }) {
  return (
    <div className="bg-cream text-foreground">
      <JsonLd data={buildFaqJsonLd(locale)} />
      <HomeHero locale={locale} />
      <HomeResidencesSection locale={locale} />
      <HomeCalculatorSection locale={locale} />
      <HomeStory locale={locale} />
      <HomeLocation locale={locale} />
      <HomeFaqSection locale={locale} />
      <HomeContact locale={locale} />
    </div>
  );
}
