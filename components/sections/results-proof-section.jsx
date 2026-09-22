import { BarChart3, Megaphone, TrendingUp } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { marketingProofs } from "@/lib/site";

const proofHighlights = [
  {
    title: "Campaign visibility",
    description:
      "Real account screenshots help show that Zepra Tech is not presenting theory alone, but actual campaign monitoring and reporting work.",
    icon: Megaphone,
  },
  {
    title: "Performance tracking",
    description:
      "The gallery covers spend, clicks, leads, analytics movement, optimization suggestions, and reporting continuity.",
    icon: BarChart3,
  },
  {
    title: "Growth-focused execution",
    description:
      "This section is arranged to support trust for social media marketing, paid campaigns, and practical growth support services.",
    icon: TrendingUp,
  },
];

export function ResultsProofSection({
  eyebrow = "Social Media Marketing",
  title = "Social media marketing proof arranged as a clean professional review gallery.",
  description = "These visuals have been organized to present campaign work, reporting snapshots, and growth evidence in a more polished agency-style format.",
}) {
  return (
    <section id="social-media-marketing" className="section-shell scroll-mt-32 bg-white/50">
      <div className="container">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {proofHighlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.title}
                className={`card-shine border-slate-200/80 bg-white/92 ${
                  index === 1 ? "lg:-translate-y-4" : ""
                }`}
              >
                <CardHeader className="gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-glow">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-7 text-brand-slate">
                  {item.description}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 columns-1 gap-6 md:columns-2 xl:columns-3">
          {marketingProofs.map((proof) => (
            <div key={proof.title} className="mb-6 break-inside-avoid">
              <Card className="card-shine overflow-hidden border-slate-200/80 bg-white/94">
                <div className="border-b border-slate-200/70 p-5">
                  <Badge>{proof.label}</Badge>
                  <CardTitle className="mt-4 text-xl">{proof.title}</CardTitle>
                  <p className="mt-3 text-sm leading-7 text-brand-slate">
                    {proof.summary}
                  </p>
                </div>
                <div className="bg-slate-50 p-4">
                  <div className="overflow-hidden rounded-[22px] border border-slate-200/70 bg-white shadow-soft">
                    <img
                      src={proof.image}
                      alt={proof.title}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
