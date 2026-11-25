"use client";

import { useState } from "react";

const WEEKS_PER_MONTH = 4.3;

export function RoiCalculator() {
  const [missedPerWeek, setMissedPerWeek] = useState(5);
  const [jobValue, setJobValue] = useState(300);

  const monthlyLost = Math.round(missedPerWeek * jobValue * WEEKS_PER_MONTH);
  const weeklyLost = missedPerWeek * jobValue;
  const paybackLaunch = weeklyLost > 0 ? (2500 / weeklyLost).toFixed(1) : "0";
  const paybackGrowth = weeklyLost > 0 ? (5000 / weeklyLost).toFixed(1) : "0";

  return (
    <div className="overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white">
      <div className="grid gap-0 lg:grid-cols-[1.2fr_1fr]">
        <div className="p-7 sm:p-9">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0066FF]">
            04 // ROI Calculator
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-[#111111]">
            What are missed calls costing you?
          </h3>
          <p className="mt-2 text-[15px] leading-relaxed text-[#55524B]">
            Move the sliders. No email, no signup.
          </p>

          <div className="mt-8">
            <div className="flex items-baseline justify-between gap-3">
              <label htmlFor="missed" className="text-sm font-semibold text-[#111111]">
                Missed calls or leads per week
              </label>
              <span className="rounded-full bg-[#F6F3EE] px-3 py-1 text-sm font-semibold text-[#111111]">
                {missedPerWeek} / week
              </span>
            </div>
            <input
              id="missed"
              type="range"
              min={0}
              max={50}
              step={1}
              value={missedPerWeek}
              onChange={(e) => setMissedPerWeek(Number(e.target.value))}
              className="mt-3 w-full accent-[#0066FF]"
            />
            <div className="mt-1 flex justify-between text-xs text-[#55524B]">
              <span>0</span>
              <span>50</span>
            </div>
          </div>

          <div className="mt-7">
            <div className="flex items-baseline justify-between gap-3">
              <label htmlFor="jobvalue" className="text-sm font-semibold text-[#111111]">
                Average job value
              </label>
              <span className="rounded-full bg-[#F6F3EE] px-3 py-1 text-sm font-semibold text-[#111111]">
                ${jobValue.toLocaleString()}
              </span>
            </div>
            <input
              id="jobvalue"
              type="range"
              min={50}
              max={2000}
              step={50}
              value={jobValue}
              onChange={(e) => setJobValue(Number(e.target.value))}
              className="mt-3 w-full accent-[#0066FF]"
            />
            <div className="mt-1 flex justify-between text-xs text-[#55524B]">
              <span>$50</span>
              <span>$2,000</span>
            </div>
          </div>

          <p className="mt-7 text-xs leading-relaxed text-[#55524B]">
            Formula: missed leads x average job value x 4.3 weeks. Your own
            numbers, your own math. We do not guess a conversion rate.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-6 bg-[#111111] p-7 sm:p-9">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-white/60">
              Revenue lost each month
            </p>
            <p className="mt-2 text-5xl font-semibold tracking-[-0.03em] text-white">
              ${monthlyLost.toLocaleString()}
            </p>
          </div>
          <div className="space-y-3 border-t border-white/15 pt-5 text-[15px] leading-relaxed text-white/80">
            <p>
              A $2,500 Launch build pays for itself in{" "}
              <span className="font-semibold text-white">{paybackLaunch} weeks</span>{" "}
              of recovered leads.
            </p>
            <p>
              A $5,000 Growth build with an AI assistant pays for itself in{" "}
              <span className="font-semibold text-white">{paybackGrowth} weeks</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
