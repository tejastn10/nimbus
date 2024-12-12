import { JSX, Suspense } from "react";

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DATA } from "@/data/resume";
import { getBlogPosts, getPost } from "@/data/blog";
import { BlurFade } from "@/components/animated/BlurFade";

import { formatDate } from "@/utils/date";
import { BLUR_FADE_DELAY } from "@/constants/ui";

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

	return (
		<section id="blog">
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
				<h1 className="title font-bold text-4xl tracking-tighter max-w-[650px]">
					{post.metadata.title}
				</h1>
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 2}>
				<hr className="my-12 border-3 border-t-2 border-neutral-500 dark:border-neutral-700 rounded-md" />
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
					className="prose dark:prose-invert leading-[1.5]"
					dangerouslySetInnerHTML={{ __html: post.source }}
				/>
			</BlurFade>
		</section>
	);
};

export default Blog;
