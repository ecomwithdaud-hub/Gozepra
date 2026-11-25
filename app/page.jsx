import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AiSandbox } from "@/components/v3/ai-sandbox";
import { Faq } from "@/components/v3/faq";
import { FeaturedBuilds } from "@/components/v3/featured-builds";
import { FadeUp } from "@/components/v3/motion";
import { PricingCard } from "@/components/v3/pricing";
import { RoiCalculator } from "@/components/v3/roi-calculator";
import { FinalCta } from "@/components/v3/shared";
import { TeamPhoto } from "@/components/v3/team-photo";
import { TechStrip } from "@/components/v3/tech-strip";
import { VideoStrip } from "@/components/v3/video-strip";
import {
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
    body: "Code, domain, accounts, and data. 100% yours, with no lock in.",
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

const industryPills = [
  "Home Services",
  "Clinic & MedSpa",
  "E-Commerce",
  "Auto",
  "Restaurant & Hospitality",
  "Fitness & Coaching",
];

const logoWall = [
  "PureFlow Plumbing",
  "EaseAway Massage",
  "PopShop Collective",
  "WrenchWay Auto",
  "GatherRound Catering",
  "ForgeFit Training",
  "SharpLine Barbershop",
  "GlamCraft Artistry",
];

const steps = [
  {
    number: "01",
    title: "Free 15 minute call",
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
      "Launch starts at $2,500 for up to 5 pages. Most sites with an AI assistant land in Growth, $5,000 to $12,000. Your quote is fixed in writing.",
  },
  {
    question: "How long until my website is live?",
    answer:
      "Most websites launch in 2 to 3 weeks. Sites with an AI assistant and CRM take 3 to 4 weeks. Custom platforms take 6 to 8 weeks.",
  },
  {
    question: "Do I own my website, code, and accounts?",
    answer:
      "Yes. You own 100% of the code, the domain, the hosting account, and your data. No lock in, no monthly fee to keep your own website.",
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
      "Book a free 15 minute consultation, or call +1 (302) 469-4003. We talk, then send a written quote with a fixed price and a launch date.",
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
      <section className="pb-16 pt-24 sm:pt-32 lg:pb-24 lg:pt-[140px]">
        <div className="wrap grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow animate-fade-up">Zepra Tech, a US based digital agency</p>
            <h1 className="h-display mt-5 max-w-2xl animate-fade-up">
              Build digital systems that{" "}
              <span className="text-[#0066FF]">move your business forward.</span>
            </h1>
            <p className="body-copy mt-6 max-w-xl animate-fade-up">
              Websites, AI assistants, and marketing for US small businesses. One
              fixed price, live in 2 to 3 weeks.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3 animate-fade-up">
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
            <p className="mt-6 text-sm text-[#55524B]">
              {siteMeta.tagline} US office in Middletown, Delaware. Engineering
              team in Lahore.
            </p>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#E2E8F0] pt-6 text-[15px] text-[#55524B]">
              <span>
                <span className="font-semibold text-[#111111]">24</span> live demo
                websites
              </span>
              <span>
                <span className="font-semibold text-[#111111]">$2,500</span> fixed
                price to start
              </span>
              <span>
                <span className="font-semibold text-[#111111]">24 hours</span>{" "}
                reply time
              </span>
            </div>
          </div>

          {/* Hero visual: real SharpLine screenshot in a phone frame */}
          <div className="relative mx-auto w-full max-w-[340px] animate-fade-up lg:col-span-5">
            <div className="overflow-hidden rounded-[28px] border border-zinc-200/80 bg-white shadow-[0_24px_64px_-32px_rgba(17,17,17,0.3)]">
              <div className="flex items-center justify-between gap-3 border-b border-zinc-200/80 px-4 py-3">
                <span className="text-[13px] font-medium text-[#55524B]">
                  SharpLine Barbershop
                </span>
                <span className="shrink-0 rounded-full bg-[#0066FF]/10 px-2.5 py-1 text-xs font-semibold text-[#0066FF]">
                  Live preview
                </span>
              </div>
              <Image
                src="/demos/sharpline-mobile.png"
                alt="SharpLine Barbershop booking website on a phone"
                width={390}
                height={844}
                priority
                className="aspect-[390/640] w-full object-cover object-top"
              />
            </div>
            <div className="absolute -left-4 top-24 rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-[0_16px_40px_-20px_rgba(17,17,17,0.35)] sm:-left-10">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0066FF]">
                AI assistant
              </p>
              <p className="mt-1.5 text-sm font-semibold leading-snug text-[#111111]">
                Lead booked at 11:42 PM
              </p>
            </div>
            <div className="absolute -right-3 bottom-16 rounded-2xl border border-zinc-200/80 bg-white px-4 py-3 shadow-[0_16px_40px_-20px_rgba(17,17,17,0.35)] sm:-right-8">
              <p className="text-2xl font-semibold tracking-tight text-[#111111]">#1</p>
              <p className="text-xs font-medium text-[#55524B]">on Google Maps</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Live industry builds */}
      <section id="builds" className="border-y border-[#E2E8F0] bg-[#FAFAFA] py-16 sm:py-20">
        <div className="wrap text-center">
          <FadeUp>
            <h2 className="h-section">24+ Live Industry Builds</h2>
            <p className="body-copy mx-auto mt-4 max-w-xl">
              Test before you hire. Open any build and use it like a customer
              would.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
              {industryPills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-sm font-medium text-[#111111]"
                >
                  {pill}
                </span>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {logoWall.map((name) => (
                <span
                  key={name}
                  className="text-lg font-semibold tracking-tight text-[#9A978F]"
                >
                  {name}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

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
                      Tap to call, instant quote, booking in 30 seconds.
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
              Three services. One team. One fixed price.
            </p>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              <Link
                href="/services/web-development"
                className="card group block lg:col-span-2"
              >
                <div className="grid gap-6 sm:grid-cols-2 sm:items-center">
                  <div className="overflow-hidden rounded-2xl border border-zinc-200/80">
                    <Image
                      src="/demos/popshop-desktop.png"
                      alt="PopShop Collective online store screenshot"
                      width={1440}
                      height={900}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0066FF]">
                      Online store
                    </p>
                    <h3 className="mt-2.5 text-[22px] font-semibold text-[#111111]">
                      Web Engineering
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-[#55524B]">
                      Custom sites and stores. Mobile first, fast, built to book.
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0066FF]">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>

              <Link href="/services/ai-agents-bots" className="card group block">
                <div className="mx-auto w-full max-w-[220px] overflow-hidden rounded-2xl border border-zinc-200/80">
                  <Image
                    src="/demos/easeaway-mobile.png"
                    alt="EaseAway massage booking website on a phone"
                    width={390}
                    height={844}
                    loading="lazy"
                    className="aspect-[390/560] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  />
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
                  <div className="overflow-hidden rounded-2xl border border-zinc-200/80">
                    <Image
                      src="/demos/glamcraft-desktop.png"
                      alt="GlamCraft Artistry website screenshot"
                      width={1440}
                      height={900}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    />
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
            <h2 className="h-section">From first call to launch</h2>
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
      <section className="section border-t border-[#E2E8F0] bg-[#FAFAFA]">
        <div className="wrap">
          <FadeUp>
            <h2 className="h-section max-w-2xl">Built to inspect. Ready to launch.</h2>
            <p className="body-copy mt-4 max-w-xl">
              Six of 24 live builds. Open one. Use it like a customer.
            </p>
            <FeaturedBuilds demos={featuredDemos} industries={featuredIndustries} />
          </FadeUp>
        </div>
      </section>

      <TechStrip />

      {/* 6b. Interactive AI sandbox: dark anchor section */}
      <section className="bg-[#0B0B0F] py-24 lg:py-[120px]">
        <div className="wrap">
          <FadeUp>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#7FB3FF]">
              02 // AI Lab
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
            <h2 className="h-section">Fixed prices. Fast replies.</h2>
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
              Enterprise, $25,000+, scoped per project for multi location and
              multi market businesses.{" "}
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

            <div className="mt-12 grid gap-6 border-t border-[#E2E8F0] pt-10 sm:grid-cols-3">
              <div>
                <p className="text-lg font-semibold text-[#111111]">
                  100% code ownership
                </p>
                <p className="mt-1.5 text-[15px] leading-relaxed text-[#55524B]">
                  Your code, your domain, your accounts. No lock in.
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold text-[#111111]">
                  Fixed written quote
                </p>
                <p className="mt-1.5 text-[15px] leading-relaxed text-[#55524B]">
                  The price is agreed in writing before we start.
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold text-[#111111]">
                  Direct engineer access
                </p>
                <p className="mt-1.5 text-[15px] leading-relaxed text-[#55524B]">
                  You talk to the team building your site, not a sales desk.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 7c. Video strip */}
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
