"use client";

import Link from "next/link";
import type { FC } from "react";
import { Icons } from "@/components/icons/Icons";

import { Badge } from "@/components/ui/Badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
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
				"flex flex-col p-4 h-full transition-colors duration-200 hover:bg-accent/20 group",
				className
			)}
		>
			<Link
				href={href || "#"}
				target="_blank"
				rel="noopener noreferrer"
				className="flex flex-col flex-1"
			>
				<CardHeader className="px-2 py-2 flex-1">
					<CardTitle className="text-base font-medium tracking-tight text-foreground flex items-center gap-2 group-hover:text-foreground transition-colors">
						<span className="flex-shrink-0 text-muted-foreground">{Icons.template()}</span>
						<span className="truncate">{title}</span>
					</CardTitle>
					<CardDescription className="text-xs text-muted-foreground leading-relaxed pt-1">
						{description}
					</CardDescription>
				</CardHeader>

				{tags && tags.length > 0 && (
					<div className="px-2 pb-2 flex flex-wrap gap-1 mt-auto">
						{tags.slice(0, 3).map((tag) => (
							<Badge className="px-1.5 py-0.5 text-[10px]" variant="outline" key={tag}>
								{tag}
							</Badge>
						))}
						{tags.length > 3 && (
							<span className="font-mono text-[10px] text-muted-foreground self-center">
								+{tags.length - 3}
							</span>
						)}
					</div>
				)}
			</Link>
		</Card>
	);
};

export { TemplateCard };
