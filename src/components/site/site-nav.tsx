import Image from "next/image";
import Link from "next/link";
import { SITE_HEADER_HEIGHT_CLASS } from "@/lib/layout-constants";
import { SITE_RESIDENCES_LINKS, SITE_TOP_LEVEL_PAGES } from "@/lib/nav-config";
import { PHONE_1_DISPLAY, VIBER_1_URL, WHATSAPP_1_URL } from "@/lib/site-constants";
import { SiteMobileNav } from "@/components/site/site-mobile-nav";
import { ViberIcon, WhatsAppIcon } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function SiteNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-cream/90 pt-[env(safe-area-inset-top,0px)] backdrop-blur-md">
      <nav
        className={`mx-auto flex ${SITE_HEADER_HEIGHT_CLASS} max-w-7xl items-center justify-between gap-2 px-4 sm:gap-3 sm:px-6 lg:px-10`}
        aria-label="Primary"
      >
        <Link href="/" className="flex min-w-0 shrink items-center gap-2 sm:gap-3">
          <Image
            src="/logo-final.png"
            alt="Kagiampakis Concept Residences"
            width={160}
            height={160}
            className="h-11 w-11 shrink-0 object-contain sm:h-12 sm:w-12"
            priority
          />
          <span className="font-display hidden min-w-0 truncate text-base tracking-wide text-stone-deep md:inline lg:text-lg">
            Kagiampakis <span className="text-primary">Concept Residences</span>
          </span>
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-0.5">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-muted-foreground hover:bg-secondary/60 hover:text-primary data-[state=open]:bg-secondary/60 data-[state=open]:text-primary">
                  Residences
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[380px] gap-1 p-3">
                    {SITE_RESIDENCES_LINKS.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="group block rounded-md px-3.5 py-3 transition-colors hover:bg-secondary/70"
                          >
                            <div className="text-sm font-semibold text-stone-deep group-hover:text-primary">
                              {item.label}
                            </div>
                            {item.description && (
                              <p className="mt-0.5 text-xs leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            )}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {SITE_TOP_LEVEL_PAGES.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className="inline-flex h-9 items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={WHATSAPP_1_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full bg-[#25D366] px-3.5 py-2 text-xs font-semibold text-white shadow-xs transition-all hover:bg-[#20bd5a] sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden xl:inline">{PHONE_1_DISPLAY}</span>
            <span className="xl:hidden">WhatsApp</span>
          </a>
          <a
            href={VIBER_1_URL}
            aria-label={`Open Viber chat at ${PHONE_1_DISPLAY}`}
            className="hidden h-9 w-9 items-center justify-center rounded-full bg-[#7360F2] text-white shadow-xs transition-all hover:bg-[#6351e3] sm:inline-flex"
          >
            <ViberIcon className="h-4 w-4" />
          </a>
          <SiteMobileNav />
        </div>
      </nav>
    </header>
  );
}
