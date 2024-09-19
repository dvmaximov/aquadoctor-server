import{e as mt,f as ht,i as vt,h as gt,r as ke,l as wt,u as pt,a as yt,m as Qe}from"./use-key-composition.a626e275.js";import{w as P,as as bt,o as Ke,g as X,z as de,n as Q,at as Ce,au as xt,av as qe,af as M,G as q,x as je,aw as Et,ac as Ie,ax as Ge,ay as Tt,l as ve,r as W,ah as Xe,ae as Pe,az as He,aA as St,aB as ce,a as kt,ab as Ct,h as B,aC as qt,aD as Pt,aE as Ht,c as E,aF as Lt,m as Ye,p as Ee,aG as Ne}from"./index.227b5c2c.js";const Ue={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Je=["beforeShow","show","beforeHide","hide"];function Ze({showing:e,canShow:t,hideOnRouteChange:o,handleShow:n,handleHide:l,processOnMount:s}){const i=X(),{props:r,emit:c,proxy:u}=i;let d;function g(v){e.value===!0?m(v):y(v)}function y(v){if(r.disable===!0||v!==void 0&&v.qAnchorHandled===!0||t!==void 0&&t(v)!==!0)return;const w=r["onUpdate:modelValue"]!==void 0;w===!0&&(c("update:modelValue",!0),d=v,de(()=>{d===v&&(d=void 0)})),(r.modelValue===null||w===!1)&&a(v)}function a(v){e.value!==!0&&(e.value=!0,c("beforeShow",v),n!==void 0?n(v):c("show",v))}function m(v){if(r.disable===!0)return;const w=r["onUpdate:modelValue"]!==void 0;w===!0&&(c("update:modelValue",!1),d=v,de(()=>{d===v&&(d=void 0)})),(r.modelValue===null||w===!1)&&H(v)}function H(v){e.value!==!1&&(e.value=!1,c("beforeHide",v),l!==void 0?l(v):c("hide",v))}function S(v){r.disable===!0&&v===!0?r["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):v===!0!==e.value&&(v===!0?a:H)(d)}P(()=>r.modelValue,S),o!==void 0&&bt(i)===!0&&P(()=>u.$route.fullPath,()=>{o.value===!0&&e.value===!0&&m()}),s===!0&&Ke(()=>{S(r.modelValue)});const L={show:y,hide:m,toggle:g};return Object.assign(u,L),L}function Bt(e,t,o){let n;function l(){n!==void 0&&(Ce.remove(n),n=void 0)}return Q(()=>{e.value===!0&&l()}),{removeFromHistory:l,addToHistory(){n={condition:()=>o.value===!0,handler:t},Ce.add(n)}}}const Mt=[Element,String],Wt=[null,document,document.body,document.scrollingElement,document.documentElement];function Ft(e,t){let o=xt(t);if(o===void 0){if(e==null)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return Wt.includes(o)?window:o}function $t(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function zt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let se;function At(){if(se!==void 0)return se;const e=document.createElement("p"),t=document.createElement("div");qe(e,{width:"100%",height:"200px"}),qe(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const o=e.offsetWidth;t.style.overflow="scroll";let n=e.offsetWidth;return o===n&&(n=t.clientWidth),t.remove(),se=o-n,se}function Dt(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let J=0,pe,ye,Z,be=!1,Le,Be,Me,_=null;function _t(e){Vt(e)&&je(e)}function Vt(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=Et(e),o=e.shiftKey&&!e.deltaX,n=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),l=o||n?e.deltaY:e.deltaX;for(let s=0;s<t.length;s++){const i=t[s];if(Dt(i,n))return n?l<0&&i.scrollTop===0?!0:l>0&&i.scrollTop+i.clientHeight===i.scrollHeight:l<0&&i.scrollLeft===0?!0:l>0&&i.scrollLeft+i.clientWidth===i.scrollWidth}return!0}function We(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function re(e){be!==!0&&(be=!0,requestAnimationFrame(()=>{be=!1;const{height:t}=e.target,{clientHeight:o,scrollTop:n}=document.scrollingElement;(Z===void 0||t!==window.innerHeight)&&(Z=o-t,document.scrollingElement.scrollTop=n),n>Z&&(document.scrollingElement.scrollTop-=Math.ceil((n-Z)/8))}))}function Fe(e){const t=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:n,overflowX:l}=window.getComputedStyle(t);pe=zt(window),ye=$t(window),Le=t.style.left,Be=t.style.top,Me=window.location.href,t.style.left=`-${pe}px`,t.style.top=`-${ye}px`,l!=="hidden"&&(l==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),n!=="hidden"&&(n==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,M.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",re,q.passiveCapture),window.visualViewport.addEventListener("scroll",re,q.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",We,q.passiveCapture))}M.is.desktop===!0&&M.is.mac===!0&&window[`${e}EventListener`]("wheel",_t,q.notPassive),e==="remove"&&(M.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",re,q.passiveCapture),window.visualViewport.removeEventListener("scroll",re,q.passiveCapture)):window.removeEventListener("scroll",We,q.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=Le,t.style.top=Be,window.location.href===Me&&window.scrollTo(pe,ye),Z=void 0)}function Rt(e){let t="add";if(e===!0){if(J++,_!==null){clearTimeout(_),_=null;return}if(J>1)return}else{if(J===0||(J--,J>0))return;if(t="remove",M.is.ios===!0&&M.is.nativeMobile===!0){_!==null&&clearTimeout(_),_=setTimeout(()=>{Fe(t),_=null},100);return}}Fe(t)}function Ot(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,Rt(t))}}}function et(){let e=null;const t=X();function o(){e!==null&&(clearTimeout(e),e=null)}return Ie(o),Q(o),{removeTimeout:o,registerTimeout(n,l){o(),Ge(t)===!1&&(e=setTimeout(()=>{e=null,n()},l))}}}function Qt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Tt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const $e=["B","KB","MB","GB","TB","PB"];function so(e,t=1){let o=0;for(;parseInt(e,10)>=1024&&o<$e.length-1;)e/=1024,++o;return`${e.toFixed(t)}${$e[o]}`}function ro(e){return e.charAt(0).toUpperCase()+e.slice(1)}function uo(e,t,o){return o<=t?t:Math.min(o,Math.max(t,e))}function co(e,t,o){if(o<=t)return t;const n=o-t+1;let l=t+(e-t)%n;return l<t&&(l=n+l),l===0?0:l}function fo(e,t=2,o="0"){if(e==null)return e;const n=""+e;return n.length>=t?n:new Array(t-n.length+1).join(o)+n}var mo=ve({name:"QField",inheritAttrs:!1,props:{...mt,tag:{type:String,default:"label"}},emits:ht,setup(){return vt(gt({tagProp:!0}))}});const Kt={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},jt={...Kt,contextMenu:Boolean};function It({showing:e,avoidEmit:t,configureAnchorEl:o}){const{props:n,proxy:l,emit:s}=X(),i=W(null);let r=null;function c(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const u={};o===void 0&&(Object.assign(u,{hide(a){l.hide(a)},toggle(a){l.toggle(a),a.qAnchorHandled=!0},toggleKey(a){Xe(a,13)===!0&&u.toggle(a)},contextClick(a){l.hide(a),Pe(a),de(()=>{l.show(a),a.qAnchorHandled=!0})},prevent:Pe,mobileTouch(a){if(u.mobileCleanup(a),c(a)!==!0)return;l.hide(a),i.value.classList.add("non-selectable");const m=a.target;He(u,"anchor",[[m,"touchmove","mobileCleanup","passive"],[m,"touchend","mobileCleanup","passive"],[m,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),r=setTimeout(()=>{r=null,l.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),r!==null&&(clearTimeout(r),r=null),e.value===!0&&a!==void 0&&Qt()}}),o=function(a=n.contextMenu){if(n.noParentEvent===!0||i.value===null)return;let m;a===!0?l.$q.platform.is.mobile===!0?m=[[i.value,"touchstart","mobileTouch","passive"]]:m=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:m=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],He(u,"anchor",m)});function d(){St(u,"anchor")}function g(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;o()}function y(){if(n.target===!1||n.target===""||l.$el.parentNode===null)i.value=null;else if(n.target===!0)g(l.$el.parentNode);else{let a=n.target;if(typeof n.target=="string")try{a=document.querySelector(n.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,o()):(i.value=null,console.error(`Anchor: target "${n.target}" not found`))}}return P(()=>n.contextMenu,a=>{i.value!==null&&(d(),o(a))}),P(()=>n.target,()=>{i.value!==null&&d(),y()}),P(()=>n.noParentEvent,a=>{i.value!==null&&(a===!0?d():o())}),Ke(()=>{y(),t!==!0&&n.modelValue===!0&&i.value===null&&s("update:modelValue",!1)}),Q(()=>{r!==null&&clearTimeout(r),d()}),{anchorEl:i,canShow:c,anchorEvents:u}}function Gt(e,t){const o=W(null);let n;function l(r,c){const u=`${c!==void 0?"add":"remove"}EventListener`,d=c!==void 0?c:n;r!==window&&r[u]("scroll",d,q.passive),window[u]("scroll",d,q.passive),n=c}function s(){o.value!==null&&(l(o.value),o.value=null)}const i=P(()=>e.noParentEvent,()=>{o.value!==null&&(s(),t())});return Q(i),{localScrollTarget:o,unconfigureScrollTarget:s,changeScrollEvent:l}}const I=[];function ho(e){return I.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function tt(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return ce(e)}else if(e.__qPortal===!0){const o=ce(e);return o!==void 0&&o.$options.name==="QPopupProxy"?(e.hide(t),o):e}e=ce(e)}while(e!=null)}function vo(e,t,o){for(;o!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(o--,e.$options.name==="QMenu"){e=tt(e,t);continue}e.hide(t)}e=ce(e)}}const Xt=ve({name:"QPortal",setup(e,{slots:t}){return()=>t.default()}});function Yt(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function ot(e,t,o,n){const l=W(!1),s=W(!1);let i=null;const r={},c=n==="dialog"&&Yt(e);function u(g){if(g===!0){ke(r),s.value=!0;return}s.value=!1,l.value===!1&&(c===!1&&i===null&&(i=Pt(!1,n)),l.value=!0,I.push(e.proxy),wt(r))}function d(g){if(s.value=!1,g!==!0)return;ke(r),l.value=!1;const y=I.indexOf(e.proxy);y!==-1&&I.splice(y,1),i!==null&&(Ht(i),i=null)}return kt(()=>{d(!0)}),e.proxy.__qPortal=!0,Ct(e.proxy,"contentEl",()=>t.value),{showPortal:u,hidePortal:d,portalIsActive:l,portalIsAccessible:s,renderPortal:()=>c===!0?o():l.value===!0?[B(qt,{to:i},B(Xt,o))]:void 0}}const nt={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function lt(e,t=()=>{},o=()=>{}){return{transitionProps:E(()=>{const n=`q-transition--${e.transitionShow||t()}`,l=`q-transition--${e.transitionHide||o()}`;return{appear:!0,enterFromClass:`${n}-enter-from`,enterActiveClass:`${n}-enter-active`,enterToClass:`${n}-enter-to`,leaveFromClass:`${l}-leave-from`,leaveActiveClass:`${l}-leave-active`,leaveToClass:`${l}-leave-to`}}),transitionStyle:E(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function it(){let e;const t=X();function o(){e=void 0}return Ie(o),Q(o),{removeTick:o,registerTick(n){e=n,de(()=>{e===n&&(Ge(t)===!1&&e(),e=void 0)})}}}const V=[];let G;function Nt(e){G=e.keyCode===27}function Ut(){G===!0&&(G=!1)}function Jt(e){G===!0&&(G=!1,Xe(e,27)===!0&&V[V.length-1](e))}function at(e){window[e]("keydown",Nt),window[e]("blur",Ut),window[e]("keyup",Jt),G=!1}function st(e){M.is.desktop===!0&&(V.push(e),V.length===1&&at("addEventListener"))}function fe(e){const t=V.indexOf(e);t!==-1&&(V.splice(t,1),V.length===0&&at("removeEventListener"))}const R=[];function rt(e){R[R.length-1](e)}function ut(e){M.is.desktop===!0&&(R.push(e),R.length===1&&document.body.addEventListener("focusin",rt))}function Te(e){const t=R.indexOf(e);t!==-1&&(R.splice(t,1),R.length===0&&document.body.removeEventListener("focusin",rt))}const{notPassiveCapture:me}=q,O=[];function he(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let o=I.length-1;for(;o>=0;){const n=I[o].$;if(n.type.name==="QTooltip"){o--;continue}if(n.type.name!=="QDialog")break;if(n.props.seamless!==!0)return;o--}for(let n=O.length-1;n>=0;n--){const l=O[n];if((l.anchorEl.value===null||l.anchorEl.value.contains(t)===!1)&&(t===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(t)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function Zt(e){O.push(e),O.length===1&&(document.addEventListener("mousedown",he,me),document.addEventListener("touchstart",he,me))}function ze(e){const t=O.findIndex(o=>o===e);t!==-1&&(O.splice(t,1),O.length===0&&(document.removeEventListener("mousedown",he,me),document.removeEventListener("touchstart",he,me)))}let Ae,De;function _e(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function eo(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const Se={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{Se[`${e}#ltr`]=e,Se[`${e}#rtl`]=e});function Ve(e,t){const o=e.split(" ");return{vertical:o[0],horizontal:Se[`${o[1]}#${t===!0?"rtl":"ltr"}`]}}function to(e,t){let{top:o,left:n,right:l,bottom:s,width:i,height:r}=e.getBoundingClientRect();return t!==void 0&&(o-=t[1],n-=t[0],s+=t[1],l+=t[0],i+=t[0],r+=t[1]),{top:o,bottom:s,height:r,left:n,right:l,width:i,middle:n+(l-n)/2,center:o+(s-o)/2}}function oo(e,t,o){let{top:n,left:l}=e.getBoundingClientRect();return n+=t.top,l+=t.left,o!==void 0&&(n+=o[1],l+=o[0]),{top:n,bottom:n+1,height:1,left:l,right:l+1,width:1,middle:l,center:n}}function no(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function Re(e,t,o,n){return{top:e[o.vertical]-t[n.vertical],left:e[o.horizontal]-t[n.horizontal]}}function ct(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{ct(e,t+1)},10);return}const{targetEl:o,offset:n,anchorEl:l,anchorOrigin:s,selfOrigin:i,absoluteOffset:r,fit:c,cover:u,maxHeight:d,maxWidth:g}=e;if(M.is.ios===!0&&window.visualViewport!==void 0){const F=document.body.style,{offsetLeft:T,offsetTop:x}=window.visualViewport;T!==Ae&&(F.setProperty("--q-pe-left",T+"px"),Ae=T),x!==De&&(F.setProperty("--q-pe-top",x+"px"),De=x)}const{scrollLeft:y,scrollTop:a}=o,m=r===void 0?to(l,u===!0?[0,0]:n):oo(l,r,n);Object.assign(o.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:g||"100vw",maxHeight:d||"100vh",visibility:"visible"});const{offsetWidth:H,offsetHeight:S}=o,{elWidth:L,elHeight:v}=c===!0||u===!0?{elWidth:Math.max(m.width,H),elHeight:u===!0?Math.max(m.height,S):S}:{elWidth:H,elHeight:S};let w={maxWidth:g,maxHeight:d};(c===!0||u===!0)&&(w.minWidth=m.width+"px",u===!0&&(w.minHeight=m.height+"px")),Object.assign(o.style,w);const k=no(L,v);let b=Re(m,k,s,i);if(r===void 0||n===void 0)xe(b,m,k,s,i);else{const{top:F,left:T}=b;xe(b,m,k,s,i);let x=!1;if(b.top!==F){x=!0;const C=2*n[1];m.center=m.top-=C,m.bottom-=C+2}if(b.left!==T){x=!0;const C=2*n[0];m.middle=m.left-=C,m.right-=C+2}x===!0&&(b=Re(m,k,s,i),xe(b,m,k,s,i))}w={top:b.top+"px",left:b.left+"px"},b.maxHeight!==void 0&&(w.maxHeight=b.maxHeight+"px",m.height>b.maxHeight&&(w.minHeight=w.maxHeight)),b.maxWidth!==void 0&&(w.maxWidth=b.maxWidth+"px",m.width>b.maxWidth&&(w.minWidth=w.maxWidth)),Object.assign(o.style,w),o.scrollTop!==a&&(o.scrollTop=a),o.scrollLeft!==y&&(o.scrollLeft=y)}function xe(e,t,o,n,l){const s=o.bottom,i=o.right,r=At(),c=window.innerHeight-r,u=document.body.clientWidth;if(e.top<0||e.top+s>c)if(l.vertical==="center")e.top=t[n.vertical]>c/2?Math.max(0,c-s):0,e.maxHeight=Math.min(s,c);else if(t[n.vertical]>c/2){const d=Math.min(c,n.vertical==="center"?t.center:n.vertical===l.vertical?t.bottom:t.top);e.maxHeight=Math.min(s,d),e.top=Math.max(0,d-s)}else e.top=Math.max(0,n.vertical==="center"?t.center:n.vertical===l.vertical?t.top:t.bottom),e.maxHeight=Math.min(s,c-e.top);if(e.left<0||e.left+i>u)if(e.maxWidth=Math.min(i,u),l.horizontal==="middle")e.left=t[n.horizontal]>u/2?Math.max(0,u-i):0;else if(t[n.horizontal]>u/2){const d=Math.min(u,n.horizontal==="middle"?t.middle:n.horizontal===l.horizontal?t.right:t.left);e.maxWidth=Math.min(i,d),e.left=Math.max(0,d-e.maxWidth)}else e.left=Math.max(0,n.horizontal==="middle"?t.middle:n.horizontal===l.horizontal?t.left:t.right),e.maxWidth=Math.min(i,u-e.left)}var go=ve({name:"QMenu",inheritAttrs:!1,props:{...jt,...Ue,...pt,...nt,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:_e},self:{type:String,validator:_e},offset:{type:Array,validator:eo},scrollTarget:Mt,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Je,"click","escapeKey"],setup(e,{slots:t,emit:o,attrs:n}){let l=null,s,i,r;const c=X(),{proxy:u}=c,{$q:d}=u,g=W(null),y=W(!1),a=E(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),m=yt(e,d),{registerTick:H,removeTick:S}=it(),{registerTimeout:L}=et(),{transitionProps:v,transitionStyle:w}=lt(e),{localScrollTarget:k,changeScrollEvent:b,unconfigureScrollTarget:F}=Gt(e,ie),{anchorEl:T,canShow:x}=It({showing:y}),{hide:C}=Ze({showing:y,canShow:x,handleShow:ne,handleHide:N,hideOnRouteChange:a,processOnMount:!0}),{showPortal:ee,hidePortal:te,renderPortal:K}=ot(c,g,$,"menu"),Y={anchorEl:T,innerRef:g,onClickOutside(f){if(e.persistent!==!0&&y.value===!0)return C(f),(f.type==="touchstart"||f.target.classList.contains("q-dialog__backdrop"))&&je(f),!0}},oe=E(()=>Ve(e.anchor||(e.cover===!0?"center middle":"bottom start"),d.lang.rtl)),ge=E(()=>e.cover===!0?oe.value:Ve(e.self||"top start",d.lang.rtl)),we=E(()=>(e.square===!0?" q-menu--square":"")+(m.value===!0?" q-menu--dark q-dark":"")),z=E(()=>e.autoClose===!0?{onClick:U}:{}),j=E(()=>y.value===!0&&e.persistent!==!0);P(j,f=>{f===!0?(st(h),Zt(Y)):(fe(h),ze(Y))});function A(){Qe(()=>{let f=g.value;f&&f.contains(document.activeElement)!==!0&&(f=f.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||f.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||f.querySelector("[autofocus], [data-autofocus]")||f,f.focus({preventScroll:!0}))})}function ne(f){if(l=e.noRefocus===!1?document.activeElement:null,ut(ae),ee(),ie(),s=void 0,f!==void 0&&(e.touchPosition||e.contextMenu)){const D=Lt(f);if(D.left!==void 0){const{top:dt,left:ft}=T.value.getBoundingClientRect();s={left:D.left-ft,top:D.top-dt}}}i===void 0&&(i=P(()=>d.screen.width+"|"+d.screen.height+"|"+e.self+"|"+e.anchor+"|"+d.lang.rtl,p)),e.noFocus!==!0&&document.activeElement.blur(),H(()=>{p(),e.noFocus!==!0&&A()}),L(()=>{d.platform.is.ios===!0&&(r=e.autoClose,g.value.click()),p(),ee(!0),o("show",f)},e.transitionDuration)}function N(f){S(),te(),le(!0),l!==null&&(f===void 0||f.qClickOutside!==!0)&&(((f&&f.type.indexOf("key")===0?l.closest('[tabindex]:not([tabindex^="-"])'):void 0)||l).focus(),l=null),L(()=>{te(!0),o("hide",f)},e.transitionDuration)}function le(f){s=void 0,i!==void 0&&(i(),i=void 0),(f===!0||y.value===!0)&&(Te(ae),F(),ze(Y),fe(h)),f!==!0&&(l=null)}function ie(){(T.value!==null||e.scrollTarget!==void 0)&&(k.value=Ft(T.value,e.scrollTarget),b(k.value,p))}function U(f){r!==!0?(tt(u,f),o("click",f)):r=!1}function ae(f){j.value===!0&&e.noFocus!==!0&&Ne(g.value,f.target)!==!0&&A()}function h(f){o("escapeKey"),C(f)}function p(){ct({targetEl:g.value,offset:e.offset,anchorEl:T.value,anchorOrigin:oe.value,selfOrigin:ge.value,absoluteOffset:s,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function $(){return B(Ee,v.value,()=>y.value===!0?B("div",{role:"menu",...n,ref:g,tabindex:-1,class:["q-menu q-position-engine scroll"+we.value,n.class],style:[n.style,w.value],...z.value},Ye(t.default)):null)}return Q(le),Object.assign(u,{focus:A,updatePosition:p}),K}});let ue=0;const lo={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},Oe={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var wo=ve({name:"QDialog",inheritAttrs:!1,props:{...Ue,...nt,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,backdropFilter:String,position:{type:String,default:"standard",validator:e=>["standard","top","bottom","left","right"].includes(e)}},emits:[...Je,"shake","click","escapeKey"],setup(e,{slots:t,emit:o,attrs:n}){const l=X(),s=W(null),i=W(!1),r=W(!1);let c=null,u=null,d,g;const y=E(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:a}=Ot(),{registerTimeout:m}=et(),{registerTick:H,removeTick:S}=it(),{transitionProps:L,transitionStyle:v}=lt(e,()=>Oe[e.position][0],()=>Oe[e.position][1]),w=E(()=>v.value+(e.backdropFilter!==void 0?`;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}`:"")),{showPortal:k,hidePortal:b,portalIsAccessible:F,renderPortal:T}=ot(l,s,ae,"dialog"),{hide:x}=Ze({showing:i,hideOnRouteChange:y,handleShow:ge,handleHide:we,processOnMount:!0}),{addToHistory:C,removeFromHistory:ee}=Bt(i,x,y),te=E(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${lo[e.position]}`+(r.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),K=E(()=>i.value===!0&&e.seamless!==!0),Y=E(()=>e.autoClose===!0?{onClick:le}:{}),oe=E(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${K.value===!0?"modal":"seamless"}`,n.class]);P(()=>e.maximized,h=>{i.value===!0&&N(h)}),P(K,h=>{a(h),h===!0?(ut(U),st(A)):(Te(U),fe(A))});function ge(h){C(),u=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,N(e.maximized),k(),r.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),H(z)):S(),m(()=>{if(l.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:p,bottom:$}=document.activeElement.getBoundingClientRect(),{innerHeight:f}=window,D=window.visualViewport!==void 0?window.visualViewport.height:f;p>0&&$>D/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-D,$>=f?1/0:Math.ceil(document.scrollingElement.scrollTop+$-D/2))),document.activeElement.scrollIntoView()}g=!0,s.value.click(),g=!1}k(!0),r.value=!1,o("show",h)},e.transitionDuration)}function we(h){S(),ee(),ne(!0),r.value=!0,b(),u!==null&&(((h&&h.type.indexOf("key")===0?u.closest('[tabindex]:not([tabindex^="-"])'):void 0)||u).focus(),u=null),m(()=>{b(!0),r.value=!1,o("hide",h)},e.transitionDuration)}function z(h){Qe(()=>{let p=s.value;if(p!==null){if(h!==void 0){const $=p.querySelector(h);if($!==null){$.focus({preventScroll:!0});return}}p.contains(document.activeElement)!==!0&&(p=p.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||p.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||p.querySelector("[autofocus], [data-autofocus]")||p,p.focus({preventScroll:!0}))}})}function j(h){h&&typeof h.focus=="function"?h.focus({preventScroll:!0}):z(),o("shake");const p=s.value;p!==null&&(p.classList.remove("q-animate--scale"),p.classList.add("q-animate--scale"),c!==null&&clearTimeout(c),c=setTimeout(()=>{c=null,s.value!==null&&(p.classList.remove("q-animate--scale"),z())},170))}function A(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&j():(o("escapeKey"),x()))}function ne(h){c!==null&&(clearTimeout(c),c=null),(h===!0||i.value===!0)&&(N(!1),e.seamless!==!0&&(a(!1),Te(U),fe(A))),h!==!0&&(u=null)}function N(h){h===!0?d!==!0&&(ue<1&&document.body.classList.add("q-body--dialog"),ue++,d=!0):d===!0&&(ue<2&&document.body.classList.remove("q-body--dialog"),ue--,d=!1)}function le(h){g!==!0&&(x(h),o("click",h))}function ie(h){e.persistent!==!0&&e.noBackdropDismiss!==!0?x(h):e.noShake!==!0&&j()}function U(h){e.allowFocusOutside!==!0&&F.value===!0&&Ne(s.value,h.target)!==!0&&z('[tabindex]:not([tabindex="-1"])')}Object.assign(l.proxy,{focus:z,shake:j,__updateRefocusTarget(h){u=h||null}}),Q(ne);function ae(){return B("div",{role:"dialog","aria-modal":K.value===!0?"true":"false",...n,class:oe.value},[B(Ee,{name:"q-transition--fade",appear:!0},()=>K.value===!0?B("div",{class:"q-dialog__backdrop fixed-full",style:w.value,"aria-hidden":"true",tabindex:-1,onClick:ie}):null),B(Ee,L.value,()=>i.value===!0?B("div",{ref:s,class:te.value,style:v.value,tabindex:-1,...Y.value},Ye(t.default)):null)])}return T}});export{eo as A,it as B,lt as C,Gt as D,ot as E,ze as F,ct as G,Ve as H,Zt as I,go as Q,Je as a,Ze as b,et as c,Bt as d,uo as e,Ot as f,Ft as g,$t as h,zt as i,At as j,mo as k,wo as l,Qt as m,co as n,jt as o,fo as p,It as q,ho as r,Mt as s,vo as t,Ue as u,ro as v,so as w,Kt as x,nt as y,_e as z};
