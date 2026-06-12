import type { Contribution, ContributionData } from "@/data/github";

const fetchContributions = async (username: string, year: number): Promise<ContributionData> => {
	const res = await fetch(
		`https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`,
	);
	if (!res.ok) throw new Error("fetch failed");
	return res.json() as Promise<ContributionData>;
};

const groupIntoWeeks = (contributions: Contribution[]): Contribution[][] => {
	const result: Contribution[][] = [];
	for (let i = 0; i < contributions.length; i += 7) {
		result.push(contributions.slice(i, i + 7));
	}
	return result;
};

export { fetchContributions, groupIntoWeeks };
