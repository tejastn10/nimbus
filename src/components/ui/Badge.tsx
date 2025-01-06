import { FC, HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cx } from "@/utils/tailwind";

type BadgeProps = HTMLAttributes<HTMLDivElement> &
	VariantProps<typeof badgeVariants> & {
		noHover?: boolean; // Prop to disable hover
	};

const badgeVariants = cva(
	"inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
	{
		variants: {
			variant: {
				default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
				secondary:
					"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
				destructive:
					"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
				outline: "text-foreground hover:bg-muted",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
);

const Badge: FC<BadgeProps> = ({ className, variant, noHover, ...props }) => {
	// If noHover is true, completely remove hover styles by applying `no-hover` class dynamically
	const computedClassName = cx(
		badgeVariants({ variant }),
		noHover
			? "hover:!bg-[initial] hover:!text-[inherit] hover:!shadow-none hover:!border-[inherit] pointer-events-none" // Fully override hover styles
			: "",
		className
	);

	return <div className={computedClassName} {...props}></div>;
};

export { Badge, badgeVariants };
