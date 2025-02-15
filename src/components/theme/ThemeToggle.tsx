"use client";

import { FC } from "react";

import { useTheme } from "next-themes";

import { AnimatePresence } from "framer-motion";
import { MotionSpan } from "../motion";

import { Button } from "../ui/Button";

import { Icons } from "../icons/Icons";

const ThemeToggle: FC = () => {
	const { theme, setTheme } = useTheme();
	const isDark = theme === "dark";

	return (
		<Button
			variant="ghost"
			type="button"
			size="icon"
			className="px-2 size-12 relative overflow-hidden"
			onClick={() => setTheme(isDark ? "light" : "dark")}
		>
			<AnimatePresence mode="wait">
				{isDark ? (
					<MotionSpan
						key="moon"
						initial={{ opacity: 0, rotate: 90, scale: 0.6 }}
						animate={{ opacity: 1, rotate: 0, scale: 0.8 }}
						exit={{ opacity: 0, rotate: -90, scale: 0.6 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="absolute"
					>
						<Icons.moon className="h-[1.5rem] w-[1.5rem] text-neutral-800 dark:text-neutral-200" />
					</MotionSpan>
				) : (
					<MotionSpan
						key="sun"
						initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
						animate={{ opacity: 1, rotate: 0, scale: 0.8 }}
						exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="absolute"
					>
						<Icons.sun className="h-[1.5rem] w-[1.5rem] text-neutral-800 dark:text-neutral-200" />
					</MotionSpan>
				)}
			</AnimatePresence>
		</Button>
	);
};

export { ThemeToggle };
