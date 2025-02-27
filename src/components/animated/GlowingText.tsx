"use client";

import { FC } from "react";

import { cx } from "@/utils/tailwind";

type GlowingTextProps = {
	text: string;
	className?: string;
};

const GlowingText: FC<GlowingTextProps> = ({ text, className }) => {
	return (
		<span className={cx("inline-flex text-xs", className)}>
			{text.split("").map((char, i) => (
				<span
					key={i}
					className="animate-glow inline-block"
					style={{
						animationDelay: `${i * 100}ms`,
						whiteSpace: char === " " ? "pre" : "normal",
					}}
				>
					{char === " " ? "\u00A0" : char}
				</span>
			))}
		</span>
	);
};

export { GlowingText };
