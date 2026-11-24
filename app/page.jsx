import { AIDemoSandbox } from "@/components/sections/ai-demo-sandbox";
import { ContactSection } from "@/components/sections/contact-section";
import { HomeV2Faq } from "@/components/sections/home-v2-faq";
import { HOME_FAQS } from "@/lib/home-faqs";
import { HomeV2Hero } from "@/components/sections/home-v2-hero";
import { HomeV2Pricing } from "@/components/sections/home-v2-pricing";
import { HomeV2Process } from "@/components/sections/home-v2-process";
import { HomeV2Services } from "@/components/sections/home-v2-services";
import { HomeV2Why } from "@/components/sections/home-v2-why";
import { HomeV2Work } from "@/components/sections/home-v2-work";
import { siteMeta, socialLinks } from "@/lib/site";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://gozepra.tech/#organization",
        name: siteMeta.name,
        url: siteMeta.url,
        email: siteMeta.email,
        telephone: siteMeta.phoneRaw,
        description:
          "Zepra Tech is a US based digital engineering and marketing agency for small businesses, offering web development, AI automation, e-commerce, UI/UX design, custom software, and digital marketing.",
        foundingDate: "2025",
        founder: {
          "@type": "Person",
          name: "Muhammad Daud Ali Lashari",
          jobTitle: "Chief Executive Officer",
        },
        address: [
          {
            "@type": "PostalAddress",
            addressLocality: "Middletown",
            addressRegion: "Delaware",
            addressCountry: "US",
          },
          {
            "@type": "PostalAddress",
            streetAddress: "Broadway Commercial, DHA Phase 8",
            addressLocality: "Lahore",
            addressCountry: "PK",
          },
        ],
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "Pakistan" },
        ],
        sameAs: socialLinks.map((link) => link.href),
        contactPoint: [
          {
            "@type": "ContactPoint",
            email: siteMeta.email,
            telephone: siteMeta.phoneRaw,
            contactType: "sales",
            areaServed: "US",
            availableLanguage: ["English"],
          },
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://gozepra.tech/#service",
        name: "Zepra Tech",
        url: siteMeta.url,
        email: siteMeta.email,
        telephone: siteMeta.phoneRaw,
        priceRange: "$2,500 - $25,000+",
        areaServed: "United States",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Middletown",
          addressRegion: "Delaware",
          addressCountry: "US",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Digital services for US small businesses",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Small business website",
                description: "Custom website up to 5 pages, mobile first, local SEO setup.",
              },
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "USD",
                minPrice: 2500,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI assistant and automation",
                description: "AI assistants that answer questions, book appointments, and follow up on leads.",
              },
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "USD",
                minPrice: 2000,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom platform and AI workflows",
                description: "Custom platform or online store with AI workflows across sales and support.",
              },
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "USD",
                minPrice: 12000,
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: HOME_FAQS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomeV2Hero />
      <HomeV2Services />
      <HomeV2Work />
      <AIDemoSandbox />
      <HomeV2Process />
      <HomeV2Pricing />
      <HomeV2Why />
      <HomeV2Faq />
      <ContactSection />
    </>
  );
}
