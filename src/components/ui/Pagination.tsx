import { type ComponentProps, forwardRef } from "react";

import { type ButtonProps, buttonVariants } from "@/components/ui/Button";

import { cx } from "@/utils/tailwind";

import { Icons } from "../icons/Icons";

const Pagination = ({ className, ...props }: ComponentProps<"nav">) => (
	<nav
		aria-label="pagination"
		className={cx("mx-auto flex w-full justify-center", className)}
		{...props}
	/>
);
Pagination.displayName = "Pagination";

const PaginationContent = forwardRef<HTMLUListElement, ComponentProps<"ul">>(
	({ className, ...props }, ref) => (
		<ul ref={ref} className={cx("flex flex-row items-center gap-1", className)} {...props} />
	)
);
PaginationContent.displayName = "PaginationContent";

const PaginationItem = forwardRef<HTMLLIElement, ComponentProps<"li">>(
	({ className, ...props }, ref) => <li ref={ref} className={cx("", className)} {...props} />
);
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
	isActive?: boolean;
} & Pick<ButtonProps, "size"> &
	ComponentProps<"a">;

const PaginationLink = ({ className, isActive, size = "icon", ...props }: PaginationLinkProps) => (
	<a
		aria-current={isActive ? "page" : undefined}
		className={cx(
			buttonVariants({
				variant: isActive ? "outline" : "ghost",
				size,
			}),
			className
		)}
		{...props}
	/>
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({ className, ...props }: ComponentProps<typeof PaginationLink>) => (
	<PaginationLink
		aria-label="Go to previous page"
		size="default"
		className={cx("gap-1 pl-2.5", className)}
		{...props}
	>
		<Icons.chevron className="h-4 w-4 rotate-180" />
		<span>Previous</span>
	</PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({ className, ...props }: ComponentProps<typeof PaginationLink>) => (
	<PaginationLink
		aria-label="Go to next page"
		size="default"
		className={cx("gap-1 pr-2.5", className)}
		{...props}
	>
		<span>Next</span>
		<Icons.chevron className="h-4 w-4" />
	</PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({ className, ...props }: ComponentProps<"span">) => (
	<span
		aria-hidden
		className={cx("flex h-9 w-9 items-center justify-center", className)}
		{...props}
	>
		<Icons.more className="h-4 w-4" />
		<span className="sr-only">More pages</span>
	</span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
	Pagination,
	PaginationContent,
	PaginationLink,
	PaginationItem,
	PaginationPrevious,
	PaginationNext,
	PaginationEllipsis,
};
