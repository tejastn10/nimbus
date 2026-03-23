import type { FC } from "react";

const PageLines: FC = () => {
	return (
		<div aria-hidden="true">
			{/* Left edge — bottom-anchored vertical line */}
			<div className="fixed left-8 bottom-0 hidden md:block">
				<div className="flex flex-col items-center after:h-40 after:w-px after:bg-gradient-to-b after:from-foreground/20 after:to-transparent after:block after:animate-glow" />
			</div>

			{/* Right edge — top-anchored vertical line */}
			<div className="fixed right-8 top-0 hidden md:block">
				<div className="flex flex-col items-center after:h-40 after:w-px after:bg-gradient-to-t after:from-foreground/20 after:to-transparent after:block after:animate-glow" />
			</div>

			{/* Top-right — horizontal line */}
			<div className="fixed top-8 right-0 hidden md:block">
				<div className="flex flex-row items-center after:w-24 after:h-px after:bg-gradient-to-r after:from-foreground/20 after:to-transparent after:block after:animate-glow" />
			</div>

			{/* Bottom-left — horizontal line */}
			<div className="fixed bottom-8 left-0 hidden md:block">
				<div className="flex flex-row items-center after:w-24 after:h-px after:bg-gradient-to-l after:from-foreground/20 after:to-transparent after:block after:animate-glow" />
			</div>
		</div>
	);
};

export { PageLines };
