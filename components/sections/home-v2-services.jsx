import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  Globe,
  Megaphone,
  Palette,
  ShoppingBag,
  Target,
} from "lucide-react";

const SERVICES = [
  {
    icon: Globe,
    title: "Web Development",
    from: "from $2,500",
    scope: "Custom websites and business platforms, built mobile first.",
    outcome: "A fast site that turns visits into calls, bookings, and orders.",
    href: "/website-development",
  },
  {
    icon: Bot,
    title: "AI Agents and Automation",
    from: "from $2,000",
    scope: "AI assistants trained on your services, prices, and FAQs.",
    outcome: "Questions answered and leads booked around the clock.",
    href: "/services",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    from: "from $5,000",
    scope: "Online stores with checkout, payments, and order tracking.",
    outcome: "A store your customers trust enough to buy from.",
    href: "/services",
  },
  {
    icon: Megaphone,
    title: "SEO and Growth",
    from: "from $750/month",
    scope: "Local search, Google Maps, and ads aimed at nearby buyers.",
    outcome: "Your business shows up when local customers search.",
    href: "/services",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    from: "from $1,500",
    scope: "Clear, modern design that matches your brand.",
    outcome: "Visitors understand your offer in seconds and act on it.",
    href: "/services",
  },
  {
    icon: Target,
    title: "Cold Outreach",
    from: "from $1,000/month",
    scope: "Email, SMS, and calling campaigns to verified US businesses.",
    outcome: "A steady pipeline of real conversations with buyers.",
    href: "/cold-outreaching",
  },
];

export function HomeV2Services() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
            What we build
          </p>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Everything your business needs to grow online
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Six services, one team. Pick one, or let us combine them into a
            single fixed price plan.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl sm:p-7"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                      {service.from}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {service.scope}
                  </p>
                  <p className="mt-3 border-t border-slate-100 pt-3 text-sm font-medium leading-relaxed text-slate-800">
                    {service.outcome}
                  </p>
                </div>
                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-blue-700 transition hover:text-blue-900"
                >
                  <span>Learn more</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
