import { JSX } from "react";

import { BlurFade } from "@/components/animated/BlurFade";
import { LineGrow } from "@/components/animated/LineGrow";
import { BoxReveal } from "@/components/animated/BoxReveal";

import { BookCard } from "@/containers/BookCard";

import { CompletedSection } from "./completed-section";

import { BLUR_FADE_DELAY, BOX_REVEAL_DURATION } from "@/constants/ui";

import { getBooks } from "@/data/book";

export const metadata = {
	title: "Books",
	description:
		"A collection of books I'm currently reading, have read, or plan to read. Each book is a journey into a different world, and I hope to share my thoughts and insights with you.",
};

const BooksPage = async (): Promise<JSX.Element> => {
	const books = await getBooks();

	const currentlyReading = books
		.filter((book) => book.metadata.readingStatus === "reading")
		.map((book) => ({
			...book.metadata,
			slug: book.slug,
		}));

	const completed = books
		.filter((book) => book.metadata.readingStatus === "completed")
		.sort((a, b) => {
			const dateA = a.metadata.finishedOn ? new Date(a.metadata.finishedOn) : new Date(0);
			const dateB = b.metadata.finishedOn ? new Date(b.metadata.finishedOn) : new Date(0);
			return dateB.getTime() - dateA.getTime();
		})
		.map((book) => ({
			...book.metadata,
			slug: book.slug,
		}));

	const toRead = books
		.filter((book) => book.metadata.readingStatus === "to-read")
		.map((book) => ({
			...book.metadata,
			slug: book.slug,
		}));

	return (
		<section className="relative">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<BoxReveal duration={BOX_REVEAL_DURATION}>
					<h1 className="font-bold text-6xl mb-4 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-600">
						{metadata.title}
					</h1>
				</BoxReveal>
				<BoxReveal duration={BOX_REVEAL_DURATION * 1.2}>
					<h3 className="text-sm text-muted-foreground pb-6">{metadata.description}</h3>
				</BoxReveal>
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY}>
				<LineGrow className="my-12" />
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 2}>
				<h2 className="font-bold text-3xl mb-8 tracking-tighter w-fit text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-100 dark:from-white dark:to-white/10">
					Currently Reading
				</h2>
			</BlurFade>

			<div className="grid grid-cols-1 gap-8">
				{currentlyReading.length > 0 ? (
					currentlyReading.map((book, index) => (
						<BlurFade key={book.slug} delay={BLUR_FADE_DELAY * 4 + index * 0.05}>
							<BookCard {...book} />
						</BlurFade>
					))
				) : (
					<BlurFade delay={BLUR_FADE_DELAY * 4}>
						<p className="text-muted-foreground text-center py-8">
							I'm not currently reading any books. Check back later!
						</p>
					</BlurFade>
				)}
			</div>

			<BlurFade delay={BLUR_FADE_DELAY * 6}>
				<LineGrow className="my-12" />
			</BlurFade>

			<CompletedSection completed={completed} />

			<BlurFade delay={BLUR_FADE_DELAY * 18}>
				<h2 className="font-bold text-3xl mb-8 tracking-tighter w-fit text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-100 dark:from-white dark:to-white/10">
					Reading List
				</h2>
			</BlurFade>

			<div className="grid grid-cols-1 gap-8">
				{toRead.length > 0 ? (
					toRead.map((book, index) => (
						<BlurFade key={book.slug} delay={BLUR_FADE_DELAY * 20 + index * 0.05}>
							<BookCard {...book} />
						</BlurFade>
					))
				) : (
					<BlurFade delay={BLUR_FADE_DELAY * 18}>
						<p className="text-muted-foreground text-center py-8">
							No books in the reading list. Check back later!
						</p>
					</BlurFade>
				)}
			</div>
		</section>
	);
};

export default BooksPage;
