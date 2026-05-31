"use client";

import { motion } from "motion/react";

const GOAL = 30;
const TOTAL_BLOCKS = 24;

type XPRowProps = { year: number; count: number; rowDelay: number };

const XPRow = ({ year, count, rowDelay }: XPRowProps) => {
	const filled = Math.min(Math.round((count / GOAL) * TOTAL_BLOCKS), TOTAL_BLOCKS);
	const complete = count >= GOAL;

	const status = complete
		? "✦ complete"
		: count >= GOAL * 0.7
			? "almost there"
			: count >= GOAL * 0.4
				? "halfway"
				: "in progress";

	return (
		<div className="flex items-center gap-3 flex-wrap">
			<span className="text-muted-foreground tabular-nums text-sm w-10 shrink-0">{year}</span>
			<motion.div
				className="flex gap-px"
				initial="hidden"
				animate="visible"
				variants={{ visible: { transition: { staggerChildren: 0.03, delayChildren: rowDelay } } }}
			>
				{Array.from({ length: TOTAL_BLOCKS }).map((_, i) => (
					<motion.div
						key={i}
						className={`w-2.5 h-5 ${i < filled ? "bg-foreground" : "bg-foreground/10"}`}
						variants={{
							hidden: { scaleY: 0, opacity: 0 },
							visible: { scaleY: 1, opacity: 1 },
						}}
						style={{ originY: 1 }}
						transition={{ duration: 0.15 }}
					/>
				))}
			</motion.div>
			<div className="flex gap-2 items-baseline">
				<span className="tabular-nums text-sm font-bold">
					{complete ? count : `${count} / ${GOAL}`}
				</span>
				<span className="text-muted-foreground text-xs">{status}</span>
			</div>
		</div>
	);
};

type ReadingXPProps = {
	lastYear: number;
	lastYearCount: number;
	currentYear: number;
	currentYearCount: number;
};

export const ReadingXP = ({
	lastYear,
	lastYearCount,
	currentYear,
	currentYearCount,
}: ReadingXPProps) => (
	<div className="space-y-3">
		<XPRow year={currentYear} count={currentYearCount} rowDelay={0} />
		<XPRow year={lastYear} count={lastYearCount} rowDelay={0.4} />
	</div>
);
