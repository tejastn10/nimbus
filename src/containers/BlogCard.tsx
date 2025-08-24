import Link from "next/link";
import type { FC } from "react";
import { Icons } from "@/components/icons/Icons";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { calculateReadingTime } from "@/utils/blog";
import { formatDate } from "@/utils/date";
import { cx } from "@/utils/tailwind";

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
			<Link href={`/blog/${slug}`}>
				<CardHeader>
					<div className="space-y-1 flex items-center pb-2">
						<CardTitle className="mt-1 text-base">{title}</CardTitle>
					</div>
				</CardHeader>

				<CardDescription className="flex justify-between items-center text-xs text-muted-foreground pt-1">
					{description}
				</CardDescription>

				<CardFooter className="flex justify-between items-center text-xs text-muted-foreground pt-8">
					<p className="ml-0 inline-flex items-center gap-2">
						{Icons.calendar()} {formattedDate}
					</p>
					<p className="mr-0 px-2 inline-flex items-center gap-2">
						{readingTime} min read
						{Icons.reader()}
					</p>
				</CardFooter>
			</Link>
		</Card>
	);
};

export { BlogCard };
