"use client";

import { MessageCircle, Phone } from "lucide-react";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#E2E8F0] bg-white/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0066FF] px-4 py-3 text-sm font-semibold text-white"
        >
          <Phone className="h-4 w-4" />
          Book 15-Min Call
        </a>
        <a
          href="https://wa.me/13024694003"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-4 py-3 text-sm font-semibold text-[#111111]"
        >
          <MessageCircle className="h-4 w-4 text-[#0066FF]" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
