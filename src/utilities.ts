import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges tailwind utilities, and allows the usage of the clsx syntax in addition
 * @param inputs list of class names
 * @returns
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
