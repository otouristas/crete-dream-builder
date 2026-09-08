import { JsonLd } from "@/components/site/json-ld";
import { buildLodgingBusinessJsonLd, buildWebsiteJsonLd } from "@/lib/structured-data";

/**
 * Sitewide entity graph: lodging business + website for search and answer engines.
 */
export function JsonLdOrganization() {
  return (
    <>
      <JsonLd data={buildWebsiteJsonLd()} />
      <JsonLd data={buildLodgingBusinessJsonLd()} />
    </>
  );
}
