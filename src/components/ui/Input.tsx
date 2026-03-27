import { forwardRef, useState } from "react";

import { cx } from "@/utils/tailwind";

const Input = forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
	({ className, type, ...props }, ref) => {
		const [isFocused, setIsFocused] = useState(false);

		return (
			<div
				className={cx(
					"relative w-full flex items-center border border-border bg-background transition-colors duration-200",
					isFocused && "border-foreground/40"
				)}
			>
				{/* Search icon */}
				<svg
					className="ml-3 size-3.5 shrink-0 text-muted-foreground"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
					aria-hidden="true"
				>
					<circle cx="11" cy="11" r="8" />
					<path d="m21 21-4.35-4.35" />
				</svg>

				<input
					type={type}
					className={cx(
						"flex h-9 w-full bg-transparent px-3 py-2 text-sm font-mono placeholder:text-muted-foreground/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
						className
					)}
					ref={ref}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					{...props}
				/>
			</div>
		);
	}
);

Input.displayName = "Input";

export { Input };
