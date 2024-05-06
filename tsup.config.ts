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
		"src/utilities/index.ts",
		"src/tailwind/index.ts",
		"src/components/index.ts",
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
