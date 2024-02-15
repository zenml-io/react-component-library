import{j as ae}from"./jsx-runtime-29545a09.js";import{a as te,c as ne,$ as se}from"./index-b5922a48.js";import{r as ie}from"./index-76fb7be0.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";const H=r=>typeof r=="boolean"?"".concat(r):r===0?"0":r,S=te,le=(r,t)=>e=>{var l;if((t==null?void 0:t.variants)==null)return S(r,e==null?void 0:e.class,e==null?void 0:e.className);const{variants:d,defaultVariants:n}=t,x=Object.keys(d).map(a=>{const s=e==null?void 0:e[a],o=n==null?void 0:n[a];if(s===null)return null;const i=H(s)||H(o);return d[a][i]}),z=e&&Object.entries(e).reduce((a,s)=>{let[o,i]=s;return i===void 0||(a[o]=i),a},{}),Z=t==null||(l=t.compoundVariants)===null||l===void 0?void 0:l.reduce((a,s)=>{let{class:o,className:i,...ee}=s;return Object.entries(ee).every(re=>{let[W,V]=re;return Array.isArray(V)?V.includes({...n,...z}[W]):{...n,...z}[W]===V})?[...a,o,i]:a},[]);return S(r,x,Z,e==null?void 0:e.class,e==null?void 0:e.className)},oe=le("transition-all rounded-md duration-200 flex gap-0.5 items-center font-semibold disabled:pointer-events-none",{variants:{emphasis:{bold:"",subtle:"",minimal:""},intent:{primary:"",secondary:"",danger:""},size:{sm:"px-1 h-6 text-text-sm",md:"px-2 h-7 text-text-md",lg:"px-4 h-8 text-text-lg"}},compoundVariants:[{emphasis:"bold",intent:"primary",class:"bg-primary-500 text-white hover:bg-primary-400 active:ring-[#E4D8FD] active:bg-primary-500 focus-visible:outline-none active:ring-4 disabled:bg-primary-50"},{emphasis:"subtle",intent:"primary",class:"border border-primary-400 text-primary-600 hover:bg-primary-50 active:bg-primary-100 active:ring-[#E4D8FD] active:ring-4 disabled:border-primary-100 disabled:text-primary-100"},{emphasis:"minimal",intent:"primary",class:"text-primary-600 hover:bg-primary-50 active:bg-primary-100 active:ring-[#E4D8FD] active:ring-4 disabled:text-primary-100"},{emphasis:"bold",intent:"secondary",class:"bg-neutral-200 text-theme-text-primary hover:bg-neutral-300 focus-visible:outline-none active:bg-neutral-400 active:ring-4 active:ring-[#E5E7EB] disabled:text-neutral-300"},{emphasis:"subtle",intent:"secondary",class:"border border-neutral-300 text-neutral-900 hover:bg-neutral-100 active:border-neutral-400 active:bg-neutral-300 active:ring-4 active:ring-neutral-100 disabled:border-neutral-300 disabled:text-neutral-300"},{emphasis:"minimal",intent:"secondary",class:"text-primary-900 hover:bg-neutral-200 active:bg-neutral-300 active:ring-4 active:ring-neutral-100 disabled:text-neutral-300"},{emphasis:"bold",intent:"danger",class:"bg-error-600 text-white hover:bg-error-500 active:ring-error-50 active:bg-error-600 focus-visible:outline-none active:ring-4 disabled:bg-error-100"},{emphasis:"subtle",intent:"danger",class:"border border-error-600 text-error-700 hover:bg-error-50 active:bg-error-100 active:ring-4 active:ring-error-50 disabled:border-error-100 disabled:text-error-100"},{emphasis:"minimal",intent:"danger",class:"text-error-700 hover:bg-error-50 active:bg-error-100 active:ring-4 active:ring-error-50 disabled:text-error-100"}],defaultVariants:{size:"sm",emphasis:"bold",intent:"primary"}}),f=ie.forwardRef(({intent:r,size:t,className:e,asChild:l,emphasis:d,...n},x)=>ae(l?se:"button",{ref:x,className:ne(oe({intent:r,size:t,emphasis:d}),e),...n}));f.displayName="Button";try{f.displayName="Button",f.__docgenInfo={description:"",displayName:"Button",props:{emphasis:{defaultValue:null,description:"",name:"emphasis",required:!1,type:{name:'"bold" | "subtle" | "minimal" | null'}},intent:{defaultValue:null,description:"",name:"intent",required:!1,type:{name:'"primary" | "secondary" | "danger" | null'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"sm" | "md" | "lg" | null'}},class:{defaultValue:null,description:"",name:"class",required:!1,type:{name:"ClassValue"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"ClassValue"}}}}}catch{}const ge={title:"Elements/Button",component:f,parameters:{layout:"centered"},argTypes:{onClick:{action:"clicked"},size:{description:"defining the size of the button",control:"select",defaultValue:"sm",options:["sm","md","lg"]},intent:{description:"defining the intent of the button",defaultValue:"primary",control:"select",options:["primary","secondary","danger"]},asChild:{description:"if true, the props of the button are getting merged to the first child",defaultValue:!1,control:"boolean"},emphasis:{description:"emphasis of the button",defaultValue:"bold",control:"select",options:["bold","subtle","minimal"]}},tags:["autodocs"]},c={args:{children:"Hello World",size:"sm",intent:"primary",emphasis:"bold"}},m={args:{children:"Hello World",size:"sm",intent:"secondary",emphasis:"bold"}},u={args:{children:"Hello World",size:"sm",intent:"danger",emphasis:"bold"}},p={args:{children:"Hello World",size:"sm",intent:"primary",emphasis:"bold"}},g={args:{children:"Hello World",size:"md",intent:"primary",emphasis:"bold"}},b={args:{children:"Hello World",size:"lg",intent:"primary",emphasis:"bold"}},h={args:{children:"Hello World",emphasis:"bold",size:"lg",intent:"primary"}},y={args:{children:"Hello World",size:"lg",emphasis:"subtle",intent:"primary"}},v={args:{children:"Hello World",size:"lg",intent:"primary",emphasis:"minimal"}};var N,C,E;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: "Hello World",
    size: "sm",
    intent: "primary",
    emphasis: "bold"
  }
}`,...(E=(C=c.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var _,B,D;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: "Hello World",
    size: "sm",
    intent: "secondary",
    emphasis: "bold"
  }
}`,...(D=(B=m.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var j,k,q;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: "Hello World",
    size: "sm",
    intent: "danger",
    emphasis: "bold"
  }
}`,...(q=(k=u.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var O,L,P;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: "Hello World",
    size: "sm",
    intent: "primary",
    emphasis: "bold"
  }
}`,...(P=(L=p.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var $,w,F;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    children: "Hello World",
    size: "md",
    intent: "primary",
    emphasis: "bold"
  }
}`,...(F=(w=g.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var A,M,T;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: "Hello World",
    size: "lg",
    intent: "primary",
    emphasis: "bold"
  }
}`,...(T=(M=b.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var I,K,R;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: "Hello World",
    emphasis: "bold",
    size: "lg",
    intent: "primary"
  }
}`,...(R=(K=h.parameters)==null?void 0:K.docs)==null?void 0:R.source}}};var U,G,J;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    children: "Hello World",
    size: "lg",
    emphasis: "subtle",
    intent: "primary"
  }
}`,...(J=(G=y.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Y;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    children: "Hello World",
    size: "lg",
    intent: "primary",
    emphasis: "minimal"
  }
}`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const be=["Primary","Secondary","Danger","Small","Large","ExtraLarge","Bold","Subtle","Minimal"];export{h as Bold,u as Danger,b as ExtraLarge,g as Large,v as Minimal,c as Primary,m as Secondary,p as Small,y as Subtle,be as __namedExportsOrder,ge as default};
//# sourceMappingURL=Button.stories-af4a0c37.js.map
