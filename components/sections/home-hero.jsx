"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  Cpu,
  Globe2,
  Layers3,
  Sparkles,
  Workflow,
} from "lucide-react";

import { HeroParticles } from "@/components/ui/HeroParticles";
import { InfiniteMarquee } from "@/components/ui/InfiniteMarquee";
import { TiltCard } from "@/components/ui/TiltCard";
import { useLanguage } from "@/components/providers/language-provider";
import { heroHighlights } from "@/lib/site";

const capabilities = [
  "WEB PLATFORMS",
  "AI AUTOMATION",
  "E-COMMERCE",
  "UI/UX ATELIER",
  "SEARCH GROWTH",
  "CLOUD ARCHITECTURE",
];

const highlightIcons = [Layers3, Bot, Sparkles];

export function HomeHero() {
  const { t } = useLanguage();
  const translatedHighlights = t("hero.highlights");
  const translatedCapabilities = t("hero.capabilities");
  const sectionRef = useRef(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;
    setParallax({ x: normX, y: normY });
  };

  const handleMouseLeave = () => {
    setParallax({ x: 0, y: 0 });
  };

  const marqueeItems = [
    ...capabilities,
    ...capabilities,
    ...capabilities,
  ];

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative isolate overflow-hidden bg-[#040812] pb-16 pt-12 text-white sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20"
    >
      {/* Ambient Executive Dark Navy & Platinum Radial Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute left-1/2 top-1/4 h-[560px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[150px] transition-transform duration-500"
          style={{
            background:
              "radial-gradient(circle at center, rgba(56, 189, 248, 0.28) 0%, transparent 70%)",
            transform: `translate3d(${parallax.x * -25}px, ${parallax.y * -25}px, 0)`,
          }}
        />
        <div
          className="absolute -right-24 top-12 h-[420px] w-[420px] rounded-full opacity-20 blur-[140px] transition-transform duration-500"
          style={{
            background:
              "radial-gradient(circle at center, rgba(148, 163, 184, 0.22) 0%, transparent 70%)",
            transform: `translate3d(${parallax.x * 30}px, ${parallax.y * 30}px, 0)`,
          }}
        />
        <div
          className="absolute -left-24 bottom-12 h-[420px] w-[420px] rounded-full opacity-20 blur-[140px] transition-transform duration-500"
          style={{
            background:
              "radial-gradient(circle at center, rgba(30, 64, 175, 0.32) 0%, transparent 70%)",
            transform: `translate3d(${parallax.x * 20}px, ${parallax.y * -20}px, 0)`,
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <HeroParticles />

      <div className="container relative z-10">
        {/* Executive Centerpiece Hero with Structured Corporate Architecture Cards */}
        <div className="relative mx-auto flex max-w-6xl flex-col items-center text-center">
          {/* Left Structured Executive Architecture Card (Desktop) */}
          <div
            className="pointer-events-auto absolute -left-6 top-8 z-20 hidden xl:block"
            style={{
              transform: `translate3d(${parallax.x * -20}px, ${parallax.y * -15}px, 0)`,
              transition: "transform 220ms ease-out",
            }}
          >
            <TiltCard
              cursorLabel="SLA METRICS"
              className="w-64 overflow-hidden rounded-2xl border border-slate-700/80 bg-[#070d19]/95 p-4 text-left shadow-[0_20px_50px_rgba(0,0,0,0.75)] backdrop-blur-xl"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />
              <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  SYS // INFRASTRUCTURE
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-sky-500/10 border border-sky-400/25 px-2 py-0.5 text-[10px] font-bold text-sky-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  99.99% SLA
                </span>
              </div>
              <div className="mt-3 space-y-2.5">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-slate-400">Global Edge Latency</span>
                  <span className="font-mono text-sm font-bold text-white">&lt; 0.8s</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-sky-500 to-cyan-300" />
                </div>
                <div className="flex items-center justify-between pt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  <span>Core Web Vitals</span>
                  <span className="text-sky-300">99/100 Verified</span>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right Structured Executive ROI & Governance Card (Desktop) */}
          <div
            className="pointer-events-auto absolute -right-6 top-10 z-10 hidden xl:block"
            style={{
              transform: `translate3d(${parallax.x * 25}px, ${parallax.y * 20}px, 0)`,
              transition: "transform 220ms ease-out",
            }}
          >
            <TiltCard
              cursorLabel="GOVERNANCE"
              className="w-64 overflow-hidden rounded-2xl border border-slate-700/80 bg-[#070d19]/95 p-4 text-left shadow-[0_20px_50px_rgba(0,0,0,0.75)] backdrop-blur-xl"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/50 to-transparent" />
              <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  CORP // DELIVERY
                </span>
                <span className="rounded-md border border-emerald-500/25 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold uppercase text-emerald-300">
                  Audited
                </span>
              </div>
              <div className="mt-3">
                <div className="font-display text-2xl font-bold tracking-tight text-white">
                  +54% <span className="text-xs font-medium text-slate-400">Avg. Conversion Lift</span>
                </div>
                <p className="mt-1.5 text-[11px] leading-relaxed text-slate-400">
                  28+ Production Demo Architectures &amp; Enterprise Deployments
                </p>
                <div className="mt-3 flex items-center justify-between border-t border-slate-800/80 pt-2 text-[10px] font-semibold uppercase tracking-wider text-sky-300">
                  <span>100% IP &amp; Code Ownership</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Top Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/90 px-4 py-1.5 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-200 shadow-sm sm:gap-2.5 sm:px-4.5 sm:text-[11px] sm:tracking-[0.28em]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-sky-400" />
            <span>{t("hero.eyebrow")}</span>
          </div>

          {/* Solid Authoritative Corporate Display Headline */}
          <div className="mt-5 select-none sm:mt-6">
            <div className="font-display text-[clamp(2.4rem,9.5vw,6.5rem)] font-black uppercase leading-[0.94] tracking-tight text-white">
              DIGITAL
            </div>
            <div className="bg-gradient-to-r from-slate-100 via-sky-200 to-sky-400 bg-clip-text font-display text-[clamp(2.4rem,9.5vw,6.5rem)] font-black uppercase leading-[0.96] tracking-tight text-transparent">
              PRESTIGE
            </div>
          </div>

          {/* Subtitle Headline & Description */}
          <h1 className="mt-4 max-w-3xl text-balance font-display text-lg font-semibold leading-snug text-slate-100 sm:mt-5 sm:text-3xl">
            {t("hero.titleLead")}{" "}
            <span className="bg-gradient-to-r from-sky-200 via-cyan-200 to-slate-200 bg-clip-text text-transparent">
              {t("hero.titleAccent")}
            </span>
          </h1>

          <p className="mx-auto mt-3.5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:mt-4 sm:text-base lg:text-lg">
            {t("hero.description")}
          </p>

          {/* Executive Command Bar CTA */}
          <div className="relative z-30 mt-7 flex w-full max-w-md flex-col items-stretch justify-center gap-2.5 rounded-2xl border border-slate-700/80 bg-[#070d19]/90 p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.65)] backdrop-blur-2xl sm:mt-8 sm:w-auto sm:max-w-none sm:flex-row sm:items-center sm:gap-3.5 sm:rounded-full sm:px-4 sm:py-2.5">
            <Link
              href="/contact"
              data-cursor="LET'S GO"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-300 px-6 text-xs font-extrabold uppercase tracking-[0.14em] text-slate-950 shadow-md transition-all duration-300 hover:brightness-105 sm:h-11 sm:w-auto sm:rounded-full sm:px-7 sm:text-xs"
            >
              <span>{t("hero.projectCta") || "Start a Project"}</span>
              <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>

            <div className="hidden h-6 w-px bg-slate-700/80 sm:block" />

            <Link
              href="/portfolio"
              data-cursor="EXPLORE"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-5 text-xs font-bold uppercase tracking-[0.12em] text-slate-100 transition-all duration-300 hover:border-sky-400/50 hover:bg-slate-800 sm:h-11 sm:w-auto sm:rounded-full sm:px-6 sm:text-xs"
            >
              <span>View Portfolio &amp; Case Studies</span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-sky-300" />
            </Link>
          </div>

          {/* Dedicated AI Bots Simulator Action Pill */}
          <div className="relative z-30 mt-3.5 flex w-full max-w-md items-center justify-center sm:mt-4 sm:w-auto sm:max-w-none">
            <Link
              href="#interactive-service-demos"
              data-cursor="TEST AI"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700/90 bg-slate-900/80 px-4 py-2.5 text-center text-[11px] font-bold uppercase tracking-[0.12em] text-sky-300 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-sky-400/60 hover:bg-slate-800 hover:text-white sm:w-auto sm:gap-2.5 sm:rounded-full sm:px-5 sm:py-2 sm:text-xs"
            >
              <Bot className="h-4 w-4 shrink-0 text-sky-400 transition-transform group-hover:scale-110" />
              <span>Test Live AI Bots &amp; Simulator (Interactive Labs)</span>
              <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Trust Checkmarks */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-wider text-slate-300 sm:text-sm">
            <span className="inline-flex items-center gap-2">
              <Check className="h-4 w-4 text-sky-400" />
              {t("hero.ownership")}
            </span>
            <span className="inline-flex items-center gap-2">
              <Check className="h-4 w-4 text-sky-400" />
              {t("hero.scale")}
            </span>
            <span className="inline-flex items-center gap-2">
              <Check className="h-4 w-4 text-sky-400" />
              {t("hero.partner")}
            </span>
          </div>
        </div>

        {/* Executive Corporate Credentials & Governance Bar */}
        <div className="mt-10 rounded-2xl border border-slate-800/90 bg-[#070d19]/90 px-4 py-4 shadow-xl backdrop-blur-xl sm:px-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:divide-x lg:divide-slate-800">
            <div className="flex flex-col items-center text-center lg:px-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-sky-400">
                US &amp; Global Presence
              </span>
              <span className="mt-1 text-xs font-bold text-white sm:text-sm">
                Middletown, DE &amp; Lahore HQ
              </span>
            </div>
            <div className="flex flex-col items-center text-center lg:px-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-sky-400">
                Security &amp; Privacy
              </span>
              <span className="mt-1 text-xs font-bold text-white sm:text-sm">
                NDA &amp; Enterprise Compliance
              </span>
            </div>
            <div className="flex flex-col items-center text-center lg:px-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-sky-400">
                Delivery Governance
              </span>
              <span className="mt-1 text-xs font-bold text-white sm:text-sm">
                Contractual Fixed-Price SLA
              </span>
            </div>
            <div className="flex flex-col items-center text-center lg:px-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-sky-400">
                Code &amp; IP Rights
              </span>
              <span className="mt-1 text-xs font-bold text-white sm:text-sm">
                100% Client Repository Transfer
              </span>
            </div>
          </div>
        </div>

        {/* 3 Interactive Hero Highlight Cards Below */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {heroHighlights.map((item, index) => {
            const Icon = highlightIcons[index] || Globe2;
            const translatedItem = translatedHighlights?.[index] ?? item;

            return (
              <TiltCard
                key={item.title}
                cursorLabel="EXPLORE"
                className="rounded-2xl"
              >
                <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-800/90 bg-[#070d19]/90 p-6 backdrop-blur-xl transition-all duration-300 hover:border-sky-400/40">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-600/50 to-transparent group-hover:via-sky-400/60" />
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-sky-300">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500 group-hover:text-sky-300">
                        0{index + 1} // PILLAR
                      </span>
                    </div>
                    <h2 className="mt-5 font-display text-lg font-bold text-white sm:text-xl">
                      {translatedItem.title}
                    </h2>
                    <p className="mt-2 text-xs leading-6 text-slate-300 sm:text-sm">
                      {translatedItem.description}
                    </p>
                  </div>
                </article>
              </TiltCard>
            );
          })}
        </div>
      </div>

      {/* Clean Non-Overlapping Capability Marquee */}
      <div className="mt-14 w-full overflow-hidden border-y border-white/10 bg-[#070d1c]/90 py-4 backdrop-blur-md">
        <InfiniteMarquee direction="left" speed="28s">
          {capabilities.map((cap, idx) => (
            <span
              key={cap}
              className="mx-3 inline-flex shrink-0 items-center gap-3 whitespace-nowrap rounded-full border border-white/12 bg-white/[0.04] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-200 transition-colors duration-300 hover:border-cyan-400/50 hover:text-cyan-300 sm:text-sm"
            >
              <span className="h-2 w-2 shrink-0 rotate-45 rounded-sm bg-cyan-400 shadow-[0_0_10px_rgba(56,198,255,0.8)]" />
              <span>{translatedCapabilities?.[idx] ?? cap}</span>
            </span>
          ))}
        </InfiniteMarquee>
      </div>
    </section>
  );
}