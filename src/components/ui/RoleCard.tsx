import type { FC } from "react";

type RoleCardProps = {
	title: string;
	dates?: string;
	description: readonly string[];
};

const RoleCard: FC<RoleCardProps> = ({ title, dates, description }) => {
	return (
		<div className="py-5 first:pt-2 last:pb-2 border-b border-border/50 last:border-0">
			<div className="flex items-baseline justify-between gap-2 flex-wrap mb-4">
				<h4 className="text-sm font-semibold tracking-tight">{title}</h4>
				{dates && (
					<time className="text-[11px] font-mono text-muted-foreground shrink-0 tabular-nums">
						{dates}
					</time>
				)}
			</div>

			<ul className="space-y-3">
				{description.map((task, index) => (
					<li
						key={index + task}
						className="grid grid-cols-[12px_1fr] gap-2 text-sm text-muted-foreground leading-relaxed"
					>
						<span className="mt-[5px] size-1.5 rounded-none bg-muted-foreground/30 shrink-0 justify-self-center" />
						<span>{task}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export { RoleCard };
