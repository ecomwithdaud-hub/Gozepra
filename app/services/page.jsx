import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ServicesGrid } from "@/components/sections/services-grid";
import { PricingTiers } from "@/components/sections/pricing-tiers";
import { DisqualificationManifesto } from "@/components/sections/disqualification-manifesto";

export const metadata = {
  title: "Enterprise Services & Architecture Tiers",
  description:
    "Explore Zepra Tech services: custom Next.js 15 web platforms, autonomous AI bots, high-conversion design, and predictable enterprise sprint tiers.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesGrid showCta={false} />
      <PricingTiers />

      {/* Scope, Compute & ROI Calculator Link Banner */}
      <section className="border-t border-slate-200 bg-slate-50 py-14">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
            Dedicated Pricing &amp; Timeline Calculator
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold text-slate-900 sm:text-3xl">
            Estimate Your Custom Platform Scope &amp; Compute Budget
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600">
            Visit our dedicated interactive engineering budget tool to configure platforms, custom features, timeline speeds, and estimated ROI with fixed sprint pricing.
          </p>
          <div className="mt-6">
            <Link
              href="/roi-estimator"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/20 hover:bg-blue-700 hover:scale-105 transition-all"
            >
              <span>Open Dedicated ROI &amp; Compute Calculator</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <DisqualificationManifesto />
      <CtaBanner />
    </>
  );
}
