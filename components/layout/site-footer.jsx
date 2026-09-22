import Link from "next/link";

import { Logo } from "@/components/shared/logo";
import { footerServices, navItems, siteMeta, socialLinks } from "@/lib/site";
import { slugify } from "@/lib/utils";

export function SiteFooter() {
  return (
    <footer className="section-shell-tight border-t border-white/60 bg-slate-950 text-white">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo
              className="[&_svg]:shadow-glow"
              textClassName="[&_div:first-child]:text-white [&_div:last-child]:text-slate-400"
            />
            <p className="mt-6 text-sm leading-7 text-slate-300">{siteMeta.tagline}</p>
            <div className="mt-6 space-y-2 text-sm text-slate-300">
              <div>{siteMeta.email}</div>
              <div>{siteMeta.whatsappNumber}</div>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">Quick links</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {navItems.filter((item) => item.href).map((item) => (
                <li key={item.href ?? item.label}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">Services</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {footerServices.map((service) => (
                <li key={service.title}>
                  <Link href={`/services#${slugify(service.title)}`} className="hover:text-white">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">Connect</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/team" className="hover:text-white">
                  Leadership & Departments
                </Link>
              </li>
              <li>
                <Link href="/website-development" className="hover:text-white">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/social-media-marketing" className="hover:text-white">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link href="/thumbnail-designing" className="hover:text-white">
                  Thumbnail Designing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Business inquiry
                </Link>
              </li>
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <Link href={social.href} className="hover:text-white">
                    {social.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Zepra Tech. All rights reserved.</div>
          <div><a href="https://www.linkedin.com/in/m-bilal-shah-gillani-3a7980220/">Crafted By UI</a>
          
          </div>
        </div>
      </div>
    </footer>
  );
}
