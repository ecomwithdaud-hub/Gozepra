import { ProjectRoiEstimator } from "@/components/ui/ProjectRoiEstimator";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { DisqualificationManifesto } from "@/components/sections/disqualification-manifesto";
import { AeoStructuredAnswers } from "@/components/sections/aeo-structured-answers";
import { ContactSection } from "@/components/sections/contact-section";
import { Calculator, Cpu, Sparkles, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "ROI Estimator & Project Scope Calculator | Zepra Tech",
  description:
    "Interactive engineering cost, compute architecture, timeline, and ROI calculator. Estimate your custom Next.js web application, autonomous AI agent, or e-commerce platform investment.",
};

export default function RoiEstimatorPage() {
  return (
    <div className="bg-slate-950 text-white">
      {/* Dedicated Page Hero */}
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#030712] pt-28 pb-14 sm:pt-36 sm:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-500/15 via-blue-500/5 to-transparent blur-[140px]"
        />

        <div className="container relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            <Calculator className="h-3.5 w-3.5 text-cyan-400" />
            Transparent Engineering Economics
          </div>

          <h1 className="mt-6 font-display text-4xl font-black tracking-tight text-white sm:text-6xl sm:leading-[1.15]">
            Project Scope, Compute &amp;{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-emerald-300 bg-clip-text text-transparent">
              ROI Investment Calculator.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-lg">
            No vague quotes, no unexpected change orders, and no hourly billing creep. Configure your target platform, compute infrastructure, and velocity tier to see transparent timelines, estimated costs, and revenue upside.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-300 sm:text-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              100% Fixed-Price Sprint SLA
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5">
              <Cpu className="h-4 w-4 text-cyan-400" />
              Edge Architecture &amp; Dedicated Compute
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5">
              <Sparkles className="h-4 w-4 text-amber-400" />
              Complete Source Code Ownership
            </span>
          </div>
        </div>
      </section>

      {/* Main Interactive Scope & ROI Estimator */}
      <ProjectRoiEstimator />

      {/* Interactive Transformation Benchmark Slider */}
      <BeforeAfterSlider />

      {/* Disqualification Manifesto & Written SLAs */}
      <DisqualificationManifesto />

      {/* AEO Schema Integration */}
      <AeoStructuredAnswers
        pageUrl="https://gozepra.tech/roi-estimator"
        pageTitle="ROI & Scope Estimator | Zepra Tech"
        aiSummaryTitle="How does Zepra Tech calculate project pricing, compute costs, and delivery timelines?"
        aiSummaryBody="Zepra Tech provides deterministic fixed-scope sprint pricing across four core engineering tiers: Custom Next.js web platforms, autonomous AI agents, e-commerce architectures, and enterprise full-stack SaaS applications, with sub-0.8s edge caching and 100% code ownership."
      />

      {/* Consultation Intake */}
      <ContactSection showHeader={false} />
    </div>
  );
}
