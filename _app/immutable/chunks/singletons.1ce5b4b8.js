import{H as d,s as v}from"./index.56653d3e.js";const u=[];function b(e,t=d){let s;const n=new Set;function o(a){if(v(e,a)&&(e=a,s)){const c=!u.length;for(const l of n)l[1](),u.push(l,e);if(c){for(let l=0;l<u.length;l+=2)u[l][0](u[l+1]);u.length=0}}}function r(a){o(a(e))}function i(a,c=d){const l=[a,c];return n.add(l),n.size===1&&(s=t(o)||d),a(e),()=>{n.delete(l),n.size===0&&s&&(s(),s=null)}}return{set:o,update:r,subscribe:i}}var g;const E=((g=globalThis.__sveltekit_ayjho5)==null?void 0:g.base)??"/aws-ses-smtp-credentials";var k;const w=((k=globalThis.__sveltekit_ayjho5)==null?void 0:k.assets)??E,y="1678841688773",T="sveltekit:snapshot",I="sveltekit:scroll",x="sveltekit:index",h={tap:1,hover:2,viewport:3,eager:4,off:-1};function O(e){let t=e.baseURI;if(!t){const s=e.getElementsByTagName("base");t=s.length?s[0].href:e.URL}return t}function U(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const p={...h,"":h.hover};function m(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function L(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=m(e)}}function N(e,t){let s;try{s=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const n=e instanceof SVGAElement?e.target.baseVal:e.target,o=!s||!!n||R(s,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external")||e.hasAttribute("download");return{url:s,external:o,target:n}}function V(e){let t=null,s=null,n=null,o=null,r=e;for(;r&&r!==document.documentElement;)s===null&&(s=f(r,"preload-code")),n===null&&(n=f(r,"preload-data")),t===null&&(t=f(r,"noscroll")),o===null&&(o=f(r,"reload")),r=m(r);return{preload_code:p[s??"off"],preload_data:p[n??"off"],noscroll:t==="off"?!1:t===""?!0:null,reload:o==="off"?!1:o===""?!0:null}}function _(e){const t=b(e);let s=!0;function n(){s=!0,t.update(i=>i)}function o(i){s=!1,t.set(i)}function r(i){let a;return t.subscribe(c=>{(a===void 0||s&&c!==a)&&i(a=c)})}return{notify:n,set:o,subscribe:r}}function A(){const{set:e,subscribe:t}=b(!1);let s;async function n(){clearTimeout(s);const o=await fetch(`${w}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(o.ok){const i=(await o.json()).version!==y;return i&&(e(!0),clearTimeout(s)),i}else throw new Error(`Version check failed: ${o.status}`)}return{subscribe:t,check:n}}function R(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function j(e){e.client}const P={url:_({}),page:_({}),navigating:b(null),updated:A()};export{x as I,h as P,I as S,T as a,N as b,V as c,U as d,E as e,L as f,O as g,j as h,R as i,P as s};
