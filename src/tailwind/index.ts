import plugin from "tailwindcss/plugin";
import { Config } from "tailwindcss";

/**
 * Tailwind Plugin that contains the tailwind setup for the ZenML design system
 */
export const zenmlPlugin = plugin(
	function ({ addBase }) {
		addBase({
			":root": {
				"--color-primary-900": "258 66% 7%",
				"--color-primary-800": "259 66% 14%",
				"--color-primary-700": "259 68% 21%",
				"--color-primary-600": "260 67% 28%",
				"--color-primary-500": "259 67% 35%",
				"--color-primary-400": "260 89% 60%",
				"--color-primary-300": "260 89% 68%",
				"--color-primary-200": "260 89% 76%",
				"--color-primary-100": "260 90% 84%",
				"--color-primary-050": "259 90% 92%",
				"--color-primary-025": "259 90% 96%",
				"--color-neutral-900": "221 39% 11%",
				"--color-neutral-800": "215 28% 17%",
				"--color-neutral-700": "217 19% 27%",
				"--color-neutral-600": "215 14% 34%",
				"--color-neutral-500": "220 9% 46%",
				"--color-neutral-400": "218 11% 65%",
				"--color-neutral-300": "216 12% 84%",
				"--color-neutral-200": "220 13% 91%",
				"--color-neutral-100": "220 14% 96%",
				"--color-neutral-050": "210 20% 98%",
				"--color-neutral-000": "0 0% 100%",
				"--color-error-900": "4 59% 19%",
				"--color-error-800": "3 58% 29%",
				"--color-error-700": "4 59% 39%",
				"--color-error-600": "4 59% 48%",
				"--color-error-500": "4 81% 58%",
				"--color-error-400": "4 81% 65%",
				"--color-error-300": "4 82% 72%",
				"--color-error-200": "3 81% 79%",
				"--color-error-100": "4 81% 86%",
				"--color-error-050": "3 81% 92%",
				"--color-warning-900": "32 93% 17%",
				"--color-warning-800": "33 92% 25%",
				"--color-warning-700": "32 92% 34%",
				"--color-warning-600": "33 93% 42%",
				"--color-warning-500": "32 95% 51%",
				"--color-warning-400": "32 95% 59%",
				"--color-warning-300": "32 95% 67%",
				"--color-warning-200": "33 95% 75%",
				"--color-warning-100": "32 95% 84%",
				"--color-warning-050": "33 96% 90%",
				"--color-success-900": "137 75% 14%",
				"--color-success-800": "137 75% 22%",
				"--color-success-700": "137 74% 29%",
				"--color-success-600": "137 75% 36%",
				"--color-success-500": "137 74% 43%",
				"--color-success-400": "137 56% 53%",
				"--color-success-300": "137 56% 62%",
				"--color-success-200": "137 56% 71%",
				"--color-success-100": "137 57% 81%",
				"--color-success-050": "137 55% 89%",
				"--color-blue-900": "208 88% 10%",
				"--color-blue-800": "209 88% 17%",
				"--color-blue-700": "208 89% 25%",
				"--color-blue-600": "208 89% 33%",
				"--color-blue-500": "209 89% 42%",
				"--color-blue-400": "209 90% 50%",
				"--color-blue-300": "209 90% 58%",
				"--color-blue-200": "208 89% 67%",
				"--color-blue-100": "208 89% 75%",
				"--color-blue-050": "209 90% 84%",
				"--color-blue-025": "208 88% 90%",
				"--color-teal-900": "180 61% 8%",
				"--color-teal-800": "180 59% 14%",
				"--color-teal-700": "180 60% 20%",
				"--color-teal-600": "180 61% 27%",
				"--color-teal-500": "180 60% 34%",
				"--color-teal-400": "180 60% 41%",
				"--color-teal-300": "180 41% 51%",
				"--color-teal-200": "180 42% 60%",
				"--color-teal-100": "180 41% 70%",
				"--color-teal-050": "180 41% 80%",
				"--color-teal-025": "180 41% 88%",
				"--color-turquoise-900": "192 57% 9%",
				"--color-turquoise-800": "190 57% 15%",
				"--color-turquoise-700": "189 58% 22%",
				"--color-turquoise-600": "190 58% 30%",
				"--color-turquoise-500": "189 57% 37%",
				"--color-turquoise-400": "190 58% 44%",
				"--color-turquoise-300": "190 46% 54%",
				"--color-turquoise-200": "190 46% 63%",
				"--color-turquoise-100": "189 45% 72%",
				"--color-turquoise-050": "190 45% 81%",
				"--color-turquoise-025": "192 46% 89%",
				"--color-lime-900": "96 60% 11%",
				"--color-lime-800": "96 61% 18%",
				"--color-lime-700": "96 60% 27%",
				"--color-lime-600": "96 60% 36%",
				"--color-lime-500": "96 60% 45%",
				"--color-lime-400": "96 72% 54%",
				"--color-lime-300": "96 71% 62%",
				"--color-lime-200": "96 72% 70%",
				"--color-lime-100": "96 71% 77%",
				"--color-lime-050": "96 72% 85%",
				"--color-lime-025": "96 70% 91%",
				"--color-magenta-900": "337 61% 12%",
				"--color-magenta-800": "338 61% 20%",
				"--color-magenta-700": "338 60% 30%",
				"--color-magenta-600": "338 60% 40%",
				"--color-magenta-500": "338 60% 50%",
				"--color-magenta-400": "338 90% 60%",
				"--color-magenta-300": "338 91% 67%",
				"--color-magenta-200": "338 90% 73%",
				"--color-magenta-100": "338 90% 80%",
				"--color-magenta-050": "338 91% 87%",
				"--color-magenta-025": "337 90% 92%",
				"--color-text-primary": "var(--color-primary-900)",
				"--color-text-secondary": "var(--color-neutral-500)",
				"--color-text-tertiary": "var(--color-neutral-400)",
				"--color-text-negative": "var(--color-neutral-000)",
				"--color-text-brand": "var(--color-primary-500)",
				"--color-text-error": "var(--color-error-500)",
				"--color-text-warning": "var(--color-warning-500)",
				"--color-text-success": "var(--color-success-500)",
				"--color-surface-primary": "var(--color-neutral-000)",
				"--color-surface-secondary": "var(--color-neutral-050)",
				"--color-surface-tertiary": "var(--color-neutral-100)",
				"--color-surface-strong": "var(--color-primary-400)",
				"--color-border-minimal": "var(--color-neutral-100)",
				"--color-border-moderate": "var(--color-neutral-200)",
				"--color-border-bold": "var(--color-neutral-500)"
			}
		});
	},
	{
		theme: {
			borderRadius: {
				sharp: "0px",
				sm: "0.25rem/* 4px */",
				md: "0.5rem/* 8px */",
				rounded: "9999px"
			},
			spacing: {
				0: "0rem/* 0px */",
				0.25: "0.125rem/* 2px */",
				0.5: "0.25rem/* 4px */",
				1: "0.5rem/* 8px */",
				2: "0.75rem/* 12px */",
				3: "1rem/* 16px */",
				4: "1.25rem/* 20px */",
				5: "1.5rem/* 24px */",
				6: "2rem/* 32px */",
				7: "2.5rem/* 40px */",
				8: "3rem/* 48px */",
				9: "4rem/* 64px */",
				10: "4.5rem/* 72px */",
				11: "5rem/* 80px */",
				12: "6rem/* 96px */"
			},
			fontSize: {
				"text-xs": ["0.75rem/* 12px */", "1.125rem"],
				"text-sm": ["0.875rem/* 14px */", "1.25rem"],
				"text-md": ["1rem/* 16px */", "1.5rem"],
				"text-lg": ["1.125rem/* 18px */", "1.75rem"],
				"text-xl": ["1.25rem/* 20px */", "1.875rem"],
				"display-xs": ["1.5rem/* 24px */", "2rem"],
				"display-sm": ["1.875rem/* 30px */", "2.375rem"],
				"display-md": [
					"2.25rem /* 36px */",
					{
						letterSpacing: "-0.045rem",
						lineHeight: "2.75rem"
					}
				],
				"display-lg": [
					"3rem/* 48px */",
					{
						letterSpacing: "-0.06rem",
						lineHeight: "3.75rem"
					}
				],
				"display-xl": ["3.75rem/* 60px */", "4.5rem"]
			},
			extend: {
				colors: {
					theme: {
						text: {
							primary: "hsl(var(--color-text-primary) / <alpha-value>)",
							secondary: "hsl(var(--color-text-secondary) / <alpha-value>)",
							tertiary: "hsl(var(--color-text-tertiary) / <alpha-value>)",
							negative: "hsl(var(--color-text-negative) / <alpha-value>)",
							brand: "hsl(var(--color-text-brand) / <alpha-value>)",
							error: "hsl(var(--color-text-error) / <alpha-value>)",
							warning: "hsl(var(--color-text-warning) / <alpha-value>)",
							success: "hsl(var(--color-text-success) / <alpha-value>)"
						},
						surface: {
							primary: "hsl(var(--color-surface-primary) / <alpha-value>)",
							secondary: "hsl(var(--color-surface-secondary) / <alpha-value>)",
							tertiary: "hsl(var(--color-surface-tertiary) / <alpha-value>)",
							strong: "hsl(var(--color-surface-strong) / <alpha-value>)"
						},
						border: {
							minimal: "hsl(var(--color-border-minimal) / <alpha-value>)",
							moderate: "hsl(var(--color-border-moderate) / <alpha-value>)",
							bold: "hsl(var(--color-border-bold) / <alpha-value>)"
						}
					},
					primary: {
						900: "hsl(var(--color-primary-900) / <alpha-value>)",
						800: "hsl(var(--color-primary-800) / <alpha-value>)",
						700: "hsl(var(--color-primary-700) / <alpha-value>)",
						600: "hsl(var(--color-primary-600) / <alpha-value>)",
						500: "hsl(var(--color-primary-500) / <alpha-value>)",
						400: "hsl(var(--color-primary-400) / <alpha-value>)",
						300: "hsl(var(--color-primary-300) / <alpha-value>)",
						200: "hsl(var(--color-primary-200) / <alpha-value>)",
						100: "hsl(var(--color-primary-100) / <alpha-value>)",
						50: "hsl(var(--color-primary-050) / <alpha-value>)",
						25: "hsl(var(--color-primary-025) / <alpha-value>)"
					},
					neutral: {
						900: "hsl(var(--color-neutral-900) / <alpha-value>)",
						800: "hsl(var(--color-neutral-800) / <alpha-value>)",
						700: "hsl(var(--color-neutral-700) / <alpha-value>)",
						600: "hsl(var(--color-neutral-600) / <alpha-value>)",
						500: "hsl(var(--color-neutral-500) / <alpha-value>)",
						400: "hsl(var(--color-neutral-400) / <alpha-value>)",
						300: "hsl(var(--color-neutral-300) / <alpha-value>)",
						200: "hsl(var(--color-neutral-200) / <alpha-value>)",
						100: "hsl(var(--color-neutral-100) / <alpha-value>)",
						50: "hsl(var(--color-neutral-050) / <alpha-value>)"
					},
					error: {
						900: "hsl(var(--color-error-900) / <alpha-value>)",
						800: "hsl(var(--color-error-800) / <alpha-value>)",
						700: "hsl(var(--color-error-700) / <alpha-value>)",
						600: "hsl(var(--color-error-600) / <alpha-value>)",
						500: "hsl(var(--color-error-500) / <alpha-value>)",
						400: "hsl(var(--color-error-400) / <alpha-value>)",
						300: "hsl(var(--color-error-300) / <alpha-value>)",
						200: "hsl(var(--color-error-200) / <alpha-value>)",
						100: "hsl(var(--color-error-100) / <alpha-value>)",
						50: "hsl(var(--color-error-050) / <alpha-value>)"
					},
					warning: {
						900: "hsl(var(--color-warning-900) / <alpha-value>)",
						800: "hsl(var(--color-warning-800) / <alpha-value>)",
						700: "hsl(var(--color-warning-700) / <alpha-value>)",
						600: "hsl(var(--color-warning-600) / <alpha-value>)",
						500: "hsl(var(--color-warning-500) / <alpha-value>)",
						400: "hsl(var(--color-warning-400) / <alpha-value>)",
						300: "hsl(var(--color-warning-300) / <alpha-value>)",
						200: "hsl(var(--color-warning-200) / <alpha-value>)",
						100: "hsl(var(--color-warning-100) / <alpha-value>)",
						50: "hsl(var(--color-warning-050) / <alpha-value>)"
					},
					success: {
						900: "hsl(var(--color-success-900) / <alpha-value>)",
						800: "hsl(var(--color-success-800) / <alpha-value>)",
						700: "hsl(var(--color-success-700) / <alpha-value>)",
						600: "hsl(var(--color-success-600) / <alpha-value>)",
						500: "hsl(var(--color-success-500) / <alpha-value>)",
						400: "hsl(var(--color-success-400) / <alpha-value>)",
						300: "hsl(var(--color-success-300) / <alpha-value>)",
						200: "hsl(var(--color-success-200) / <alpha-value>)",
						100: "hsl(var(--color-success-100) / <alpha-value>)",
						50: "hsl(var(--color-success-050) / <alpha-value>)"
					},
					blue: {
						900: "hsl(var(--color-blue-900) / <alpha-value>)",
						800: "hsl(var(--color-blue-800) / <alpha-value>)",
						700: "hsl(var(--color-blue-700) / <alpha-value>)",
						600: "hsl(var(--color-blue-600) / <alpha-value>)",
						500: "hsl(var(--color-blue-500) / <alpha-value>)",
						400: "hsl(var(--color-blue-400) / <alpha-value>)",
						300: "hsl(var(--color-blue-300) / <alpha-value>)",
						200: "hsl(var(--color-blue-200) / <alpha-value>)",
						100: "hsl(var(--color-blue-100) / <alpha-value>)",
						50: "hsl(var(--color-blue-050) / <alpha-value>)",
						25: "hsl(var(--color-blue-025) / <alpha-value>)"
					},
					teal: {
						900: "hsl(var(--color-teal-900) / <alpha-value>)",
						800: "hsl(var(--color-teal-800) / <alpha-value>)",
						700: "hsl(var(--color-teal-700) / <alpha-value>)",
						600: "hsl(var(--color-teal-600) / <alpha-value>)",
						500: "hsl(var(--color-teal-500) / <alpha-value>)",
						400: "hsl(var(--color-teal-400) / <alpha-value>)",
						300: "hsl(var(--color-teal-300) / <alpha-value>)",
						200: "hsl(var(--color-teal-200) / <alpha-value>)",
						100: "hsl(var(--color-teal-100) / <alpha-value>)",
						50: "hsl(var(--color-teal-050) / <alpha-value>)",
						25: "hsl(var(--color-teal-025) / <alpha-value>)"
					},
					turquoise: {
						900: "hsl(var(--color-turquoise-900) / <alpha-value>)",
						800: "hsl(var(--color-turquoise-800) / <alpha-value>)",
						700: "hsl(var(--color-turquoise-700) / <alpha-value>)",
						600: "hsl(var(--color-turquoise-600) / <alpha-value>)",
						500: "hsl(var(--color-turquoise-500) / <alpha-value>)",
						400: "hsl(var(--color-turquoise-400) / <alpha-value>)",
						300: "hsl(var(--color-turquoise-300) / <alpha-value>)",
						200: "hsl(var(--color-turquoise-200) / <alpha-value>)",
						100: "hsl(var(--color-turquoise-100) / <alpha-value>)",
						50: "hsl(var(--color-turquoise-050) / <alpha-value>)",
						25: "hsl(var(--color-turquoise-025) / <alpha-value>)"
					},
					lime: {
						900: "hsl(var(--color-lime-900) / <alpha-value>)",
						800: "hsl(var(--color-lime-800) / <alpha-value>)",
						700: "hsl(var(--color-lime-700) / <alpha-value>)",
						600: "hsl(var(--color-lime-600) / <alpha-value>)",
						500: "hsl(var(--color-lime-500) / <alpha-value>)",
						400: "hsl(var(--color-lime-400) / <alpha-value>)",
						300: "hsl(var(--color-lime-300) / <alpha-value>)",
						200: "hsl(var(--color-lime-200) / <alpha-value>)",
						100: "hsl(var(--color-lime-100) / <alpha-value>)",
						50: "hsl(var(--color-lime-050) / <alpha-value>)",
						25: "hsl(var(--color-lime-025) / <alpha-value>)"
					},
					magenta: {
						900: "hsl(var(--color-magenta-900) / <alpha-value>)",
						800: "hsl(var(--color-magenta-800) / <alpha-value>)",
						700: "hsl(var(--color-magenta-700) / <alpha-value>)",
						600: "hsl(var(--color-magenta-600) / <alpha-value>)",
						500: "hsl(var(--color-magenta-500) / <alpha-value>)",
						400: "hsl(var(--color-magenta-400) / <alpha-value>)",
						300: "hsl(var(--color-magenta-300) / <alpha-value>)",
						200: "hsl(var(--color-magenta-200) / <alpha-value>)",
						100: "hsl(var(--color-magenta-100) / <alpha-value>)",
						50: "hsl(var(--color-magenta-050) / <alpha-value>)",
						25: "hsl(var(--color-magenta-025) / <alpha-value>)"
					}
				},
				backgroundImage: {
					"gradient-dark":
						"linear-gradient(to bottom right, hsl(var(--color-primary-500)), hsl(var(--color-primary-400)))",
					"gradient-light": "linear-gradient(to bottom, hsl(258, 100%, 97%), hsl(0, 100%, 100%))"
				},
				animation: {
					"spin-slow": "spin 2s linear infinite"
				}
			}
		}
	}
);

/**
 * Tailwind preset containing a template tailwind.config with the ZenML Plugin included
 */
export const zenmlPreset = {
	content: [],
	plugins: [zenmlPlugin]
} satisfies Config;
