"use client";

import { FC, useMemo } from "react";

import { AnimatePresence, Variants, motion } from "motion/react";

import { combineClasses } from "@/utils/tailwind";

type BlurFadeTextProps = {
	text: string;
	delay?: number;
	yOffset?: number;
	duration?: number;
	characterDelay?: number;
	animateByCharacter?: boolean;
	variant?: {
		hidden: { y: number };
		visible: { y: number };
	};
	className?: string;
};

const BlurFadeText: FC<BlurFadeTextProps> = ({
	text,
	variant,
	className,
	delay = 0,
	yOffset = 8,
	characterDelay = 0.03,
	animateByCharacter = false,
}) => {
	const defaultVariants: Variants = {
		hidden: { y: yOffset, opacity: 0, filter: "blur(8px)" },
		visible: { y: -yOffset, opacity: 1, filter: "blur(0px)" },
	};
	const combinedVariants = variant || defaultVariants;
	const characters = useMemo(() => Array.from(text), [text]);

	if (animateByCharacter) {
		return (
			<div className="flex">
				<AnimatePresence>
					{characters.map((char, index) => (
						<motion.span
							key={index}
							exit="hidden"
							initial="hidden"
							animate="visible"
							variants={combinedVariants}
							transition={{
								yoyo: Infinity,
								delay: delay + index * characterDelay,
								ease: "easeOut",
							}}
							className={combineClasses("inline-block", className)}
							style={{ width: char.trim() === "" ? "0.2em" : "auto" }}
						>
							{char}
						</motion.span>
					))}
				</AnimatePresence>
			</div>
		);
	}

	return (
		<div className="flex">
			<AnimatePresence>
				<motion.span
					exit="hidden"
					initial="hidden"
					animate="visible"
					variants={combinedVariants}
					transition={{
						delay,
						yoyo: Infinity,
						ease: "easeOut",
					}}
					className={combineClasses("inline-block", className)}
				>
					{text}
				</motion.span>
			</AnimatePresence>
		</div>
	);
};

export { BlurFadeText };
