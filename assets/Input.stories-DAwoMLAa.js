import{c as z}from"./index-Bb4qSo10.js";import{r as y,R as n}from"./index-CTjT7uj6.js";import{c as g}from"./index-BAggi1Ku.js";const E=z(g(["transition-all duration-200 rounded-md bg-theme-surface-primary","border-[#D0D5DD] border","text-theme-text-primary","placeholder:text-theme-text-secondary","focus:border-neutral-500 focus:outline-none focus:shadow-sm","disabled:bg-neutral-100 disabled:text-neutral-400"]),{variants:{inputSize:{sm:"px-2 h-6 text-text-sm",md:"px-2 h-7 text-text-md",lg:"px-3 h-8 text-text-lg"}},defaultVariants:{inputSize:"md"}}),r=y.forwardRef(({className:x,type:h,inputSize:f,...S},b)=>n.createElement("div",null,n.createElement("input",{type:h,className:g(E({inputSize:f}),x),ref:b,...S})));r.displayName="Input";r.__docgenInfo={description:"",methods:[],displayName:"Input"};const M={title:"Elements/Input",component:r,argTypes:{disabled:{control:"boolean",defaultValue:!1,description:"if true, the input is disabled"}},parameters:{layout:"centered"},tags:["autodocs"]},e={name:"Small",args:{placeholder:"Small input",inputSize:"sm"}},a={name:"Medium",args:{placeholder:"Medium input",inputSize:"md"}},t={name:"Large",args:{placeholder:"Large input",inputSize:"lg",disabled:!0}};var s,o,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Small",
  args: {
    placeholder: "Small input",
    inputSize: "sm"
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var m,l,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Medium",
  args: {
    placeholder: "Medium input",
    inputSize: "md"
  }
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,u,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Large",
  args: {
    placeholder: "Large input",
    inputSize: "lg",
    disabled: true
  }
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const _=["small","medium","large"];export{_ as __namedExportsOrder,M as default,t as large,a as medium,e as small};
