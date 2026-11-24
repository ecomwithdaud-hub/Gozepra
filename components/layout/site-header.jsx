"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

import { Logo } from "@/components/shared/logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E2E8F0] bg-[#F6F3EE]/95 backdrop-blur">
      <div className="wrap flex h-[72px] items-center justify-between gap-4">
        <Link href="/" aria-label="Zepra Tech home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-[15px] font-medium text-[#55524B] transition-colors hover:text-[#111111]",
                pathname === link.href && "bg-white text-[#111111]",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-[#0066FF] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0052CC] sm:inline-flex"
          >
            Book a free consultation
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
            {links.map((link) => (
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
              Book a free consultation
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
