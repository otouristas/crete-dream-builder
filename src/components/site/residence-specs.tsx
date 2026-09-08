import { Bath, BedDouble, Moon, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResidenceSpecsProps {
  readonly guests: number;
  readonly bedrooms: number;
  readonly bathrooms: number;
  readonly minStayNights: number;
  readonly className?: string;
  readonly itemClassName?: string;
}

export function ResidenceSpecs({
  guests,
  bedrooms,
  bathrooms,
  minStayNights,
  className,
  itemClassName,
}: ResidenceSpecsProps) {
  const items = [
    { icon: Users, label: `Up to ${guests} guests` },
    { icon: BedDouble, label: `${bedrooms} ${bedrooms === 1 ? "bedroom" : "bedrooms"}` },
    { icon: Bath, label: `${bathrooms} ${bathrooms === 1 ? "bathroom" : "bathrooms"}` },
    { icon: Moon, label: `Min ${minStayNights} ${minStayNights === 1 ? "night" : "nights"}` },
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
