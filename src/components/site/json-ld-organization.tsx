import { JsonLd } from "@/components/site/json-ld";
import {
  buildLodgingBusinessJsonLd,
  buildOrganizationJsonLd,
  buildWebsiteJsonLd,
} from "@/lib/structured-data";

/**
 * Sitewide entity graph: organization, website, and lodging business.
 */
export function JsonLdOrganization() {
  return (
    <>
      <JsonLd data={buildOrganizationJsonLd()} />
      <JsonLd data={buildWebsiteJsonLd()} />
      <JsonLd data={buildLodgingBusinessJsonLd()} />
    </>
  );
}
