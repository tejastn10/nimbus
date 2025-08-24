import { notFound } from "next/navigation";
import type { JSX } from "react";

import { BlurFade } from "@/components/animated/BlurFade";
import { BoxReveal } from "@/components/animated/BoxReveal";
import { LineGrow } from "@/components/animated/LineGrow";
import { Icons } from "@/components/icons/Icons";
import { Badge } from "@/components/ui/Badge";
import { BLUR_FADE_DELAY, BOX_REVEAL_DURATION } from "@/constants/ui";
import { getBook, getBooks } from "@/data/book";

import { cx } from "@/utils/tailwind";

type BookProps = {
	params: Promise<{ slug: string }>;
};

const getStatusStyles = (readingStatus: "reading" | "completed" | "to-read") => {
	const statusColors = {
		reading: {
			badge: "bg-amber-500/80 hover:bg-amber-500",
			gradient: "from-amber-500/10 to-amber-600/10",
			border: "border-amber-500/50",
			text: "text-amber-500",
			titleGradient: "from-amber-600 to-amber-300",
		},
		completed: {
			badge: "bg-emerald-500/80 hover:bg-emerald-500",
			gradient: "from-emerald-500/10 to-emerald-600/10",
			border: "border-emerald-500/50",
			text: "text-emerald-500",
			titleGradient: "from-emerald-600 to-emerald-300",
		},
		"to-read": {
			badge: "bg-blue-500/80 hover:bg-blue-500",
			gradient: "from-blue-500/10 to-blue-600/10",
			border: "border-blue-500/50",
			text: "text-blue-500",
			titleGradient: "from-blue-600 to-blue-300",
		},
	};

	return statusColors[readingStatus];
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
	const styles = getStatusStyles(readingStatus);

	return (
		<section className="relative max-w-3xl mx-auto">
			<div className="absolute inset-0 -z-10 overflow-hidden">
				<div className={cx("absolute inset-0 bg-gradient-to-br opacity-30")} />
			</div>

			<BlurFade delay={BLUR_FADE_DELAY}>
				<BoxReveal duration={BOX_REVEAL_DURATION}>
					<div className="mb-2">
						<h1
							className={cx(
								"font-bold text-4xl md:text-5xl mb-3 tracking-tighter",
								"bg-clip-text text-transparent bg-gradient-to-r",
								styles.titleGradient
							)}
						>
							{title}
						</h1>
						<p className="text-sm text-muted-foreground mb-4 font-light">
							by {author} - {category}
						</p>

						<div className="flex flex-wrap gap-3 mb-4">
							<Badge className={cx("text-xs", styles.badge)}>{category}</Badge>
							<Badge className={cx("text-xs", styles.badge)}>
								{readingStatus === "reading" && "Currently reading"}
								{readingStatus === "completed" && "Completed"}
								{readingStatus === "to-read" && "To Read"}
							</Badge>
							{publishedDate && (
								<span className={cx("text-xs flex items-center gap-1", styles.text)}>
									<Icons.calendar className="w-4 h-4" /> {publishedDate}
								</span>
							)}
						</div>

						<p className="text-sm text-muted-foreground mb-2 font-light">{description}</p>
					</div>
				</BoxReveal>
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 2}>
				<LineGrow className={cx("my-8", styles.border)} />
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 4}>
				<article
					className={cx(
						"prose dark:prose-invert max-w-none",
						"relative isolate",
						"rounded-lg overflow-hidden",
						"bg-gradient-to-br from-background to-background/80",
						"p-8",
						"border border-border/50",
						// Gradient overlay
						"before:absolute before:inset-0 before:bg-gradient-to-br",
						`before:${styles.gradient}`,
						"before:opacity-30",
						// Animated border
						"after:absolute after:inset-0 after:-z-10",
						"after:p-[1px] after:rounded-lg",
						`after:bg-gradient-to-br after:${styles.gradient}`,
						"after:opacity-30"
					)}
					// biome-ignore lint/security/noDangerouslySetInnerHtml: Safe JSON-LD structured data
					dangerouslySetInnerHTML={{ __html: source }}
				/>
			</BlurFade>
		</section>
	);
};

export default Book;
