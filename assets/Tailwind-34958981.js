import{j as t,a as o,F as s}from"./jsx-runtime-e6a661ac.js";import{M as a}from"./index-e79aeeef.js";import{u as i}from"./index-e744116c.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-28b655bc.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-6a5bd4ef.js";import"./index-d37d4223.js";import"./index-f5c3bd84.js";import"./index-356e4a49.js";function r(n){const e=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",pre:"pre"},i(),n.components);return o(s,{children:[t(a,{title:"Docs/Tailwind"}),`
`,t(e.h1,{id:"tailwind",children:"Tailwind"}),`
`,o(e.p,{children:["The component library is designed to use Tailwind as the css framework. Therefore it exposes a ",t(e.strong,{children:"Tailwind Plugin"})," & ",t(e.strong,{children:"a Tailwind Preset"})," containing all relevant base styles for the ZenML design system."]}),`
`,o(e.p,{children:["The styles aren't bundled into a dedicated stylesheet that can be imported from the lib itself. Therefore you need to extend the ",t(e.code,{children:"content"})," prop of your ",t(e.code,{children:"tailwind.config.js"})," like so:"]}),`
`,t(e.pre,{children:t(e.code,{className:"language-js",children:`import { zenmlPreset } from "@zenml-io/react-component-library";

/** @type {import('tailwindcss').Config} */
export default {
	presets: [zenmlPreset],
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@zenml-io/react-component-library/**/*.{js,ts,jsx,tsx}"
	]
};
`})})]})}function b(n={}){const{wrapper:e}=Object.assign({},i(),n.components);return e?t(e,Object.assign({},n,{children:t(r,n)})):r(n)}export{b as default};
//# sourceMappingURL=Tailwind-34958981.js.map
