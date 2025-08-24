"use client";

import { type MotionProps, useScroll, useSpring } from "motion/react";
import { forwardRef } from "react";
import { cx } from "@/utils/tailwind";
import { MotionDiv } from "../motion";

const ScrollProgress = forwardRef<
	HTMLDivElement,
	Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>
>(({ className, ...props }, ref) => {
	const { scrollYProgress } = useScroll();

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 200,
		damping: 50,
		restDelta: 0.001,
	});

	return (
		<MotionDiv
			ref={ref}
			className={cx(
				"fixed inset-x-0 top-0 z-[1000] h-0.5 origin-left",
				"bg-gradient-to-l from-[#000000] to-transparent dark:from-[#ffffff]",
				className
			)}
			style={{
				scaleX,
			}}
			{...props}
		/>
	);
});
ScrollProgress.displayName = "ScrollProgress";

export { ScrollProgress };
