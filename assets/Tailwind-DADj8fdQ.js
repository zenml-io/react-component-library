import{j as e}from"./jsx-runtime-DBhXMc9n.js";import{useMDXComponents as o}from"./index-BVirYd6z.js";import{M as r}from"./index-CgEzKqMO.js";import"./index-yUhCOHB4.js";import"./iframe-Dhc2iseW.js";import"./index-z4ifl892.js";import"./index-Cu4lwwaE.js";import"./index-Cxo8En29.js";import"./index-DrFu-skq.js";function s(t){const n={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Docs/Tailwind"}),`
`,e.jsx(n.h1,{id:"tailwind",children:"Tailwind"}),`
`,e.jsxs(n.p,{children:["The component library is designed to use Tailwind as the css framework. Therefore it exposes a ",e.jsx(n.strong,{children:"Tailwind Plugin"})," & ",e.jsx(n.strong,{children:"a Tailwind Preset"})," containing all relevant base styles for the ZenML design system."]}),`
`,e.jsxs(n.p,{children:["The styles aren't bundled into a dedicated stylesheet that can be imported from the lib itself. Therefore you need to extend the ",e.jsx(n.code,{children:"content"})," prop of your ",e.jsx(n.code,{children:"tailwind.config.js"})," like so:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { zenmlPreset } from "@zenml-io/react-component-library";

/** @type {import('tailwindcss').Config} */
export default {
	presets: [zenmlPreset],
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@zenml-io/react-component-library/**/*.{js,ts,jsx,tsx}"
	]
};
`})})]})}function j(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{j as default};
