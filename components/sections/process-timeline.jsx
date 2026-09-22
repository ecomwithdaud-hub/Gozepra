import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { processSteps } from "@/lib/site";

export function ProcessTimeline() {
  return (
    <section className="section-shell bg-white/50">
      <div className="container">
        <SectionHeading
          eyebrow="How We Work"
          title="A clear six-step process that keeps delivery strategic, polished, and on track."
          description="Zepra Tech follows a structured workflow so clients understand the path from first discussion to post-launch growth and support."
          align="center"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-6">
          {processSteps.map((item, index) => (
            <Card
              key={item.step}
              className={`card-shine relative border-slate-200/80 bg-white/90 ${index === 2 ? "lg:-translate-y-3" : ""}`}
            >
              <CardHeader className="gap-3">
                <div className="font-display text-sm font-semibold tracking-[0.18em] text-primary">
                  {item.step}
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-7 text-brand-slate">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
