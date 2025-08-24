import "./globals.css";

import type { Metadata } from "next";

import { Outfit } from "next/font/google";
import { Cursor } from "@/components/animated/Cursor";
import { GridPattern } from "@/components/animated/GridPattern";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { PageLines } from "@/components/ui/PageLines";
import { TooltipProvider } from "@/components/ui/Tooltip";
import { Navbar } from "@/containers/Navbar";

import { DATA } from "@/data/resume";

import { cx } from "@/utils/tailwind";

const outfit = Outfit({
	subsets: ["latin"],
	variable: "--font-outfit",
	display: "swap",
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
		site: DATA.contact.social.Twitter.url,
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
		<html lang="en" suppressHydrationWarning className={outfit.variable}>
			<body
				className={cx(
					"min-h-screen bg-background font-outfit antialiased max-w-4xl mx-auto py-12 sm:py-24 px-6",
					outfit.variable
				)}
			>
				<Cursor />
				<ThemeProvider attribute="class" defaultTheme="dark">
					<TooltipProvider delayDuration={0}>
						{children}
						<Navbar />
					</TooltipProvider>
					<GridPattern
						squares={[
							[2, 3],
							[3, 5],
							[5, 2],
							[6, 4],
							[4, 7],
						]}
						className={cx(
							"[mask-image:radial-gradient(400px_circle_at_top_left,white,transparent)]",
							"fixed inset-0 z-0 h-[105%] w-full -skew-y-12 -top-50"
						)}
					/>
					<GridPattern
						squares={[
							[30, 24],
							[32, 26],
							[35, 30],
							[38, 32],
							[40, 28],
							[42, 34],
							[45, 36],
							[47, 38],

							[45, 29],
							[46, 30],
							[48, 31],
							[49, 32],
							[47, 33],
							[46, 34],
							[48, 29],
						]}
						className={cx(
							"[mask-image:radial-gradient(400px_circle_at_bottom_right,white,transparent)]",
							"fixed inset-0 z-0 h-[120%] w-full -skew-y-12 top-auto -bottom-50"
						)}
					/>
					<PageLines />
				</ThemeProvider>
			</body>
		</html>
	);
}
