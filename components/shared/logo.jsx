import { cn } from "@/lib/utils";

export function Logo({ className = "" }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden="true"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0066FF]"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M4.5 5.5h11L6.8 14.5h8.7"
            stroke="white"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="leading-none">
        <span className="block text-lg font-semibold tracking-tight text-[#111111]">
          Zepra Tech
        </span>
        <span className="mt-1 block font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#55524B]">
          Digital Agency
        </span>
      </span>
    </span>
  );
}
