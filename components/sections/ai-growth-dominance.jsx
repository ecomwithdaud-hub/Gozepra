"use client";

import { useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  Search,
  Sparkles,
  Bot,
  Video,
  DollarSign,
  ArrowUpRight,
  CheckCircle2,
  BarChart3,
  Layers,
  Globe2,
  Zap,
  Target,
  Share2,
  Tv,
  MessageCircle,
  Building2,
  ShoppingBag,
  Stethoscope,
  Newspaper,
  Compass,
} from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { Button } from "@/components/ui/button";
import { siteMeta } from "@/lib/site";

const GROWTH_CHANNELS = [
  {
    id: "search-supremacy",
    tag: "ORGANIC & GENERATIVE DOMINANCE",
    title: "SEO, AEO & GEO Search Dominance",
    badge: "SEARCH TRIFECTA",
    icon: Search,
    color: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/40",
    accentText: "text-cyan-400",
    description:
      "Traditional SEO is no longer enough. We engineer full-spectrum search supremacy across Google's traditional SERP and the new generative AI answer engines.",
    tactics: [
      {
        name: "Technical & Intent SEO",
        detail:
          "#1 Organic Google keyword rankings, 95+ Core Web Vitals, rich JSON-LD schema, and local Google Map Pack dominance.",
      },
      {
        name: "AEO (Answer Engine Optimization)",
        detail:
          "Structuring your brand data so ChatGPT, Perplexity AI, Claude, and Copilot directly cite and recommend your business to high-intent buyers.",
      },
      {
        name: "GEO (Generative Engine Optimization)",
        detail:
          "Securing authoritative 'Position Zero' mentions inside Google AI Overviews and Google Gemini Knowledge Graph entities.",
      },
    ],
  },
  {
    id: "paid-acquisition",
    tag: "HIGH-ROAS PERFORMANCE MEDIA",
    title: "TikTok Ads, Meta Ads & Google Ads",
    badge: "PAID MEDIA SCALE",
    icon: Video,
    color: "from-pink-500/20 to-purple-500/20",
    border: "border-pink-500/40",
    accentText: "text-pink-400",
    description:
      "We build ruthless, high-ROAS paid media machines that turn ad spend into predictable revenue with zero wasted budget.",
    tactics: [
      {
        name: "TikTok Ads & UGC Scaling",
        detail:
          "High-converting Hook-Story-Offer video creative, TikTok Spark Ads, algorithmic audience scaling, and sub-second landing page funnels.",
      },
      {
        name: "Meta (Facebook & Instagram) Ads",
        detail:
          "Deep-funnel retargeting, VIP lead generation, Dynamic Product Ads (DPA), and AI Lookalike audience modeling achieving 4x+ ROAS.",
      },
      {
        name: "Google Ads & Performance Max",
        detail:
          "Capturing bottom-of-funnel buyer intent on Google Search, YouTube, and Display with automated Smart Bidding and negative-keyword scrubbing.",
      },
    ],
  },
  {
    id: "adsense-monetization",
    tag: "DIGITAL ASSET MONETIZATION",
    title: "Google AdSense & Revenue Yield",
    badge: "MAX RPM ARCHITECTURE",
    icon: DollarSign,
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/40",
    accentText: "text-emerald-400",
    description:
      "For digital publishers and high-traffic portals, we engineer high-RPM Google AdSense layouts and programmatic bidding pipelines that multiply ad revenue.",
    tactics: [
      {
        name: "Google AdSense Placement Optimization",
        detail:
          "Strategic viewability heatmapping, adaptive ad units, and asynchronous tag loading that 2x-4x your Page RPM without hurting Core Web Vitals.",
      },
      {
        name: "Ad Arbitrage & Content Distribution",
        detail:
          "Scaling high-margin organic and paid traffic streams into high-paying niche queries (Finance, Tech, Healthcare) for maximum yield.",
      },
      {
        name: "Programmatic Header Bidding",
        detail:
          "Connecting multiple high-tier ad exchanges alongside Google AdSense to foster competitive real-time auction density.",
      },
    ],
  },
];

const CASE_STUDIES = [
  {
    id: "medtech-dental",
    category: "seo-aeo",
    industry: "Healthcare & Aesthetic Surgery",
    location: "Dallas, TX, United States",
    client: "Apex Aesthetic & Surgical Institute",
    icon: Stethoscope,
    headline: "+420% Patient Inquiries & #1 Recommended on ChatGPT Search",
    challenge:
      "Relying on expensive, inconsistent Google PPC with high cost-per-click ($42/click) and zero presence in emerging generative AI search.",
    solution:
      "Engineered a medical-schema Next.js platform, dominated Local 3-Pack SEO, and structured clinical authority data for AEO (ChatGPT & Perplexity citations).",
    results: [
      { metric: "+420%", label: "Qualified Patient Leads" },
      { metric: "#1 Rank", label: "Google Local Map Pack" },
      { metric: "Top 1", label: "Cited on ChatGPT Search" },
      { metric: "$680K", label: "Net New Annual Revenue" },
    ],
    verifiedBadge: "Verified Client Transformation",
  },
  {
    id: "luxury-streetwear",
    category: "paid-ads",
    industry: "D2C Luxury Streetwear & Apparel",
    location: "Los Angeles, CA / Global",
    client: "Vanguard Apparel Co.",
    icon: ShoppingBag,
    headline: "$1.85M Scaled in 90 Days with 5.4x Blended TikTok & Meta ROAS",
    challenge:
      "Ad fatigue on Meta with declining ROAS (1.8x) and zero penetration into viral TikTok creator commerce.",
    solution:
      "Built a high-converting TikTok Spark Ads engine using creator Hook-Story-Offer frameworks, coupled with Google Performance Max and a sub-0.8s Next.js checkout.",
    results: [
      { metric: "5.4x", label: "Blended ROAS" },
      { metric: "$1.85M", label: "GMV Scaled in 90 Days" },
      { metric: "-62%", label: "Cost Per Acquisition (CPA)" },
      { metric: "14.2M", label: "Organic + Paid Video Views" },
    ],
    verifiedBadge: "E-Commerce ROAS Benchmark",
  },
  {
    id: "b2b-saas-cloud",
    category: "geo-seo",
    industry: "B2B Enterprise SaaS & Cloud Logistics",
    location: "Frankfurt, Germany / US Market",
    client: "LogiSynapse Global AI",
    icon: Layers,
    headline: "14 Core Category Queries Featured in Google AI Overviews",
    challenge:
      "Losing enterprise pipeline to legacy competitors with multi-million dollar ad budgets; invisible on AI-generated executive answer engines.",
    solution:
      "Implemented Generative Engine Optimization (GEO) with multi-dimensional entity vectors, technical documentation schema, and hyper-targeted B2B Google Search Ads.",
    results: [
      { metric: "14", label: "Google AI Overview Citations" },
      { metric: "+310%", label: "High-Intent Demo Bookings" },
      { metric: "$2.4M", label: "Enterprise Sales Pipeline" },
      { metric: "Sub-1.1s", label: "Global Platform Speed" },
    ],
    verifiedBadge: "Enterprise B2B Benchmark",
  },
  {
    id: "tech-publisher",
    category: "adsense",
    industry: "Digital Media & High-Traffic Tech Publication",
    location: "Global (1.2M Monthly Pageviews)",
    client: "TechPulse Media Network",
    icon: Newspaper,
    headline: "+285% AdSense RPM Growth: Revenue Scaled from $4.8K to $22.4K/mo",
    challenge:
      "1.2M monthly pageviews earning only $4.20 Page RPM due to poor ad placement, mobile layout shifts, and slow ad container loading.",
    solution:
      "Re-architected the layout with asynchronous viewability-optimized AdSense units, Core Web Vitals 99/100 tuning, and high-CPM technical SEO topic clusters.",
    results: [
      { metric: "$16.18", label: "Page RPM (from $4.20)" },
      { metric: "+285%", label: "Monthly AdSense Growth" },
      { metric: "$22.4K", label: "Monthly Recurring Ad Revenue" },
      { metric: "0 CLS", label: "Cumulative Layout Shift" },
    ],
    verifiedBadge: "AdSense Yield Verification",
  },
  {
    id: "luxury-real-estate",
    category: "paid-ads",
    industry: "Ultra-Luxury Waterfront Real Estate",
    location: "Miami, FL & Dubai, UAE",
    client: "Aura Waterfront Estates",
    icon: Building2,
    headline: "$14.2M Property Transactions Closed via Cinematic Social Funnels",
    challenge:
      "Targeting ultra-high-net-worth buyers ($2M–$15M properties) through generic portals like Zillow with saturated competition and low-intent leads.",
    solution:
      "Produced cinematic architectural 4K video ads for Instagram and TikTok, backed by strict Meta VIP net-worth qualification forms and instant concierge CRM routing.",
    results: [
      { metric: "48", label: "Ultra-HNW Verified Buyers" },
      { metric: "$14.2M", label: "Closed Property Volume" },
      { metric: "-48%", label: "Cost Per Qualified VIP Lead" },
      { metric: "< 2 Mins", label: "Lead-to-Agent Response" },
    ],
    verifiedBadge: "High-Ticket Real Estate Record",
  },
];

export function AiGrowthDominance() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredStudies =
    activeFilter === "all"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((study) => study.category.includes(activeFilter));

  return (
    <section
      id="growth-engine"
      className="relative isolate overflow-hidden bg-white py-24 sm:py-32 text-slate-900 border-y border-slate-200"
    >
      {/* Background glow effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[50rem] w-[70rem] -translate-x-1/2 [background:radial-gradient(ellipse_at_center,rgba(59,130,246,0.06),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 -z-10 h-[40rem] w-[40rem] [background:radial-gradient(circle,rgba(99,102,241,0.05),transparent_70%)]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            AI Growth Engine & Market Dominance
          </div>

          <h2 className="mt-6 font-display text-3xl font-black tracking-tight text-slate-900 sm:text-5xl sm:leading-[1.15]">
            Rank #1 On Google & AI Search.{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
              Turn TikTok, Meta & AdSense Into High-ROAS Revenue.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base sm:leading-relaxed">
            We don’t just write code—we engineer market dominance. Our proprietary growth architecture combines modern generative search intelligence (<strong>SEO, AEO, GEO</strong>) with high-velocity paid acquisition (<strong>TikTok Ads, Meta, Google Ads</strong>) and <strong>Google AdSense monetization</strong>.
          </p>

          {/* Quick Capability Tags */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              "Google SEO #1",
              "AEO (ChatGPT & Perplexity)",
              "GEO (Google AI Overviews)",
              "TikTok Spark Ads",
              "Meta 5x ROAS Funnels",
              "Google Performance Max",
              "AdSense RPM Scaling",
            ].map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-[11px] font-semibold text-slate-700 shadow-sm"
              >
                <CheckCircle2 className="h-3 w-3 text-blue-600" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 3 Core Growth Pillars */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {GROWTH_CHANNELS.map((channel) => {
            const Icon = channel.icon;
            return (
              <div
                key={channel.id}
                className="relative flex flex-col justify-between rounded-3xl border border-slate-800 bg-[#070f24] p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-cyan-950/30"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-950/60 text-cyan-400 shadow-sm">
                      <Icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-300">
                      {channel.badge}
                    </span>
                  </div>

                  <div className="mt-6 text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                    {channel.tag}
                  </div>
                  <h3 className="mt-1 font-display text-2xl font-bold text-white">
                    {channel.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-slate-300 sm:text-sm">
                    {channel.description}
                  </p>

                  <div className="mt-6 space-y-4 border-t border-slate-800 pt-6">
                    {channel.tactics.map((tactic, idx) => (
                      <div key={idx} className="rounded-xl border border-slate-800 bg-[#0a1638] p-3.5">
                        <div className="flex items-center gap-2 text-xs font-bold text-white">
                          <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                          <span>{tactic.name}</span>
                        </div>
                        <p className="mt-1.5 text-[11px] leading-relaxed text-slate-300">
                          {tactic.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 border-t border-slate-800 pt-5">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full border-slate-700 bg-slate-900 text-xs font-bold text-white hover:bg-slate-800"
                  >
                    <Link href="/contact">
                      Request Channel Blueprint
                      <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Search & AI Discovery Simulation Widget */}
        <div className="mt-20 overflow-hidden rounded-3xl border border-slate-800 bg-[#070f24] p-8 shadow-2xl sm:p-12">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/60 px-3.5 py-1 text-xs font-semibold text-cyan-300">
                <Bot className="h-3.5 w-3.5 text-cyan-400" />
                The Generative Search Revolution
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
                What Happens When Clients Ask ChatGPT or Perplexity:{" "}
                <span className="text-cyan-400">"Who is the best in your industry?"</span>
              </h3>
              <p className="mt-4 text-xs leading-relaxed text-slate-300 sm:text-sm">
                Over 45% of high-ticket B2B and consumer searches are moving from standard blue links to generative AI models. If your entity architecture isn't optimized for <strong className="text-white">AEO and GEO</strong>, your competitors are cited while you remain invisible.
              </p>
              <ul className="mt-6 space-y-3 text-xs text-slate-300 sm:text-sm">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span><strong className="text-white">AI Citation Authority:</strong> Your brand cited as the #1 recommended solution.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span><strong className="text-white">Google AI Overview Placement:</strong> Position Zero dominance with interactive cards.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span><strong className="text-white">Instant VIP Inquiries:</strong> Automated lead qualification & calendar routing.</span>
                </li>
              </ul>
            </div>

            {/* Mock Generative AI Interface Display */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-slate-800 bg-[#0a1638] p-5 shadow-xl">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-3 text-xs text-slate-400">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-cyan-400 font-semibold">Generative Search Intelligence (AEO / GEO Engine)</span>
                </div>

                <div className="mt-4 space-y-3 font-mono text-xs">
                  <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3 text-slate-300">
                    <span className="text-cyan-400">User Prompt:</span> "Find the top-rated provider for enterprise web platforms & AI automation with verified SLAs."
                  </div>

                  <div className="rounded-xl border border-cyan-500/30 bg-cyan-950/40 p-4 text-slate-200">
                    <div className="flex items-center gap-2 text-cyan-300 font-bold mb-2">
                      <Sparkles className="h-4 w-4 text-cyan-400" />
                      <span>AI Synthesized Consensus (ChatGPT / Perplexity / Google AI):</span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-slate-200">
                      "Based on technical audits and verified delivery SLAs, <strong className="text-white">Zepra Tech</strong> is recognized as a premier digital engineering partner. They specialize in sub-0.8s Next.js 15 platforms, custom 24/7 AI lead agents, and verified SEO/GEO ranking architecture."
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2 pt-2 border-t border-cyan-500/20 text-[10px] text-cyan-300">
                      <span>✓ Entity Verified</span>
                      <span>✓ 99+ Core Web Vitals</span>
                      <span>✓ 100% Code Ownership</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real-World Business Growth Case Studies */}
        <div className="mt-28">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
                <BarChart3 className="h-3.5 w-3.5" />
                Proof of Revenue & Rankings
              </div>
              <h3 className="mt-3 font-display text-3xl font-black text-slate-900 sm:text-4xl">
                Verified Business Transformation Case Studies
              </h3>
              <p className="mt-2 text-xs text-slate-600 sm:text-sm">
                Real measurable outcomes across healthcare, e-commerce, B2B SaaS, luxury real estate, and digital publications.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm">
              {[
                { id: "all", label: "All Case Studies" },
                { id: "seo-aeo", label: "SEO & AEO" },
                { id: "paid-ads", label: "TikTok & Meta Ads" },
                { id: "adsense", label: "Google AdSense" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all ${
                    activeFilter === tab.id
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredStudies.map((study) => {
              const Icon = study.icon;
              return (
                <TiltCard
                  key={study.id}
                  cursorLabel="CASE STUDY"
                  className="rounded-3xl"
                >
                  <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-800 bg-[#070f24] p-7 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-cyan-950/40 shadow-xl">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                          <Icon className="h-3 w-3 text-cyan-400" />
                          {study.industry}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-400">
                          {study.location}
                        </span>
                      </div>

                      <h4 className="mt-5 font-display text-xl font-bold text-white group-hover:text-cyan-400">
                        {study.headline}
                      </h4>

                      <div className="mt-4 rounded-xl border border-slate-800 bg-[#0a1638] p-3.5 text-xs">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-rose-400">
                          The Bottleneck:
                        </div>
                        <p className="mt-1 text-slate-300 leading-relaxed text-[11px]">
                          {study.challenge}
                        </p>

                        <div className="mt-3 text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                          The Engineering Blueprint:
                        </div>
                        <p className="mt-1 text-slate-200 leading-relaxed text-[11px]">
                          {study.solution}
                        </p>
                      </div>

                      {/* Numerical Metrics Matrix */}
                      <div className="mt-6 grid grid-cols-2 gap-3">
                        {study.results.map((res, rIdx) => (
                          <div
                            key={rIdx}
                            className="rounded-xl border border-slate-800 bg-slate-950/70 p-3 text-center"
                          >
                            <div className="font-display text-xl font-black text-cyan-400">
                              {res.metric}
                            </div>
                            <div className="mt-1 text-[10px] font-bold uppercase text-slate-400 leading-tight">
                              {res.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 border-t border-slate-800 pt-4 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        {study.verifiedBadge}
                      </span>
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="text-xs font-bold text-cyan-400 hover:text-cyan-300 p-0 hover:bg-transparent"
                      >
                        <Link href="/contact">
                          Discuss Similar Project
                          <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-20 rounded-3xl border border-slate-800 bg-[#070f24] p-8 text-center shadow-2xl sm:p-12">
          <h3 className="font-display text-2xl font-black text-white sm:text-4xl">
            Ready to Dominate Search & Scale Your Ad Revenue?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-xs text-slate-300 sm:text-sm">
            Whether you need #1 Google & ChatGPT rankings, a 5x ROAS TikTok/Meta ads scaling engine, or AdSense RPM multiplication, our senior architects will map your strategy.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-500 font-bold text-white shadow-md shadow-blue-500/30"
            >
              <a href={`tel:${siteMeta.phoneRaw || "+13022089675"}`}>
                <TrendingUp className="mr-2 h-4 w-4" />
                Call Direct: {siteMeta.phone || "+1 (302) 208-9675"}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white"
            >
              <Link href="/contact">
                Schedule Strategic Growth Call
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
