import{e as d}from"./chunk-IHMVZ4JZ.js";var a=class{constructor(){this.m=new Map}reset(e){this.m=new Map(Object.entries(e))}get(e,o){let s=this.m.get(e);return s!==void 0?s:o}getBoolean(e,o=!1){let s=this.m.get(e);return s===void 0?o:typeof s=="string"?s==="true":!!s}getNumber(e,o){let s=parseFloat(this.m.get(e));return isNaN(s)?o!==void 0?o:NaN:s}set(e,o){this.m.set(e,o)}},p=new a;var h=t=>b(t),F=(t,e)=>(typeof t=="string"&&(e=t,t=void 0),h(t).includes(e)),b=(t=window)=>{if(typeof t>"u")return[];t.Ionic=t.Ionic||{};let e=t.Ionic.platforms;return e==null&&(e=t.Ionic.platforms=v(t),e.forEach(o=>t.document.documentElement.classList.add(`plt-${o}`))),e},v=t=>{let e=p.get("platform");return Object.keys(l).filter(o=>{let s=e==null?void 0:e[o];return typeof s=="function"?s(t):l[o](t)})},I=t=>c(t)&&!u(t),r=t=>!!(n(t,/iPad/i)||n(t,/Macintosh/i)&&c(t)),M=t=>n(t,/iPhone/i),N=t=>n(t,/iPhone|iPod/i)||r(t),m=t=>n(t,/android|sink/i),O=t=>m(t)&&!n(t,/mobile/i),_=t=>{let e=t.innerWidth,o=t.innerHeight,s=Math.min(e,o),i=Math.max(e,o);return s>390&&s<520&&i>620&&i<800},y=t=>{let e=t.innerWidth,o=t.innerHeight,s=Math.min(e,o),i=Math.max(e,o);return r(t)||O(t)||s>460&&s<820&&i>780&&i<1400},c=t=>S(t,"(any-pointer:coarse)"),P=t=>!c(t),u=t=>f(t)||g(t),f=t=>!!(t.cordova||t.phonegap||t.PhoneGap),g=t=>{let e=t.Capacitor;return!!(e!=null&&e.isNative)},E=t=>n(t,/electron/i),A=t=>{var e;return!!(!((e=t.matchMedia)===null||e===void 0)&&e.call(t,"(display-mode: standalone)").matches||t.navigator.standalone)},n=(t,e)=>e.test(t.navigator.userAgent),S=(t,e)=>{var o;return(o=t.matchMedia)===null||o===void 0?void 0:o.call(t,e).matches},l={ipad:r,iphone:M,ios:N,android:m,phablet:_,tablet:y,cordova:f,capacitor:g,electron:E,pwa:A,mobile:c,mobileweb:I,desktop:P,hybrid:u},j,H=t=>t&&d(t)||j;export{p as a,F as b,H as c};