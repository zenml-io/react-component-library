import"../sb-preview/runtime.js";(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&m(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function m(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const d="modulepreload",O=function(i,_){return new URL(i,_).href},l={},t=function(_,n,m){let e=Promise.resolve();if(n&&n.length>0){const r=document.getElementsByTagName("link");e=Promise.all(n.map(o=>{if(o=O(o,m),o in l)return;l[o]=!0;const c=o.endsWith(".css"),E=c?'[rel="stylesheet"]':"";if(!!m)for(let a=r.length-1;a>=0;a--){const p=r[a];if(p.href===o&&(!c||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${E}`))return;const s=document.createElement("link");if(s.rel=c?"stylesheet":d,c||(s.as="script",s.crossOrigin=""),s.href=o,document.head.appendChild(s),c)return new Promise((a,p)=>{s.addEventListener("load",a),s.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})}))}return e.then(()=>_()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},{createBrowserChannel:T}=__STORYBOOK_MODULE_CHANNELS__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,u=T({page:"preview"});R.setChannel(u);window.__STORYBOOK_ADDONS_CHANNEL__=u;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=u);const P={"./src/components/Avatar/Avatar.stories.tsx":async()=>t(()=>import("./Avatar.stories-25NpbKlw.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url),"./src/components/Badge/Badge.stories.tsx":async()=>t(()=>import("./Badge.stories-dF44Ho6K.js"),__vite__mapDeps([7,5,1,6]),import.meta.url),"./src/components/Box/Box.stories.tsx":async()=>t(()=>import("./Box.stories-HmrN6GKa.js"),__vite__mapDeps([8,5,1,6]),import.meta.url),"./src/components/Button/Button.stories.tsx":async()=>t(()=>import("./Button.stories-PVl4JgP6.js"),__vite__mapDeps([9,10,4,1,5,6]),import.meta.url),"./src/components/Checkbox/Checkbox.stories.tsx":async()=>t(()=>import("./Checkbox.stories-L8SsXvBe.js"),__vite__mapDeps([11,1,2,3,4,12,13,6]),import.meta.url),"./src/components/Collapsible/Collapsible.stories.tsx":async()=>t(()=>import("./Collapsible.stories-c3Q7cawP.js"),__vite__mapDeps([14,1,2,3,4,12,15,5,6]),import.meta.url),"./src/components/Dialog/Dialog.stories.tsx":async()=>t(()=>import("./Dialog.stories-daHNBmNg.js"),__vite__mapDeps([16,1,17,2,3,4,12,15,18,19,20,6,10,5]),import.meta.url),"./src/components/Dropdown/Dropdown.stories.tsx":async()=>t(()=>import("./Dropdown.stories-jQCXWRjo.js"),__vite__mapDeps([21,1,4,2,3,12,22,23,15,18,19,24,13,20,6,10,5]),import.meta.url),"./src/components/Input/Input.stories.tsx":async()=>t(()=>import("./Input.stories-zC4aX495.js"),__vite__mapDeps([25,5,1,6]),import.meta.url),"./src/components/Sheet/Sheet.stories.tsx":async()=>t(()=>import("./Sheet.stories-Xmk6-ODI.js"),__vite__mapDeps([26,1,17,2,3,4,12,15,18,19,20,6,5,10]),import.meta.url),"./src/components/Sidebar/Sidebar.stories.tsx":async()=>t(()=>import("./Sidebar.stories-1GLy9fwn.js"),__vite__mapDeps([27,1,28,4,6]),import.meta.url),"./src/components/Sidebar/SidebarHeader.stories.tsx":async()=>t(()=>import("./SidebarHeader.stories-7M8cRIpR.js"),__vite__mapDeps([29,1,28,4,6]),import.meta.url),"./src/components/Sidebar/SidebarItem.stories.tsx":async()=>t(()=>import("./SidebarItem.stories-pq2dbROU.js"),__vite__mapDeps([30,1,28,4,6]),import.meta.url),"./src/components/Skeleton/Skeleton.stories.tsx":async()=>t(()=>import("./Skeleton.stories-BFN_clI0.js"),__vite__mapDeps([31,6,1]),import.meta.url),"./src/components/Spinner/Spinner.stories.tsx":async()=>t(()=>import("./Spinner.stories-wjT_t-dg.js"),__vite__mapDeps([32,1,6]),import.meta.url),"./src/components/Table/DataTable.stories.tsx":async()=>t(()=>import("./DataTable.stories-30AEvakz.js"),__vite__mapDeps([33,1,34,6]),import.meta.url),"./src/components/Table/Table.stories.tsx":async()=>t(()=>import("./Table.stories-rCtOmZB8.js"),__vite__mapDeps([35,1,34,6]),import.meta.url),"./src/components/Tabs/Tabs.stories.tsx":async()=>t(()=>import("./Tabs.stories-DRFZNt5Q.js"),__vite__mapDeps([36,1,2,3,4,12,23,22,15,6]),import.meta.url),"./src/components/Tag/Tag.stories.tsx":async()=>t(()=>import("./Tag.stories-8ekUS2WW.js"),__vite__mapDeps([37,5,1,6]),import.meta.url),"./src/components/Toast/Toast.stories.tsx":async()=>t(()=>import("./Toast.stories-7ZPf1IOi.js"),__vite__mapDeps([38,1,2,3,4,12,22,18,20,39,5,6,10]),import.meta.url),"./src/components/Tooltip/Tooltip.stories.tsx":async()=>t(()=>import("./Tooltip.stories-LPqiL2ht.js"),__vite__mapDeps([40,1,2,3,4,12,18,15,24,13,39,6]),import.meta.url),"./src/docs/Introduction.mdx":async()=>t(()=>import("./Introduction-03n4qc18.js"),__vite__mapDeps([41,42,1,43,44,3,4,45,46,47]),import.meta.url),"./src/docs/Tailwind.mdx":async()=>t(()=>import("./Tailwind-dvObG5AE.js"),__vite__mapDeps([48,42,1,43,44,3,4,45,46,47]),import.meta.url),"./src/docs/Utilitiets.mdx":async()=>t(()=>import("./Utilitiets-d93Pp3M-.js"),__vite__mapDeps([49,42,1,43,44,3,4,45,46,47]),import.meta.url)};async function v(i){return P[i]()}const{composeConfigs:L,PreviewWeb:I,ClientApi:V}=__STORYBOOK_MODULE_PREVIEW_API__,A=async()=>{const i=await Promise.all([t(()=>import("./entry-preview-ulNEgYIM.js"),__vite__mapDeps([50,1,51,3]),import.meta.url),t(()=>import("./entry-preview-docs-ctPH9mRJ.js"),__vite__mapDeps([52,46,1,47]),import.meta.url),t(()=>import("./preview-yRq1Lj6j.js"),__vite__mapDeps([53,45]),import.meta.url),t(()=>import("./preview-OycS66dC.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-1q4RDNOi.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-6iG64ELu.js"),__vite__mapDeps([54,47]),import.meta.url),t(()=>import("./preview-zZA4w0lH.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-MdQXpms2.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-u8M_OEO2.js"),__vite__mapDeps([55,47]),import.meta.url),t(()=>import("./preview-bEa2SesL.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-e7UF-SUK.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-bicOdALM.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-eCzfx1h3.js"),__vite__mapDeps([56,1,57]),import.meta.url)]);return L(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new I(v,A);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{t as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Avatar.stories-25NpbKlw.js","./index-OjgoNOWw.js","./index-ttJ0zls6.js","./index-mQqIOHEI.js","./index-jKYK_Gmc.js","./index-polp_dyw.js","./index-FlAvnLNT.js","./Badge.stories-dF44Ho6K.js","./Box.stories-HmrN6GKa.js","./Button.stories-PVl4JgP6.js","./Button-1fD2P03D.js","./Checkbox.stories-L8SsXvBe.js","./index-39R-7JO1.js","./index-DTfSmp9M.js","./Collapsible.stories-c3Q7cawP.js","./index-juKxXFC6.js","./Dialog.stories-daHNBmNg.js","./index-UGFCTDXo.js","./index-lFYSAZig.js","./index-Qrw1f8GM.js","./index-pT7Q2Giz.js","./Dropdown.stories-jQCXWRjo.js","./index-kNhmewn5.js","./index-7ijoOKG-.js","./index-39veLG-x.js","./Input.stories-zC4aX495.js","./Sheet.stories-Xmk6-ODI.js","./Sidebar.stories-1GLy9fwn.js","./icons-vep5DSc3.js","./SidebarHeader.stories-7M8cRIpR.js","./SidebarItem.stories-pq2dbROU.js","./Skeleton.stories-BFN_clI0.js","./Spinner.stories-wjT_t-dg.js","./DataTable.stories-30AEvakz.js","./DataTable-oeEbKf89.js","./Table.stories-rCtOmZB8.js","./Tabs.stories-DRFZNt5Q.js","./Tag.stories-8ekUS2WW.js","./Toast.stories-7ZPf1IOi.js","./index-7R9aDw1t.js","./Tooltip.stories-LPqiL2ht.js","./Introduction-03n4qc18.js","./jsx-runtime-DtaoT6pD.js","./index-7dsiwP88.js","./index-fBaE_RH1.js","./index-ZKB_KljB.js","./index-XkRcYS9h.js","./index-PPLHz8o0.js","./Tailwind-dvObG5AE.js","./Utilitiets-d93Pp3M-.js","./entry-preview-ulNEgYIM.js","./react-18-DyM-o0Ps.js","./entry-preview-docs-ctPH9mRJ.js","./preview-yRq1Lj6j.js","./preview-6iG64ELu.js","./preview-u8M_OEO2.js","./preview-eCzfx1h3.js","./preview-IvbBo7bw.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}