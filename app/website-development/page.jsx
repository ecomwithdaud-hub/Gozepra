import { AeoStructuredAnswers } from "@/components/sections/aeo-structured-answers";
import { CaseStudySpotlight } from "@/components/sections/case-study-spotlight";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { UsaDemoShowcase } from "@/components/sections/usa-demo-showcase";

export const metadata = {
  title: "Website Development | 24+ Live Client Demo Websites & Web Platforms",
  description:
    "Explore Zepra Tech website development work across 24 live US industry demo websites, client deployments, premium frontend showcases, ecommerce builds, and launch-ready web systems.",
};

export default function WebsiteDevelopmentPage() {
  return (
    <>
<section className="border-b border-slate-200 bg-white pt-28 pb-12 sm:pt-36 sm:pb-16">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h1 className="font-display text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Website Development for US Small Businesses
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Custom websites up to 5 pages, e-commerce stores, and custom platforms, with 24 live demo websites you can open and inspect.
          </p>
        </div>
      </section>
      <UsaDemoShowcase initialLimit={24} showViewAllLink={false} />
      <CaseStudySpotlight />
      <PortfolioPreview showCta={true} />
      <AeoStructuredAnswers
        pageUrl="https://gozepra.tech/website-development"
        pageTitle="Website Development Portfolio & 24 Live USA Demo Websites | Zepra Tech"
      />
    </>
  );
}
