import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Faq } from "@/components/v3/faq";
import { FinalCta } from "@/components/v3/shared";
import { siteMeta } from "@/lib/site";

const proofDemo = {
  name: "PureFlow Plumbing Co.",
  trade: "Plumber",
  city: "Denver, CO",
  href: "https://pureflow-plumbing-demo.vercel.app/",
};

const industryPills = ["Home Services", "Clinics", "E-Commerce", "Auto", "SaaS"];
  "PureFlow Plumbing",
  "BrightVolt Electric",
  "PeakShield Roofing",
  "AirEase HVAC",
  "FreshHue Painting",
  "HandyFix Pros",
  "GreenScape Lawn Care",
  "WrenchWay Auto Repair",
];

const whatWeDo = [
  {
    title: "Websites",
    body: "Custom websites and online stores for US small businesses. Mobile first, fast, and built to take calls and bookings.",
    href: "/services/web-development",
  },
  {
    title: "AI assistants",
    body: "AI assistants trained on your services and prices. They answer questions and book leads around the clock.",
    href: "/services/ai-agents-bots",
  },
  {
    title: "Growth marketing",
    body: "Local SEO, Google Maps, and Meta ads that put your business in front of nearby buyers.",
    href: "/services/digital-marketing",
  },
];

const steps = [
  {
    number: "01",
    title: "Free 15 minute call",
    body: "Tell us what your business does and what the website must do. No jargon, no pressure.",
  },
  {
    number: "02",
    title: "Plan and design",
    body: "We map your pages and design the look. You approve the design before we build anything.",
  },
  {
    number: "03",
    title: "Build and test",
    body: "We build the site, connect your email and booking, and test it on phones and desktops.",
  },
  {
    number: "04",
    title: "Launch and support",
    body: "We launch, show you how to update it, and stay on call for changes.",
  },
];

const results = [
  { value: "24", label: "live demo websites" },
  { value: "$2,500", label: "fixed price to start" },
  { value: "2-3 weeks", label: "from call to launch" },
  { value: "24 hours", label: "reply time" },
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

function BrowserFrame({ href, title, children }) {
  return (
    <div className="overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white shadow-[0_24px_64px_-32px_rgba(17,17,17,0.25)]">
      <div className="flex items-center gap-3 border-b border-[#E2E8F0] px-4 py-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-[#E2E8F0]" />
          <span className="h-3 w-3 rounded-full bg-[#E2E8F0]" />
          <span className="h-3 w-3 rounded-full bg-[#E2E8F0]" />
        </span>
        <span className="min-w-0 flex-1 truncate rounded-full bg-[#F6F3EE] px-4 py-1.5 text-center text-[13px] text-[#55524B]">
          {href.replace("https://", "")}
        </span>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-[#0066FF]"
        >
          Open live demo
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
      {children}
      <p className="sr-only">{title}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* 1. Hero */}
      <section className="pb-16 pt-24 sm:pt-36 lg:pt-[160px]">
        <div className="wrap text-center">
          <p className="eyebrow animate-fade-up">Zepra Tech, a US based digital agency</p>
          <h1 className="h-display mx-auto mt-5 max-w-4xl animate-fade-up">
            Build digital systems that{" "}
            <span className="text-[#0066FF]">move your business forward.</span>
          </h1>
          <p className="body-copy mx-auto mt-6 max-w-2xl animate-fade-up">
            Websites, AI assistants, and marketing for US small businesses. One
            fixed price, live in 2 to 3 weeks.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 animate-fade-up">
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

          {/* Hero visual: one CSS-built dashboard preview */}
          <div className="mx-auto mt-14 max-w-5xl animate-fade-up text-left">
            <div className="overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white shadow-[0_24px_64px_-32px_rgba(17,17,17,0.25)]">
              <div className="flex items-center gap-3 border-b border-[#E2E8F0] px-4 py-3">
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="h-3 w-3 rounded-full bg-[#E2E8F0]" />
                  <span className="h-3 w-3 rounded-full bg-[#E2E8F0]" />
                  <span className="h-3 w-3 rounded-full bg-[#E2E8F0]" />
                </span>
                <span className="min-w-0 flex-1 truncate text-center text-[13px] font-medium text-[#55524B]">
                  Example: a local plumbing business
                </span>
                <span className="shrink-0 rounded-full bg-[#0066FF]/10 px-3 py-1 text-xs font-semibold text-[#0066FF]">
                  Live preview
                </span>
              </div>
              <div className="grid gap-4 p-5 sm:grid-cols-[1fr_1.2fr] sm:p-6">
                {/* Mini mobile site */}
                <div className="mx-auto w-full max-w-[280px] rounded-[20px] border border-[#E2E8F0] bg-[#F6F3EE] p-4">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0066FF]">
                    Mobile site
                  </p>
                  <p className="mt-3 text-lg font-semibold leading-tight text-[#111111]">
                    PureFlow Plumbing Co.
                  </p>
                  <p className="mt-1 text-sm text-[#55524B]">
                    Denver, CO | Emergency calls | Open now
                  </p>
                  <div className="mt-4 rounded-2xl bg-white p-3 shadow-sm">
                    <p className="text-sm font-semibold text-[#111111]">
                      Book a visit in 30 seconds
                    </p>
                    <p className="mt-1 text-[13px] leading-relaxed text-[#55524B]">
                      Pick a time. Get upfront pricing before any work starts.
                    </p>
                  </div>
                  <span className="mt-4 block rounded-full bg-[#0066FF] py-2.5 text-center text-sm font-semibold text-white">
                    Tap to call
                  </span>
                </div>
                {/* AI booking + SEO cards */}
                <div className="flex flex-col gap-4">
                  <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0066FF]">
                        AI assistant
                      </p>
                      <span className="rounded-full bg-[#0066FF]/10 px-2.5 py-1 text-xs font-semibold text-[#0066FF]">
                        11:42 PM
                      </span>
                    </div>
                    <p className="mt-3 text-base font-semibold leading-snug text-[#111111]">
                      New lead booked while the shop was closed.
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#55524B]">
                      "My water heater is leaking. Can someone come tomorrow
                      morning?" Booked, confirmed, added to the calendar.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
                      <p className="text-3xl font-semibold tracking-tight text-[#111111]">
                        #1
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-[#55524B]">
                        on Google Maps for local searches
                      </p>
                    </div>
                    <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
                      <p className="text-3xl font-semibold tracking-tight text-[#111111]">
                        2-3 weeks
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-[#55524B]">
                        from first call to a live website
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-[13px] text-[#55524B]">
              Illustrative example of a website and AI assistant we build. Not
              a real client result.
            </p>
          </div>

          {/* Trust bar */}
          <div className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-[#E2E8F0] pt-8 text-[15px] text-[#55524B]">
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
      </section>

      {/* 2. Live industry builds */}
      <section id="builds" className="border-y border-[#E2E8F0] py-16 sm:py-20">
        <div className="wrap text-center">
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
        </div>
      </section>

      {/* 3. Before vs After */}
      <section className="section">
        <div className="wrap">
          <h2 className="h-section max-w-xl">Most agencies slow you down.</h2>
          <p className="body-copy mt-4 max-w-xl">
            Same business, two ways of running it. One leaks leads, the other
            books them.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-[24px] border border-[#E2E8F0] bg-[#EDEAE3] p-7 sm:p-8">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#55524B]">
                Before: manual ops
              </p>
              <div className="mt-6 space-y-3">
                <div className="rounded-2xl bg-white/70 p-4">
                  <p className="font-semibold text-[#111111]">
                    Missed call, 11:42 PM
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#55524B]">
                    A customer needed a plumber. Nobody answered, so they
                    called the next listing.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/70 p-4">
                  <p className="font-semibold text-[#111111]">
                    6-week delay, then a new invoice
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#55524B]">
                    Hourly billing that keeps growing, with no launch date in
                    writing.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/70 p-4">
                  <p className="font-semibold text-[#111111]">
                    Five tools, none of them connected
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#55524B]">
                    Website, bookings, reviews, and ads all live in separate
                    places.
                  </p>
                </div>
              </div>
              <p className="mt-6 text-[13px] text-[#55524B]">
                Illustrative example of typical agency problems.
              </p>
            </div>
            <div className="rounded-[24px] border border-[#0066FF]/25 bg-white p-7 shadow-[0_24px_64px_-32px_rgba(17,17,17,0.25)] sm:p-8">
              <p className="eyebrow">After: the Zepra system</p>
              <div className="mt-6 space-y-3">
                <div className="rounded-2xl border border-[#E2E8F0] bg-[#F6F3EE] p-4">
                  <p className="font-semibold text-[#111111]">
                    Fast mobile site, built to book
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#55524B]">
                    Tap to call, instant quote, and a booking form that takes
                    30 seconds.
                  </p>
                </div>
                <div className="rounded-2xl border border-[#E2E8F0] bg-white p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-[#111111]">
                      Lead booked at 11:42 PM
                    </p>
                    <span className="shrink-0 rounded-full bg-[#0066FF]/10 px-2.5 py-1 text-xs font-semibold text-[#0066FF]">
                      AI assistant
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-[#55524B]">
                    The assistant answered, quoted, and booked the visit while
                    the shop was closed.
                  </p>
                </div>
                <div className="rounded-2xl border border-[#E2E8F0] bg-white p-4">
                  <p className="font-semibold text-[#111111]">
                    Fixed milestones, live in 14-21 days
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#55524B]">
                    One fixed price in writing, with a launch date you can
                    plan around.
                  </p>
                </div>
              </div>
              <p className="mt-6 text-[13px] text-[#55524B]">
                Illustrative example of a Zepra build, not a client result.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What we do */}
      <section className="section border-t border-[#E2E8F0]">
        <div className="wrap">
          <h2 className="h-section">What we do</h2>
          <p className="body-copy mt-4 max-w-xl">
            Three services, one team. Pick one, or combine them into a single
            fixed price plan.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {whatWeDo.map((service) => (
              <Link key={service.title} href={service.href} className="card group block">
                <h3 className="text-[22px] font-semibold text-[#111111]">
                  {service.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#55524B]">
                  {service.body}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0066FF]">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How it works */}
      <section className="section border-t border-[#E2E8F0]">
        <div className="wrap">
          <h2 className="h-section">From first call to launch</h2>
          <p className="body-copy mt-4 max-w-xl">
            You keep running your business. We handle the website, the AI, and
            the technical work.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article key={step.number} className="border-t-2 border-[#0066FF] pt-6">
                <p className="text-sm font-semibold text-[#0066FF]">{step.number}</p>
                <h3 className="mt-3 text-xl font-semibold text-[#111111]">{step.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-[#55524B]">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Proof: one large live demo */}
      <section className="section border-t border-[#E2E8F0]">
        <div className="wrap">
          <h2 className="h-section max-w-2xl">Look at real websites before you decide</h2>
          <p className="body-copy mt-4 max-w-xl">
            One of 24 live demo websites we built. Open it and use it like a
            customer would.
          </p>
          <div className="mt-12">
            <BrowserFrame href={proofDemo.href} title={proofDemo.name}>
              <iframe
                src={proofDemo.href}
                title={`${proofDemo.name} live demo website`}
                loading="lazy"
                className="h-[420px] w-full border-0 bg-white sm:h-[560px]"
              />
            </BrowserFrame>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <p className="text-[15px] text-[#55524B]">
                <span className="font-semibold text-[#111111]">Live demo:</span>{" "}
                {proofDemo.name}, {proofDemo.trade}, {proofDemo.city}
              </p>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#0066FF]"
              >
                See all 24 live demos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Results: honest numbers only */}
      <section className="section border-t border-[#E2E8F0]">
        <div className="wrap">
          <h2 className="h-section">Fixed prices. Fast replies.</h2>
          <p className="body-copy mt-4 max-w-xl">
            No hourly billing. No surprise invoices. The price is agreed in
            writing before we start.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((result) => (
              <div key={result.label} className="border-t border-[#E2E8F0] pt-6">
                <p className="text-4xl font-semibold tracking-tight text-[#111111]">
                  {result.value}
                </p>
                <p className="mt-2 text-[15px] text-[#55524B]">{result.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-[15px] text-[#55524B]">
            Launch from $2,500. Growth $5,000 to $12,000. Scale $12,000 to
            $25,000. Enterprise $25,000+.
          </p>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="section border-t border-[#E2E8F0]">
        <div className="wrap">
          <h2 className="h-section">Questions, answered.</h2>
          <Faq items={faqs} />
        </div>
      </section>

      {/* 9. Final CTA */}
      <FinalCta />
    </>
  );
}
