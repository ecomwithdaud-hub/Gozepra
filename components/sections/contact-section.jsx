import Link from "next/link";
import { Globe, Mail, PhoneCall, Users2 } from "lucide-react";

import { ContactForm } from "@/components/shared/contact-form";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteMeta, socialLinks } from "@/lib/site";

export function ContactSection({ showHeader = true }) {
  return (
    <section className="section-shell">
      <div className="container">
        {showHeader ? (
          <SectionHeading
            eyebrow="Contact"
            title="Start a business conversation with Zepra Tech."
            description="Use the inquiry form for web development, AI automation, digital marketing, ecommerce, design, SEO, or technical support needs."
          />
        ) : null}

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <Card className="card-shine border-slate-200/80 bg-white/90">
              <CardHeader>
                <Badge>Business inquiry</Badge>
                <CardTitle className="pt-2 text-2xl">
                  Clear contact options for local and international clients.
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm leading-7 text-brand-slate">
                <InfoRow
                  icon={<Mail className="h-5 w-5" />}
                  label="Email"
                  value={siteMeta.email}
                />
                <InfoRow
                  icon={<PhoneCall className="h-5 w-5" />}
                  label="WhatsApp"
                  value={siteMeta.whatsappNumber}
                />
                <InfoRow
                  icon={<Globe className="h-5 w-5" />}
                  label="Markets"
                  value="Pakistan and international businesses"
                />
                <InfoRow
                  icon={<Users2 className="h-5 w-5" />}
                  label="Best for"
                  value="Web, AI, growth, ecommerce, and support projects"
                />
              </CardContent>
            </Card>

            <div className="grid gap-4 sm:grid-cols-2">
              <Button asChild size="lg">
                <Link href={siteMeta.whatsappLink} target="_blank" rel="noreferrer">
                  Chat on WhatsApp
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={`mailto:${siteMeta.email}`}>Send an Email</Link>
              </Button>
            </div>

            <Card className="card-shine border-slate-200/80 bg-white/90">
              <CardHeader>
                <CardTitle className="text-xl">Social presence</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:border-primary/20 hover:text-primary"
                  >
                    {social.label}
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>

          <Card className="card-shine border-slate-200/80 bg-white/95">
            <CardHeader>
              <CardTitle className="text-2xl">Request a consultation</CardTitle>
              <p className="text-sm leading-7 text-brand-slate">
                Share your business goals, timeline, and service needs. The
                form now works as a frontend-only inquiry draft that opens your
                email app with the details filled in.
              </p>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-4 rounded-[22px] border border-slate-200/70 bg-slate-50/80 p-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white">
        {icon}
      </div>
      <div>
        <div className="text-sm font-semibold text-slate-950">{label}</div>
        <div className="mt-1 text-sm leading-7 text-brand-slate">{value}</div>
      </div>
    </div>
  );
}
