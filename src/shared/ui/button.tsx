"use client";

import * as React from "react";

import type { VariantProps } from "class-variance-authority";

import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "../utils/cn";

const buttonVariants = cva(
  "flex shrink-0 items-center justify-center whitespace-nowrap rounded-full font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-secondary hover:bg-primary/80 active:bg-primary ",
        purple:
          "bg-purple text-white hover:bg-purple/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:bg-purple",
        ghost: "bg-primary/5 hover:text-purple active:text-primary",
        link: "text-primary hover:text-purple active:text-primary",
      },
      rounded: {
        full: "rounded-full",
        lg: "rounded-lg",
        base: "rounded-base",
        sm: "rounded-sm",
        none: "rounded-none",
      },
      size: {
        lg: "h-12 px-10 text-base",
        base: "h-10 px-8 text-base",
        sm: "h-8 px-6 text-base",
        "icon-lg": "size-12 p-0",
        "icon-base": "size-10 p-0",
        "icon-sm": "size-8 p-0",
      },
    },
    defaultVariants: {
      rounded: "base",
      variant: "default",
      size: "base",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ rounded, variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
