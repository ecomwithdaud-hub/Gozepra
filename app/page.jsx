import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Search } from "lucide-react";

import { AiSandbox } from "@/components/v3/ai-sandbox";
import { Faq } from "@/components/v3/faq";
import { FeaturedBuilds } from "@/components/v3/featured-builds";
import { CountUp, FadeUp } from "@/components/v3/motion";
import { PricingCard } from "@/components/v3/pricing";
import { RoiCalculator } from "@/components/v3/roi-calculator";
import { FinalCta } from "@/components/v3/shared";
import { TeamPhoto } from "@/components/v3/team-photo";
import { TechStrip } from "@/components/v3/tech-strip";
import { VideoStrip } from "@/components/v3/video-strip";
import {
  SHOW_REVIEWS,
  SHOW_VIDEOS,
  pricingTiers,
  siteMeta,
  teamMembers,
  usaClientDemoWebsites,
} from "@/lib/site";

const studioStandards = [
  {
    number: "01",
    title: "Senior team only",
    body: "Every project is led by senior engineers. Nothing is handed to juniors or outsourced.",
  },
  {
    number: "02",
    title: "Fixed price in writing",
    body: "Your quote is agreed in writing before we start. The price does not move unless the scope does.",
  },
  {
    number: "03",
    title: "You own everything",
    body: "Code, domain, accounts, and data. 100% yours, with no lock-in.",
  },
  {
    number: "04",
    title: "Reply within 24 hours",
    body: "A real answer from the team within one business day, every time.",
  },
];

const featuredDemoIds = [1, 14, 19, 8, 17, 15];
const featuredIndustries = {
  1: "Home Services",
  14: "Clinic & MedSpa",
  19: "E-Commerce",
  8: "Auto",
  17: "Restaurant & Hospitality",
  15: "Fitness & Coaching",
};
const featuredDemos = featuredDemoIds
  .map((id) => usaClientDemoWebsites.find((demo) => demo.id === id))
  .filter(Boolean);

const steps = [
  {
    number: "01",
    title: "Free 15-minute call",
    body: "Tell us what you do, and what the site must do. No jargon.",
    visual: (
      <div className="rounded-2xl border border-zinc-200/80 bg-white p-4">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#55524B]">
          Today
        </p>
        <div className="mt-3 space-y-2">
          <p className="rounded-lg bg-[#F6F3EE] px-3 py-2 text-sm text-[#55524B]">
            10:00 AM, booked
          </p>
          <p className="rounded-lg bg-[#0066FF] px-3 py-2 text-sm font-semibold text-white">
            2:30 PM, 15 min, free call
          </p>
          <p className="rounded-lg bg-[#F6F3EE] px-3 py-2 text-sm text-[#55524B]">
            4:00 PM, open
          </p>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    title: "Plan and design",
    body: "We map your pages and design the look. You approve it first.",
    visual: (
      <div className="rounded-2xl border border-zinc-200/80 bg-white p-4">
        <div className="h-2.5 w-full rounded-full bg-[#111111]" />
        <div className="mt-3 h-16 rounded-xl bg-[#F6F3EE]" />
        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="h-10 rounded-lg bg-[#F6F3EE]" />
          <div className="h-10 rounded-lg bg-[#F6F3EE]" />
          <div className="h-10 rounded-lg bg-[#0066FF]/15" />
        </div>
        <p className="mt-3 text-xs font-medium text-[#55524B]">
          Wireframe preview, approved by you first
        </p>
      </div>
    ),
  },
  {
    number: "03",
    title: "Build and test",
    body: "We build, connect your email and booking, and test everything.",
    visual: (
      <div className="rounded-2xl border border-zinc-200/80 bg-white p-4">
        <ul className="space-y-2.5 text-sm text-[#111111]">
          <li className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0066FF] text-[11px] font-bold text-white">
              ✓
            </span>
            Mobile and desktop tested
          </li>
          <li className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0066FF] text-[11px] font-bold text-white">
              ✓
            </span>
            Forms and booking connected
          </li>
          <li className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0066FF] text-[11px] font-bold text-white">
              ✓
            </span>
            Speed check passed
          </li>
        </ul>
      </div>
    ),
  },
  {
    number: "04",
    title: "Launch and support",
    body: "We launch, show you how to update it, and stay on call.",
    visual: (
      <div className="rounded-2xl border border-zinc-200/80 bg-white p-4">
        <p className="inline-flex rounded-full bg-[#0066FF] px-3.5 py-1.5 text-xs font-bold text-white">
          Live + Handover
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[#55524B]">
          Your site is live, your logins are yours, and we stay on call.
        </p>
      </div>
    ),
  },
];

const faqs = [
  {
    question: "How much does a small business website cost?",
    answer:
      "Launch starts at $1,500 for up to 5 pages. Most sites with an AI assistant land in Growth, $3,000 to $8,000. Your quote is fixed in writing.",
  },
  {
    question: "How long until my website is live?",
    answer:
      "Most websites launch in 2 to 3 weeks. Sites with an AI assistant and CRM take 3 to 4 weeks. Custom platforms take 6 to 8 weeks.",
  },
  {
    question: "Do I own my website, code, and accounts?",
    answer:
      "Yes. You own 100% of the code, the domain, the hosting account, and your data. No lock-in, no monthly fee to keep your own website.",
  },
  {
    question: "What is an AI agent, and do I need one?",
    answer:
      "An AI agent answers questions, takes bookings, and collects lead details around the clock, using your own services and prices. It helps if you miss calls or repeat the same answers.",
  },
  {
    question: "Do you work outside the United States?",
    answer:
      "Yes. US small businesses come first, and we also work with businesses in Pakistan and worldwide. Our US office is in Middletown, Delaware.",
  },
  {
    question: "How do we start?",
    answer:
      "Book a free 15-minute consultation, or call +1 (302) 469-4003. We talk, then send a written quote with a fixed price and a launch date.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* 1. Hero: 7/5 Bento split */}
      <section className="pb-16 pt-24 sm:pt-32 lg:pb-12 lg:pt-8">
        <div className="wrap grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow animate-fade-up" style={{ animationDelay: "0ms" }}>
              Zepra Tech, a US-based digital agency
            </p>
            <h1
              className="h-display mt-5 max-w-2xl animate-fade-up"
              style={{ animationDelay: "90ms" }}
            >
              Build digital systems that{" "}
              <span className="text-[#0066FF]">move your business forward.</span>
            </h1>
            <p
              className="body-copy mt-6 max-w-xl animate-fade-up"
              style={{ animationDelay: "180ms" }}
            >
              Websites, AI assistants, and marketing for US small businesses. One
              fixed price, live in 2 to 3 weeks.
            </p>
            <div
              className="mt-9 flex flex-wrap items-center gap-3 animate-fade-up"
              style={{ animationDelay: "270ms" }}
            >
              <Link href="/contact" className="btn-primary">
                Book a Discovery Call
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#builds"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-7 py-3.5 text-base font-semibold text-[#111111] transition-colors hover:border-[#0066FF] hover:text-[#0066FF]"
              >
                Explore Live Demos
              </Link>
            </div>
            <p
              className="mt-6 text-sm text-[#55524B] animate-fade-up"
              style={{ animationDelay: "360ms" }}
            >
              {siteMeta.tagline} Delaware, USA · Engineering Studio in Lahore ·
              Fixed-Price Delivery.
            </p>
            <div
              className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#E2E8F0] pt-5 text-[15px] text-[#55524B] animate-fade-up"
              style={{ animationDelay: "450ms" }}
            >
              <span>
                <CountUp
                  to={24}
                  className="font-semibold text-[#111111]"
                />{" "}
                live demo websites
              </span>
              <span>
                <CountUp
                  to={1500}
                  prefix="$"
                  className="font-semibold text-[#111111]"
                />{" "}
                fixed price to start
              </span>
              <span>
                <CountUp
                  to={24}
                  className="font-semibold text-[#111111]"
                />{" "}
                hours reply time
              </span>
            </div>
          </div>

          {/* Hero visual: real PopShop screenshot in a phone frame */}
          <div
            className="mx-auto w-full animate-fade-up lg:col-span-5"
            style={{ animationDelay: "300ms" }}
          >
            <div className="mx-auto w-full max-w-[290px] overflow-hidden rounded-[28px] border border-zinc-200/80 bg-white shadow-[0_24px_64px_-32px_rgba(17,17,17,0.3)]">
              <div className="flex items-center justify-between gap-3 border-b border-zinc-200/80 px-4 py-2.5">
                <span className="text-[13px] font-medium text-[#55524B]">
                  PopShop Collective
                </span>
                <span className="shrink-0 rounded-full bg-[#0066FF]/10 px-2.5 py-1 text-xs font-semibold text-[#0066FF]">
                  Live preview
                </span>
              </div>
              <Image
                src="/demos/popshop-mobile.png"
                alt="PopShop Collective online store on a phone"
                width={390}
                height={759}
                priority
                className="aspect-[390/640] w-full object-cover object-top"
              />
            </div>
            {/* Proof chips sit below the phone frame in clear space, never on top of the screenshot */}
            <div className="mt-4 flex flex-wrap items-stretch justify-center gap-2.5">
              <div
                className="animate-float-soft rounded-2xl border border-zinc-200/80 bg-white px-3.5 py-2.5 shadow-[0_16px_40px_-20px_rgba(17,17,17,0.35)]"
                style={{ animationDelay: "0s" }}
              >
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0066FF]">
                  AI assistant
                </p>
                <p className="mt-1 text-sm font-semibold leading-snug text-[#111111]">
                  Lead booked at 11:42 PM
                </p>
              </div>
              <div
                className="animate-float-soft rounded-2xl border border-zinc-200/80 bg-white px-3.5 py-2.5 shadow-[0_16px_40px_-20px_rgba(17,17,17,0.35)]"
                style={{ animationDelay: "1.4s" }}
              >
                <p className="text-2xl font-semibold leading-none tracking-tight text-[#111111]">
                  #1
                </p>
                <p className="mt-1 text-xs font-medium text-[#55524B]">
                  on Google Maps
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Tech & Integrations trust bar (nas.com style) */}
      <TechStrip />

      {/* 3. Before vs After */}
      <section className="section">
        <div className="wrap">
          <FadeUp>
            <h2 className="h-section max-w-xl">Most agencies slow you down.</h2>
            <p className="body-copy mt-4 max-w-xl">
              Same business. Two ways to run it.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-[24px] border border-zinc-200/80 bg-[#EDEAE3] p-7 sm:p-8">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#55524B]">
                  Before: manual ops
                </p>
                <div className="mt-6 space-y-3">
                  <div className="rounded-2xl bg-white/70 p-4">
                    <p className="font-semibold text-[#111111]">Missed call, 11:42 PM</p>
                    <p className="mt-1 text-sm leading-relaxed text-[#55524B]">
                      A customer needed help after hours. Nobody answered.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/70 p-4">
                    <p className="font-semibold text-[#111111]">
                      6-week delay, then a new invoice
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[#55524B]">
                      Hourly billing that keeps growing. No launch date in writing.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/70 p-4">
                    <p className="font-semibold text-[#111111]">
                      Five tools, none of them connected
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[#55524B]">
                      Website, bookings, reviews, and ads all live apart.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-[24px] border border-[#0066FF]/25 bg-white p-7 shadow-[0_24px_64px_-32px_rgba(17,17,17,0.25)] sm:p-8">
                <p className="eyebrow">After: the Zepra system</p>
                <div className="mt-6 space-y-3">
                  <div className="rounded-2xl border border-zinc-200/80 bg-[#F6F3EE] p-4">
                    <p className="font-semibold text-[#111111]">
                      Fast mobile site, built to book
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[#55524B]">
                      Tap-to-call, instant quote, booking in 30 seconds.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-zinc-200/80 bg-white p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-semibold text-[#111111]">
                        Lead booked at 11:42 PM
                      </p>
                      <span className="shrink-0 rounded-full bg-[#0066FF]/10 px-2.5 py-1 text-xs font-semibold text-[#0066FF]">
                        AI assistant
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-[#55524B]">
                      The assistant answered, quoted, and booked while the shop
                      was closed.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-zinc-200/80 bg-white p-4">
                    <p className="font-semibold text-[#111111]">
                      Fixed milestones, live in 14-21 days
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[#55524B]">
                      One fixed price in writing, with a launch date you can plan
                      around.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 4. What we do: Bento */}
      <section className="section border-t border-[#E2E8F0] bg-[#FAFAFA]">
        <div className="wrap">
          <FadeUp>
            <h2 className="h-section">What we do</h2>
            <p className="body-copy mt-4 max-w-xl">
              Core systems. One accountable team.
            </p>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              <Link
                href="/services/web-development"
                className="card group block lg:col-span-2"
              >
                <div className="grid gap-6 sm:grid-cols-2 sm:items-center">
                  <div className="overflow-hidden rounded-2xl border border-zinc-200/80 bg-white">
                    <div className="flex items-center justify-between gap-3 border-b border-zinc-200/80 px-4 py-3">
                      <span className="text-sm font-semibold text-[#111111]">
                        PopShop Collective
                      </span>
                      <span className="shrink-0 rounded-full bg-[#F6F3EE] px-2.5 py-1 text-xs font-semibold text-[#55524B]">
                        Cart (2)
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 p-4">
                      <div>
                        <div className="h-16 rounded-xl bg-[#EDEAE3]" />
                        <p className="mt-2 text-sm font-semibold text-[#111111]">
                          Linen Shirt
                        </p>
                        <p className="text-xs text-[#55524B]">$48.00</p>
                      </div>
                      <div>
                        <div className="h-16 rounded-xl bg-[#0066FF]/10" />
                        <p className="mt-2 text-sm font-semibold text-[#111111]">
                          Canvas Tote
                        </p>
                        <p className="text-xs text-[#55524B]">$32.00</p>
                      </div>
                      <div>
                        <div className="h-16 rounded-xl bg-[#F6F3EE]" />
                        <p className="mt-2 text-sm font-semibold text-[#111111]">
                          Ceramic Mug
                        </p>
                        <p className="text-xs text-[#55524B]">$18.00</p>
                      </div>
                      <div>
                        <div className="h-16 rounded-xl bg-[#EDEAE3]" />
                        <p className="mt-2 text-sm font-semibold text-[#111111]">
                          Wool Scarf
                        </p>
                        <p className="text-xs text-[#55524B]">$56.00</p>
                      </div>
                    </div>
                    <div className="px-4 pb-4">
                      <span className="block rounded-full bg-[#0066FF] py-2.5 text-center text-sm font-semibold text-white">
                        Checkout, $80.00
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0066FF]">
                      Online store
                    </p>
                    <h3 className="mt-2.5 text-[22px] font-semibold text-[#111111]">
                      Web Engineering
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-[#55524B]">
                      Custom sites and stores. Mobile-first, fast, built to book.
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0066FF]">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>

              <Link href="/services/ai-agents-bots" className="card group block">
                <div className="overflow-hidden rounded-2xl border border-zinc-200/80 bg-[#F6F3EE]">
                  <div className="flex items-center justify-between gap-3 border-b border-zinc-200/80 bg-white px-4 py-3">
                    <span className="text-sm font-semibold text-[#111111]">
                      AI Assistant
                    </span>
                    <span className="shrink-0 rounded-full bg-[#0066FF]/10 px-2.5 py-1 text-xs font-semibold text-[#0066FF]">
                      Online
                    </span>
                  </div>
                  <div className="space-y-2.5 p-4">
                    <p className="ml-auto w-fit max-w-[90%] rounded-2xl rounded-br-md bg-white px-3.5 py-2.5 text-sm leading-relaxed text-[#111111] shadow-sm">
                      Can I book a haircut for Saturday at 11 AM?
                    </p>
                    <p className="w-fit max-w-[90%] rounded-2xl rounded-bl-md bg-[#0066FF] px-3.5 py-2.5 text-sm leading-relaxed text-white">
                      Saturday 11 AM is open. Booked for you, see you then.
                    </p>
                    <p className="w-fit rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#0066FF] shadow-sm">
                      Booking confirmed, added to the calendar
                    </p>
                  </div>
                </div>
                <h3 className="mt-6 text-[22px] font-semibold text-[#111111]">
                  AI Agents & Automation
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#55524B]">
                  Assistants trained on your prices. They answer and book, 24/7.
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0066FF]">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>

              <Link
                href="/services/digital-marketing"
                className="card group block lg:col-span-2"
              >
                <div className="grid gap-6 sm:grid-cols-2 sm:items-center">
                  <div className="overflow-hidden rounded-2xl border border-zinc-200/80 bg-white">
                    <div className="flex items-center gap-2.5 border-b border-zinc-200/80 px-4 py-3">
                      <Search className="h-4 w-4 shrink-0 text-[#55524B]" />
                      <span className="text-sm text-[#55524B]">
                        barbershops near me
                      </span>
                    </div>
                    <div className="space-y-2.5 p-4">
                      <div className="rounded-xl border-2 border-[#0066FF] bg-[#0066FF]/5 p-3.5">
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-sm font-semibold text-[#111111]">
                            1. SharpLine Barbershop
                          </p>
                          <span className="shrink-0 rounded-full bg-[#0066FF] px-2 py-0.5 text-xs font-bold text-white">
                            #1
                          </span>
                        </div>
                        <p className="mt-1 text-xs leading-relaxed text-[#55524B]">
                          4.9 stars, 212 reviews, open now, 0.3 mi
                        </p>
                      </div>
                      <div className="rounded-xl border border-zinc-200/80 p-3.5">
                        <p className="text-sm font-semibold text-[#111111]">
                          2. City Cuts
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-[#55524B]">
                          4.6 stars, 148 reviews, 0.8 mi
                        </p>
                      </div>
                      <div className="rounded-xl border border-zinc-200/80 p-3.5">
                        <p className="text-sm font-semibold text-[#111111]">
                          3. Main Street Barbers
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-[#55524B]">
                          4.5 stars, 96 reviews, 1.2 mi
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0066FF]">
                      #1 on Google Maps
                    </p>
                    <h3 className="mt-2.5 text-[22px] font-semibold text-[#111111]">
                      Growth & Local SEO
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-[#55524B]">
                      Local SEO, Maps, and ads. Nearby buyers find you first.
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0066FF]">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>

              <Link href="/services" className="card group flex flex-col justify-between">
                <div>
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0066FF]">
                    12 services
                  </p>
                  <h3 className="mt-2.5 text-[22px] font-semibold text-[#111111]">
                    Everything else, same team.
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-[#55524B]">
                    E-commerce, outreach, design, video, support. One plan,
                    one price.
                  </p>
                </div>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0066FF]">
                  All services
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 5. How it works */}
      <section className="section border-t border-[#E2E8F0]">
        <div className="wrap">
          <FadeUp>
            <p className="eyebrow">01 // Process</p>
            <h2 className="h-section mt-4">From first call to launch</h2>
            <p className="body-copy mt-4 max-w-xl">
              You run your business. We handle the rest.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <article key={step.number} className="flex flex-col">
                  <div className="border-t-2 border-[#0066FF] pt-6">
                    <p className="font-mono text-sm font-semibold text-[#0066FF]">{step.number}</p>
                    <h3 className="mt-3 text-xl font-semibold text-[#111111]">{step.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-[#55524B]">{step.body}</p>
                  </div>
                  <div className="mt-5">{step.visual}</div>
                </article>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 6. Featured live builds */}
      <section id="builds" className="section border-t border-[#E2E8F0] bg-[#FAFAFA]">
        <div className="wrap">
          <FadeUp>
            <p className="eyebrow">02 // Portfolio</p>
            <h2 className="h-section mt-4 max-w-2xl">Built to inspect. Ready to launch.</h2>
            <p className="body-copy mt-4 max-w-xl">
              Six of 24 live builds. Hover a card to preview the live site,
              or open one and use it like a customer.
            </p>
            <FeaturedBuilds demos={featuredDemos} industries={featuredIndustries} />
          </FadeUp>
        </div>
      </section>

      {/* 6b. Interactive AI sandbox: dark anchor section */}
      <section className="bg-[#0B0B0F] py-24 lg:py-[120px]">
        <div className="wrap">
          <FadeUp>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#7FB3FF]">
              03 // AI Lab
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:text-5xl">
              Test the AI assistant.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-[1.6] text-white/70 sm:text-lg">
              Pick a business. Tap a question. Watch it book.
            </p>
            <div className="mt-12">
              <AiSandbox />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 6c. ROI calculator */}
      <section className="section border-t border-[#E2E8F0]">
        <div className="wrap">
          <FadeUp>
            <h2 className="h-section max-w-2xl">Missed calls cost money.</h2>
            <p className="body-copy mt-4 max-w-xl">
              Every missed call is a job your competitor just took.
            </p>
            <div className="mt-12">
              <RoiCalculator />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 7. Pricing: honest numbers only */}
      <section className="section border-t border-[#E2E8F0] bg-[#FAFAFA]">
        <div className="wrap">
          <FadeUp>
            <p className="eyebrow">05 // Pricing</p>
            <h2 className="h-section mt-4">Fixed prices. Fast replies.</h2>
            <p className="body-copy mt-4 max-w-xl">
              No hourly billing. No surprises. Price in writing first.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {pricingTiers
                .filter((tier) => tier.name !== "Enterprise")
                .map((tier) => (
                  <PricingCard key={tier.name} tier={tier} />
                ))}
            </div>
            <p className="mt-8 text-center text-[15px] text-[#55524B]">
              Enterprise, $18,000+, scoped per project for multi-location and
              multi-market businesses.{" "}
              <Link href="/pricing" className="font-semibold text-[#0066FF]">
                See all pricing
              </Link>
            </p>
          </FadeUp>
        </div>
      </section>

      {/* 7b. Team and guarantees */}
      <section className="section border-t border-[#E2E8F0]">
        <div className="wrap">
          <FadeUp>
            <h2 className="h-section max-w-2xl">Built by a senior team.</h2>
            <p className="body-copy mt-4 max-w-xl">
              No anonymous outsourcing. Talk to your builders.
            </p>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {teamMembers.map((member) => (
                <article key={member.name} className="card flex gap-6">
                  <TeamPhoto
                    src="/team/muhammad-daud-ali-lashari.jpg"
                    name={member.name}
                  />
                  <div>
                    <h3 className="text-[22px] font-semibold leading-snug text-[#111111]">
                      {member.name}
                    </h3>
                    <p className="mt-1 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#0066FF]">
                      {member.role}
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-[#55524B]">
                      {member.bio}
                    </p>
                    {member.linkedin ? (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0066FF]"
                      >
                        LinkedIn profile
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
              <div className="grid gap-6 sm:grid-cols-2">
                {studioStandards.map((standard) => (
                  <article key={standard.number} className="card">
                    <p className="font-mono text-sm font-semibold text-[#0066FF]">
                      {standard.number}
                    </p>
                    <h3 className="mt-3 text-lg font-semibold text-[#111111]">
                      {standard.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#55524B]">
                      {standard.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            {SHOW_REVIEWS && (
              <div className="mt-12 rounded-[24px] border border-zinc-200/80 bg-white p-7 sm:p-8">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0066FF]">
                  What clients say
                </p>
                <h3 className="mt-3 text-[22px] font-semibold text-[#111111]">
                  Reviews from recent launches.
                </h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-[#55524B]">
                  We ask every client for a short review after launch. New reviews
                  are added here as they come in.
                </p>
              </div>
            )}
          </FadeUp>
        </div>
      </section>

      {/* 7c. Video strip: hidden until real videos exist (SHOW_VIDEOS) */}
      {SHOW_VIDEOS && (
        <section className="section border-t border-[#E2E8F0] bg-[#FAFAFA]">
          <div className="wrap">
            <FadeUp>
              <h2 className="h-section max-w-2xl">See the work in 60 seconds.</h2>
              <p className="body-copy mt-4 max-w-xl">
                The founder, and two walkthroughs. No sales talk.
              </p>
              <VideoStrip />
            </FadeUp>
          </div>
        </section>
      )}

      {/* 8. FAQ */}
      <section className="section border-t border-[#E2E8F0]">
        <div className="wrap">
          <FadeUp>
            <h2 className="h-section">Questions, answered.</h2>
            <Faq items={faqs} />
          </FadeUp>
        </div>
      </section>

      {/* 9. Final CTA */}
      <FinalCta />
    </>
  );
}
