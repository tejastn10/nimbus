import { JSX, Suspense } from "react";

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlurFade } from "@/components/animated/BlurFade";
import { LineGrow } from "@/components/animated/LineGrow";
import { BoxReveal } from "@/components/animated/BoxReveal";
import { ScrollProgress } from "@/components/animated/ScrollProgress";

import { getLogo, Icons } from "@/components/icons/Icons";

import { DATA } from "@/data/resume";
import { getBlogPosts, getPost } from "@/data/blog";

import { formatDate } from "@/utils/date";
import { calculateReadingTime } from "@/utils/blog";

import { BLUR_FADE_DELAY, BOX_REVEAL_DURATION } from "@/constants/ui";

type BlogProps = {
	params: Promise<{ slug: string }>;
};

export const generateStaticParams = async (): Promise<
	{
		slug: string;
	}[]
> => {
	const posts = await getBlogPosts();
	return posts.map((post) => ({ slug: post.slug }));
};

export const generateMetadata = async ({ params }: BlogProps): Promise<Metadata | undefined> => {
	const slug = (await params).slug;
	const post = await getPost(slug);

	if (!post) {
		return undefined;
	}

	const { title, publishedAt: publishedTime, summary: description, image } = post.metadata;
	const ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: "article",
			publishedTime,
			url: `${DATA.url}/blog/${post.slug}`,
			images: [
				{
					url: ogImage,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [ogImage],
		},
	};
};

const Blog = async ({ params }: BlogProps): Promise<JSX.Element> => {
	const slug = (await params).slug;
	const post = await getPost(slug);

	if (!post) {
		notFound();
	}

	const Icon = getLogo(post.metadata.about);

	const formattedDate = formatDate(post.metadata.publishedAt);
	const readingTime = calculateReadingTime(post.source);

	return (
		<section id="blog" className="relative pb-16">
			<ScrollProgress />

			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BlogPosting",
						headline: post.metadata.title,
						datePublished: post.metadata.publishedAt,
						dateModified: post.metadata.publishedAt,
						description: post.metadata.description,
						image: post.metadata.image
							? `${DATA.url}${post.metadata.image}`
							: `${DATA.url}/og?title=${post.metadata.title}`,
						url: `${DATA.url}/blog/${post.slug}`,
						author: {
							"@type": "Person",
							name: DATA.name,
						},
					}),
				}}
			/>

			<BlurFade delay={BLUR_FADE_DELAY}>
				<BoxReveal duration={BOX_REVEAL_DURATION}>
					<h1 className="title font-bold text-4xl tracking-tighter max-w-[650px]">
						{post.metadata.title}
					</h1>
				</BoxReveal>
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 2} className="flex items-center gap-4">
				<Icon className="text-neutral-500 dark:text-neutral-400" />
				<LineGrow className="my-12" />
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 3}>
				<div className="flex justify-between items-center mt-2 mb-8 text-sm">
					<Suspense fallback={<p className="h-5" />}>
						<p className="inline-flex items-center gap-2 text-xs text-neutral-400 dark:text-neutral-400">
							{Icons.calendar()}
							{formattedDate}
						</p>
						<p className="inline-flex items-center gap-2 text-xs text-neutral-400 dark:text-neutral-400">
							{readingTime} min read {Icons.reader()}
						</p>
					</Suspense>
				</div>
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 4}>
				<article
					className="prose dark:prose-invert leading-[1.5] w-full max-w-none"
					dangerouslySetInnerHTML={{ __html: post.source }}
				/>
			</BlurFade>
		</section>
	);
};

export default Blog;
