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
    <section className="section">
      <div className="wrap">
        <div className="rounded-[24px] border border-[#E2E8F0] bg-white px-6 py-16 text-center sm:px-12">
          <h2 className="h-section mx-auto max-w-xl">Start with a free call.</h2>
          <p className="body-copy mx-auto mt-4 max-w-md">
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
