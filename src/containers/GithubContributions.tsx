"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { type FC, useEffect, useState } from "react";

import { GitHubCalendar } from "react-github-calendar";

import { Icons } from "@/components/icons/Icons";
import { getCurrentYear } from "@/utils/date";

const GitHubContributions: FC = () => {
	const { theme } = useTheme();
	const currentYear = getCurrentYear();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	const isDarkMode = theme === "dark";

	const darkThemeColors = ["#1a1a1a", "#3a3a3a", "#5e5e5e", "#8a8a8a", "#c0c0c0"];
	const lightThemeColors = ["#ebebeb", "#c0c0c0", "#8a8a8a", "#5e5e5e", "#2a2a2a"];

	return (
		<div className="border border-border bg-card p-6 space-y-4">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					{Icons.github()}
					<h3 className="font-mono text-sm font-semibold tracking-wide">Contribution Graph</h3>
				</div>
				<Link
					href="https://github.com/tejastn10"
					target="_blank"
					rel="noopener noreferrer"
					className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
				>
					View Profile →
				</Link>
			</div>

			<div className="w-full">
				<GitHubCalendar
					username="tejastn10"
					colorScheme={isDarkMode ? "dark" : "light"}
					fontSize={10}
					year={currentYear}
					blockSize={12}
					blockMargin={3}
					blockRadius={0}
					theme={{
						light: lightThemeColors,
						dark: darkThemeColors,
					}}
				/>
			</div>
		</div>
	);
};

export { GitHubContributions };
