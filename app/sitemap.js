import { services, siteMeta } from "@/lib/site";

// Every public page, listed explicitly. /services/cold-outreach is left
// out on purpose: it canonicals to /cold-outreaching, the main page for
// that service, so only the canonical URL belongs in the sitemap.
const servicePages = services
  .filter((service) => service.slug !== "cold-outreach")
  .map((service) => service.href);

const extraPages = [
  "/portfolio",
  "/case-studies",
  "/pricing",
  "/about",
  "/contact",
  "/website-development",
  "/social-media-marketing",
  "/thumbnail-designing",
  "/cold-outreaching",
  "/privacy-policy",
  "/terms-of-use",
  "/human-rights-policy",
  "/modern-slavery-act",
];

const policyPages = new Set([
  "/privacy-policy",
  "/terms-of-use",
  "/human-rights-policy",
  "/modern-slavery-act",
]);

export default function sitemap() {
  const pages = ["/", "/services", ...servicePages, ...extraPages];

  return pages.map((href) => ({
    url: `${siteMeta.url}${href}`,
    lastModified: new Date(),
    changeFrequency: href === "/" ? "weekly" : "monthly",
    priority: href === "/"
      ? 1
      : href === "/services" || href === "/pricing" || href === "/contact"
        ? 0.9
        : policyPages.has(href)
          ? 0.3
          : 0.8,
  }));
}
