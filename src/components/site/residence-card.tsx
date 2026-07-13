import Image from "next/image";
import Link from "next/link";
import { ResidenceDetails } from "@/lib/residences-data";
import { WHATSAPP_1_URL } from "@/lib/site-constants";
import { WhatsAppIcon } from "@/components/icons";

interface ResidenceCardProps {
  readonly residence: ResidenceDetails;
}

export function ResidenceCard({ residence }: ResidenceCardProps) {
  const isConcept1 = residence.id === "concept-1";

  return (
    <div className="group overflow-hidden rounded-sm border border-border bg-card shadow-soft transition-all duration-300 hover:shadow-warm">
      {/* Photo Header */}
      <div className="relative h-72 w-full overflow-hidden sm:h-80">
        <Image
          src={residence.heroImage}
          alt={residence.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-deep/80 via-transparent to-black/20" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
          <span className="rounded-xs bg-cream/95 px-3 py-1 text-xs font-semibold tracking-wide text-stone-deep backdrop-blur-xs shadow-xs">
            {residence.badge}
          </span>
          <span className="rounded-xs bg-stone-deep/90 px-3 py-1 text-xs font-medium text-cream backdrop-blur-xs">
            {residence.photos.length} Photos
          </span>
        </div>

        {/* Bottom Specs Overlay */}
        <div className="absolute bottom-4 left-4 right-4 text-cream">
          <h3 className="font-display text-2xl text-cream sm:text-3xl">{residence.title}</h3>
          <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium text-cream/90">
            <span>👥 Up to {residence.maxGuests} Guests</span>
            <span>🛏️ {residence.bedrooms} Bedrooms</span>
            <span>
              🛁 {residence.bathrooms} {residence.bathrooms === 1 ? "Bathroom" : "Bathrooms"}
            </span>
            <span>🌙 Min {residence.minStayNights} Nights</span>
          </div>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 sm:p-8">
        <p className="text-sm leading-relaxed text-foreground/80">{residence.subtitle}</p>

        {/* Pricing Summary Box */}
        <div className="my-6 rounded-sm bg-secondary/50 p-4 border border-border/60">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
            Pricing Overview
          </div>
          {isConcept1 ? (
            <div className="space-y-1 text-xs text-foreground/80">
              <div className="flex justify-between border-b border-border/50 pb-1">
                <span>Sunday – Thursday:</span>
                <strong className="text-stone-deep">€60 – €120 / night</strong>
              </div>
              <div className="flex justify-between pt-1">
                <span>Friday – Saturday:</span>
                <strong className="text-stone-deep">€70 – €130 / night</strong>
              </div>
              <div className="text-[11px] text-muted-foreground pt-1">
                Rates vary by guest count (2 to 6 guests). Minimum stay 2 nights.
              </div>
            </div>
          ) : (
            <div className="space-y-1 text-xs text-foreground/80">
              <div className="flex justify-between border-b border-border/50 pb-1">
                <span>Sunday – Thursday:</span>
                <strong className="text-stone-deep">€170 / night (flat)</strong>
              </div>
              <div className="flex justify-between pt-1">
                <span>Friday – Saturday:</span>
                <strong className="text-stone-deep">€180 / night (flat)</strong>
              </div>
              <div className="text-[11px] text-muted-foreground pt-1">
                Standard flat rate for 1 to 7 guests. Minimum stay 3 nights.
              </div>
            </div>
          )}
        </div>

        {/* Highlights List */}
        <ul className="mb-6 space-y-2 text-xs text-foreground/75">
          {residence.spaceHighlights.slice(0, 3).map((h) => (
            <li key={h.title} className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>
                <strong className="text-stone-deep">{h.title}:</strong> {h.desc}
              </span>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-border">
          <Link
            href={`/residences/${residence.id}`}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-xs transition-all hover:bg-primary/90"
          >
            View Residence Details &amp; Photos →
          </Link>
          <a
            href={WHATSAPP_1_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-4 py-2.5 text-xs font-medium text-[#25D366] transition-colors hover:bg-[#25D366]/20"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
