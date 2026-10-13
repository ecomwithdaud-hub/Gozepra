"use client";

import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Zap,
  Target,
  Users,
  Compass,
  Code2,
  CheckCircle2,
  ArrowRight,
  Award,
  Globe2,
  Cpu,
  Phone,
} from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { Button } from "@/components/ui/button";
import { siteMeta } from "@/lib/site";

const leadershipPillars = [
  {
    icon: Zap,
    title: "Speed As A Competitive Weapon",
    description:
      "We believe sluggish code kills conversions. Every web asset we build is engineered on Next.js 15 with sub-0.8s edge caching, passing strict Google Core Web Vitals with 95+ scores.",
  },
  {
    icon: Code2,
    title: "Zero Templates, 100% Bespoke Craft",
    description:
      "No off-the-shelf bloated WordPress themes. Every line of code, database schema, and interactive animation is crafted tailored to the client's business revenue model.",
  },
  {
    icon: Cpu,
    title: "Autonomous AI-First Architecture",
    description:
      "Under Mr. Daud Lashari's direction, we don't just build static pages—we embed intelligent 24/7 AI agents and CRM automation pipelines that capture, qualify, and book leads autonomously.",
  },
  {
    icon: ShieldCheck,
    title: "Unconditional Ownership & Transparency",
    description:
      "You receive 100% ownership of your GitHub source code, design assets, and production keys. No proprietary hostage fees, no hidden markups, and no vendor lock-in.",
  },
];

const impactStats = [
  { value: "150+", label: "Enterprise & High-Growth Deployments", sub: "Delivered on-time" },
  { value: "< 0.8s", label: "Average Global Edge Latency", sub: "99+ Lighthouse Mobile" },
  { value: "14 Days", label: "Average Sprint Deployment Time", sub: "Contractual SLA" },
  { value: "99.4%", label: "Client Retention & Satisfaction", sub: "Global US/UK/EU client base" },
];

export function OurStory() {
  return (
    <section className="relative isolate overflow-hidden bg-white border-b border-slate-200 pt-28 pb-20 text-slate-900 sm:pt-36 sm:pb-28">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[60rem] w-[80rem] -translate-x-1/2 [background:radial-gradient(ellipse_at_center,rgba(59,130,246,0.06),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-0 -z-10 h-[40rem] w-[40rem] [background:radial-gradient(circle,rgba(99,102,241,0.05),transparent_70%)]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 2xl:max-w-[1600px]">
        {/* Eyebrow & Main Title */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            Our Story & Leadership Philosophy
          </div>

          <h1 className="mt-6 font-display text-4xl font-black tracking-tight text-slate-900 sm:text-6xl sm:leading-[1.15]">
            Engineered For Market Dominance.{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
              Led By Mr. Daud Lashari.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-xl sm:leading-relaxed">
            Zepra Tech was founded on a singular, uncompromising principle: modern enterprises don’t need bloated, slow agencies billing hourly timesheets. They need precision digital weapons built for explosive conversion, extreme speed, and institutional credibility.
          </p>
        </div>

        {/* Founder Spotlight Card */}
        <div className="mt-16">
          <TiltCard cursorLabel="LEADERSHIP" className="rounded-3xl">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 p-8 shadow-xl sm:p-12">
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
                {/* Left: Founder Persona & Direct Supervision */}
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-700">
                    <Award className="h-3.5 w-3.5 text-blue-600" />
                    Direct Hands-On Supervision
                  </div>

                  <h2 className="mt-4 font-display text-3xl font-extrabold text-slate-900 sm:text-4xl">
                    Under the Supervision of Mr. Muhammad Daud Ali Lashari
                  </h2>

                  <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
                    Founder, Chief Executive Officer & Lead Technical Strategist
                  </p>

                  <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                    <p>
                      At Zepra Tech, you never speak to junior offshore account managers who play telephone with your vision. Every major system architecture, Core Web Vitals benchmark, and conversion funnel is architected under the direct personal scrutiny of <strong className="text-slate-900">Mr. Daud Lashari</strong> and our core senior leads.
                    </p>
                    <p>
                      Daud forged Zepra Tech after witnessing hundreds of businesses waste tens of thousands of dollars on slow, fragile WordPress themes and agency promises that never materialized. He instituted an uncompromising engineering culture where written SLAs, contractual performance guarantees, and radical transparency are non-negotiable.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 font-bold text-white shadow-md shadow-blue-500/20">
                      <a href={`tel:${siteMeta.phoneRaw || "+13022089675"}`}>
                        <Phone className="mr-2 h-4 w-4" />
                        Call Direct Line ({siteMeta.phone || "+1 (302) 208-9675"})
                      </a>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-slate-200 bg-white text-slate-800 hover:bg-slate-50">
                      <Link href="/contact">
                        Schedule Executive Briefing
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Right: Key Supervision Metrics & Badges */}
                <div className="lg:col-span-5">
                  <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
                    <div className="border-b border-slate-100 pb-4">
                      <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                        Operational Governance
                      </div>
                      <div className="mt-1 font-display text-xl font-bold text-slate-900">
                        Founder-Led Delivery Guarantee
                      </div>
                    </div>

                    <ul className="space-y-3.5 text-xs text-slate-600 sm:text-sm">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                        <span><strong>100% Architecture Review:</strong> Every pull request and server schema is vetted for scale and security.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                        <span><strong>Direct Escalation Line:</strong> Enterprise partners receive a private dedicated direct escalation line and client portal.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                        <span><strong>Zero Junior Outsourcing:</strong> Work is executed entirely in-house by our battle-tested engineering team.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                        <span><strong>Global Standards:</strong> Built to serve high-ticket enterprises across the United States, UK, EU, and Pakistan.</span>
                      </li>
                    </ul>

                    <div className="rounded-xl border border-blue-200 bg-blue-50 p-3.5 text-center text-xs text-blue-900">
                      <span className="font-bold text-slate-900">Headquartered in Pakistan.</span> Delivering international enterprise standards worldwide.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* High-Impact Numerical Telemetry */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {impactStats.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="font-display text-3xl font-extrabold text-slate-900 sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-xs font-bold uppercase tracking-wider text-blue-600">
                {stat.label}
              </div>
              <div className="mt-1 text-[11px] text-slate-500">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="mt-24">
          <div className="text-center">
            <h3 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              The Four Pillars of Zepra Engineering
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600">
              The foundational ethos that sets our digital assets apart from ordinary digital agencies.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadershipPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-blue-300 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="mt-5 font-display text-lg font-bold text-slate-900">
                    {pillar.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
