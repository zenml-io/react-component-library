import{c as p}from"./index-polp_dyw.js";import{R as d,r as l}from"./index-OjgoNOWw.js";import{c}from"./index-FlAvnLNT.js";import{$ as V,a as $,_ as v}from"./index-ZtSIjf74.js";const w=p("shrink-0 flex items-center justify-center rounded-rounded border-success-300 bg-success-50",{variants:{size:{sm:"h-[28px] w-[28px] border-2",md:"h-7 w-7 border-4"}},defaultVariants:{size:"sm"}}),X=p("fill-success-300",{variants:{size:{sm:"h-3 w-3",md:"h-[28px] w-[28px]"}},defaultVariants:{size:"sm"}});function E({className:e,children:r,size:t,...a}){return d.createElement("div",{...a,className:c(w({size:t}),e)},r)}const R=p("rounded-rounded border-dashed border-neutral-300 bg-theme-surface-tertiary",{variants:{size:{sm:"h-[28px] w-[28px] border-2",md:"h-7 w-7 border-4"}},defaultVariants:{size:"sm"}});function I({className:e,size:r,...t}){return d.createElement("div",{...t,className:c(R({size:r}),e)})}function T({value:e,outerCirlcle:r=40,innerCircle:t=30,children:a,className:s,...n}){return d.createElement("div",{...n,style:{"--value":`${e*3.6}deg`,"--outer-circle":`${r}px`,"--inner-circle":`${t}px`},className:c("relative flex h-[var(--outer-circle)] w-[var(--outer-circle)] shrink-0 items-center justify-center rounded-rounded bg-[conic-gradient(hsl(var(--color-primary-400))_var(--value),hsl(var(--color-primary-050))_var(--value))] after:h-[var(--inner-circle)] after:w-[var(--inner-circle)] after:rounded-rounded after:bg-theme-surface-primary after:content-['']",s),"aria-label":"Radial Progress Bar",role:"progressbar"},a)}E.__docgenInfo={description:"",methods:[],displayName:"ProgressTick"};I.__docgenInfo={description:"",methods:[],displayName:"ProgressOutstanding"};T.__docgenInfo={description:"",methods:[],displayName:"RadialProgress",props:{value:{required:!0,tsType:{name:"number"},description:""},outerCirlcle:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"40",computed:!1}},innerCircle:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"30",computed:!1}}}};const g="Progress",m=100,[k,F]=V(g),[z,C]=k(g),b=l.forwardRef((e,r)=>{const{__scopeProgress:t,value:a,max:s,getValueLabel:n=A,...y}=e,i=f(s)?s:m,o=h(a,i)?a:null,N=u(o)?n(o,i):void 0;return l.createElement(z,{scope:t,value:o,max:i},l.createElement($.div,v({"aria-valuemax":i,"aria-valuemin":0,"aria-valuenow":u(o)?o:void 0,"aria-valuetext":N,role:"progressbar","data-state":x(o,i),"data-value":o??void 0,"data-max":i},y,{ref:r})))});b.propTypes={max(e,r,t){const a=e[r],s=String(a);return a&&!f(a)?new Error(L(s,t)):null},value(e,r,t){const a=e[r],s=String(a),n=f(e.max)?e.max:m;return a!=null&&!h(a,n)?new Error(S(s,t)):null}};const M="ProgressIndicator",O=l.forwardRef((e,r)=>{var t;const{__scopeProgress:a,...s}=e,n=C(M,a);return l.createElement($.div,v({"data-state":x(n.value,n.max),"data-value":(t=n.value)!==null&&t!==void 0?t:void 0,"data-max":n.max},s,{ref:r}))});function A(e,r){return`${Math.round(e/r*100)}%`}function x(e,r){return e==null?"indeterminate":e===r?"complete":"loading"}function u(e){return typeof e=="number"}function f(e){return u(e)&&!isNaN(e)&&e>0}function h(e,r){return u(e)&&!isNaN(e)&&e<=r&&e>=0}function L(e,r){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${m}\`.`}function S(e,r){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${m} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`}const P=b,D=O,_=l.forwardRef(({className:e,value:r,...t},a)=>d.createElement(P,{ref:a,className:c("rounded-full relative h-4 w-full overflow-hidden bg-primary-50",e),...t},d.createElement(D,{className:"h-full w-full flex-1 bg-primary-400 transition-all",style:{transform:`translateX(-${100-(r||0)}%)`}})));_.displayName=P.displayName;_.__docgenInfo={description:"",methods:[]};export{_ as P,T as R,I as a,E as b,X as p};
