import { PageHero } from "@/components/layout/page-hero";
import { ContactSection } from "@/components/sections/contact-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Contact",
  description:
    "Contact Zepra Tech for web development, AI automation, marketing, SEO, ecommerce, design, support, and consultation.",
};

const nextSteps = [
  {
    title: "Share your requirements",
    description:
      "Tell us what you need to build, improve, or automate so we can understand the project clearly.",
  },
  {
    title: "Receive a focused response",
    description:
      "We review your inquiry around scope, direction, and fit before proposing the best next step.",
  },
  {
    title: "Move into consultation",
    description:
      "Once aligned, we can discuss delivery approach, timing, and the right solution path for your business.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Zepra Tech"
        title="Let’s talk about the website, AI system, or growth solution your business needs next."
        description="This page is designed to support business inquiries cleanly, whether you are reaching out from Pakistan or an international market. Use the form to start a serious project discussion."
        primaryAction={{ href: "#inquiry-form", label: "Send an Inquiry" }}
        secondaryAction={{ href: "/services", label: "Review Services" }}
      />

      <section className="section-shell bg-white/50">
        <div className="container">
          <SectionHeading
            eyebrow="What happens next"
            title="A straightforward lead flow built for professional conversations."
            description="The contact journey is structured to help both sides move quickly from initial interest to a more focused consultation."
            align="center"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {nextSteps.map((step, index) => (
              <Card
                key={step.title}
                className={`card-shine border-slate-200/80 bg-white/90 ${index === 1 ? "lg:-translate-y-4" : ""}`}
              >
                <CardHeader>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-7 text-brand-slate">
                  {step.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div id="inquiry-form">
        <ContactSection showHeader={false} />
      </div>
    </>
  );
}
