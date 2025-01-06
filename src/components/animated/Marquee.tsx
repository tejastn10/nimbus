import { FC } from "react";

import { cx } from "@/utils/tailwind";

type MarqueeProps = {
	repeat?: number;
	reverse?: boolean;
	className?: string;
	vertical?: boolean;
	pauseOnHover?: boolean;
	children?: React.ReactNode;
};

const Marquee: FC<MarqueeProps> = ({
	reverse,
	children,
	className,
	repeat = 4,
	vertical = false,
	pauseOnHover = false,
	...props
}) => {
	return (
		<div
			{...props}
			className={cx(
				"group flex overflow-hidden p-1 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
				{
					"flex-row": !vertical,
					"flex-col": vertical,
				},
				className
			)}
		>
			{Array(repeat)
				.fill(0)
				.map((_, i) => (
					<div
						key={i}
						className={cx("flex shrink-0 justify-around [gap:var(--gap)]", {
							"animate-marquee flex-row": !vertical,
							"animate-marquee-vertical flex-col": vertical,
							"group-hover:[animation-play-state:paused]": pauseOnHover,
							"[animation-direction:reverse]": reverse,
						})}
					>
						{children}
					</div>
				))}
		</div>
	);
};

export { Marquee };
