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

const logoWall = [
  "PureFlow Plumbing",
  "BrightVolt Electric",
  "PeakShield Roofing",
  "AirEase HVAC",
  "FreshHue Painting",
  "HandyFix Pros",
  "GreenScape Lawn Care",
  "WrenchWay Auto Repair",
];

const problemRows = [
  {
    usual: "Weeks of meetings before any work starts.",
    zepra: "One call, then a fixed price in writing.",
  },
  {
    usual: "Hourly billing that keeps growing.",
    zepra: "You pay the quoted price, nothing more.",
  },
  {
    usual: "A website that looks good and sells nothing.",
    zepra: "Built to turn visits into calls and bookings.",
  },
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
          <div className="mt-9 animate-fade-up">
            <Link href="/contact" className="btn-primary">
              Book a free consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-6 text-sm text-[#55524B]">
            {siteMeta.tagline} 24 live demo websites. Fixed prices from $2,500.
            Reply within 24 hours.
          </p>
        </div>
      </section>

      {/* 2. Logo wall */}
      <section className="border-y border-[#E2E8F0] py-10">
        <div className="wrap">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.12em] text-[#55524B]">
            Websites we built
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {logoWall.map((name) => (
              <span
                key={name}
                className="text-lg font-semibold tracking-tight text-[#9A978F]"
              >
                {name}
              </span>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-[#55524B]">
            Live demo websites. Examples of our work, not our clients.
          </p>
        </div>
      </section>

      {/* 3. Problem vs Zepra */}
      <section className="section">
        <div className="wrap">
          <h2 className="h-section max-w-xl">Most agencies slow you down.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-[24px] border border-[#E2E8F0] p-7 sm:p-8">
              <p className="eyebrow !text-[#55524B]">Most agencies</p>
              <ul className="mt-5 space-y-4">
                {problemRows.map((row) => (
                  <li
                    key={row.usual}
                    className="border-b border-[#E2E8F0] pb-4 text-lg leading-relaxed text-[#55524B] last:border-0 last:pb-0"
                  >
                    {row.usual}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[24px] border border-[#0066FF]/25 bg-white p-7 sm:p-8">
              <p className="eyebrow">Zepra Tech</p>
              <ul className="mt-5 space-y-4">
                {problemRows.map((row) => (
                  <li
                    key={row.zepra}
                    className="border-b border-[#E2E8F0] pb-4 text-lg font-medium leading-relaxed text-[#111111] last:border-0 last:pb-0"
                  >
                    {row.zepra}
                  </li>
                ))}
              </ul>
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
