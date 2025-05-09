import { JSX } from "react";

import { BlurFade } from "@/components/animated/BlurFade";
import { LineGrow } from "@/components/animated/LineGrow";
import { BoxReveal } from "@/components/animated/BoxReveal";
import { BentoCard, BentoCardProps, BentoGrid } from "@/components/animated/BentoGrid";

import { BookCard } from "@/containers/BookCard";

import { Icons } from "@/components/icons/Icons";

import { BLUR_FADE_DELAY, BOX_REVEAL_DURATION } from "@/constants/ui";

import { getBooks } from "@/data/book";

export const metadata = {
	title: "Books",
	description:
		"A collection of books I'm currently reading, have read, or plan to read. Each book is a journey into a different world, and I hope to share my thoughts and insights with you.",
};

const BooksPage = async (): Promise<JSX.Element> => {
	const books = await getBooks();

	const currentlyReading: BentoCardProps[] = books
		.filter((book) => book.metadata.readingStatus === "reading")
		.map((book, index) => ({
			name: book.metadata.title,
			className:
				index % 4 === 0 || index % 4 === 3
					? "col-span-3 lg:col-span-2 grayscale hover:grayscale-0"
					: "col-span-3 lg:col-span-1 grayscale hover:grayscale-0",
			Icon: Icons.books,
			description: book.metadata.category,
			subDescription: book.metadata.author,
			href: `/books/${book.slug}`,
			cta: "View Book",
		}));

	const completed = books.filter((book) => book.metadata.readingStatus === "completed");
	const toRead = books.filter((book) => book.metadata.readingStatus === "to-read");

	return (
		<section>
			<BlurFade delay={BLUR_FADE_DELAY}>
				<BoxReveal duration={BOX_REVEAL_DURATION}>
					<h1 className="font-bold text-6xl mb-4 tracking-tighter">{metadata.title}</h1>
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

			{currentlyReading.length > 0 ? (
				<BlurFade delay={BLUR_FADE_DELAY * 4}>
					<BentoGrid className="auto-rows-[14rem]">
						{currentlyReading.map((post) => (
							<BentoCard key={post.description} {...post} />
						))}
					</BentoGrid>
				</BlurFade>
			) : (
				<BlurFade delay={BLUR_FADE_DELAY * 4}>
					<p className="text-muted-foreground text-center py-8">
						Not currently reading any books. Check back later!
					</p>
				</BlurFade>
			)}

			<BlurFade delay={BLUR_FADE_DELAY * 6}>
				<LineGrow className="my-12" />
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 8}>
				<h2 className="font-bold text-3xl mb-8 tracking-tighter w-fit text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-100 dark:from-white dark:to-white/10">
					Completed Books
				</h2>
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 12}>
				<LineGrow className="absolute left-6 top-0 bottom-0" direction="vertical" duration={2} />
				<div className="space-y-10">
					{completed.length > 0 ? (
						completed.map((book, index) => {
							return (
								<div key={index} className="relative pl-18 group">
									<div className="absolute left-6 -translate-x-1/2 flex items-center justify-center w-10 h-10 bg-background rounded-md transition-all duration-300 group-hover:border-primary group-hover:scale-110">
										<Icons.books className="text-muted-foreground transition-all duration-300 group-hover:text-primary" />
									</div>

									<BlurFade delay={BLUR_FADE_DELAY * 2 + index * 0.05}>
										<BookCard
											slug={book.slug}
											title={book.metadata.title}
											author={book.metadata.author}
											description={book.metadata.description}
											category={book.metadata.category}
											readingStatus={book.metadata.readingStatus}
										/>
									</BlurFade>
								</div>
							);
						})
					) : (
						<p className="text-muted-foreground text-center py-8">
							No completed books yet. Check back later!
						</p>
					)}
				</div>
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 14}>
				<LineGrow className="my-12" />
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 16}>
				<h2 className="font-bold text-3xl mb-8 tracking-tighter w-fit text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-100 dark:from-white dark:to-white/10">
					Reading List
				</h2>
			</BlurFade>

			<div>
				{toRead.length > 0 ? (
					toRead.map((book, index) => {
						return (
							<BlurFade key={index} delay={BLUR_FADE_DELAY * 18 * index * 0.05}>
								<BookCard
									slug={book.slug}
									title={book.metadata.title}
									author={book.metadata.author}
									description={book.metadata.description}
									category={book.metadata.category}
									readingStatus={book.metadata.readingStatus}
								/>
							</BlurFade>
						);
					})
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
