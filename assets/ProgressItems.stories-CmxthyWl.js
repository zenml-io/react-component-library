import{a,b as v,p as w}from"./ProgressBar-n6dtUjoI.js";import{R as e}from"./index-yUhCOHB4.js";import"./index-CanQ0flI.js";import"./index-DcuGh8cT.js";import"./index-DQXGlRzm.js";import"./jsx-runtime-DBhXMc9n.js";import"./index-z4ifl892.js";import"./index-CLdCKqIz.js";const x={title:"Elements/Progress",component:a,parameters:{layout:"centered"},argTypes:{size:{description:"defining the size of the Item",control:"select",defaultValue:"sm",options:["sm","md"]}},decorators:[s=>e.createElement("div",{className:"flex items-center gap-7"},e.createElement(s,null))],tags:["autodocs"]},r={name:"Default",args:{size:"sm"},render:({size:s})=>e.createElement(e.Fragment,null,e.createElement(a,{size:s}),e.createElement(v,{size:s},e.createElement("svg",{className:w({size:s}),viewBox:"0 0 24 24",fill:"black",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z"}))))},n={name:"Progress Tick",args:{size:"md"},render:({size:s})=>e.createElement(v,{size:s},e.createElement("svg",{className:w({size:s}),viewBox:"0 0 24 24",fill:"black",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z"})))},t={name:"Progress Outstanding",args:{size:"md"},render:({size:s})=>e.createElement(a,{size:s})};var o,i,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,m,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,p,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Progress Outstanding",
  args: {
    size: "md"
  },
  render: ({
    size
  }) => <ProgressOutstanding size={size} />
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const h=["DefaultVariant","TickStory","OutstandingStory"];export{r as DefaultVariant,t as OutstandingStory,n as TickStory,h as __namedExportsOrder,x as default};
