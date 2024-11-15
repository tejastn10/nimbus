import fs from "fs";
import path from "path";

import matter from "gray-matter";

import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";

import { unified } from "unified";

type PostMetadata = {
	title: string;
	date: string;
	[key: string]: any;
};

type Post = {
	source: string;
	metadata: PostMetadata;
	slug: string;
};

type MarkdownToHTML = (markdown: string) => Promise<string>;
type AllPosts = (dir: string) => Promise<(Post | null)[]>;

const getMDXFiles = (directory: string, recursive = false): string[] => {
	try {
		const entries = fs.readdirSync(directory, { withFileTypes: true });

		let files: string[] = entries
			.filter((entry) => entry.isFile() && path.extname(entry.name) === ".mdx")
			.map((entry) => path.join(directory, entry.name));

		if (recursive) {
			const folders = entries.filter((entry) => entry.isDirectory());
			for (const folder of folders) {
				const folderFiles = getMDXFiles(path.join(directory, folder.name), true);
				files = files.concat(folderFiles);
			}
		}

		return files;
	} catch (error) {
		console.error(`Error reading directory ${directory}:`, error);
		return [];
	}
};

const markdownToHTML: MarkdownToHTML = async (markdown) => {
	try {
		const result = await unified()
			.use(remarkParse) // Parses Markdown
			.use(remarkRehype) // Transforms Markdown to HTML
			.use(rehypePrettyCode, {
				// Configures syntax highlighting
				theme: {
					light: "min-light",
					dark: "min-dark",
				},
				keepBackground: false,
			})
			.use(rehypeStringify) // Serializes HTML as a string
			.process(markdown);

		return result.toString();
	} catch (error) {
		console.error("Error processing markdown:", error);
		return ""; // Return an empty string or throw error based on your app’s error handling policy
	}
};

const getPost = async (slug: string): Promise<Post | null> => {
	try {
		const filePath = path.join("content", `${slug}.mdx`);
		const source = fs.readFileSync(filePath, "utf-8");
		const { content: rawContent, data: metadata } = matter(source);
		const htmlContent = await markdownToHTML(rawContent);

		return {
			source: htmlContent,
			metadata: metadata as PostMetadata, // Cast metadata to PostMetadata
			slug,
		};
	} catch (error) {
		console.error(`Error reading post for slug "${slug}":`, error);
		return null; // Return null to indicate failure to load the post
	}
};

const getAllPosts: AllPosts = async (dir): Promise<Post[]> => {
	const mdxFiles = getMDXFiles(dir);
	const posts = await Promise.all(
		mdxFiles.map(async (file) => {
			const slug = path.basename(file, path.extname(file));
			const post = await getPost(slug);
			return post;
		})
	);

	return posts.filter(Boolean) as Post[]; // Filter out null values
};

const getBlogPosts = async (): Promise<Post[]> => {
	const blogPosts = await getAllPosts(path.join(process.cwd(), "content"));

	const filteredBlogPosts = blogPosts.filter((post) => post !== null);
	return filteredBlogPosts;
};

export {
	getPost,
	getMDXFiles,
	getAllPosts,
	getBlogPosts,
	markdownToHTML,

	// ? Types
	type Post,
	type PostMetadata,
	type MarkdownToHTML,
};
