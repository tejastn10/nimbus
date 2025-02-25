import { JSX, Suspense } from "react";

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlurFade } from "@/components/animated/BlurFade";
import { LineGrow } from "@/components/animated/LineGrow";
import { BoxReveal } from "@/components/animated/BoxReveal";
import { ScrollProgress } from "@/components/animated/ScrollProgress";

import { DATA } from "@/data/resume";
import { getBlogPosts, getPost } from "@/data/blog";

import { formatDate } from "@/utils/date";
import { getLogo } from "@/components/icons/Icons";
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

	return (
		<section id="blog" className="relative">
			<ScrollProgress />

			{Icon && (
				<>
					{/* Top-Right Icon */}
					<BlurFade
						delay={BLUR_FADE_DELAY * 2}
						className="hidden sm:block fixed top-4 right-4 md:top-8 md:right-8 lg:top-12 lg:right-12 pointer-events-none z-[-1]"
						aria-hidden="true"
					>
						<Icon className="text-[250px] md:text-[300px] lg:text-[350px] text-neutral-500 dark:text-neutral-400 opacity-10 hover:opacity-20 rotate-15 hover:rotate-0 transition-all duration-300 pointer-events-auto" />
					</BlurFade>

					{/* Bottom-Left Icon */}
					<BlurFade
						delay={BLUR_FADE_DELAY * 2}
						className="hidden sm:block fixed bottom-4 left-4 md:bottom-8 md:left-8 lg:bottom-12 lg:left-12 pointer-events-none z-[-1]"
						aria-hidden="true"
					>
						<Icon className="text-[250px] md:text-[300px] lg:text-[350px] text-neutral-500 dark:text-neutral-400 opacity-10 hover:opacity-20 -rotate-15 hover:rotate-0 transition-all duration-300 pointer-events-auto" />
					</BlurFade>
				</>
			)}

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
				<div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
					<Suspense fallback={<p className="h-5" />}>
						<p className="text-xs text-neutral-400 dark:text-neutral-400">
							{formatDate(post.metadata.publishedAt)}
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
