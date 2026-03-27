"use client";

import Link from "next/link";
import { type FC, type MouseEvent, useState } from "react";
import { BlurFade } from "@/components/animated/BlurFade";
import { Icons } from "@/components/icons/Icons";
import { MotionDiv } from "@/components/motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Card } from "@/components/ui/Card";
import { RoleCard } from "@/components/ui/RoleCard";

import { BLUR_FADE_DELAY } from "@/constants/ui";

import { cx } from "@/utils/tailwind";

type ResumeCardProps = {
	logoUrl: string;
	location: string;
	altText: string;
	company: string;
	href?: string;
	period: string;
	expanded?: boolean;
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
	expanded,
}) => {
	const [isExpanded, setIsExpanded] = useState(expanded ?? false);

	const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
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
			className="block"
			onClick={handleClick}
		>
			<Card className="p-5 group border-0">
				{/* Header: logo + company info + period */}
				<div className="flex items-start gap-4">
					<Avatar className="border border-border size-11 shrink-0">
						<AvatarImage src={logoUrl} alt={altText} className="object-contain" />
						<AvatarFallback className="text-xs font-mono">{altText[0]}</AvatarFallback>
					</Avatar>

					<div className="flex-1 min-w-0">
						<div className="flex items-start justify-between gap-2 flex-wrap">
							<h3
								className={cx("font-bold text-sm leading-tight inline-flex items-center gap-1.5")}
							>
								{company}
								<Icons.chevron
									className={cx(
										"size-3.5 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100",
										isExpanded ? "rotate-90" : "rotate-0"
									)}
								/>
							</h3>
							<span className="text-xs font-mono text-muted-foreground shrink-0 tabular-nums">
								{period}
							</span>
						</div>

						{location && (
							<p className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground mt-1">
								{Icons.location()}
								{location}
							</p>
						)}
					</div>
				</div>

				{/* Roles — aligned with company name, single left border */}
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
						className="overflow-hidden"
					>
						<div className="mt-5 flex gap-4">
							{/* Spacer matching the avatar column */}
							<div className="size-11 shrink-0" />
							<div className="flex-1 border-l border-border pl-4">
								{roles.map((role, index) => (
									<BlurFade key={role.title} delay={BLUR_FADE_DELAY * 15 + index * 0.05}>
										<RoleCard
											title={role.title}
											dates={`${role.start} - ${role.end ?? "Present"}`}
											description={role.description}
										/>
									</BlurFade>
								))}
							</div>
						</div>
					</MotionDiv>
				)}
			</Card>
		</Link>
	);
};

export { ResumeCard };
