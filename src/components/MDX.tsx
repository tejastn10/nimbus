import { FC, ReactNode, createElement } from "react";

import Link, { LinkProps } from "next/link";
import Image, { ImageProps } from "next/image";

type TableProps = {
	headers: string[];
	rows: string[][];
};

const Table: FC<TableProps> = ({ headers, rows }) => {
	const tableHeaders = headers.map((header, index) => <th key={index}>{header}</th>);

	const tableRows = rows.map((row, index) => (
		<tr key={index}>
			{row.map((cell, cellIndex) => (
				<td key={cellIndex}>{cell}</td>
			))}
		</tr>
	));

	return (
		<>
			<table>
				<thead>
					<tr>{tableHeaders}</tr>
				</thead>
				<tbody>{tableRows}</tbody>
			</table>
		</>
	);
};

const CustomLink: FC<LinkProps> = (props) => {
	const { href, ...remainingProps } = props;

	const url = href.toString();

	if (url.startsWith("/")) {
		return <Link href={href} {...remainingProps} />;
	}

	if (url.startsWith("#")) {
		return <a href={url} {...remainingProps}></a>;
	}

	return <a href={url} target="_blank" rel="noopener noreferrer" {...remainingProps} />;
};

const RoundedImage: FC<ImageProps> = ({ alt, ...props }) => {
	return <Image className="rounded-lg" alt={alt} {...props} />;
};

const slugify = (str: string): string =>
	str
		.toLowerCase()
		.trim()
		.replace(/\s+/g, "-") // Replace spaces with -
		.replace(/&/g, "-and-") // Replace & with 'and'
		.replace(/[^\w-]+/g, "") // Remove all non-word characters except for -
		.replace(/--+/g, "-"); // Replace multiple - with single -

const createHeading = (level: number) => {
	const Heading = ({ children }: { children: ReactNode }) => {
		const slug = slugify(children as string);
		return createElement(`h${level}`, { id: slug }, [
			createElement("a", {
				href: `#${slug}`,
				key: `link-${slug}`,
				className: "anchor",
			}),
			children,
		]);
	};

	Heading.displayName = `Heading${level}`;
	return Heading;
};

export const globalComponents = {
	h1: createHeading(1),
	h2: createHeading(2),
	h3: createHeading(3),
	h4: createHeading(4),
	h5: createHeading(5),
	h6: createHeading(6),
	Image: RoundedImage,
	a: CustomLink,
	Table,
};
