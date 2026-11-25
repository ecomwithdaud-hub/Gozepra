import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { MobileCtaBar } from "@/components/v3/mobile-cta-bar";

export function SiteShell({ children }) {
  return (
    <div className="relative min-h-screen">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <MobileCtaBar />
    </div>
  );
}
