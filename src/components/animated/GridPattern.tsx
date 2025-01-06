import { FC, useId } from "react";

import { cx } from "@/utils/tailwind";

type GridPatternProps = {
	x?: number;
	y?: number;
	width?: number;
	height?: number;
	className?: string;
	strokeDasharray?: string;
	[key: string]: unknown;
	squares?: Array<[x: number, y: number]>;
};

const GridPattern: FC<GridPatternProps> = ({
	x = -1,
	y = -1,
	squares,
	className,
	width = 40,
	height = 40,
	strokeDasharray = "0",
	...props
}: GridPatternProps) => {
	const id = useId();

	return (
		<svg
			aria-hidden="true"
			className={cx(
				"pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
				className
			)}
			{...props}
		>
			<defs>
				<pattern id={id} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
					<path d={`M.5 ${height}V.5H${width}`} fill="none" strokeDasharray={strokeDasharray} />
				</pattern>
			</defs>
			<rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
			{squares && (
				<svg x={x} y={y} className="overflow-visible">
					{squares.map(([x, y]) => (
						<rect
							strokeWidth="0"
							key={`${x}-${y}`}
							width={width - 1}
							height={height - 1}
							x={x * width + 1}
							y={y * height + 1}
						/>
					))}
				</svg>
			)}
		</svg>
	);
};

export { GridPattern };
