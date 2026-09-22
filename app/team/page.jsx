import { TeamSection } from "@/components/sections/team-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Team",
  description:
    "Meet the Zepra Tech leadership team and departments across strategy, engineering, AI, outreach, and growth.",
};

const teamValues = [
  {
    title: "Clear leadership hierarchy",
    description:
      "Decision-making stays aligned through defined leadership roles across strategy, technology, and direction.",
  },
  {
    title: "Cross-functional delivery",
    description:
      "Engineering, AI, outreach, and growth teams support one another so projects stay connected end to end.",
  },
  {
    title: "Client-facing professionalism",
    description:
      "The team structure is designed to communicate stability, accountability, and execution confidence to clients.",
  },
];

export default function TeamPage() {
  return (
    <>
      <section className="section-shell bg-white/50">
        <div className="container">
          <SectionHeading
            eyebrow="Team model"
            title="Built for delivery confidence and long-term collaboration."
            description="This structure gives clients clarity on who is driving strategy, who owns delivery, and how communication flows through the agency."
            align="center"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {teamValues.map((value, index) => (
              <Card
                key={value.title}
                className={`card-shine border-slate-200/80 bg-white/90 ${index === 1 ? "lg:-translate-y-4" : ""}`}
              >
                <CardHeader>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-7 text-brand-slate">
                  {value.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <TeamSection showHeader={false} />
    </>
  );
}
