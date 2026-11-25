"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

const slugs = {
  1: "pureflow",
  14: "easeaway",
  19: "popshop",
  8: "wrenchway",
  17: "gatherround",
  15: "forgefit",
};

export function FeaturedBuilds({ demos, industries }) {
  const filters = ["All", ...Object.values(industries)];
  const [active, setActive] = useState("All");
  const [previewId, setPreviewId] = useState(null);
  const [loadedIds, setLoadedIds] = useState(() => new Set());

  const visible =
    active === "All"
      ? demos
      : demos.filter((demo) => (industries[demo.id] ?? demo.group) === active);

  return (
    <div>
      <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter builds by industry">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            role="tab"
            aria-selected={active === filter}
            onClick={() => setActive(filter)}
            className={cn(
              "relative rounded-full px-4 py-2 text-sm font-semibold transition-colors",
              active === filter ? "text-white" : "text-[#55524B] hover:text-[#111111]",
            )}
          >
            {active === filter ? (
              <motion.span
                layoutId="industry-pill"
                className="absolute inset-0 rounded-full bg-[#0066FF]"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            ) : null}
            <span className="relative">{filter}</span>
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((demo, index) => (
          <motion.article
            key={demo.id}
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className={cn(
              "group overflow-hidden rounded-[24px] border border-zinc-200/80 bg-white transition-shadow hover:shadow-[0_16px_40px_-20px_rgba(17,17,17,0.2)]",
              index === 0 && "md:col-span-2 lg:col-span-2",
            )}
          >
            <div className="relative overflow-hidden border-b border-zinc-200/80 bg-[#F6F3EE]">
              <div className="flex items-center gap-3 px-4 py-3">
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
                </span>
                <span className="min-w-0 flex-1 truncate text-[13px] font-medium text-[#55524B]">
                  {demo.name}
                </span>
                <span className="shrink-0 rounded-full bg-[#0066FF]/10 px-2.5 py-1 text-xs font-semibold text-[#0066FF]">
                  Live Demo
                </span>
              </div>
              <div
                className="relative aspect-[16/10] w-full cursor-pointer overflow-hidden bg-[#F6F3EE]"
                onMouseEnter={() => setPreviewId(demo.id)}
                onMouseLeave={() => setPreviewId(null)}
                onClick={() =>
                  setPreviewId(previewId === demo.id ? null : demo.id)
                }
                title="Hover or tap to preview the live site"
              >
                <Image
                  src={`/demos/${slugs[demo.id]}-desktop.png`}
                  alt={`${demo.name} website screenshot`}
                  width={1440}
                  height={900}
                  loading="lazy"
                  className="absolute inset-0 aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                />
                {previewId === demo.id ? (
                  <iframe
                    src={demo.href}
                    title={`${demo.name} live website preview`}
                    loading="lazy"
                    onLoad={() =>
                      setLoadedIds((prev) => new Set(prev).add(demo.id))
                    }
                    className={cn(
                      "absolute inset-0 h-full w-full border-0 bg-white transition-opacity duration-500",
                      loadedIds.has(demo.id) ? "opacity-100" : "opacity-0",
                    )}
                  />
                ) : null}
                {previewId === demo.id && !loadedIds.has(demo.id) ? (
                  <p className="absolute inset-x-0 bottom-3 text-center text-xs font-semibold text-[#55524B]">
                    Loading live preview…
                  </p>
                ) : null}
                {previewId === demo.id && loadedIds.has(demo.id) ? (
                  <span className="absolute left-3 top-3 rounded-full bg-[#0066FF] px-2.5 py-1 text-xs font-bold text-white">
                    Live preview
                  </span>
                ) : null}
              </div>
            </div>
            <div className="p-6">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0066FF]">
                {industries[demo.id] ?? demo.group}
              </p>
              <h3 className="mt-2.5 text-[20px] font-semibold text-[#111111]">{demo.name}</h3>
              <p className="mt-1 text-sm text-[#55524B]">
                {demo.trade} | {demo.city}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {demo.highlights.slice(0, 2).map((feature) => (
                  <li
                    key={feature}
                    className="rounded-full bg-[#F6F3EE] px-3 py-1.5 text-xs font-medium text-[#55524B]"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={demo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0066FF]"
              >
                Launch Live Demo
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link href="/portfolio" className="btn-primary">
          View All 24 Live Builds
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
