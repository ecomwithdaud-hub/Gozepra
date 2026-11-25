"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

import { Logo } from "@/components/shared/logo";
import { cn } from "@/lib/utils";
import { services } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// The dropdown lists exactly the 12 real services, 1:1 with /services.
// It is built from the services data so the count and links can never drift.
const menuGroups = [
  {
    heading: "Build",
    slugs: ["web-development", "ecommerce-solutions", "graphic-design", "video-editing"],
  },
  {
    heading: "Automate & Rank",
    slugs: ["ai-agents-bots", "seo-geo-aeo", "google-my-business", "google-adsense"],
  },
  {
    heading: "Grow & Outreach",
    slugs: ["digital-marketing", "content-writing-blogging", "cold-outreach", "customer-support-service"],
  },
];

const megaMenu = menuGroups.map((group) => ({
  heading: group.heading,
  items: group.slugs.map((slug) => {
    const service = services.find((item) => item.slug === slug);
    return { href: service.href, label: service.title };
  }),
}));

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    setMenuOpen(false);
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKey(event) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    function onClick(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  const navLink = (href) =>
    cn(
      "rounded-full px-4 py-2 text-[15px] font-medium text-[#55524B] transition-colors hover:text-[#111111]",
      pathname === href && "bg-white text-[#111111]",
    );

  return (
    <header className="sticky top-0 z-50 border-b border-[#E2E8F0] bg-[#F6F3EE]/95 backdrop-blur">
      <div className="wrap flex h-[72px] items-center justify-between gap-4">
        <Link href="/" aria-label="Zepra Tech home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          <Link href="/" className={navLink("/")}>
            Home
          </Link>

          <div ref={menuRef} className="relative">
            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              aria-expanded={menuOpen}
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-4 py-2 text-[15px] font-medium text-[#55524B] transition-colors hover:text-[#111111]",
                pathname.startsWith("/services") && "bg-white text-[#111111]",
              )}
            >
              Services
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  menuOpen && "rotate-180",
                )}
              />
            </button>
            {menuOpen ? (
              <div className="absolute left-1/2 top-[calc(100%+14px)] w-[760px] -translate-x-1/2 rounded-[24px] border border-[#E2E8F0] bg-white p-6 shadow-[0_24px_64px_-24px_rgba(17,17,17,0.25)]">
                <div className="grid grid-cols-3 gap-6">
                  {megaMenu.map((group) => (
                    <div key={group.heading}>
                      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0066FF]">
                        {group.heading}
                      </p>
                      <ul className="mt-4 space-y-2.5">
                        {group.items.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className="text-[15px] font-medium text-[#111111] hover:text-[#0066FF]"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-[#E2E8F0] pt-4">
                  <p className="text-sm text-[#55524B]">
                    Twelve services, one team, one fixed price.
                  </p>
                  <Link
                    href="/services"
                    className="text-sm font-semibold text-[#0066FF]"
                  >
                    All services
                  </Link>
                </div>
              </div>
            ) : null}
          </div>

          {links.slice(1).map((link) => (
            <Link key={link.href} href={link.href} className={navLink(link.href)}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-[#0066FF] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0052CC] sm:inline-flex"
          >
            Book a Discovery Call
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-[#111111] lg:hidden"
            onClick={() => setIsOpen((current) => !current)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <nav
          className="border-t border-[#E2E8F0] bg-[#F6F3EE] px-5 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={cn(
                "rounded-2xl px-4 py-3 text-base font-medium text-[#55524B]",
                pathname === "/" && "bg-white text-[#111111]",
              )}
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className={cn(
                "rounded-2xl px-4 py-3 text-base font-medium text-[#55524B]",
                pathname.startsWith("/services") && "bg-white text-[#111111]",
              )}
            >
              Services
            </Link>
            {links.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "rounded-2xl px-4 py-3 text-base font-medium text-[#55524B]",
                  pathname === link.href && "bg-white text-[#111111]",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-full bg-[#0066FF] px-5 py-3 text-center text-base font-semibold text-white"
            >
              Book a Discovery Call
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
