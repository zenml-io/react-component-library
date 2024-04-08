import{R as e}from"./index-OjgoNOWw.js";import{e as o,S as m,C as u,a as S,f as b,g as v,h as E,b as t,c as a,d as l}from"./icons-0Qi2-vKm.js";import"./index-uxD8nXqh.js";import"./index-FlAvnLNT.js";function c({children:r}){return e.createElement("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",width:"100%"}},e.createElement("div",{style:{height:"64px",backgroundColor:"white",borderBottom:"solid lightgrey 1px"}}),r)}c.__docgenInfo={description:"",methods:[],displayName:"AppShell",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const I={title:"UI/Sidebar",component:o,parameters:{layout:"fullscreen"},decorators:[r=>e.createElement(c,null,e.createElement(r,null))],tags:["autodocs"]},n={name:"Sidebar",args:{children:e.createElement(e.Fragment,null,e.createElement(m,{icon:e.createElement(u,{className:"w-6 h-6"}),title:"ZenML Tenant"},e.createElement(S,null,e.createElement("img",{src:"https://avatar.vercel.sh/ZenMLTenant?size=32"})),e.createElement(b,null,"My Tenant")),e.createElement(v,null,e.createElement(E,null,e.createElement("li",{className:"w-full"},e.createElement(t,{isActive:!0},e.createElement("div",null,e.createElement(a,{svgStroke:!0,isActive:!0,icon:e.createElement(l,null),label:"Models"})))),e.createElement("li",{className:"w-full"},e.createElement(t,{isActive:!1},e.createElement("div",null,e.createElement(a,{svgStroke:!0,isActive:!1,icon:e.createElement(l,null),label:"Models"})))),e.createElement("li",{className:"w-full"},e.createElement(t,{isActive:!1},e.createElement("div",null,e.createElement(a,{svgStroke:!0,isActive:!1,icon:e.createElement(l,null),label:"Models"}))))),e.createElement("div",{style:{marginTop:"auto"}},e.createElement(t,null,e.createElement("div",null,e.createElement(a,{svgStroke:!0,isActive:!1,icon:e.createElement(l,null),label:"Models"}))))))}};var i,s,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Sidebar",
  args: {
    children: <>
                <SidebarHeader icon={<CloseButton className="w-6 h-6" />} title="ZenML Tenant">
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
}`,...(d=(s=n.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const y=["defaultStory"];export{y as __namedExportsOrder,I as default,n as defaultStory};
