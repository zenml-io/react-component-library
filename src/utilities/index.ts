import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
	extend: {
		classGroups: {
			"font-size": [
				"text-text-xs",
				"text-text-sm",
				"text-text-md",
				"text-text-lg",
				"text-text-xl",
				"text-display-xs",
				"text-display-sm",
				"text-display-md",
				"text-display-lg",
				"text-display-xl"
			]
		}
	}
});

/**
 * Merges tailwind utilities, and allows the usage of the clsx syntax in addition
 * @param inputs list of class names
 * @returns
 */
export function cn(...inputs: ClassValue[]) {
	return customTwMerge(clsx(inputs));
}
