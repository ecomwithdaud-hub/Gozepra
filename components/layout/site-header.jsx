"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-[linear-gradient(135deg,rgba(249,252,255,0.97),rgba(236,245,255,0.92),rgba(244,249,255,0.96))] px-3 pt-4 backdrop-blur-xl">
      <div className="container">
        <div className="surface-panel flex items-center justify-between gap-4 px-5 py-4 lg:px-7">
          <Link href="/" aria-label="Zepra Tech home">
            <Logo compact />
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => {
              const isActive =
                item.href
                  ? item.href === "/"
                    ? pathname === item.href
                    : pathname === item.href ||
                      pathname.startsWith(`${item.href}/`) ||
                      item.children?.some(
                        (child) =>
                          pathname === child.href || pathname.startsWith(`${child.href}/`),
                      )
                  : item.children?.some(
                      (child) =>
                        pathname === child.href || pathname.startsWith(`${child.href}/`),
                    );

              if (item.children?.length) {
                return (
                  <div key={item.label} className="group relative">
                    <button
                      type="button"
                      className={cn(
                        "flex items-center rounded-full px-4 py-2 pr-9 text-sm font-medium text-slate-600 transition-all duration-300 hover:bg-slate-100 hover:text-slate-950",
                        isActive && "bg-slate-950 text-white shadow-soft hover:bg-slate-900 hover:text-white",
                      )}
                      aria-haspopup="menu"
                      aria-expanded={isActive ? "true" : "false"}
                    >
                      {item.label}
                    </button>
                    <ChevronDown
                      className={cn(
                        "pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180",
                        isActive ? "text-white" : "text-slate-500",
                      )}
                    />
                    <div className="invisible absolute left-0 top-full z-30 mt-3 w-[320px] translate-y-2 rounded-[28px] border border-slate-200/80 bg-white/96 p-3 opacity-0 shadow-premium backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <div className="space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-[22px] px-4 py-3 transition-colors duration-200 hover:bg-slate-100"
                          >
                            <div className="text-sm font-semibold text-slate-950">{child.label}</div>
                            <div className="mt-1 text-xs leading-5 text-brand-slate">
                              {child.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-300 hover:bg-slate-100 hover:text-slate-950",
                    isActive && "bg-slate-950 text-white shadow-soft hover:bg-slate-900 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild variant="outline">
              <Link href="/services">View Services</Link>
            </Button>
            <Button asChild>
              <Link href="/contact">
                Book a Consultation
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-soft transition-colors hover:border-primary/20 hover:text-primary lg:hidden"
            onClick={() => setIsOpen((current) => !current)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen ? (
          <div className="surface-panel mt-3 px-5 py-5 lg:hidden">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive =
                  item.href
                    ? item.href === "/"
                      ? pathname === item.href
                      : pathname === item.href ||
                        pathname.startsWith(`${item.href}/`) ||
                        item.children?.some(
                          (child) =>
                            pathname === child.href || pathname.startsWith(`${child.href}/`),
                        )
                    : item.children?.some(
                        (child) =>
                          pathname === child.href || pathname.startsWith(`${child.href}/`),
                      );

                if (item.children?.length) {
                  return (
                    <div key={item.label}>
                      <button
                        type="button"
                        className={cn(
                          "flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-slate-100 hover:text-slate-950",
                          isActive && "bg-slate-950 text-white shadow-soft hover:bg-slate-900 hover:text-white",
                        )}
                        aria-haspopup="menu"
                        aria-expanded={isActive ? "true" : "false"}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      <div className="mt-2 grid gap-2 pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 transition-colors duration-200 hover:border-primary/20 hover:bg-slate-50"
                          >
                            <div className="text-sm font-semibold text-slate-950">{child.label}</div>
                            <div className="mt-1 text-xs leading-5 text-brand-slate">
                              {child.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-slate-100 hover:text-slate-950",
                      isActive && "bg-slate-950 text-white shadow-soft hover:bg-slate-900 hover:text-white",
                    )}
                  >
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Button asChild variant="outline" className="w-full">
                <Link href="/services">View Services</Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/contact">Book a Consultation</Link>
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
