import { ResidenceDetailView, residenceMetadata } from "@/components/site/residence-detail";
import { getAllResidences } from "@/lib/residences-data";

interface PageProps {
  readonly params: Promise<{ readonly id: string }>;
}

export function generateStaticParams() {
  return getAllResidences().map((residence) => ({ id: residence.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  return residenceMetadata(id, "el");
}

export default function ElResidencePage({ params }: PageProps) {
  return <ResidenceDetailView params={params} locale="el" />;
}
