import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { type ButtonHTMLAttributes, forwardRef } from "react";

import { cx } from "@/utils/tailwind";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	};

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 font-mono tracking-wide",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary/85 border border-primary",
				destructive:
					"bg-destructive text-destructive-foreground hover:bg-destructive/90 border border-destructive",
				outline: "border border-border bg-transparent hover:bg-accent hover:text-accent-foreground",
				secondary:
					"bg-secondary text-secondary-foreground border border-border hover:bg-secondary/70",
				ghost:
					"hover:bg-accent hover:text-accent-foreground border border-transparent hover:border-border",
				link: "text-primary underline-offset-4 hover:underline border-transparent",
			},
			size: {
				default: "h-9 px-4 py-2",
				sm: "h-8 px-3 text-xs",
				lg: "h-10 px-8",
				icon: "h-9 w-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp className={cx(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
		);
	}
);
Button.displayName = "Button";

export type { ButtonProps };
export { Button, buttonVariants };
