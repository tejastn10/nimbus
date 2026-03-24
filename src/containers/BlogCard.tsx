import Link from "next/link";
import type { FC } from "react";
import { Icons } from "@/components/icons/Icons";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { calculateReadingTime } from "@/utils/blog";
import { formatDate } from "@/utils/date";

type BlogCardProps = {
	slug: string;
	title: string;
	source: string;
	description: string;
	publishedAt: string;
};

const BlogCard: FC<BlogCardProps> = ({ slug, title, source, description, publishedAt }) => {
	const formattedDate = formatDate(publishedAt, true);
	const readingTime = calculateReadingTime(source);

	return (
		<Card className="flex flex-col p-4 h-full transition-colors duration-200 hover:bg-accent/20 group">
			<Link href={`/blog/${slug}`}>
				<CardHeader>
					<div className="space-y-1 flex items-center pb-2">
						<CardTitle className="mt-1 text-base font-semibold tracking-tight group-hover:text-foreground transition-colors">
							{title}
						</CardTitle>
					</div>
				</CardHeader>

				<CardDescription className="flex justify-between items-center text-xs text-muted-foreground pt-1 leading-relaxed">
					{description}
				</CardDescription>

				<CardFooter className="flex justify-between items-center text-xs text-muted-foreground pt-6 font-mono">
					<p className="inline-flex items-center gap-2">
						{Icons.calendar()} {formattedDate}
					</p>
					<p className="inline-flex items-center gap-2">
						{readingTime} min read
						{Icons.reader()}
					</p>
				</CardFooter>
			</Link>
		</Card>
	);
};

export { BlogCard };
