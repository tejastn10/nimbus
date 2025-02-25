import { FC } from "react";

import Link from "next/link";
import Image from "next/image";

import { GlowingText } from "@/components/animated/GlowingText";

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

type ProjectProps = {
	title: string;
	href?: string;
	purpose: string;
	link?: string;
	image?: string;
	video?: string;
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
	image,
	title,
	video,
	links,
	purpose,
	className,
	description,
}) => {
	return (
		<Card
			className={cx(
				"flex flex-col space-y-2 mb-6 p-4 rounded-lg overflow-hidden ease-out h-full transition-all duration-300",
				"hover:shadow-lg hover:scale-105 filter grayscale hover:grayscale-0",
				// light styles
				"bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
				// dark styles
				"transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
				// Extra effects
				"transform-gpu underline-slide group"
			)}
		>
			<Link
				target="_blank"
				href={href || "#"}
				rel="noopener noreferrer"
				className={cx("block cursor-pointer", className)}
			>
				{video && (
					<video
						src={video}
						autoPlay
						loop
						muted
						playsInline
						className="pointer-events-none mx-auto h-40 w-full object-cover object-top" // needed because random black line at bottom of video
					/>
				)}
				{image && (
					<Image
						src={image}
						alt={title}
						width={500}
						height={300}
						className="h-40 w-full overflow-hidden object-cover object-top"
					/>
				)}
			</Link>
			<CardHeader className="px-2">
				<div className="space-y-1">
					<CardTitle className="mt-1 text-pretty text-lg font-semibold text-neutral-700 dark:text-neutral-300">
						{title}
					</CardTitle>
					<GlowingText
						text={purpose}
						className="text-xs text-muted-foreground dark:text-muted-foreground"
					/>
					<div className="hidden font-outfit text-xs underline print:visible">
						{link?.replace("https://", "").replace("www.", "").replace("/", "")}
					</div>
					<CardDescription className="prose max-w-full text-pretty text-xs text-muted-foreground dark:prose-invert py-2">
						{description}
					</CardDescription>
				</div>
			</CardHeader>

			<CardContent className="mt-auto flex flex-col px-2">
				{tags && tags.length > 0 && (
					<div className="flex flex-wrap gap-1">
						{tags?.map((tag) => (
							<Badge className="px-2 py-1 text-[10px]" variant="secondary" key={tag}>
								{tag}
							</Badge>
						))}
					</div>
				)}
			</CardContent>

			<CardFooter className="px-2 pb-2 pt-6">
				{links && links.length > 0 && (
					<div className="flex flex-row flex-wrap items-start gap-1">
						{links?.map((link, idx) => {
							return link?.href ? (
								<Link key={idx} href={link?.href} target="_blank" rel="noopener noreferrer">
									<Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
										{link.icon}
										{link.type}
									</Badge>
								</Link>
							) : (
								<Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]" noHover>
									{link.icon}
									{link.type}
								</Badge>
							);
						})}
					</div>
				)}
			</CardFooter>
		</Card>
	);
};

export { ProjectCard };
