import{R as e}from"./iframe-DmX7tmNN.js";import{e as d,a as o,S as m,b as u,f as S,g as b,h as v,c as a,d as n,u as p}from"./Sidebar-CDJGsRXM.js";import{B as E}from"./Button-jO0B4tfe.js";import{a as r,C as f}from"./icons-Cb40qSeB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B5sGjzNZ.js";import"./jsx-runtime-CUg_HtQB.js";import"./index-DcZlE0k4.js";import"./index-ok-L0AhG.js";function i({children:t}){return e.createElement("div",{style:{minHeight:"1000px",display:"flex",flexDirection:"column",width:"100%"}},e.createElement("div",{style:{height:"64px",backgroundColor:"white",borderBottom:"solid lightgrey 1px"}}),t)}i.__docgenInfo={description:"",methods:[],displayName:"AppShell",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const H={title:"UI/Sidebar",component:d,parameters:{layout:"fullscreen"},decorators:[t=>e.createElement(o,{initialOpen:!0},e.createElement(i,null,e.createElement(t,null)))],tags:["autodocs"]},l={name:"Sidebar",args:{children:e.createElement(e.Fragment,null,e.createElement(m,{icon:e.createElement("div",null,e.createElement(g,null)),title:"ZenML Tenant"},e.createElement(u,null,e.createElement("img",{src:"https://avatar.vercel.sh/ZenMLTenant?size=32"})),e.createElement(S,null,"My Tenant")),e.createElement(b,null,e.createElement(v,null,e.createElement("li",{className:"w-full"},e.createElement(a,{isActive:!0},e.createElement("div",null,e.createElement(n,{svgStroke:!0,isActive:!0,icon:e.createElement(r,null),label:"Models"})))),e.createElement("li",{className:"w-full"},e.createElement(a,{isActive:!1},e.createElement("div",null,e.createElement(n,{svgStroke:!0,isActive:!1,icon:e.createElement(r,null),label:"Models"})))),e.createElement("li",{className:"w-full"},e.createElement(a,{isActive:!1},e.createElement("div",null,e.createElement(n,{svgStroke:!0,isActive:!1,icon:e.createElement(r,null),label:"Models"}))))),e.createElement("div",{style:{marginTop:"auto"}},e.createElement(a,null,e.createElement("div",null,e.createElement(n,{svgStroke:!0,isActive:!1,icon:e.createElement(r,null),label:"Models"}))))))}};function g(){const{setIsOpen:t,isOpen:s}=p();return e.createElement(E,{onClick:()=>t(c=>!c),className:"w-6 bg-transparent h-6 p-0 flex items-center justify-center",intent:"secondary"},e.createElement(f,{className:`w-4 h-4 aspect-square ${!s&&"rotate-180"}`}))}l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Sidebar",
  args: {
    children: <>
                <SidebarHeader icon={<div>
                            <SidebarButton />
                        </div>} title="ZenML Tenant">
                    <SidebarHeaderImage>
                        <img src={\`https://avatar.vercel.sh/ZenMLTenant?size=32\`} />
                    </SidebarHeaderImage>
                    <SidebarHeaderTitle>My Tenant</SidebarHeaderTitle>
                </SidebarHeader>
                <SidebarBody>
                    <SidebarList>
                        <li className="w-full">
                            <SidebarItem isActive={true}>
                                <div>
                                    <SidebarItemContent svgStroke isActive={true} icon={<CPU />} label="Models" />
                                </div>
                            </SidebarItem>
                        </li>
                        <li className="w-full">
                            <SidebarItem isActive={false}>
                                <div>
                                    <SidebarItemContent svgStroke isActive={false} icon={<CPU />} label="Models" />
                                </div>
                            </SidebarItem>
                        </li>
                        <li className="w-full">
                            <SidebarItem isActive={false}>
                                <div>
                                    <SidebarItemContent svgStroke isActive={false} icon={<CPU />} label="Models" />
                                </div>
                            </SidebarItem>
                        </li>
                    </SidebarList>
                    <div style={{
          marginTop: "auto"
        }}>
                        <SidebarItem>
                            <div>
                                <SidebarItemContent svgStroke isActive={false} icon={<CPU />} label="Models" />
                            </div>
                        </SidebarItem>
                    </div>
                </SidebarBody>
            </>
  }
}`,...l.parameters?.docs?.source}}};const N=["defaultStory"];export{N as __namedExportsOrder,H as default,l as defaultStory};
