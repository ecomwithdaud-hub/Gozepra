"use client";

import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  ShieldCheck,
  Workflow,
  X,
} from "lucide-react";

import { Logo } from "@/components/shared/logo";
import { TestimonialCard } from "@/components/sections/testimonials-section";
import { useLanguage } from "@/components/providers/language-provider";
import { siteMeta, socialLinks, testimonials } from "@/lib/site";

const socialIcons = {
  LinkedIn: Linkedin,
  Instagram,
  Facebook,
  X,
};

export function MobileAISection() {
  const { t } = useLanguage();
  const content = t("home.operations");

  return (
    <section className="bg-white py-8 text-slate-900 border-t border-slate-200">
      <div className="container px-4">
        <header className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            {content.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-slate-900">
            {content.title}
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">{content.description}</p>
        </header>

        <div className="mt-6 grid gap-4">
          <article className="rounded-2xl border border-rose-200 bg-rose-50/50 p-5 shadow-sm text-slate-900">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-display text-base font-semibold text-slate-900">
                {content.legacyTitle}
              </h3>
              <span className="shrink-0 rounded-full bg-rose-100 p-2 text-rose-600">
                <ArrowRight className="h-4 w-4 rotate-45" />
              </span>
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              {content.legacyPoints.map((point) => (
                <li key={point.label} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                  <span><strong className="text-slate-900">{point.label}:</strong> {point.description}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-blue-200 bg-gradient-to-b from-blue-50/70 via-white to-blue-50/40 p-5 text-slate-900 shadow-md">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-display text-base font-semibold text-slate-900">
                {content.aiTag}
              </h3>
              <span className="shrink-0 rounded-full border border-blue-200 bg-blue-100 p-2 text-blue-600">
                <Workflow className="h-4 w-4" />
              </span>
            </div>
            <p className="mt-2 text-xs font-semibold text-blue-600">{content.aiStatus}</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              {content.aiPoints.map((point) => (
                <li key={point.label} className="flex items-start gap-2.5">
                  <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                  <span><strong className="text-slate-900">{point.label}:</strong> {point.description}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export function MobileTestimonials() {
  const { t } = useLanguage();

  return (
    <section className="bg-slate-50/70 py-8 text-slate-900 border-t border-slate-200">
      <div className="container px-4">
        <header className="mx-auto max-w-xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            {t("home.testimonials.eyebrow")}
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-slate-900">
            {t("home.testimonials.title")}
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            {t("home.testimonials.description")}
          </p>
        </header>
        <div className="mt-6 grid gap-4">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.service || index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function MobileFooter() {
  const { t } = useLanguage();
  const footerSocials = [...socialLinks];
  const legalLinks = [
    { label: t("nav.caseStudies") || "Case Studies", href: "/case-studies" },
    { label: t("nav.websiteDevelopment") || "Websites", href: "/website-development" },
    { label: t("footer.privacy"), href: "/privacy-policy" },
    { label: t("footer.terms"), href: "/terms-of-use" },
    { label: t("footer.security"), href: "/privacy-policy" },
  ];

  return (
    <footer className="bg-white border-t border-slate-200 px-4 py-8 text-slate-900">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <Logo
          className="[&_svg]:shadow-sm"
          textClassName="[&_div:first-child]:text-slate-900 [&_div:last-child]:text-slate-500"
        />
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs leading-5 text-slate-500">
          <span>© 2026 Zepra Tech</span>
          <span aria-hidden="true">|</span>
          <span>{t("footer.allRightsReserved")}</span>
          {legalLinks.map((link) => (
            <span key={link.label} className="contents">
              <span aria-hidden="true">|</span>
              <a href={link.href} className="hover:text-blue-600">{link.label}</a>
            </span>
          ))}
        </div>
        <ul className="flex flex-wrap gap-3" aria-label={t("footer.social")}>
          {footerSocials.map((social) => {
            const Icon = socialIcons[social.label];
            const isExternal = social.href.startsWith("http");
            if (!Icon) return null;

            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}