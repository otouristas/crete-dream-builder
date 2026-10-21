"use client";

import { usePathname } from "next/navigation";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteNav } from "@/components/site/site-nav";
import { localeFromPathname } from "@/lib/i18n/locale";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname() || "/";
  const locale = localeFromPathname(pathname);

  return (
    <>
      <SiteNav locale={locale} pathname={pathname} />
      <div id="main-content">{children}</div>
      <SiteFooter locale={locale} pathname={pathname} />
    </>
  );
}
