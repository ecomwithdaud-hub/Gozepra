const STEPS = [
  {
    step: "Step 1",
    when: "Day 1",
    title: "Free 15 minute call",
    text: "Tell us what your business does, who your customers are, and what you want the website to do. No jargon, no pressure.",
  },
  {
    step: "Step 2",
    when: "Days 2 to 4",
    title: "Plan and design",
    text: "We map your pages, write the words with you, and design the look. You approve the design before we build anything.",
  },
  {
    step: "Step 3",
    when: "Days 5 to 12",
    title: "Build and test",
    text: "We build the site, connect your phone, email, booking, and payments, and test it on phones, tablets, and desktops.",
  },
  {
    step: "Step 4",
    when: "Day 14 and beyond",
    title: "Launch and support",
    text: "We launch, show you how to update it, and stay on call for changes, AI training, and growth work.",
  },
];

export function HomeV2Process() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
            How it works
          </p>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
            From first call to launch in about two weeks
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            You keep running your business. We handle the website, the AI, and
            the technical work.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((item) => (
            <article
              key={item.step}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-black uppercase tracking-widest text-blue-600">
                  {item.step}
                </span>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                  {item.when}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
