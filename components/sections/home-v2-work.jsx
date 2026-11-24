import Link from "next/link";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";

const DEMOS = [
  {
    name: "ClearFlow Plumbing and Drain",
    trade: "Plumbing",
    what: "Emergency calls, instant quotes, and a service area checker, built for a local plumbing business.",
    href: "https://clearflow-plumbing.vercel.app/",
  },
  {
    name: "Summit Commercial Roofing",
    trade: "Roofing",
    what: "A roofing site that turns storm damage searches into booked inspections and estimate requests.",
    href: "https://summit-roofing-demo.vercel.app/",
  },
  {
    name: "Apex Precision Auto Care",
    trade: "Auto Care",
    what: "Online booking, service menus, and clear pricing for a local auto shop.",
    href: "https://apex-auto-care.vercel.app/",
  },
];

export function HomeV2Work() {
  return (
    <section id="work" className="scroll-mt-28 border-t border-slate-200 bg-white py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
            Selected work
          </p>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Look at real websites before you decide
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            These are live demo websites we built to show our work. Click any
            of them and use it like a customer would. Your website gets the
            same treatment.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {DEMOS.map((demo) => (
            <article
              key={demo.name}
              className="group flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
            >
              <div className="border-b border-slate-100 bg-slate-900 px-5 py-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  Live demo
                </span>
                <p className="mt-3 font-display text-xl font-bold leading-snug text-white">
                  {demo.name}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-blue-300">
                  {demo.trade}
                </p>
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <p className="text-sm leading-relaxed text-slate-600">
                  {demo.what}
                </p>
                <a
                  href={demo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-blue-700"
                >
                  <span>Open live demo</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-bold text-slate-800 transition hover:border-blue-400 hover:text-blue-700"
          >
            <span>See all 24 live demo websites</span>
            <ArrowRight className="h-4 w-4 text-blue-600" />
          </Link>
          <p className="mt-3 text-xs text-slate-500">
            Demo websites are examples of our work, not our clients.
          </p>
        </div>
      </div>
    </section>
  );
}
