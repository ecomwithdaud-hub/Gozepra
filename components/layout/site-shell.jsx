"use client";

import { usePathname } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export function SiteShell({ children }) {
  const pathname = usePathname();

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <SiteHeader />
      <div aria-hidden="true" className="h-24" />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
