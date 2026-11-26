"use client";

import React from 'react';
import { testimonials } from "@/lib/site";
import { useLanguage } from "@/components/providers/language-provider";
import { InfiniteMarquee } from "@/components/ui/InfiniteMarquee";

const CLIENT_AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&q=80",
];

const IMPACT_TAGS = [
  "Zero Lag Architecture",
  "+35% Mobile Conversions",
  "70% Support Automated",
  "3.8x Qualified Pipeline",
  "100% On-Time Launch",
];

export function TestimonialCard({ testimonial, index }) {
  const { t } = useLanguage();
  const testimonialsContent = t("home.testimonials");
  const translatedItems = Array.isArray(testimonialsContent?.items) ? testimonialsContent.items : [];
  const translated = translatedItems[index];

  const avatarUrl = CLIENT_AVATARS[index % CLIENT_AVATARS.length];
  const impactTag = IMPACT_TAGS[index % IMPACT_TAGS.length];

  return (
    <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-md text-slate-900 sm:p-6">
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-[10px] font-bold text-blue-700 sm:px-3 sm:py-1 sm:text-xs">
            {translated?.service || testimonial?.service || testimonial?.tag || "Service"}
          </span>
          <div className="flex text-amber-400 text-xs tracking-widest sm:text-sm">
            ★★★★★
          </div>
        </div>

        <p className="mt-3 text-xs leading-relaxed text-slate-700 font-normal line-clamp-3 sm:mt-4 sm:text-sm sm:line-clamp-none">
          “{translated?.quote || testimonial?.quote || testimonial?.content || testimonial?.text}”
        </p>

        {/* Visual Proof Tag */}
        <div className="mt-2.5">
          <span className="inline-flex items-center gap-1 rounded bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 text-[9px] font-bold text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {impactTag}
          </span>
        </div>
      </div>

      <div className="relative z-10 mt-4 flex items-center gap-2.5 border-t border-slate-100 pt-3 sm:mt-6 sm:pt-4">
        {/* Pictorial Client Avatar */}
        <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border-2 border-blue-200 shadow-sm sm:h-10 sm:w-10">
          <img
            src={avatarUrl}
            alt={translated?.name || testimonial?.name || "Client"}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1">
            <h4 className="truncate text-xs font-bold text-slate-900">
              {translated?.name || testimonial?.name || "Confidential client"}
            </h4>
            <span className="inline-flex shrink-0 text-blue-600" title="Verified Client">
              <svg className="h-3 w-3 fill-current" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
          <p className="truncate text-[10px] text-slate-500">
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