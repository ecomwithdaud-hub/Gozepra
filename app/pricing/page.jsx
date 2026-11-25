import { FinalCta, PageHero } from "@/components/v3/shared";
import { PricingGrid } from "@/components/v3/pricing";
import { BreadcrumbsJsonLd } from "@/components/seo/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/pricing" },
  title: "Pricing | Fixed Prices for US Small Business",
  description:
    "Fixed prices for US small businesses: Launch from $1,500, Growth $3,000 to $8,000, Scale $8,000 to $18,000, Enterprise $18,000+. Agreed in writing.",
};

// Every row comes from the real tier features in lib/site.js. Nothing here
// is an invented price: add-ons and retainers are always a custom quote.
const matrixRows = [
  { feature: "Custom website, up to 5 pages", values: ["Included", "Included", "Included", "Included"] },
  { feature: "Mobile-first, tap-to-call", values: ["Included", "Included", "Included", "Included"] },
  { feature: "Local SEO and Google Maps", values: ["Included", "Included", "Included", "Included"] },
  { feature: "Contact and quote forms", values: ["Included", "Included", "Included", "Included"] },
  { feature: "AI assistant trained on your services", values: ["Not included", "Included", "Included", "Included"] },
  { feature: "Booking, CRM, and lead follow-up", values: ["Not included", "Included", "Included", "Included"] },
  { feature: "Review and referral prompts", values: ["Not included", "Included", "Included", "Included"] },
  { feature: "Custom platform or online store", values: ["Not included", "Not included", "Included", "Included"] },
  { feature: "AI workflows across sales and support", values: ["Not included", "Not included", "Included", "Included"] },
  { feature: "Payments and dashboards", values: ["Not included", "Not included", "Included", "Included"] },
  { feature: "Multi-market and multi-location setup", values: ["Not included", "Not included", "Not included", "Included"] },
  { feature: "Custom AI systems and data pipelines", values: ["Not included", "Not included", "Not included", "Included"] },
  { feature: "Dedicated support and SLAs", values: ["Not included", "Not included", "Not included", "Included"] },
  { feature: "Launch timeline", values: ["2 to 3 weeks", "3 to 4 weeks", "6 to 8 weeks", "Agreed in writing"] },
  { feature: "Price", values: ["from $1,500", "$3,000 - $8,000", "$8,000 - $18,000", "$18,000+"] },
  { feature: "Extra pages, add-ons, monthly retainers", values: ["Custom quote", "Custom quote", "Custom quote", "Custom quote"] },
];

const tierNames = ["Launch", "Growth", "Scale", "Enterprise"];

export default function PricingPage() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Pricing", href: "/pricing" }]} />
      <PageHero
        eyebrow="Pricing"
        title="Fixed prices, agreed in writing."
        intro="No hourly billing, no surprise invoices. Your quote is confirmed in writing after the free consultation, and the price does not move unless the scope does."
      />

      <section className="section pt-12">
        <div className="wrap">
          <PricingGrid />

          <div className="mt-16">
            <h2 className="h-section">Compare the tiers</h2>
            <p className="body-copy mt-4 max-w-xl">
              Fixed project quote in writing before we start. Growth and Scale
              show a range because scope varies; your quote is one fixed number
              inside the range.
            </p>
            <div className="mt-8 overflow-x-auto rounded-[24px] border border-[#E2E8F0] bg-white">
              <table className="w-full min-w-[640px] border-collapse text-left text-[15px]">
                <thead>
                  <tr className="border-b border-[#E2E8F0]">
                    <th scope="col" className="px-5 py-4 font-semibold text-[#111111]">
                      What is included
                    </th>
                    {tierNames.map((tier) => (
                      <th
                        key={tier}
                        scope="col"
                        className="px-5 py-4 text-center font-semibold text-[#111111]"
                      >
                        {tier}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {matrixRows.map((row) => (
                    <tr key={row.feature} className="border-b border-[#E2E8F0] last:border-b-0">
                      <th scope="row" className="px-5 py-3.5 font-medium text-[#111111]">
                        {row.feature}
                      </th>
                      {row.values.map((value, index) => (
                        <td
                          key={tierNames[index]}
                          className="px-5 py-3.5 text-center text-[#55524B]"
                        >
                          {value === "Included" ? (
                            <span className="font-semibold text-[#0066FF]" aria-label="Included">
                              ✓
                            </span>
                          ) : (
                            value
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

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
