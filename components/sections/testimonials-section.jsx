"use client";

import React from 'react';
import { testimonials } from "@/lib/site";
import { useLanguage } from "@/components/providers/language-provider";
import { InfiniteMarquee } from "@/components/ui/InfiniteMarquee";

export function TestimonialCard({ testimonial, index }) {
  const { t } = useLanguage();
  const testimonialsContent = t("home.testimonials");
  const translatedItems = Array.isArray(testimonialsContent?.items) ? testimonialsContent.items : [];
  const translated = translatedItems[index];

  return (
    <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-soft text-slate-900">
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            {translated?.service || testimonial?.service || testimonial?.tag || "Service"}
          </span>
          <div className="flex text-amber-400 text-sm tracking-widest">
            ★★★★★
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-700 font-normal">
          “{translated?.quote || testimonial?.quote || testimonial?.content || testimonial?.text}”
        </p>
      </div>

      <div className="relative z-10 mt-6 flex items-center gap-3 border-t border-slate-200 pt-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600 border border-blue-200">
          {testimonial?.name ? testimonial.name.charAt(0) : "C"}
        </div>
        <div>
          <h4 className="text-xs font-semibold text-slate-900">
            {translated?.name || testimonial?.name || "Confidential client"}
          </h4>
          <p className="text-[11px] text-slate-500">
            {translated?.role || testimonial?.role || testimonial?.project || testimonial?.service}
          </p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const { t } = useLanguage();
  const testimonialsContent = t("home.testimonials");

  return (
    <section className="relative isolate overflow-hidden bg-slate-50 py-10 text-slate-900 border-t border-slate-200 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-16 -z-10 h-80 w-[min(80vw,900px)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.08),transparent_68%)] blur-[120px] animate-pulse motion-reduce:animate-none"
      />
      <div className="container relative mx-auto px-4">
        <header className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-700 shadow-sm sm:py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {testimonialsContent?.eyebrow || "CLIENT TRUST & REVIEWS"}
          </div>
          <h2 className="mt-3 font-display text-2xl font-semibold leading-tight text-slate-900 sm:mt-4 sm:text-4xl lg:text-5xl">
            {testimonialsContent?.title || "What our global clients say about us."}
          </h2>
          <p className="mx-auto mt-2.5 max-w-2xl text-xs leading-relaxed text-slate-600 line-clamp-2 sm:mt-4 sm:text-base sm:leading-7 sm:line-clamp-none">
            {testimonialsContent?.description || "Real testimonials from enterprises, startups, and brands across web, AI, e-commerce, and growth marketing."}
          </p>
        </header>

        <div className="mt-6 overflow-hidden sm:mt-8">
          <InfiniteMarquee
            direction="left"
            speed="45s"
            fadeIn="8%"
            fadeOut="92%"
            className="py-2"
          >
            {testimonials && testimonials.map((testimonial, index) => (
              <div
                key={testimonial.service || index}
                className="w-[280px] shrink-0 sm:w-[360px] md:w-[420px]"
              >
                <TestimonialCard
                  testimonial={testimonial}
                  index={index}
                />
              </div>
            ))}
          </InfiniteMarquee>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;