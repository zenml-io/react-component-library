import"../sb-preview/runtime.js";(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p="modulepreload",O=function(i,_){return new URL(i,_).href},d={},t=function(_,s,c){let e=Promise.resolve();if(s&&s.length>0){const r=document.getElementsByTagName("link");e=Promise.all(s.map(o=>{if(o=O(o,c),o in d)return;d[o]=!0;const m=o.endsWith(".css"),E=m?'[rel="stylesheet"]':"";if(!!c)for(let a=r.length-1;a>=0;a--){const u=r[a];if(u.href===o&&(!m||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${E}`))return;const n=document.createElement("link");if(n.rel=m?"stylesheet":p,m||(n.as="script",n.crossOrigin=""),n.href=o,document.head.appendChild(n),m)return new Promise((a,u)=>{n.addEventListener("load",a),n.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${o}`)))})}))}return e.then(()=>_()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},{createBrowserChannel:R}=__STORYBOOK_MODULE_CHANNELS__,{addons:f}=__STORYBOOK_MODULE_PREVIEW_API__,l=R({page:"preview"});f.setChannel(l);window.__STORYBOOK_ADDONS_CHANNEL__=l;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=l);const P={"./src/components/Button/Button.stories.tsx":async()=>t(()=>import("./Button.stories-i8YlSp0t.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),"./src/components/Input/Input.stories.tsx":async()=>t(()=>import("./Input.stories-XQhjJ-d7.js"),__vite__mapDeps([5,3,2,4]),import.meta.url),"./src/components/Sidebar/Sidebar.stories.tsx":async()=>t(()=>import("./Sidebar.stories-dev1SBNF.js"),__vite__mapDeps([6,2,7,1,4]),import.meta.url),"./src/components/Sidebar/SidebarHeader.stories.tsx":async()=>t(()=>import("./SidebarHeader.stories-VVtvRBh4.js"),__vite__mapDeps([8,2,7,1,4]),import.meta.url),"./src/components/Sidebar/SidebarItem.stories.tsx":async()=>t(()=>import("./SidebarItem.stories-_nn8W6pv.js"),__vite__mapDeps([9,2,7,1,4]),import.meta.url),"./src/docs/Introduction.mdx":async()=>t(()=>import("./Introduction-gUnRNuhV.js"),__vite__mapDeps([10,11,2,12,13,14,1,15,16,17]),import.meta.url),"./src/docs/Tailwind.mdx":async()=>t(()=>import("./Tailwind-j7vyhto7.js"),__vite__mapDeps([18,11,2,12,13,14,1,15,16,17]),import.meta.url),"./src/docs/Utilitiets.mdx":async()=>t(()=>import("./Utilitiets-Y0QYDeQR.js"),__vite__mapDeps([19,11,2,12,13,14,1,15,16,17]),import.meta.url)};async function T(i){return P[i]()}const{composeConfigs:L,PreviewWeb:v,ClientApi:S}=__STORYBOOK_MODULE_PREVIEW_API__,I=async()=>{const i=await Promise.all([t(()=>import("./entry-preview-Z7f2DmCU.js"),__vite__mapDeps([20,2,21,14]),import.meta.url),t(()=>import("./entry-preview-docs-dF5mZ-HM.js"),__vite__mapDeps([22,16,2,17]),import.meta.url),t(()=>import("./preview-yRq1Lj6j.js"),__vite__mapDeps([23,15]),import.meta.url),t(()=>import("./preview-slvruXR0.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-1q4RDNOi.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-6iG64ELu.js"),__vite__mapDeps([24,17]),import.meta.url),t(()=>import("./preview-zZA4w0lH.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-MdQXpms2.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-u8M_OEO2.js"),__vite__mapDeps([25,17]),import.meta.url),t(()=>import("./preview-bEa2SesL.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-e7UF-SUK.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-bicOdALM.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-laVJYuLC.js"),__vite__mapDeps([26,2,27]),import.meta.url)]);return L(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new v(T,I);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{t as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Button.stories-i8YlSp0t.js","./index-EBIJ8zB7.js","./index-DogsOklH.js","./index-polp_dyw.js","./index-FlAvnLNT.js","./Input.stories-XQhjJ-d7.js","./Sidebar.stories-dev1SBNF.js","./icons-gQGS2e_Z.js","./SidebarHeader.stories-VVtvRBh4.js","./SidebarItem.stories-_nn8W6pv.js","./Introduction-gUnRNuhV.js","./jsx-runtime-Q5kDp4vx.js","./index-GEUFibHT.js","./index-oBWfQwJj.js","./index-MroJ3egt.js","./index-ZKB_KljB.js","./index-j3hw8Wqh.js","./index-PPLHz8o0.js","./Tailwind-j7vyhto7.js","./Utilitiets-Y0QYDeQR.js","./entry-preview-Z7f2DmCU.js","./react-18-Zjprz-m4.js","./entry-preview-docs-dF5mZ-HM.js","./preview-yRq1Lj6j.js","./preview-6iG64ELu.js","./preview-u8M_OEO2.js","./preview-laVJYuLC.js","./preview-h0PtDkiG.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}