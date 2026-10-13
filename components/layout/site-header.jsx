"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  FileText,
  Globe,
  Image as ImageIcon,
  Megaphone,
  Menu,
  X,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { Logo } from "@/components/shared/logo";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/site";
import { cn } from "@/lib/utils";
import { serviceIconMap } from "@/components/shared/service-card";

const projectIcons = {
  "/website-development": Globe,
  "/case-studies": FileText,
  "/social-media-marketing": Megaphone,
  "/thumbnail-designing": ImageIcon,
};

const navTranslationKeys = {
  "/": "nav.home",
  "/about": "nav.about",
  "/services": "nav.services",
  "/portfolio": "nav.portfolio",
  "/roi-estimator": "nav.roiEstimator",
  "/case-studies": "nav.caseStudies",
  "/contact": "nav.contact",
  "/portal": "nav.portal",
};

const projectTranslationKeys = {
  "/website-development": "nav.websiteDevelopment",
  "/case-studies": "nav.caseStudies",
  "/social-media-marketing": "nav.socialMediaMarketing",
  "/thumbnail-designing": "nav.thumbnailDesigning",
};

const portfolioRelatedPaths = [
  "/portfolio",
  "/website-development",
  "/case-studies",
  "/social-media-marketing",
  "/thumbnail-designing",
];

function isPathActive(pathname, href) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isItemActive(item, pathname) {
  const childActive = item.children?.some((child) => isPathActive(pathname, child.href)) ?? false;

  if (!item.href) return childActive;
  if (item.href === "/") return pathname === "/";
  if (item.href === "/portfolio") {
    return portfolioRelatedPaths.some((p) => isPathActive(pathname, p));
  }
  return isPathActive(pathname, item.href) || childActive;
}

function ProjectIconBadge({ href }) {
  const Icon = projectIcons[href];
  if (!Icon) return null;

  return (
    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-200 group-hover/item:bg-blue-600 group-hover/item:text-white">
      <Icon className="h-4 w-4" />
    </span>
  );
}

function ServiceIconBadge({ icon }) {
  const Icon = serviceIconMap[icon];
  if (!Icon) return null;

  return (
    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-200 group-hover/item:bg-blue-600 group-hover/item:text-white">
      <Icon className="h-4 w-4" />
    </span>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useLanguage();
  const translatedServices = t("services.items");
  const [isOpen, setIsOpen] = useState(false);
  const [expandedNavItem, setExpandedNavItem] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const progressRef = useRef(null);
  const scrolledRef = useRef(false);
  const [pill, setPill] = useState({ left: 0, width: 0, visible: false, snap: true });

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Shrinks the header a little after scrolling and tracks how far down the page you are.
  useEffect(() => {
    let frame = 0;

    const update = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const nextScrolled = y > 12;
      const progress = max > 0 ? Math.min(1, y / max) : 0;

      if (scrolledRef.current !== nextScrolled) {
        scrolledRef.current = nextScrolled;
        setScrolled(nextScrolled);
      }

      progressRef.current?.style.setProperty(
        "transform",
        `translate3d(0, 0, 0) scaleX(${progress})`,
      );
      frame = 0;
    };

    const scheduleUpdate = () => {
      if (frame === 0) {
        frame = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame !== 0) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  // Moves the soft highlight under whichever nav item is hovered or focused.
  const movePillTo = (element) => {
    const nav = navRef.current;
    if (!nav || !element) return;

    const navBox = nav.getBoundingClientRect();
    const box = element.getBoundingClientRect();

    setPill((current) => ({
      left: box.left - navBox.left,
      width: box.width,
      visible: true,
      snap: !current.visible,
    }));
  };

  const hidePill = () => setPill((current) => ({ ...current, visible: false }));

  const isPortalRoute =
    pathname?.startsWith("/portal") ||
    pathname?.startsWith("/ceo") ||
    pathname?.startsWith("/admin") ||
    pathname?.startsWith("/employees");

  if (isPortalRoute) {
    return null;
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent px-3 pt-4 pointer-events-none">
      <div className="container pointer-events-none">
        <div
          className={cn(
            "pointer-events-auto relative mx-auto flex max-w-[1380px] items-center justify-between gap-2 rounded-full border border-slate-200/90 bg-white/90 px-3.5 shadow-[0_4px_24px_rgba(15,23,42,0.08)] backdrop-blur-xl [backface-visibility:hidden] transition-all duration-300 xl:gap-3 xl:px-5",
            scrolled ? "py-2 shadow-premium" : "py-2.5",
          )}
        >
          <Link href="/" aria-label="Zepra Tech home" className="shrink-0">
            <Logo compact textClassName="text-slate-900" />
          </Link>

          <nav
            ref={navRef}
            className="relative hidden shrink-0 items-center gap-0.5 lg:flex xl:gap-1"
            onMouseLeave={hidePill}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) hidePill();
            }}
          >
            <span
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute top-1/2 h-8 -translate-y-1/2 rounded-full bg-slate-100 border border-slate-200/80 motion-reduce:transition-none",
                pill.snap
                  ? "transition-opacity duration-200"
                  : "transition-[left,width,opacity] duration-300 ease-out",
                pill.visible ? "opacity-100" : "opacity-0",
              )}
              style={{ left: pill.left, width: pill.width }}
            />

            {navItems.map((item) => {
              const isActive = isItemActive(item, pathname);

              if (item.children?.length) {
                const isServicesMenu = item.href === "/services";

                return (
                  <div
                    key={item.label}
                    className="group relative shrink-0"
                    onMouseEnter={(event) => movePillTo(event.currentTarget)}
                    onFocus={(event) => movePillTo(event.currentTarget)}
                  >
                    <button
                      type="button"
                      onDoubleClick={(e) => {
                        e.preventDefault();
                        if (isServicesMenu) router.push("/services");
                      }}
                      title={isServicesMenu ? "Double-click to open dedicated Services page" : undefined}
                      className={cn(
                        "relative z-10 inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1.5 text-[13px] font-medium text-slate-600 transition-colors duration-300 hover:text-slate-950 xl:px-3 xl:text-sm",
                        isActive && "border border-blue-200 bg-blue-50 text-blue-700 shadow-sm hover:bg-blue-100 hover:text-blue-800",
                      )}
                      aria-haspopup="menu"
                      aria-expanded={isActive}
                    >
                      <span>{isServicesMenu ? t("nav.services") : t("nav.projects")}</span>
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180",
                          isActive ? "text-blue-600" : "text-slate-400",
                        )}
                      />
                    </button>
                    <div className="invisible absolute left-0 top-full z-[9999] isolate w-[min(460px,94vw)] translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <div className="relative isolate z-[9999] rounded-2xl border border-slate-200 bg-white p-3.5 shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
                        {isServicesMenu && (
                          <div className="mb-2.5 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
                              All Services ({item.children.length})
                            </span>
                            <Link
                              href="/services"
                              className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 transition-colors hover:text-blue-600"
                            >
                              <span>Open Services Page</span>
                              <ChevronRight className="h-3 w-3" />
                            </Link>
                          </div>
                        )}
                        <div className="max-h-[min(460px,65vh)] space-y-2 overflow-y-auto pr-1.5 scrollbar-thin overscroll-contain">
                          {item.children.map((child) => {
                            const title = isServicesMenu
                              ? translatedServices?.[child.index]?.title ?? child.label
                              : t(projectTranslationKeys[child.href] ?? "nav.projects");
                            const description = isServicesMenu
                              ? translatedServices?.[child.index]?.summary ?? child.description
                              : t(`${projectTranslationKeys[child.href]}Description`);

                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={cn(
                                  "group/item relative flex items-start gap-3 rounded-xl border border-slate-200/80 bg-slate-50/60 px-3.5 py-2.5 text-slate-900 shadow-sm transition-all duration-200 hover:border-blue-300 hover:bg-blue-50/50 hover:shadow-sm",
                                )}
                              >
                                {isServicesMenu
                                  ? <ServiceIconBadge icon={child.icon} />
                                  : <ProjectIconBadge href={child.href} />}
                                <span className="block min-w-0 flex-1">
                                  <span className="block text-sm font-bold text-slate-900 group-hover/item:text-blue-600">
                                    {title}
                                  </span>
                                  <span className="mt-0.5 block truncate text-xs leading-5 text-slate-500 group-hover/item:text-slate-700">
                                    {description}
                                  </span>
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={(event) => movePillTo(event.currentTarget)}
                  onFocus={(event) => movePillTo(event.currentTarget)}
                  className={cn(
                    "relative z-10 inline-flex shrink-0 items-center whitespace-nowrap rounded-full px-2.5 py-1.5 text-[13px] font-medium text-slate-600 transition-colors duration-300 hover:text-slate-950 xl:px-3 xl:text-sm",
                    isActive && "border border-blue-200 bg-blue-50 text-blue-700 shadow-sm hover:bg-blue-100 hover:text-blue-800",
                  )}
                >
                  {t(navTranslationKeys[item.href] ?? "nav.contact")}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 xl:gap-2">
            <div className="hidden items-center gap-2 lg:flex">
              <Button asChild className="group h-9 shrink-0 whitespace-nowrap px-3.5 text-xs font-bold xl:h-10 xl:px-4 xl:text-sm">
                <Link href="/contact">
                  {t("nav.bookConsultation")}
                  <ChevronRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="shrink-0">
              <LanguageSwitcher />
            </div>

            <button
              type="button"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-soft transition-colors hover:border-blue-300 hover:text-blue-600 lg:hidden"
              onClick={() => setIsOpen((current) => !current)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <div
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute inset-x-7 bottom-0 h-[2px] overflow-hidden rounded-full transition-opacity duration-300",
              scrolled ? "opacity-100" : "opacity-0",
            )}
          >
            <div
              ref={progressRef}
              className="h-full origin-left transform-gpu will-change-transform bg-gradient-to-r from-brand-blue to-brand-cyan"
              style={{ transform: "translate3d(0, 0, 0) scaleX(0)" }}
            />
          </div>
        </div>

        {isOpen ? (
          <div className="pointer-events-auto mt-3 max-h-[82vh] overflow-y-auto rounded-3xl border border-slate-200 bg-white/95 p-4 text-slate-900 shadow-2xl backdrop-blur-2xl sm:p-5 lg:hidden">
            <nav className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const isActive = isItemActive(item, pathname);

                if (item.children?.length) {
                  const isServicesMenu = item.href === "/services";
                  const isExpanded = expandedNavItem === item.label;

                  return (
                    <div key={item.label}>
                      <button
                        type="button"
                        onDoubleClick={(e) => {
                          e.preventDefault();
                          if (item.href) {
                            router.push(item.href);
                            setIsOpen(false);
                          }
                        }}
                        className={cn(
                          "flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-100 hover:text-slate-950",
                          isActive && "border border-blue-200 bg-blue-50 text-blue-700",
                        )}
                        aria-expanded={isExpanded}
                        onClick={() => setExpandedNavItem(isExpanded ? null : item.label)}
                      >
                        <span>{isServicesMenu ? t("nav.services") : t("nav.projects")}</span>
                        <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform duration-300", isExpanded && "rotate-180")} />
                      </button>
                      <div className={cn(
                        "mt-2 grid max-h-[42vh] gap-2 overflow-y-auto pl-2 pr-1 scrollbar-thin",
                        !isExpanded && "hidden",
                      )}>
                        {item.href && (
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between rounded-xl border border-blue-200 bg-blue-50 px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider text-blue-700"
                          >
                            <span>Open All {isServicesMenu ? "Services" : "Portfolio & Case Studies"}</span>
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        )}
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className="group/item flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-slate-900 transition-colors duration-200 hover:border-blue-300 hover:bg-blue-50/50"
                          >
                            {isServicesMenu
                              ? <ServiceIconBadge icon={child.icon} />
                              : <ProjectIconBadge href={child.href} />}
                            <span className="block min-w-0 flex-1">
                              <span className="block text-sm font-semibold text-slate-900">
                                {isServicesMenu
                                  ? translatedServices?.[child.index]?.title ?? child.label
                                  : t(projectTranslationKeys[child.href] ?? "nav.projects")}
                              </span>
                              <span className="mt-0.5 line-clamp-2 text-xs leading-5 text-slate-500">
                                {isServicesMenu
                                  ? translatedServices?.[child.index]?.summary ?? child.description
                                  : t(`${projectTranslationKeys[child.href]}Description`)}
                              </span>
                            </span>
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
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-100 hover:text-slate-950",
                      isActive && "border border-blue-200 bg-blue-50 text-blue-700",
                    )}
                  >
                    <span>{t(navTranslationKeys[item.href] ?? "nav.contact")}</span>
                  </Link>
                );
              })}
            </nav>
            <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
              <Button asChild variant="outline" className="w-full border-slate-200 bg-white text-slate-700 hover:bg-slate-50">
                <Link href="/services" onClick={() => setIsOpen(false)}>{t("nav.viewServices")}</Link>
              </Button>
              <Button asChild className="w-full bg-blue-600 font-bold text-white shadow-soft hover:bg-blue-700">
                <Link href="/contact" onClick={() => setIsOpen(false)}>{t("nav.bookConsultation")}</Link>
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
