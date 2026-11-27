"use client";

import { usePathname } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export function SiteShell({ children }) {
  const pathname = usePathname();
  const isVirtualOffice = pathname?.startsWith("/virtual-office");

  if (isVirtualOffice) {
    return <main className="relative min-h-screen w-full bg-[#0B0F17]">{children}</main>;
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
