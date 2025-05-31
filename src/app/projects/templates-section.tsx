"use client";

import { useState, useMemo, FC, ChangeEvent, MouseEvent } from "react";

import { BlurFade } from "@/components/animated/BlurFade";

import { TemplateCard } from "@/containers/TemplateCard";
import { ProjectProps } from "@/containers/ProjectCard";

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
import { POSTS_PER_PAGE } from "@/constants/blog";

type TemplatesSectionProps = {
	templates: ProjectProps[];
};

const TemplatesSection: FC<TemplatesSectionProps> = ({ templates }) => {
	const [search, setSearch] = useState("");
	const [page, setPage] = useState(1);

	const filtered = useMemo(
		() =>
			templates.filter(
				(project) =>
					project.title.toLowerCase().includes(search.toLowerCase()) ||
					project.description.toLowerCase().includes(search.toLowerCase()) ||
					project.purpose.toLowerCase().includes(search.toLowerCase()) ||
					project.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
			),
		[templates, search]
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
					Templates Projects
				</h2>
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 10} className="flex w-full items-center mb-8 gap-2">
				<Input
					type="text"
					placeholder="Search projects..."
					value={search}
					onChange={handleOnSearchChange}
				/>
			</BlurFade>

			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mx-auto">
				{paginated.length > 0 ? (
					paginated.map((project, id) => (
						<BlurFade key={project.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
							<TemplateCard
								href={project.href}
								key={project.title}
								title={project.title}
								description={project.description}
								tags={project.tags}
							/>
						</BlurFade>
					))
				) : (
					<BlurFade delay={BLUR_FADE_DELAY * 12} className="col-span-1 md:col-span-2">
						<p className="text-muted-foreground text-center py-8">
							No templates found matching your search criteria.
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
		</>
	);
};

export { TemplatesSection };
