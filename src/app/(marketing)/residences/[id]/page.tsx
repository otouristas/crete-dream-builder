import { ResidenceDetailView, residenceMetadata } from "@/components/site/residence-detail";
import { getAllResidences } from "@/lib/residences-data";

interface ResidencePageProps {
  readonly params: Promise<{ readonly id: string }>;
}

export function generateStaticParams() {
  return getAllResidences().map((residence) => ({ id: residence.id }));
}

export async function generateMetadata({ params }: ResidencePageProps) {
  const { id } = await params;
  return residenceMetadata(id, "en");
}

export default async function ResidenceDetailPage({ params }: ResidencePageProps) {
  return <ResidenceDetailView params={params} locale="en" />;
}
