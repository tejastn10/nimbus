"use client";

import { useState, useMemo, FC, ChangeEvent, MouseEvent } from "react";

import { BlurFade } from "@/components/animated/BlurFade";
import { LineGrow } from "@/components/animated/LineGrow";

import { BlogCard } from "@/containers/BlogCard";

import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/Pagination";
import { Input } from "@/components/ui/Input";

import { getLogo } from "@/components/icons/Icons";

import { BLUR_FADE_DELAY } from "@/constants/ui";
import { POSTS_PER_PAGE } from "@/constants/blog";
import { TECH } from "@/constants/data";

import { Post } from "@/data/blog";

import { sortBlogPosts } from "@/utils/blog";

type RemainingSectionProps = {
	remaining: Post[];
};

const RemainingSection: FC<RemainingSectionProps> = ({ remaining }) => {
	const [search, setSearch] = useState("");
	const [page, setPage] = useState(1);

	const sortedPosts = useMemo(() => remaining.sort(sortBlogPosts), [remaining]);

	const filtered = useMemo(
		() =>
			sortedPosts.filter((post) =>
				post.metadata.title.toLowerCase().includes(search.toLowerCase())
			),
		[sortedPosts, search]
	);
	const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
	const paginated = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

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
					Remaining Posts
				</h2>
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 10} className="flex w-full items-center mb-8 gap-2">
				<Input
					type="text"
					placeholder="Search posts..."
					value={search}
					onChange={handleOnSearchChange}
				/>
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 12}>
				<LineGrow className="absolute left-6 top-0 bottom-0" direction="vertical" duration={2} />
				<div className="space-y-10">
					{paginated.length > 0 ? (
						paginated.map((post, id) => {
							const { slug, metadata } = post;
							const { title, description, publishedAt } = metadata;
							const Icon = getLogo(metadata.about) || TECH.General;

							return (
								<div key={id} className="relative pl-18 group">
									<div className="absolute left-6 -translate-x-1/2 flex items-center justify-center w-10 h-10 bg-background rounded-md transition-all duration-300 group-hover:border-primary group-hover:scale-110">
										<Icon className="text-muted-foreground transition-all duration-300 group-hover:text-primary" />
									</div>

									<BlurFade key={slug} delay={BLUR_FADE_DELAY * 2 + id * 0.05}>
										<BlogCard
											slug={slug}
											title={title}
											description={description}
											publishedAt={publishedAt}
											source={post.source}
										/>
									</BlurFade>
								</div>
							);
						})
					) : (
						<BlurFade delay={BLUR_FADE_DELAY * 12} className="col-span-1 md:col-span-2">
							<p className="text-muted-foreground text-center py-8">
								No remaining posts yet. Check back later!
							</p>
						</BlurFade>
					)}
				</div>
			</BlurFade>

			{totalPages > 1 && (
				<BlurFade delay={BLUR_FADE_DELAY * 14} className="pb-12 md:pb-0">
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
		</>
	);
};

export { RemainingSection };
