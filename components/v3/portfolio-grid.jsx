"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

// Local desktop screenshots in public/demos, one per live demo.
// Captured from the real demo sites; the demo sites' own disclaimer banner
// is cropped off the top of each file.
const slugs = {
  1: "pureflow",
  2: "brightvolt",
  3: "peakshield",
  4: "airease",
  5: "freshhue",
  6: "handyfix",
  7: "greenscape",
  8: "wrenchway",
  9: "showroom",
  10: "treadright",
  11: "rapidtow",
  12: "sharpline",
  13: "glamcraft",
  14: "easeaway",
  15: "forgefit",
  16: "smokestack",
  17: "gatherround",
  18: "crumbandcraft",
  19: "popshop",
  20: "keyline",
  21: "clearout",
  22: "pamperedpaws",
  23: "trailbuddy",
  24: "bugguard",
};

export function PortfolioGrid({ demos, categories }) {
  // Only groups with at least one live demo get a tab, so no tab is empty.
  const liveGroups = categories.filter(
    (category) =>
      category.id === "all" ||
      demos.some((demo) => demo.group === category.id),
  );
  const [active, setActive] = useState("all");

  const visible =
    active === "all"
      ? demos
      : demos.filter((demo) => demo.group === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter demos by industry">
        {liveGroups.map((category) => (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={active === category.id}
            onClick={() => setActive(category.id)}
            className={cn(
              "relative rounded-full px-4 py-2 text-sm font-semibold transition-colors",
              active === category.id ? "text-white" : "text-[#55524B] hover:text-[#111111]",
            )}
          >
            {active === category.id ? (
              <motion.span
                layoutId="portfolio-pill"
                className="absolute inset-0 rounded-full bg-[#0066FF]"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            ) : null}
            <span className="relative">
              {category.id === "all"
                ? `All ${demos.length} Demos`
                : category.label}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((demo) => (
          <a
            key={demo.id}
            href={demo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-[24px] border border-zinc-200/80 bg-white transition-shadow hover:shadow-[0_16px_40px_-20px_rgba(17,17,17,0.2)]"
          >
            <div className="relative aspect-[16/10] overflow-hidden border-b border-zinc-200/80 bg-[#F6F3EE]">
              <Image
                src={`/demos/${slugs[demo.id]}-desktop.png`}
                alt={`${demo.name} website screenshot`}
                width={1440}
                height={900}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-[#0066FF] px-2.5 py-1 text-xs font-bold text-white">
                Live Demo
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0066FF]">
                {demo.group}
              </p>
              <h2 className="mt-2.5 text-[20px] font-semibold text-[#111111]">
                {demo.name}
              </h2>
              <p className="mt-1 text-sm text-[#55524B]">
                {demo.trade} | {demo.city}
              </p>
              <p className="mt-3 text-base leading-relaxed text-[#55524B]">
                {demo.headline}
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-[#0066FF]">
                Open live demo
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
