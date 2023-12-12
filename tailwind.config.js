import { zenmlPreset } from "./src/index";

export default {
	presets: [zenmlPreset],
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {}
	},
	plugins: []
};
