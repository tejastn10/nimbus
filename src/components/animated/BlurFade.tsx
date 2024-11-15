"use client";

import { FC, ReactNode, useRef } from "react";

import { AnimatePresence, motion, useInView, Variants } from "framer-motion";

type BlurFadeProps = {
	blur?: string;
	delay?: number;
	yOffset?: number;
	inView?: boolean;
	duration?: number;
	inViewMargin?: string;
	variant?: {
		hidden: { y: number };
		visible: { y: number };
	};
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
	const ref = useRef(null);

	const inViewResult = useInView(ref, { once: true, margin: inViewMargin as any });
	const isInView = !inView || inViewResult;

	const defaultVariants: Variants = {
		hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
		visible: { y: -yOffset, opacity: 1, filter: "blur(0px)" },
	};
	const combinedVariants = variant || defaultVariants;

	return (
		<AnimatePresence>
			<motion.div
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
			</motion.div>
		</AnimatePresence>
	);
};

export { BlurFade };
