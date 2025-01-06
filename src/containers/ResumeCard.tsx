"use client";

import React, { FC } from "react";

import Link from "next/link";

import { Icons } from "@/components/icons/Icons";

import { MotionDiv } from "@/components/motion";
import { RoleCard } from "@/components/ui/RoleCard";
import { Card, CardHeader } from "@/components/ui/Card";
import { BlurFade } from "@/components/animated/BlurFade";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";

import { BLUR_FADE_DELAY } from "@/constants/ui";

import { cx } from "@/utils/tailwind";

type ResumeCardProps = {
	logoUrl: string;
	location: string;
	altText: string;
	company: string;
	href?: string;
	period: string;
	roles: readonly {
		title: string;
		start: string;
		end?: string;
		description: readonly string[];
	}[];
};

const ResumeCard: FC<ResumeCardProps> = ({
	logoUrl,
	location,
	altText,
	company,
	href,
	period,
	roles,
}) => {
	const [isExpanded, setIsExpanded] = React.useState(false);

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		if (roles.length > 0) {
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
				<div className="flex-grow ml-4 items-center flex-col group">
					<CardHeader>
						<div className="flex items-center justify-between gap-x-2 text-base">
							<h3 className="inline-flex items-center justify-center font-bold leading-none text-md sm:text-md">
								{company}
								<Icons.chevron
									className={cx(
										"size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
										isExpanded ? "rotate-90" : "rotate-0"
									)}
								/>
							</h3>
							<div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
								{period}
							</div>
						</div>
						{location && (
							<div className="text-[0.75rem] font-light text-gray-600 dark:text-gray-400 mt-1">
								{location}
							</div>
						)}
					</CardHeader>

					{roles.length > 0 && (
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
							<ul className="mb-4 ml-4 divide-y divide-dashed border-l">
								{roles.map((role, index) => (
									<BlurFade key={role.title} delay={BLUR_FADE_DELAY * 15 + index * 0.05}>
										<RoleCard
											title={role.title}
											dates={`${role.start} - ${role.end ?? "Present"}`}
											description={role.description}
										/>
									</BlurFade>
								))}
							</ul>
						</MotionDiv>
					)}
				</div>
			</Card>
		</Link>
	);
};

export { ResumeCard };
