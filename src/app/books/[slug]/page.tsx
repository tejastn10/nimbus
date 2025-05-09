import { JSX } from "react";

import { notFound } from "next/navigation";

import { BlurFade } from "@/components/animated/BlurFade";
import { LineGrow } from "@/components/animated/LineGrow";
import { BoxReveal } from "@/components/animated/BoxReveal";

import { Icons } from "@/components/icons/Icons";

import { getBooks, getBook } from "@/data/book";

import { BLUR_FADE_DELAY, BOX_REVEAL_DURATION } from "@/constants/ui";
import { Badge } from "@/components/ui/Badge";

type BookProps = {
	params: Promise<{ slug: string }>;
};

export const generateStaticParams = async (): Promise<
	{
		slug: string;
	}[]
> => {
	const books = await getBooks();
	return books.map((book) => ({ slug: book.slug }));
};

const Book = async ({ params }: BookProps): Promise<JSX.Element> => {
	const slug = (await params).slug;
	const book = await getBook(slug);

	if (!book) {
		notFound();
	}

	const { metadata, source } = book;
	const { title, author, category, readingStatus, publishedDate, description } = metadata;

	return (
		<section className="max-w-3xl mx-auto">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<BoxReveal duration={BOX_REVEAL_DURATION}>
					<div className="mb-2">
						<h1 className="font-bold text-4xl md:text-5xl mb-3 tracking-tighter">{title}</h1>
						<p className="text-sm text-muted-foreground mb-4 font-light">
							by {author} - {category}
						</p>

						<div className="flex flex-wrap gap-3 mb-4">
							<Badge className="text-xs">{category}</Badge>
							<Badge
								className={`text-xs ${
									readingStatus === "reading"
										? "bg-amber-500 hover:bg-amber-600"
										: readingStatus === "completed"
											? "bg-emerald-500 hover:bg-emerald-600"
											: "bg-blue-500 hover:bg-blue-600"
								}`}
							>
								{readingStatus === "reading" && "Currently reading"}
								{readingStatus === "completed" && "Completed"}
								{readingStatus === "to-read" && "To Read"}
							</Badge>
							{publishedDate && (
								<span className="text-xs text-muted-foreground flex items-center gap-1">
									{Icons.calendar()} {publishedDate}
								</span>
							)}
						</div>

						<p className="text-sm text-muted-foreground mb-2 font-light">{description}</p>
					</div>
				</BoxReveal>
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 2}>
				<LineGrow className="my-8" />
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 4}>
				<article
					className="prose dark:prose-invert max-w-none"
					dangerouslySetInnerHTML={{ __html: source }}
				/>
			</BlurFade>
		</section>
	);
};

export default Book;
