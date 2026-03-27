import "./globals.css";

import { GeistPixelSquare } from "geist/font/pixel";
import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { PageLines } from "@/components/ui/PageLines";
import { TooltipProvider } from "@/components/ui/Tooltip";
import { TopNavbar } from "@/containers/TopNavbar";

import { DATA } from "@/data/resume";

import { cx } from "@/utils/tailwind";

const geistMono = Geist_Mono({
	subsets: ["latin"],
	variable: "--font-geist-mono",
	display: "swap",
});

const geistPixel = GeistPixelSquare;

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
		site: DATA.contact.social.X.url,
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
		<html
			lang="en"
			suppressHydrationWarning
			className={cx(geistMono.variable, geistPixel.variable)}
		>
			<body
				className={cx(
					"min-h-screen bg-background font-mono antialiased max-w-4xl mx-auto py-12 sm:py-24 px-6",
					geistMono.variable
				)}
			>
				<div className="fixed inset-0 -z-10 overflow-hidden"></div>
				<ThemeProvider attribute="class" defaultTheme="dark">
					<TooltipProvider delayDuration={0}>
						<TopNavbar />
						{children}
					</TooltipProvider>

					<PageLines />
				</ThemeProvider>
			</body>
		</html>
	);
}
