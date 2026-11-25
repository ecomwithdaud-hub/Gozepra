import Link from "next/link";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";

import { FinalCta } from "@/components/v3/shared";
import { BreadcrumbsJsonLd } from "@/components/seo/breadcrumbs";
import { services } from "@/lib/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  return service
    ? {
        title: service.title,
        description: service.shortDescription,
        alternates: {
          canonical:
            service.slug === "cold-outreach"
              ? "/cold-outreaching"
              : `/services/${service.slug}`,
        },
      }
    : {};
}

const steps = [
  {
    number: "01",
    title: "Free 15-minute call",
    body: "Tell us what your business does and what the service must do.",
  },
  {
    number: "02",
    title: "Plan and design",
    body: "We map the scope and the look. You approve it before we build.",
  },
  {
    number: "03",
    title: "Build and test",
    body: "We build it, connect your tools, and test it on phones and desktops.",
  },
  {
    number: "04",
    title: "Launch and support",
    body: "We launch, show you how it works, and stay on call for changes.",
  },
];

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) notFound();

  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: "Services", href: "/services" },
          { name: service.title, href: `/services/${service.slug}` },
        ]}
      />
      <section className="pt-28 sm:pt-36">
        <div className="wrap">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm text-[#55524B]"
          >
            <Link href="/services" className="transition-colors hover:text-[#0066FF]">
              Services
            </Link>
            <ChevronRight aria-hidden="true" className="h-4 w-4" />
            <span aria-current="page" className="font-medium text-[#111111]">
              {service.title}
            </span>
          </nav>
          <p className="eyebrow mt-8">Zepra Tech Services</p>
          <h1 className="h-display mt-4 max-w-3xl">{service.title}</h1>
          <p className="body-copy mt-5 max-w-2xl">{service.fullDescription}</p>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">
              Book a Discovery Call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section pt-12">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card">
              <h2 className="text-2xl font-semibold text-[#111111]">
                What this covers
              </h2>
              <ul className="mt-6 space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-[#55524B]">
                    <Check aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#0066FF]" />
                    <span className="text-base leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h2 className="text-2xl font-semibold text-[#111111]">
                What you get on delivery
              </h2>
              <ul className="mt-6 space-y-4">
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex items-start gap-3 text-[#55524B]">
                    <Check aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#0066FF]" />
                    <span className="text-base leading-relaxed">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <p className="eyebrow">Technology and tools</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {service.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-sm font-medium text-[#55524B]"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="h-section">How it works</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <article key={step.number} className="border-t-2 border-[#0066FF] pt-6">
                  <p className="text-sm font-semibold text-[#0066FF]">{step.number}</p>
                  <h3 className="mt-3 text-xl font-semibold text-[#111111]">{step.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-[#55524B]">{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
