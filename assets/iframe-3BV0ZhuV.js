import"../sb-preview/runtime.js";(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&m(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function m(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const E="modulepreload",O=function(i,_){return new URL(i,_).href},p={},t=function(_,n,m){let e=Promise.resolve();if(n&&n.length>0){const r=document.getElementsByTagName("link");e=Promise.all(n.map(o=>{if(o=O(o,m),o in p)return;p[o]=!0;const c=o.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(!!m)for(let a=r.length-1;a>=0;a--){const u=r[a];if(u.href===o&&(!c||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${d}`))return;const s=document.createElement("link");if(s.rel=c?"stylesheet":E,c||(s.as="script",s.crossOrigin=""),s.href=o,document.head.appendChild(s),c)return new Promise((a,u)=>{s.addEventListener("load",a),s.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${o}`)))})}))}return e.then(()=>_()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},{createBrowserChannel:R}=__STORYBOOK_MODULE_CHANNELS__,{addons:T}=__STORYBOOK_MODULE_PREVIEW_API__,l=R({page:"preview"});T.setChannel(l);window.__STORYBOOK_ADDONS_CHANNEL__=l;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=l);const P={"./src/components/Avatar/Avatar.stories.tsx":async()=>t(()=>import("./Avatar.stories-DVAbL8nQ.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url),"./src/components/Badge/Badge.stories.tsx":async()=>t(()=>import("./Badge.stories-dF44Ho6K.js"),__vite__mapDeps([7,5,1,6]),import.meta.url),"./src/components/Box/Box.stories.tsx":async()=>t(()=>import("./Box.stories-HmrN6GKa.js"),__vite__mapDeps([8,5,1,6]),import.meta.url),"./src/components/Button/Button.stories.tsx":async()=>t(()=>import("./Button.stories-Qz1aPQho.js"),__vite__mapDeps([9,10,4,1,5,6]),import.meta.url),"./src/components/Dropdown/Dropdown.stories.tsx":async()=>t(()=>import("./Dropdown.stories-K11qSBsC.js"),__vite__mapDeps([11,1,4,2,3,6,10,5]),import.meta.url),"./src/components/Input/Input.stories.tsx":async()=>t(()=>import("./Input.stories-zC4aX495.js"),__vite__mapDeps([12,5,1,6]),import.meta.url),"./src/components/Sidebar/Sidebar.stories.tsx":async()=>t(()=>import("./Sidebar.stories-FEAfFdDW.js"),__vite__mapDeps([13,1,14,4,6]),import.meta.url),"./src/components/Sidebar/SidebarHeader.stories.tsx":async()=>t(()=>import("./SidebarHeader.stories-eabiKD6R.js"),__vite__mapDeps([15,1,14,4,6]),import.meta.url),"./src/components/Sidebar/SidebarItem.stories.tsx":async()=>t(()=>import("./SidebarItem.stories-n5uh-0L5.js"),__vite__mapDeps([16,1,14,4,6]),import.meta.url),"./src/components/Skeleton/Skeleton.stories.tsx":async()=>t(()=>import("./Skeleton.stories-BFN_clI0.js"),__vite__mapDeps([17,6,1]),import.meta.url),"./src/components/Spinner/Spinner.stories.tsx":async()=>t(()=>import("./Spinner.stories-wjT_t-dg.js"),__vite__mapDeps([18,1,6]),import.meta.url),"./src/components/Table/DataTable.stories.tsx":async()=>t(()=>import("./DataTable.stories-30AEvakz.js"),__vite__mapDeps([19,1,20,6]),import.meta.url),"./src/components/Table/Table.stories.tsx":async()=>t(()=>import("./Table.stories-rCtOmZB8.js"),__vite__mapDeps([21,1,20,6]),import.meta.url),"./src/components/Tag/Tag.stories.tsx":async()=>t(()=>import("./Tag.stories-8ekUS2WW.js"),__vite__mapDeps([22,5,1,6]),import.meta.url),"./src/docs/Introduction.mdx":async()=>t(()=>import("./Introduction-S19W5nWU.js"),__vite__mapDeps([23,24,1,25,26,3,4,27,28,29]),import.meta.url),"./src/docs/Tailwind.mdx":async()=>t(()=>import("./Tailwind-AcQ6UJTh.js"),__vite__mapDeps([30,24,1,25,26,3,4,27,28,29]),import.meta.url),"./src/docs/Utilitiets.mdx":async()=>t(()=>import("./Utilitiets-abQ35Zcm.js"),__vite__mapDeps([31,24,1,25,26,3,4,27,28,29]),import.meta.url)};async function f(i){return P[i]()}const{composeConfigs:v,PreviewWeb:L,ClientApi:V}=__STORYBOOK_MODULE_PREVIEW_API__,I=async()=>{const i=await Promise.all([t(()=>import("./entry-preview-ulNEgYIM.js"),__vite__mapDeps([32,1,33,3]),import.meta.url),t(()=>import("./entry-preview-docs-ctPH9mRJ.js"),__vite__mapDeps([34,28,1,29]),import.meta.url),t(()=>import("./preview-yRq1Lj6j.js"),__vite__mapDeps([35,27]),import.meta.url),t(()=>import("./preview-0tGtIClz.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-1q4RDNOi.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-6iG64ELu.js"),__vite__mapDeps([36,29]),import.meta.url),t(()=>import("./preview-zZA4w0lH.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-MdQXpms2.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-u8M_OEO2.js"),__vite__mapDeps([37,29]),import.meta.url),t(()=>import("./preview-bEa2SesL.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-e7UF-SUK.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-bicOdALM.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-AHs-fpgl.js"),__vite__mapDeps([38,1,39]),import.meta.url)]);return v(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new L(f,I);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{t as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Avatar.stories-DVAbL8nQ.js","./index-OjgoNOWw.js","./index-xcTdDhRm.js","./index-mQqIOHEI.js","./index-uxD8nXqh.js","./index-polp_dyw.js","./index-FlAvnLNT.js","./Badge.stories-dF44Ho6K.js","./Box.stories-HmrN6GKa.js","./Button.stories-Qz1aPQho.js","./Button-jOpvRmu2.js","./Dropdown.stories-K11qSBsC.js","./Input.stories-zC4aX495.js","./Sidebar.stories-FEAfFdDW.js","./icons-0Qi2-vKm.js","./SidebarHeader.stories-eabiKD6R.js","./SidebarItem.stories-n5uh-0L5.js","./Skeleton.stories-BFN_clI0.js","./Spinner.stories-wjT_t-dg.js","./DataTable.stories-30AEvakz.js","./DataTable-oeEbKf89.js","./Table.stories-rCtOmZB8.js","./Tag.stories-8ekUS2WW.js","./Introduction-S19W5nWU.js","./jsx-runtime-DtaoT6pD.js","./index-7dsiwP88.js","./index-IDurjti6.js","./index-ZKB_KljB.js","./index-XkRcYS9h.js","./index-PPLHz8o0.js","./Tailwind-AcQ6UJTh.js","./Utilitiets-abQ35Zcm.js","./entry-preview-ulNEgYIM.js","./react-18-DyM-o0Ps.js","./entry-preview-docs-ctPH9mRJ.js","./preview-yRq1Lj6j.js","./preview-6iG64ELu.js","./preview-u8M_OEO2.js","./preview-AHs-fpgl.js","./preview-U3SJLSBU.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}