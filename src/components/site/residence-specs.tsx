import { Bath, BedDouble, Moon, Users } from "lucide-react";
import { pick, type Locale } from "@/lib/i18n/locale";
import { cn } from "@/lib/utils";

interface ResidenceSpecsProps {
  readonly guests: number;
  readonly bedrooms: number;
  readonly bathrooms: number;
  readonly minStayNights: number;
  readonly className?: string;
  readonly itemClassName?: string;
  readonly locale?: Locale;
}

export function ResidenceSpecs({
  guests,
  bedrooms,
  bathrooms,
  minStayNights,
  className,
  itemClassName,
  locale = "en",
}: ResidenceSpecsProps) {
  const items = [
    {
      icon: Users,
      label: pick(locale, `Up to ${guests} guests`, `Έως ${guests} άτομα`),
    },
    {
      icon: BedDouble,
      label: pick(
        locale,
        `${bedrooms} ${bedrooms === 1 ? "bedroom" : "bedrooms"}`,
        `${bedrooms} ${bedrooms === 1 ? "υπνοδωμάτιο" : "υπνοδωμάτια"}`,
      ),
    },
    {
      icon: Bath,
      label: pick(
        locale,
        `${bathrooms} ${bathrooms === 1 ? "bathroom" : "bathrooms"}`,
        `${bathrooms} ${bathrooms === 1 ? "μπάνιο" : "μπάνια"}`,
      ),
    },
    {
      icon: Moon,
      label: pick(
        locale,
        `Min ${minStayNights} ${minStayNights === 1 ? "night" : "nights"}`,
        `Ελάχιστο ${minStayNights} ${minStayNights === 1 ? "διανυκτέρευση" : "διανυκτερεύσεις"}`,
      ),
    },
  ] as const;

  return (
    <ul className={cn("flex flex-wrap gap-x-5 gap-y-2", className)}>
      {items.map((item) => (
        <li key={item.label} className={cn("inline-flex items-center gap-1.5", itemClassName)}>
          <item.icon className="h-3.5 w-3.5 shrink-0 opacity-80" strokeWidth={1.75} aria-hidden />
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
