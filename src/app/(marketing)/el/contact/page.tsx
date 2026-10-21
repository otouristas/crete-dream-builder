import type { Metadata } from "next";
import { ContactPageView } from "@/components/site/contact-page-view";
import { buildPageMetadata } from "@/lib/build-page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Επικοινωνία και απευθείας κράτηση",
  description:
    "WhatsApp, Viber και email για τα Kagiampakis Concept Residences στην Αβδού. Η Χρύσα απαντά στα ελληνικά και στα αγγλικά.",
  path: "/el/contact",
  locale: "el",
});

export default function ElContactPage() {
  return <ContactPageView locale="el" />;
}
