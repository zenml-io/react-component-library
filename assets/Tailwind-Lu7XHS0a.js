import{j as e}from"./jsx-runtime-CUg_HtQB.js";import{useMDXComponents as o}from"./index-CjbLFW66.js";import{M as r}from"./WithTooltip-SK46ZJ2J-DPFmM_IS.js";import"./iframe-DmX7tmNN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BA3UrDet.js";import"./index-D6TQrr0y.js";function s(t){const n={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Docs/Tailwind"}),`
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
`})})]})}function h(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{h as default};
