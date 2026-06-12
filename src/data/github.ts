type Contribution = {
	date: string;
	count: number;
	level: 0 | 1 | 2 | 3 | 4;
};

type ContributionData = {
	contributions: Contribution[];
	total: Record<string, number>;
};

export type { Contribution, ContributionData };
