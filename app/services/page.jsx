import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FinalCta, PageHero } from "@/components/v3/shared";
import { PricingGrid } from "@/components/v3/pricing";
import { services } from "@/lib/site";
import { BreadcrumbsJsonLd } from "@/components/seo/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/services" },
  title: "Services: Web, AI and Marketing for US Business",
  description:
    "Websites, AI assistants, and growth marketing for US small businesses. Fixed prices from $1,500, agreed in writing before we start.",
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Services", href: "/services" }]} />
      <PageHero
        eyebrow="Services"
        title="What we do"
        intro="Twelve services, one team. Every project starts with a free consultation and a fixed price agreed in writing."
      />

      <section className="section pt-12">
        <div className="wrap">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.slug} href={service.href} className="card group block">
                <h2 className="text-[22px] font-semibold text-[#111111]">
                  {service.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-[#55524B]">
                  {service.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0066FF]">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-[#E2E8F0]">
        <div className="wrap">
          <h2 className="h-section">Fixed prices, agreed before we start</h2>
          <p className="body-copy mt-4 max-w-xl">
            No hourly billing, no surprise invoices. You get a written quote
            after the free consultation.
          </p>
          <div className="mt-12">
            <PricingGrid />
          </div>
          <p className="mt-8 text-[15px] text-[#55524B]">
            Every project starts with a free consultation. Final price depends
            on scope and is confirmed in writing before we start.
          </p>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
