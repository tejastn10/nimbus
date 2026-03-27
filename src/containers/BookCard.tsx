import Link from "next/link";
import type { FC } from "react";
import { Icons } from "@/components/icons/Icons";
import { Badge } from "@/components/ui/Badge";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";

type BookCardProps = {
	slug: string;
	title: string;
	author: string;
	description: string;
	category: string;
	readingStatus: "reading" | "completed" | "to-read";
	finishedOn?: string;
};

const statusLabel: Record<BookCardProps["readingStatus"], string> = {
	reading: "Reading",
	completed: "Completed",
	"to-read": "To Read",
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
				month: "short",
			})
		: null;

	return (
		<Card className="flex flex-col p-4 h-full transition-colors duration-200 hover:bg-accent/20 group border border-border/50">
			<Link href={`/books/${slug}`} className="flex flex-col flex-1">
				<CardHeader className="p-0 mb-3">
					<div className="flex items-start justify-between gap-3">
						<CardTitle className="text-sm font-bold tracking-tight group-hover:text-foreground transition-colors duration-200 leading-snug">
							{title}
						</CardTitle>
						<Badge variant="outline" noHover className="shrink-0 font-mono text-[10px]">
							{statusLabel[readingStatus]}
						</Badge>
					</div>
					<p className="font-mono text-xs text-muted-foreground mt-1 tracking-wide">by {author}</p>
				</CardHeader>

				<CardDescription className="text-xs text-muted-foreground leading-relaxed flex-1">
					{description}
				</CardDescription>

				<CardFooter className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mt-4 pt-3 font-mono p-0">
					<p className="inline-flex items-center gap-1.5">
						<Icons.template className="w-3 h-3" /> {category}
					</p>
					{formattedFinishedDate && (
						<p className="inline-flex items-center gap-1.5">
							<Icons.check className="w-3 h-3" /> {formattedFinishedDate}
						</p>
					)}
				</CardFooter>
			</Link>
		</Card>
	);
};

export type { BookCardProps };
export { BookCard };
