"use client";

import { usePathname } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export function SiteShell({ children }) {
  const pathname = usePathname();
  const isPortalRoute =
    pathname?.startsWith("/portal") ||
    pathname?.startsWith("/ceo") ||
    pathname?.startsWith("/admin") ||
    pathname?.startsWith("/employees");

  if (isPortalRoute) {
    // Portal has its own dedicated full-screen layout and navigation mesh
    return <main className="min-h-screen bg-slate-950">{children}</main>;
  }

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <SiteHeader />
      <div aria-hidden="true" className="h-24" />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
