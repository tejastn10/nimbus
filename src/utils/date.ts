const formatDate = (date: string, onlyDate?: boolean): string => {
	// ! Return error if the date is invalid
	if (!date) {
		return "Invalid date";
	}

	// ? Try to create a valid date
	const targetDate = new Date(date);
	// ? Check for invalid date
	if (isNaN(targetDate.getTime())) {
		return "Invalid date";
	}

	const currentDate = new Date();
	const timeDifference = Math.abs(currentDate.getTime() - targetDate.getTime());
	const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

	// ? Get the full date in a readable format
	const fullDate = new Intl.DateTimeFormat("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	}).format(targetDate);

	// ? Return only the date if the onlyDate flag is set
	if (onlyDate) {
		return fullDate;
	}

	// * Determine the appropriate label based on the difference in time
	if (daysAgo < 1) {
		return "Today";
	} else if (daysAgo < 7) {
		return `${fullDate} (${daysAgo}d ago)`;
	} else if (daysAgo < 30) {
		const weeksAgo = Math.floor(daysAgo / 7);
		return `${fullDate} (${weeksAgo}w ago)`;
	} else if (daysAgo < 365) {
		const monthsAgo = Math.floor(daysAgo / 30);
		return `${fullDate} (${monthsAgo}mo ago)`;
	} else {
		const yearsAgo = Math.floor(daysAgo / 365);
		return `${fullDate} (${yearsAgo}y ago)`;
	}
};

export { formatDate };
