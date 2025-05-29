import { FC } from "react";

import Link from "next/link";

import { Badge } from "@/components/ui/Badge";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";

import { Icons } from "@/components/icons/Icons";

import { cx } from "@/utils/tailwind";

type BookCardProps = {
	slug: string;
	title: string;
	author: string;
	description: string;
	category: string;
	readingStatus: "reading" | "completed" | "to-read";
	finishedOn?: string;
};

const getStatusStyles = (readingStatus: BookCardProps["readingStatus"]) => {
	const statusColors = {
		reading: {
			badge: "bg-amber-500/80 hover:bg-amber-500",
			gradient: "from-amber-500/10 to-amber-600/10",
			border: "border-amber-500/50",
			text: "text-amber-500",
		},
		completed: {
			badge: "bg-emerald-500/80 hover:bg-emerald-500",
			gradient: "from-emerald-500/10 to-emerald-600/10",
			border: "border-emerald-500/50",
			text: "text-emerald-500",
		},
		"to-read": {
			badge: "bg-blue-500/80 hover:bg-blue-500",
			gradient: "from-blue-500/10 to-blue-600/10",
			border: "border-blue-500/50",
			text: "text-blue-500",
		},
	};

	return statusColors[readingStatus];
};

const BookCard: FC<BookCardProps> = ({
	slug,
	title,
	author,
	description,
	category,
	readingStatus,
	finishedOn,
}) => {
	const formattedFinishedDate = finishedOn
		? new Date(finishedOn).toLocaleDateString("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric",
			})
		: null;

	const styles = getStatusStyles(readingStatus);

	return (
		<Card
			className={cx(
				"relative isolate group",
				"flex flex-col space-y-2 mb-6 p-8 rounded-lg overflow-hidden h-full transition-all duration-500",
				"bg-gradient-to-br from-background to-background/80",
				"hover:shadow-xl hover:scale-[1.02]",
				"border border-border/50",
				// Animated border
				"after:absolute after:inset-0 after:-z-10",
				"after:p-[1px] after:rounded-lg",
				`after:bg-gradient-to-br after:${styles.gradient}`,
				"after:opacity-0 hover:after:opacity-100",
				"after:transition-opacity after:duration-500",
				// Greyscale by default, color on hover
				"filter grayscale hover:filter-none"
			)}
		>
			<Link href={`/books/${slug}`} className="flex flex-col flex-1">
				<CardHeader className="flex-1 ">
					<div className="flex items-start justify-between gap-4">
						<CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-500">
							{title}
						</CardTitle>
						<Badge className={cx("shrink-0 pointer-events-auto", styles.badge)}>
							{readingStatus === "reading" && "Reading"}
							{readingStatus === "completed" && "Completed"}
							{readingStatus === "to-read" && "To Read"}
						</Badge>
					</div>
					<p className="text-sm text-muted-foreground mt-2">by {author}</p>
				</CardHeader>

				<CardDescription className="flex-1 text-sm text-muted-foreground leading-relaxed ">
					{description}
				</CardDescription>

				<CardFooter className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mt-6 pt-6 border-t border-border/10 ">
					<p className="inline-flex items-center gap-2">
						<Icons.template className="w-4 h-4" /> {category}
					</p>
					{formattedFinishedDate && (
						<p className="inline-flex items-center gap-2">
							<Icons.check className="w-4 h-4" /> Finished: {formattedFinishedDate}
						</p>
					)}
				</CardFooter>
			</Link>
		</Card>
	);
};

export { BookCard };
