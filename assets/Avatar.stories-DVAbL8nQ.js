import{r as a,R as o}from"./index-OjgoNOWw.js";import{$ as I,a as u,_ as $,b as L,c as h}from"./index-xcTdDhRm.js";import{c as z}from"./index-polp_dyw.js";import{c as g}from"./index-FlAvnLNT.js";import"./index-mQqIOHEI.js";import"./index-uxD8nXqh.js";const _="Avatar",[V,H]=I(_),[N,E]=V(_),k=a.forwardRef((e,s)=>{const{__scopeAvatar:r,...t}=e,[n,c]=a.useState("idle");return a.createElement(N,{scope:r,imageLoadingStatus:n,onImageLoadingStatusChange:c},a.createElement(u.span,$({},t,{ref:s})))}),C="AvatarImage",F=a.forwardRef((e,s)=>{const{__scopeAvatar:r,src:t,onLoadingStatusChange:n=()=>{},...c}=e,i=E(C,r),d=D(t),m=L(x=>{n(x),i.onImageLoadingStatusChange(x)});return h(()=>{d!=="idle"&&m(d)},[d,m]),d==="loaded"?a.createElement(u.img,$({},c,{ref:s,src:t})):null}),M="AvatarFallback",q=a.forwardRef((e,s)=>{const{__scopeAvatar:r,delayMs:t,...n}=e,c=E(M,r),[i,d]=a.useState(t===void 0);return a.useEffect(()=>{if(t!==void 0){const m=window.setTimeout(()=>d(!0),t);return()=>window.clearTimeout(m)}},[t]),i&&c.imageLoadingStatus!=="loaded"?a.createElement(u.span,$({},n,{ref:s})):null});function D(e){const[s,r]=a.useState("idle");return h(()=>{if(!e){r("error");return}let t=!0;const n=new window.Image,c=i=>()=>{t&&r(i)};return r("loading"),n.onload=c("loaded"),n.onerror=c("error"),n.src=e,()=>{t=!1}},[e]),s}const w=k,S=F,R=q,P=z("relative flex shrink-0 overflow-hidden",{variants:{type:{square:"rounded-md",rounded:"rounded-rounded"},size:{xs:"w-3 h-3",sm:"w-5 h-5",md:"w-6 h-6",lg:"w-7 h-7",xl:"w-9 h-9",xxl:"w-12 h-12"}},defaultVariants:{type:"rounded",size:"lg"}}),T=z("flex aspect-square items-center justify-center bg-primary-50 text-theme-text-brand font-semibold uppercase",{variants:{size:{xs:"text-text-xs",sm:"text-text-xs",md:"text-text-md",lg:"text-text-lg",xl:"text-display-sm",xxl:"text-display-md"}}}),l=a.forwardRef(({className:e,size:s,type:r,...t},n)=>a.createElement(w,{ref:n,className:g(P({size:s,type:r}),e),...t}));l.displayName=w.displayName;const b=a.forwardRef(({className:e,...s},r)=>a.createElement(S,{ref:r,className:g("aspect-square h-full w-full",e),...s}));b.displayName=S.displayName;const p=a.forwardRef(({className:e,size:s,...r},t)=>a.createElement(R,{ref:t,className:g(T({size:s}),e),...r}));p.displayName=R.displayName;l.__docgenInfo={description:"",methods:[]};b.__docgenInfo={description:"",methods:[]};p.__docgenInfo={description:"",methods:[]};const J={title:"UI/Avatar",component:l,parameters:{layout:"centered"},decorators:[e=>o.createElement("div",{className:"flex items-center gap-7"},o.createElement(e,null))],argTypes:{size:{description:"defining the size of the avatar",control:"select",defaultValue:"md",options:["xs","sm","md","lg","xl","xxl"]},type:{description:"defining the type of the avatar",control:"select",defaultValue:"rounded",options:["rounded","square"]}},tags:["autodocs"]},f={name:"Default",args:{size:"md",type:"rounded"},render:e=>o.createElement(o.Fragment,null,o.createElement(l,{size:e.size,type:e.type},o.createElement(b,{src:"https://avatar.vercel.sh/randomValue?size=24"}),o.createElement(p,{size:e.size},"RV")),o.createElement(l,{size:e.size,type:e.type},o.createElement(p,{size:e.size},"RV")))};var v,A,y;f.parameters={...f.parameters,docs:{...(v=f.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(y=(A=f.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};const Q=["DefaultVariant"];export{f as DefaultVariant,Q as __namedExportsOrder,J as default};
