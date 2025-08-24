"use client";

import { type FC, type ReactNode, useEffect, useState } from "react";

import { cx } from "@/utils/tailwind";

type LineGrowProps = {
	duration?: number;
	className?: string;
	children?: ReactNode;
	direction?: "horizontal" | "vertical";
};

const LineGrow: FC<LineGrowProps> = ({
	children,
	className,
	duration = 2,
	direction = "horizontal",
}) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<div
			className={cx(
				"relative",
				direction === "horizontal" ? "inline-block w-[75%] my-8" : "h-full w-px",
				className
			)}
		>
			{children && <span>{children}</span>}
			<div
				className={cx(
					`absolute transition-all duration-[${duration}s]`,
					direction === "horizontal"
						? "bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#000000] to-transparent dark:from-[#ffffff]"
						: "top-0 left-1/2 w-px bg-gradient-to-b from-[#000000] to-transparent dark:from-[#ffffff]",
					isMounted
						? direction === "horizontal"
							? "w-full"
							: "h-full"
						: direction === "horizontal"
							? "w-0"
							: "h-0"
				)}
			/>
		</div>
	);
};

export { LineGrow };
