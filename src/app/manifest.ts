import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kagiampakis Concept Residences",
    short_name: "Kagiampakis",
    description:
      "Traditional stone residences in Avdou, Crete. Book Residence I or II direct with host Xrisa.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f0e8",
    theme_color: "#f5f0e8",
    lang: "en",
    icons: [
      { src: "/logo-final.png", sizes: "192x192", type: "image/png" },
      { src: "/logo-final.png", sizes: "512x512", type: "image/png" },
      { src: "/favicon.png", sizes: "48x48", type: "image/png" },
    ],
  };
}
