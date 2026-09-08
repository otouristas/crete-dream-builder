import { EmailIcon, PhoneIcon, ViberIcon, WhatsAppIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export type ContactChannelVariant = "whatsapp" | "whatsapp-alt" | "viber" | "phone" | "email";

const VARIANT_CARD: Record<ContactChannelVariant, string> = {
  whatsapp: "bg-[#25D366] text-white shadow-warm hover:bg-[#20bd5a]",
  "whatsapp-alt": "bg-stone-deep text-cream shadow-warm hover:bg-stone-deep/90",
  viber: "bg-[#7360F2] text-white shadow-warm hover:bg-[#6351e3]",
  phone: "border border-border bg-card text-stone-deep hover:border-primary",
  email: "border border-border bg-card text-stone-deep hover:border-primary",
};

const VARIANT_ROW: Record<ContactChannelVariant, string> = {
  whatsapp: "bg-[#25D366] text-white hover:bg-[#20bd5a]",
  "whatsapp-alt": "bg-stone-deep text-cream hover:bg-stone-deep/90",
  viber: "bg-[#7360F2] text-white hover:bg-[#6351e3]",
  phone: "border border-cream/30 bg-cream/10 text-cream hover:bg-cream/20",
  email: "border border-cream/30 bg-cream/10 text-cream hover:bg-cream/20",
};

const VARIANT_ICON: Record<ContactChannelVariant, string> = {
  whatsapp: "text-white",
  "whatsapp-alt": "text-[#25D366]",
  viber: "text-white",
  phone: "text-primary",
  email: "text-primary",
};

function ChannelIcon({
  variant,
  className,
}: {
  readonly variant: ContactChannelVariant;
  readonly className?: string;
}) {
  const iconClass = cn("h-5 w-5 shrink-0", VARIANT_ICON[variant], className);
  if (variant === "whatsapp" || variant === "whatsapp-alt") {
    return <WhatsAppIcon className={iconClass} />;
  }
  if (variant === "viber") {
    return <ViberIcon className={iconClass} />;
  }
  if (variant === "phone") {
    return <PhoneIcon className={iconClass} />;
  }
  return <EmailIcon className={iconClass} />;
}

interface ContactChannelCardProps {
  readonly href: string;
  readonly variant: ContactChannelVariant;
  readonly eyebrow: string;
  readonly title: string;
  readonly hint: string;
  readonly external?: boolean;
}

export function ContactChannelCard({
  href,
  variant,
  eyebrow,
  title,
  hint,
  external,
}: ContactChannelCardProps) {
  const isExternal = external ?? href.startsWith("http");
  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group flex flex-col items-start gap-3 rounded-sm p-6 text-left transition-all sm:p-7",
        VARIANT_CARD[variant],
      )}
    >
      <div className="flex items-center gap-2.5">
        <ChannelIcon variant={variant} className="h-6 w-6" />
        <span
          className={cn(
            "text-xs font-semibold uppercase tracking-widest",
            variant === "whatsapp-alt" ? "text-primary" : "opacity-90",
            variant === "phone" || variant === "email" ? "text-muted-foreground" : "",
          )}
        >
          {eyebrow}
        </span>
      </div>
      <span
        className={cn(
          "font-display break-all text-2xl sm:text-3xl",
          variant === "phone" || variant === "email" ? "text-stone-deep" : "",
        )}
      >
        {title}
      </span>
      <span
        className={cn(
          "text-sm",
          variant === "phone" || variant === "email"
            ? "font-medium text-primary"
            : "opacity-90 group-hover:opacity-100",
        )}
      >
        {hint}
      </span>
    </a>
  );
}

interface ContactChannelRowProps {
  readonly href: string;
  readonly variant: ContactChannelVariant;
  readonly label: string;
  readonly detail?: string;
  readonly external?: boolean;
  readonly className?: string;
}

export function ContactChannelRow({
  href,
  variant,
  label,
  detail,
  external,
  className,
}: ContactChannelRowProps) {
  const isExternal = external ?? href.startsWith("http");
  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "flex h-12 w-full items-center gap-2.5 rounded-lg px-4 text-xs font-semibold shadow-soft transition-all",
        VARIANT_ROW[variant],
        className,
      )}
    >
      <ChannelIcon variant={variant} />
      <span>{label}</span>
      {detail ? <span className="ml-auto text-[11px] font-medium opacity-85">{detail}</span> : null}
    </a>
  );
}

export function ContactIconBadge({
  children,
  className,
}: {
  readonly children: ReactNode;
  readonly className?: string;
}) {
  return (
    <span className={cn("inline-flex h-5 w-5 shrink-0 items-center justify-center", className)}>
      {children}
    </span>
  );
}
