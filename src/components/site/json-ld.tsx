export function JsonLd({ data }: { readonly data: Record<string, unknown> | readonly unknown[] }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
