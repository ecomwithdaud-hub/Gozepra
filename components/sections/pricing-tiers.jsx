"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
  ArrowRight,
  Clock,
  Layers,
  HelpCircle,
  TrendingUp,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteMeta } from "@/lib/site";

const TIERS = [
  {
    id: "local-dominator",
    name: "Local Market Dominator",
    tagline: "For high-end local leaders, boutique clinics & premier firms looking to capture 3x local market share.",
    badge: "14-DAY SPRINT",
    badgeVariant: "slate",
    price: "$3,500 – $5,000",
    billingPeriod: "one-time sprint investment",
    popular: false,
    highlightMetric: "Sub-0.8s Load Times",
    features: [
      "Custom Next.js 15 SSR Architecture (No templates)",
      "Bespoke High-Conversion UI/UX designed in Figma",
      "Instant CRM Webhook Lead Routing & Real-Time Alerts",
      "95+ Lighthouse Score & Technical Local Schema",
      "Multi-device Responsive & Retina Optimization",
      "Full Code Ownership (100% IP transferred to you)",
      "14-Day Delivery SLA Guarantee",
    ],
    guarantee: "100% Core Web Vitals pass guarantee or we optimize at zero cost.",
    cta: "Deploy Local Dominator",
    href: "/contact",
  },
  {
    id: "enterprise-growth",
    name: "Enterprise Growth & AI Platform",
    tagline: "For scaling B2B companies, high-volume e-commerce & funded startups who demand automated lead capture.",
    badge: "MOST POPULAR • 2 SLOTS LEFT",
    badgeVariant: "cyan",
    price: "$7,500 – $12,000",
    billingPeriod: "one-time sprint investment",
    popular: true,
    highlightMetric: "24/7 AI Qualification Bot",
    features: [
      "Everything in Local Dominator, plus:",
      "Custom 24/7 AI Receptionist trained on your knowledge base",
      "Headless CMS integration (Sanity / Supabase) for instant edits",
      "Interactive ROI Calculators & Before/After Showmanship widgets",
      "Multi-Language i18n Architecture (English, Spanish, French, Arabic)",
      "Automated Zapier / Make / HubSpot CRM Pipelines",
      "Direct Private Slack Channel with Senior Solutions Architect",
      "21-Day Delivery SLA with Daily Asynchronous Standups",
    ],
    guarantee: "Guaranteed on-time launch or receive $250 credit per day delayed.",
    cta: "Claim Sprint Slot",
    href: "/contact",
  },
  {
    id: "flagship-bespoke",
    name: "Custom Flagship Platform",
    tagline: "For venture-backed giants, enterprise institutions & mission-critical ecosystems processing high GMV.",
    badge: "INVITATION & BRIEFING ONLY",
    badgeVariant: "purple",
    price: "$15,000 – $30,000+",
    billingPeriod: "one-time sprint investment",
    popular: false,
    highlightMetric: "Custom Agentic Workflows",
    features: [
      "Bespoke Microservices & Serverless Edge Architecture",
      "High-End 3D WebGL / Canvas interactive showmanship",
      "Autonomous Multi-Agent AI Workflows (Voice + Chat + CRM Sync)",
      "SOC-2 Type II Compliant Data Pipelines & Security Audits",
      "Custom Enterprise Database & Stripe/Payment Gateway Architecture",
      "60-Day Post-Launch Conversion Optimization & A/B Testing",
      "Direct Priority Phone Escalation Line to Founder Daud",
      "Unconditional Executive Board Sign-off Guarantee",
    ],
    guarantee: "Unlimited post-launch sprint iterations until your executive KPI is met.",
    cta: "Request Executive Briefing",
    href: "/contact",
  },
];

const RETAINERS = [
  {
    id: "retainer-essential",
    name: "Continuous Edge Sentry",
    price: "$997",
    period: "/month",
    description: "24/7 uptime monitoring, security patches, edge cache tuning, and 5 hours of monthly feature requests.",
    deliverables: [
      "24/7 Global Edge Telemetry monitoring",
      "Zero-downtime dependency & framework upgrades",
      "Instant 2-hour SLA response for critical bugs",
      "Monthly SEO & conversion telemetry report",
    ],
  },
  {
    id: "retainer-growth",
    name: "Conversion & AI Sprint Partner",
    price: "$2,450",
    period: "/month",
    badge: "MAX VELOCITY",
    description: "A full-stack engineering arm on retainer: ongoing A/B testing, AI prompt engineering, and continuous feature releases.",
    deliverables: [
      "All Edge Sentry deliverables included",
      "20 dedicated hours of custom Next.js feature development",
      "Bi-weekly A/B testing & landing page conversion experiments",
      "AI Bot dataset retraining & prompt fine-tuning",
      "Dedicated Slack channel with same-day turnaround",
    ],
  },
];

export function PricingTiers() {
  const [model, setModel] = useState("sprint"); // 'sprint' | 'retainer'

  return (
    <section id="pricing" className="relative isolate overflow-hidden bg-slate-50/70 border-t border-slate-200 py-24 sm:py-32">
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[50rem] w-[70rem] -translate-x-1/2 [background:radial-gradient(ellipse_at_center,rgba(59,130,246,0.06),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 -z-10 h-[35rem] w-[35rem] [background:radial-gradient(circle,rgba(99,102,241,0.05),transparent_70%)]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            Transparent Value Architecture
          </div>
          <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl sm:leading-tight">
            Enterprise Quality. Predictable ROI.{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
              Zero Hourly Guesswork.
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            We don’t bill by the hour like traditional agencies that pad timesheets. Every tier is a fixed-investment, outcome-guaranteed deployment backed by written SLAs.
          </p>

          {/* Model Switcher Pill */}
          <div className="mt-10 inline-flex items-center rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm">
            <button
              type="button"
              onClick={() => setModel("sprint")}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all sm:text-sm ${
                model === "sprint"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              <Zap className="h-4 w-4" />
              Fixed Sprint Deployments
            </button>
            <button
              type="button"
              onClick={() => setModel("retainer")}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all sm:text-sm ${
                model === "retainer"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              <TrendingUp className="h-4 w-4" />
              Monthly Growth Retainers
            </button>
          </div>
        </div>

        {/* Sprint Model Cards */}
        {model === "sprint" && (
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-stretch">
            {TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                  tier.popular
                    ? "border-2 border-cyan-400 bg-gradient-to-br from-[#0c1c45] via-[#070f24] to-[#040918] text-white shadow-2xl ring-1 ring-cyan-400/30 lg:-translate-y-2"
                    : "border border-slate-800 bg-[#070f24] text-white hover:border-cyan-400/50 hover:bg-[#0a1638] shadow-xl"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-[11px] font-bold uppercase tracking-widest text-white shadow-md">
                    {tier.badge}
                  </div>
                )}

                <div>
                  {!tier.popular && (
                    <div className="inline-flex rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-300">
                      {tier.badge}
                    </div>
                  )}

                  <div className="mt-4 flex items-center justify-between">
                    <h3 className="font-display text-2xl font-bold text-white">{tier.name}</h3>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-slate-300 sm:text-sm">
                    {tier.tagline}
                  </p>

                  <div className="mt-6 rounded-2xl border border-slate-800 bg-[#050b1d] p-4">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Total Investment
                    </div>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                        {tier.price}
                      </span>
                    </div>
                    <span className="text-[11px] text-cyan-400 font-medium">{tier.billingPeriod}</span>
                  </div>

                  <div className="mt-6 border-t border-slate-800 pt-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-200">
                      What's Included:
                    </div>
                    <ul className="mt-4 space-y-3">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 border-t border-slate-800 pt-6">
                  <div className="mb-5 rounded-xl border border-cyan-500/30 bg-cyan-950/40 p-3 text-[11px] text-cyan-200">
                    <span className="font-semibold text-cyan-400">Guarantee: </span>
                    {tier.guarantee}
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className={`w-full font-bold transition-all ${
                      tier.popular
                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/25"
                        : "border border-slate-700 bg-slate-900 text-slate-200 hover:border-cyan-400 hover:text-white hover:bg-slate-800"
                    }`}
                  >
                    <Link href={`${tier.href}?tier=${tier.id}`}>
                      {tier.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Retainer Model Cards */}
        {model === "retainer" && (
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
            {RETAINERS.map((ret) => (
              <div
                key={ret.id}
                className="relative flex flex-col justify-between rounded-3xl border border-slate-800 bg-[#070f24] p-8 shadow-xl text-white hover:border-cyan-400 transition-all"
              >
                {ret.badge && (
                  <div className="absolute -top-3.5 right-6 rounded-full bg-blue-600 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-sm">
                    {ret.badge}
                  </div>
                )}
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">{ret.name}</h3>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">{ret.description}</p>
                  
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="font-display text-4xl font-extrabold text-white">{ret.price}</span>
                    <span className="text-sm font-semibold text-slate-400">{ret.period}</span>
                  </div>

                  <div className="mt-6 border-t border-slate-800 pt-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-200">
                      SLA & Deliverables:
                    </div>
                    <ul className="mt-4 space-y-3">
                      {ret.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 border-t border-slate-800 pt-6">
                  <Button asChild size="lg" className="w-full bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/20 font-bold">
                    <Link href={`/contact?retainer=${ret.id}`}>
                      Subscribe to Retainer
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Written SLA & Peace of Mind Banner */}
        <div className="mt-16 rounded-3xl border border-slate-800 bg-[#070f24] p-8 shadow-xl text-white">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-950/60 text-cyan-400 border border-cyan-500/30">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <div className="font-bold text-white text-sm">100% Code & Asset Ownership</div>
                <div className="text-xs text-slate-300 mt-0.5">You own your GitHub repo, hosting, and data. Zero vendor lock-in.</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-950/60 text-cyan-400 border border-cyan-500/30">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <div className="font-bold text-white text-sm">Hard Sprint Delivery SLA</div>
                <div className="text-xs text-slate-300 mt-0.5">Contractually bound delivery timelines. We ship on time or pay you back.</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-950/60 text-cyan-400 border border-cyan-500/30">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <div className="font-bold text-white text-sm">Direct Founder Engineering</div>
                <div className="text-xs text-slate-600 mt-0.5">No 19-year-old junior interns. Direct senior guidance by Daud & lead team.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
