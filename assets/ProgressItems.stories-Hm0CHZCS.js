import{R as s}from"./index-OjgoNOWw.js";import{c as h}from"./index-FlAvnLNT.js";import{c}from"./index-polp_dyw.js";const x=c("shrink-0 flex items-center justify-center rounded-rounded border-success-300 bg-success-50",{variants:{size:{sm:"h-[28px] w-[28px] border-2",md:"h-7 w-7 border-4"}},defaultVariants:{size:"sm"}}),C=c("fill-success-300",{variants:{size:{sm:"h-3 w-3",md:"h-[28px] w-[28px]"}},defaultVariants:{size:"sm"}});function d({className:e,children:o,size:i,...k}){return s.createElement("div",{...k,className:h(x({size:i}),e)},o)}const L=c("rounded-rounded border-dashed border-neutral-300 bg-theme-surface-tertiary",{variants:{size:{sm:"h-[28px] w-[28px] border-2",md:"h-7 w-7 border-4"}},defaultVariants:{size:"sm"}});function a({className:e,size:o,...i}){return s.createElement("div",{...i,className:h(L({size:o}),e)})}d.__docgenInfo={description:"",methods:[],displayName:"ProgressTick"};a.__docgenInfo={description:"",methods:[],displayName:"ProgressOutstanding"};const b={title:"Elements/Progress",component:a,parameters:{layout:"centered"},argTypes:{size:{description:"defining the size of the Item",control:"select",defaultValue:"sm",options:["sm","md"]}},decorators:[e=>s.createElement("div",{className:"flex items-center gap-7"},s.createElement(e,null))],tags:["autodocs"]},r={name:"Default",args:{size:"sm"},render:({size:e})=>s.createElement(s.Fragment,null,s.createElement(a,{size:e}),s.createElement(d,{size:e},s.createElement("svg",{className:C({size:e}),viewBox:"0 0 24 24",fill:"black",xmlns:"http://www.w3.org/2000/svg"},s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z"}))))},n={name:"Progress Tick",args:{size:"md"},render:({size:e})=>s.createElement(d,{size:e},s.createElement("svg",{className:C({size:e}),viewBox:"0 0 24 24",fill:"black",xmlns:"http://www.w3.org/2000/svg"},s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z"})))},t={name:"Progress Outstanding",args:{size:"md"},render:({size:e})=>s.createElement(a,{size:e})};var l,m,g;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Default",
  args: {
    size: "sm"
  },
  render: ({
    size
  }) => <>
            <ProgressOutstanding size={size} />
            <ProgressTick size={size}>
                <svg className={progressTickVariants({
        size
      })} viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z" />
                </svg>
            </ProgressTick>
        </>
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,p,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Progress Tick",
  args: {
    size: "md"
  },
  render: ({
    size
  }) => <ProgressTick size={size}>
            <svg className={progressTickVariants({
      size: size
    })} viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z" />
            </svg>
        </ProgressTick>
}`,...(f=(p=n.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var v,w,z;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Progress Outstanding",
  args: {
    size: "md"
  },
  render: ({
    size
  }) => <ProgressOutstanding size={size} />
}`,...(z=(w=t.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const V=["DefaultVariant","TickStory","OutstandingStory"];export{r as DefaultVariant,t as OutstandingStory,n as TickStory,V as __namedExportsOrder,b as default};
