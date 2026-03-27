import type { FC, ReactNode } from "react";
import { cx } from "@/utils/tailwind";

import { Icons } from "../icons/Icons";
import { Button } from "../ui/Button";

type BentoGridProps = {
	children: ReactNode;
	className?: string;
};

type BentoCardProps = {
	name: string;
	className: string;
	Icon: React.ElementType;
	description: string;
	subDescription?: string;
	href: string;
	cta: string;
};

const BentoGrid: FC<BentoGridProps> = ({ children, className }) => {
	return (
		/*
		 * gap-px + bg-border = thin 1px grid lines between every cell.
		 * Each card gets bg-card so the border color shows through the gap.
		 */
		<div
			className={cx(
				"grid w-full auto-rows-[22rem] grid-cols-3 gap-px bg-border border border-border",
				className
			)}
		>
			{children}
		</div>
	);
};

const BentoCard: FC<BentoCardProps> = ({
	name,
	className,
	Icon,
	description,
	href,
	cta,
	subDescription,
}) => (
	<div
		key={name}
		className={cx(
			"group relative col-span-3 flex flex-col justify-between overflow-hidden",
			// Surface — one step above the page background
			"bg-card",
			// Hover: subtle surface lift
			"transition-colors duration-300 hover:bg-accent/30",
			className
		)}
	>
		{/* Content — slides up slightly on hover to reveal the CTA */}
		<div className="pointer-events-none z-10 flex flex-col gap-1 p-6 h-full transition-all duration-300 group-hover:-translate-y-5">
			<div>
				{Icon && (
					<Icon
						className={cx(
							"h-12 w-12 py-1.5 origin-left transform-gpu",
							"text-muted-foreground/40",
							"group-hover:text-foreground/70",
							"transition-all duration-300 ease-in-out group-hover:scale-75"
						)}
					/>
				)}
				<h3 className="mt-2 text-base font-semibold tracking-tight text-foreground">{name}</h3>
				<p className="text-xs max-w-lg text-muted-foreground pt-1.5 leading-relaxed">
					{description}
				</p>
			</div>

			{subDescription && (
				<p className="text-xs max-w-lg text-muted-foreground/60 pt-4 text-right mt-auto font-mono tracking-wide">
					{subDescription}
				</p>
			)}
		</div>

		{/* CTA — hidden on desktop until hover, always visible on mobile */}
		<div
			className={cx(
				"pointer-events-none absolute bottom-0 flex w-full flex-row items-center p-4",
				"transition-all duration-300",
				"opacity-100 translate-y-0",
				"md:opacity-0 md:translate-y-8 md:group-hover:translate-y-0 md:group-hover:opacity-100"
			)}
		>
			<Button
				variant="outline"
				asChild
				size="sm"
				className="pointer-events-auto text-[11px] group/cta dark:bg-secondary dark:hover:bg-secondary/70"
			>
				<a href={href} target="_blank" rel="noopener noreferrer">
					{cta}
					<span className="transition-transform duration-200 group-hover/cta:translate-x-1 inline-block">
						{Icons.chevron()}
					</span>
				</a>
			</Button>
		</div>

		{/* Top border accent line — appears on hover */}
		<div className="absolute top-0 inset-x-0 h-px bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
	</div>
);

export { BentoCard, type BentoCardProps, BentoGrid };
