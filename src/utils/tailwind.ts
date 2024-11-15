import { type ClassValue, clsx } from "clsx";

import { twMerge } from "tailwind-merge";

const combineClasses = (...inputs: ClassValue[]): string => {
	return twMerge(clsx(inputs));
};

export { combineClasses };
