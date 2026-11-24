import { ResultsProofSection } from "@/components/sections/results-proof-section";
import { AiGrowthDominance } from "@/components/sections/ai-growth-dominance";

export const metadata = {
  title: "Performance Marketing, SEO, AEO, GEO & Paid Ads",
  description:
    "Explore Zepra Tech's full-spectrum growth architecture: SEO, AEO, GEO search dominance, viral TikTok Ads, Meta & Google Ads, and Google AdSense revenue scaling.",
};

export default function SocialMediaMarketingPage() {
  return (
    <>
<section className="border-b border-slate-200 bg-white pt-28 pb-12 sm:pt-36 sm:pb-16">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h1 className="font-display text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Marketing, SEO, and Paid Ads
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Search, AI answers, social media, and paid ads that bring US small businesses more calls and sales.
          </p>
        </div>
      </section>
      <ResultsProofSection />
      <AiGrowthDominance />
    </>
  );
}
