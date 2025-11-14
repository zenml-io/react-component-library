import { zenmlPreset } from "./src/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
	presets: [zenmlPreset],
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {}
	},
	 
	plugins: [require("tailwindcss-animate")]
};
