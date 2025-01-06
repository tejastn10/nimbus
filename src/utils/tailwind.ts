import { type ClassValue, clsx } from "clsx";

import { twMerge } from "tailwind-merge";

const cx = (...inputs: ClassValue[]): string => {
	return twMerge(clsx(inputs));
};

export { cx };
