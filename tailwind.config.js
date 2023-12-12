import { createTailwindMerge } from "tailwind-merge";
import { zenmlPreset } from "./src/index";

export default {
	presets: [zenmlPreset, createTailwindMerge],
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {}
	},
	plugins: []
};
