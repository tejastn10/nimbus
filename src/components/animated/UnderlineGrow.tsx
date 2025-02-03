"use client";

import { cx } from "@/utils/tailwind";
import React, { FC, ReactNode, useEffect, useState } from "react";

type UnderlineGrowProps = {
	duration?: number;
	className?: string;
	children?: ReactNode;
};

const UnderlineGrow: FC<UnderlineGrowProps> = ({ children, className, duration = 2 }) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true); // Set to true after the component mounts
	}, []);

	return (
		<div className={cx("relative inline-block w-[75%] my-8", className)}>
			{children && <span>{children}</span>}
			<div
				className={`absolute bottom-0 left-0 h-[2px] bg-current transition-all duration-[${duration}s] ${
					isMounted ? "w-full" : "w-0"
				}`}
			/>
		</div>
	);
};

export { UnderlineGrow };
