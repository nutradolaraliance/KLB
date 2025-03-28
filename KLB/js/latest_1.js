(()=>{"use strict";var e={262:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Random=void 0,t.Random=class{static chooseOne(e){return e[Math.floor(Math.random()*e.length)]}}},745:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UnicodeHasher=void 0;class r{static encode(e){return e.replace(/[0-9]/g,(e=>r.map[e]))}static decode(e){const t=Object.values(r.map).join(""),n=new RegExp(`[${t}]`,"g");return e.replace(n,(e=>Object.keys(r.map).find((t=>r.map[t]===e))||""))}static encodeAndInsert(e,t,n=1){const o=r.encode(e);return`${t.slice(0,n)}${o}${t.slice(n)}`}static decodeAndExtract(e){const t=Object.values(r.map).join(""),n=new RegExp(`[${t}]`,"g");let o="";return e.replace(n,(e=>{const t=Object.keys(r.map).find((t=>r.map[t]===e));return t&&(o+=t),e})),""!==o?o:null}static removeAllEncodedChars(e){const t=Object.values(r.map).join(""),n=new RegExp(`[${t}]`,"g");return e.replace(n,"")}}t.UnicodeHasher=r,r.map={0:"​",1:"‌",2:"‍",3:"⁠",4:"⁡",5:"⁢",6:"⁣",7:"⁤",8:"‪",9:"‬"}},202:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UrlRebuilder=void 0;const n=r(262),o=r(745);class a{static randomizePhoneNumberIfNecessary(e){var t;const r=null!==(t=window.phones)&&void 0!==t?t:[];if(0===r.length)return e;const o=n.Random.chooseOne(r);return e.includes("phone=")?a.withReplaceQueryParam(e,"phone",o):e.includes("wa.me")?`https://wa.me/${o}?${e.split("?")[1]}`:e}static insertAdIdInWppUrl(e,t){var r;const n=null!==(r=a.getQueryParams(e).get("text"))&&void 0!==r?r:"Olá",i=t.replace(/[^0-9]/g,""),l=o.UnicodeHasher.removeAllEncodedChars(n),s=o.UnicodeHasher.encodeAndInsert(i,l);return a.withReplaceQueryParam(e,"text",s)}static getAdId(e){var t;const r=null!==(t=e.get("utm_content"))&&void 0!==t?t:"";return r.includes("|")?r.split("|")[1]:null}static getQueryParams(e){const t=e.split("?")[1];return new URLSearchParams(t)}static withReplaceQueryParam(e,t,r){const n=e.split("?")[0],o=e.split("?")[1],a=new URLSearchParams(o);return a.set(t,r),`${n}?${a.toString()}`}static removeSpecialCharacteres(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^\w\s-|]/gi,"").replace(/\s/g,"")}}t.UrlRebuilder=a}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}(()=>{var e,t,n,o;const a=r(202);console.log("utms script loaded! 2.3.12");const i={ignoreAllIframes:!!document.querySelector("[data-utmify-ignore-iframe]"),ignoreScriptRetry:!!document.querySelector("[data-utmify-ignore-retry]"),fastStart:!!document.querySelector("[data-utmify-fast-start]"),replacePlusSignal:!!document.querySelector("[data-utmify-plus-signal]"),isClickBank:!!document.querySelector("[data-utmify-is-click-bank]"),preventSubIds:!!document.querySelector("[data-utmify-prevent-subids]"),fixShopifyTheme:!!document.querySelector("[data-utmify-fix-shopify-theme]"),ignoreClasses:null===(n=null===(t=null===(e=document.querySelector("[data-utmify-ignore-classes]"))||void 0===e?void 0:e.getAttribute("data-utmify-ignore-classes"))||void 0===t?void 0:t.split(" "))||void 0===n?void 0:n.filter((e=>!!e)),replaceLinks:null===(o=document.querySelector("[data-utmify-replace-links]"))||void 0===o?void 0:o.getAttribute("data-utmify-replace-links"),isCartpanda:!!document.querySelector("[data-utmify-is-cartpanda]"),preventXcodSck:!!document.querySelector("[data-utmify-prevent-xcod-sck]")};var l,s;!function(e){e.Doppus="doppus"}(l||(l={})),function(e){e.PandaVideo="pandavideo.com",e.YouTube="youtube.com",e.EplayVideo="eplay.video",e.Vimeo="vimeo.com"}(s||(s={}));const c=["utm_source","utm_campaign","utm_medium","utm_content","utm_term"];class u{static addUtmParametersToUrl(e){const t=u.urlWithoutParams(e),r=u.paramsFromUrl(e),n=u.getUtmParameters(),o=new URLSearchParams;r.forEach(((e,t)=>o.append(t,e))),n.forEach(((e,t)=>o.append(t,e)));const a=u.urlParametersWithoutDuplicates(o),l=u.simplifyParametersIfNecessary(t,a),s=i.replacePlusSignal?l.toString().split("+").join("%20"):l.toString(),c=-1===t.indexOf("?")?"?":"&";return`${t}${c}${s}`}static urlWithoutParams(e){return e.split("?")[0]}static paramsFromUrl(e){if(!e)return new URLSearchParams;const t=e instanceof URL?e.href:e;if(!t.includes("?"))return new URLSearchParams;const r=t.split("?");if(r.length<=1)return new URLSearchParams;const n=r[1];return new URLSearchParams(n)}static urlParametersWithoutDuplicates(e){const t=Array.from(e.keys()),r=new Map;t.forEach((t=>{const n=e.getAll(t);r.set(t,n[n.length-1])}));const n=new URLSearchParams;return r.forEach(((e,t)=>{n.append(t,e)})),n}static getUtmParameters(){const e="hQwK21wXxR",t=new URLSearchParams(window.location.search);function r(e){const r=t.get(e);if(null!=r&&"null"!==r&&"undefined"!==r&&""!==r)return r;const n=localStorage.getItem(e);if(!n)return"";const o=localStorage.getItem(m(e));return!o||new Date(o)<new Date?(localStorage.removeItem(e),localStorage.removeItem(m(e)),""):n}function n(e,t){return e.join(t)}const o=r("utm_term"),l=r("utm_content"),s=r("utm_medium"),c=r("utm_campaign"),u=function(e){const t=function(){var e;const t=localStorage.getItem("lead");if(!t)return null;const r=JSON.parse(t);return null!==(e=null==r?void 0:r._id)&&void 0!==e?e:null}();return t?e.includes("jLj")?e:`${e}jLj${t}`:e}(r("utm_source")),d=r("gclid"),p=new URLSearchParams,v=r("cid");i.isCartpanda?p.set("cid",v||Math.round(1e11*Math.random()).toString()):v&&p.set("cid",v),null!=d&&""!==d&&p.set("gclid",d),p.set("utm_source",u),p.set("utm_campaign",c),p.set("utm_medium",s),p.set("utm_content",l),p.set("utm_term",o),i.isClickBank?(p.set("aff_sub1",a.UrlRebuilder.removeSpecialCharacteres(u)),p.set("aff_sub2",a.UrlRebuilder.removeSpecialCharacteres(c).replace(/\|(?=\d{10,}$)(?!.*\|)/,"cKBk")),p.set("aff_sub3",a.UrlRebuilder.removeSpecialCharacteres(s).replace(/\|(?=\d{10,}$)(?!.*\|)/,"cKBk")),p.set("aff_sub4",a.UrlRebuilder.removeSpecialCharacteres(l).replace(/\|(?=\d{10,}$)(?!.*\|)/,"cKBk")),p.set("aff_sub5",a.UrlRebuilder.removeSpecialCharacteres(o))):i.preventSubIds||(p.set("subid",a.UrlRebuilder.removeSpecialCharacteres(u)),p.set("sid2",a.UrlRebuilder.removeSpecialCharacteres(c)),p.set("subid2",a.UrlRebuilder.removeSpecialCharacteres(c)),p.set("subid3",a.UrlRebuilder.removeSpecialCharacteres(s)),p.set("subid4",a.UrlRebuilder.removeSpecialCharacteres(l)),p.set("subid5",a.UrlRebuilder.removeSpecialCharacteres(c)));const f=r("src");null!=f&&""!==f&&p.set("src",f);const h=[u,c,s,l,o],g=h.every((e=>""===e)),S=r("xcod"),y=r("sck");if(i.preventXcodSck)S&&p.set("xcod",S),y&&p.set("sck",y);else{const t=n(h,e),r=function(e,t,r){if(e.length<=255)return e;const o=Math.floor(18.8);function a(e,t,r){function n(e){return e.substring(0,o)+"..."}if(!t)return n(e);const a=null!=r?r:"|",i=e.split(a),l=i.length>1?i[i.length-1]:"";return`${n(1===i.length?i[0]:i.slice(0,-1).join(a))}${a}${l}`}const[i,l,s,c,u]=e.split(r);return n([a(i,!0,"jLj"),a(l,!0),a(s,!0),a(c,!0),a(u,!1)],r)}(g?""!==S?S:f:t,0,e);p.set("xcod",r),p.set("sck",r)}const w=t.get("fbclid");null!=w&&""!==w&&p.set("fbclid",w);const b=r("utm_id");return b&&p.set("utm_id",b),(()=>{const e=e=>null==e||""===e,t=r("utm_source"),n=r("utm_medium"),o=r("utm_campaign"),a=r("utm_content"),i=r("utm_term"),l=r("xcod"),s=r("src"),c=p.get("fbclid");return e(t)&&e(n)&&e(o)&&e(a)&&e(i)&&e(l)&&e(s)&&e(c)})()&&p.set("utm_source","organic"),window.utmParams=p,p}static simplifyParametersIfNecessary(e,t){if(!Object.values(l).some((t=>e.includes(t))))return t;const r=new URLSearchParams;return t.forEach(((e,t)=>{c.includes(t)&&r.append(t,e)})),r}}window.paramsList=["utm_source","utm_campaign","utm_medium","utm_content","utm_term","xcod","src"],window.itemExpInDays=7;const d=["utm_source","utm_campaign","utm_medium","utm_content","xcod","sck"];function m(e){return`${e}_exp`}function p(){function e(e){document.querySelectorAll("a").forEach((t=>{var r;if(!(t.href.startsWith("mailto:")||t.href.startsWith("tel:")||t.href.includes("#")||(null===(r=null==i?void 0:i.ignoreClasses)||void 0===r?void 0:r.some((e=>t.classList.contains(e)))))){if(n=t.href,["wa.me/","api.whatsapp.com/send","whatsapp:","link.dispara.ai/","random.lailla.io/"].some((e=>n.includes(e)))){const e=u.getUtmParameters(),r=a.UrlRebuilder.getAdId(e);return t.href=a.UrlRebuilder.randomizePhoneNumberIfNecessary(t.href),void(t.href=a.UrlRebuilder.insertAdIdInWppUrl(t.href,null!=r?r:""))}var n;if(e&&d.every((e=>t.href.includes(e))))return;t.href=u.addUtmParametersToUrl(t.href),i.replaceLinks&&function(e,t){var r,n;if("true"===e.getAttribute("data-replaced-element"))return;if(t&&!(null===(r=e[t.property])||void 0===r?void 0:r.includes(t.value)))return;const o=document.createElement(e.tagName);for(const t of e.attributes)o.setAttribute(t.name,t.value);o.setAttribute("data-replaced-element","true"),o.innerHTML=e.innerHTML,null===(n=e.parentNode)||void 0===n||n.replaceChild(o,e)}(t,{property:"href",value:i.replaceLinks})}}))}function t(e){document.querySelectorAll("form").forEach((t=>{var r;e&&d.every((e=>t.action.includes(e)))||(null===(r=null==i?void 0:i.ignoreClasses)||void 0===r?void 0:r.some((e=>t.classList.contains(e))))||(t.action=u.addUtmParametersToUrl(t.action),u.getUtmParameters().forEach(((e,r)=>{const n=(o=r,t.querySelector(`input[name="${o}"]`));var o;if(n)return void n.setAttribute("value",e);const a=((e,t)=>{const r=document.createElement("input");return r.type="hidden",r.name=e,r.value=t,r})(r,e);t.appendChild(a)})))}))}!function(){const e=new URLSearchParams(window.location.search);window.paramsList.forEach((t=>{const r=e.get(t);r&&((e,t)=>{localStorage.setItem(e,t);const r=new Date((new Date).getTime()+24*window.itemExpInDays*60*60*1e3);localStorage.setItem(m(e),r.toISOString())})(t,r)}))}();const r=function(){var e,t,r,n,o,a,l,s,c,u,d,m,p,v,f,h,g,S,y,w,b,U;const{fixShopifyTheme:_}=i,R=null!==(t=null===(e=null===window||void 0===window?void 0:window.BOOMR)||void 0===e?void 0:e.themeName)&&void 0!==t?t:null===(n=null===(r=null===window||void 0===window?void 0:window.Shopify)||void 0===r?void 0:r.theme)||void 0===n?void 0:n.schema_name,P=null!==(o=null==R?void 0:R.includes("Dropmeta"))&&void 0!==o&&o,L=null!==(a=null==R?void 0:R.includes("Warehouse"))&&void 0!==a&&a,E=null!==(l=null==R?void 0:R.includes("Classic®"))&&void 0!==l&&l,A=null!==(s=null==R?void 0:R.includes("Tema Vision"))&&void 0!==s&&s,I=null!==(c=null==R?void 0:R.includes("Waresabino"))&&void 0!==c&&c,k=null!==(u=null==R?void 0:R.includes("Dawn"))&&void 0!==u&&u,x=null!==(d=null==R?void 0:R.includes("Vortex"))&&void 0!==d&&d,C=null!==(m=null==R?void 0:R.includes("Warepro"))&&void 0!==m&&m,T=null!==(p=null==R?void 0:R.includes("Wareimadigital"))&&void 0!==p&&p,$=null!==(v=null==R?void 0:R.includes("Mercado Livre"))&&void 0!==v&&v,j=null!==(f=null==R?void 0:R.includes("Tema Evolution®"))&&void 0!==f&&f,O=null!==(h=null==R?void 0:R.includes("Evolution Enterprise"))&&void 0!==h&&h,N=null!==(g=null==R?void 0:R.includes("Tema Sabino Vision"))&&void 0!==g&&g,q=null!==(S=null==R?void 0:R.includes("Split"))&&void 0!==S&&S,M=null!==(y=null==R?void 0:R.includes("WART"))&&void 0!==y&&y,W=null!==(w=null==R?void 0:R.includes("Vogal"))&&void 0!==w&&w,D=null!==(b=null==R?void 0:R.includes("Aurohra 2.0"))&&void 0!==b&&b,V=null!==(U=null==R?void 0:R.includes("RAWART"))&&void 0!==U&&U;return _||P||L||E||A||I||k||x||C||T||$||j||V||O||N||q||M||W||D}();e(),function(){const e=window.open;window.open=function(t,r,n){var o;return t=u.addUtmParametersToUrl(null!==(o=null==t?void 0:t.toString())&&void 0!==o?o:""),e(t,r||"",n||"")}}(),r||(t(),function(){const{body:r}=document;new MutationObserver(((r,n)=>{const o=e=>{if(e.nodeType!==Node.ELEMENT_NODE)return!1;const t=e;return"INPUT"===t.tagName&&"hidden"===(null==t?void 0:t.type)};r.some((e=>Array.from(e.addedNodes).some(o)))||(e(!0),t(!0))})).observe(r,{subtree:!0,childList:!0})}(),i.ignoreAllIframes||document.querySelector('link[href="https://api.vturb.com.br"]')||document.querySelectorAll("iframe").forEach((e=>{var t;Object.values(s).some((t=>e.src.includes(t)))||(null===(t=null==i?void 0:i.ignoreClasses)||void 0===t?void 0:t.some((t=>e.classList.contains(t))))||(e.src=u.addUtmParametersToUrl(e.src))})))}const v=()=>{p(),i.ignoreScriptRetry||(setTimeout(p,2e3),setTimeout(p,3e3),setTimeout(p,5e3),setTimeout(p,9e3))};i.fastStart||"complete"===document.readyState?v():window.addEventListener("load",v)})()})();