import { WORDS_PER_MINUTE } from "@/constants/blog";
import type { Post } from "@/data/blog";

const calculateReadingTime = (html: string): number => {
	const text = html.replace(/<[^>]*>/g, ""); // Strip HTML tags
	const words = text.trim().split(/\s+/).length;

	return Math.ceil(words / WORDS_PER_MINUTE); // Assuming 200 words per minute
};

const sortBlogPosts = (a: Post, b: Post): number => {
	return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
};

export { calculateReadingTime, sortBlogPosts };
