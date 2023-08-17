import { defineConfig } from "tsup";

const pureCalls = [
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
	entry: ["src/index.ts"],
	treeshake: true,
	external: ["react"],
	format: ["cjs", "esm"],
	dts: true,
	pure: pureCalls
});
