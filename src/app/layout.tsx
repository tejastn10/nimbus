import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Navbar } from "@/containers/Navbar";

import { ThemeProvider } from "@/components/theme/ThemeProvider";

import { GridPattern } from "@/components/animated/GridPattern";

import { TooltipProvider } from "@/components/ui/Tooltip";

import { DATA } from "@/data/resume";

import { combineClasses } from "@/utils/tailwind";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	metadataBase: new URL(DATA.url),
	title: {
		default: DATA.name,
		template: `%s | ${DATA.name}`,
	},
	description: DATA.description,
	openGraph: {
		title: `${DATA.name}`,
		description: DATA.description,
		url: DATA.url,
		siteName: `${DATA.name}`,
		locale: "en_US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: `${DATA.name}`,
		card: "summary_large_image",
	},
	verification: {
		google: "",
		yandex: "",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={combineClasses(
					"min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
					inter.variable
				)}
			>
				<ThemeProvider attribute="class" defaultTheme="dark">
					<TooltipProvider delayDuration={0}>
						{children}
						<Navbar />
					</TooltipProvider>
					<GridPattern
						squares={[
							[4, 4],
							[5, 1],
							[8, 2],
							[5, 3],
							[5, 5],
							[10, 10],
							[15, 17],
							[12, 17],
							[10, 15],
							[15, 12],
							[12, 15],
							[15, 10],
						]}
						className={combineClasses(
							"[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]",
							"fixed inset-0 z-0 h-[15%] w-full skew-y-12"
						)}
					/>
					<GridPattern
						squares={[
							[8, 8],
							[10, 2],
							[16, 4],
							[10, 6],
							[10, 10],
							[20, 20],
							[30, 34],
							[24, 34],
							[20, 30],
							[30, 24],
							[24, 30],
							[30, 20],
						]}
						className={combineClasses(
							"[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
							"fixed inset-0 z-0 h-[210%] w-full skew-y-12"
						)}
					/>
				</ThemeProvider>
			</body>
		</html>
	);
}
