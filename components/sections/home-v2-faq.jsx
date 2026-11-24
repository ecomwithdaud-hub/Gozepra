"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { HOME_FAQS } from "@/lib/home-faqs";


export function HomeV2Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
              Questions
            </p>
            <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
              Asked by US small business owners
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Straight answers, no sales talk. Anything else, ask us on the
              free call.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {HOME_FAQS.map((faq, index) => {
              const open = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition ${
                    open
                      ? "border-blue-300 bg-blue-50/50 shadow-sm"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? -1 : index)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-display text-base font-bold text-slate-900 sm:text-lg">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-blue-600 transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {open ? (
                    <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {faq.answer}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
