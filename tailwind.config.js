import { zenmlPreset } from "./src/index";

/** @type {import('tailwindcss').Config} */
export default {
	presets: [zenmlPreset],
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {}
	},
	plugins: []
};
