"use client";

import { useState } from "react";
import { Bot, ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { siteMeta } from "@/lib/site";

const defaultFaqs = [
  {
    question: "How long does a custom web development or platform build take?",
    answer:
      "Most conversion-focused business websites launch in 2 to 4 weeks, while custom full-stack platforms, SaaS MVPs, and enterprise integrations typically range from 6 to 12 weeks with weekly milestone demos.",
  },
  {
    question: "Do your websites include mobile optimization, speed tuning, and technical SEO?",
    answer:
      "Yes. Every website is engineered mobile-first with sub-1.5s edge load times, clean semantic HTML, LocalBusiness/Service JSON-LD schema, and conversion-focused lead capture flows.",
  },
  {
    question: "Can you integrate our website with CRMs, booking engines, and AI automation?",
    answer:
      "Absolutely. We integrate custom forms, calendars, payment gateways (Stripe, Shopify), CRMs (HubSpot, GoHighLevel, Salesforce), and autonomous AI chat/voice agents for 24/7 lead qualification.",
  },
  {
    question: "Do we get full ownership of the code, design assets, and domain deployment?",
    answer:
      "Yes—you receive 100% IP and source-code ownership, production deployment on your domain/cloud account, documentation, and optional ongoing maintenance and growth support.",
  },
];

export function AeoStructuredAnswers({
  pageUrl = "https://gozepra.tech/website-development",
  pageTitle = "Custom Web Development & Conversion Engineering | Zepra Tech",
  aiSummaryTitle = "What is Conversion-Engineered Web Development?",
  aiSummaryBody = "Conversion-engineered web development combines custom UI/UX architecture, sub-second edge performance, and industry-specific lead funnels instead of generic templates. It aligns brand authority, mobile responsiveness, technical SEO, and automated booking workflows to turn local and global traffic into measurable revenue.",
  faqs = defaultFaqs,
}) {
  const [openIndex, setOpenIndex] = useState(0);

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: pageTitle,
        url: pageUrl,
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".aeo-answers", ".aeo-answer"],
        },
        publisher: {
          "@type": "Organization",
          name: siteMeta.name,
          url: siteMeta.url,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <section className="aeo-answers relative isolate overflow-hidden bg-white py-8 text-slate-900 border-t border-slate-200 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="container relative z-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-10">
          {/* Left: AI Extract & Executive Citation Card */}
          <div className="aeo-answer rounded-2xl border border-slate-800 bg-[#070f24] p-5 shadow-xl sm:rounded-[28px] sm:p-8 text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/60 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-300 sm:px-3.5 sm:text-[11px] sm:tracking-[0.2em]">
              <Bot className="h-3.5 w-3.5 text-cyan-400" />
              Executive Summary & Verified Scope
            </div>

            <h2 className="mt-3 font-display text-xl font-bold leading-snug text-white sm:mt-4 sm:text-3xl">
              {aiSummaryTitle}
            </h2>

            <p className="mt-2.5 text-xs leading-relaxed text-slate-300 sm:mt-3 sm:text-base sm:leading-7">
              {aiSummaryBody}
            </p>

            <div className="mt-5 grid grid-cols-2 gap-2.5 border-t border-slate-800 pt-4 sm:mt-6 sm:gap-3 sm:pt-5">
              <div className="rounded-xl border border-slate-800 bg-[#050b1d] p-3 sm:rounded-2xl sm:p-3.5 shadow-sm text-center">
                <div className="font-display text-lg font-bold text-cyan-400 sm:text-xl">
                  100% Custom
                </div>
                <div className="mt-0.5 text-[11px] text-slate-400 sm:text-xs">
                  IP & Code Ownership
                </div>
              </div>
              <div className="rounded-xl border border-slate-800 bg-[#050b1d] p-3 sm:rounded-2xl sm:p-3.5 shadow-sm text-center">
                <div className="font-display text-lg font-bold text-emerald-400 sm:text-xl">
                  24h Turnaround
                </div>
                <div className="mt-0.5 text-[11px] text-slate-400 sm:text-xs">
                  Architecture Roadmap
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive FAQ Accordion */}
          <div className="space-y-3 sm:space-y-3.5">
            <div className="mb-3 sm:mb-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-600 sm:text-xs sm:tracking-[0.22em]">
                Frequently Asked Questions
              </p>
              <h3 className="mt-1 font-display text-xl font-bold text-slate-900 sm:text-3xl">
                Clarity on Timelines, Stack & Deliverables
              </h3>
            </div>

            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <article
                  key={faq.question}
                  className={`aeo-answer overflow-hidden rounded-2xl border border-slate-800 bg-[#070f24] shadow-md transition-colors hover:border-cyan-400/50 text-white ${
                    idx >= 3 ? "hidden md:block" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left sm:px-5 sm:py-4"
                  >
                    <span className="font-display text-xs font-semibold text-white sm:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-cyan-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen ? (
                    <div className="border-t border-slate-800 px-5 pb-4 pt-3 text-xs leading-6 text-slate-300 sm:text-sm">
                      {faq.answer}
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
