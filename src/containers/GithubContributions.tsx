"use client";

import { FC, useEffect, useState } from "react";

import Link from "next/link";
import { useTheme } from "next-themes";

import GitHubCalendar from "react-github-calendar";

import { Icons } from "@/components/icons/Icons";

import { cx } from "@/utils/tailwind";

const GitHubContributions: FC = () => {
	const { theme } = useTheme();

	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	// ? Handling React Hydration Error
	if (!mounted) return null;

	const isDarkMode = theme === "dark";

	const darkThemeColors = ["#1f1f1f", "#4a4a4a", "#767676", "#a3a3a3", "#d4d4d4"];
	const lightThemeColors = ["#f5f5f5", "#d4d4d4", "#a3a3a3", "#767676", "#4a4a4a"];

	return (
		<div
			className={cx(
				"flex flex-col space-y-2 mb-6 p-4 rounded-lg overflow-hidden ease-out h-full transition-all duration-300",
				// light styles
				"bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
				// dark styles
				"transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
			)}
		>
			<div className="p-4 space-y-2">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						{Icons.github()}
						<h3 className="font-semibold text-sm">Contribution Graph</h3>
					</div>
					<Link
						href="https://github.com/tejastn10"
						target="_blank"
						rel="noopener noreferrer"
						className="text-xs text-muted-foreground hover:text-foreground transition-colors underline-slide"
					>
						View Profile →
					</Link>
				</div>
				<div className="w-full bg-transparent p-4 rounded-lg">
					<GitHubCalendar
						username="tejastn10"
						colorScheme={isDarkMode ? "dark" : "light"}
						fontSize={10}
						blockSize={11}
						blockMargin={3.2}
						theme={{
							light: lightThemeColors,
							dark: darkThemeColors,
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export { GitHubContributions };
