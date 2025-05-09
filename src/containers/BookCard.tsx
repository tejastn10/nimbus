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
};

const BookCard: FC<BookCardProps> = ({
	slug,
	title,
	author,
	description,
	category,
	readingStatus,
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
			<Link href={`/books/${slug}`}>
				<CardHeader>
					<div className="pb-2">
						<div className="flex items-center justify-between">
							<CardTitle className="mt-1 text-base">{title}</CardTitle>
							<Badge
								className={cx(
									"ml-2 text-xs max-w-[90px] truncate",
									readingStatus === "reading" && "bg-amber-500 hover:bg-amber-600",
									readingStatus === "completed" && "bg-emerald-500 hover:bg-emerald-600",
									readingStatus === "to-read" && "bg-blue-500 hover:bg-blue-600"
								)}
							>
								{readingStatus === "reading" && "Reading"}
								{readingStatus === "completed" && "Completed"}
								{readingStatus === "to-read" && "To Read"}
							</Badge>
						</div>
						<p className="text-sm text-muted-foreground mt-1">by {author}</p>
					</div>
				</CardHeader>

				<CardDescription className="flex justify-between items-center text-xs text-muted-foreground pt-1">
					{description}
				</CardDescription>

				<CardFooter className="flex justify-between items-center text-xs text-muted-foreground pt-8">
					<p className="ml-0 inline-flex items-center gap-2">
						{Icons.template()} {category}
					</p>
				</CardFooter>
			</Link>
		</Card>
	);
};

export { BookCard };
