"use client";

import { useRef, useState } from "react";
import { ArrowLeftRight, CheckCircle2, Gauge, Sparkles, XCircle } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

export function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(10, Math.min(90, (x / rect.width) * 100));
    setSliderPos(pct);
  };

  const onMouseMove = (e) => {
    if (isDragging) handleMove(e.clientX);
  };

  const onTouchMove = (e) => {
    if (e.touches[0]) handleMove(e.touches[0].clientX);
  };

  return (
    <section className="relative isolate overflow-hidden bg-slate-950 py-16 text-white sm:py-24">
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            <ArrowLeftRight className="h-3.5 w-3.5" />
            Interactive Transformation Benchmark
          </div>

          <h2 className="mt-5 font-display text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl">
            Legacy Template{" "}
            <span className="text-slate-400 font-light">vs.</span>{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              Zepra Tech Architecture
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Drag the interactive slider below to compare standard off-the-shelf agency work against our high-speed, conversion-engineered digital assets.
          </p>
        </div>

        {/* Interactive Draggable Split Viewport */}
        <div
          ref={containerRef}
          onMouseMove={onMouseMove}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onTouchMove={onTouchMove}
          className="relative mx-auto mt-10 h-[560px] w-full max-w-5xl select-none overflow-hidden rounded-[28px] border border-white/20 bg-slate-900 shadow-2xl sm:mt-12 sm:h-[540px] sm:rounded-[32px]"
        >
          {/* Right Layer (After: Zepra Tech Next.js Architecture) */}
          <div className="absolute inset-0 bg-[#081224] p-4 sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3 sm:pb-4">
              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300 sm:px-3 sm:text-xs">
                After // Zepra Tech Next.js 15
              </span>
              <span className="font-display text-sm font-bold text-emerald-400 sm:text-2xl">
                99/100 Core Web Vitals
              </span>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2 sm:mt-8 sm:gap-4">
              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-2.5 text-center sm:rounded-2xl sm:p-4">
                <div className="font-display text-xl font-bold text-emerald-300 sm:text-3xl">
                  0.8s
                </div>
                <div className="mt-0.5 text-[10px] text-slate-300 sm:mt-1 sm:text-xs">Edge Load</div>
              </div>
              <div className="rounded-xl border border-cyan-400/25 bg-cyan-400/10 p-2.5 text-center sm:rounded-2xl sm:p-4">
                <div className="font-display text-xl font-bold text-cyan-300 sm:text-3xl">
                  +64%
                </div>
                <div className="mt-0.5 text-[10px] text-slate-300 sm:mt-1 sm:text-xs">Conversion Lift</div>
              </div>
              <div className="rounded-xl border border-amber-400/25 bg-amber-400/10 p-2.5 text-center sm:rounded-2xl sm:p-4">
                <div className="font-display text-xl font-bold text-amber-300 sm:text-3xl">
                  Zero
                </div>
                <div className="mt-0.5 text-[10px] text-slate-300 sm:mt-1 sm:text-xs">Layout Shift</div>
              </div>
            </div>

            <div className="mt-5 space-y-2.5 sm:mt-8 sm:space-y-3">
              <div className="flex items-start gap-2.5 text-xs text-slate-200 sm:items-center sm:gap-3 sm:text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400 sm:mt-0 sm:h-5 sm:w-5" />
                <span>Sub-second mobile-first serverless edge delivery</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-200 sm:items-center sm:gap-3 sm:text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400 sm:mt-0 sm:h-5 sm:w-5" />
                <span>Rich LocalBusiness & Service JSON-LD schema for Google & AI search</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-200 sm:items-center sm:gap-3 sm:text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400 sm:mt-0 sm:h-5 sm:w-5" />
                <span>Integrated 24/7 lead routing directly into client CRM</span>
              </div>
            </div>
          </div>

          {/* Left Layer (Before: Slow Outdated Legacy Build) */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden bg-[#180a0f] p-4 sm:p-10"
            style={{ width: `${sliderPos}%` }}
          >
            <div className="w-[calc(100vw-3rem)] max-w-5xl sm:w-[800px]">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-rose-500/20 pb-3 sm:pb-4">
                <span className="rounded-full border border-rose-500/30 bg-rose-500/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-rose-300 sm:px-3 sm:text-xs">
                  Before // Generic $300 Template
                </span>
                <span className="font-display text-sm font-bold text-rose-400 sm:text-2xl">
                  52/100 Mobile Score
                </span>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2 sm:mt-8 sm:gap-4">
                <div className="rounded-xl border border-rose-500/25 bg-rose-500/10 p-2.5 text-center sm:rounded-2xl sm:p-4">
                  <div className="font-display text-xl font-bold text-rose-400 sm:text-3xl">
                    3.9s
                  </div>
                  <div className="mt-0.5 text-[10px] text-slate-300 sm:mt-1 sm:text-xs">Slow Server</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-center sm:rounded-2xl sm:p-4">
                  <div className="font-display text-xl font-bold text-slate-400 sm:text-3xl">
                    -48%
                  </div>
                  <div className="mt-0.5 text-[10px] text-slate-300 sm:mt-1 sm:text-xs">Bounce Rate</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-center sm:rounded-2xl sm:p-4">
                  <div className="font-display text-xl font-bold text-amber-400 sm:text-3xl">
                    42+
                  </div>
                  <div className="mt-0.5 text-[10px] text-slate-300 sm:mt-1 sm:text-xs">Bloated Plugins</div>
                </div>
              </div>

              <div className="mt-5 space-y-2.5 sm:mt-8 sm:space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-slate-300 sm:items-center sm:gap-3 sm:text-sm">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-400 sm:mt-0 sm:h-5 sm:w-5" />
                  <span>Uncompressed images crashing mobile browsers</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300 sm:items-center sm:gap-3 sm:text-sm">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-400 sm:mt-0 sm:h-5 sm:w-5" />
                  <span>No technical SEO schema, invisible to AI answer engines</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300 sm:items-center sm:gap-3 sm:text-sm">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-400 sm:mt-0 sm:h-5 sm:w-5" />
                  <span>Generic cookie-cutter styling ignored by high-paying clients</span>
                </div>
              </div>
            </div>
          </div>

          {/* Draggable Divider Handle */}
          <div
            className="absolute inset-y-0 z-30 flex cursor-ew-resize items-center justify-center"
            data-cursor="DRAG"
            style={{ left: `${sliderPos}%` }}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          >
            <div className="h-full w-1 bg-gradient-to-b from-cyan-400 via-white to-cyan-400 shadow-[0_0_15px_rgba(56,198,255,0.8)]" />
            <div className="absolute flex h-11 w-11 items-center justify-center rounded-full border-2 border-cyan-300 bg-slate-950 text-cyan-300 shadow-xl">
              <ArrowLeftRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
