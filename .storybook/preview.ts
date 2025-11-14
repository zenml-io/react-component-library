import type { Preview, ReactRenderer } from "@storybook/react-vite";
import { withThemeByClassName } from "@storybook/addon-themes";

/* TODO: update import to your tailwind styles file. If you're using Angular, inject this through your angular.json config instead */
import "../src/index.css";

const preview: Preview = {
	parameters: {
		backgrounds: {
			options: {
				light: { name: "Light", value: "#F9FAFB" },
				dark: { name: "Dark", value: "#1F2937" }
			}
		},
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/
			}
		}
	},
	initialGlobals: {
		backgrounds: { value: "light" }
	},

	decorators: [
		// Adds theme switching support.
		// NOTE: requires setting "darkMode" to "class" in your tailwind config
		withThemeByClassName<ReactRenderer>({
			themes: {
				light: "light",
				dark: "dark"
			},
			defaultTheme: "light"
		})
	]
};

export default preview;
