import{r}from"./index-yUhCOHB4.js";import{u as F,S as St,c as he,a as Nt}from"./index-CLdCKqIz.js";import{c as v,u as Tt}from"./index-D4ukzbp3.js";import{c as ge,P as T,d as At}from"./index-DQXGlRzm.js";import{c as Ot}from"./index-C2ukzIhV.js";import{u as jt}from"./index-DxuuQHv8.js";import{D as kt}from"./index-DLnfOhia.js";import{h as Lt,u as Ft,R as Gt,F as Kt}from"./index-9HIxi_yA.js";import{c as xe,R as $t,A as Ut,C as Bt,a as Vt}from"./index-BUbqCghI.js";import{P as Xt}from"./index-C1ppjEGk.js";import{P as H}from"./index-Bt0LB2xV.js";import{c as _e,I as Yt,R as zt}from"./index-BpdWl5fv.js";import{a as Ce}from"./index-Da_IA54p.js";import{j as c}from"./jsx-runtime-DBhXMc9n.js";import{u as ve}from"./index-BlA1p_hj.js";import{c as b}from"./index-DcuGh8cT.js";var te=["Enter"," "],Ht=["ArrowDown","PageUp","Home"],Re=["ArrowUp","PageDown","End"],Wt=[...Ht,...Re],qt={ltr:[...te,"ArrowRight"],rtl:[...te,"ArrowLeft"]},Zt={ltr:["ArrowLeft"],rtl:["ArrowRight"]},G="Menu",[k,Jt,Qt]=Ot(G),[I,be]=ge(G,[Qt,xe,_e]),W=xe(),Ee=_e(),[en,D]=I(G),[tn,K]=I(G),ye=e=>{const{__scopeMenu:n,open:t=!1,children:o,dir:a,onOpenChange:s,modal:u=!0}=e,l=W(n),[m,M]=r.useState(null),p=r.useRef(!1),i=Ce(s),f=jt(a);return r.useEffect(()=>{const h=()=>{p.current=!0,document.addEventListener("pointerdown",w,{capture:!0,once:!0}),document.addEventListener("pointermove",w,{capture:!0,once:!0})},w=()=>p.current=!1;return document.addEventListener("keydown",h,{capture:!0}),()=>{document.removeEventListener("keydown",h,{capture:!0}),document.removeEventListener("pointerdown",w,{capture:!0}),document.removeEventListener("pointermove",w,{capture:!0})}},[]),c.jsx($t,{...l,children:c.jsx(en,{scope:n,open:t,onOpenChange:i,content:m,onContentChange:M,children:c.jsx(tn,{scope:n,onClose:r.useCallback(()=>i(!1),[i]),isUsingKeyboardRef:p,dir:f,modal:u,children:o})})})};ye.displayName=G;var nn="MenuAnchor",ne=r.forwardRef((e,n)=>{const{__scopeMenu:t,...o}=e,a=W(t);return c.jsx(Ut,{...a,...o,ref:n})});ne.displayName=nn;var oe="MenuPortal",[on,Ie]=I(oe,{forceMount:void 0}),De=e=>{const{__scopeMenu:n,forceMount:t,children:o,container:a}=e,s=D(oe,n);return c.jsx(on,{scope:n,forceMount:t,children:c.jsx(H,{present:t||s.open,children:c.jsx(Xt,{asChild:!0,container:a,children:o})})})};De.displayName=oe;var _="MenuContent",[rn,re]=I(_),Pe=r.forwardRef((e,n)=>{const t=Ie(_,e.__scopeMenu),{forceMount:o=t.forceMount,...a}=e,s=D(_,e.__scopeMenu),u=K(_,e.__scopeMenu);return c.jsx(k.Provider,{scope:e.__scopeMenu,children:c.jsx(H,{present:o||s.open,children:c.jsx(k.Slot,{scope:e.__scopeMenu,children:u.modal?c.jsx(an,{...a,ref:n}):c.jsx(sn,{...a,ref:n})})})})}),an=r.forwardRef((e,n)=>{const t=D(_,e.__scopeMenu),o=r.useRef(null),a=F(n,o);return r.useEffect(()=>{const s=o.current;if(s)return Lt(s)},[]),c.jsx(ae,{...e,ref:a,trapFocus:t.open,disableOutsidePointerEvents:t.open,disableOutsideScroll:!0,onFocusOutside:v(e.onFocusOutside,s=>s.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>t.onOpenChange(!1)})}),sn=r.forwardRef((e,n)=>{const t=D(_,e.__scopeMenu);return c.jsx(ae,{...e,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>t.onOpenChange(!1)})}),ae=r.forwardRef((e,n)=>{const{__scopeMenu:t,loop:o=!1,trapFocus:a,onOpenAutoFocus:s,onCloseAutoFocus:u,disableOutsidePointerEvents:l,onEntryFocus:m,onEscapeKeyDown:M,onPointerDownOutside:p,onFocusOutside:i,onInteractOutside:f,onDismiss:h,disableOutsideScroll:w,...y}=e,P=D(_,t),A=K(_,t),$=W(t),U=Ee(t),de=Jt(t),[bt,le]=r.useState(null),B=r.useRef(null),Et=F(n,B,P.onContentChange),V=r.useRef(0),X=r.useRef(""),yt=r.useRef(0),Z=r.useRef(null),pe=r.useRef("right"),J=r.useRef(0),It=w?Gt:r.Fragment,Dt=w?{as:St,allowPinchZoom:!0}:void 0,Pt=d=>{var N,me;const x=X.current+d,C=de().filter(R=>!R.disabled),E=document.activeElement,Q=(N=C.find(R=>R.ref.current===E))==null?void 0:N.textValue,ee=C.map(R=>R.textValue),fe=gn(ee,x,Q),O=(me=C.find(R=>R.textValue===fe))==null?void 0:me.ref.current;(function R(Me){X.current=Me,window.clearTimeout(V.current),Me!==""&&(V.current=window.setTimeout(()=>R(""),1e3))})(x),O&&setTimeout(()=>O.focus())};r.useEffect(()=>()=>window.clearTimeout(V.current),[]),Ft();const S=r.useCallback(d=>{var C,E;return pe.current===((C=Z.current)==null?void 0:C.side)&&_n(d,(E=Z.current)==null?void 0:E.area)},[]);return c.jsx(rn,{scope:t,searchRef:X,onItemEnter:r.useCallback(d=>{S(d)&&d.preventDefault()},[S]),onItemLeave:r.useCallback(d=>{var x;S(d)||((x=B.current)==null||x.focus(),le(null))},[S]),onTriggerLeave:r.useCallback(d=>{S(d)&&d.preventDefault()},[S]),pointerGraceTimerRef:yt,onPointerGraceIntentChange:r.useCallback(d=>{Z.current=d},[]),children:c.jsx(It,{...Dt,children:c.jsx(Kt,{asChild:!0,trapped:a,onMountAutoFocus:v(s,d=>{var x;d.preventDefault(),(x=B.current)==null||x.focus({preventScroll:!0})}),onUnmountAutoFocus:u,children:c.jsx(kt,{asChild:!0,disableOutsidePointerEvents:l,onEscapeKeyDown:M,onPointerDownOutside:p,onFocusOutside:i,onInteractOutside:f,onDismiss:h,children:c.jsx(zt,{asChild:!0,...U,dir:A.dir,orientation:"vertical",loop:o,currentTabStopId:bt,onCurrentTabStopIdChange:le,onEntryFocus:v(m,d=>{A.isUsingKeyboardRef.current||d.preventDefault()}),preventScrollOnEntryFocus:!0,children:c.jsx(Bt,{role:"menu","aria-orientation":"vertical","data-state":Xe(P.open),"data-radix-menu-content":"",dir:A.dir,...$,...y,ref:Et,style:{outline:"none",...y.style},onKeyDown:v(y.onKeyDown,d=>{const C=d.target.closest("[data-radix-menu-content]")===d.currentTarget,E=d.ctrlKey||d.altKey||d.metaKey,Q=d.key.length===1;C&&(d.key==="Tab"&&d.preventDefault(),!E&&Q&&Pt(d.key));const ee=B.current;if(d.target!==ee||!Wt.includes(d.key))return;d.preventDefault();const O=de().filter(N=>!N.disabled).map(N=>N.ref.current);Re.includes(d.key)&&O.reverse(),wn(O)}),onBlur:v(e.onBlur,d=>{d.currentTarget.contains(d.target)||(window.clearTimeout(V.current),X.current="")}),onPointerMove:v(e.onPointerMove,L(d=>{const x=d.target,C=J.current!==d.clientX;if(d.currentTarget.contains(x)&&C){const E=d.clientX>J.current?"right":"left";pe.current=E,J.current=d.clientX}}))})})})})})})});Pe.displayName=_;var cn="MenuGroup",se=r.forwardRef((e,n)=>{const{__scopeMenu:t,...o}=e;return c.jsx(T.div,{role:"group",...o,ref:n})});se.displayName=cn;var un="MenuLabel",Se=r.forwardRef((e,n)=>{const{__scopeMenu:t,...o}=e;return c.jsx(T.div,{...o,ref:n})});Se.displayName=un;var Y="MenuItem",we="menu.itemSelect",q=r.forwardRef((e,n)=>{const{disabled:t=!1,onSelect:o,...a}=e,s=r.useRef(null),u=K(Y,e.__scopeMenu),l=re(Y,e.__scopeMenu),m=F(n,s),M=r.useRef(!1),p=()=>{const i=s.current;if(!t&&i){const f=new CustomEvent(we,{bubbles:!0,cancelable:!0});i.addEventListener(we,h=>o==null?void 0:o(h),{once:!0}),At(i,f),f.defaultPrevented?M.current=!1:u.onClose()}};return c.jsx(Ne,{...a,ref:m,disabled:t,onClick:v(e.onClick,p),onPointerDown:i=>{var f;(f=e.onPointerDown)==null||f.call(e,i),M.current=!0},onPointerUp:v(e.onPointerUp,i=>{var f;M.current||(f=i.currentTarget)==null||f.click()}),onKeyDown:v(e.onKeyDown,i=>{const f=l.searchRef.current!=="";t||f&&i.key===" "||te.includes(i.key)&&(i.currentTarget.click(),i.preventDefault())})})});q.displayName=Y;var Ne=r.forwardRef((e,n)=>{const{__scopeMenu:t,disabled:o=!1,textValue:a,...s}=e,u=re(Y,t),l=Ee(t),m=r.useRef(null),M=F(n,m),[p,i]=r.useState(!1),[f,h]=r.useState("");return r.useEffect(()=>{const w=m.current;w&&h((w.textContent??"").trim())},[s.children]),c.jsx(k.ItemSlot,{scope:t,disabled:o,textValue:a??f,children:c.jsx(Yt,{asChild:!0,...l,focusable:!o,children:c.jsx(T.div,{role:"menuitem","data-highlighted":p?"":void 0,"aria-disabled":o||void 0,"data-disabled":o?"":void 0,...s,ref:M,onPointerMove:v(e.onPointerMove,L(w=>{o?u.onItemLeave(w):(u.onItemEnter(w),w.defaultPrevented||w.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:v(e.onPointerLeave,L(w=>u.onItemLeave(w))),onFocus:v(e.onFocus,()=>i(!0)),onBlur:v(e.onBlur,()=>i(!1))})})})}),dn="MenuCheckboxItem",Te=r.forwardRef((e,n)=>{const{checked:t=!1,onCheckedChange:o,...a}=e;return c.jsx(Le,{scope:e.__scopeMenu,checked:t,children:c.jsx(q,{role:"menuitemcheckbox","aria-checked":z(t)?"mixed":t,...a,ref:n,"data-state":ie(t),onSelect:v(a.onSelect,()=>o==null?void 0:o(z(t)?!0:!t),{checkForDefaultPrevented:!1})})})});Te.displayName=dn;var Ae="MenuRadioGroup",[ln,pn]=I(Ae,{value:void 0,onValueChange:()=>{}}),Oe=r.forwardRef((e,n)=>{const{value:t,onValueChange:o,...a}=e,s=Ce(o);return c.jsx(ln,{scope:e.__scopeMenu,value:t,onValueChange:s,children:c.jsx(se,{...a,ref:n})})});Oe.displayName=Ae;var je="MenuRadioItem",ke=r.forwardRef((e,n)=>{const{value:t,...o}=e,a=pn(je,e.__scopeMenu),s=t===a.value;return c.jsx(Le,{scope:e.__scopeMenu,checked:s,children:c.jsx(q,{role:"menuitemradio","aria-checked":s,...o,ref:n,"data-state":ie(s),onSelect:v(o.onSelect,()=>{var u;return(u=a.onValueChange)==null?void 0:u.call(a,t)},{checkForDefaultPrevented:!1})})})});ke.displayName=je;var ce="MenuItemIndicator",[Le,fn]=I(ce,{checked:!1}),Fe=r.forwardRef((e,n)=>{const{__scopeMenu:t,forceMount:o,...a}=e,s=fn(ce,t);return c.jsx(H,{present:o||z(s.checked)||s.checked===!0,children:c.jsx(T.span,{...a,ref:n,"data-state":ie(s.checked)})})});Fe.displayName=ce;var mn="MenuSeparator",Ge=r.forwardRef((e,n)=>{const{__scopeMenu:t,...o}=e;return c.jsx(T.div,{role:"separator","aria-orientation":"horizontal",...o,ref:n})});Ge.displayName=mn;var Mn="MenuArrow",Ke=r.forwardRef((e,n)=>{const{__scopeMenu:t,...o}=e,a=W(t);return c.jsx(Vt,{...a,...o,ref:n})});Ke.displayName=Mn;var vn="MenuSub",[xo,$e]=I(vn),j="MenuSubTrigger",Ue=r.forwardRef((e,n)=>{const t=D(j,e.__scopeMenu),o=K(j,e.__scopeMenu),a=$e(j,e.__scopeMenu),s=re(j,e.__scopeMenu),u=r.useRef(null),{pointerGraceTimerRef:l,onPointerGraceIntentChange:m}=s,M={__scopeMenu:e.__scopeMenu},p=r.useCallback(()=>{u.current&&window.clearTimeout(u.current),u.current=null},[]);return r.useEffect(()=>p,[p]),r.useEffect(()=>{const i=l.current;return()=>{window.clearTimeout(i),m(null)}},[l,m]),c.jsx(ne,{asChild:!0,...M,children:c.jsx(Ne,{id:a.triggerId,"aria-haspopup":"menu","aria-expanded":t.open,"aria-controls":a.contentId,"data-state":Xe(t.open),...e,ref:he(n,a.onTriggerChange),onClick:i=>{var f;(f=e.onClick)==null||f.call(e,i),!(e.disabled||i.defaultPrevented)&&(i.currentTarget.focus(),t.open||t.onOpenChange(!0))},onPointerMove:v(e.onPointerMove,L(i=>{s.onItemEnter(i),!i.defaultPrevented&&!e.disabled&&!t.open&&!u.current&&(s.onPointerGraceIntentChange(null),u.current=window.setTimeout(()=>{t.onOpenChange(!0),p()},100))})),onPointerLeave:v(e.onPointerLeave,L(i=>{var h,w;p();const f=(h=t.content)==null?void 0:h.getBoundingClientRect();if(f){const y=(w=t.content)==null?void 0:w.dataset.side,P=y==="right",A=P?-5:5,$=f[P?"left":"right"],U=f[P?"right":"left"];s.onPointerGraceIntentChange({area:[{x:i.clientX+A,y:i.clientY},{x:$,y:f.top},{x:U,y:f.top},{x:U,y:f.bottom},{x:$,y:f.bottom}],side:y}),window.clearTimeout(l.current),l.current=window.setTimeout(()=>s.onPointerGraceIntentChange(null),300)}else{if(s.onTriggerLeave(i),i.defaultPrevented)return;s.onPointerGraceIntentChange(null)}})),onKeyDown:v(e.onKeyDown,i=>{var h;const f=s.searchRef.current!=="";e.disabled||f&&i.key===" "||qt[o.dir].includes(i.key)&&(t.onOpenChange(!0),(h=t.content)==null||h.focus(),i.preventDefault())})})})});Ue.displayName=j;var Be="MenuSubContent",Ve=r.forwardRef((e,n)=>{const t=Ie(_,e.__scopeMenu),{forceMount:o=t.forceMount,...a}=e,s=D(_,e.__scopeMenu),u=K(_,e.__scopeMenu),l=$e(Be,e.__scopeMenu),m=r.useRef(null),M=F(n,m);return c.jsx(k.Provider,{scope:e.__scopeMenu,children:c.jsx(H,{present:o||s.open,children:c.jsx(k.Slot,{scope:e.__scopeMenu,children:c.jsx(ae,{id:l.contentId,"aria-labelledby":l.triggerId,...a,ref:M,align:"start",side:u.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:p=>{var i;u.isUsingKeyboardRef.current&&((i=m.current)==null||i.focus()),p.preventDefault()},onCloseAutoFocus:p=>p.preventDefault(),onFocusOutside:v(e.onFocusOutside,p=>{p.target!==l.trigger&&s.onOpenChange(!1)}),onEscapeKeyDown:v(e.onEscapeKeyDown,p=>{u.onClose(),p.preventDefault()}),onKeyDown:v(e.onKeyDown,p=>{var h;const i=p.currentTarget.contains(p.target),f=Zt[u.dir].includes(p.key);i&&f&&(s.onOpenChange(!1),(h=l.trigger)==null||h.focus(),p.preventDefault())})})})})})});Ve.displayName=Be;function Xe(e){return e?"open":"closed"}function z(e){return e==="indeterminate"}function ie(e){return z(e)?"indeterminate":e?"checked":"unchecked"}function wn(e){const n=document.activeElement;for(const t of e)if(t===n||(t.focus(),document.activeElement!==n))return}function hn(e,n){return e.map((t,o)=>e[(n+o)%e.length])}function gn(e,n,t){const a=n.length>1&&Array.from(n).every(M=>M===n[0])?n[0]:n,s=t?e.indexOf(t):-1;let u=hn(e,Math.max(s,0));a.length===1&&(u=u.filter(M=>M!==t));const m=u.find(M=>M.toLowerCase().startsWith(a.toLowerCase()));return m!==t?m:void 0}function xn(e,n){const{x:t,y:o}=e;let a=!1;for(let s=0,u=n.length-1;s<n.length;u=s++){const l=n[s].x,m=n[s].y,M=n[u].x,p=n[u].y;m>o!=p>o&&t<(M-l)*(o-m)/(p-m)+l&&(a=!a)}return a}function _n(e,n){if(!n)return!1;const t={x:e.clientX,y:e.clientY};return xn(t,n)}function L(e){return n=>n.pointerType==="mouse"?e(n):void 0}var Cn=ye,Rn=ne,bn=De,En=Pe,yn=se,In=Se,Dn=q,Pn=Te,Sn=Oe,Nn=ke,Tn=Fe,An=Ge,On=Ke,jn=Ue,kn=Ve,ue="DropdownMenu",[Ln,_o]=ge(ue,[be]),g=be(),[Fn,Ye]=Ln(ue),ze=e=>{const{__scopeDropdownMenu:n,children:t,dir:o,open:a,defaultOpen:s,onOpenChange:u,modal:l=!0}=e,m=g(n),M=r.useRef(null),[p=!1,i]=Tt({prop:a,defaultProp:s,onChange:u});return c.jsx(Fn,{scope:n,triggerId:ve(),triggerRef:M,contentId:ve(),open:p,onOpenChange:i,onOpenToggle:r.useCallback(()=>i(f=>!f),[i]),modal:l,children:c.jsx(Cn,{...m,open:p,onOpenChange:i,dir:o,modal:l,children:t})})};ze.displayName=ue;var He="DropdownMenuTrigger",We=r.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,disabled:o=!1,...a}=e,s=Ye(He,t),u=g(t);return c.jsx(Rn,{asChild:!0,...u,children:c.jsx(T.button,{type:"button",id:s.triggerId,"aria-haspopup":"menu","aria-expanded":s.open,"aria-controls":s.open?s.contentId:void 0,"data-state":s.open?"open":"closed","data-disabled":o?"":void 0,disabled:o,...a,ref:he(n,s.triggerRef),onPointerDown:v(e.onPointerDown,l=>{!o&&l.button===0&&l.ctrlKey===!1&&(s.onOpenToggle(),s.open||l.preventDefault())}),onKeyDown:v(e.onKeyDown,l=>{o||(["Enter"," "].includes(l.key)&&s.onOpenToggle(),l.key==="ArrowDown"&&s.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(l.key)&&l.preventDefault())})})})});We.displayName=He;var Gn="DropdownMenuPortal",qe=e=>{const{__scopeDropdownMenu:n,...t}=e,o=g(n);return c.jsx(bn,{...o,...t})};qe.displayName=Gn;var Ze="DropdownMenuContent",Je=r.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...o}=e,a=Ye(Ze,t),s=g(t),u=r.useRef(!1);return c.jsx(En,{id:a.contentId,"aria-labelledby":a.triggerId,...s,...o,ref:n,onCloseAutoFocus:v(e.onCloseAutoFocus,l=>{var m;u.current||(m=a.triggerRef.current)==null||m.focus(),u.current=!1,l.preventDefault()}),onInteractOutside:v(e.onInteractOutside,l=>{const m=l.detail.originalEvent,M=m.button===0&&m.ctrlKey===!0,p=m.button===2||M;(!a.modal||p)&&(u.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});Je.displayName=Ze;var Kn="DropdownMenuGroup",$n=r.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...o}=e,a=g(t);return c.jsx(yn,{...a,...o,ref:n})});$n.displayName=Kn;var Un="DropdownMenuLabel",Qe=r.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...o}=e,a=g(t);return c.jsx(In,{...a,...o,ref:n})});Qe.displayName=Un;var Bn="DropdownMenuItem",et=r.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...o}=e,a=g(t);return c.jsx(Dn,{...a,...o,ref:n})});et.displayName=Bn;var Vn="DropdownMenuCheckboxItem",tt=r.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...o}=e,a=g(t);return c.jsx(Pn,{...a,...o,ref:n})});tt.displayName=Vn;var Xn="DropdownMenuRadioGroup",Yn=r.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...o}=e,a=g(t);return c.jsx(Sn,{...a,...o,ref:n})});Yn.displayName=Xn;var zn="DropdownMenuRadioItem",nt=r.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...o}=e,a=g(t);return c.jsx(Nn,{...a,...o,ref:n})});nt.displayName=zn;var Hn="DropdownMenuItemIndicator",ot=r.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...o}=e,a=g(t);return c.jsx(Tn,{...a,...o,ref:n})});ot.displayName=Hn;var Wn="DropdownMenuSeparator",rt=r.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...o}=e,a=g(t);return c.jsx(An,{...a,...o,ref:n})});rt.displayName=Wn;var qn="DropdownMenuArrow",Zn=r.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...o}=e,a=g(t);return c.jsx(On,{...a,...o,ref:n})});Zn.displayName=qn;var Jn="DropdownMenuSubTrigger",at=r.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...o}=e,a=g(t);return c.jsx(jn,{...a,...o,ref:n})});at.displayName=Jn;var Qn="DropdownMenuSubContent",st=r.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...o}=e,a=g(t);return c.jsx(kn,{...a,...o,ref:n,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});st.displayName=Qn;var eo=ze,to=We,no=qe,ct=Je,it=Qe,ut=et,dt=tt,lt=nt,pt=ot,ft=rt,mt=at,Mt=st;const Co=eo,Ro=to,vt=r.forwardRef(({className:e,inset:n,children:t,...o},a)=>r.createElement(mt,{ref:a,className:b("py-1.5 focus:bg-accent data-[state=open]:bg-accent flex cursor-default select-none items-center rounded-sm px-2 text-text-sm outline-none",n&&"pl-8",e),...o},t));vt.displayName=mt.displayName;const wt=r.forwardRef(({className:e,...n},t)=>r.createElement(Mt,{ref:t,className:b("z-50 min-w-[8rem] overflow-hidden rounded-md border border-theme-border-bold bg-theme-surface-primary p-1 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n}));wt.displayName=Mt.displayName;const ht=r.forwardRef(({className:e,sideOffset:n=4,...t},o)=>r.createElement(no,null,r.createElement(ct,{ref:o,sideOffset:n,className:b("z-50 min-w-[8rem] overflow-hidden rounded-md border border-theme-border-moderate bg-theme-surface-primary p-1","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...t})));ht.displayName=ct.displayName;const gt=r.forwardRef(({className:e,inset:n,children:t,...o},a)=>{function s(u){return r.cloneElement(u,{className:b("h-3 w-3 mr-2 fill-neutral-400",u.props.className)})}return r.createElement(ut,{ref:a,className:b("relative flex cursor-default select-none items-center rounded-[4px] pr-3 pl-2 py-2 text-text-sm outline-none transition-colors focus:bg-theme-surface-tertiary data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n&&"pl-8",e),...o},o.icon&&s(o.icon),r.createElement(Nt,null,t))});gt.displayName=ut.displayName;const xt=r.forwardRef(({className:e,children:n,checked:t,...o},a)=>r.createElement(dt,{ref:a,className:b("focus:text-accent-foreground focus:bg-theme-surface-teritary relative flex cursor-default select-none items-center rounded-sm pl-8 pr-2 text-text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),checked:t,...o},r.createElement("span",{className:"h-3.5 w-3.5 absolute left-2 flex items-center justify-center"},r.createElement(pt,null)),n));xt.displayName=dt.displayName;const _t=r.forwardRef(({className:e,children:n,...t},o)=>r.createElement(lt,{ref:o,className:b("py-1.5 relative flex cursor-default select-none items-center rounded-sm pl-8 pr-2 text-text-sm outline-none transition-colors focus:bg-theme-surface-tertiary data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...t},r.createElement("span",{className:"h-3.5 w-3.5 absolute left-2 flex items-center justify-center"},r.createElement(pt,null)),n));_t.displayName=lt.displayName;const Ct=r.forwardRef(({className:e,inset:n,...t},o)=>r.createElement(it,{ref:o,className:b("py-1.5 px-2 text-text-sm font-semibold",n&&"pl-8",e),...t}));Ct.displayName=it.displayName;const Rt=r.forwardRef(({className:e,...n},t)=>r.createElement(ft,{ref:t,className:b("-mx-1 my-1 h-[1px] bg-theme-border-moderate",e),...n}));Rt.displayName=ft.displayName;ht.__docgenInfo={description:"",methods:[],props:{sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}};gt.__docgenInfo={description:"",methods:[]};xt.__docgenInfo={description:"",methods:[]};_t.__docgenInfo={description:"",methods:[]};Ct.__docgenInfo={description:"",methods:[]};Rt.__docgenInfo={description:"",methods:[]};wt.__docgenInfo={description:"",methods:[]};vt.__docgenInfo={description:"",methods:[]};export{Co as D,Ro as a,ht as b,gt as c,Rt as d};
