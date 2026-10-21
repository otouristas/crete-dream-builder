import { JsonLd } from "@/components/site/json-ld";
import { WhatToSeeLanding } from "@/components/site/what-to-see-landing";
import { localizedHref, pick, type Locale } from "@/lib/i18n/locale";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";

export function WhatToSeePageView({ locale = "en" }: { readonly locale?: Locale }) {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: pick(locale, "Home", "Αρχική"), path: localizedHref(locale, "/") },
          {
            name: pick(locale, "What to see", "Τι να δείτε"),
            path: localizedHref(locale, "/what-to-see"),
          },
        ])}
      />
      <WhatToSeeLanding locale={locale} />
    </>
  );
}
