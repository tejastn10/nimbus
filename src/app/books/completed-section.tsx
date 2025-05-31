"use client";

import { useState, useMemo, FC, ChangeEvent, MouseEvent } from "react";

import { BlurFade } from "@/components/animated/BlurFade";
import { LineGrow } from "@/components/animated/LineGrow";

import { BookCard, BookCardProps } from "@/containers/BookCard";

import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/Pagination";
import { Input } from "@/components/ui/Input";

import { BLUR_FADE_DELAY } from "@/constants/ui";
import { BOOKS_PER_PAGE } from "@/constants/book";

type CompletedSectionProps = {
	completed: BookCardProps[];
};

const CompletedSection: FC<CompletedSectionProps> = ({ completed }) => {
	const [search, setSearch] = useState("");
	const [page, setPage] = useState(1);

	const filtered = useMemo(
		() => completed.filter((book) => book.title.toLowerCase().includes(search.toLowerCase())),
		[completed, search]
	);

	const totalPages = Math.max(1, Math.ceil(filtered.length / BOOKS_PER_PAGE));
	const paginated = filtered.slice((page - 1) * BOOKS_PER_PAGE, page * BOOKS_PER_PAGE);

	const handleOnSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setSearch(e.target.value);
		setPage(1);
	};

	const handlePageChange = ({
		e,
		newPage,
	}: {
		e: MouseEvent<HTMLAnchorElement>;
		newPage: number;
	}): void => {
		e.preventDefault();
		if (newPage >= 1 && newPage <= totalPages) setPage(newPage);
	};

	return (
		<>
			<BlurFade delay={BLUR_FADE_DELAY * 8}>
				<h2 className="font-bold text-3xl mb-8 tracking-tighter w-fit text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-100 dark:from-white dark:to-white/10">
					Completed Books
				</h2>
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 10} className="flex w-full items-center mb-8 gap-2">
				<Input
					type="text"
					placeholder="Search books..."
					value={search}
					onChange={handleOnSearchChange}
				/>
			</BlurFade>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{paginated.length > 0 ? (
					paginated.map((book, index) => (
						<BlurFade key={book.slug} delay={BLUR_FADE_DELAY * 12 + index * 0.05}>
							<BookCard {...book} />
						</BlurFade>
					))
				) : (
					<BlurFade delay={BLUR_FADE_DELAY * 12} className="col-span-1 md:col-span-2">
						<p className="text-muted-foreground text-center py-8">
							No completed books yet. Check back later!
						</p>
					</BlurFade>
				)}
			</div>

			{totalPages > 1 && (
				<BlurFade delay={BLUR_FADE_DELAY * 14}>
					<Pagination className="mt-6">
						<PaginationContent>
							<PaginationItem>
								<PaginationPrevious
									href="#"
									onClick={(e) => handlePageChange({ e, newPage: page - 1 })}
								/>
							</PaginationItem>
							{[...Array(totalPages)].map((_, i) => (
								<PaginationItem key={i}>
									<PaginationLink
										href="#"
										isActive={page === i + 1}
										onClick={(e) => handlePageChange({ e, newPage: i + 1 })}
									>
										{i + 1}
									</PaginationLink>
								</PaginationItem>
							))}
							<PaginationItem>
								<PaginationNext
									href="#"
									onClick={(e) => handlePageChange({ e, newPage: page + 1 })}
								/>
							</PaginationItem>
						</PaginationContent>
					</Pagination>
				</BlurFade>
			)}

			<BlurFade delay={BLUR_FADE_DELAY * 16}>
				<LineGrow className="my-12" />
			</BlurFade>
		</>
	);
};

export { CompletedSection };
