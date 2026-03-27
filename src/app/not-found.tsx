import Link from "next/link";
import type { FC } from "react";
import { Icons } from "@/components/icons/Icons";

const NotFound: FC = () => {
	return (
		<div className="min-h-[80vh] flex flex-col items-center justify-center text-center gap-0">
			<span className="section-label">[ 404 ]</span>

			<h1 className="text-8xl font-bold tracking-tighter mb-4">not found.</h1>

			<p className="text-sm text-muted-foreground font-mono mb-10 max-w-sm leading-relaxed">
				the page you're looking for doesn't exist or has been moved.
			</p>

			<div className="flex flex-col items-center gap-3">
				<Link
					href="/"
					className="inline-flex items-center gap-2 border border-border px-4 py-2 text-xs font-mono tracking-wide uppercase text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors duration-200"
				>
					{Icons.home()}
					go home
				</Link>

				<p className="text-[10px] font-mono text-muted-foreground/40 mt-6">
					psst —{" "}
					<Link
						href="/books"
						className="underline underline-offset-2 decoration-border hover:text-muted-foreground hover:decoration-foreground/30 transition-colors duration-200"
					>
						there's a hidden page
					</Link>{" "}
					you might like.
				</p>
			</div>
		</div>
	);
};

export default NotFound;
