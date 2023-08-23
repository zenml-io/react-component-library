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
	entry: ["src/index.ts", "src/utilities/index.ts"],
	treeshake: true,
	external: ["react"],
	format: ["cjs", "esm"],
	dts: true,
	pure: reactPureCalls,
	clean: true
});
