import type { ReactNode } from "react";

export default function BooksLayout({ children }: { children: ReactNode }) {
	return (
		<div className="book-theme text-foreground bg-background" style={{ minHeight: "100vh" }}>
			{/* Full-bleed paper background, covers area outside constrained body column */}
			<div className="fixed inset-0 -z-10" style={{ backgroundColor: "hsl(38, 28%, 92%)" }} />
			{children}
		</div>
	);
}
