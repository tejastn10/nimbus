"use client";

import { FC, useEffect, useState } from "react";

const Cursor: FC = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [isPointer, setIsPointer] = useState(false);

	useEffect(() => {
		const updateCursor = (e: MouseEvent) => {
			const { clientX: x, clientY: y } = e;
			setPosition({ x, y });

			// Check if hovering over clickable elements or their children
			const target = e.target as HTMLElement;

			// Use closest() method instead of recursion
			const isClickable =
				window.getComputedStyle(target).cursor === "pointer" ||
				Boolean(target.closest("button")) ||
				Boolean(target.closest("a"));

			setIsPointer(isClickable);
		};

		window.addEventListener("mousemove", updateCursor);
		return () => window.removeEventListener("mousemove", updateCursor);
	}, []);

	return (
		<>
			{/* Main cursor */}
			<div
				className="fixed pointer-events-none z-50 mix-blend-difference"
				style={{
					left: `${position.x}px`,
					top: `${position.y}px`,
					transform: "translate(-50%, -50%)",
				}}
			>
				<div
					className={`rounded-full bg-white transition-all duration-100 ${isPointer ? "w-8 h-8 opacity-35" : "w-4 h-4"}`}
				/>
			</div>
		</>
	);
};

export { Cursor };
