import { FinalCta, PageHero } from "@/components/v3/shared";
import { PricingGrid } from "@/components/v3/pricing";

export const metadata = {
  title: "Pricing",
  description:
    "Fixed prices for US small businesses: Launch from $1,500, Growth $3,000 to $8,000, Scale $8,000 to $18,000, Enterprise $18,000+. Agreed in writing before we start.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Fixed prices, agreed in writing."
        intro="No hourly billing, no surprise invoices. Your quote is confirmed in writing after the free consultation, and the price does not move unless the scope does."
      />

      <section className="section pt-12">
        <div className="wrap">
          <PricingGrid />
          <p className="mt-8 text-[15px] text-[#55524B]">
            Every project starts with a free consultation. Final price depends
            on scope and is confirmed in writing before we start.
          </p>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
