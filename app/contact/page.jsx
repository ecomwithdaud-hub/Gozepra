import { Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/shared/contact-form";
import { PageHero } from "@/components/v3/shared";
import { siteMeta } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description:
    "Start a conversation with Zepra Tech. Tell us about your business and what the website must do. We reply within 24 hours.",
};

const planBudgets = {
  launch: "$1,500 - $3,000 (Small Business Launch)",
  growth: "$3,000 - $8,000 (Growth + AI)",
  scale: "$8,000 - $18,000 (Custom Platform)",
  enterprise: "$18,000+ (Enterprise)",
};

const planLabels = {
  launch: "Launch",
  growth: "Growth",
  scale: "Scale",
  enterprise: "Enterprise",
};

export default async function ContactPage({ searchParams }) {
  const params = await searchParams;
  const plan = typeof params?.plan === "string" ? params.plan : "";
  const initialBudget = planBudgets[plan] ?? "";
  const planLabel = planLabels[plan] ?? "";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation."
        intro="Tell us about your business and what the website must do. We reply within 24 hours."
      />

      <section className="section pt-12">
        <div className="wrap">
          {planLabel ? (
            <p className="mb-6 inline-flex rounded-full bg-[#0066FF]/10 px-4 py-2 text-sm font-semibold text-[#0066FF]">
              {planLabel} plan selected, budget pre-filled below.
            </p>
          ) : null}
          <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
            <ContactForm initialBudget={initialBudget} />
            <aside className="space-y-6">
              <div className="rounded-[24px] border border-[#0066FF]/25 bg-white p-7">
                <h2 className="text-xl font-semibold text-[#111111]">Book a 15-minute call</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-[#55524B]">
                  Pick the fastest way to reach us. No calendar link yet, so
                  call or WhatsApp and we confirm a time within 24 hours.
                </p>
                <div className="mt-5 grid gap-3">
                  <a
                    href="tel:+13024694003"
                    className="inline-flex items-center justify-center rounded-full bg-[#0066FF] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0052CC]"
                  >
                    Book 15-Min Call
                  </a>
                  <a
                    href="https://wa.me/13024694003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-[#E2E8F0] bg-white px-5 py-3 text-sm font-semibold text-[#111111] transition-colors hover:border-[#0066FF] hover:text-[#0066FF]"
                  >
                    WhatsApp us
                  </a>
                </div>
              </div>
              <div className="rounded-[24px] border border-[#E2E8F0] bg-white p-7">
                <h2 className="text-xl font-semibold text-[#111111]">Reach us directly</h2>
                <div className="mt-5 space-y-4 text-[15px] leading-relaxed">
                  <a
                    href={`mailto:${siteMeta.email}`}
                    className="flex items-start gap-3 font-medium text-[#111111] hover:text-[#0066FF]"
                  >
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#0066FF]" />
                    {siteMeta.email}
                  </a>
                  <a
                    href={`tel:${siteMeta.phoneRaw}`}
                    className="flex items-start gap-3 font-medium text-[#111111] hover:text-[#0066FF]"
                  >
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#0066FF]" />
                    {siteMeta.phone}
                  </a>
                </div>
              </div>
              <div className="rounded-[24px] border border-[#E2E8F0] bg-white p-7">
                <h2 className="text-xl font-semibold text-[#111111]">Offices</h2>
                <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-[#55524B]">
                  <p className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#0066FF]" />
                    <span>
                      <span className="font-semibold text-[#111111]">USA</span>
                      <br />
                      Middletown, Delaware
                    </span>
                  </p>
                  <p className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#0066FF]" />
                    <span>
                      <span className="font-semibold text-[#111111]">Pakistan HQ</span>
                      <br />
                      DHA Phase 8, Broadway Commercial, Lahore
                    </span>
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
