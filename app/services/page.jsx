import { CtaBanner } from "@/components/sections/cta-banner";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { ServicesGrid } from "@/components/sections/services-grid";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Services",
  description:
    "Explore Zepra Tech services including web development, AI bots, marketing, SEO, ecommerce, content, design, and customer support.",
};

const serviceLanes = [
  {
    title: "Build",
    description:
      "Web development, ecommerce solutions, graphic design, and video editing that shape a polished digital presence.",
  },
  {
    title: "Automate",
    description:
      "AI agents, bots, and practical systems that help teams reduce manual work and respond faster.",
  },
  {
    title: "Grow",
    description:
      "Marketing, SEO, GEO, AEO, content writing, and Google tools that improve reach and visibility.",
  },
  {
    title: "Support",
    description:
      "Customer support and service structures that help businesses stay responsive after launch.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <ServicesGrid showCta={false} />

      <section className="section-shell">
        <div className="container">
          <SectionHeading
            eyebrow="Service lanes"
            title="Structured around what businesses actually need."
            description="Our services are intentionally broad, but they are organized around practical business objectives rather than disconnected deliverables."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {serviceLanes.map((lane, index) => (
              <Card
                key={lane.title}
                className={`card-shine border-slate-200/80 bg-white/90 ${index === 1 ? "xl:-translate-y-4" : ""}`}
              >
                <CardHeader>
                  <CardTitle className="text-2xl">{lane.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-7 text-brand-slate">
                  {lane.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline />
      <CtaBanner />
    </>
  );
}
