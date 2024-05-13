import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as s}from"./index-DSkyVWTJ.js";import{M as r}from"./index-iLh1VM6M.js";import"./index-CTjT7uj6.js";import"./iframe-BGYEER-f.js";import"../sb-preview/runtime.js";import"./index-9r8iugjR.js";import"./index-UEJ6cPbl.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";function o(n){const t={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Docs/Tailwind"}),`
`,e.jsx(t.h1,{id:"tailwind",children:"Tailwind"}),`
`,e.jsxs(t.p,{children:["The component library is designed to use Tailwind as the css framework. Therefore it exposes a ",e.jsx(t.strong,{children:"Tailwind Plugin"})," & ",e.jsx(t.strong,{children:"a Tailwind Preset"})," containing all relevant base styles for the ZenML design system."]}),`
`,e.jsxs(t.p,{children:["The styles aren't bundled into a dedicated stylesheet that can be imported from the lib itself. Therefore you need to extend the ",e.jsx(t.code,{children:"content"})," prop of your ",e.jsx(t.code,{children:"tailwind.config.js"})," like so:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { zenmlPreset } from "@zenml-io/react-component-library";

/** @type {import('tailwindcss').Config} */
export default {
	presets: [zenmlPreset],
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@zenml-io/react-component-library/**/*.{js,ts,jsx,tsx}"
	]
};
`})})]})}function u(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{u as default};
