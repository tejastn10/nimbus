import { forwardRef, useState } from "react";

import { cx } from "@/utils/tailwind";

const Input = forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
	({ className, type, ...props }, ref) => {
		const [isFocused, setIsFocused] = useState(false);

		const onFocus = () => {
			setIsFocused(true);
		};
		const onBlur = () => {
			setIsFocused(false);
		};

		return (
			<div className="relative w-full">
				<input
					type={type}
					className={cx(
						"flex h-10 w-full rounded-none border-0 bg-transparent px-3 py-1 text-base shadow-none transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
						className
					)}
					ref={ref}
					onBlur={onBlur}
					onFocus={onFocus}
					{...props}
				/>
				<div
					className={cx(
						"absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-black to-transparent dark:from-white transition-all duration-300",
						isFocused ? "w-full" : "w-0"
					)}
				/>
			</div>
		);
	}
);

Input.displayName = "Input";

export { Input };
