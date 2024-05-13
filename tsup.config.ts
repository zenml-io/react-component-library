import { defineConfig } from "tsup";

const reactPureCalls = [
	"cloneElement",
	"createContext",
	"createElement",
	"createFactory",
	"createRef",
	"forwardRef",
	"isValidElement",
	"memo",
	"lazy"
];

export default defineConfig({
	entry: [
		"src/index.ts",
		"src/utilities.ts",
		"src/tailwind.ts",
		"src/components.ts",
		"src/components/client.ts",
		"src/components/server.ts"
		//"src/components/**/index.{ts,tsx}"
	],

	external: ["react"],
	format: ["cjs", "esm"],
	dts: true,
	pure: reactPureCalls,
	clean: true
});
