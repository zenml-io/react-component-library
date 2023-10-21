import{a as i,j as e,F as p}from"./jsx-runtime-29545a09.js";import{e as m,b,c as _,d as S,f as y,g as u,h,S as r,a as d,C as t}from"./icons-1a06cf8f.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-b5922a48.js";import"./extends-98964cd2.js";try{SidebarHeaderImage.displayName="SidebarHeaderImage",SidebarHeaderImage.__docgenInfo={description:"",displayName:"SidebarHeaderImage",props:{}}}catch{}try{SidebarItem.displayName="SidebarItem",SidebarItem.__docgenInfo={description:"",displayName:"SidebarItem",props:{isActive:{defaultValue:{value:"false"},description:"",name:"isActive",required:!1,type:{name:"boolean"}}}}}catch{}try{SidebarItemContent.displayName="SidebarItemContent",SidebarItemContent.__docgenInfo={description:"",displayName:"SidebarItemContent",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactNode"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!1,type:{name:"boolean"}}}}}catch{}try{Sidebar.displayName="Sidebar",Sidebar.__docgenInfo={description:"",displayName:"Sidebar",props:{}}}catch{}try{SidebarHeaderTitle.displayName="SidebarHeaderTitle",SidebarHeaderTitle.__docgenInfo={description:"",displayName:"SidebarHeaderTitle",props:{}}}catch{}try{SidebarHeader.displayName="SidebarHeader",SidebarHeader.__docgenInfo={description:"",displayName:"SidebarHeader",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}}}}}catch{}try{SidebarBody.displayName="SidebarBody",SidebarBody.__docgenInfo={description:"",displayName:"SidebarBody",props:{}}}catch{}try{SidebarList.displayName="SidebarList",SidebarList.__docgenInfo={description:"",displayName:"SidebarList",props:{}}}catch{}function l({children:a}){return i("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",width:"100%"},children:[e("div",{style:{height:"64px",backgroundColor:"white",borderBottom:"solid lightgrey 1px"}}),a]})}try{l.displayName="AppShell",l.__docgenInfo={description:"",displayName:"AppShell",props:{}}}catch{}const A={title:"UI/Sidebar",component:m,parameters:{layout:"fullscreen"},decorators:[a=>e(l,{children:e(a,{})})],tags:["autodocs"]},n={name:"Sidebar",args:{children:i(p,{children:[i(b,{icon:e(_,{}),title:"ZenML Tenant",children:[e(S,{children:e("img",{src:"https://avatar.vercel.sh/ZenMLTenant?size=32"})}),e(y,{children:"My Tenant"})]}),i(u,{children:[i(h,{children:[e("li",{className:"w-full",children:e(r,{isActive:!0,children:e("div",{children:e(d,{isActive:!0,icon:e(t,{}),label:"Models"})})})}),e("li",{className:"w-full",children:e(r,{isActive:!1,children:e("div",{children:e(d,{isActive:!1,icon:e(t,{}),label:"Models"})})})}),e("li",{className:"w-full",children:e(r,{isActive:!1,children:e("div",{children:e(d,{isActive:!1,icon:e(t,{}),label:"Models"})})})})]}),e("div",{style:{marginTop:"auto"},children:e(r,{children:e("div",{children:e(d,{isActive:!1,icon:e(t,{}),label:"Models"})})})})]})]})}};var s,o,c;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Sidebar",
  args: {
    children: <>
                <SidebarHeader icon={<CloseButton />} title="ZenML Tenant">
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
                                    <SidebarItemContent isActive={true} icon={<CPU />} label="Models" />
                                </div>
                            </SidebarItem>
                        </li>
                        <li className="w-full">
                            <SidebarItem isActive={false}>
                                <div>
                                    <SidebarItemContent isActive={false} icon={<CPU />} label="Models" />
                                </div>
                            </SidebarItem>
                        </li>
                        <li className="w-full">
                            <SidebarItem isActive={false}>
                                <div>
                                    <SidebarItemContent isActive={false} icon={<CPU />} label="Models" />
                                </div>
                            </SidebarItem>
                        </li>
                    </SidebarList>
                    <div style={{
          marginTop: "auto"
        }}>
                        <SidebarItem>
                            <div>
                                <SidebarItemContent isActive={false} icon={<CPU />} label="Models" />
                            </div>
                        </SidebarItem>
                    </div>
                </SidebarBody>
            </>
  }
}`,...(c=(o=n.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const C=["defaultStory"];export{C as __namedExportsOrder,A as default,n as defaultStory};
//# sourceMappingURL=Sidebar.stories-a9123806.js.map
