import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import { LanguageProvider } from "@/components/providers/language-provider";
import { QuickConnectDock } from "@/components/ui/QuickConnectDock";
import { TechCursor } from "@/components/ui/TechCursor";
import { AcousticHaptics } from "@/components/ui/AcousticHaptics";
import { SiteShell } from "@/components/layout/site-shell";
import { PortalAuthProvider } from "@/components/providers/portal-auth-provider";
import { siteMeta } from "@/lib/site";

import "./globals.css";

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const displayFont = Sora({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata = {
  metadataBase: new URL(siteMeta.url),
  title: {
    default: siteMeta.title,
    template: "%s | Zepra Tech",
  },
  description: siteMeta.description,
  keywords: [
    "Zepra Tech",
    "digital agency Pakistan",
    "web development agency",
    "AI solutions",
    "SEO services",
    "digital marketing",
    "ecommerce development",
  ],
  applicationName: siteMeta.name,
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    url: siteMeta.url,
    siteName: siteMeta.name,
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${bodyFont.variable} ${displayFont.variable} font-sans`}>
        <LanguageProvider>
          <PortalAuthProvider>
            <TechCursor />
            <QuickConnectDock />
            <AcousticHaptics />
            <SiteShell>{children}</SiteShell>
          </PortalAuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
