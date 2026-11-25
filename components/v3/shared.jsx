import Link from "next/link";

export function PageHero({ eyebrow, title, intro }) {
  return (
    <section className="pt-28 sm:pt-36">
      <div className="wrap">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="h-display mt-4 max-w-3xl">{title}</h1>
        {intro ? <p className="body-copy mt-5 max-w-2xl">{intro}</p> : null}
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="bg-[#0B0B0F] py-24 lg:py-[120px]">
      <div className="wrap">
        <div className="rounded-[24px] border border-white/10 bg-white/[0.04] px-6 py-16 text-center sm:px-12">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#7FB3FF]">
            03 // Start
          </p>
          <h2 className="mx-auto mt-4 max-w-xl text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:text-5xl">
            Start with a free call.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-[1.6] text-white/70 sm:text-lg">
            Tell us about your business. We reply within 24 hours.
          </p>
          <Link href="/contact" className="btn-primary mt-8">
            Book a free consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
