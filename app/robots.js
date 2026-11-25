import { siteMeta } from "@/lib/site";

// AI crawlers are explicitly allowed so the agency can surface in AI
// answers (ChatGPT, Claude, Perplexity) as well as in Google search.
const aiCrawlers = [
  "GPTBot",
  "ClaudeBot",
  "PerplexityBot",
  "CCBot",
  "Google-Extended",
];

export default function robots() {
  return {
    rules: [
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: "/" })),
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${siteMeta.url}/sitemap.xml`,
  };
}
