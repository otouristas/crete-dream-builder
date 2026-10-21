import type { Metadata } from "next";
import { ContactPageView } from "@/components/site/contact-page-view";
import { buildPageMetadata } from "@/lib/build-page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact & direct booking",
  description:
    "WhatsApp, Viber, phone, and email for Kagiampakis Concept Residences in Avdou, Crete. Host Xrisa: +30 694 968 7227 and +30 698 221 0506. 31 minutes from Heraklion Airport.",
  path: "/contact",
  locale: "en",
});

export default function ContactPage() {
  return <ContactPageView locale="en" />;
}
