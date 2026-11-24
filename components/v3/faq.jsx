"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";

export function Faq({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="mt-10 divide-y divide-[#E2E8F0] border-y border-[#E2E8F0]">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : index)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="text-lg font-semibold text-[#111111] sm:text-xl">
                {item.question}
              </span>
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-[#0066FF] transition-transform",
                  open && "rotate-45",
                )}
              >
                <Plus className="h-4 w-4" />
              </span>
            </button>
            {open ? (
              <p className="max-w-2xl pb-6 text-base leading-relaxed text-[#55524B]">
                {item.answer}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
