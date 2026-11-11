"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Database,
  Mail,
  MessageSquare,
  PhoneCall,
  Radio,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";

import { TiltCard } from "@/components/ui/TiltCard";
import { CyberCircuitBackground } from "@/components/ui/CyberCircuitBackground";

const outreachChannels = [
  {
    icon: PhoneCall,
    title: "Cold Calling Services",
    accent: "from-blue-600 to-cyan-600",
    badge: "RingCentral Infrastructure",
    description:
      "Enterprise outbound dialing and qualified discovery calls executed with objection-proof scripts. We identify decision-makers, handle resistance, and book qualified sales meetings on your calendar.",
    deliverables: [
      "Custom objection-handling phone scripts",
      "RingCentral multi-line dialing workflows",
      "Live call recording & quality QA review",
      "Calendar booking & qualified show rate tracking",
    ],
  },
  {
    icon: MessageSquare,
    title: "SMS Outreach Campaigns",
    accent: "from-emerald-600 to-teal-600",
    badge: "Direct Response Engine",
    description:
      "High-open rate, conversational SMS outreach engineered for immediate response. We engage high-intent mobile contacts with compliant, value-led messaging that triggers fast replies.",
    deliverables: [
      "10DLC compliant messaging pipelines",
      "Personalized 1-on-1 SMS sequences",
      "Instant inbound response routing",
      "Automated follow-up drip cadence",
    ],
  },
  {
    icon: Mail,
    title: "Targeted Cold Emailing",
    accent: "from-indigo-600 to-blue-600",
    badge: "Salesforce Synchronized",
    description:
      "Deliverability-first email marketing that bypasses spam filters straight into primary inboxes. Backed by dedicated secondary domains, mailbox warming, and hyper-personalized copy.",
    deliverables: [
      "Secondary domain warm-up & SPF/DKIM/DMARC",
      "High-converting B2B cold email sequences",
      "Salesforce CRM integration & lead scoring",
      "Dynamic personalization & AB testing",
    ],
  },
];

const intelligenceTools = [
  {
    name: "Apollo.io",
    category: "Verified B2B Direct Dials",
    tag: "Lead Scraping",
  },
  {
    name: "ZoomInfo",
    category: "Enterprise Org Charts & Intent",
    tag: "Intelligence",
  },
  {
    name: "LinkedIn Sales Nav",
    category: "Decision-Maker Advanced Filtering",
    tag: "Prospecting",
  },
  {
    name: "Salesforce",
    category: "CRM Pipeline & Deal Attribution",
    tag: "CRM Hub",
  },
  {
    name: "RingCentral",
    category: "VoIP Cloud Dialing & Analytics",
    tag: "Telephony",
  },
  {
    name: "Lusha",
    category: "Accurate Cell & Direct Contact Data",
    tag: "Enrichment",
  },
  {
    name: "SignalHire",
    category: "Real-Time Email & Mobile Verification",
    tag: "Validation",
  },
  {
    name: "Scraper.io",
    category: "Custom Web & Directory Extraction",
    tag: "Data Scraping",
  },
  {
    name: "Yelp & Local Portals",
    category: "High-Volume Local Business Intel",
    tag: "Local Leads",
  },
];

const metrics = [
  { value: "+94%", label: "Primary Inbox Deliverability" },
  { value: "3.8x", label: "Qualified Discovery Meeting Rate" },
  { value: "100%", label: "Salesforce & CRM Pipeline Sync" },
  { value: "0% Spam", label: "Strict Compliance & Scrubbed Lists" },
];

export function ColdOutreachSection() {
  return (
    <section className="section-shell relative isolate overflow-hidden bg-white text-slate-900 border-b border-slate-200 py-20 sm:py-28">
      <CyberCircuitBackground />

      <div className="container relative z-10">
        {/* Top Eyebrow & Headline */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-blue-700 shadow-sm">
            <Target className="h-3.5 w-3.5 text-blue-600" />
            <span>High-Velocity B2B Outbound Engine</span>
          </div>

          <h2 className="mt-5 font-display text-3xl font-black uppercase leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Cold Outreaching &amp;{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
              Lead Generation
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Stop waiting for inbound leads to trickle in. We combine cold calling, targeted SMS outreach, and high-deliverability cold email sequences into an aggressive, multi-channel client acquisition pipeline.
          </p>

          {/* Strategic Distribution Manifesto Quote */}
          <div className="mt-8 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50/80 via-white to-blue-50/80 p-5 sm:p-7 shadow-sm text-left">
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-500/20">
                <Radio className="h-5 w-5 animate-pulse" />
              </span>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-700">
                  The Outbound Message Distribution Law
                </p>
                <p className="mt-1 text-sm font-semibold leading-relaxed text-slate-800 sm:text-base">
                  &ldquo;The broader and more systematically we spread your message to verified decision-makers, the higher your serious client ratio and closing conversion rate. Outbound volume backed by pinpoint targeting wins every time.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Channels Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {outreachChannels.map((channel, idx) => {
            const Icon = channel.icon;
            return (
              <TiltCard
                key={channel.title}
                cursorLabel="OUTREACH"
                className="h-full rounded-3xl"
              >
                <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-xl sm:p-8">
                  {/* Subtle top ambient indicator */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500" />

                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 text-blue-600">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-slate-600">
                        Channel 0{idx + 1}
                      </span>
                    </div>

                    <span className="mt-4 inline-block text-[11px] font-bold uppercase tracking-wider text-blue-600">
                      {channel.badge}
                    </span>

                    <h3 className="mt-1 font-display text-2xl font-bold text-slate-900">
                      {channel.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {channel.description}
                    </p>

                    <div className="mt-6 border-t border-slate-100 pt-4">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Channel Capabilities:
                      </p>
                      <ul className="mt-3 space-y-2">
                        {channel.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-xs text-slate-700"
                          >
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100">
                    <Link
                      href="/cold-outreaching"
                      className="inline-flex w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 transition-colors hover:border-blue-400 hover:bg-blue-600 hover:text-white"
                    >
                      <span>Explore Channel Architecture</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Lead Scraping, Data Enrichment & Telephony Stack */}
        <div className="mt-16 rounded-3xl border border-slate-200 bg-slate-50/80 p-6 backdrop-blur-md sm:p-10">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                <Database className="h-4 w-4" />
                <span>Verified Data Scraping &amp; Infrastructure Stack</span>
              </div>
              <h3 className="mt-2 font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                Powered by Industry-Leading Prospecting Tools
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                We do not use stale or recycled databases. Our lead engineers extract, clean, and enrich verified direct-dial phone numbers and corporate emails using best-in-class enterprise platforms.
              </p>
            </div>

            <Link
              href="/cold-outreaching"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/20 transition-all hover:bg-blue-700"
            >
              <span>View Full Tech Stack</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
            {intelligenceTools.map((tool) => (
              <div
                key={tool.name}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-blue-400 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {tool.name}
                  </span>
                  <span className="rounded-full border border-blue-100 bg-blue-50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-blue-700">
                    {tool.tag}
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  {tool.category}
                </p>
              </div>
            ))}
          </div>

          {/* 4 Performance Metric Badges */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm"
              >
                <p className="font-mono text-2xl font-black text-blue-600 sm:text-3xl">
                  {m.value}
                </p>
                <p className="mt-1 text-[11px] font-semibold text-slate-600">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Callout Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 p-8 text-white shadow-xl sm:flex-row sm:p-10">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white backdrop-blur-md">
              <Sparkles className="h-3 w-3" />
              Scale Your Sales Pipeline
            </span>
            <h3 className="mt-3 font-display text-2xl font-black leading-tight sm:text-3xl">
              Ready to Fill Your Calendar With Serious Buyers?
            </h3>
            <p className="mt-1 max-w-xl text-sm text-blue-100">
              Let us build and manage your cold calling, SMS outreach, and cold email engine with guaranteed verified lead lists and Salesforce CRM integration.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <Link
              href="/contact#contact"
              data-cursor="LET'S GO"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-lg transition-all duration-300 hover:bg-blue-50 hover:scale-105"
            >
              <span>Launch Outbound Campaign</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/cold-outreaching"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              <span>Full Service Details</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
