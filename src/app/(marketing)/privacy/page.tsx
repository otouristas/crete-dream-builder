import type { Metadata } from "next";
import { PrivacyPageView } from "@/components/site/privacy-page-view";
import { buildPageMetadata } from "@/lib/build-page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy",
  description:
    "How Kagiampakis Concept Residences handles booking enquiries, WhatsApp, Viber, and email contact data in Avdou, Crete.",
  path: "/privacy",
  locale: "en",
});

export default function PrivacyPage() {
  return <PrivacyPageView locale="en" />;
}
