import Link from "next/link";

import { pricingTiers } from "@/lib/site";
import { cn } from "@/lib/utils";

export function PricingCard({ tier }) {
  return (
    <article
      className={cn(
        "card flex flex-col",
        tier.popular && "border-[#0066FF] shadow-[0_16px_40px_-20px_rgba(0,102,255,0.35)]",
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-xl font-semibold text-[#111111]">{tier.name}</h3>
        {tier.popular ? (
          <span className="rounded-full bg-[#0066FF] px-3 py-1 text-xs font-bold text-white">
            Most Popular
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-2xl font-semibold tracking-tight text-[#0066FF]">
        {tier.price}
      </p>
      <p className="text-sm text-[#55524B]">{tier.detail}</p>
      <p className="mt-4 text-[15px] leading-relaxed text-[#55524B]">
        {tier.blurb}
      </p>
      <p className="mt-3 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#111111]">
        {tier.timeline}
      </p>
      <ul className="mt-5 space-y-2.5 border-t border-[#E2E8F0] pt-5 text-[15px] leading-relaxed text-[#55524B]">
        {tier.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <div className="mt-auto pt-6">
        <Link
          href="/contact"
          className="inline-flex w-full items-center justify-center rounded-full bg-[#0066FF] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0052CC]"
        >
          Book a free consultation
        </Link>
      </div>
    </article>
  );
}

export function PricingGrid({ tiers = pricingTiers }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {tiers.map((tier) => (
        <PricingCard key={tier.name} tier={tier} />
      ))}
    </div>
  );
}
