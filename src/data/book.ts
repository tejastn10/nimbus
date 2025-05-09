import fs from "fs";
import path from "path";

import matter from "gray-matter";

import { getMDXFiles, markdownToHTML } from "./blog";

type BookMetadata = {
	title: string;
	author: string;
	category: string;
	readingStatus: "reading" | "completed" | "to-read";
	description: string;
	publishedDate?: string;
	finishedOn?: string; // Date when the book was completed
};

type Book = {
	source: string;
	metadata: BookMetadata;
	slug: string;
};

type AllBooks = (dir: string) => Promise<(Book | null)[]>;

const getBook = async (slug: string): Promise<Book | null> => {
	try {
		const filePath = path.join("books", `${slug}.mdx`);
		const source = fs.readFileSync(filePath, "utf-8");
		const { content: rawContent, data: metadata } = matter(source);
		const htmlContent = await markdownToHTML(rawContent);

		return {
			source: htmlContent,
			metadata: metadata as BookMetadata, // Cast metadata to BookMetadata
			slug,
		};
	} catch (error) {
		console.error(`Error reading book ${slug}:`, error);
		return null; // Return null indicate failure to load the book
	}
};

const getAllBooks: AllBooks = async (dir): Promise<Book[]> => {
	const mdxFiles = getMDXFiles(dir);
	const books = await Promise.all(
		mdxFiles.map(async (file) => {
			const slug = path.basename(file, path.extname(file));
			const book = await getBook(slug);
			return book;
		})
	);

	return books.filter(Boolean) as Book[]; // Filter out null values
};

const getBooks = async (): Promise<Book[]> => {
	const books = await getAllBooks(path.join(process.cwd(), "books"));

	const filteredBooks = books.filter((book) => book !== null);
	return filteredBooks;
};

export {
	getBook,
	getMDXFiles,
	getAllBooks,
	getBooks,
	markdownToHTML,

	// ? Types
	type Book,
	type BookMetadata,
	type AllBooks,
};
