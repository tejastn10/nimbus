"use client";

import Link from "next/link";
import { type FC, useState } from "react";

import { GlowingText } from "@/components/animated/GlowingText";
import { Icons } from "@/components/icons/Icons";
import { Badge } from "@/components/ui/Badge";
import {
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/Card";
import { CLIPBOARD_COPY_DELAY } from "@/constants/ui";
import { cx } from "@/utils/tailwind";

type ProjectProps = {
	title: string;
	href?: string;
	purpose: string;
	link?: string;
	description: string;
	tags: readonly string[];
	links?: readonly {
		icon: React.ReactNode;
		type: string;
		href: string;
	}[];
	className?: string;
};

const ProjectCard: FC<ProjectProps> = ({
	href,
	tags,
	link,
	title,
	links,
	purpose,
	className,
	description,
}) => {
	const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

	const copyToClipboard = (link: { href: string }, index: number) => {
		if (link.href) {
			navigator.clipboard.writeText(link.href);
			setCopiedIndex(index);
			setTimeout(() => setCopiedIndex(null), CLIPBOARD_COPY_DELAY);
		}
	};

	return (
		<div
			className={cx(
				"flex flex-col space-y-3 p-6 h-full transition-all duration-300",
				// Light mode
				"bg-white border border-border",
				// Dark mode — sharp, border brightens on hover
				"dark:bg-background",
				"group",
				className
			)}
		>
			<Link
				target="_blank"
				href={href || "#"}
				rel="noopener noreferrer"
				className="block cursor-pointer"
			/>
			<CardHeader className="px-0">
				<div className="space-y-1.5">
					<CardTitle className="mt-1 text-base font-semibold text-foreground group-hover:text-primary transition-colors">
						{title}
					</CardTitle>
					<GlowingText
						text={purpose}
						className="text-xs text-muted-foreground font-mono tracking-wide truncate"
					/>
					<div className="hidden font-mono text-xs underline print:visible">
						{link?.replace("https://", "").replace("www.", "").replace("/", "")}
					</div>
					<CardDescription className="text-xs text-muted-foreground py-1 leading-relaxed">
						{description}
					</CardDescription>
				</div>
			</CardHeader>

			<CardContent className="mt-auto flex flex-col px-0">
				{tags && tags.length > 0 && (
					<div className="flex flex-wrap gap-1">
						{tags.map((tag) => (
							<Badge className="px-2 py-0.5 text-[10px]" variant="outline" key={tag}>
								{tag}
							</Badge>
						))}
					</div>
				)}
			</CardContent>

			<CardFooter className="px-0 pb-0 pt-4">
				{links && links.length > 0 && (
					<div className="flex flex-row flex-wrap items-start gap-1">
						{links.map((link, idx) => {
							if (link?.href && link?.type === "Curl") {
								return (
									<Badge
										key={link.href}
										className="relative flex items-center gap-2 px-3 py-1 text-xs cursor-pointer transition-all duration-300 overflow-hidden"
										onClick={() => copyToClipboard(link, idx)}
									>
										<span
											className={cx(
												"transition-all duration-300",
												copiedIndex === idx
													? "opacity-0 -translate-x-2"
													: "opacity-100 translate-x-0"
											)}
										>
											{link.icon}
										</span>
										<span
											className={cx(
												"transition-all duration-300",
												copiedIndex === idx ? "-translate-x-3" : "translate-x-0"
											)}
										>
											{link.type}
										</span>
										<span
											className={cx(
												"absolute right-2 transition-all duration-300",
												copiedIndex === idx
													? "opacity-100 scale-100 translate-x-0"
													: "opacity-0 scale-90 translate-x-2"
											)}
										>
											{Icons.check()}
										</span>
									</Badge>
								);
							}

							return link?.href ? (
								<Link key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
									<Badge className="flex gap-2 px-3 py-1 text-xs">
										{link.icon}
										{link.type}
									</Badge>
								</Link>
							) : (
								<Badge
									key={link.href || link.type}
									className="flex gap-2 px-3 py-1 text-xs"
									noHover
								>
									{link.icon}
									{link.type}
								</Badge>
							);
						})}
					</div>
				)}
			</CardFooter>
		</div>
	);
};

export type { ProjectProps };
export { ProjectCard };
