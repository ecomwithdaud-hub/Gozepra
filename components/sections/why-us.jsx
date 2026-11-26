"use client";

import Link from "next/link";
import {
  ArrowRight,
  Award,
  Building2,
  Landmark,
  Layers3,
  LockKeyhole,
  MessagesSquare,
  TrendingUp,
} from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const accreditationsIcons = [Award, Landmark, Building2];
const pillarsIcons = [Layers3, LockKeyhole, TrendingUp, MessagesSquare];

export function WhyUs() {
  const { t } = useLanguage();
  const content = t("home.whyUs");

  // Fallback Arrays agar translation na mile
  const accreditationsList = Array.isArray(content?.accreditations)
    ? content.accreditations
    : [
        "ISO Certified (Quality Standards)",
        "FBR Approved (Pakistan)",
        "Registered LLC (United States)",
      ];

  const metricsList = Array.isArray(content?.metrics)
    ? content.metrics
    : [
        { value: "50+", label: "Projects Delivered" },
        { value: "30+", label: "Websites Launched" },
        { value: "20+", label: "E-Commerce Stores Scaled" },
        { value: "PK + Global", label: "Built for Pakistan & International Clients" },
      ];

  const pillarsList = Array.isArray(content?.pillars)
    ? content.pillars
    : [
        {
          title: "Unified Delivery Stack",
          image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
          tag: "Web • Shopify • AI",
          description:
            "Websites, Shopify e-commerce, AI automation, and graphic design under one roof.",
        },
        {
          title: "Secure & Scalable Infrastructure",
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
          tag: "ISO Quality • 99.9% Uptime",
          description:
            "ISO-compliant security, robust performance, and zero downtime, built to support your business as it grows.",
        },
        {
          title: "Growth-Focused Execution",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
          tag: "+340% Sales • ROI-Driven",
          description:
            "Digital marketing, conversion rate optimization, and revenue-driven performance focused on measurable progress.",
        },
        {
          title: "Dedicated Client Partnership",
          image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
          tag: "Direct Dev • 24/7 Support",
          description:
            "Direct developer communication, fast sprint cycles, and 24/7 support keep your team moving with confidence.",
        },
      ];

  return (
    <section className="relative isolate overflow-hidden bg-white py-8 text-slate-900 border-t border-slate-200 sm:py-12">
      <div className="pointer-events-none absolute -left-32 top-0 -z-10 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-36 -z-10 h-96 w-96 rounded-full bg-indigo-600/5 blur-3xl" />

      <div className="container relative">
        <header className="flex flex-col gap-6 border-b border-slate-200 pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-700">
              {content?.eyebrow || "WHY CHOOSE US"}
            </div>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {content?.title || "Built for trust, speed, and real business outcomes."}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              {content?.description || "Proven engineering and digital execution designed to scale your revenue worldwide."}
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {accreditationsList.map((label, index) => {
                const Icon = accreditationsIcons[index] || Award;

                return (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 backdrop-blur-md"
                  >
                    <Icon className="h-3.5 w-3.5 text-blue-600" />
                    {label}
                  </span>
                );
              })}
            </div>
          </div>

          <Link
            href="/#contact"
            className="group hidden w-fit shrink-0 items-center gap-2.5 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-slate-50 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 motion-reduce:transition-none sm:inline-flex"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {content?.chat || "Let's chat"}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none" />
          </Link>
        </header>

        <div className="grid grid-cols-2 gap-x-5 gap-y-4 py-4 md:grid-cols-4 sm:py-6">
          {metricsList.map((metric, index) => {
            const numericValue = String(metric.value).match(/^(\d+(?:\.\d+)?)(.*)$/);
            const value = numericValue ? (
              <AnimatedCounter
                target={Number(numericValue[1])}
                suffix={numericValue[2]}
              />
            ) : metric.value;

            return (
              <div
                key={index}
                className="min-w-0"
              >
                <div className="font-display text-xl font-semibold leading-none text-slate-900 sm:text-3xl">
                  {value}
                </div>
                <p className="mt-1.5 max-w-[14rem] text-[11px] leading-4 text-slate-500 sm:mt-2 sm:text-sm sm:leading-5">
                  {metric.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile View: Continuous horizontal moving motion from right to left */}
        <div className="relative mt-6 -mx-4 overflow-hidden px-4 sm:hidden group">
          {/* Subtle edge fades for smooth entry/exit */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-8 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-8 bg-gradient-to-l from-white to-transparent" />

          <div className="flex w-max gap-3.5 animate-marquee-left [animation-duration:24s] hover:[animation-play-state:paused] active:[animation-play-state:paused]">
            {[...pillarsList, ...pillarsList].map((pillar, index) => {
              const originalIndex = index % pillarsList.length;
              const Icon = pillarsIcons[originalIndex] || Layers3;

              return (
                <article
                  key={`mobile-${index}`}
                  className="w-[260px] shrink-0 overflow-hidden rounded-2xl border border-slate-800 bg-[#070f24] text-white shadow-lg shadow-slate-950/20 backdrop-blur-xl transition-all"
                >
                  {/* Pictorial Image Header */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="h-full w-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070f24] via-[#070f24]/40 to-transparent" />
                    <span className="absolute left-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/40 bg-[#070f24]/90 text-cyan-400 backdrop-blur-md">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="absolute right-2.5 top-2.5 rounded-full border border-slate-700 bg-slate-900/90 px-2 py-0.5 font-mono text-[10px] font-bold text-cyan-300">
                      0{originalIndex + 1}
                    </span>
                    {pillar.tag && (
                      <span className="absolute bottom-2 left-2.5 rounded-md bg-cyan-950/80 px-2 py-0.5 text-[9px] font-bold text-cyan-300 backdrop-blur-sm border border-cyan-500/30">
                        {pillar.tag}
                      </span>
                    )}
                  </div>

                  <div className="p-3">
                    <h3 className="font-display text-sm font-bold leading-tight text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-[11px] leading-relaxed text-slate-300 line-clamp-2">
                      {pillar.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Tablet & Desktop View: Standard Grid */}
        <div className="hidden gap-4 pt-6 sm:grid sm:grid-cols-2 xl:grid-cols-4">
          {pillarsList.map((pillar, index) => {
            const Icon = pillarsIcons[index] || Layers3;

            return (
              <article
                key={index}
                className="group min-h-[230px] rounded-3xl border border-slate-800 bg-[#070f24] p-6 shadow-xl shadow-slate-950/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/50 hover:bg-[#0a1638] hover:shadow-cyan-950/20 motion-reduce:transition-none text-white"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-950/50 text-cyan-400 transition-colors duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-900/50">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold font-mono tabular-nums text-cyan-400/70">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-white">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {pillar.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}