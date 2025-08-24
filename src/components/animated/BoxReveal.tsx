"use client";

import { useAnimation, useInView } from "motion/react";
import { type FC, type JSX, useEffect, useRef } from "react";

import { MotionDiv } from "../motion";

type BoxRevealProps = {
	children: JSX.Element;

	duration?: number;
	width?: "fit-content" | "100%";
};

const BoxReveal: FC<BoxRevealProps> = ({ children, width = "fit-content", duration = 0.5 }) => {
	const mainControls = useAnimation();
	const slideControls = useAnimation();

	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (isInView) {
			slideControls.start("visible");
			mainControls.start("visible");
		} else {
			slideControls.start("hidden");
			mainControls.start("hidden");
		}
	}, [isInView, mainControls, slideControls]);

	return (
		<div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
			<MotionDiv
				variants={{
					hidden: { opacity: 0, y: 75 },
					visible: { opacity: 1, y: 0 },
				}}
				initial="hidden"
				animate={mainControls}
				transition={{ duration: duration, delay: 0.25 }}
			>
				{children}
			</MotionDiv>

			<MotionDiv
				variants={{
					hidden: { left: 0 },
					visible: { left: "100%" },
				}}
				className="absolute bg-black dark:bg-white"
				initial="hidden"
				animate={slideControls}
				transition={{ duration: duration, ease: "easeIn" }}
				style={{
					position: "absolute",
					top: 4,
					bottom: 4,
					left: 0,
					right: 0,
					zIndex: 20,
				}}
			/>
		</div>
	);
};

export { BoxReveal };
