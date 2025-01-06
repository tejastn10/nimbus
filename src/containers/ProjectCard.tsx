import { FC } from "react";

import Link from "next/link";
import Image from "next/image";

import Markdown from "react-markdown";

import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";

import { cx } from "@/utils/tailwind";

type ProjectProps = {
	title: string;
	href?: string;
	dates: string;
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
	dates,
	className,
	description,
}) => {
	return (
		<Card
			className={
				"flex flex-col p-2 overflow-hidden border ease-out h-full hover:shadow-lg hover:scale-105 transition-all duration-300"
			}
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
					<CardTitle className="mt-1 text-base">{title}</CardTitle>
					<time className="font-outfit text-xs">{dates}</time>
					<div className="hidden font-outfit text-xs underline print:visible">
						{link?.replace("https://", "").replace("www.", "").replace("/", "")}
					</div>
					<Markdown className="prose max-w-full text-pretty font-outfit text-xs text-muted-foreground dark:prose-invert py-2">
						{description}
					</Markdown>
				</div>
			</CardHeader>
			<CardContent className="mt-auto flex flex-col px-2">
				{tags && tags.length > 0 && (
					<div className="flex flex-wrap gap-1">
						{tags?.map((tag) => (
							<Badge className="px-1 py-0 text-[10px]" variant="secondary" key={tag}>
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
