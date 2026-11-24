import { ContactSection } from "@/components/sections/contact-section";

export const metadata = {
  title: "Contact",
  description:
    "Contact Zepra Tech for web development, AI automation, marketing, SEO, ecommerce, design, support, and consultation.",
};

export default function ContactPage() {
  return (
    <>
<section className="border-b border-slate-200 bg-white pt-28 pb-12 sm:pt-36 sm:pb-16">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h1 className="font-display text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Contact Zepra Tech
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Book a free consultation or call +1 (302) 469-4003. We reply within 24 hours.
          </p>
        </div>
      </section>
      <div id="inquiry-form">
        <ContactSection showHeader={false} />
      </div>
    </>
  );
}
