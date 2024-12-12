import { JSX } from "react";

import Link from "next/link";

import { BlurFade } from "@/components/animated/BlurFade";

import { getBlogPosts } from "@/data/blog";

import { BLUR_FADE_DELAY } from "@/constants/ui";

export const metadata = {
	title: "Blog",
	description: "My thoughts on software development, life, and more.",
};

const BlogPage = async (): Promise<JSX.Element> => {
	const posts = await getBlogPosts();

	return (
		<section>
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h1 className="font-bold text-6xl mb-8 tracking-tighter">Blog</h1>
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 7}>
				<hr className="my-12 border-3 border-t-2 border-neutral-500 dark:border-neutral-700 rounded-md" />
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 14}>
				{posts
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
