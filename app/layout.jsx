import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { SiteShell } from "@/components/layout/site-shell";
import { siteMeta } from "@/lib/site";

import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
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
    "web development agency USA",
    "small business website",
    "AI agents for small business",
    "local SEO services",
    "digital marketing agency",
    "ecommerce development",
    "Middletown Delaware web agency",
  ],
  applicationName: siteMeta.name,
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    url: siteMeta.url,
    siteName: siteMeta.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://gozepra.tech/#organization",
      name: "Zepra Tech",
      url: "https://gozepra.tech",
      email: "info@gozepra.tech",
      telephone: "+1-302-469-4003",
      description: siteMeta.description,
      foundingDate: "2025",
      founder: {
        "@type": "Person",
        name: "Muhammad Daud Ali Lashari",
        jobTitle: "Chief Executive Officer",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Middletown",
        addressRegion: "DE",
        addressCountry: "US",
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      sameAs: [
        "https://www.linkedin.com/company/zepra-tech-official",
        "https://www.instagram.com/zepra_tech/",
        "https://www.facebook.com/profile.php?id=61579472223082",
        "https://x.com/zepratech",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://gozepra.tech/#service",
      name: "Zepra Tech",
      url: "https://gozepra.tech",
      email: "info@gozepra.tech",
      telephone: "+1-302-469-4003",
      priceRange: "$1,500 - $18,000+",
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Middletown",
        addressRegion: "DE",
        addressCountry: "US",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US" className="scroll-smooth">
      <body className={`${sans.variable} ${mono.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
