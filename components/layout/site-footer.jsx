import Link from "next/link";
import { Mail, Phone } from "lucide-react";

import { Logo } from "@/components/shared/logo";
import { legalLinks, siteMeta, socialLinks } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-[#0B0B0F] text-white">
      <div className="wrap py-9">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo dark />
            <p className="mt-4 text-[15px] leading-relaxed text-white/60">
              {siteMeta.tagline} A US-based digital agency building websites,
              AI assistants, and growth marketing for small businesses.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-[15px]">
            <a
              href={`mailto:${siteMeta.email}`}
              className="inline-flex items-center gap-2.5 font-medium text-white hover:text-[#7FB3FF]"
            >
              <Mail className="h-4 w-4 text-[#7FB3FF]" />
              {siteMeta.email}
            </a>
            <a
              href={`tel:${siteMeta.phoneRaw}`}
              className="inline-flex items-center gap-2.5 font-medium text-white hover:text-[#7FB3FF]"
            >
              <Phone className="h-4 w-4 text-[#7FB3FF]" />
              {siteMeta.phone}
            </a>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              US office: Middletown, Delaware
              <br />
              Engineering studio: DHA Phase 8, Broadway Commercial, Lahore
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-2.5 text-[15px]">
            <Link href="/services" className="font-medium text-white hover:text-[#7FB3FF]">
              Services
            </Link>
            <Link href="/portfolio" className="font-medium text-white hover:text-[#7FB3FF]">
              Work
            </Link>
            <Link href="/about" className="font-medium text-white hover:text-[#7FB3FF]">
              About
            </Link>
            <Link href="/pricing" className="font-medium text-white hover:text-[#7FB3FF]">
              Pricing
            </Link>
            <Link href="/contact" className="font-medium text-white hover:text-[#7FB3FF]">
              Contact
            </Link>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-5 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Zepra Tech. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-[#7FB3FF]">
                {link.label}
              </Link>
            ))}
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#7FB3FF]"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
