"use client";

import Link from "next/link";
import { type FC, type MouseEvent, useState } from "react";
import { Icons } from "@/components/icons/Icons";
import { MotionDiv } from "@/components/motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader } from "@/components/ui/Card";

import { cx } from "@/utils/tailwind";

type CourseCardProps = {
	href?: string;
	title: string;
	period: string;
	logoUrl: string;
	altText: string;
	subtitle?: string;
	location?: string;
	description?: string;
	badges?: readonly string[];
};

const CourseCard: FC<CourseCardProps> = ({
	href,
	badges,
	period,
	logoUrl,
	altText,
	subtitle,
	location,
	description,
	title,
}) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
		if (description) {
			e.preventDefault();
			setIsExpanded(!isExpanded);
		}
	};

	return (
		<Link
			target="_blank"
			href={href || "#"}
			rel="noopener noreferrer"
			className="block"
			onClick={handleClick}
		>
			<Card className="flex gap-4 p-5 group">
				{/* Logo */}
				<Avatar className="border border-border size-11 shrink-0 bg-muted-background dark:bg-foreground">
					<AvatarImage src={logoUrl} alt={altText} className="object-contain" />
					<AvatarFallback className="text-xs font-mono">{altText[0]}</AvatarFallback>
				</Avatar>

				{/* Content */}
				<div className="flex-1 min-w-0">
					<CardHeader className="p-0 space-y-1.5">
						{/* Title + period: stacks on mobile, side by side on sm+ */}
						<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-3">
							<h3 className="flex items-center gap-1.5 font-semibold text-sm leading-snug min-w-0 flex-wrap">
								<span className="truncate">{title}</span>
								{badges && badges.length > 0 && (
									<span className="inline-flex gap-1 shrink-0">
										{badges.map((badge, index) => (
											<Badge variant="secondary" className="text-[10px]" key={index + badge}>
												{badge}
											</Badge>
										))}
									</span>
								)}
								<Icons.chevron
									className={cx(
										"size-3.5 shrink-0 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100",
										isExpanded ? "rotate-90" : "rotate-0"
									)}
								/>
							</h3>

							<span className="font-mono text-xs tabular-nums text-muted-foreground shrink-0 sm:text-right">
								{period}
							</span>
						</div>

						{/* Degree / subtitle */}
						{subtitle && (
							<p className="font-mono text-xs text-muted-foreground leading-snug">{subtitle}</p>
						)}

						{/* Location */}
						{location && (
							<p className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
								{Icons.location()}
								{location}
							</p>
						)}
					</CardHeader>

					{description && (
						<MotionDiv
							initial={{ opacity: 0, height: 0 }}
							animate={{
								opacity: isExpanded ? 1 : 0,
								height: isExpanded ? "auto" : 0,
							}}
							transition={{
								duration: 0.7,
								ease: [0.16, 1, 0.3, 1],
							}}
							className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed overflow-hidden"
						>
							{description}
						</MotionDiv>
					)}
				</div>
			</Card>
		</Link>
	);
};

export { CourseCard };
