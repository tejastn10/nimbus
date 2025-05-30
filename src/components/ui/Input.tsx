import { forwardRef } from "react";

import { cx } from "@/utils/tailwind";

const Input = forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cx(
					"flex h-10 w-full rounded-none border-0 border-b border-b-input bg-transparent px-3 py-1 text-base shadow-none transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-b-black dark:focus-visible:border-b-white disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
					className
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);
Input.displayName = "Input";

export { Input };
