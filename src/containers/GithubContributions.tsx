"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { type FC, useEffect, useState } from "react";

import { Icons } from "@/components/icons/Icons";
import {
	DARK_PALETTE,
	DARK_STROKE,
	LIGHT_PALETTE,
	LIGHT_STROKE,
	TILE_HALF_WIDTH,
	TILE_QUARTER_HEIGHT,
	WALL_HEIGHTS,
} from "@/constants/github";
import type { ContributionData } from "@/data/github";
import { getCurrentYear } from "@/utils/date";
import { fetchContributions, groupIntoWeeks } from "@/utils/github";

const GitHubContributions: FC = () => {
	const { theme } = useTheme();
	const year = getCurrentYear();
	const [mounted, setMounted] = useState(false);
	const [data, setData] = useState<ContributionData | null>(null);

	useEffect(() => {
		setMounted(true);
		fetchContributions("tejastn10", year)
			.then(setData)
			.catch(() => {});
	}, [year]);

	if (!mounted || !data) return null;

	const isDark = theme === "dark";
	const palette = isDark ? DARK_PALETTE : LIGHT_PALETTE;
	const weekColumns = groupIntoWeeks(data.contributions);
	const cols = weekColumns.length;
	const rows = 7;

	const PAD = 20;
	const TW = TILE_HALF_WIDTH;
	const TH = TILE_QUARTER_HEIGHT;
	const originX = rows * TW + PAD;
	const originY = PAD + WALL_HEIGHTS[4] + TH;
	const svgW = (cols + rows) * TW + PAD * 2;
	const svgH = originY + (cols + rows - 1) * TH + PAD;

	const tiles = weekColumns
		.flatMap((week, col) => week.map((c, row) => ({ col, row, c })))
		.sort((a, b) => a.col + a.row - (b.col + b.row));

	const total = data.total[year] ?? 0;
	const stroke = isDark ? DARK_STROKE : LIGHT_STROKE;

	return (
		<div className="border border-border bg-card p-6 space-y-4">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					{Icons.github()}
					<h3 className="font-mono text-sm font-semibold tracking-wide">Contribution Graph</h3>
				</div>
				<Link
					href="https://github.com/tejastn10"
					target="_blank"
					rel="noopener noreferrer"
					className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
				>
					View Profile →
				</Link>
			</div>

			<div className="w-full overflow-x-auto">
				<svg
					viewBox={`0 0 ${svgW} ${svgH}`}
					width="100%"
					xmlns="http://www.w3.org/2000/svg"
					aria-label={`${total} contributions in ${year}`}
				>
					<g textAnchor="end" fontFamily="var(--font-geist-mono), monospace" fill={palette[4][0]}>
						<text x={svgW - PAD} y={70} fontSize={36} fontWeight="700" opacity={0.5}>
							{total.toLocaleString()}
						</text>
						<text
							x={svgW - PAD}
							y={86}
							fontSize={8}
							fontWeight="500"
							opacity={0.4}
							letterSpacing={3}
						>
							{`CONTRIBUTIONS · ${year}`}
						</text>
					</g>

					{tiles.map(({ col, row, c }) => {
						const gx = originX + (col - row) * TW;
						const gy = originY + (col + row) * TH;
						const wh = WALL_HEIGHTS[c.level];
						const ty = gy - wh;
						const [topC, rightC, leftC] = palette[c.level];

						const topFace = `${gx},${ty - TH} ${gx + TW},${ty} ${gx},${ty + TH} ${gx - TW},${ty}`;
						const rightWall = `${gx},${ty + TH} ${gx + TW},${ty} ${gx + TW},${gy} ${gx},${gy + TH}`;
						const leftWall = `${gx - TW},${ty} ${gx},${ty + TH} ${gx},${gy + TH} ${gx - TW},${gy}`;

						return (
							<g key={`${col}-${row}`}>
								{wh > 0 && (
									<>
										<polygon points={leftWall} fill={leftC} stroke={stroke} strokeWidth="0.2" />
										<polygon points={rightWall} fill={rightC} stroke={stroke} strokeWidth="0.2" />
									</>
								)}
								<polygon points={topFace} fill={topC} stroke={stroke} strokeWidth="0.2" />
							</g>
						);
					})}
				</svg>
			</div>

			<div className="flex items-center gap-2">
				<span className="font-mono text-xs text-muted-foreground">Less</span>
				<div className="flex items-center gap-0.5">
					{([0, 1, 2, 3, 4] as const).map((level) => (
						<span
							key={level}
							style={{ backgroundColor: palette[level][0] }}
							className="block w-2.5 h-2.5"
						/>
					))}
				</div>
				<span className="font-mono text-xs text-muted-foreground">More</span>
			</div>
		</div>
	);
};

export { GitHubContributions };
