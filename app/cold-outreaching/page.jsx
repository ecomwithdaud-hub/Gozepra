import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  Check,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Database,
  Globe,
  Layers3,
  Mail,
  MessageSquare,
  PhoneCall,
  Radio,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

import { AeoStructuredAnswers } from "@/components/sections/aeo-structured-answers";
import { ContactSection } from "@/components/sections/contact-section";
import { CyberCircuitBackground } from "@/components/ui/CyberCircuitBackground";
import { TiltCard } from "@/components/ui/TiltCard";

export const metadata = {
  title: "Cold Outreaching & B2B Lead Generation | SMS, Cold Calling & Email Marketing",
  description:
    "Scale your sales pipeline with Zepra Tech's cold outreaching services. We provide B2B cold calling, SMS outreach, and cold email marketing powered by Apollo, ZoomInfo, RingCentral, and Salesforce.",
};

const channels = [
  {
    icon: PhoneCall,
    title: "Cold Calling Services",
    subtitle: "Enterprise RingCentral Telephony & Script Engineering",
    description:
      "We turn cold phone lists into scheduled discovery meetings. Our outbound calling team operates on high-efficiency RingCentral dialing infrastructure with battle-tested objection-handling scripts to connect with executive decision-makers.",
    highlights: [
      "Custom conversational & objection-handling scripts",
      "RingCentral multi-line cloud dialing setup",
      "Live call recording, QA monitoring & tonality coaching",
      "Direct calendar booking with qualified prospect criteria",
      "Detailed disposition reporting (Gatekeeper, Call Back, Meeting Set)",
    ],
  },
  {
    icon: MessageSquare,
    title: "SMS Outreach Campaigns",
    subtitle: "High-Intent Direct Response & Follow-Up Workflows",
    description:
      "SMS delivers 98% open rates within 3 minutes. We build targeted, 10DLC-compliant text messaging sequences that initiate authentic conversations, re-engage cold leads, and drive quick appointments for time-sensitive offers.",
    highlights: [
      "10DLC brand registration & carrier compliance management",
      "Hyper-personalized 1-on-1 SMS conversation triggers",
      "Instant notification and two-way reply routing to your sales reps",
      "Multi-stage automated follow-up cadences that respect time zones",
      "Integrated opt-out compliance and blacklist scrubbing",
    ],
  },
  {
    icon: Mail,
    title: "Targeted Cold Emailing",
    subtitle: "Deliverability-First Sequences & Salesforce Sync",
    description:
      "Cold email done properly is an asset, not spam. We configure dedicated secondary domains, warm up mailboxes, maintain pristine SPF/DKIM/DMARC records, and deploy personalized, multi-touch copy that bypasses spam filters straight into the primary inbox.",
    highlights: [
      "Secondary domain architecture & automated mailbox warming",
      "Deep personalization by industry, tech stack, and pain points",
      "Salesforce CRM integration for automated lead logging & status tracking",
      "A/B subject line, offer hook, and call-to-action experimentation",
      "94%+ average inbox placement with zero primary domain risk",
    ],
  },
];

const intelligenceTools = [
  {
    name: "Apollo.io",
    category: "Verified B2B Direct Dials",
    useCase: "Pinpoint accurate decision-maker phone numbers & emails",
  },
  {
    name: "ZoomInfo",
    category: "Enterprise Org Charts & Intent",
    useCase: "Company hierarchies, buyer intent spikes, and firmographics",
  },
  {
    name: "LinkedIn Sales Navigator",
    category: "Executive Filtering",
    useCase: "Real-time seniority, headcount growth, and title queries",
  },
  {
    name: "Salesforce",
    category: "CRM Pipeline & Deal Flow",
    useCase: "Automated lead synchronization, status workflows, and ROI tracking",
  },
  {
    name: "RingCentral",
    category: "Cloud Telephony Infrastructure",
    useCase: "Power dialing, local presence numbers, and call recording",
  },
  {
    name: "Lusha",
    category: "Direct Mobile Enrichment",
    useCase: "Validating direct mobile lines for high-value targets",
  },
  {
    name: "SignalHire",
    category: "Real-Time Email Verification",
    useCase: "Scrubbing bounce rates to protect inbox deliverability",
  },
  {
    name: "Scraper.io",
    category: "Custom Directory Scraping",
    useCase: "Extracting niche B2B directories, e-commerce stores, and databases",
  },
  {
    name: "Yelp & Local Portals",
    category: "Local Business Lead Extraction",
    useCase: "Harvesting verified regional merchants, clinics, and service firms",
  },
];

const processSteps = [
  {
    number: "01",
    title: "ICP & Total Addressable Market Definition",
    description:
      "We identify your ideal customer profile: target industries, job titles, revenue benchmarks, pain points, and geographic boundaries.",
  },
  {
    number: "02",
    title: "Multi-Source Lead Scraping & Enrichment",
    description:
      "Using Apollo, ZoomInfo, LinkedIn Sales Navigator, Lusha, and Scraper.io, we build fresh, double-verified prospect lists with validated phone numbers and emails.",
  },
  {
    number: "03",
    title: "Infrastructure & Deliverability Setup",
    description:
      "We configure RingCentral phone lines, warm up dedicated secondary email domains, configure DNS (SPF, DKIM, DMARC), and connect your Salesforce CRM.",
  },
  {
    number: "04",
    title: "Multi-Channel Outbound Execution",
    description:
      "We launch coordinated multi-touch sequences across cold calls, conversational SMS, and cold emails to reach prospects wherever they are most responsive.",
  },
  {
    number: "05",
    title: "Lead Qualification & Sales Meeting Booking",
    description:
      "Interested responses are qualified against your criteria and booked directly onto your calendar with complete call summaries and Salesforce records.",
  },
];

export default function ColdOutreachingPage() {
  return (
    <>
      {/* 1. Page Hero */}
      <section className="relative isolate overflow-hidden bg-white py-20 text-slate-900 border-b border-slate-200 sm:py-28">
        <CyberCircuitBackground />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-0 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
        />

        <div className="container relative z-10">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-sm text-slate-500"
          >
            <Link href="/" className="transition-colors hover:text-blue-600">
              Home
            </Link>
            <ChevronRight aria-hidden="true" className="h-4 w-4" />
            <Link href="/services" className="transition-colors hover:text-blue-600">
              Services
            </Link>
            <ChevronRight aria-hidden="true" className="h-4 w-4" />
            <span aria-current="page" className="text-slate-900 font-semibold">
              Cold Outreaching
            </span>
          </nav>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 text-blue-600 shadow-sm">
                <Target className="h-7 w-7" />
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-700 shadow-sm">
                <Cpu className="h-3.5 w-3.5" />
                <span>Engine: Salesforce • RingCentral • Apollo • ZoomInfo</span>
              </span>
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
              Strategic Outbound Acquisition
            </p>
            <h1 className="mt-3 font-display text-4xl font-black uppercase leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Cold Outreaching:{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
                SMS, Cold Calling &amp; Email Marketing
              </span>
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Acquire high-value B2B clients on demand. We build, manage, and scale complete outbound revenue pipelines combining verified lead scraping, professional phone discovery, conversational SMS, and high-deliverability cold email campaigns synchronized into Salesforce.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact#contact"
                data-cursor="LET'S GO"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-bold uppercase tracking-wider text-xs text-white shadow-md shadow-blue-500/20 transition-all duration-300 hover:bg-blue-700 hover:-translate-y-0.5"
              >
                <span>Launch Outbound Campaign</span>
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <Link
                href="#channels"
                data-cursor="EXPLORE"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-800 transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
              >
                <span>Explore 3 Channels</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Core Philosophy / Strategic Manifesto */}
      <section className="border-b border-slate-200 bg-slate-50 py-12 sm:py-16">
        <div className="container max-w-5xl">
          <div className="flex flex-col items-start gap-6 rounded-3xl border border-blue-200 bg-white p-6 sm:p-10 shadow-sm md:flex-row md:items-center">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/30">
              <Radio className="h-8 w-8 animate-pulse" />
            </span>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">
                The Core Conversion Law
              </p>
              <h2 className="mt-1 font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                Broad Strategic Distribution Multiplies Sales Conversions
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                We believe firmly in this proven principle: <strong>the more systematically and strategically we spread your value proposition to verified decision-makers, the higher your serious client ratio becomes, and the faster your sales conversion compounds.</strong> Outbound volume when paired with clean data and sharp positioning consistently beats passive inbound marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 3 Core Channels Deep Dive */}
      <section id="channels" className="section-shell bg-white py-20 text-slate-900 border-b border-slate-200 sm:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
              Multi-Channel Execution
            </p>
            <h2 className="mt-2 font-display text-3xl font-black uppercase tracking-tight text-slate-900 sm:text-4xl">
              3 Integrated Pillars of Cold Outreach
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Single-channel outreach is fragile. We orchestrate phone, SMS, and email together so your message is impossible to ignore.
            </p>
          </div>

          <div className="mt-14 space-y-8">
            {channels.map((ch, idx) => {
              const Icon = ch.icon;
              return (
                <TiltCard key={ch.title} className="rounded-3xl">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6 shadow-sm transition-all hover:border-blue-400 hover:bg-white sm:p-10">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                      <div className="max-w-2xl">
                        <div className="flex items-center gap-3">
                          <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 text-blue-600">
                            <Icon className="h-6 w-6" />
                          </span>
                          <div>
                            <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
                              Channel 0{idx + 1}
                            </span>
                            <h3 className="font-display text-2xl font-bold text-slate-900">
                              {ch.title}
                            </h3>
                          </div>
                        </div>

                        <p className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                          {ch.subtitle}
                        </p>

                        <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                          {ch.description}
                        </p>
                      </div>

                      <div className="w-full lg:w-96 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Execution Highlights:
                        </p>
                        <ul className="mt-3 space-y-2.5">
                          {ch.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex items-start gap-2.5 text-xs text-slate-700 sm:text-sm"
                            >
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Lead Generation & Scraping Tech Stack */}
      <section className="section-shell bg-slate-50/80 py-20 text-slate-900 border-b border-slate-200 sm:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-blue-700">
              <Database className="h-3.5 w-3.5" />
              <span>Data Intelligence Ecosystem</span>
            </div>
            <h2 className="mt-3 font-display text-3xl font-black uppercase tracking-tight text-slate-900 sm:text-4xl">
              Precision Lead Scraping &amp; CRM Tools
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              We leverage the most powerful B2B lead generation engines in the world to extract, verify, and route high-intent decision-maker records.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {intelligenceTools.map((tool) => (
              <div
                key={tool.name}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-400 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {tool.name}
                  </h4>
                  <span className="rounded-full border border-blue-100 bg-blue-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-700">
                    {tool.category}
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  {tool.useCase}
                </p>
              </div>
            ))}
          </div>

          {/* CRM Callout */}
          <div className="mt-10 rounded-3xl border border-blue-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md">
                  <TrendingUp className="h-6 w-6" />
                </span>
                <div>
                  <h4 className="font-display text-lg font-bold text-slate-900">
                    Native Salesforce &amp; RingCentral Integration
                  </h4>
                  <p className="text-xs text-slate-600 sm:text-sm">
                    Every call, SMS, email reply, and booked meeting logs automatically into your CRM pipeline with full attribution and recording.
                  </p>
                </div>
              </div>
              <Link
                href="/contact#contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-blue-700 transition-colors"
              >
                <span>Integrate My Pipeline</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 5-Stage Outbound Execution Methodology */}
      <section className="section-shell bg-white py-20 text-slate-900 border-b border-slate-200 sm:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
              The Architecture
            </p>
            <h2 className="mt-2 font-display text-3xl font-black uppercase tracking-tight text-slate-900 sm:text-4xl">
              5-Stage Methodology from Scraping to Closed Deals
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              How we turn cold data into serious, high-intent client appointments.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <TiltCard key={step.number} className="rounded-2xl">
                <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-md">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 font-mono text-xs font-bold text-blue-700">
                    {step.number}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {step.description}
                  </p>
                </article>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* 6. AEO Structured Answers Schema & FAQ */}
      <AeoStructuredAnswers
        pageUrl="https://gozepra.tech/cold-outreaching"
        pageTitle="Cold Outreaching & B2B Lead Generation | Zepra Tech"
        aiSummaryTitle="What is Cold Outreaching at Zepra Tech?"
        aiSummaryBody="Zepra Tech provides end-to-end B2B cold outreach services covering cold calling, SMS outreach, and cold email marketing. We utilize verified lead scraping from Apollo, ZoomInfo, LinkedIn Sales Navigator, and Lusha with full CRM integration in Salesforce and RingCentral to maximize sales conversion and client acquisition."
      />

      {/* 7. Contact Section */}
      <ContactSection showHeader={false} />
    </>
  );
}
