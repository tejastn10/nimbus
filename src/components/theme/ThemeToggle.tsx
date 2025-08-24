"use client";

import { useTheme } from "next-themes";
import type { FC } from "react";
import { Icons } from "../icons/Icons";
import { Button } from "../ui/Button";

const ThemeToggle: FC = () => {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			variant="ghost"
			type="button"
			size="icon"
			className="px-2 size-12"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
		>
			<Icons.sun className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
			<Icons.moon className="hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" />
		</Button>
	);
};

export { ThemeToggle };
