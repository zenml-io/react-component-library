import{R as Le,P as Ve,O as Fe,a as Ke}from"./index-k_fsUSc7.js";import{r as a}from"./index-yUhCOHB4.js";import{P as I}from"./index-DQXGlRzm.js";import{u as P}from"./index-BlA1p_hj.js";import{c as V}from"./index-DcuGh8cT.js";import"./Dialog-C-BnFxAF.js";var ve=1,je=.9,Oe=.8,qe=.17,Q=.1,Z=.999,Ge=.9999,Ue=.99,ze=/[\\\/_+.#"@\[\(\{&]/,He=/[\\\/_+.#"@\[\(\{&]/g,Be=/[\s-]/,be=/[\s-]/g;function re(e,r,t,d,l,u,s){if(u===r.length)return l===e.length?ve:Ue;var p=`${l},${u}`;if(s[p]!==void 0)return s[p];for(var g=d.charAt(u),m=t.indexOf(g,l),c=0,v,k,x,C;m>=0;)v=re(e,r,t,d,m+1,u+1,s),v>c&&(m===l?v*=ve:ze.test(e.charAt(m-1))?(v*=Oe,x=e.slice(l,m-1).match(He),x&&l>0&&(v*=Math.pow(Z,x.length))):Be.test(e.charAt(m-1))?(v*=je,C=e.slice(l,m-1).match(be),C&&l>0&&(v*=Math.pow(Z,C.length))):(v*=qe,l>0&&(v*=Math.pow(Z,m-l))),e.charAt(m)!==r.charAt(u)&&(v*=Ge)),(v<Q&&t.charAt(m-1)===d.charAt(u+1)||d.charAt(u+1)===d.charAt(u)&&t.charAt(m-1)!==d.charAt(u))&&(k=re(e,r,t,d,m+1,u+2,s),k*Q>v&&(v=k*Q)),v>c&&(c=v),m=t.indexOf(g,m+1);return s[p]=c,c}function he(e){return e.toLowerCase().replace(be," ")}function Te(e,r,t){return e=t&&t.length>0?`${e+" "+t.join(" ")}`:e,re(e,r,he(e),he(r),0,0,{})}var ye={exports:{}},we={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L=a;function We(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Je=typeof Object.is=="function"?Object.is:We,Xe=L.useState,Ye=L.useEffect,Qe=L.useLayoutEffect,Ze=L.useDebugValue;function et(e,r){var t=r(),d=Xe({inst:{value:t,getSnapshot:r}}),l=d[0].inst,u=d[1];return Qe(function(){l.value=t,l.getSnapshot=r,ee(l)&&u({inst:l})},[e,t,r]),Ye(function(){return ee(l)&&u({inst:l}),e(function(){ee(l)&&u({inst:l})})},[e]),Ze(t),t}function ee(e){var r=e.getSnapshot;e=e.value;try{var t=r();return!Je(e,t)}catch{return!0}}function tt(e,r){return r()}var rt=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?tt:et;we.useSyncExternalStore=L.useSyncExternalStore!==void 0?L.useSyncExternalStore:rt;ye.exports=we;var nt=ye.exports,j='[cmdk-group=""]',te='[cmdk-group-items=""]',at='[cmdk-group-heading=""]',ae='[cmdk-item=""]',ge=`${ae}:not([aria-disabled="true"])`,ne="cmdk-item-select",A="data-value",lt=(e,r,t)=>Te(e,r,t),Ee=a.createContext(void 0),q=()=>a.useContext(Ee),xe=a.createContext(void 0),le=()=>a.useContext(xe),Se=a.createContext(void 0),ke=a.forwardRef((e,r)=>{let t=D(()=>{var n,i;return{search:"",value:(i=(n=e.value)!=null?n:e.defaultValue)!=null?i:"",filtered:{count:0,items:new Map,groups:new Set}}}),d=D(()=>new Set),l=D(()=>new Map),u=D(()=>new Map),s=D(()=>new Set),p=Ce(e),{label:g,children:m,value:c,onValueChange:v,filter:k,shouldFilter:x,loop:C,disablePointerSelection:H=!1,vimBindings:R=!0,...G}=e,oe=P(),ue=P(),ie=P(),N=a.useRef(null),y=ht();M(()=>{if(c!==void 0){let n=c.trim();t.current.value=n,E.emit()}},[c]),M(()=>{y(6,de)},[]);let E=a.useMemo(()=>({subscribe:n=>(s.current.add(n),()=>s.current.delete(n)),snapshot:()=>t.current,setState:(n,i,f)=>{var o,h,b;if(!Object.is(t.current[n],i)){if(t.current[n]=i,n==="search")J(),T(),y(1,W);else if(n==="value"&&(f||y(5,de),((o=p.current)==null?void 0:o.value)!==void 0)){let S=i??"";(b=(h=p.current).onValueChange)==null||b.call(h,S);return}E.emit()}},emit:()=>{s.current.forEach(n=>n())}}),[]),B=a.useMemo(()=>({value:(n,i,f)=>{var o;i!==((o=u.current.get(n))==null?void 0:o.value)&&(u.current.set(n,{value:i,keywords:f}),t.current.filtered.items.set(n,ce(i,f)),y(2,()=>{T(),E.emit()}))},item:(n,i)=>(d.current.add(n),i&&(l.current.has(i)?l.current.get(i).add(n):l.current.set(i,new Set([n]))),y(3,()=>{J(),T(),t.current.value||W(),E.emit()}),()=>{u.current.delete(n),d.current.delete(n),t.current.filtered.items.delete(n);let f=F();y(4,()=>{J(),(f==null?void 0:f.getAttribute("id"))===n&&W(),E.emit()})}),group:n=>(l.current.has(n)||l.current.set(n,new Set),()=>{u.current.delete(n),l.current.delete(n)}),filter:()=>p.current.shouldFilter,label:g||e["aria-label"],getDisablePointerSelection:()=>p.current.disablePointerSelection,listId:oe,inputId:ie,labelId:ue,listInnerRef:N}),[]);function ce(n,i){var f,o;let h=(o=(f=p.current)==null?void 0:f.filter)!=null?o:lt;return n?h(n,t.current.search,i):0}function T(){if(!t.current.search||p.current.shouldFilter===!1)return;let n=t.current.filtered.items,i=[];t.current.filtered.groups.forEach(o=>{let h=l.current.get(o),b=0;h.forEach(S=>{let $=n.get(S);b=Math.max($,b)}),i.push([o,b])});let f=N.current;K().sort((o,h)=>{var b,S;let $=o.getAttribute("id"),U=h.getAttribute("id");return((b=n.get(U))!=null?b:0)-((S=n.get($))!=null?S:0)}).forEach(o=>{let h=o.closest(te);h?h.appendChild(o.parentElement===h?o:o.closest(`${te} > *`)):f.appendChild(o.parentElement===f?o:o.closest(`${te} > *`))}),i.sort((o,h)=>h[1]-o[1]).forEach(o=>{var h;let b=(h=N.current)==null?void 0:h.querySelector(`${j}[${A}="${encodeURIComponent(o[0])}"]`);b==null||b.parentElement.appendChild(b)})}function W(){let n=K().find(f=>f.getAttribute("aria-disabled")!=="true"),i=n==null?void 0:n.getAttribute(A);E.setState("value",i||void 0)}function J(){var n,i,f,o;if(!t.current.search||p.current.shouldFilter===!1){t.current.filtered.count=d.current.size;return}t.current.filtered.groups=new Set;let h=0;for(let b of d.current){let S=(i=(n=u.current.get(b))==null?void 0:n.value)!=null?i:"",$=(o=(f=u.current.get(b))==null?void 0:f.keywords)!=null?o:[],U=ce(S,$);t.current.filtered.items.set(b,U),U>0&&h++}for(let[b,S]of l.current)for(let $ of S)if(t.current.filtered.items.get($)>0){t.current.filtered.groups.add(b);break}t.current.filtered.count=h}function de(){var n,i,f;let o=F();o&&(((n=o.parentElement)==null?void 0:n.firstChild)===o&&((f=(i=o.closest(j))==null?void 0:i.querySelector(at))==null||f.scrollIntoView({block:"nearest"})),o.scrollIntoView({block:"nearest"}))}function F(){var n;return(n=N.current)==null?void 0:n.querySelector(`${ae}[aria-selected="true"]`)}function K(){var n;return Array.from(((n=N.current)==null?void 0:n.querySelectorAll(ge))||[])}function X(n){let i=K()[n];i&&E.setState("value",i.getAttribute(A))}function Y(n){var i;let f=F(),o=K(),h=o.findIndex(S=>S===f),b=o[h+n];(i=p.current)!=null&&i.loop&&(b=h+n<0?o[o.length-1]:h+n===o.length?o[0]:o[h+n]),b&&E.setState("value",b.getAttribute(A))}function se(n){let i=F(),f=i==null?void 0:i.closest(j),o;for(;f&&!o;)f=n>0?pt(f,j):vt(f,j),o=f==null?void 0:f.querySelector(ge);o?E.setState("value",o.getAttribute(A)):Y(n)}let fe=()=>X(K().length-1),me=n=>{n.preventDefault(),n.metaKey?fe():n.altKey?se(1):Y(1)},pe=n=>{n.preventDefault(),n.metaKey?X(0):n.altKey?se(-1):Y(-1)};return a.createElement(I.div,{ref:r,tabIndex:-1,...G,"cmdk-root":"",onKeyDown:n=>{var i;if((i=G.onKeyDown)==null||i.call(G,n),!n.defaultPrevented)switch(n.key){case"n":case"j":{R&&n.ctrlKey&&me(n);break}case"ArrowDown":{me(n);break}case"p":case"k":{R&&n.ctrlKey&&pe(n);break}case"ArrowUp":{pe(n);break}case"Home":{n.preventDefault(),X(0);break}case"End":{n.preventDefault(),fe();break}case"Enter":if(!n.nativeEvent.isComposing&&n.keyCode!==229){n.preventDefault();let f=F();if(f){let o=new Event(ne);f.dispatchEvent(o)}}}}},a.createElement("label",{"cmdk-label":"",htmlFor:B.inputId,id:B.labelId,style:bt},g),z(e,n=>a.createElement(xe.Provider,{value:E},a.createElement(Ee.Provider,{value:B},n))))}),ot=a.forwardRef((e,r)=>{var t,d;let l=P(),u=a.useRef(null),s=a.useContext(Se),p=q(),g=Ce(e),m=(d=(t=g.current)==null?void 0:t.forceMount)!=null?d:s==null?void 0:s.forceMount;M(()=>{if(!m)return p.item(l,s==null?void 0:s.id)},[m]);let c=Ie(l,u,[e.value,e.children,u],e.keywords),v=le(),k=_(y=>y.value&&y.value===c.current),x=_(y=>m||p.filter()===!1?!0:y.search?y.filtered.items.get(l)>0:!0);a.useEffect(()=>{let y=u.current;if(!(!y||e.disabled))return y.addEventListener(ne,C),()=>y.removeEventListener(ne,C)},[x,e.onSelect,e.disabled]);function C(){var y,E;H(),(E=(y=g.current).onSelect)==null||E.call(y,c.current)}function H(){v.setState("value",c.current,!0)}if(!x)return null;let{disabled:R,value:G,onSelect:oe,forceMount:ue,keywords:ie,...N}=e;return a.createElement(I.div,{ref:O([u,r]),...N,id:l,"cmdk-item":"",role:"option","aria-disabled":!!R,"aria-selected":!!k,"data-disabled":!!R,"data-selected":!!k,onPointerMove:R||p.getDisablePointerSelection()?void 0:H,onClick:R?void 0:C},e.children)}),ut=a.forwardRef((e,r)=>{let{heading:t,children:d,forceMount:l,...u}=e,s=P(),p=a.useRef(null),g=a.useRef(null),m=P(),c=q(),v=_(x=>l||c.filter()===!1?!0:x.search?x.filtered.groups.has(s):!0);M(()=>c.group(s),[]),Ie(s,p,[e.value,e.heading,g]);let k=a.useMemo(()=>({id:s,forceMount:l}),[l]);return a.createElement(I.div,{ref:O([p,r]),...u,"cmdk-group":"",role:"presentation",hidden:v?void 0:!0},t&&a.createElement("div",{ref:g,"cmdk-group-heading":"","aria-hidden":!0,id:m},t),z(e,x=>a.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":t?m:void 0},a.createElement(Se.Provider,{value:k},x))))}),it=a.forwardRef((e,r)=>{let{alwaysRender:t,...d}=e,l=a.useRef(null),u=_(s=>!s.search);return!t&&!u?null:a.createElement(I.div,{ref:O([l,r]),...d,"cmdk-separator":"",role:"separator"})}),ct=a.forwardRef((e,r)=>{let{onValueChange:t,...d}=e,l=e.value!=null,u=le(),s=_(c=>c.search),p=_(c=>c.value),g=q(),m=a.useMemo(()=>{var c;let v=(c=g.listInnerRef.current)==null?void 0:c.querySelector(`${ae}[${A}="${encodeURIComponent(p)}"]`);return v==null?void 0:v.getAttribute("id")},[]);return a.useEffect(()=>{e.value!=null&&u.setState("search",e.value)},[e.value]),a.createElement(I.input,{ref:r,...d,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":g.listId,"aria-labelledby":g.labelId,"aria-activedescendant":m,id:g.inputId,type:"text",value:l?e.value:s,onChange:c=>{l||u.setState("search",c.target.value),t==null||t(c.target.value)}})}),dt=a.forwardRef((e,r)=>{let{children:t,label:d="Suggestions",...l}=e,u=a.useRef(null),s=a.useRef(null),p=q();return a.useEffect(()=>{if(s.current&&u.current){let g=s.current,m=u.current,c,v=new ResizeObserver(()=>{c=requestAnimationFrame(()=>{let k=g.offsetHeight;m.style.setProperty("--cmdk-list-height",k.toFixed(1)+"px")})});return v.observe(g),()=>{cancelAnimationFrame(c),v.unobserve(g)}}},[]),a.createElement(I.div,{ref:O([u,r]),...l,"cmdk-list":"",role:"listbox","aria-label":d,id:p.listId},z(e,g=>a.createElement("div",{ref:O([s,p.listInnerRef]),"cmdk-list-sizer":""},g)))}),st=a.forwardRef((e,r)=>{let{open:t,onOpenChange:d,overlayClassName:l,contentClassName:u,container:s,...p}=e;return a.createElement(Le,{open:t,onOpenChange:d},a.createElement(Ve,{container:s},a.createElement(Fe,{"cmdk-overlay":"",className:l}),a.createElement(Ke,{"aria-label":e.label,"cmdk-dialog":"",className:u},a.createElement(ke,{ref:r,...p}))))}),ft=a.forwardRef((e,r)=>_(t=>t.filtered.count===0)?a.createElement(I.div,{ref:r,...e,"cmdk-empty":"",role:"presentation"}):null),mt=a.forwardRef((e,r)=>{let{progress:t,children:d,label:l="Loading...",...u}=e;return a.createElement(I.div,{ref:r,...u,"cmdk-loading":"",role:"progressbar","aria-valuenow":t,"aria-valuemin":0,"aria-valuemax":100,"aria-label":l},z(e,s=>a.createElement("div",{"aria-hidden":!0},s)))}),w=Object.assign(ke,{List:dt,Item:ot,Input:ct,Group:ut,Separator:it,Dialog:st,Empty:ft,Loading:mt});function pt(e,r){let t=e.nextElementSibling;for(;t;){if(t.matches(r))return t;t=t.nextElementSibling}}function vt(e,r){let t=e.previousElementSibling;for(;t;){if(t.matches(r))return t;t=t.previousElementSibling}}function Ce(e){let r=a.useRef(e);return M(()=>{r.current=e}),r}var M=typeof window>"u"?a.useEffect:a.useLayoutEffect;function D(e){let r=a.useRef();return r.current===void 0&&(r.current=e()),r}function O(e){return r=>{e.forEach(t=>{typeof t=="function"?t(r):t!=null&&(t.current=r)})}}function _(e){let r=le(),t=()=>e(r.snapshot());return nt.useSyncExternalStore(r.subscribe,t,t)}function Ie(e,r,t,d=[]){let l=a.useRef(),u=q();return M(()=>{var s;let p=(()=>{var m;for(let c of t){if(typeof c=="string")return c.trim();if(typeof c=="object"&&"current"in c)return c.current?(m=c.current.textContent)==null?void 0:m.trim():l.current}})(),g=d.map(m=>m.trim());u.value(e,p,g),(s=r.current)==null||s.setAttribute(A,p),l.current=p}),l}var ht=()=>{let[e,r]=a.useState(),t=D(()=>new Map);return M(()=>{t.current.forEach(d=>d()),t.current=new Map},[e]),(d,l)=>{t.current.set(d,l),r({})}};function gt(e){let r=e.type;return typeof r=="function"?r(e.props):"render"in r?r.render(e.props):e}function z({asChild:e,children:r},t){return e&&a.isValidElement(r)?a.cloneElement(gt(r),{ref:r.ref},t(r.props.children)):t(r)}var bt={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};const Re=a.forwardRef(({className:e,...r},t)=>a.createElement(w,{ref:t,className:V("bg-theme-surface-primary text-theme-text-primary flex h-full w-full flex-col overflow-hidden rounded-md",e),...r}));Re.displayName=w.displayName;const Ne=a.forwardRef(({...e},r)=>a.createElement("div",{className:"flex items-center p-2 [&>div]:w-full","cmdk-input-wrapper":""},a.createElement(w.Input,{asChild:!0,ref:r,...e})));Ne.displayName=w.Input.displayName;const $e=a.forwardRef(({className:e,...r},t)=>a.createElement(w.List,{ref:t,className:V("overflow-y-auto overflow-x-hidden",e),...r}));$e.displayName=w.List.displayName;const Ae=a.forwardRef((e,r)=>a.createElement(w.Empty,{ref:r,className:"py-2 text-center text-text-sm text-theme-text-secondary",...e}));Ae.displayName=w.Empty.displayName;const Me=a.forwardRef(({className:e,...r},t)=>a.createElement(w.Group,{ref:t,className:V("text-theme-text-primary [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-text-sm [&_[cmdk-group-heading]]:text-theme-text-secondary overflow-hidden [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-semibold",e),...r}));Me.displayName=w.Group.displayName;const _e=a.forwardRef(({className:e,...r},t)=>a.createElement(w.Separator,{ref:t,className:V("-mx-1 h-[1px] bg-theme-border-moderate",e),...r}));_e.displayName=w.Separator.displayName;const De=a.forwardRef(({className:e,...r},t)=>a.createElement(w.Item,{ref:t,className:V("text-text-sm relative flex cursor-default select-none items-center gap-2 rounded-sm py-2 pl-2 pr-3 outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-primary-25 data-[selected=true]:text-theme-text-brand data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",e),...r}));De.displayName=w.Item.displayName;const Pe=({className:e,...r})=>a.createElement("span",{className:V("text-text- text-muted-foreground ml-auto tracking-widest",e),...r});Pe.displayName="CommandShortcut";Re.__docgenInfo={description:"",methods:[]};Ae.__docgenInfo={description:"",methods:[]};Me.__docgenInfo={description:"",methods:[]};Ne.__docgenInfo={description:"",methods:[]};De.__docgenInfo={description:"",methods:[]};$e.__docgenInfo={description:"",methods:[]};_e.__docgenInfo={description:"",methods:[]};Pe.__docgenInfo={description:"",methods:[],displayName:"CommandShortcut"};export{Re as C,Ne as a,$e as b,Ae as c,Me as d,De as e,_e as f,Pe as g};
