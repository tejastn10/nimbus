import { cva, type VariantProps } from "class-variance-authority";
import type { FC, HTMLAttributes } from "react";
import { cx } from "@/utils/tailwind";

type BadgeProps = HTMLAttributes<HTMLDivElement> &
	VariantProps<typeof badgeVariants> & {
		noHover?: boolean;
	};

const badgeVariants = cva(
	"inline-flex items-center border px-2.5 py-0.5 text-xs font-mono font-medium tracking-wide transition-colors focus:outline-hidden focus:ring-1 focus:ring-ring",
	{
		variants: {
			variant: {
				default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
				secondary: "border-border bg-secondary text-secondary-foreground hover:bg-secondary/70",
				destructive:
					"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
				outline: "border-border text-foreground hover:bg-muted",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
);

const Badge: FC<BadgeProps> = ({ className, variant, noHover, ...props }) => {
	const computedClassName = cx(
		badgeVariants({ variant }),
		noHover
			? "hover:bg-[initial]! hover:text-[inherit]! hover:shadow-none! hover:border-[inherit]! pointer-events-none"
			: "",
		className
	);

	return <div className={computedClassName} {...props} />;
};

export { Badge, badgeVariants };
