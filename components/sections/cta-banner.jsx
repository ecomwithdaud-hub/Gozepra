import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="section-shell-tight">
      <div className="container">
        <div className="glass-panel relative overflow-hidden px-6 py-10 sm:px-8 lg:px-12 lg:py-12">
          <div className="absolute inset-y-0 right-0 w-1/3 bg-brand-radial opacity-80" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <div className="eyebrow border-white/10 bg-white/10 text-cyan-300">
                Start your next project
              </div>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Ready to build a stronger website, smarter AI workflow, or
                better digital growth engine?
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Talk to Zepra Tech about web development, AI automation,
                ecommerce, SEO, marketing, design, and long-term support. We
                structure projects for credibility, performance, and scalable
                business growth.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="xl">
                <Link href="/contact">
                  Book a Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="light">
                <Link href="/services">
                  <PhoneCall className="h-4 w-4" />
                  View Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
