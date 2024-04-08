import{r as o,R as y}from"./index-OjgoNOWw.js";import{a as V,_ as g,c as Y}from"./index-wX0btgmn.js";import{a as z,c as X,b as W,$ as T}from"./index-bmUQ7Z1i.js";import{a as j,c as J}from"./index-uxD8nXqh.js";import{$ as Q}from"./index-ndrPm6go.js";import{$ as B,a as Z,b as ee,c as te}from"./index-wPbJdbgR.js";import{c as oe}from"./index-FlAvnLNT.js";import"./index-mQqIOHEI.js";const ne=o.forwardRef((e,n)=>o.createElement(V.span,g({},e,{ref:n,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),re=ne,[_,Me]=Y("Tooltip",[B]),k=B(),ae="TooltipProvider",ce=700,O="tooltip.open",[se,L]=_(ae),ie=e=>{const{__scopeTooltip:n,delayDuration:t=ce,skipDelayDuration:r=300,disableHoverableContent:a=!1,children:l}=e,[s,u]=o.useState(!0),c=o.useRef(!1),d=o.useRef(0);return o.useEffect(()=>{const i=d.current;return()=>window.clearTimeout(i)},[]),o.createElement(se,{scope:n,isOpenDelayed:s,delayDuration:t,onOpen:o.useCallback(()=>{window.clearTimeout(d.current),u(!1)},[]),onClose:o.useCallback(()=>{window.clearTimeout(d.current),d.current=window.setTimeout(()=>u(!0),r)},[r]),isPointerInTransitRef:c,onPointerInTransitChange:o.useCallback(i=>{c.current=i},[]),disableHoverableContent:a},l)},I="Tooltip",[le,R]=_(I),ue=e=>{const{__scopeTooltip:n,children:t,open:r,defaultOpen:a=!1,onOpenChange:l,disableHoverableContent:s,delayDuration:u}=e,c=L(I,e.__scopeTooltip),d=k(n),[i,f]=o.useState(null),m=X(),p=o.useRef(0),$=s??c.disableHoverableContent,b=u??c.delayDuration,v=o.useRef(!1),[h=!1,x]=W({prop:r,defaultProp:a,onChange:M=>{M?(c.onOpen(),document.dispatchEvent(new CustomEvent(O))):c.onClose(),l==null||l(M)}}),E=o.useMemo(()=>h?v.current?"delayed-open":"instant-open":"closed",[h]),C=o.useCallback(()=>{window.clearTimeout(p.current),v.current=!1,x(!0)},[x]),w=o.useCallback(()=>{window.clearTimeout(p.current),x(!1)},[x]),H=o.useCallback(()=>{window.clearTimeout(p.current),p.current=window.setTimeout(()=>{v.current=!0,x(!0)},b)},[b,x]);return o.useEffect(()=>()=>window.clearTimeout(p.current),[]),o.createElement(ee,d,o.createElement(le,{scope:n,contentId:m,open:h,stateAttribute:E,trigger:i,onTriggerChange:f,onTriggerEnter:o.useCallback(()=>{c.isOpenDelayed?H():C()},[c.isOpenDelayed,H,C]),onTriggerLeave:o.useCallback(()=>{$?w():window.clearTimeout(p.current)},[w,$]),onOpen:C,onClose:w,disableHoverableContent:$},t))},N="TooltipTrigger",de=o.forwardRef((e,n)=>{const{__scopeTooltip:t,...r}=e,a=R(N,t),l=L(N,t),s=k(t),u=o.useRef(null),c=j(n,u,a.onTriggerChange),d=o.useRef(!1),i=o.useRef(!1),f=o.useCallback(()=>d.current=!1,[]);return o.useEffect(()=>()=>document.removeEventListener("pointerup",f),[f]),o.createElement(te,g({asChild:!0},s),o.createElement(V.button,g({"aria-describedby":a.open?a.contentId:void 0,"data-state":a.stateAttribute},r,{ref:c,onPointerMove:T(e.onPointerMove,m=>{m.pointerType!=="touch"&&!i.current&&!l.isPointerInTransitRef.current&&(a.onTriggerEnter(),i.current=!0)}),onPointerLeave:T(e.onPointerLeave,()=>{a.onTriggerLeave(),i.current=!1}),onPointerDown:T(e.onPointerDown,()=>{d.current=!0,document.addEventListener("pointerup",f,{once:!0})}),onFocus:T(e.onFocus,()=>{d.current||a.onOpen()}),onBlur:T(e.onBlur,a.onClose),onClick:T(e.onClick,a.onClose)})))}),fe="TooltipPortal",[Ne,pe]=_(fe,{forceMount:void 0}),P="TooltipContent",$e=o.forwardRef((e,n)=>{const t=pe(P,e.__scopeTooltip),{forceMount:r=t.forceMount,side:a="top",...l}=e,s=R(P,e.__scopeTooltip);return o.createElement(z,{present:r||s.open},s.disableHoverableContent?o.createElement(q,g({side:a},l,{ref:n})):o.createElement(me,g({side:a},l,{ref:n})))}),me=o.forwardRef((e,n)=>{const t=R(P,e.__scopeTooltip),r=L(P,e.__scopeTooltip),a=o.useRef(null),l=j(n,a),[s,u]=o.useState(null),{trigger:c,onClose:d}=t,i=a.current,{onPointerInTransitChange:f}=r,m=o.useCallback(()=>{u(null),f(!1)},[f]),p=o.useCallback(($,b)=>{const v=$.currentTarget,h={x:$.clientX,y:$.clientY},x=be(h,v.getBoundingClientRect()),E=xe(h,x),C=he(b.getBoundingClientRect()),w=Te([...E,...C]);u(w),f(!0)},[f]);return o.useEffect(()=>()=>m(),[m]),o.useEffect(()=>{if(c&&i){const $=v=>p(v,i),b=v=>p(v,c);return c.addEventListener("pointerleave",$),i.addEventListener("pointerleave",b),()=>{c.removeEventListener("pointerleave",$),i.removeEventListener("pointerleave",b)}}},[c,i,p,m]),o.useEffect(()=>{if(s){const $=b=>{const v=b.target,h={x:b.clientX,y:b.clientY},x=(c==null?void 0:c.contains(v))||(i==null?void 0:i.contains(v)),E=!ge(h,s);x?m():E&&(m(),d())};return document.addEventListener("pointermove",$),()=>document.removeEventListener("pointermove",$)}},[c,i,s,d,m]),o.createElement(q,g({},e,{ref:l}))}),[ve,Se]=_(I,{isInside:!1}),q=o.forwardRef((e,n)=>{const{__scopeTooltip:t,children:r,"aria-label":a,onEscapeKeyDown:l,onPointerDownOutside:s,...u}=e,c=R(P,t),d=k(t),{onClose:i}=c;return o.useEffect(()=>(document.addEventListener(O,i),()=>document.removeEventListener(O,i)),[i]),o.useEffect(()=>{if(c.trigger){const f=m=>{const p=m.target;p!=null&&p.contains(c.trigger)&&i()};return window.addEventListener("scroll",f,{capture:!0}),()=>window.removeEventListener("scroll",f,{capture:!0})}},[c.trigger,i]),o.createElement(Q,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:l,onPointerDownOutside:s,onFocusOutside:f=>f.preventDefault(),onDismiss:i},o.createElement(Z,g({"data-state":c.stateAttribute},d,u,{ref:n,style:{...u.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"}}),o.createElement(J,null,r),o.createElement(ve,{scope:t,isInside:!0},o.createElement(re,{id:c.contentId,role:"tooltip"},a||r))))});function be(e,n){const t=Math.abs(n.top-e.y),r=Math.abs(n.bottom-e.y),a=Math.abs(n.right-e.x),l=Math.abs(n.left-e.x);switch(Math.min(t,r,a,l)){case l:return"left";case a:return"right";case t:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function xe(e,n,t=5){const r=[];switch(n){case"top":r.push({x:e.x-t,y:e.y+t},{x:e.x+t,y:e.y+t});break;case"bottom":r.push({x:e.x-t,y:e.y-t},{x:e.x+t,y:e.y-t});break;case"left":r.push({x:e.x+t,y:e.y-t},{x:e.x+t,y:e.y+t});break;case"right":r.push({x:e.x-t,y:e.y-t},{x:e.x-t,y:e.y+t});break}return r}function he(e){const{top:n,right:t,bottom:r,left:a}=e;return[{x:a,y:n},{x:t,y:n},{x:t,y:r},{x:a,y:r}]}function ge(e,n){const{x:t,y:r}=e;let a=!1;for(let l=0,s=n.length-1;l<n.length;s=l++){const u=n[l].x,c=n[l].y,d=n[s].x,i=n[s].y;c>r!=i>r&&t<(d-u)*(r-c)/(i-c)+u&&(a=!a)}return a}function Te(e){const n=e.slice();return n.sort((t,r)=>t.x<r.x?-1:t.x>r.x?1:t.y<r.y?-1:t.y>r.y?1:0),ye(n)}function ye(e){if(e.length<=1)return e.slice();const n=[];for(let r=0;r<e.length;r++){const a=e[r];for(;n.length>=2;){const l=n[n.length-1],s=n[n.length-2];if((l.x-s.x)*(a.y-s.y)>=(l.y-s.y)*(a.x-s.x))n.pop();else break}n.push(a)}n.pop();const t=[];for(let r=e.length-1;r>=0;r--){const a=e[r];for(;t.length>=2;){const l=t[t.length-1],s=t[t.length-2];if((l.x-s.x)*(a.y-s.y)>=(l.y-s.y)*(a.x-s.x))t.pop();else break}t.push(a)}return t.pop(),n.length===1&&t.length===1&&n[0].x===t[0].x&&n[0].y===t[0].y?n:n.concat(t)}const Ee=ie,Ce=ue,we=de,K=$e,Pe=Ee,U=Ce,De=we,A=o.forwardRef(({className:e,sideOffset:n=4,...t},r)=>o.createElement(K,{ref:r,sideOffset:n,className:oe("rounded-md bg-theme-text-primary px-3 py-2 text-text-xs text-theme-text-negative shadow-lg animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...t}));A.displayName=K.displayName;A.__docgenInfo={description:"",methods:[],props:{sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}};const Ge={title:"Elements/Tooltip",component:U,parameters:{layout:"centered"},decorators:[e=>y.createElement("div",{className:"w-[400px] flex items-center justify-center h-[200px]"},y.createElement(e,null))],tags:["autodocs"]},D={name:"Default",render:()=>y.createElement(Pe,null,y.createElement(U,{delayDuration:200},y.createElement(De,null,"Hover me!"),y.createElement(A,null,"I am a tooltip")))};var S,G,F;D.parameters={...D.parameters,docs:{...(S=D.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Default",
  render: () => <TooltipProvider>
            <Tooltip delayDuration={200}>
                <TooltipTrigger>Hover me!</TooltipTrigger>
                <TooltipContent>I am a tooltip</TooltipContent>
            </Tooltip>
        </TooltipProvider>
}`,...(F=(G=D.parameters)==null?void 0:G.docs)==null?void 0:F.source}}};const Fe=["DefaultVariant"];export{D as DefaultVariant,Fe as __namedExportsOrder,Ge as default};
