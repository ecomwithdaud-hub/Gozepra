import { CheckCircle2, ShieldCheck, Sparkles, Workflow } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { reasons } from "@/lib/site";

export function WhyUs() {
  return (
    <section className="section-shell bg-slate-950 text-white">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="A multi-service agency built to earn trust and handle complex digital work."
              
              className="[&_h2]:text-white [&_.muted-copy]:text-slate-300"
            />

            <div className="mt-8 glass-panel p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-300">
                  <Workflow className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-2xl font-semibold text-white">
                    One partner, full delivery stack
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    We bring together modern web builds, AI automation, digital
                    growth, and ongoing support so each client engagement stays
                    aligned from planning through execution.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <TrustChip icon={<ShieldCheck className="h-5 w-5" />} label="Reliable communication" />
                <TrustChip icon={<Sparkles className="h-5 w-5" />} label="Premium visual execution" />
                <TrustChip icon={<CheckCircle2 className="h-5 w-5" />} label="Scalable technical systems" />
                <TrustChip icon={<Workflow className="h-5 w-5" />} label="Structured business process" />
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <Card
                key={reason}
                className={`border-white/10 text-white shadow-none ${
                  index % 2 === 0 ? "bg-white/[0.06]" : "bg-white/[0.09]"
                }`}
              >
                <CardHeader className="gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-cyan-300">
                    <span className="font-display text-lg font-semibold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-white">{reason}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-7 text-slate-300">
                  Stronger digital credibility, cleaner execution, and a more
                  dependable client experience are built into how we work.
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustChip({ icon, label }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200">
      <div className="text-cyan-300">{icon}</div>
      <span>{label}</span>
    </div>
  );
}
