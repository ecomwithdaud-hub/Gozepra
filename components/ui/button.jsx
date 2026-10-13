import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-md hover:-translate-y-0.5 hover:bg-primary/95",
        secondary:
          "bg-slate-100 text-slate-800 shadow-soft hover:-translate-y-0.5 hover:bg-slate-200",
        outline:
          "border border-slate-200 bg-white text-slate-800 shadow-soft hover:-translate-y-0.5 hover:border-blue-400 hover:bg-slate-50 hover:text-blue-600",
        ghost:
          "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
        light:
          "border border-slate-200 bg-white text-slate-800 shadow-soft hover:bg-slate-50 hover:text-blue-600",
      },
      size: {
        default: "h-11 px-5",
        lg: "h-12 px-6 text-[15px]",
        xl: "h-14 px-7 text-[15px]",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
