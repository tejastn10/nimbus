"use client";

import { FC, MouseEvent, useState } from "react";

import Link from "next/link";

import { MotionDiv } from "@/components/motion";

import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader } from "@/components/ui/Card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";

import { Icons } from "@/components/icons/Icons";

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
	title,
	badges,
	period,
	logoUrl,
	altText,
	subtitle,
	location,
	description,
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
			className="block cursor-pointer"
			onClick={handleClick}
		>
			<Card className="flex">
				<div className="flex-none">
					<Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
						<AvatarImage src={logoUrl} alt={altText} className="object-contain" />
						<AvatarFallback>{altText[0]}</AvatarFallback>
					</Avatar>
				</div>
				<div className="grow ml-4 items-center flex-col group">
					<CardHeader>
						<div className="flex items-center justify-between gap-x-2 text-base">
							<h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
								{title}
								{badges && (
									<span className="inline-flex gap-x-1">
										{badges.map((badge, index) => (
											<Badge variant="secondary" className="align-middle text-xs" key={index}>
												{badge}
											</Badge>
										))}
									</span>
								)}
								<Icons.chevron
									className={cx(
										"size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
										isExpanded ? "rotate-90" : "rotate-0"
									)}
								/>
							</h3>
							<div className="flex items-center gap-2 text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
								{period}
								{Icons.duration()}
							</div>
						</div>
						{subtitle && <div className="font-outfit text-xs">{subtitle}</div>}
						{location && (
							<div className="inline-flex items-center gap-2 text-[0.75rem] font-light text-gray-600 dark:text-gray-400 mt-1">
								{Icons.location()}
								{location}
							</div>
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
							className="mt-2 text-xs sm:text-sm"
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
