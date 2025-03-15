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

			// Function to check if element or any parent is clickable
			const isClickable = (element: HTMLElement | null): boolean => {
				if (!element) return false;

				// Check if the element itself is clickable
				if (
					window.getComputedStyle(element).cursor === "pointer" ||
					element.tagName.toLowerCase() === "button" ||
					element.tagName.toLowerCase() === "a"
				) {
					return true;
				}

				// Check parent elements until we reach the body
				if (element.parentElement && element !== document.body) {
					return isClickable(element.parentElement);
				}

				return false;
			};

			setIsPointer(isClickable(target));
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
