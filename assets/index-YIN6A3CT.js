import{b as pe,a as $e,_ as Ee,d as yt,c as ve,$ as bt}from"./index-ldRrvRT9.js";import{r as x}from"./index-OjgoNOWw.js";import{$ as we}from"./index-1jd4DUhV.js";import{a as Oe}from"./index-jKYK_Gmc.js";import{r as $t}from"./index-mQqIOHEI.js";function Et(e,t=globalThis==null?void 0:globalThis.document){const n=pe(e);x.useEffect(()=>{const o=i=>{i.key==="Escape"&&n(i)};return t.addEventListener("keydown",o),()=>t.removeEventListener("keydown",o)},[n,t])}const xe="dismissableLayer.update",Ot="dismissableLayer.pointerDownOutside",At="dismissableLayer.focusOutside";let ke;const Pt=x.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),kn=x.forwardRef((e,t)=>{var n;const{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:i,onPointerDownOutside:r,onFocusOutside:s,onInteractOutside:l,onDismiss:c,...a}=e,u=x.useContext(Pt),[f,p]=x.useState(null),d=(n=f==null?void 0:f.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,[,m]=x.useState({}),h=Oe(t,E=>p(E)),g=Array.from(u.layers),[w]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),y=g.indexOf(w),v=f?g.indexOf(f):-1,b=u.layersWithOutsidePointerEventsDisabled.size>0,$=v>=y,O=Ct(E=>{const S=E.target,_=[...u.branches].some(L=>L.contains(S));!$||_||(r==null||r(E),l==null||l(E),E.defaultPrevented||c==null||c())},d),P=Rt(E=>{const S=E.target;[...u.branches].some(L=>L.contains(S))||(s==null||s(E),l==null||l(E),E.defaultPrevented||c==null||c())},d);return Et(E=>{v===u.layers.size-1&&(i==null||i(E),!E.defaultPrevented&&c&&(E.preventDefault(),c()))},d),x.useEffect(()=>{if(f)return o&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(ke=d.body.style.pointerEvents,d.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(f)),u.layers.add(f),Fe(),()=>{o&&u.layersWithOutsidePointerEventsDisabled.size===1&&(d.body.style.pointerEvents=ke)}},[f,d,o,u]),x.useEffect(()=>()=>{f&&(u.layers.delete(f),u.layersWithOutsidePointerEventsDisabled.delete(f),Fe())},[f,u]),x.useEffect(()=>{const E=()=>m({});return document.addEventListener(xe,E),()=>document.removeEventListener(xe,E)},[]),x.createElement($e.div,Ee({},a,{ref:h,style:{pointerEvents:b?$?"auto":"none":void 0,...e.style},onFocusCapture:we(e.onFocusCapture,P.onFocusCapture),onBlurCapture:we(e.onBlurCapture,P.onBlurCapture),onPointerDownCapture:we(e.onPointerDownCapture,O.onPointerDownCapture)}))});function Ct(e,t=globalThis==null?void 0:globalThis.document){const n=pe(e),o=x.useRef(!1),i=x.useRef(()=>{});return x.useEffect(()=>{const r=l=>{if(l.target&&!o.current){let a=function(){Xe(Ot,n,c,{discrete:!0})};const c={originalEvent:l};l.pointerType==="touch"?(t.removeEventListener("click",i.current),i.current=a,t.addEventListener("click",i.current,{once:!0})):a()}else t.removeEventListener("click",i.current);o.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",r)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",r),t.removeEventListener("click",i.current)}},[t,n]),{onPointerDownCapture:()=>o.current=!0}}function Rt(e,t=globalThis==null?void 0:globalThis.document){const n=pe(e),o=x.useRef(!1);return x.useEffect(()=>{const i=r=>{r.target&&!o.current&&Xe(At,n,{originalEvent:r},{discrete:!1})};return t.addEventListener("focusin",i),()=>t.removeEventListener("focusin",i)},[t,n]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function Fe(){const e=new CustomEvent(xe);document.dispatchEvent(e)}function Xe(e,t,n,{discrete:o}){const i=n.originalEvent.target,r=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),o?yt(i,r):i.dispatchEvent(r)}const Dt=["top","right","bottom","left"],X=Math.min,k=Math.max,fe=Math.round,le=Math.floor,Y=e=>({x:e,y:e}),St={left:"right",right:"left",bottom:"top",top:"bottom"},Tt={start:"end",end:"start"};function ye(e,t,n){return k(e,X(t,n))}function z(e,t){return typeof e=="function"?e(t):e}function N(e){return e.split("-")[0]}function J(e){return e.split("-")[1]}function Ae(e){return e==="x"?"y":"x"}function Pe(e){return e==="y"?"height":"width"}function Q(e){return["top","bottom"].includes(N(e))?"y":"x"}function Ce(e){return Ae(Q(e))}function Lt(e,t,n){n===void 0&&(n=!1);const o=J(e),i=Ce(e),r=Pe(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(s=de(s)),[s,de(s)]}function _t(e){const t=de(e);return[be(e),t,be(t)]}function be(e){return e.replace(/start|end/g,t=>Tt[t])}function kt(e,t,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?i:o:t?o:i;case"left":case"right":return t?r:s;default:return[]}}function Ft(e,t,n,o){const i=J(e);let r=kt(N(e),n==="start",o);return i&&(r=r.map(s=>s+"-"+i),t&&(r=r.concat(r.map(be)))),r}function de(e){return e.replace(/left|right|bottom|top/g,t=>St[t])}function Wt(e){return{top:0,right:0,bottom:0,left:0,...e}}function Ye(e){return typeof e!="number"?Wt(e):{top:e,right:e,bottom:e,left:e}}function ue(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function We(e,t,n){let{reference:o,floating:i}=e;const r=Q(t),s=Ce(t),l=Pe(s),c=N(t),a=r==="y",u=o.x+o.width/2-i.width/2,f=o.y+o.height/2-i.height/2,p=o[l]/2-i[l]/2;let d;switch(c){case"top":d={x:u,y:o.y-i.height};break;case"bottom":d={x:u,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:f};break;case"left":d={x:o.x-i.width,y:f};break;default:d={x:o.x,y:o.y}}switch(J(t)){case"start":d[s]-=p*(n&&a?-1:1);break;case"end":d[s]+=p*(n&&a?-1:1);break}return d}const Mt=async(e,t,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,l=r.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(t));let a=await s.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:f}=We(a,o,c),p=o,d={},m=0;for(let h=0;h<l.length;h++){const{name:g,fn:w}=l[h],{x:y,y:v,data:b,reset:$}=await w({x:u,y:f,initialPlacement:o,placement:p,strategy:i,middlewareData:d,rects:a,platform:s,elements:{reference:e,floating:t}});u=y??u,f=v??f,d={...d,[g]:{...d[g],...b}},$&&m<=50&&(m++,typeof $=="object"&&($.placement&&(p=$.placement),$.rects&&(a=$.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:i}):$.rects),{x:u,y:f}=We(a,p,c)),h=-1)}return{x:u,y:f,placement:p,strategy:i,middlewareData:d}};async function te(e,t){var n;t===void 0&&(t={});const{x:o,y:i,platform:r,rects:s,elements:l,strategy:c}=e,{boundary:a="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:p=!1,padding:d=0}=z(t,e),m=Ye(d),g=l[p?f==="floating"?"reference":"floating":f],w=ue(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(g)))==null||n?g:g.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:a,rootBoundary:u,strategy:c})),y=f==="floating"?{...s.floating,x:o,y:i}:s.reference,v=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),b=await(r.isElement==null?void 0:r.isElement(v))?await(r.getScale==null?void 0:r.getScale(v))||{x:1,y:1}:{x:1,y:1},$=ue(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:y,offsetParent:v,strategy:c}):y);return{top:(w.top-$.top+m.top)/b.y,bottom:($.bottom-w.bottom+m.bottom)/b.y,left:(w.left-$.left+m.left)/b.x,right:($.right-w.right+m.right)/b.x}}const Bt=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:o,placement:i,rects:r,platform:s,elements:l,middlewareData:c}=t,{element:a,padding:u=0}=z(e,t)||{};if(a==null)return{};const f=Ye(u),p={x:n,y:o},d=Ce(i),m=Pe(d),h=await s.getDimensions(a),g=d==="y",w=g?"top":"left",y=g?"bottom":"right",v=g?"clientHeight":"clientWidth",b=r.reference[m]+r.reference[d]-p[d]-r.floating[m],$=p[d]-r.reference[d],O=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a));let P=O?O[v]:0;(!P||!await(s.isElement==null?void 0:s.isElement(O)))&&(P=l.floating[v]||r.floating[m]);const E=b/2-$/2,S=P/2-h[m]/2-1,_=X(f[w],S),L=X(f[y],S),R=_,M=P-h[m]-L,C=P/2-h[m]/2+E,D=ye(R,C,M),T=!c.arrow&&J(i)!=null&&C!==D&&r.reference[m]/2-(C<R?_:L)-h[m]/2<0,A=T?C<R?C-R:C-M:0;return{[d]:p[d]+A,data:{[d]:D,centerOffset:C-D-A,...T&&{alignmentOffset:A}},reset:T}}}),Ht=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,o;const{placement:i,middlewareData:r,rects:s,initialPlacement:l,platform:c,elements:a}=t,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:p,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:h=!0,...g}=z(e,t);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const w=N(i),y=N(l)===l,v=await(c.isRTL==null?void 0:c.isRTL(a.floating)),b=p||(y||!h?[de(l)]:_t(l));!p&&m!=="none"&&b.push(...Ft(l,h,m,v));const $=[l,...b],O=await te(t,g),P=[];let E=((o=r.flip)==null?void 0:o.overflows)||[];if(u&&P.push(O[w]),f){const R=Lt(i,s,v);P.push(O[R[0]],O[R[1]])}if(E=[...E,{placement:i,overflows:P}],!P.every(R=>R<=0)){var S,_;const R=(((S=r.flip)==null?void 0:S.index)||0)+1,M=$[R];if(M)return{data:{index:R,overflows:E},reset:{placement:M}};let C=(_=E.filter(D=>D.overflows[0]<=0).sort((D,T)=>D.overflows[1]-T.overflows[1])[0])==null?void 0:_.placement;if(!C)switch(d){case"bestFit":{var L;const D=(L=E.map(T=>[T.placement,T.overflows.filter(A=>A>0).reduce((A,j)=>A+j,0)]).sort((T,A)=>T[1]-A[1])[0])==null?void 0:L[0];D&&(C=D);break}case"initialPlacement":C=l;break}if(i!==C)return{reset:{placement:C}}}return{}}}};function Me(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Be(e){return Dt.some(t=>e[t]>=0)}const zt=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:o="referenceHidden",...i}=z(e,t);switch(o){case"referenceHidden":{const r=await te(t,{...i,elementContext:"reference"}),s=Me(r,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Be(s)}}}case"escaped":{const r=await te(t,{...i,altBoundary:!0}),s=Me(r,n.floating);return{data:{escapedOffsets:s,escaped:Be(s)}}}default:return{}}}}};async function Nt(e,t){const{placement:n,platform:o,elements:i}=e,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=N(n),l=J(n),c=Q(n)==="y",a=["left","top"].includes(s)?-1:1,u=r&&c?-1:1,f=z(t,e);let{mainAxis:p,crossAxis:d,alignmentAxis:m}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return l&&typeof m=="number"&&(d=l==="end"?m*-1:m),c?{x:d*u,y:p*a}:{x:p*a,y:d*u}}const It=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,o;const{x:i,y:r,placement:s,middlewareData:l}=t,c=await Nt(t,e);return s===((n=l.offset)==null?void 0:n.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:i+c.x,y:r+c.y,data:{...c,placement:s}}}}},Vt=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:o,placement:i}=t,{mainAxis:r=!0,crossAxis:s=!1,limiter:l={fn:g=>{let{x:w,y}=g;return{x:w,y}}},...c}=z(e,t),a={x:n,y:o},u=await te(t,c),f=Q(N(i)),p=Ae(f);let d=a[p],m=a[f];if(r){const g=p==="y"?"top":"left",w=p==="y"?"bottom":"right",y=d+u[g],v=d-u[w];d=ye(y,d,v)}if(s){const g=f==="y"?"top":"left",w=f==="y"?"bottom":"right",y=m+u[g],v=m-u[w];m=ye(y,m,v)}const h=l.fn({...t,[p]:d,[f]:m});return{...h,data:{x:h.x-n,y:h.y-o}}}}},jt=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:o,placement:i,rects:r,middlewareData:s}=t,{offset:l=0,mainAxis:c=!0,crossAxis:a=!0}=z(e,t),u={x:n,y:o},f=Q(i),p=Ae(f);let d=u[p],m=u[f];const h=z(l,t),g=typeof h=="number"?{mainAxis:h,crossAxis:0}:{mainAxis:0,crossAxis:0,...h};if(c){const v=p==="y"?"height":"width",b=r.reference[p]-r.floating[v]+g.mainAxis,$=r.reference[p]+r.reference[v]-g.mainAxis;d<b?d=b:d>$&&(d=$)}if(a){var w,y;const v=p==="y"?"width":"height",b=["top","left"].includes(N(i)),$=r.reference[f]-r.floating[v]+(b&&((w=s.offset)==null?void 0:w[f])||0)+(b?0:g.crossAxis),O=r.reference[f]+r.reference[v]+(b?0:((y=s.offset)==null?void 0:y[f])||0)-(b?g.crossAxis:0);m<$?m=$:m>O&&(m=O)}return{[p]:d,[f]:m}}}},Xt=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:o,platform:i,elements:r}=t,{apply:s=()=>{},...l}=z(e,t),c=await te(t,l),a=N(n),u=J(n),f=Q(n)==="y",{width:p,height:d}=o.floating;let m,h;a==="top"||a==="bottom"?(m=a,h=u===(await(i.isRTL==null?void 0:i.isRTL(r.floating))?"start":"end")?"left":"right"):(h=a,m=u==="end"?"top":"bottom");const g=d-c[m],w=p-c[h],y=!t.middlewareData.shift;let v=g,b=w;if(f){const O=p-c.left-c.right;b=u||y?X(w,O):O}else{const O=d-c.top-c.bottom;v=u||y?X(g,O):O}if(y&&!u){const O=k(c.left,0),P=k(c.right,0),E=k(c.top,0),S=k(c.bottom,0);f?b=p-2*(O!==0||P!==0?O+P:k(c.left,c.right)):v=d-2*(E!==0||S!==0?E+S:k(c.top,c.bottom))}await s({...t,availableWidth:b,availableHeight:v});const $=await i.getDimensions(r.floating);return p!==$.width||d!==$.height?{reset:{rects:!0}}:{}}}};function U(e){return Ue(e)?(e.nodeName||"").toLowerCase():"#document"}function F(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function V(e){var t;return(t=(Ue(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Ue(e){return e instanceof Node||e instanceof F(e).Node}function I(e){return e instanceof Element||e instanceof F(e).Element}function B(e){return e instanceof HTMLElement||e instanceof F(e).HTMLElement}function He(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof F(e).ShadowRoot}function oe(e){const{overflow:t,overflowX:n,overflowY:o,display:i}=W(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!["inline","contents"].includes(i)}function Yt(e){return["table","td","th"].includes(U(e))}function Re(e){const t=De(),n=W(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Ut(e){let t=G(e);for(;B(t)&&!he(t);){if(Re(t))return t;t=G(t)}return null}function De(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function he(e){return["html","body","#document"].includes(U(e))}function W(e){return F(e).getComputedStyle(e)}function ge(e){return I(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function G(e){if(U(e)==="html")return e;const t=e.assignedSlot||e.parentNode||He(e)&&e.host||V(e);return He(t)?t.host:t}function Ke(e){const t=G(e);return he(t)?e.ownerDocument?e.ownerDocument.body:e.body:B(t)&&oe(t)?t:Ke(t)}function ne(e,t,n){var o;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=Ke(e),r=i===((o=e.ownerDocument)==null?void 0:o.body),s=F(i);return r?t.concat(s,s.visualViewport||[],oe(i)?i:[],s.frameElement&&n?ne(s.frameElement):[]):t.concat(i,ne(i,[],n))}function qe(e){const t=W(e);let n=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const i=B(e),r=i?e.offsetWidth:n,s=i?e.offsetHeight:o,l=fe(n)!==r||fe(o)!==s;return l&&(n=r,o=s),{width:n,height:o,$:l}}function Se(e){return I(e)?e:e.contextElement}function Z(e){const t=Se(e);if(!B(t))return Y(1);const n=t.getBoundingClientRect(),{width:o,height:i,$:r}=qe(t);let s=(r?fe(n.width):n.width)/o,l=(r?fe(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Kt=Y(0);function Ze(e){const t=F(e);return!De()||!t.visualViewport?Kt:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function qt(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==F(e)?!1:t}function K(e,t,n,o){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),r=Se(e);let s=Y(1);t&&(o?I(o)&&(s=Z(o)):s=Z(e));const l=qt(r,n,o)?Ze(r):Y(0);let c=(i.left+l.x)/s.x,a=(i.top+l.y)/s.y,u=i.width/s.x,f=i.height/s.y;if(r){const p=F(r),d=o&&I(o)?F(o):o;let m=p,h=m.frameElement;for(;h&&o&&d!==m;){const g=Z(h),w=h.getBoundingClientRect(),y=W(h),v=w.left+(h.clientLeft+parseFloat(y.paddingLeft))*g.x,b=w.top+(h.clientTop+parseFloat(y.paddingTop))*g.y;c*=g.x,a*=g.y,u*=g.x,f*=g.y,c+=v,a+=b,m=F(h),h=m.frameElement}}return ue({width:u,height:f,x:c,y:a})}const Zt=[":popover-open",":modal"];function Ge(e){return Zt.some(t=>{try{return e.matches(t)}catch{return!1}})}function Gt(e){let{elements:t,rect:n,offsetParent:o,strategy:i}=e;const r=i==="fixed",s=V(o),l=t?Ge(t.floating):!1;if(o===s||l&&r)return n;let c={scrollLeft:0,scrollTop:0},a=Y(1);const u=Y(0),f=B(o);if((f||!f&&!r)&&((U(o)!=="body"||oe(s))&&(c=ge(o)),B(o))){const p=K(o);a=Z(o),u.x=p.x+o.clientLeft,u.y=p.y+o.clientTop}return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-c.scrollLeft*a.x+u.x,y:n.y*a.y-c.scrollTop*a.y+u.y}}function Jt(e){return Array.from(e.getClientRects())}function Je(e){return K(V(e)).left+ge(e).scrollLeft}function Qt(e){const t=V(e),n=ge(e),o=e.ownerDocument.body,i=k(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),r=k(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Je(e);const l=-n.scrollTop;return W(o).direction==="rtl"&&(s+=k(t.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:l}}function en(e,t){const n=F(e),o=V(e),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,l=0,c=0;if(i){r=i.width,s=i.height;const a=De();(!a||a&&t==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:r,height:s,x:l,y:c}}function tn(e,t){const n=K(e,!0,t==="fixed"),o=n.top+e.clientTop,i=n.left+e.clientLeft,r=B(e)?Z(e):Y(1),s=e.clientWidth*r.x,l=e.clientHeight*r.y,c=i*r.x,a=o*r.y;return{width:s,height:l,x:c,y:a}}function ze(e,t,n){let o;if(t==="viewport")o=en(e,n);else if(t==="document")o=Qt(V(e));else if(I(t))o=tn(t,n);else{const i=Ze(e);o={...t,x:t.x-i.x,y:t.y-i.y}}return ue(o)}function Qe(e,t){const n=G(e);return n===t||!I(n)||he(n)?!1:W(n).position==="fixed"||Qe(n,t)}function nn(e,t){const n=t.get(e);if(n)return n;let o=ne(e,[],!1).filter(l=>I(l)&&U(l)!=="body"),i=null;const r=W(e).position==="fixed";let s=r?G(e):e;for(;I(s)&&!he(s);){const l=W(s),c=Re(s);!c&&l.position==="fixed"&&(i=null),(r?!c&&!i:!c&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||oe(s)&&!c&&Qe(e,s))?o=o.filter(u=>u!==s):i=l,s=G(s)}return t.set(e,o),o}function on(e){let{element:t,boundary:n,rootBoundary:o,strategy:i}=e;const s=[...n==="clippingAncestors"?nn(t,this._c):[].concat(n),o],l=s[0],c=s.reduce((a,u)=>{const f=ze(t,u,i);return a.top=k(f.top,a.top),a.right=X(f.right,a.right),a.bottom=X(f.bottom,a.bottom),a.left=k(f.left,a.left),a},ze(t,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function rn(e){const{width:t,height:n}=qe(e);return{width:t,height:n}}function sn(e,t,n){const o=B(t),i=V(t),r=n==="fixed",s=K(e,!0,r,t);let l={scrollLeft:0,scrollTop:0};const c=Y(0);if(o||!o&&!r)if((U(t)!=="body"||oe(i))&&(l=ge(t)),o){const f=K(t,!0,r,t);c.x=f.x+t.clientLeft,c.y=f.y+t.clientTop}else i&&(c.x=Je(i));const a=s.left+l.scrollLeft-c.x,u=s.top+l.scrollTop-c.y;return{x:a,y:u,width:s.width,height:s.height}}function Ne(e,t){return!B(e)||W(e).position==="fixed"?null:t?t(e):e.offsetParent}function et(e,t){const n=F(e);if(!B(e)||Ge(e))return n;let o=Ne(e,t);for(;o&&Yt(o)&&W(o).position==="static";)o=Ne(o,t);return o&&(U(o)==="html"||U(o)==="body"&&W(o).position==="static"&&!Re(o))?n:o||Ut(e)||n}const cn=async function(e){const t=this.getOffsetParent||et,n=this.getDimensions;return{reference:sn(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,...await n(e.floating)}}};function ln(e){return W(e).direction==="rtl"}const an={convertOffsetParentRelativeRectToViewportRelativeRect:Gt,getDocumentElement:V,getClippingRect:on,getOffsetParent:et,getElementRects:cn,getClientRects:Jt,getDimensions:rn,getScale:Z,isElement:I,isRTL:ln};function fn(e,t){let n=null,o;const i=V(e);function r(){var l;clearTimeout(o),(l=n)==null||l.disconnect(),n=null}function s(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),r();const{left:a,top:u,width:f,height:p}=e.getBoundingClientRect();if(l||t(),!f||!p)return;const d=le(u),m=le(i.clientWidth-(a+f)),h=le(i.clientHeight-(u+p)),g=le(a),y={rootMargin:-d+"px "+-m+"px "+-h+"px "+-g+"px",threshold:k(0,X(1,c))||1};let v=!0;function b($){const O=$[0].intersectionRatio;if(O!==c){if(!v)return s();O?s(!1,O):o=setTimeout(()=>{s(!1,1e-7)},100)}v=!1}try{n=new IntersectionObserver(b,{...y,root:i.ownerDocument})}catch{n=new IntersectionObserver(b,y)}n.observe(e)}return s(!0),r}function dn(e,t,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,a=Se(e),u=i||r?[...a?ne(a):[],...ne(t)]:[];u.forEach(w=>{i&&w.addEventListener("scroll",n,{passive:!0}),r&&w.addEventListener("resize",n)});const f=a&&l?fn(a,n):null;let p=-1,d=null;s&&(d=new ResizeObserver(w=>{let[y]=w;y&&y.target===a&&d&&(d.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var v;(v=d)==null||v.observe(t)})),n()}),a&&!c&&d.observe(a),d.observe(t));let m,h=c?K(e):null;c&&g();function g(){const w=K(e);h&&(w.x!==h.x||w.y!==h.y||w.width!==h.width||w.height!==h.height)&&n(),h=w,m=requestAnimationFrame(g)}return n(),()=>{var w;u.forEach(y=>{i&&y.removeEventListener("scroll",n),r&&y.removeEventListener("resize",n)}),f==null||f(),(w=d)==null||w.disconnect(),d=null,c&&cancelAnimationFrame(m)}}const un=Vt,mn=Ht,pn=Xt,hn=zt,Ie=Bt,gn=jt,wn=(e,t,n)=>{const o=new Map,i={platform:an,...n},r={...i.platform,_c:o};return Mt(e,t,{...i,platform:r})},vn=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:o,padding:i}=typeof e=="function"?e(n):e;return o&&t(o)?o.current!=null?Ie({element:o.current,padding:i}).fn(n):{}:o?Ie({element:o,padding:i}).fn(n):{}}}};var ae=typeof document<"u"?x.useLayoutEffect:x.useEffect;function me(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,o,i;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(o=n;o--!==0;)if(!me(e[o],t[o]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(t,i[o]))return!1;for(o=n;o--!==0;){const r=i[o];if(!(r==="_owner"&&e.$$typeof)&&!me(e[r],t[r]))return!1}return!0}return e!==e&&t!==t}function tt(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Ve(e,t){const n=tt(e);return Math.round(t*n)/n}function je(e){const t=x.useRef(e);return ae(()=>{t.current=e}),t}function xn(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:o=[],platform:i,elements:{reference:r,floating:s}={},transform:l=!0,whileElementsMounted:c,open:a}=e,[u,f]=x.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,d]=x.useState(o);me(p,o)||d(o);const[m,h]=x.useState(null),[g,w]=x.useState(null),y=x.useCallback(A=>{A!==O.current&&(O.current=A,h(A))},[]),v=x.useCallback(A=>{A!==P.current&&(P.current=A,w(A))},[]),b=r||m,$=s||g,O=x.useRef(null),P=x.useRef(null),E=x.useRef(u),S=c!=null,_=je(c),L=je(i),R=x.useCallback(()=>{if(!O.current||!P.current)return;const A={placement:t,strategy:n,middleware:p};L.current&&(A.platform=L.current),wn(O.current,P.current,A).then(j=>{const H={...j,isPositioned:!0};M.current&&!me(E.current,H)&&(E.current=H,$t.flushSync(()=>{f(H)}))})},[p,t,n,L]);ae(()=>{a===!1&&E.current.isPositioned&&(E.current.isPositioned=!1,f(A=>({...A,isPositioned:!1})))},[a]);const M=x.useRef(!1);ae(()=>(M.current=!0,()=>{M.current=!1}),[]),ae(()=>{if(b&&(O.current=b),$&&(P.current=$),b&&$){if(_.current)return _.current(b,$,R);R()}},[b,$,R,_,S]);const C=x.useMemo(()=>({reference:O,floating:P,setReference:y,setFloating:v}),[y,v]),D=x.useMemo(()=>({reference:b,floating:$}),[b,$]),T=x.useMemo(()=>{const A={position:n,left:0,top:0};if(!D.floating)return A;const j=Ve(D.floating,u.x),H=Ve(D.floating,u.y);return l?{...A,transform:"translate("+j+"px, "+H+"px)",...tt(D.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:j,top:H}},[n,l,D.floating,u.x,u.y]);return x.useMemo(()=>({...u,update:R,refs:C,elements:D,floatingStyles:T}),[u,R,C,D,T])}function yn(e){const[t,n]=x.useState(void 0);return ve(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const o=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const r=i[0];let s,l;if("borderBoxSize"in r){const c=r.borderBoxSize,a=Array.isArray(c)?c[0]:c;s=a.inlineSize,l=a.blockSize}else s=e.offsetWidth,l=e.offsetHeight;n({width:s,height:l})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else n(void 0)},[e]),t}const nt="Popper",[ot,Fn]=bt(nt),[bn,it]=ot(nt),$n=e=>{const{__scopePopper:t,children:n}=e,[o,i]=x.useState(null);return x.createElement(bn,{scope:t,anchor:o,onAnchorChange:i},n)},En="PopperAnchor",On=x.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:o,...i}=e,r=it(En,n),s=x.useRef(null),l=Oe(t,s);return x.useEffect(()=>{r.onAnchorChange((o==null?void 0:o.current)||s.current)}),o?null:x.createElement($e.div,Ee({},i,{ref:l}))}),rt="PopperContent",[An,Wn]=ot(rt),Pn=x.forwardRef((e,t)=>{var n,o,i,r,s,l,c,a;const{__scopePopper:u,side:f="bottom",sideOffset:p=0,align:d="center",alignOffset:m=0,arrowPadding:h=0,avoidCollisions:g=!0,collisionBoundary:w=[],collisionPadding:y=0,sticky:v="partial",hideWhenDetached:b=!1,updatePositionStrategy:$="optimized",onPlaced:O,...P}=e,E=it(rt,u),[S,_]=x.useState(null),L=Oe(t,ee=>_(ee)),[R,M]=x.useState(null),C=yn(R),D=(n=C==null?void 0:C.width)!==null&&n!==void 0?n:0,T=(o=C==null?void 0:C.height)!==null&&o!==void 0?o:0,A=f+(d!=="center"?"-"+d:""),j=typeof y=="number"?y:{top:0,right:0,bottom:0,left:0,...y},H=Array.isArray(w)?w:[w],ct=H.length>0,ie={padding:j,boundary:H.filter(Cn),altBoundary:ct},{refs:lt,floatingStyles:Te,placement:at,isPositioned:re,middlewareData:q}=xn({strategy:"fixed",placement:A,whileElementsMounted:(...ee)=>dn(...ee,{animationFrame:$==="always"}),elements:{reference:E.anchor},middleware:[It({mainAxis:p+T,alignmentAxis:m}),g&&un({mainAxis:!0,crossAxis:!1,limiter:v==="partial"?gn():void 0,...ie}),g&&mn({...ie}),pn({...ie,apply:({elements:ee,rects:_e,availableWidth:gt,availableHeight:wt})=>{const{width:vt,height:xt}=_e.reference,ce=ee.floating.style;ce.setProperty("--radix-popper-available-width",`${gt}px`),ce.setProperty("--radix-popper-available-height",`${wt}px`),ce.setProperty("--radix-popper-anchor-width",`${vt}px`),ce.setProperty("--radix-popper-anchor-height",`${xt}px`)}}),R&&vn({element:R,padding:h}),Rn({arrowWidth:D,arrowHeight:T}),b&&hn({strategy:"referenceHidden",...ie})]}),[Le,ft]=st(at),se=pe(O);ve(()=>{re&&(se==null||se())},[re,se]);const dt=(i=q.arrow)===null||i===void 0?void 0:i.x,ut=(r=q.arrow)===null||r===void 0?void 0:r.y,mt=((s=q.arrow)===null||s===void 0?void 0:s.centerOffset)!==0,[pt,ht]=x.useState();return ve(()=>{S&&ht(window.getComputedStyle(S).zIndex)},[S]),x.createElement("div",{ref:lt.setFloating,"data-radix-popper-content-wrapper":"",style:{...Te,transform:re?Te.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:pt,"--radix-popper-transform-origin":[(l=q.transformOrigin)===null||l===void 0?void 0:l.x,(c=q.transformOrigin)===null||c===void 0?void 0:c.y].join(" ")},dir:e.dir},x.createElement(An,{scope:u,placedSide:Le,onArrowChange:M,arrowX:dt,arrowY:ut,shouldHideArrow:mt},x.createElement($e.div,Ee({"data-side":Le,"data-align":ft},P,{ref:L,style:{...P.style,animation:re?void 0:"none",opacity:(a=q.hide)!==null&&a!==void 0&&a.referenceHidden?0:void 0}}))))});function Cn(e){return e!==null}const Rn=e=>({name:"transformOrigin",options:e,fn(t){var n,o,i,r,s;const{placement:l,rects:c,middlewareData:a}=t,f=((n=a.arrow)===null||n===void 0?void 0:n.centerOffset)!==0,p=f?0:e.arrowWidth,d=f?0:e.arrowHeight,[m,h]=st(l),g={start:"0%",center:"50%",end:"100%"}[h],w=((o=(i=a.arrow)===null||i===void 0?void 0:i.x)!==null&&o!==void 0?o:0)+p/2,y=((r=(s=a.arrow)===null||s===void 0?void 0:s.y)!==null&&r!==void 0?r:0)+d/2;let v="",b="";return m==="bottom"?(v=f?g:`${w}px`,b=`${-d}px`):m==="top"?(v=f?g:`${w}px`,b=`${c.floating.height+d}px`):m==="right"?(v=`${-d}px`,b=f?g:`${y}px`):m==="left"&&(v=`${c.floating.width+d}px`,b=f?g:`${y}px`),{data:{x:v,y:b}}}});function st(e){const[t,n="center"]=e.split("-");return[t,n]}const Mn=$n,Bn=On,Hn=Pn;export{Fn as $,kn as a,Hn as b,Mn as c,Bn as d};
