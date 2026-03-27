import { notFound } from "next/navigation";
import type { JSX } from "react";

import { BlurFade } from "@/components/animated/BlurFade";
import { Icons } from "@/components/icons/Icons";
import { Badge } from "@/components/ui/Badge";
import { BLUR_FADE_DELAY } from "@/constants/ui";
import { getBook, getBooks } from "@/data/book";

type BookProps = {
	params: Promise<{ slug: string }>;
};

const statusLabel: Record<"reading" | "completed" | "to-read", string> = {
	reading: "Currently Reading",
	completed: "Completed",
	"to-read": "To Read",
};

export const generateStaticParams = async (): Promise<{ slug: string }[]> => {
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
		<section className="relative pb-16">
			<BlurFade delay={BLUR_FADE_DELAY} className="flex items-start gap-4">
				<div className="size-10 shrink-0 border border-border flex items-center justify-center mt-1">
					<Icons.reader className="size-5 text-muted-foreground" />
				</div>
				<h1 className="font-bold text-4xl tracking-tighter max-w-[650px]">{title}</h1>
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 2}>
				<hr className="border-border mt-6" />
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 3}>
				<div className="flex justify-between items-center py-4 text-sm flex-wrap gap-3">
					<p className="font-mono text-xs text-muted-foreground">by {author}</p>
					<div className="flex items-center gap-2">
						<Badge variant="outline" noHover className="font-mono text-[10px]">
							{category}
						</Badge>
						<Badge variant="outline" noHover className="font-mono text-[10px]">
							{statusLabel[readingStatus]}
						</Badge>
						{publishedDate && (
							<span className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground">
								<Icons.calendar className="w-3 h-3" /> {publishedDate}
							</span>
						)}
					</div>
				</div>
				<hr className="border-border mb-6" />
			</BlurFade>

			{description && (
				<BlurFade delay={BLUR_FADE_DELAY * 3.5}>
					<p className="text-sm text-muted-foreground mb-8 leading-relaxed">{description}</p>
				</BlurFade>
			)}

			<BlurFade delay={BLUR_FADE_DELAY * 4}>
				<article
					className="prose max-w-none leading-[1.5] w-full"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: Safe compiled MDX content
					dangerouslySetInnerHTML={{ __html: source }}
				/>
			</BlurFade>
		</section>
	);
};

export default Book;
