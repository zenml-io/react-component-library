import{_ as a}from"./iframe-CjhaZGKw.js";var s=Object.entries(globalThis.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),l={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-CFRXHY34-JlLREP8a.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>s[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{l as parameters};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DocsRenderer-CFRXHY34-JlLREP8a.js","./iframe-CjhaZGKw.js","./index-yUhCOHB4.js","./index-CZHEY2Uj.js","./jsx-runtime-DBhXMc9n.js","./index-z4ifl892.js","./index-Cu4lwwaE.js","./index-Cxo8En29.js","./index-DrFu-skq.js","./react-18-CAQg0x4w.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}