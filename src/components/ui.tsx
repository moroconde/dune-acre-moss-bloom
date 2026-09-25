import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-wide transition-[color,background-color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/50 focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96] [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-sage text-cream shadow-[0_1px_0_0_rgb(28_26_23/0.08)] hover:bg-sage-deep",
        ink: "bg-ink text-cream hover:bg-ink-soft",
        outline:
          "border border-line bg-transparent text-ink hover:border-ink/30 hover:bg-cream",
        ghost: "text-ink hover:bg-paper-deep",
        cream:
          "bg-cream text-sage hover:bg-paper border border-cream/20",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-5",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-xl border border-line bg-cream px-3.5 text-sm text-ink shadow-[0_1px_0_0_rgb(28_26_23/0.04)] placeholder:text-muted/80 outline-none transition-[border-color,box-shadow] duration-150 focus:border-sage/50 focus:ring-2 focus:ring-sage/20",
        className,
      )}
      {...props}
    />
  );
}

export function Label({
  className,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        "text-xs font-medium uppercase tracking-[0.16em] text-muted",
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-28 w-full rounded-xl border border-line bg-cream px-3.5 py-3 text-sm text-ink shadow-[0_1px_0_0_rgb(28_26_23/0.04)] placeholder:text-muted/80 outline-none transition-[border-color,box-shadow] duration-150 focus:border-sage/50 focus:ring-2 focus:ring-sage/20",
        className,
      )}
      {...props}
    />
  );
}
