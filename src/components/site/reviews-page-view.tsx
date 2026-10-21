import { JsonLd } from "@/components/site/json-ld";
import { ReviewsLanding } from "@/components/site/reviews-landing";
import { localizedHref, pick, type Locale } from "@/lib/i18n/locale";
import { buildBreadcrumbJsonLd, buildReviewsJsonLd } from "@/lib/structured-data";

export function ReviewsPageView({ locale = "en" }: { readonly locale?: Locale }) {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: pick(locale, "Home", "Αρχική"), path: localizedHref(locale, "/") },
          { name: pick(locale, "Reviews", "Κριτικές"), path: localizedHref(locale, "/reviews") },
        ])}
      />
      <JsonLd data={buildReviewsJsonLd()} />
      <ReviewsLanding locale={locale} />
    </>
  );
}
