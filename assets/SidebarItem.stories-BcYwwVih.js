import{R as e}from"./iframe-DmX7tmNN.js";import{c as s,a as o,d as a}from"./Sidebar-CDJGsRXM.js";import{a as n}from"./icons-Cb40qSeB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B5sGjzNZ.js";import"./jsx-runtime-CUg_HtQB.js";import"./index-DcZlE0k4.js";const S={title:"UI/Sidebar",component:s,decorators:[i=>e.createElement("ul",{style:{listStyle:"none"},className:"group"},e.createElement(o,{initialOpen:!1},e.createElement(i,null)))],tags:["autodocs"]},t={name:"Inactive Sidebar Item",args:{isActive:!1,children:e.createElement("div",null,e.createElement(a,{svgStroke:!0,icon:e.createElement(n,null),label:"Models"}))}},r={name:"Active Sidebar Item",args:{isActive:!0,children:e.createElement("div",null,e.createElement(a,{svgStroke:!0,isActive:!0,icon:e.createElement(n,null),label:"Models"}))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Inactive Sidebar Item",
  args: {
    isActive: false,
    children: <div>
                <SidebarItemContent svgStroke icon={<CPU />} label="Models" />
            </div>
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Active Sidebar Item",
  args: {
    isActive: true,
    children: <div>
                <SidebarItemContent svgStroke isActive={true} icon={<CPU />} label="Models" />
            </div>
  }
}`,...r.parameters?.docs?.source}}};const b=["inactive","active"];export{b as __namedExportsOrder,r as active,S as default,t as inactive};
