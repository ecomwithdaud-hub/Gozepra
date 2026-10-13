"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  ExternalLink,
  Eye,
  Layers3,
  Sparkles,
  X,
} from "lucide-react";

import { enterpriseCaseStudies } from "@/lib/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CyberCard } from "@/components/ui/CyberCard";
import { TiltCard } from "@/components/ui/TiltCard";

const categories = [
  "All Case Studies",
  "Website Development",
  "Full-Stack Web Platform",
  "Ecommerce Solutions",
  "AI Agents & SaaS",
  "Growth & Marketing",
];

export function EnterpriseCaseStudies() {
  const [activeCategory, setActiveCategory] = useState("All Case Studies");
  const [selectedStudy, setSelectedStudy] = useState(null);

  const filteredStudies = useMemo(() => {
    if (activeCategory === "All Case Studies") return enterpriseCaseStudies;
    return enterpriseCaseStudies.filter(
      (study) => study.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section
      id="case-studies"
      className="relative isolate overflow-hidden bg-white border-b border-slate-200 py-14 text-slate-900 sm:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 top-16 -z-10 h-96 w-96 rounded-full bg-blue-400/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 bottom-16 -z-10 h-96 w-96 rounded-full bg-indigo-300/10 blur-[130px]"
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            Verified Engineering Outcomes & Client Case Studies
          </div>
          <h1 className="mt-5 font-display text-3xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Enterprise Case Studies & Architecture Breakdowns.
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            Explore how Zepra Tech solves real operational, technical, and growth challenges across US industry web rollouts, institutional MERN platforms, high-velocity e-commerce, and autonomous AI pipelines.
          </p>

          {/* Category Filter Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 sm:text-sm ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                      : "border border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {filteredStudies.map((study) => {
            const isExternal = study.href.startsWith("http");
            return (
              <TiltCard
                key={study.id}
                cursorLabel="EXPLORE"
                className="rounded-[28px]"
              >
                <CyberCard
                  className="group flex h-full flex-col justify-between rounded-[28px] border border-slate-200 bg-white p-6 text-slate-900 shadow-md transition-all duration-300 hover:border-blue-400 hover:shadow-xl sm:p-7"
                >
                  <div>
                    {/* Image Banner */}
                    {study.image ? (
                      <div className="relative mb-6 h-56 w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                        <img
                          src={study.image}
                          alt={study.title}
                          loading="lazy"
                          className="h-full w-full object-cover object-top transition-all duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                        <div className="absolute inset-x-4 top-3 flex items-center justify-between gap-2">
                          <Badge className="border border-blue-200 bg-blue-50 text-blue-700 backdrop-blur-md">
                            {study.badge}
                          </Badge>
                          {study.timeline ? (
                            <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-slate-950/75 px-3 py-1 text-[11px] font-medium text-slate-200 backdrop-blur-md">
                              <Clock className="h-3 w-3 text-amber-300" />
                              {study.timeline}
                            </span>
                          ) : null}
                        </div>
                        <div className="absolute inset-x-4 bottom-3 flex items-center justify-between">
                          <span className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                            {study.category}
                          </span>
                          <span className="text-xs text-slate-200">
                            Client: {study.client}
                          </span>
                        </div>
                      </div>
                    ) : null}

                    <h2 className="font-display text-2xl font-bold leading-snug text-slate-900">
                      {study.title}
                    </h2>

                    {/* Key Metrics Grid */}
                    <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {study.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-2xl border border-slate-100 bg-slate-50/80 p-3 text-center transition-colors duration-300 group-hover:border-blue-200"
                        >
                          <div className="font-display text-xl font-bold text-blue-600 sm:text-2xl">
                            {metric.value}
                          </div>
                          <div className="mt-1 text-[11px] font-medium text-slate-500">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Challenge & Solution */}
                    <div className="mt-5 space-y-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-xs leading-6 text-slate-600 sm:text-sm">
                      <div>
                        <strong className="text-rose-600">Business Challenge: </strong>
                        {study.challenge}
                      </div>
                      <div>
                        <strong className="text-emerald-700">Engineered Solution: </strong>
                        {study.solution}
                      </div>
                    </div>

                    {/* Deliverables */}
                    {study.deliverables?.length ? (
                      <div className="mt-5">
                        <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                          Key Engineering Deliverables
                        </div>
                        <ul className="mt-2.5 grid gap-2 sm:grid-cols-2">
                          {study.deliverables.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-xs text-slate-600"
                            >
                              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>

                  <div className="mt-6 space-y-4 border-t border-slate-100 pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-slate-200 bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        data-cursor="DETAIL"
                        onClick={() => setSelectedStudy(study)}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-4 py-2.5 text-xs font-semibold text-blue-700 transition-all hover:border-blue-300 hover:bg-blue-100 sm:text-sm"
                      >
                        <Eye className="h-4 w-4" />
                        <span>Case Study Breakdown</span>
                      </button>

                      <Link
                        href={study.href}
                        data-cursor="VIEW LIVE"
                        {...(isExternal
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-500/20 transition-all sm:text-sm"
                      >
                        <span>View Live Proof</span>
                        {isExternal ? (
                          <ExternalLink className="h-4 w-4" />
                        ) : (
                          <ArrowUpRight className="h-4 w-4" />
                        )}
                      </Link>
                    </div>
                  </div>
                </CyberCard>
              </TiltCard>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedStudy ? (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedStudy(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[28px] border border-slate-200 bg-white p-6 text-slate-900 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <Badge className="border border-blue-200 bg-blue-50 text-blue-700">
                  {selectedStudy.badge}
                </Badge>
                <h3 className="mt-3 font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                  {selectedStudy.title}
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Client: {selectedStudy.client} • Category: {selectedStudy.category} • {selectedStudy.timeline}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedStudy(null)}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-6 space-y-6">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {selectedStudy.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-2xl border border-slate-200 bg-slate-50/80 p-3.5 text-center"
                  >
                    <div className="font-display text-2xl font-bold text-blue-600">
                      {m.value}
                    </div>
                    <div className="mt-1 text-xs text-slate-500">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-5 text-sm leading-7 text-slate-600">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-rose-600">
                    The Problem & Operational Bottleneck
                  </div>
                  <p className="mt-1">{selectedStudy.challenge}</p>
                </div>
                <div className="border-t border-slate-200 pt-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    Zepra Tech Architecture & Solution
                  </div>
                  <p className="mt-1">{selectedStudy.solution}</p>
                </div>
              </div>

              {selectedStudy.deliverables?.length ? (
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Complete Deliverables
                  </div>
                  <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {selectedStudy.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-slate-50/60 p-3 text-xs text-slate-700"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5">
                <Link
                  href={selectedStudy.href}
                  onClick={() => setSelectedStudy(null)}
                  {...(selectedStudy.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-5 py-3 text-sm font-bold text-white shadow-md shadow-blue-500/20"
                >
                  <span>Explore Live Deployment / Proof</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setSelectedStudy(null)}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700 hover:text-slate-900"
                >
                  <span>Start a Similar Project</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
