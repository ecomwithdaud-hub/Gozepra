import { AboutPreview } from "@/components/sections/about-preview";
import { WhyUs } from "@/components/sections/why-us";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "About",
  description:
    "Learn how Zepra Tech combines strategy, web development, AI systems, marketing, and support to help businesses grow with confidence.",
};

export default function AboutPage() {
  return (
    <>
      <AboutPreview showCta={false} />

      <section className="section-shell bg-white/50">
        <div className="container">
          <SectionHeading
            eyebrow="Operating Principles"
            title="How Zepra Tech approaches modern agency delivery."
            description="The business is positioned to help clients move with more confidence by combining strong leadership, polished execution, and long-term thinking."
            align="center"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <Card className="card-shine border-slate-200/80 bg-white/90">
              <CardHeader>
                <CardTitle>Professional by design</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-7 text-brand-slate">
                Every detail, from messaging to frontend polish, is shaped to
                help clients present themselves with more authority and trust.
              </CardContent>
            </Card>
            <Card className="card-shine border-slate-200/80 bg-white/90 lg:-translate-y-4">
              <CardHeader>
                <CardTitle>Execution with structure</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-7 text-brand-slate">
                Projects move through clear stages, giving clients visibility,
                alignment, and a more dependable decision-making process.
              </CardContent>
            </Card>
            <Card className="card-shine border-slate-200/80 bg-white/90">
              <CardHeader>
                <CardTitle>Built for ongoing growth</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-7 text-brand-slate">
                Zepra Tech supports growth after launch through optimization,
                campaigns, content, support, and scalable digital systems.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <WhyUs />
    </>
  );
}
