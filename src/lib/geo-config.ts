/** Geographic entity used for SEO, GEO tags, maps, and JSON-LD. */
export const GEO = {
  latitude: 35.230902,
  longitude: 25.430079,
  locality: "Avdou",
  region: "Crete",
  regionCode: "GR-M",
  country: "GR",
  countryName: "Greece",
  postalCode: "70005",
  streetAddress: "Sokaki Kagiampidon",
  placename: "Avdou, Crete, Greece",
  mapsQuery: "Kagiampakis+Concept+Residences+Avdou",
} as const;

export const GEO_POSITION = `${GEO.latitude};${GEO.longitude}`;
export const GEO_ICBM = `${GEO.latitude}, ${GEO.longitude}`;
