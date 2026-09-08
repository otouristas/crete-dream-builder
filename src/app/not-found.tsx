import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-cream px-5 py-16 text-center">
      <Image
        src="/logo-final.png"
        alt=""
        width={96}
        height={96}
        className="mb-8 h-20 w-20 object-contain"
      />
      <p className="text-xs font-semibold uppercase tracking-display text-primary">404</p>
      <h1 className="mt-3 font-display text-4xl text-stone-deep">Page not found</h1>
      <p className="mt-3 max-w-md text-sm text-muted-foreground">
        That link does not exist. The residences, rates, and WhatsApp booking are still right here.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
        >
          Back home
        </Link>
        <Link
          href="/residences"
          className="inline-flex rounded-full border border-border px-6 py-3 text-sm font-medium text-stone-deep hover:border-primary"
        >
          View residences
        </Link>
        <Link
          href="/contact"
          className="inline-flex rounded-full border border-border px-6 py-3 text-sm font-medium text-stone-deep hover:border-primary"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
