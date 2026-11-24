import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import { LanguageProvider } from "@/components/providers/language-provider";
import { QuickConnectDock } from "@/components/ui/QuickConnectDock";
import { TechCursor } from "@/components/ui/TechCursor";
import { AcousticHaptics } from "@/components/ui/AcousticHaptics";
import { SiteShell } from "@/components/layout/site-shell";
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
    default:
      "Zepra Tech | Web Development, AI Automation & Digital Marketing for US Small Businesses",
    template: "%s | Zepra Tech",
  },
  description:
    "Zepra Tech is a US based digital engineering and marketing agency for small businesses. Custom websites from $2,500, AI assistants, e-commerce, SEO, and cold outreach. Fixed pricing, launch in 2 to 3 weeks, response within 24 hours.",
  keywords: [
    "Zepra Tech",
    "web development agency USA",
    "small business website USA",
    "AI automation agency USA",
    "AI chatbot for small business",
    "ecommerce development USA",
    "local SEO agency USA",
    "digital marketing agency Delaware",
    "website design for roofers",
    "website design for dentists",
    "custom software agency USA",
  ],
  applicationName: siteMeta.name,
  openGraph: {
    title: "Zepra Tech | Websites, AI Assistants & Growth for US Small Businesses",
    description:
      "Custom websites from $2,500, AI assistants that book leads around the clock, and growth marketing for US small businesses. Fixed pricing, launch in 2 to 3 weeks.",
    url: siteMeta.url,
    siteName: siteMeta.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zepra Tech | Websites, AI Assistants & Growth for US Small Businesses",
    description:
      "Custom websites from $2,500, AI assistants that book leads around the clock, and growth marketing for US small businesses.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${bodyFont.variable} ${displayFont.variable} font-sans`}>
        <LanguageProvider>
          <TechCursor />
          <AcousticHaptics />
          <QuickConnectDock />
          <SiteShell>{children}</SiteShell>
        </LanguageProvider>
      </body>
    </html>
  );
}
