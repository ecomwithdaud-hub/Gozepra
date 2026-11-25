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
    <div className="border-y border-[#E2E8F0] bg-white py-10">
      <div className="wrap">
        <p className="text-center font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#55524B]">
          Works with the tools you already use
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {tools.map((tool) => (
            <span
              key={tool}
              className="text-lg font-semibold tracking-tight text-[#9A978F] transition-colors hover:text-[#111111]"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
