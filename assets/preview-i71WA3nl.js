import{_ as a}from"./iframe-9Ek4JHBi.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-1ooeTNtQ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DocsRenderer-K4EAMTCU-1ooeTNtQ.js","./iframe-9Ek4JHBi.js","./index-OjgoNOWw.js","./react-18-DyM-o0Ps.js","./index-mQqIOHEI.js","./index-pBgB0HiI.js","./index-uxD8nXqh.js","./index-ZKB_KljB.js","./index-XkRcYS9h.js","./index-PPLHz8o0.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}