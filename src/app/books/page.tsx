import type { JSX } from "react";

import { BlurFade } from "@/components/animated/BlurFade";
import { BLUR_FADE_DELAY } from "@/constants/ui";
import { BookCard } from "@/containers/BookCard";
import { getBooks } from "@/data/book";
import { CompletedSection } from "./completed-section";

export const metadata = {
	title: "Books",
	description:
		"Not everything on this site is what it seems. Here lies a quiet corner of books I've loved, am exploring, or might someday open. You weren't really supposed to find this… or were you?",
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
				<h1 className="font-bold text-6xl mb-4 tracking-tighter">{metadata.title}</h1>
				<h3 className="text-sm text-muted-foreground pb-6">{metadata.description}</h3>
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 2}>
				<span className="section-label">[ Now ]</span>
				<h2 className="font-bold text-3xl mb-8 tracking-tighter">Currently Reading</h2>
			</BlurFade>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

			<CompletedSection completed={completed} />

			<BlurFade delay={BLUR_FADE_DELAY * 18} className="mt-12 block">
				<span className="section-label">[ Up Next ]</span>
				<h2 className="font-bold text-3xl mb-8 tracking-tighter">Reading List</h2>
			</BlurFade>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
