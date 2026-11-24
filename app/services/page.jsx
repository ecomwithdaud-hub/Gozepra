import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FinalCta, PageHero } from "@/components/v3/shared";
import { services } from "@/lib/site";

export const metadata = {
  title: "Services",
  description:
    "Websites, AI assistants, and growth marketing for US small businesses. Fixed prices from $2,500, agreed in writing before we start.",
};

const pricing = [
  {
    name: "Launch",
    price: "from $2,500",
    detail: "one time",
    blurb: "For a small business that needs a sharp website, fast.",
    points: [
      "Custom website, up to 5 pages",
      "Mobile first, tap to call",
      "Local SEO and Google Maps",
      "Launch in 2 to 3 weeks",
    ],
  },
  {
    name: "Growth",
    price: "$5,000 - $12,000",
    detail: "one time",
    blurb: "For a business that wants the website to also answer and book.",
    points: [
      "Everything in Launch, plus:",
      "AI assistant trained on your services",
      "Booking, CRM, and lead follow up",
      "Launch in 3 to 4 weeks",
    ],
  },
  {
    name: "Scale",
    price: "$12,000 - $25,000",
    detail: "one time",
    blurb: "For a growing business that needs a custom platform.",
    points: [
      "Everything in Growth, plus:",
      "Custom platform or online store",
      "AI workflows across sales and support",
      "Launch in 6 to 8 weeks",
    ],
  },
  {
    name: "Enterprise",
    price: "$25,000+",
    detail: "scoped per project",
    blurb: "For multi location and multi market businesses.",
    points: [
      "Everything in Scale, plus:",
      "Multi market and multi location setup",
      "Custom AI systems and data pipelines",
      "Dedicated support and SLAs",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
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
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pricing.map((tier) => (
              <article key={tier.name} className="card flex flex-col">
                <h3 className="text-xl font-semibold text-[#111111]">{tier.name}</h3>
                <p className="mt-2 text-2xl font-semibold tracking-tight text-[#0066FF]">
                  {tier.price}
                </p>
                <p className="text-sm text-[#55524B]">{tier.detail}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-[#55524B]">
                  {tier.blurb}
                </p>
                <ul className="mt-5 space-y-2.5 border-t border-[#E2E8F0] pt-5 text-[15px] leading-relaxed text-[#55524B]">
                  {tier.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center rounded-full bg-[#0066FF] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0052CC]"
                  >
                    Book a free consultation
                  </Link>
                </div>
              </article>
            ))}
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
