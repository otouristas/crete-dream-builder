import type { Metadata } from "next";
import { HomeContent } from "@/components/site/home-page";
import { buildHomeMetadata } from "@/lib/build-page-metadata";

export const metadata: Metadata = buildHomeMetadata();

export default function Home() {
  return <HomeContent />;
}
