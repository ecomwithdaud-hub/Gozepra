"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

const niches = [
  {
    id: "home-services",
    label: "Home Services",
    business: "Example: a plumbing business",
    prompts: [
      {
        question: "My water heater is leaking. Can someone come today?",
        answer:
          "Yes. A licensed plumber can come today between 2 and 4 PM. The visit fee is $49, applied to the repair. Shall I book it?",
      },
      {
        question: "How much does a drain cleaning cost?",
        answer:
          "Drain cleaning starts at $89, fixed in writing before we start. Want a 15-minute call to confirm the job?",
      },
      {
        question: "Do you work on weekends?",
        answer:
          "Yes, 7 days a week, 8 AM to 8 PM. Emergency calls are answered around the clock.",
      },
      {
        question: "Can I get a quote without a visit?",
        answer:
          "Send a photo of the problem and we will send a written estimate within 2 hours.",
      },
    ],
  },
  {
    id: "clinics",
    label: "Clinics",
    business: "Example: a dental clinic",
    prompts: [
      {
        question: "Do you have an appointment this week?",
        answer:
          "Yes, Thursday at 10:30 AM and Friday at 2:00 PM are open. Which one works for you?",
      },
      {
        question: "Do you take new patients?",
        answer:
          "Yes, new patients are welcome. Your first visit includes a full exam and cleaning.",
      },
      {
        question: "How much is a cleaning?",
        answer:
          "A cleaning and exam is $120. We will confirm your exact cost before the visit, in writing.",
      },
    ],
  },
  {
    id: "ecommerce",
    label: "E-Commerce",
    business: "Example: an online store",
    prompts: [
      {
        question: "Where is my order?",
        answer:
          "Order #1042 shipped this morning and arrives Thursday. I can send the tracking link to your phone.",
      },
      {
        question: "Do you ship to Texas?",
        answer:
          "Yes, we ship to all 50 states. Delivery to Texas takes 2 to 3 business days.",
      },
      {
        question: "Can I return this?",
        answer:
          "Yes, returns are free within 30 days. I can start the return for you now.",
      },
    ],
  },
  {
    id: "b2b",
    label: "B2B",
    business: "Example: a growing company",
    prompts: [
      {
        question: "Can you build us a website in 3 weeks?",
        answer:
          "Yes. Most 5-page business sites launch in 2 to 3 weeks. Shall I book a free 15-minute call to scope it?",
      },
      {
        question: "Do you work with our CRM?",
        answer:
          "Yes, we connect HubSpot, Salesforce, and Zoho, or set up a simple CRM if you do not have one.",
      },
      {
        question: "What does it cost?",
        answer:
          "Launch starts at $2,500, fixed in writing. Your exact quote comes after the free call.",
      },
    ],
  },
];

export function AiSandbox() {
  const [activeTab, setActiveTab] = useState(niches[0].id);
  const [selected, setSelected] = useState(0);
  const niche = niches.find((item) => item.id === activeTab);
  const prompt = niche.prompts[selected];

  return (
    <div className="overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white shadow-[0_24px_64px_-32px_rgba(17,17,17,0.25)]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E2E8F0] px-5 py-4 sm:px-6">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Business types">
          {niches.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={activeTab === item.id}
              onClick={() => {
                setActiveTab(item.id);
                setSelected(0);
              }}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                activeTab === item.id
                  ? "bg-[#0066FF] text-white"
                  : "bg-[#F6F3EE] text-[#55524B] hover:text-[#111111]",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
        <span className="rounded-full bg-[#0066FF]/10 px-3 py-1.5 text-xs font-semibold text-[#0066FF]">
          Simulated demo
        </span>
      </div>

      <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#55524B]">
            {niche.business}
          </p>
          <p className="mt-3 text-base font-semibold text-[#111111]">
            Try a sample booking flow.
          </p>
          <div className="mt-4 space-y-2.5">
            {niche.prompts.map((item, index) => (
              <button
                key={item.question}
                type="button"
                onClick={() => setSelected(index)}
                className={cn(
                  "block w-full rounded-2xl border px-4 py-3 text-left text-[15px] leading-relaxed transition-colors",
                  selected === index
                    ? "border-[#0066FF] bg-[#0066FF]/5 font-medium text-[#111111]"
                    : "border-[#E2E8F0] bg-white text-[#55524B] hover:border-[#0066FF]/50 hover:text-[#111111]",
                )}
              >
                {item.question}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-[#F6F3EE] p-5">
          <div className="space-y-3">
            <p className="ml-auto w-fit max-w-[90%] rounded-2xl rounded-br-md bg-white px-4 py-3 text-[15px] leading-relaxed text-[#111111] shadow-sm">
              {prompt.question}
            </p>
            <p className="w-fit max-w-[90%] rounded-2xl rounded-bl-md bg-[#0066FF] px-4 py-3 text-[15px] leading-relaxed text-white">
              {prompt.answer}
            </p>
            <p className="w-fit rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#0066FF] shadow-sm">
              Lead booked, added to the calendar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
