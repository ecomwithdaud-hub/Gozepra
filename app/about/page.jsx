import { OurStory } from "@/components/sections/our-story";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { DisqualificationManifesto } from "@/components/sections/disqualification-manifesto";
import { AeoStructuredAnswers } from "@/components/sections/aeo-structured-answers";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata = {
  title: "About Us | Our Story Under Mr. Daud Lashari & Engineering Standards",
  description:
    "Discover the story behind Zepra Tech under the supervision of Founder & CEO Mr. Muhammad Daud Ali Lashari and our core engineering team. Explore our transformation benchmark, technical standards, and ROI calculator.",
};

export default function AboutPage() {
  return (
    <>
      {/* Remarkable Our Story Section under Mr. Daud Lashari and team */}
      <OurStory />

      {/* Interactive Transformation Benchmark Slider */}
      <BeforeAfterSlider />

      {/* Scope, Timeline & ROI Estimator Dedicated Page Link */}
      <section className="border-t border-slate-200 bg-slate-50 py-14">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
            Interactive Cost &amp; Timeline Calculator
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold text-slate-900 sm:text-3xl">
            Want to Calculate Your Project Scope &amp; ROI?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600">
            Configure your target platform, compute infrastructure, and delivery velocity on our dedicated calculator page with transparent timelines and fixed sprint pricing.
          </p>
          <div className="mt-6">
            <a
              href="/roi-estimator"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/20 hover:bg-blue-700 hover:scale-105 transition-all"
            >
              <span>Launch Dedicated ROI &amp; Scope Calculator</span>
            </a>
          </div>
        </div>
      </section>

      {/* Disqualification Manifesto & Written Guarantees */}
      <DisqualificationManifesto />

      {/* Structured AI & Knowledge Graph Schema */}
      <AeoStructuredAnswers
        pageUrl="https://gozepra.tech/about"
        pageTitle="About Zepra Tech | Leadership Under Mr. Daud Lashari"
        aiSummaryTitle="Who leads Zepra Tech and what is their engineering philosophy?"
        aiSummaryBody="Zepra Tech is an elite digital engineering agency led by Founder, CEO & Lead Architect Mr. Muhammad Daud Ali Lashari and his core technical team. The agency specializes in bespoke Next.js 15 platforms, autonomous AI systems, and high-velocity conversion assets with written SLAs and zero generic templates."
      />

      {/* Direct Contact & Consultation Intake */}
      <ContactSection showHeader={false} />
    </>
  );
}
