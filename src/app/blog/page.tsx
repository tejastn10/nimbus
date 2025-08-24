import type { JSX } from "react";
import { BentoCard, type BentoCardProps, BentoGrid } from "@/components/animated/BentoGrid";
import { BlurFade } from "@/components/animated/BlurFade";
import { BoxReveal } from "@/components/animated/BoxReveal";
import { LineGrow } from "@/components/animated/LineGrow";

import { getLogo } from "@/components/icons/Icons";
import { BLUR_FADE_DELAY, BOX_REVEAL_DURATION } from "@/constants/ui";

import { POST_SLICE_NUMBER } from "@/constants/values";
import { getBlogPosts } from "@/data/blog";
import { formatDate } from "@/utils/date";
import { RemainingSection } from "./remaining-section";

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
					? "col-span-3 lg:col-span-2 grayscale hover:grayscale-0"
					: "col-span-3 lg:col-span-1 grayscale hover:grayscale-0",
			Icon: getLogo(post.metadata.about),
			description: post.metadata.title,
			subDescription: formatDate(post.metadata.publishedAt, true),
			href: `/blog/${post.slug}`,
			cta: "Read",
		}));

	const remainingPosts = posts.slice(POST_SLICE_NUMBER);

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
				<h2 className="font-bold text-3xl mb-8 tracking-tighter w-fit text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-100 dark:from-white dark:to-white/10">
					Recent Posts
				</h2>
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

			<RemainingSection remaining={remainingPosts} />
		</section>
	);
};

export default BlogPage;
