"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FC } from "react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { DATA } from "@/data/resume";

const navLinks = [
	{ href: "/work", label: "Work" },
	{ href: "/projects", label: "Projects" },
	{ href: "/blog", label: "Blog" },
];

const TopNavbar: FC = () => {
	const pathname = usePathname();
	const isBooks = pathname.startsWith("/books");

	return (
		<header
			className={[
				"fixed top-0 inset-x-0 z-30",
				"border-b border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.08)]",
				isBooks
					? "bg-[hsl(var(--color-background))]/80 backdrop-blur-md book-theme"
					: "bg-background/80 backdrop-blur-md",
			].join(" ")}
		>
			<div className="max-w-4xl mx-auto px-6">
				<nav className="flex items-center justify-between h-12" aria-label="Top navigation">
					{/* Logo / name */}
					<Link
						href="/"
						className="font-mono text-xs tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200"
						aria-label="Home"
					>
						{DATA.logoName}
					</Link>

					{/* Nav links */}
					<div className="flex items-center gap-6">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="font-mono text-xs tracking-wide uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
							>
								{link.label}
							</Link>
						))}

						{!isBooks && (
							<>
								<span className="h-3 w-px bg-border" aria-hidden="true" />
								<ThemeToggle />
							</>
						)}
					</div>
				</nav>
			</div>
		</header>
	);
};

export { TopNavbar };
