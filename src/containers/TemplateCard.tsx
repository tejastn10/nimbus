"use client";

import Link from "next/link";
import type { FC } from "react";
import { Icons } from "@/components/icons/Icons";

import { Badge } from "@/components/ui/Badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/Card";
import { cx } from "@/utils/tailwind";

type TemplateCardProps = {
	title: string;
	href?: string;
	description: string;
	tags?: readonly string[];
	className?: string;
};

const TemplateCard: FC<TemplateCardProps> = ({ href, title, tags, description, className }) => {
	return (
		<Card
			className={cx(
				"flex flex-col mb-4 p-3 rounded-md overflow-hidden transition-all duration-200",
				"hover:shadow-md hover:scale-102 filter grayscale-[30%] hover:grayscale-0",
				// light styles
				"bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.02),0_1px_3px_rgba(0,0,0,.03)]",
				// dark styles
				"dark:bg-black/80 dark:[border:1px_solid_rgba(255,255,255,.08)]",
				className
			)}
		>
			<Link href={href || "#"} target="_blank" rel="noopener noreferrer" className="block">
				<CardHeader className="px-2 py-2">
					<CardTitle className="text-pretty text-base pb-2 font-medium text-neutral-700 dark:text-neutral-300 flex items-center gap-2">
						<span className="flex-shrink-0">{Icons.template()}</span>
						<span>{title}</span>
					</CardTitle>
					<CardDescription className="text-pretty text-xs text-muted-foreground line-clamp-2">
						{description}
					</CardDescription>
				</CardHeader>

				<CardContent className="px-2 py-1 pt-4">
					{tags && tags.length > 0 && (
						<div className="flex flex-wrap gap-1">
							{tags.slice(0, 3).map((tag) => (
								<Badge className="px-1.5 py-0.5 text-[9px]" variant="secondary" key={tag}>
									{tag}
								</Badge>
							))}
							{tags.length > 3 && (
								<span className="text-xs text-muted-foreground">+{tags.length - 3}</span>
							)}
						</div>
					)}
				</CardContent>

				<CardFooter className="px-2 pt-1 pb-2"></CardFooter>
			</Link>
		</Card>
	);
};

export { TemplateCard };
