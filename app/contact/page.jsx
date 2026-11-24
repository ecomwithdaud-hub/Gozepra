import { Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/shared/contact-form";
import { PageHero } from "@/components/v3/shared";
import { siteMeta } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description:
    "Start a conversation with Zepra Tech. Tell us about your business and what the website must do. We reply within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation."
        intro="Tell us about your business and what the website must do. We reply within 24 hours."
      />

      <section className="section pt-12">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
            <ContactForm />
            <aside className="space-y-6">
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
