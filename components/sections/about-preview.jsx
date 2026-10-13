"use client";

import Link from "next/link";
import { ArrowRight, Building2, Compass, Lightbulb, ShieldCheck } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { aboutPillars } from "@/lib/site";
import { useLanguage } from "@/components/providers/language-provider";
import { CyberCircuitBackground } from "@/components/ui/CyberCircuitBackground";

export function AboutPreview({ showCta = true }) {
  const { t } = useLanguage();
  const pillars = t("about.pillars");
  const displayedPillars = aboutPillars.map(
    (pillar, index) => pillars?.[index] ?? pillar,
  );

  return (
    <section className="relative isolate overflow-hidden bg-white py-16 lg:py-24 text-slate-900 border-t border-slate-200 transition-all duration-500">
      <CyberCircuitBackground />
      {/* Background Soft Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-[min(90vw,1000px)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.06),transparent_70%)] blur-[100px]"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow={t("about.eyebrow")}
              title={t("about.title")}
              description={t("about.description")}
            />

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-[#070f24] p-6 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/40 hover:shadow-cyan-950/30">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-950/60 text-cyan-400 shadow-inner transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Compass className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-white">
                  {t("about.brandStory")}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                  {t("about.brandStoryText")}
                </p>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-[#070f24] p-6 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/40 hover:shadow-cyan-950/30">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-950/60 text-cyan-400 shadow-inner transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-white">
                  {t("about.missionDriven")}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                  {t("about.missionText")}
                </p>
              </div>
            </div>

            {showCta ? (
              <div className="mt-8">
                <Button asChild variant="outline" size="lg" className="border-slate-200 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-300 shadow-sm transition-all duration-300">
                  <Link href="/about" className="inline-flex items-center gap-2 font-medium">
                    {t("about.learnMore")}
                    <ArrowRight className="h-4 w-4 text-blue-600" />
                  </Link>
                </Button>
              </div>
            ) : null}
          </div>

          <div className="grid gap-5">
            {displayedPillars.map((pillar, index) => (
              <Card
                key={pillar.title}
                className={`group relative overflow-hidden rounded-2xl border border-slate-800 bg-[#070f24] p-1 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-cyan-950/30 ${
                  index === 1 ? "lg:translate-x-4" : ""
                }`}
              >
                <CardHeader className="flex-row items-start gap-4 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-950/60 text-cyan-400 shadow-inner transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    {index === 0 ? (
                      <Building2 className="h-6 w-6" />
                    ) : index === 1 ? (
                      <Lightbulb className="h-6 w-6" />
                    ) : (
                      <ShieldCheck className="h-6 w-6" />
                    )}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {pillar.title}
                    </CardTitle>
                    <CardContent className="px-0 pb-0 pt-2">
                      <p className="text-sm leading-relaxed text-slate-300">
                        {pillar.description}
                      </p>
                    </CardContent>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}