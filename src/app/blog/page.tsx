import { JSX } from "react";

import Link from "next/link";

import { BlurFade } from "@/components/animated/BlurFade";
import { BentoCard, BentoCardProps, BentoGrid } from "@/components/animated/BentoGrid";

import { getBlogPosts } from "@/data/blog";

import { BLUR_FADE_DELAY } from "@/constants/ui";
import { POST_SLICE_NUMBER } from "@/constants/values";

import { getLanguageIcon } from "@/components/icons/Icons";

import { formatDate } from "@/utils/date";

export const metadata = {
	title: "Blog",
	description:
		"Welcome to my blog! Here, you will find my thoughts on software development, life, and anything else that comes to mind.",
};

const BlogPage = async (): Promise<JSX.Element> => {
	const posts = await getBlogPosts();
	const recentPosts: BentoCardProps[] = posts
		.sort(
			(a, b) =>
				new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
		)
		.map((post, index) => ({
			name: post.metadata.title,
			className:
				index % 4 === 0 || index % 4 === 3
					? "col-span-3 lg:col-span-2 grayscale hover:grayscale-0"
					: "col-span-3 lg:col-span-1 grayscale hover:grayscale-0",
			Icon: getLanguageIcon(post.metadata.about),
			description: formatDate(post.metadata.publishedAt, true),
			href: `/blog/${post.slug}`,
			cta: "Read More",
		}))
		.slice(0, POST_SLICE_NUMBER);

	return (
		<section>
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h1 className="font-bold text-6xl mb-4 tracking-tighter">{metadata.title}</h1>
				<h3 className="text-sm text-muted-foreground pb-6">{metadata.description}</h3>
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 2}>
				<h2 className="font-bold text-3xl mb-8 tracking-tighter">Recent Posts</h2>
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 4}>
				<BentoGrid className="auto-rows-[14rem]">
					{recentPosts.map((post) => (
						<BentoCard key={post.name} {...post} />
					))}
				</BentoGrid>
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 6}>
				<hr className="my-12 border-3 border-t-2 border-neutral-500 dark:border-neutral-700 rounded-md" />
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 8}>
				<h2 className="font-bold text-3xl mb-8 tracking-tighter">Remaining Posts</h2>
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 12}>
				{posts
					.slice(POST_SLICE_NUMBER)
					.sort((a, b) => {
						if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
							return -1;
						}
						return 1;
					})
					.map((post, id) => (
						<BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
							<Link
								className="flex flex-col space-y-2 mb-6 p-4 rounded-lg border border-neutral-300 dark:border-neutral-700 filter grayscale hover:grayscale-0 hover:shadow-lg hover:scale-105 transition-all duration-300 "
								href={`/blog/${post.slug}`}
							>
								<div className="w-full flex flex-col">
									<p className="text-lg font-semibold text-foreground tracking-tight transition-all duration-300">
										{post.metadata.title}
									</p>

									<div className="flex justify-between items-center text-xs text-muted-foreground pt-1">
										<p className="mr-0 ">{post.metadata.description}</p>
									</div>

									<div className="flex justify-between items-center text-xs text-muted-foreground pt-8">
										<p className="ml-0">Published by TN10</p>
										<p className="mr-0 px-2">{post.metadata.publishedAt}</p>
									</div>
								</div>
							</Link>
						</BlurFade>
					))}
			</BlurFade>
		</section>
	);
};

export default BlogPage;
