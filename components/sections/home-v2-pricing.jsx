import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const TIERS = [
  {
    id: "launch",
    name: "Launch",
    price: "from $2,500",
    period: "one time",
    tagline: "For a small business that needs a sharp website, fast.",
    features: [
      "Custom website, up to 5 pages",
      "Mobile first design, tap to call and directions",
      "Local SEO setup and Google Maps listing",
      "Contact and quote forms connected to your email",
      "Launch in 2 to 3 weeks",
    ],
    popular: false,
  },
  {
    id: "growth",
    name: "Growth",
    price: "$5,000 - $12,000",
    period: "one time",
    tagline: "For a business that wants the website to also answer and book.",
    features: [
      "Everything in Launch, plus:",
      "AI assistant trained on your services and prices",
      "Booking, CRM, and lead follow up connected",
      "Review and referral prompts built in",
      "Launch in 3 to 4 weeks",
    ],
    popular: true,
  },
  {
    id: "scale",
    name: "Scale",
    price: "$12,000 - $25,000",
    period: "one time",
    tagline: "For a growing business that needs a custom platform.",
    features: [
      "Everything in Growth, plus:",
      "Custom platform or online store",
      "AI workflows across sales and support",
      "Payments, dashboards, and integrations",
      "Launch in 6 to 8 weeks",
    ],
    popular: false,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "$25,000+",
    period: "scoped per project",
    tagline: "For multi location and multi market businesses.",
    features: [
      "Everything in Scale, plus:",
      "Multi market and multi location setup",
      "Custom AI systems and data pipelines",
      "Dedicated support and SLAs",
      "Timeline agreed in writing",
    ],
    popular: false,
  },
];

export function HomeV2Pricing() {
  return (
    <section id="pricing" className="scroll-mt-28 border-t border-slate-200 bg-white py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
            Pricing
          </p>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Fixed prices, agreed before we start
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            No hourly billing, no surprise invoices. You get a written quote
            after the free consultation, and the price does not move unless the
            scope does.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TIERS.map((tier) => (
            <article
              key={tier.id}
              className={`relative flex h-full flex-col justify-between rounded-3xl border p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl sm:p-7 ${
                tier.popular
                  ? "border-2 border-blue-600 bg-blue-600 text-white shadow-xl shadow-blue-500/20"
                  : "border-slate-200 bg-white"
              }`}
            >
              {tier.popular ? (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-slate-900 px-4 py-1 text-[11px] font-bold uppercase tracking-widest text-white shadow-md">
                  Most popular
                </span>
              ) : null}
              <div>
                <h3
                  className={`font-display text-xl font-bold ${
                    tier.popular ? "text-white" : "text-slate-900"
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`mt-1 font-display text-2xl font-black ${
                    tier.popular ? "text-white" : "text-blue-700"
                  }`}
                >
                  {tier.price}
                </p>
                <p
                  className={`text-xs font-semibold ${
                    tier.popular ? "text-blue-100" : "text-slate-500"
                  }`}
                >
                  {tier.period}
                </p>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    tier.popular ? "text-blue-50" : "text-slate-600"
                  }`}
                >
                  {tier.tagline}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <CheckCircle2
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          tier.popular ? "text-blue-200" : "text-emerald-600"
                        }`}
                      />
                      <span className={tier.popular ? "text-white" : "text-slate-700"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/contact"
                className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-bold uppercase tracking-wider transition ${
                  tier.popular
                    ? "bg-white text-blue-700 hover:bg-blue-50"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                <span>Book a free consultation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Every project starts with a free consultation. Final price depends on
          scope and is confirmed in writing before we start.
        </p>
      </div>
    </section>
  );
}
