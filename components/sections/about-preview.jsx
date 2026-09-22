import Link from "next/link";
import { ArrowRight, Building2, Compass, Lightbulb, ShieldCheck } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { aboutPillars } from "@/lib/site";

export function AboutPreview({ showCta = true }) {
  return (
    <section className="section-shell">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="About Zepra Tech"
              title="A forward-thinking digital agency built around business results."
              description="Zepra Tech helps businesses grow through technology, automation, online presence, and creative digital execution. Our goal is simple: make brands look more credible, move faster, and perform better in the digital space."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="surface-panel p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Compass className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-slate-950">
                  Brand story
                </h3>
                <p className="mt-3 text-sm leading-7 text-brand-slate">
                  We are building Zepra Tech as a dependable growth partner for
                  companies that need stronger digital systems, better market
                  positioning, and execution they can trust.
                </p>
              </div>

              <div className="surface-panel p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-slate-950">
                  Mission-driven
                </h3>
                <p className="mt-3 text-sm leading-7 text-brand-slate">
                  Every project is shaped to balance professionalism,
                  innovation, reliability, and client-focused execution from
                  planning to post-launch support.
                </p>
              </div>
            </div>

            {showCta ? (
              <div className="mt-8">
                <Button asChild variant="outline" size="lg">
                  <Link href="/about">
                    Learn more about Zepra Tech
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ) : null}
          </div>

          <div className="grid gap-5">
            {aboutPillars.map((pillar, index) => (
              <Card
                key={pillar.title}
                className={`card-shine border-slate-200/80 bg-white/90 ${index === 1 ? "lg:translate-x-6" : ""}`}
              >
                <CardHeader className="flex-row items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-glow">
                    {index === 0 ? (
                      <Building2 className="h-5 w-5" />
                    ) : index === 1 ? (
                      <Lightbulb className="h-5 w-5" />
                    ) : (
                      <ShieldCheck className="h-5 w-5" />
                    )}
                  </div>
                  <div>
                    <CardTitle>{pillar.title}</CardTitle>
                    <CardContent className="px-0 pb-0 pt-3">
                      <p className="text-[15px] leading-7 text-brand-slate">
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
