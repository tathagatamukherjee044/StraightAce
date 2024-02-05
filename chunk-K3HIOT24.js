import{a as _n,m as Tn}from"./chunk-W3SHQOW5.js";import{h as A}from"./chunk-T4SUBFUZ.js";import{a as cn}from"./chunk-LF5XB4YN.js";import{d as F}from"./chunk-FQ65QLOX.js";var fn,Pe=e=>(e.forEach(t=>{for(let a in t)if(t.hasOwnProperty(a)){let s=t[a];if(a==="easing"){let u="animation-timing-function";t[u]=s,delete t[a]}else{let u=_e(a);u!==a&&(t[u]=s,delete t[a])}}}),e),_e=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ln=e=>{if(fn===void 0){let t=e.style.animationName!==void 0,a=e.style.webkitAnimationName!==void 0;fn=!t&&a?"-webkit-":""}return fn},l=(e,t,a)=>{let s=t.startsWith("animation")?ln(e):"";e.style.setProperty(s+t,a)},b=(e,t)=>{let a=t.startsWith("animation")?ln(e):"";e.style.removeProperty(a+t)},Te=(e,t)=>{let a,s={passive:!0},u=()=>{a&&a()},h=L=>{e===L.target&&(u(),t(L))};return e&&(e.addEventListener("webkitAnimationEnd",h,s),e.addEventListener("animationend",h,s),a=()=>{e.removeEventListener("webkitAnimationEnd",h,s),e.removeEventListener("animationend",h,s)}),u},Ie=(e=[])=>e.map(t=>{let a=t.offset,s=[];for(let u in t)t.hasOwnProperty(u)&&u!=="offset"&&s.push(`${u}: ${t[u]};`);return`${a*100}% { ${s.join(" ")} }`}).join(" "),In=[],De=e=>{let t=In.indexOf(e);return t<0&&(t=In.push(e)-1),`ion-animation-${t}`},ke=e=>{let t=e.getRootNode!==void 0?e.getRootNode():e;return t.head||t},We=(e,t,a)=>{var s;let u=ke(a),h=ln(a),L=u.querySelector("#"+e);if(L)return L;let f=((s=a.ownerDocument)!==null&&s!==void 0?s:document).createElement("style");return f.id=e,f.textContent=`@${h}keyframes ${e} { ${t} } @${h}keyframes ${e}-alt { ${t} }`,u.appendChild(f),f},Z=(e=[],t)=>{if(t!==void 0){let a=Array.isArray(t)?t:[t];return[...e,...a]}return e},Qe=e=>{let t,a,s,u,h,L,f=[],J=[],Q=[],P=!1,m,X={},nn=[],en=[],tn={},T=0,M=!1,Y=!1,H,I,x,D,k=!0,K=!1,O=!0,V,r,q=!1,dn=e,on=[],N=[],G=[],g=[],E=[],an=[],mn=[],gn=[],hn=[],En=[],w=[],xn=typeof AnimationEffect=="function"||cn!==void 0&&typeof cn.AnimationEffect=="function",C=typeof Element=="function"&&typeof Element.prototype.animate=="function"&&xn,Kn=100,yn=()=>w,On=n=>(E.forEach(i=>{i.destroy(n)}),Vn(n),g.length=0,E.length=0,f.length=0,Un(),P=!1,O=!0,r),Vn=n=>{An(),n&&Cn()},Nn=()=>{M=!1,Y=!1,O=!0,I=void 0,x=void 0,D=void 0,T=0,K=!1,k=!0,q=!1},Bn=()=>T!==0&&!q,pn=(n,i)=>{let o=i.findIndex(c=>c.c===n);o>-1&&i.splice(o,1)},zn=(n,i)=>(G.push({c:n,o:i}),r),rn=(n,i)=>((i!=null&&i.oneTimeCallback?N:on).push({c:n,o:i}),r),Un=()=>(on.length=0,N.length=0,r),An=()=>{if(C)w.forEach(n=>{n.cancel()}),w.length=0;else{let n=g.slice();A(()=>{n.forEach(i=>{b(i,"animation-name"),b(i,"animation-duration"),b(i,"animation-timing-function"),b(i,"animation-iteration-count"),b(i,"animation-delay"),b(i,"animation-play-state"),b(i,"animation-fill-mode"),b(i,"animation-direction")})})}},Cn=()=>{an.forEach(n=>{n!=null&&n.parentNode&&n.parentNode.removeChild(n)}),an.length=0},Mn=n=>(mn.push(n),r),Yn=n=>(gn.push(n),r),Hn=n=>(hn.push(n),r),qn=n=>(En.push(n),r),Gn=n=>(J=Z(J,n),r),Zn=n=>(Q=Z(Q,n),r),jn=(n={})=>(X=n,r),Jn=(n=[])=>{for(let i of n)X[i]="";return r},Qn=n=>(nn=Z(nn,n),r),Xn=n=>(en=Z(en,n),r),ne=(n={})=>(tn=n,r),ee=(n=[])=>{for(let i of n)tn[i]="";return r},B=()=>h!==void 0?h:m?m.getFill():"both",W=()=>I!==void 0?I:L!==void 0?L:m?m.getDirection():"normal",z=()=>M?"linear":s!==void 0?s:m?m.getEasing():"linear",v=()=>Y?0:x!==void 0?x:a!==void 0?a:m?m.getDuration():0,S=()=>u!==void 0?u:m?m.getIterations():1,$=()=>D!==void 0?D:t!==void 0?t:m?m.getDelay():0,te=()=>f,ie=n=>(L=n,y(!0),r),oe=n=>(h=n,y(!0),r),ae=n=>(t=n,y(!0),r),re=n=>(s=n,y(!0),r),se=n=>(!C&&n===0&&(n=1),a=n,y(!0),r),ce=n=>(u=n,y(!0),r),fe=n=>(m=n,r),le=n=>{if(n!=null)if(n.nodeType===1)g.push(n);else if(n.length>=0)for(let i=0;i<n.length;i++)g.push(n[i]);else console.error("Invalid addElement value");return r},ue=n=>{if(n!=null)if(Array.isArray(n))for(let i of n)i.parent(r),E.push(i);else n.parent(r),E.push(n);return r},de=n=>{let i=f!==n;return f=n,i&&me(f),r},me=n=>{C?yn().forEach(i=>{let o=i.effect;if(o.setKeyframes)o.setKeyframes(n);else{let c=new KeyframeEffect(o.target,n,o.getTiming());i.effect=c}}):vn()},ge=()=>{mn.forEach(c=>c()),gn.forEach(c=>c());let n=J,i=Q,o=X;g.forEach(c=>{let d=c.classList;n.forEach(p=>d.add(p)),i.forEach(p=>d.remove(p));for(let p in o)o.hasOwnProperty(p)&&l(c,p,o[p])})},he=()=>{sn(),hn.forEach(d=>d()),En.forEach(d=>d());let n=k?1:0,i=nn,o=en,c=tn;g.forEach(d=>{let p=d.classList;i.forEach(_=>p.add(_)),o.forEach(_=>p.remove(_));for(let _ in c)c.hasOwnProperty(_)&&l(d,_,c[_])}),x=void 0,I=void 0,D=void 0,on.forEach(d=>d.c(n,r)),N.forEach(d=>d.c(n,r)),N.length=0,O=!0,k&&(K=!0),k=!0},R=()=>{T!==0&&(T--,T===0&&(he(),m&&m.animationFinish()))},vn=(n=!0)=>{Cn();let i=Pe(f);g.forEach(o=>{if(i.length>0){let c=Ie(i);V=e!==void 0?e:De(c);let d=We(V,c,o);an.push(d),l(o,"animation-duration",`${v()}ms`),l(o,"animation-timing-function",z()),l(o,"animation-delay",`${$()}ms`),l(o,"animation-fill-mode",B()),l(o,"animation-direction",W());let p=S()===1/0?"infinite":S().toString();l(o,"animation-iteration-count",p),l(o,"animation-play-state","paused"),n&&l(o,"animation-name",`${d.id}-alt`),A(()=>{l(o,"animation-name",d.id||null)})}})},Ee=()=>{g.forEach(n=>{let i=n.animate(f,{id:dn,delay:$(),duration:v(),easing:z(),iterations:S(),fill:B(),direction:W()});i.pause(),w.push(i)}),w.length>0&&(w[0].onfinish=()=>{R()})},bn=(n=!0)=>{ge(),f.length>0&&(C?Ee():vn(n)),P=!0},U=n=>{if(n=Math.min(Math.max(n,0),.9999),C)w.forEach(i=>{i.currentTime=i.effect.getComputedTiming().delay+v()*n,i.pause()});else{let i=`-${v()*n}ms`;g.forEach(o=>{f.length>0&&(l(o,"animation-delay",i),l(o,"animation-play-state","paused"))})}},wn=n=>{w.forEach(i=>{i.effect.updateTiming({delay:$(),duration:v(),easing:z(),iterations:S(),fill:B(),direction:W()})}),n!==void 0&&U(n)},Ln=(n=!0,i)=>{A(()=>{g.forEach(o=>{l(o,"animation-name",V||null),l(o,"animation-duration",`${v()}ms`),l(o,"animation-timing-function",z()),l(o,"animation-delay",i!==void 0?`-${i*v()}ms`:`${$()}ms`),l(o,"animation-fill-mode",B()||null),l(o,"animation-direction",W()||null);let c=S()===1/0?"infinite":S().toString();l(o,"animation-iteration-count",c),n&&l(o,"animation-name",`${V}-alt`),A(()=>{l(o,"animation-name",V||null)})})})},y=(n=!1,i=!0,o)=>(n&&E.forEach(c=>{c.update(n,i,o)}),C?wn(o):Ln(i,o),r),ye=(n=!1,i)=>(E.forEach(o=>{o.progressStart(n,i)}),Sn(),M=n,P||bn(),y(!1,!0,i),r),pe=n=>(E.forEach(i=>{i.progressStep(n)}),U(n),r),Ae=(n,i,o)=>(M=!1,E.forEach(c=>{c.progressEnd(n,i,o)}),o!==void 0&&(x=o),K=!1,k=!0,n===0?(I=W()==="reverse"?"normal":"reverse",I==="reverse"&&(k=!1),C?(y(),U(1-i)):(D=(1-i)*v()*-1,y(!1,!1))):n===1&&(C?(y(),U(i)):(D=i*v()*-1,y(!1,!1))),n!==void 0&&!m&&Fn(),r),Sn=()=>{P&&(C?w.forEach(n=>{n.pause()}):g.forEach(n=>{l(n,"animation-play-state","paused")}),q=!0)},Ce=()=>(E.forEach(n=>{n.pause()}),Sn(),r),ve=()=>{H=void 0,R()},sn=()=>{H&&clearTimeout(H)},be=()=>{if(sn(),A(()=>{g.forEach(n=>{f.length>0&&l(n,"animation-play-state","running")})}),f.length===0||g.length===0)R();else{let n=$()||0,i=v()||0,o=S()||1;isFinite(o)&&(H=setTimeout(ve,n+i*o+Kn)),Te(g[0],()=>{sn(),A(()=>{we(),A(R)})})}},we=()=>{g.forEach(n=>{b(n,"animation-duration"),b(n,"animation-delay"),b(n,"animation-play-state")})},Le=()=>{w.forEach(n=>{n.play()}),(f.length===0||g.length===0)&&R()},Se=()=>{C?(U(0),wn()):Ln()},Fn=n=>new Promise(i=>{n!=null&&n.sync&&(Y=!0,rn(()=>Y=!1,{oneTimeCallback:!0})),P||bn(),K&&(Se(),K=!1),O&&(T=E.length+1,O=!1);let o=()=>{pn(c,N),i()},c=()=>{pn(o,G),i()};rn(c,{oneTimeCallback:!0}),zn(o,{oneTimeCallback:!0}),E.forEach(d=>{d.play()}),C?Le():be(),q=!1}),Fe=()=>{E.forEach(n=>{n.stop()}),P&&(An(),P=!1),Nn(),G.forEach(n=>n.c(0,r)),G.length=0},Pn=(n,i)=>{let o=f[0];return o!==void 0&&(o.offset===void 0||o.offset===0)?o[n]=i:f=[{offset:0,[n]:i},...f],r};return r={parentAnimation:m,elements:g,childAnimations:E,id:dn,animationFinish:R,from:Pn,to:(n,i)=>{let o=f[f.length-1];return o!==void 0&&(o.offset===void 0||o.offset===1)?o[n]=i:f=[...f,{offset:1,[n]:i}],r},fromTo:(n,i,o)=>Pn(n,i).to(n,o),parent:fe,play:Fn,pause:Ce,stop:Fe,destroy:On,keyframes:de,addAnimation:ue,addElement:le,update:y,fill:oe,direction:ie,iterations:ce,duration:se,easing:re,delay:ae,getWebAnimations:yn,getKeyframes:te,getFill:B,getDirection:W,getDelay:$,getIterations:S,getEasing:z,getDuration:v,afterAddRead:Hn,afterAddWrite:qn,afterClearStyles:ee,afterStyles:ne,afterRemoveClass:Xn,afterAddClass:Qn,beforeAddRead:Mn,beforeAddWrite:Yn,beforeClearStyles:Jn,beforeStyles:jn,beforeRemoveClass:Zn,beforeAddClass:Gn,onFinish:rn,isRunning:Bn,progressStart:ye,progressStep:pe,progressEnd:Ae}};var $e="ionViewWillEnter",Re="ionViewDidEnter",xe="ionViewWillLeave",Ke="ionViewDidLeave",tt="ionViewWillUnload",Oe=()=>import("./chunk-XANJO3GE.js"),Ve=()=>import("./chunk-HG46ZZQA.js"),it=e=>new Promise((t,a)=>{Tn(()=>{Ne(e),Be(e).then(s=>{s.animation&&s.animation.destroy(),Dn(e),t(s)},s=>{Dn(e),a(s)})})}),Ne=e=>{let t=e.enteringEl,a=e.leavingEl;qe(t,a,e.direction),e.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),kn(t,!1),t.style.setProperty("pointer-events","none"),a&&(kn(a,!1),a.style.setProperty("pointer-events","none"))},Be=e=>F(void 0,null,function*(){let t=yield ze(e);return t&&_n.isBrowser?Ue(t,e):Me(e)}),Dn=e=>{let t=e.enteringEl,a=e.leavingEl;t.classList.remove("ion-page-invisible"),t.style.removeProperty("pointer-events"),a!==void 0&&(a.classList.remove("ion-page-invisible"),a.style.removeProperty("pointer-events"))},ze=e=>F(void 0,null,function*(){return!e.leavingEl||!e.animated||e.duration===0?void 0:e.animationBuilder?e.animationBuilder:e.mode==="ios"?(yield Oe()).iosTransitionAnimation:(yield Ve()).mdTransitionAnimation}),Ue=(e,t)=>F(void 0,null,function*(){yield Wn(t,!0);let a=e(t.baseEl,t);$n(t.enteringEl,t.leavingEl);let s=yield He(a,t);return t.progressCallback&&t.progressCallback(void 0),s&&Rn(t.enteringEl,t.leavingEl),{hasCompleted:s,animation:a}}),Me=e=>F(void 0,null,function*(){let t=e.enteringEl,a=e.leavingEl;return yield Wn(e,!1),$n(t,a),Rn(t,a),{hasCompleted:!0}}),Wn=(e,t)=>F(void 0,null,function*(){(e.deepWait!==void 0?e.deepWait:t)&&(yield Promise.all([un(e.enteringEl),un(e.leavingEl)])),yield Ye(e.viewIsReady,e.enteringEl)}),Ye=(e,t)=>F(void 0,null,function*(){e&&(yield e(t))}),He=(e,t)=>{let a=t.progressCallback,s=new Promise(u=>{e.onFinish(h=>u(h===1))});return a?(e.progressStart(!0),a(e)):e.play(),s},$n=(e,t)=>{j(t,xe),j(e,$e)},Rn=(e,t)=>{j(e,Re),j(t,Ke)},j=(e,t)=>{if(e){let a=new CustomEvent(t,{bubbles:!1,cancelable:!1});e.dispatchEvent(a)}},ot=()=>new Promise(e=>A(()=>A(()=>e()))),un=e=>F(void 0,null,function*(){let t=e;if(t){if(t.componentOnReady!=null){if((yield t.componentOnReady())!=null)return}else if(t.__registerHost!=null){yield new Promise(s=>A(s));return}yield Promise.all(Array.from(t.children).map(un))}}),kn=(e,t)=>{t?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))},qe=(e,t,a)=>{e!==void 0&&(e.style.zIndex=a==="back"?"99":"101"),t!==void 0&&(t.style.zIndex="100")},at=e=>{if(e.classList.contains("ion-page"))return e;let t=e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");return t||e};export{Qe as a,$e as b,Re as c,xe as d,Ke as e,tt as f,it as g,ot as h,un as i,at as j};
