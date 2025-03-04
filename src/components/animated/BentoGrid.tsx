import { FC, ReactNode } from "react";

import { Button } from "../ui/Button";

import { Icons } from "../icons/Icons";

import { cx } from "@/utils/tailwind";

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
		<div className={cx("grid w-full auto-rows-[22rem] grid-cols-3 gap-2", className)}>
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
			"group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
			// light styles
			"bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
			// dark styles
			"transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
			className
		)}
	>
		<div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 h-full transition-all duration-300 group-hover:-translate-y-5">
			<div>
				{Icon && (
					<Icon className="h-14 w-14 py-2 origin-left transform-gpu text-neutral-300 dark:text-neutral-700 group-hover:text-primary dark:group-hover:text-primary transition-all duration-300 ease-in-out group-hover:scale-75" />
				)}
				<h3 className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">{name}</h3>
				<p className="text-xs max-w-lg text-neutral-400 pt-2">{description}</p>
			</div>

			{subDescription && (
				<p className="text-xs max-w-lg text-neutral-400 pt-4 text-right mt-auto">
					{subDescription}
				</p>
			)}
		</div>

		<div className="pointer-events-none absolute bottom-0 flex w-full transform-gpu flex-row items-center p-4 transition-all duration-300 opacity-100 translate-y-0 md:opacity-0 md:translate-y-10 md:group-hover:translate-y-0 md:group-hover:opacity-100">
			<Button variant="ghost" asChild size="sm" className="pointer-events-auto">
				<a href={href}>
					{cta}
					{Icons.chevron()}
				</a>
			</Button>
		</div>
		<div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] dark:group-hover:bg-neutral-800/10" />
	</div>
);

export { BentoCard, BentoGrid, type BentoCardProps };
