"use client";

import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ExternalLink, Sparkles } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

const defaultMetrics = [
  { label: "Delivery Timeline", value: "6 Weeks" },
  { label: "Lead Conversion Lift", value: "+54%" },
  { label: "Process Automation", value: "3.4x Speed" },
];

export function CaseStudySpotlight({
  eyebrow = "Featured Case Study Spotlight",
  title = "US Multi-Vertical Conversion Rollout — 24 Production Web Platforms",
  description = "We engineered a unified, high-converting Next.js & Tailwind web architecture deployed across 24 US metropolitan service brands—combining sub-1.2s edge load speeds, mobile-first quote funnels, and local schema SEO.",
  metrics = defaultMetrics,
  image = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",
  primaryHref = "https://clearflow-plumbing-demo.vercel.app/",
  primaryLabel = "Launch Live Flagship Demo",
  secondaryHref = "/case-studies",
  secondaryLabel = "Explore All Case Studies",
}) {
  const isExternal = primaryHref.startsWith("http");

  return (
    <section className="relative isolate overflow-hidden bg-white border-b border-slate-200 py-16 text-slate-900 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/4 top-0 -z-10 h-96 w-96 rounded-full bg-blue-400/10 blur-[140px]"
      />
      <div className="container relative z-10">
        <div className="grid gap-12 rounded-[32px] border border-slate-200 bg-slate-50/70 p-6 shadow-xl sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14">
          {/* Left Column: Narrative + 3 Glowing Metric Cards */}
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              {eyebrow}
            </div>

            <h2 className="font-display text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              {title}
            </h2>

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              {description}
            </p>

            {/* 3 DevCrafter-Style Hover-Glow Metric Cards */}
            <div className="grid gap-4 sm:grid-cols-3">
              {metrics.map((item) => (
                <div
                  key={item.label}
                  className="group rounded-[22px] border border-slate-200 bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 transition duration-300 group-hover:text-blue-600">
                    {item.label}
                  </p>
                  <p className="mt-2 font-display text-2xl font-bold text-slate-900 transition duration-300 group-hover:text-blue-600 sm:text-3xl">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={primaryHref}
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                data-cursor="VIEW LIVE"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 px-6 py-3 text-xs font-bold text-white shadow-md shadow-blue-500/20 transition-all sm:text-sm"
              >
                <span>{primaryLabel}</span>
                {isExternal ? (
                  <ExternalLink className="h-4 w-4" />
                ) : (
                  <ArrowUpRight className="h-4 w-4" />
                )}
              </a>

              {secondaryHref ? (
                <Link
                  href={secondaryHref}
                  data-cursor="EXPLORE"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-xs font-semibold text-slate-800 transition-all hover:bg-slate-50 sm:text-sm"
                >
                  <span>{secondaryLabel}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              ) : null}
            </div>
          </div>

          {/* Right Column: Interactive Grayscale-to-Color Reveal Preview */}
          <TiltCard cursorLabel="EXPLORE" className="rounded-[28px]">
            <div className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl transition-all duration-300 hover:border-blue-300">
              {/* Top Browser Frame */}
              <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-0.5 text-[11px] text-slate-600">
                  Hover to reveal live color preview
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Verified
                </span>
              </div>

              <div className="relative h-[320px] w-full overflow-hidden sm:h-[380px]">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="h-full w-full object-cover object-top grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent transition-opacity duration-300" />
                <div className="absolute inset-x-6 bottom-5 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <span className="inline-block rounded-full border border-cyan-400/40 bg-cyan-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-cyan-200 backdrop-blur-md">
                      Architecture Spotlight
                    </span>
                    <p className="mt-2 font-display text-lg font-bold text-white sm:text-xl">
                      Sub-Second Edge Delivery & High-Intent Lead Funnels
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
