// BreadcrumbList JSON-LD for inner pages. Pass the trail after Home, e.g.
// [{ name: "Services", href: "/services" }, { name: "Web Development", href: "/services/web-development" }].
export function BreadcrumbsJsonLd({ items }) {
  const trail = [{ name: "Home", href: "/" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://gozepra.tech${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
