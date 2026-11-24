import { cn } from "@/lib/utils";

export function Logo({ className = "" }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden="true"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0066FF] text-xl font-bold text-white"
      >
        Z
      </span>
      <span className="leading-none">
        <span className="block text-lg font-semibold tracking-tight text-[#111111]">
          Zepra Tech
        </span>
        <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.18em] text-[#55524B]">
          Since 2025
        </span>
      </span>
    </span>
  );
}
