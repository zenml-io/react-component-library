import{r as e}from"./index-OjgoNOWw.js";import{$ as D,a as L,_ as v}from"./index-ZtSIjf74.js";import{a as O}from"./index-6Pk-3rAJ.js";import{a as q,$ as y}from"./index-_WWFXJ7k.js";import{$ as j}from"./index-XmoB3Z09.js";import{$ as A}from"./index-U3uP7LC4.js";import{$ as K}from"./index-RkI2KSEf.js";import{c as w}from"./index-FlAvnLNT.js";import"./index-mQqIOHEI.js";import"./index-5NtMBFis.js";const I="Checkbox",[T,ce]=D(I),[H,X]=T(I),z=e.forwardRef((t,n)=>{const{__scopeCheckbox:r,name:d,checked:u,defaultChecked:c,required:b,disabled:i,value:l="on",onCheckedChange:$,...g}=t,[o,h]=e.useState(null),M=O(n,a=>h(a)),k=e.useRef(!1),E=o?!!o.closest("form"):!0,[f=!1,x]=q({prop:u,defaultProp:c,onChange:$}),B=e.useRef(f);return e.useEffect(()=>{const a=o==null?void 0:o.form;if(a){const p=()=>x(B.current);return a.addEventListener("reset",p),()=>a.removeEventListener("reset",p)}},[o,x]),e.createElement(H,{scope:r,state:f,disabled:i},e.createElement(L.button,v({type:"button",role:"checkbox","aria-checked":s(f)?"mixed":f,"aria-required":b,"data-state":N(f),"data-disabled":i?"":void 0,disabled:i,value:l},g,{ref:M,onKeyDown:y(t.onKeyDown,a=>{a.key==="Enter"&&a.preventDefault()}),onClick:y(t.onClick,a=>{x(p=>s(p)?!0:!p),E&&(k.current=a.isPropagationStopped(),k.current||a.stopPropagation())})})),E&&e.createElement(Z,{control:o,bubbles:!k.current,name:d,value:l,checked:f,required:b,disabled:i,style:{transform:"translateX(-100%)"}}))}),F="CheckboxIndicator",V=e.forwardRef((t,n)=>{const{__scopeCheckbox:r,forceMount:d,...u}=t,c=X(F,r);return e.createElement(K,{present:d||s(c.state)||c.state===!0},e.createElement(L.span,v({"data-state":N(c.state),"data-disabled":c.disabled?"":void 0},u,{ref:n,style:{pointerEvents:"none",...t.style}})))}),Z=t=>{const{control:n,checked:r,bubbles:d=!0,...u}=t,c=e.useRef(null),b=j(r),i=A(n);return e.useEffect(()=>{const l=c.current,$=window.HTMLInputElement.prototype,o=Object.getOwnPropertyDescriptor($,"checked").set;if(b!==r&&o){const h=new Event("click",{bubbles:d});l.indeterminate=s(r),o.call(l,s(r)?!1:r),l.dispatchEvent(h)}},[b,r,d]),e.createElement("input",v({type:"checkbox","aria-hidden":!0,defaultChecked:s(r)?!1:r},u,{tabIndex:-1,ref:c,style:{...t.style,...i,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function s(t){return t==="indeterminate"}function N(t){return s(t)?"indeterminate":t?"checked":"unchecked"}const S=z,G=V,C=e.forwardRef(({className:t,...n},r)=>e.createElement(S,{ref:r,className:w(["flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] border border-theme-border-bold bg-theme-surface-primary","hover:ring-4 hover:ring-theme-surface-tertiary","focus:outline-none focus:ring-4 focus:ring-theme-surface-tertiary","data-[state=checked]:border-theme-surface-strong data-[state=checked]:bg-theme-surface-strong data-[state=checked]:active:border-primary-200 data-[state=checked]:active:bg-primary-200","active:bg-theme-surface-tertiary","disabled:pointer-events-none disabled:border-neutral-300 disabled:data-[state=checked]:border-neutral-300 disabled:data-[state=checked]:bg-neutral-300"],t),...n},e.createElement(G,{className:w("flex items-center justify-center text-current")},e.createElement("svg",{className:"w-2 h-2 fill-white",viewBox:"0 0 12 10",fill:"black",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.28267 6.34605L2.09696 4.09419L0.666677 5.55738L4.28267 9.28281L11.3333 2.01874L9.91314 0.555542L4.28267 6.34605Z"})))));C.displayName=S.displayName;C.__docgenInfo={description:"",methods:[]};const ne={title:"Elements/Checkbox",component:C,argTypes:{disabled:{control:"boolean",defaultValue:!1,description:"if true, the input is disabled"}},parameters:{layout:"centered"},tags:["autodocs"]},m={name:"Checkbox",args:{checked:!0,disabled:!1}};var _,R,P;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Checkbox",
  args: {
    checked: true,
    disabled: false
  }
}`,...(P=(R=m.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};const se=["small"];export{se as __namedExportsOrder,ne as default,m as small};