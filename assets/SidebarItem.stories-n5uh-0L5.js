import{R as e}from"./index-OjgoNOWw.js";import{b as v,c as l,d as m}from"./icons-0Qi2-vKm.js";import"./index-uxD8nXqh.js";import"./index-FlAvnLNT.js";const g={title:"UI/Sidebar",component:v,decorators:[d=>e.createElement("ul",{style:{listStyle:"none"},className:"group"},e.createElement(d,null))],tags:["autodocs"]},t={name:"Inactive Sidebar Item",args:{isActive:!1,children:e.createElement("div",null,e.createElement(l,{svgStroke:!0,icon:e.createElement(m,null),label:"Models"}))}},r={name:"Active Sidebar Item",args:{isActive:!0,children:e.createElement("div",null,e.createElement(l,{svgStroke:!0,isActive:!0,icon:e.createElement(m,null),label:"Models"}))}};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Inactive Sidebar Item",
  args: {
    isActive: false,
    children: <div>
                <SidebarItemContent svgStroke icon={<CPU />} label="Models" />
            </div>
  }
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var s,c,o;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Active Sidebar Item",
  args: {
    isActive: true,
    children: <div>
                <SidebarItemContent svgStroke isActive={true} icon={<CPU />} label="Models" />
            </div>
  }
}`,...(o=(c=r.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};const I=["inactive","active"];export{I as __namedExportsOrder,r as active,g as default,t as inactive};