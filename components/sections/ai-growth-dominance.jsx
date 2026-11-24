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
          "Strong Google rankings, fast load times, rich JSON-LD schema, and local Google Map Pack setup.",
      },
      {
        name: "AEO (Answer Engine Optimization)",
        detail:
          "Structuring your brand data so ChatGPT, Perplexity AI, Claude, and Copilot directly cite and recommend your business to high-intent buyers.",
      },
      {
        name: "GEO (Generative Engine Optimization)",
        detail:
          "Earning mentions inside Google AI Overviews and Google Gemini Knowledge Graph entities.",
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
      "We build targeted paid media campaigns that turn ad spend into booked calls and sales, with weekly reporting.",
    tactics: [
      {
        name: "TikTok Ads & UGC Scaling",
        detail:
          "High-converting Hook-Story-Offer video creative, TikTok Spark Ads, algorithmic audience scaling, and fast landing page funnels.",
      },
      {
        name: "Meta (Facebook & Instagram) Ads",
        detail:
          "Deep-funnel retargeting, VIP lead generation, Dynamic Product Ads (DPA), and AI Lookalike audience modeling aimed at strong returns.",
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
      "For digital publishers and high-traffic portals, we engineer high-RPM Google AdSense layouts and programmatic bidding pipelines that grow ad revenue.",
    tactics: [
      {
        name: "Google AdSense Placement Optimization",
        detail:
          "Strategic viewability heatmapping, adaptive ad units, and asynchronous tag loading that lift your Page RPM without hurting load times.",
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
    icon: Stethoscope,
    headline: "Local Search and AI Answers for Clinics",
    challenge:
      "Clinics rely on paid ads and have no presence in AI search answers.",
    solution:
      "Medical schema website, local search setup, and structured service data for AI answers.",
    results: [
      { metric: "Local SEO", label: "Google Maps Setup" },
      { metric: "AEO", label: "ChatGPT and Perplexity" },
      { metric: "Schema", label: "Medical Service Data" },
      { metric: "2 to 3 Weeks", label: "Typical Launch" },
    ],
    verifiedBadge: "Growth Playbook",
  },
  {
    id: "luxury-streetwear",
    category: "paid-ads",
    industry: "D2C Luxury Streetwear & Apparel",
    location: "Los Angeles, CA / Global",
    icon: ShoppingBag,
    headline: "Paid Social and Fast Checkout for Apparel Brands",
    challenge:
      "Ad fatigue on Meta and slow checkout pages lose shoppers before they buy.",
    solution:
      "TikTok and Meta creative testing with a fast Next.js checkout and clear product pages.",
    results: [
      { metric: "TikTok + Meta", label: "Ad Channels" },
      { metric: "Fast Checkout", label: "Mobile First" },
      { metric: "Creative Testing", label: "Weekly" },
      { metric: "3 to 4 Weeks", label: "Typical Launch" },
    ],
    verifiedBadge: "Growth Playbook",
  },
  {
    id: "b2b-saas-cloud",
    category: "geo-seo",
    industry: "B2B Enterprise SaaS & Cloud Logistics",
    location: "Frankfurt, Germany / US Market",
    icon: Layers,
    headline: "AI Search Visibility for B2B Software",
    challenge:
      "Enterprise buyers now ask AI answers first, and the product is invisible there.",
    solution:
      "GEO setup with clear entity data, documentation schema, and targeted B2B search ads.",
    results: [
      { metric: "GEO", label: "AI Overview Setup" },
      { metric: "Entity Data", label: "Schema" },
      { metric: "B2B Search", label: "Targeted Ads" },
      { metric: "6 to 8 Weeks", label: "Typical Launch" },
    ],
    verifiedBadge: "Growth Playbook",
  },
  {
    id: "tech-publisher",
    category: "adsense",
    industry: "Digital Media & High-Traffic Tech Publication",
    location: "Global",
    icon: Newspaper,
    headline: "Ad Layout and Speed for Publishers",
    challenge:
      "High traffic pages earn little because ads load slowly and layouts shift on mobile.",
    solution:
      "Rebuilt layout with viewable AdSense units, fast loading, and clean topic clusters.",
    results: [
      { metric: "AdSense", label: "Placement Setup" },
      { metric: "Speed", label: "Fast Loading" },
      { metric: "Topic Clusters", label: "SEO" },
      { metric: "4 Weeks", label: "Typical Launch" },
    ],
    verifiedBadge: "Growth Playbook",
  },
  {
    id: "luxury-real-estate",
    category: "paid-ads",
    industry: "Ultra-Luxury Waterfront Real Estate",
    location: "Miami, FL & Dubai, UAE",
    icon: Building2,
    headline: "Social Funnels for High Value Property",
    challenge:
      "Luxury listings compete on generic portals with low intent leads.",
    solution:
      "Cinematic video ads for Instagram and TikTok with qualification forms and instant CRM routing.",
    results: [
      { metric: "Video Ads", label: "Instagram and TikTok" },
      { metric: "Qualification", label: "Buyer Forms" },
      { metric: "CRM Routing", label: "Instant" },
      { metric: "4 Weeks", label: "Typical Launch" },
    ],
    verifiedBadge: "Growth Playbook",
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
            Rank Higher on Google and AI Search.{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
              Turn Search, TikTok, Meta, and AdSense Into Steady Growth.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base sm:leading-relaxed">
            We do not just write code, we build growth systems. Our approach combines modern search intelligence (<strong>SEO, AEO, GEO</strong>) with paid acquisition (<strong>TikTok Ads, Meta, Google Ads</strong>) and <strong>Google AdSense setup</strong>.
          </p>

          {/* Quick Capability Tags */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              "Google SEO",
              "AEO (ChatGPT & Perplexity)",
              "GEO (Google AI Overviews)",
              "TikTok Spark Ads",
              "Meta Ads Funnels",
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
                More buyers now start in AI answers instead of blue links. If your business is not set up for <strong className="text-white">AEO and GEO</strong>, your competitors get cited while you stay invisible.
              </p>
              <ul className="mt-6 space-y-3 text-xs text-slate-300 sm:text-sm">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span><strong className="text-white">AI Citation Authority:</strong> Your brand cited in AI answers.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span><strong className="text-white">Google AI Overview Placement:</strong> Clear, structured answers with your brand in them.</span>
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
                      "Zepra Tech builds fast Next.js 15 websites, custom 24/7 AI lead agents, and SEO and GEO setups for US small businesses, with fixed pricing and full code ownership."
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2 pt-2 border-t border-cyan-500/20 text-[10px] text-cyan-300">
                      <span>✓ Entity Verified</span>
                      <span>✓ Fixed Pricing</span>
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
                Growth Playbooks
              </div>
              <h3 className="mt-3 font-display text-3xl font-black text-slate-900 sm:text-4xl">
                Growth Playbooks by Industry
              </h3>
              <p className="mt-2 text-xs text-slate-600 sm:text-sm">
                How we approach growth for healthcare, e-commerce, B2B, real estate, and publishers. These are playbooks, not client results.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm">
              {[
                { id: "all", label: "All Playbooks" },
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
            Ready to Grow Search and Ad Revenue?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-xs text-slate-300 sm:text-sm">
            Whether you need better Google and ChatGPT visibility, TikTok and Meta ads, or AdSense setup, our team will map your strategy.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-500 font-bold text-white shadow-md shadow-blue-500/30"
            >
              <a href={`tel:${siteMeta.phoneRaw || "+13024694003"}`}>
                <TrendingUp className="mr-2 h-4 w-4" />
                Call Direct: {siteMeta.phone || "+1 (302) 469-4003"}
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
