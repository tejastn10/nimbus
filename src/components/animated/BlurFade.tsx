"use client";

import { FC, ReactNode, useRef } from "react";

import { AnimatePresence, useInView, Variants } from "motion/react";

import { MotionDiv } from "../motion";

type BlurFadeProps = {
	blur?: string;
	delay?: number;
	yOffset?: number;
	inView?: boolean;
	duration?: number;
	inViewMargin?: string;
	variant?: Variants;
	className?: string;
	children: ReactNode;
};

const BlurFade: FC<BlurFadeProps> = ({
	variant,
	children,
	className,
	delay = 0,
	yOffset = 6,
	blur = "6px",
	duration = 0.4,
	inView = false,
	inViewMargin = "-50px",
}) => {
	const ref = useRef<HTMLDivElement | null>(null);

	const inViewResult = useInView(ref as React.RefObject<Element>, {
		once: true,
		margin: inViewMargin as any,
	});
	const isInView = !inView || inViewResult;

	const defaultVariants: Variants = {
		hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
		visible: { y: -yOffset, opacity: 1, filter: "blur(0px)" },
	};
	const combinedVariants = variant || defaultVariants;

	return (
		<AnimatePresence>
			<MotionDiv
				ref={ref}
				exit="hidden"
				initial="hidden"
				variants={combinedVariants}
				animate={isInView ? "visible" : "hidden"}
				transition={{
					duration,
					ease: "easeOut",
					delay: 0.04 + delay,
				}}
				className={className}
			>
				{children}
			</MotionDiv>
		</AnimatePresence>
	);
};

export { BlurFade };
