import { AeoStructuredAnswers } from "@/components/sections/aeo-structured-answers";
import { CaseStudySpotlight } from "@/components/sections/case-study-spotlight";
import { ContactSection } from "@/components/sections/contact-section";
import { EnterpriseCaseStudies } from "@/components/sections/enterprise-case-studies";

export const metadata = {
  title: "Platform Examples | Web Platforms, AI Systems & E-Commerce",
  description:
    "Explore Zepra Tech platform examples, architecture breakdowns, and live demo websites across web development, full-stack platforms, AI automation, and growth.",
};

export default function CaseStudiesPage() {
  return (
    <>
<section className="border-b border-slate-200 bg-white pt-28 pb-12 sm:pt-36 sm:pb-16">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h1 className="font-display text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Platform Examples
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Web platforms, AI systems, and e-commerce builds from Zepra Tech, with live demo websites you can open and inspect.
          </p>
        </div>
      </section>
      <EnterpriseCaseStudies />
      <CaseStudySpotlight
        eyebrow="Live Demo Spotlight"
        title="Live Demo Websites for US Local Businesses"
        description="We build modern Next.js and Tailwind websites with mobile first quote funnels and local search setup. Open the live demos yourself and use them like a customer would."
        metrics={[
          { label: "Delivery Timeline", value: "2 to 4 Weeks" },
          { label: "Live Demo Sites", value: "24" },
          { label: "Core Stack", value: "Next.js + Tailwind" },
        ]}
        image="/images/project.png"
        primaryHref="https://clearflow-plumbing.vercel.app/"
        primaryLabel="Open a Live Demo"
        secondaryHref="/contact"
        secondaryLabel="Request a Quote"
      />
      <AeoStructuredAnswers
        pageUrl="https://gozepra.tech/case-studies"
        pageTitle="Platform Examples | Zepra Tech"
        aiSummaryTitle="How Zepra Tech Builds Platforms"
        aiSummaryBody="Every Zepra Tech engagement starts with a clear plan, a fixed price, and weekly progress updates. Our custom web platforms, AI agents, and e-commerce builds are delivered with full code ownership."
      />
      <ContactSection showHeader={false} />
    </>
  );
}
