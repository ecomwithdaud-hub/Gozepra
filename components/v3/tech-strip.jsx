const tools = [
  "Next.js",
  "OpenAI",
  "WhatsApp Business",
  "Google Business Profile",
  "Stripe",
  "Shopify",
  "HubSpot",
  "Twilio",
];

export function TechStrip() {
  return (
    <div className="overflow-hidden border-y border-[#E2E8F0] bg-white py-10">
      <p className="text-center font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#55524B]">
        Works with the tools you already use
      </p>
      <div className="mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
          {[...tools, ...tools].map((tool, index) => (
            <span
              key={`${tool}-${index}`}
              aria-hidden={index >= tools.length}
              className="mx-5 whitespace-nowrap text-lg font-semibold tracking-tight text-[#9A978F] transition-colors hover:text-[#111111]"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
