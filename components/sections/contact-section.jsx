"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Globe2,
  LockKeyhole,
  Mail,
  Phone,
} from "lucide-react";

import { ContactForm } from "@/components/shared/contact-form";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/providers/language-provider";
import { siteMeta, socialLinks } from "@/lib/site";

export function ContactSection({ showHeader = true }) {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="section-shell relative isolate overflow-hidden bg-slate-50 text-slate-900 border-t border-slate-200"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 2xl:max-w-[1600px] 3xl:max-w-[1800px]">
        {showHeader ? (
          <SectionHeading
            eyebrow={t("contact.eyebrow")}
            title={t("contact.title")}
            description={t("contact.description")}
            eyebrowClassName="px-5 py-2 text-xs sm:text-sm font-semibold border-blue-200 bg-blue-50 text-blue-700"
            titleClassName="text-slate-900"
            descriptionClassName="text-sm sm:text-base font-medium leading-relaxed text-slate-600"
          />
        ) : null}

        {/* Velvet Rope Capacity Banner */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-blue-200 bg-white px-5 py-3.5 shadow-sm text-slate-900">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <div className="text-xs sm:text-sm font-medium">
              <strong className="text-emerald-700 font-bold">Engineering Capacity: </strong>
              <span className="text-slate-700">80% Committed • Accepting only 2 new client deployments for Q2</span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-600">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" />
            <span>Strict NDA Protected</span>
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" />
            <span>Sub-2-Hour Direct SLA</span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm lg:col-span-5 text-slate-900">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                {t("contact.businessInquiry")}
              </div>
              <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-slate-900">
                {t("contact.optionsTitle")}
              </h2>

              <div className="mt-6 space-y-4">
                <InfoRow
                  icon={<Mail className="h-5 w-5" />}
                  label={t("contact.email")}
                  href={`mailto:${siteMeta.email}`}
                  value={siteMeta.email}
                />
                <InfoRow
                  icon={<Phone className="h-5 w-5" />}
                  label="Direct Line"
                  href={`tel:${siteMeta.phoneRaw || "+13022089675"}`}
                  value={siteMeta.phone || "+1 (302) 208-9675"}
                />
              </div>

              <div className="mt-5 hidden gap-3 sm:grid sm:grid-cols-2">
                <Button asChild size="lg" className="w-full bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-soft">
                  <a href={`tel:${siteMeta.phoneRaw || "+13022089675"}`}>
                    <Phone className="h-4 w-4 mr-1.5" />
                    Call Direct Line
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full border-slate-200 bg-white text-slate-800 hover:bg-slate-50">
                  <Link href={`mailto:${siteMeta.email}`}>
                    <Mail className="h-4 w-4 mr-1.5" />
                    {t("contact.sendEmail")}
                  </Link>
                </Button>
              </div>

              <div className="mt-6 hidden border-t border-slate-200 pt-5 md:block">
                <h3 className="text-sm font-semibold text-slate-800">
                  {t("contact.socialPresence")}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-blue-300 hover:text-blue-600"
                    >
                      {social.label}
                      <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {t("contact.scheduleCall")}
                </h3>
                <a
                  href={`mailto:${siteMeta.email}?subject=${encodeURIComponent("Discovery Call Request")}&body=${encodeURIComponent("Hi Daud & Zepra Team, I would like to schedule a 15-minute discovery call.")}`}
                  className="group flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-blue-600 bg-blue-600 p-4 text-white shadow-soft transition-all duration-300 hover:bg-blue-700"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20 text-white ring-1 ring-white/30">
                      <CalendarDays className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-white">
                        {t("contact.bookCall")}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-white/90">
                        {t("contact.bookCallDescription")}
                      </span>
                    </span>
                  </span>
                  <span className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-white transition-colors">
                    {t("contact.scheduleNow")}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              </div>

              {/* Founder Video Teardown Hook */}
              <div className="mt-4 rounded-2xl border border-dashed border-blue-300 bg-blue-50/60 p-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
                  <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                  Not Ready for a Sprint?
                </div>
                <h4 className="mt-1 font-display text-sm font-bold text-slate-900">
                  Request Founder Daud's 5-Minute Video Teardown
                </h4>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Send your current website URL via inquiry form or direct email. Daud will record an unfiltered screen video exposing your conversion leaks and Core Web Vitals bottlenecks. 100% Free.
                </p>
                <a
                  href={`mailto:${siteMeta.email}?subject=${encodeURIComponent("Request 5-Minute Video Teardown")}&body=${encodeURIComponent("Hi Daud, I would like to request a 5-minute video teardown of my website. Here is my URL: ")}`}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Request Free Video Teardown <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div className="mt-6 border-t border-slate-200 pt-5">
              <ul className="grid gap-3 sm:grid-cols-3">
                <TrustPoint
                  icon={<LockKeyhole className="h-4 w-4" />}
                  title={t("contact.strictNda")}
                  detail={t("contact.dataPrivacy")}
                />
                <TrustPoint
                  icon={<Clock3 className="h-4 w-4" />}
                  title={t("contact.responseGuarantee")}
                />
                <TrustPoint
                  icon={<Globe2 className="h-4 w-4" />}
                  title={t("contact.globalSupport")}
                  detail={t("contact.supportHours")}
                />
              </ul>
            </div>
          </div>

          <div className="relative flex h-full flex-col justify-between lg:col-span-7">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-6">
                <h2 className="font-display text-2xl font-semibold text-slate-900">
                  {t("contact.requestConsultation")}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {t("contact.formIntro")}
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, label, href, value, external = false }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="group flex min-w-0 items-center gap-3 transition-colors hover:text-blue-600"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 border border-blue-200">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-semibold text-slate-800">
          {label}
        </span>
        <span className="mt-0.5 block break-words text-sm text-slate-600">
          {value}
        </span>
      </span>
    </a>
  );
}

function TrustPoint({ icon, title, detail }) {
  return (
    <li className="flex min-w-0 items-start gap-2">
      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 border border-blue-200">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-semibold leading-5 text-slate-800">
          {title}
        </span>
        {detail ? (
          <span className="block text-[11px] leading-4 text-slate-500">{detail}</span>
        ) : null}
      </span>
    </li>
  );
}