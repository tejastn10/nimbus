import { FC } from "react";

import Link from "next/link";

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";

import { getLogo } from "@/components/icons/Icons";

import { formatDate } from "@/utils/date";
import { TECH } from "@/constants/data";

type BlogCardProps = {
	about: TECH;
	slug: string;
	title: string;
	description: string;
	publishedAt: string;
};

const BlogCard: FC<BlogCardProps> = ({ slug, title, description, about, publishedAt }) => {
	const Icon = getLogo(about);

	return (
		<Card className="flex flex-col space-y-2 mb-6 p-4 rounded-lg border border-neutral-300 dark:border-neutral-700 overflow-hidden ease-out h-full hover:shadow-lg hover:scale-105 filter grayscale hover:grayscale-0 hover:shadow-lg hover:scale-105 transition-all duration-300 underline-slide">
			<Link href={`/blog/${slug}`}>
				<CardHeader>
					<div className="space-y-1">
						<CardTitle className="mt-1 text-base">{title}</CardTitle>
					</div>
				</CardHeader>

				<CardDescription className="flex justify-between items-center text-xs text-muted-foreground pt-1">
					{description}
				</CardDescription>

				<CardFooter className="flex justify-between items-center text-xs text-muted-foreground pt-8">
					<p className="ml-0 inline-flex items-center gap-2">
						<Icon /> {about}
					</p>
					<p className="mr-0 px-2">{formatDate(publishedAt, true)}</p>
				</CardFooter>
			</Link>
		</Card>
	);
};

export { BlogCard };
