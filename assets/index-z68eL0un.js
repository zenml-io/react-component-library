var A=function(){return A=Object.assign||function(n){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&(n[c]=t[c])}return n},A.apply(this,arguments)};function P(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t}function W(e,n,t){if(t||arguments.length===2)for(var r=0,a=n.length,c;r<a;r++)(c||!(r in n))&&(c||(c=Array.prototype.slice.call(n,0,r)),c[r]=n[r]);return e.concat(c||Array.prototype.slice.call(n))}var O,m=function(){if(O)return O;if(typeof __webpack_nonce__<"u")return __webpack_nonce__},M=function(e){if(typeof document>"u")return null;var n=Array.isArray(e)?e[0]:e;return n.ownerDocument.body},f=new WeakMap,p=new WeakMap,l={},v=0,g=function(e){return e&&(e.host||g(e.parentNode))},j=function(e,n){return n.map(function(t){if(e.contains(t))return t;var r=g(t);return r&&e.contains(r)?r:(console.error("aria-hidden",t,"in not contained inside",e,". Doing nothing"),null)}).filter(function(t){return!!t})},k=function(e,n,t,r){var a=j(n,Array.isArray(e)?e:[e]);l[t]||(l[t]=new WeakMap);var c=l[t],y=[],s=new Set,S=new Set(a),h=function(u){!u||s.has(u)||(s.add(u),h(u.parentNode))};a.forEach(h);var _=function(u){!u||S.has(u)||Array.prototype.forEach.call(u.children,function(o){if(s.has(o))_(o);else try{var i=o.getAttribute(r),d=i!==null&&i!=="false",b=(f.get(o)||0)+1,w=(c.get(o)||0)+1;f.set(o,b),c.set(o,w),y.push(o),b===1&&d&&p.set(o,!0),w===1&&o.setAttribute(t,"true"),d||o.setAttribute(r,"true")}catch(E){console.error("aria-hidden: cannot operate on ",o,E)}})};return _(n),s.clear(),v++,function(){y.forEach(function(u){var o=f.get(u)-1,i=c.get(u)-1;f.set(u,o),c.set(u,i),o||(p.has(u)||u.removeAttribute(r),p.delete(u)),i||u.removeAttribute(t)}),v--,v||(f=new WeakMap,f=new WeakMap,p=new WeakMap,l={})}},x=function(e,n,t){t===void 0&&(t="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),a=n||M(e);return a?(r.push.apply(r,Array.from(a.querySelectorAll("[aria-live]"))),k(r,a,t,"aria-hidden")):function(){return null}};export{A as _,P as a,W as b,m as g,x as h};
