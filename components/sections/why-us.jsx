import { Check, Layers3, LockKeyhole, TrendingUp } from "lucide-react";

const pillars = [
  {
    title: "Unified Delivery Stack",
    description:
      "Websites, Shopify e-commerce, AI automation, and graphic design under one roof.",
    icon: Layers3,
  },
  {
    title: "Secure & Scalable Systems",
    description:
      "Enterprise-grade performance, robust infrastructure, and data security built for stability.",
    icon: LockKeyhole,
  },
  {
    title: "Growth-Focused Execution",
    description:
      "Digital marketing, conversion optimization, and clear communication designed to move business forward.",
    icon: TrendingUp,
  },
];

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-[#0B0F17] py-20 text-white">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-teal-300">
              WHY CHOOSE US
            </div>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-[3rem]">
              Built for trust, speed, and real business outcomes.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <article
                  key={pillar.title}
                  className="rounded-[28px] border border-white/10 bg-slate-900/60 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:bg-slate-900/80"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#163b39] text-teal-300 ring-1 ring-white/10">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="mb-3 flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-teal-500/15 text-teal-300">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.8} />
                    </span>
                    <h3 className="font-display text-xl font-semibold text-white">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-sm leading-7 text-slate-300">{pillar.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
