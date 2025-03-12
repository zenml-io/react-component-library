import{A as r,a as l,b as s}from"./Avatar-CuQjlxMM.js";import{R as e}from"./index-yUhCOHB4.js";import"./index-DQXGlRzm.js";import"./jsx-runtime-DBhXMc9n.js";import"./index-z4ifl892.js";import"./index-CLdCKqIz.js";import"./index-Da_IA54p.js";import"./index-CanQ0flI.js";import"./index-DcuGh8cT.js";const y={title:"UI/Avatar",component:r,parameters:{layout:"centered"},decorators:[a=>e.createElement("div",{className:"flex items-center gap-7"},e.createElement(a,null))],argTypes:{size:{description:"defining the size of the avatar",control:"select",defaultValue:"md",options:["xs","sm","md","lg","xl","xxl"]},type:{description:"defining the type of the avatar",control:"select",defaultValue:"rounded",options:["rounded","square"]}},tags:["autodocs"]},t={name:"Default",args:{size:"md",type:"rounded"},render:a=>e.createElement(e.Fragment,null,e.createElement(r,{size:a.size,type:a.type},e.createElement(l,{src:"https://avatar.vercel.sh/randomValue?size=24"}),e.createElement(s,{size:a.size},"RV")),e.createElement(r,{size:a.size,type:a.type},e.createElement(s,{size:a.size},"RV")))};var n,i,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(o=(i=t.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const A=["DefaultVariant"];export{t as DefaultVariant,A as __namedExportsOrder,y as default};
