import { FC } from "react";

type RoleCardProps = {
	title: string;
	dates?: string;
	description: readonly string[];
};

const RoleCard: FC<RoleCardProps> = ({ title, dates, description }) => {
	return (
		<li className="relative ml-8 py-4">
			<div className="flex flex-1 flex-col justify-start gap-1 pb-2">
				<h2 className="font-semibold leading-none cursor-pointer">{title}</h2>
				{dates && <time className="text-xs text-muted-foreground">{dates}</time>}
			</div>

			<ul className="mb-4 ml-4 border-l">
				{description.map((task, index) => (
					<li className="relative ml-5 py-2 text-xs" key={index}>
						{task}
					</li>
				))}
			</ul>
		</li>
	);
};

export { RoleCard };
