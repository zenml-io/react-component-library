import{R as e}from"./index-OjgoNOWw.js";import{f as u,a as S,S as b,b as v,g as p,h as E,i as f,c as a,d as n,e as l,u as g,C as I}from"./icons-Scnd2wjL.js";import{B as h}from"./Button-8DtMR3DB.js";import"./index-6Pk-3rAJ.js";import"./index-LfZfiPec.js";import"./index-polp_dyw.js";function d({children:t}){return e.createElement("div",{style:{minHeight:"1000px",display:"flex",flexDirection:"column",width:"100%"}},e.createElement("div",{style:{height:"64px",backgroundColor:"white",borderBottom:"solid lightgrey 1px"}}),t)}d.__docgenInfo={description:"",methods:[],displayName:"AppShell",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const H={title:"UI/Sidebar",component:u,parameters:{layout:"fullscreen"},decorators:[t=>e.createElement(S,{initialOpen:!0},e.createElement(d,null,e.createElement(t,null)))],tags:["autodocs"]},r={name:"Sidebar",args:{children:e.createElement(e.Fragment,null,e.createElement(b,{icon:e.createElement("div",null,e.createElement(y,null)),title:"ZenML Tenant"},e.createElement(v,null,e.createElement("img",{src:"https://avatar.vercel.sh/ZenMLTenant?size=32"})),e.createElement(p,null,"My Tenant")),e.createElement(E,null,e.createElement(f,null,e.createElement("li",{className:"w-full"},e.createElement(a,{isActive:!0},e.createElement("div",null,e.createElement(n,{svgStroke:!0,isActive:!0,icon:e.createElement(l,null),label:"Models"})))),e.createElement("li",{className:"w-full"},e.createElement(a,{isActive:!1},e.createElement("div",null,e.createElement(n,{svgStroke:!0,isActive:!1,icon:e.createElement(l,null),label:"Models"})))),e.createElement("li",{className:"w-full"},e.createElement(a,{isActive:!1},e.createElement("div",null,e.createElement(n,{svgStroke:!0,isActive:!1,icon:e.createElement(l,null),label:"Models"}))))),e.createElement("div",{style:{marginTop:"auto"}},e.createElement(a,null,e.createElement("div",null,e.createElement(n,{svgStroke:!0,isActive:!1,icon:e.createElement(l,null),label:"Models"}))))))}};function y(){const{setIsOpen:t,isOpen:o}=g();return e.createElement(h,{onClick:()=>t(m=>!m),className:"w-6 bg-transparent h-6 p-0 flex items-center justify-center",intent:"secondary"},e.createElement(I,{className:`w-4 h-4 aspect-square ${!o&&"rotate-180"}`}))}var i,s,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(s=r.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const N=["defaultStory"];export{N as __namedExportsOrder,H as default,r as defaultStory};
