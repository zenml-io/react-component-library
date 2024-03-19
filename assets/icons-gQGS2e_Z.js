import{r as s,R as e}from"./index-DogsOklH.js";import{$ as d}from"./index-EBIJ8zB7.js";import{c as o}from"./index-FlAvnLNT.js";const c=s.forwardRef(({className:a,children:t,...r},l)=>e.createElement("nav",{ref:l,className:o("group flex-1 h-full flex w-9 hover:w-[220px] bg-neutral-100 transition-all overflow-x-hidden duration-300 flex-col items-center border-r border-theme-border-moderate",a),...r},e.createElement("div",{className:"flex flex-col h-full flex-1 w-full"},t)));c.displayName="Sidebar";function b({children:a}){return e.createElement(d,{className:"w-6 h-6 rounded-sm shrink-0"},a)}const m=s.forwardRef(({children:a,className:t,...r},l)=>e.createElement("p",{ref:l,...r,className:o("opacity-0 group-hover:opacity-100 ml-1 truncate duration-300 transition-all",t)},a));m.displayName="SidebarHeaderTitle";const p=s.forwardRef(({icon:a,children:t,className:r,...l},n)=>{const i=s.isValidElement(a)&&a.props.className||"",h=o(i,"ml-auto shrink-0 opacity-0 group-hover:opacity-100  duration-300 transition-all");return e.createElement("div",{ref:n,...l,className:o("bg-theme-surface-primary flex items-center whitespace-nowrap p-3 border-b border-theme-border-moderate",r)},t,a&&s.cloneElement(a,{className:h}))});p.displayName="SidebarHeader";const f=s.forwardRef(({className:a,...t},r)=>e.createElement("div",{ref:r,className:o("flex-1 flex px-1 py-2 flex-col w-full",a),...t}));f.displayName="SidebarBody";const u=s.forwardRef(({className:a,...t},r)=>e.createElement("ul",{ref:r,className:o("flex gap-0.5 w-full flex-col items-center",a),...t}));u.displayName="SidebarList";function y({isActive:a=!1,...t}){return e.createElement(d,{className:`flex p-2 items-center gap-2 rounded-md w-full ${a?"bg-theme-surface-primary":"hover:bg-neutral-200 active:bg-neutral-300"}`,...t})}function g({icon:a,label:t,isActive:r,svgStroke:l=!1}){const n=s.isValidElement(a)&&a.props.className||"",i=o(n,`w-5 h-5 shrink-0 ${l?r?"stroke-primary-400":"stroke-theme-text-tertiary":r?"fill-primary-400":"fill-theme-text-tertiary"}	`);return e.createElement(e.Fragment,null,s.cloneElement(a,{className:i}),e.createElement("div",{className:"opacity-0 group-hover:opacity-100 duration-300 transition-all"},t))}c.__docgenInfo={description:"",methods:[],displayName:"Sidebar"};b.__docgenInfo={description:"",methods:[],displayName:"SidebarHeaderImage"};m.__docgenInfo={description:"",methods:[],displayName:"SidebarHeaderTitle"};p.__docgenInfo={description:"",methods:[],displayName:"SidebarHeader"};f.__docgenInfo={description:"",methods:[],displayName:"SidebarBody"};u.__docgenInfo={description:"",methods:[],displayName:"SidebarList"};y.__docgenInfo={description:"",methods:[],displayName:"SidebarItem",props:{isActive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};g.__docgenInfo={description:"",methods:[],displayName:"SidebarItemContent",props:{icon:{required:!0,tsType:{name:"ReactNode"},description:""},label:{required:!0,tsType:{name:"string"},description:""},isActive:{required:!1,tsType:{name:"boolean"},description:""},svgStroke:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};function v({className:a=""}){return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",className:a},e.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e.createElement("path",{d:"M5 5m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z"}),e.createElement("path",{d:"M9 9h6v6h-6z"}),e.createElement("path",{d:"M3 10h2"}),e.createElement("path",{d:"M3 14h2"}),e.createElement("path",{d:"M10 3v2"}),e.createElement("path",{d:"M14 3v2"}),e.createElement("path",{d:"M21 10h-2"}),e.createElement("path",{d:"M21 14h-2"}),e.createElement("path",{d:"M14 21v-2"}),e.createElement("path",{d:"M10 21v-2"}))}function N({className:a=""}){return e.createElement("svg",{viewBox:"0 0 32 32",fill:"#6B7280",xmlns:"http://www.w3.org/2000/svg",className:a},e.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 6C7.55228 6 8 6.44772 8 7V25C8 25.5523 7.55228 26 7 26C6.44772 26 6 25.5523 6 25V7C6 6.44772 6.44772 6 7 6ZM18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L13.4142 15H25C25.5523 15 26 15.4477 26 16C26 16.5523 25.5523 17 25 17H13.4142L18.7071 22.2929C19.0976 22.6834 19.0976 23.3166 18.7071 23.7071C18.3166 24.0976 17.6834 24.0976 17.2929 23.7071L10.2929 16.7071C9.90237 16.3166 9.90237 15.6834 10.2929 15.2929L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289Z"}))}v.__docgenInfo={description:"",methods:[],displayName:"CPU",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};N.__docgenInfo={description:"",methods:[],displayName:"CloseButton",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};export{N as C,p as S,b as a,y as b,g as c,v as d,c as e,m as f,f as g,u as h};
