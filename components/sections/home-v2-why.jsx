import { Clock, KeyRound, MapPin, UserCheck } from "lucide-react";

const POINTS = [
  {
    icon: UserCheck,
    title: "Founder led",
    text: "Every project is reviewed by CEO Muhammad Daud Ali Lashari before launch. You talk to the people building your site, not a sales desk.",
  },
  {
    icon: MapPin,
    title: "US office, global team",
    text: "Our US office is in Middletown, Delaware, and our delivery team works from Lahore, Pakistan. US business hours, global delivery speed.",
  },
  {
    icon: KeyRound,
    title: "You own everything",
    text: "Your code, your domain, your accounts, your data. 100% ownership, no lock in, no monthly hostage fees.",
  },
  {
    icon: Clock,
    title: "Fixed price, fast replies",
    text: "A written fixed price before we start, and a reply within 24 hours whenever you write or call.",
  },
];

export function HomeV2Why() {
  return (
    <section className="border-t border-slate-200 bg-slate-900 py-16 text-white sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-300">
            Why Zepra Tech
          </p>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight sm:text-5xl">
            A small team that answers, builds, and ships
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            We are a digital engineering and marketing agency founded in 2025.
            We keep the team small, the work senior, and the promises few.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((point) => {
            const Icon = point.icon;
            return (
              <article
                key={point.title}
                className="rounded-3xl border border-slate-800 bg-slate-800/60 p-6 transition-all hover:-translate-y-1 hover:border-blue-400"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {point.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
