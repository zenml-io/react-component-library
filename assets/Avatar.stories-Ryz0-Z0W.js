import{A as r,a as n,b as s}from"./Avatar-CWIR2_AC.js";import{R as e}from"./iframe-DmX7tmNN.js";import"./index-CUK_SDBg.js";import"./jsx-runtime-CUg_HtQB.js";import"./index-BA3UrDet.js";import"./index-D6TQrr0y.js";import"./index-B5sGjzNZ.js";import"./index-CDl4ovXb.js";import"./index-ok-L0AhG.js";import"./index-DcZlE0k4.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"UI/Avatar",component:r,parameters:{layout:"centered"},decorators:[a=>e.createElement("div",{className:"flex items-center gap-7"},e.createElement(a,null))],argTypes:{size:{description:"defining the size of the avatar",control:"select",defaultValue:"md",options:["xs","sm","md","lg","xl","xxl"]},type:{description:"defining the type of the avatar",control:"select",defaultValue:"rounded",options:["rounded","square"]}},tags:["autodocs"]},t={name:"Default",args:{size:"md",type:"rounded"},render:a=>e.createElement(e.Fragment,null,e.createElement(r,{size:a.size,type:a.type},e.createElement(n,{src:"https://avatar.vercel.sh/randomValue?size=24"}),e.createElement(s,{size:a.size},"RV")),e.createElement(r,{size:a.size,type:a.type},e.createElement(s,{size:a.size},"RV")))};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    size: "md",
    type: "rounded"
  },
  render: args => <>
            <Avatar size={args.size} type={args.type}>
                <AvatarImage src="https://avatar.vercel.sh/randomValue?size=24" />
                <AvatarFallback size={args.size}>RV</AvatarFallback>
            </Avatar>
            <Avatar size={args.size} type={args.type}>
                <AvatarFallback size={args.size}>RV</AvatarFallback>
            </Avatar>
        </>
}`,...t.parameters?.docs?.source}}};const y=["DefaultVariant"];export{t as DefaultVariant,y as __namedExportsOrder,g as default};
