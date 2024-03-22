import{r,R as l}from"./index-DogsOklH.js";import"./index-MroJ3egt.js";import{$ as k}from"./index-EBIJ8zB7.js";import{c as z}from"./index-polp_dyw.js";import{c as h}from"./index-FlAvnLNT.js";function m(){return m=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},m.apply(this,arguments)}function F(e,a=[]){let t=[];function n(d,c){const s=r.createContext(c),i=t.length;t=[...t,c];function u(p){const{scope:f,children:x,...v}=p,P=(f==null?void 0:f[e][i])||s,M=r.useMemo(()=>v,Object.values(v));return r.createElement(P.Provider,{value:M},x)}function _(p,f){const x=(f==null?void 0:f[e][i])||s,v=r.useContext(x);if(v)return v;if(c!==void 0)return c;throw new Error(`\`${p}\` must be used within \`${d}\``)}return u.displayName=d+"Provider",[u,_]}const o=()=>{const d=t.map(c=>r.createContext(c));return function(s){const i=(s==null?void 0:s[e])||d;return r.useMemo(()=>({[`__scope${e}`]:{...s,[e]:i}}),[s,i])}};return o.scopeName=e,[n,O(o,...a)]}function O(...e){const a=e[0];if(e.length===1)return a;const t=()=>{const n=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(d){const c=n.reduce((s,{useScope:i,scopeName:u})=>{const p=i(d)[`__scope${u}`];return{...s,...p}},{});return r.useMemo(()=>({[`__scope${a.scopeName}`]:c}),[c])}};return t.scopeName=a.scopeName,t}function T(e){const a=r.useRef(e);return r.useEffect(()=>{a.current=e}),r.useMemo(()=>(...t)=>{var n;return(n=a.current)===null||n===void 0?void 0:n.call(a,...t)},[])}const C=globalThis!=null&&globalThis.document?r.useLayoutEffect:()=>{},j=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],A=j.reduce((e,a)=>{const t=r.forwardRef((n,o)=>{const{asChild:d,...c}=n,s=d?k:a;return r.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),r.createElement(s,m({},c,{ref:o}))});return t.displayName=`Primitive.${a}`,{...e,[a]:t}},{}),R="Avatar",[D,ae]=F(R),[q,N]=D(R),B=r.forwardRef((e,a)=>{const{__scopeAvatar:t,...n}=e,[o,d]=r.useState("idle");return r.createElement(q,{scope:t,imageLoadingStatus:o,onImageLoadingStatusChange:d},r.createElement(A.span,m({},n,{ref:a})))}),G="AvatarImage",H=r.forwardRef((e,a)=>{const{__scopeAvatar:t,src:n,onLoadingStatusChange:o=()=>{},...d}=e,c=N(G,t),s=J(n),i=T(u=>{o(u),c.onImageLoadingStatusChange(u)});return C(()=>{s!=="idle"&&i(s)},[s,i]),s==="loaded"?r.createElement(A.img,m({},d,{ref:a,src:n})):null}),K="AvatarFallback",U=r.forwardRef((e,a)=>{const{__scopeAvatar:t,delayMs:n,...o}=e,d=N(K,t),[c,s]=r.useState(n===void 0);return r.useEffect(()=>{if(n!==void 0){const i=window.setTimeout(()=>s(!0),n);return()=>window.clearTimeout(i)}},[n]),c&&d.imageLoadingStatus!=="loaded"?r.createElement(A.span,m({},o,{ref:a})):null});function J(e){const[a,t]=r.useState("idle");return C(()=>{if(!e){t("error");return}let n=!0;const o=new window.Image,d=c=>()=>{n&&t(c)};return t("loading"),o.onload=d("loaded"),o.onerror=d("error"),o.src=e,()=>{n=!1}},[e]),a}const L=B,I=H,V=U,Q=z("relative flex shrink-0 overflow-hidden",{variants:{type:{square:"rounded-md",rounded:"rounded-rounded"},size:{xs:"w-3 h-3",sm:"w-5 h-5",md:"w-6 h-6",lg:"w-7 h-7",xl:"w-9 h-9",xxl:"w-12 h-12"}},defaultVariants:{type:"rounded",size:"lg"}}),W=z("flex aspect-square items-center justify-center bg-primary-50 text-theme-text-brand font-semibold uppercase",{variants:{size:{xs:"text-text-xs",sm:"text-text-xs",md:"text-text-md",lg:"text-text-lg",xl:"text-display-sm",xxl:"text-display-md"}}}),$=r.forwardRef(({className:e,size:a,type:t,...n},o)=>r.createElement(L,{ref:o,className:h(Q({size:a,type:t}),e),...n}));$.displayName=L.displayName;const y=r.forwardRef(({className:e,...a},t)=>r.createElement(I,{ref:t,className:h("aspect-square h-full w-full",e),...a}));y.displayName=I.displayName;const g=r.forwardRef(({className:e,size:a,...t},n)=>r.createElement(V,{ref:n,className:h(W({size:a}),e),...t}));g.displayName=V.displayName;$.__docgenInfo={description:"",methods:[]};y.__docgenInfo={description:"",methods:[]};g.__docgenInfo={description:"",methods:[]};const re={title:"UI/Avatar",component:$,parameters:{layout:"centered"},decorators:[e=>l.createElement("div",{className:"flex items-center gap-7"},l.createElement(e,null))],argTypes:{size:{description:"defining the size of the avatar",control:"select",defaultValue:"md",options:["xs","sm","md","lg","xl","xxl"]},type:{description:"defining the type of the avatar",control:"select",defaultValue:"rounded",options:["rounded","square"]}},tags:["autodocs"]},b={name:"Default",args:{size:"md",type:"rounded"},render:e=>l.createElement(l.Fragment,null,l.createElement($,{size:e.size,type:e.type},l.createElement(y,{src:"https://avatar.vercel.sh/randomValue?size=24"}),l.createElement(g,{size:e.size},"RV")),l.createElement($,{size:e.size,type:e.type},l.createElement(g,{size:e.size},"RV")))};var E,S,w;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(w=(S=b.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const ne=["DefaultVariant"];export{b as DefaultVariant,ne as __namedExportsOrder,re as default};
