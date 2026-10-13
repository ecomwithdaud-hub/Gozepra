import { cn } from "@/lib/utils";

function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-slate-800 bg-[#070f24] text-white shadow-xl shadow-slate-950/15 backdrop-blur-md transition-all duration-300",
        className,
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }) {
  return <div className={cn("flex flex-col gap-3 p-6", className)} {...props} />;
}

function CardTitle({ className, ...props }) {
  return (
    <h3
      className={cn("font-display text-xl font-semibold tracking-tight text-white", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }) {
  return <p className={cn("text-sm leading-6 text-slate-300", className)} {...props} />;
}

function CardContent({ className, ...props }) {
  return <div className={cn("px-6 pb-6", className)} {...props} />;
}

function CardFooter({ className, ...props }) {
  return <div className={cn("flex items-center px-6 pb-6 pt-2", className)} {...props} />;
}

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
