import { JSX } from "react";

import { BlurFade } from "@/components/animated/BlurFade";
import { LineGrow } from "@/components/animated/LineGrow";
import { BoxReveal } from "@/components/animated/BoxReveal";
import { BentoCard, BentoCardProps, BentoGrid } from "@/components/animated/BentoGrid";

import { BlogCard } from "@/containers/BlogCard";

import { getBlogPosts } from "@/data/blog";

import { BLUR_FADE_DELAY, BOX_REVEAL_DURATION } from "@/constants/ui";
import { POST_SLICE_NUMBER } from "@/constants/values";

import { getLogo } from "@/components/icons/Icons";

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
		.slice(0, POST_SLICE_NUMBER)
		.map((post, index) => ({
			name: post.metadata.about,
			className:
				index % 4 === 0 || index % 4 === 3
					? "col-span-3 lg:col-span-1 grayscale hover:grayscale-0"
					: "col-span-3 lg:col-span-2 grayscale hover:grayscale-0",
			Icon: getLogo(post.metadata.about),
			description: post.metadata.title,
			subDescription: formatDate(post.metadata.publishedAt, true),
			href: `/blog/${post.slug}`,
			cta: "Read",
		}));

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
				<h2 className="font-bold text-3xl mb-8 tracking-tighter">Recent Posts</h2>
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 4}>
				<BentoGrid className="auto-rows-[14rem]">
					{recentPosts.map((post) => (
						<BentoCard key={post.description} {...post} />
					))}
				</BentoGrid>
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 6}>
				<LineGrow className="my-12" />
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
					.map((post, id) => {
						const { slug, metadata } = post;
						const { title, description, about, publishedAt } = metadata;

						return (
							<BlurFade key={slug} delay={BLUR_FADE_DELAY * 2 + id * 0.05}>
								<BlogCard
									slug={slug}
									title={title}
									description={description}
									about={about}
									publishedAt={publishedAt}
								/>
							</BlurFade>
						);
					})}
			</BlurFade>
		</section>
	);
};

export default BlogPage;
