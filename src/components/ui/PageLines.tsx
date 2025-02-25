import { FC } from "react";

const PageLines: FC = () => {
	return (
		<div>
			<div className="fixed left-12 bottom-0 hidden md:block">
				<div className="flex flex-col items-center gap-6 after:h-48 after:w-px after:bg-gradient-to-b after:from-[#000000] dark:after:from-[#ffffff] after:to-transparent after:block after:animate-glow" />
			</div>

			<div className="fixed right-12 top-0 hidden md:block">
				<div className="flex flex-col items-center gap-6 after:h-48 after:w-px after:bg-gradient-to-t after:from-[#000000] dark:after:from-[#ffffff] after:to-transparent after:block after:animate-glow" />
			</div>

			<div className="fixed top-12 right-0 hidden md:block">
				<div className="flex flex-row items-center gap-6 after:w-32 after:h-px after:bg-gradient-to-r after:from-[#000000] dark:after:from-[#ffffff] after:to-transparent after:block after:animate-glow" />
			</div>

			<div className="fixed bottom-12 left-0 hidden md:block">
				<div className="flex flex-row items-center gap-6 after:w-32 after:h-px after:bg-gradient-to-l after:from-[#000000] dark:after:from-[#ffffff] after:to-transparent after:block after:animate-glow" />
			</div>
		</div>
	);
};

export { PageLines };
