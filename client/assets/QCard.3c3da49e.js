import{c as Y,h as J}from"./render.5f7ed1ba.js";import{c as A,h as _,g as p,r as X,w as N,A as Z,ad as de,B as fe,o as ie,a5 as ve,t as te,D as me,a2 as ge,a9 as he,x as ae,af as ke}from"./index.e43a8370.js";import{u as oe,a as se,b as ye,h as xe,c as we,i as Me,e as be,d as Se,g as ue,j as ne,k as Ce}from"./use-key-composition.fada6a9a.js";import{k as Fe,l as Ae,b as Ee}from"./QBtn.062d63ad.js";var Ie=Y({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:h}){const F=A(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>_(e.tag,{class:F.value},J(h.default))}});const Re={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},ee={xs:2,sm:4,md:8,lg:16,xl:24};var De=Y({name:"QSeparator",props:{...oe,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const h=p(),F=se(e,h.proxy.$q),y=A(()=>e.vertical===!0?"vertical":"horizontal"),i=A(()=>` q-separator--${y.value}`),c=A(()=>e.inset!==!1?`${i.value}-${Re[e.inset]}`:""),S=A(()=>`q-separator${i.value}${c.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(F.value===!0?" q-separator--dark":"")),q=A(()=>{const P={};if(e.size!==void 0&&(P[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const g=e.spaced===!0?`${ee.md}px`:e.spaced in ee?`${ee[e.spaced]}px`:e.spaced,x=e.vertical===!0?["Left","Right"]:["Top","Bottom"];P[`margin${x[0]}`]=P[`margin${x[1]}`]=g}return P});return()=>_("hr",{class:S.value,style:q.value,"aria-orientation":y.value})}});const le={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},G={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},ce=Object.keys(G);ce.forEach(e=>{G[e].regex=new RegExp(G[e].pattern)});const Ve=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+ce.join("")+"])|(.)","g"),re=/[.*+?^${}()|[\]\\]/g,b=String.fromCharCode(1),qe={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Pe(e,h,F,y){let i,c,S,q,P,g;const x=X(null),d=X(o());function L(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}N(()=>e.type+e.autogrow,O),N(()=>e.mask,l=>{if(l!==void 0)D(d.value,!0);else{const a=T(d.value);O(),e.modelValue!==a&&h("update:modelValue",a)}}),N(()=>e.fillMask+e.reverseFillMask,()=>{x.value===!0&&D(d.value,!0)}),N(()=>e.unmaskedValue,()=>{x.value===!0&&D(d.value)});function o(){if(O(),x.value===!0){const l=V(T(e.modelValue));return e.fillMask!==!1?W(l):l}return e.modelValue}function E(l){if(l<i.length)return i.slice(-l);let a="",r=i;const n=r.indexOf(b);if(n>-1){for(let u=l-r.length;u>0;u--)a+=b;r=r.slice(0,n)+a+r.slice(n)}return r}function O(){if(x.value=e.mask!==void 0&&e.mask.length!==0&&L(),x.value===!1){q=void 0,i="",c="";return}const l=le[e.mask]===void 0?e.mask:le[e.mask],a=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",r=a.replace(re,"\\$&"),n=[],u=[],s=[];let M=e.reverseFillMask===!0,f="",v="";l.replace(Ve,(C,t,k,j,I)=>{if(j!==void 0){const B=G[j];s.push(B),v=B.negate,M===!0&&(u.push("(?:"+v+"+)?("+B.pattern+"+)?(?:"+v+"+)?("+B.pattern+"+)?"),M=!1),u.push("(?:"+v+"+)?("+B.pattern+")?")}else if(k!==void 0)f="\\"+(k==="\\"?"":k),s.push(k),n.push("([^"+f+"]+)?"+f+"?");else{const B=t!==void 0?t:I;f=B==="\\"?"\\\\\\\\":B.replace(re,"\\\\$&"),s.push(B),n.push("([^"+f+"]+)?"+f+"?")}});const Q=new RegExp("^"+n.join("")+"("+(f===""?".":"[^"+f+"]")+"+)?"+(f===""?"":"["+f+"]*")+"$"),K=u.length-1,m=u.map((C,t)=>t===0&&e.reverseFillMask===!0?new RegExp("^"+r+"*"+C):t===K?new RegExp("^"+C+"("+(v===""?".":v)+"+)?"+(e.reverseFillMask===!0?"$":r+"*")):new RegExp("^"+C));S=s,q=C=>{const t=Q.exec(e.reverseFillMask===!0?C:C.slice(0,s.length+1));t!==null&&(C=t.slice(1).join(""));const k=[],j=m.length;for(let I=0,B=C;I<j;I++){const H=m[I].exec(B);if(H===null)break;B=B.slice(H.shift().length),k.push(...H)}return k.length!==0?k.join(""):C},i=s.map(C=>typeof C=="string"?C:b).join(""),c=i.split(b).join(a)}function D(l,a,r){const n=y.value,u=n.selectionEnd,s=n.value.length-u,M=T(l);a===!0&&O();const f=V(M),v=e.fillMask!==!1?W(f):f,Q=d.value!==v;n.value!==v&&(n.value=v),Q===!0&&(d.value=v),document.activeElement===n&&Z(()=>{if(v===c){const m=e.reverseFillMask===!0?c.length:0;n.setSelectionRange(m,m,"forward");return}if(r==="insertFromPaste"&&e.reverseFillMask!==!0){const m=n.selectionEnd;let C=u-1;for(let t=P;t<=C&&t<m;t++)i[t]!==b&&C++;$.right(n,C);return}if(["deleteContentBackward","deleteContentForward"].indexOf(r)>-1){const m=e.reverseFillMask===!0?u===0?v.length>f.length?1:0:Math.max(0,v.length-(v===c?0:Math.min(f.length,s)+1))+1:u;n.setSelectionRange(m,m,"forward");return}if(e.reverseFillMask===!0)if(Q===!0){const m=Math.max(0,v.length-(v===c?0:Math.min(f.length,s+1)));m===1&&u===1?n.setSelectionRange(m,m,"forward"):$.rightReverse(n,m)}else{const m=v.length-s;n.setSelectionRange(m,m,"backward")}else if(Q===!0){const m=Math.max(0,i.indexOf(b),Math.min(f.length,u)-1);$.right(n,m)}else{const m=u-1;$.right(n,m)}});const K=e.unmaskedValue===!0?T(v):v;String(e.modelValue)!==K&&(e.modelValue!==null||K!=="")&&F(K,!0)}function U(l,a,r){const n=V(T(l.value));a=Math.max(0,i.indexOf(b),Math.min(n.length,a)),P=a,l.setSelectionRange(a,r,"forward")}const $={left(l,a){const r=i.slice(a-1).indexOf(b)===-1;let n=Math.max(0,a-1);for(;n>=0;n--)if(i[n]===b){a=n,r===!0&&a++;break}if(n<0&&i[a]!==void 0&&i[a]!==b)return $.right(l,0);a>=0&&l.setSelectionRange(a,a,"backward")},right(l,a){const r=l.value.length;let n=Math.min(r,a+1);for(;n<=r;n++)if(i[n]===b){a=n;break}else i[n-1]===b&&(a=n);if(n>r&&i[a-1]!==void 0&&i[a-1]!==b)return $.left(l,r);l.setSelectionRange(a,a,"forward")},leftReverse(l,a){const r=E(l.value.length);let n=Math.max(0,a-1);for(;n>=0;n--)if(r[n-1]===b){a=n;break}else if(r[n]===b&&(a=n,n===0))break;if(n<0&&r[a]!==void 0&&r[a]!==b)return $.rightReverse(l,0);a>=0&&l.setSelectionRange(a,a,"backward")},rightReverse(l,a){const r=l.value.length,n=E(r),u=n.slice(0,a+1).indexOf(b)===-1;let s=Math.min(r,a+1);for(;s<=r;s++)if(n[s-1]===b){a=s,a>0&&u===!0&&a--;break}if(s>r&&n[a-1]!==void 0&&n[a-1]!==b)return $.leftReverse(l,r);l.setSelectionRange(a,a,"forward")}};function w(l){h("click",l),g=void 0}function R(l){if(h("keydown",l),de(l)===!0||l.altKey===!0)return;const a=y.value,r=a.selectionStart,n=a.selectionEnd;if(l.shiftKey||(g=void 0),l.keyCode===37||l.keyCode===39){l.shiftKey&&g===void 0&&(g=a.selectionDirection==="forward"?r:n);const u=$[(l.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(l.preventDefault(),u(a,g===r?n:r),l.shiftKey){const s=a.selectionStart;a.setSelectionRange(Math.min(g,s),Math.max(g,s),"forward")}}else l.keyCode===8&&e.reverseFillMask!==!0&&r===n?($.left(a,r),a.setSelectionRange(a.selectionStart,n,"backward")):l.keyCode===46&&e.reverseFillMask===!0&&r===n&&($.rightReverse(a,n),a.setSelectionRange(r,a.selectionEnd,"forward"))}function V(l){if(l==null||l==="")return"";if(e.reverseFillMask===!0)return z(l);const a=S;let r=0,n="";for(let u=0;u<a.length;u++){const s=l[r],M=a[u];if(typeof M=="string")n+=M,s===M&&r++;else if(s!==void 0&&M.regex.test(s))n+=M.transform!==void 0?M.transform(s):s,r++;else return n}return n}function z(l){const a=S,r=i.indexOf(b);let n=l.length-1,u="";for(let s=a.length-1;s>=0&&n>-1;s--){const M=a[s];let f=l[n];if(typeof M=="string")u=M+u,f===M&&n--;else if(f!==void 0&&M.regex.test(f))do u=(M.transform!==void 0?M.transform(f):f)+u,n--,f=l[n];while(r===s&&f!==void 0&&M.regex.test(f));else return u}return u}function T(l){return typeof l!="string"||q===void 0?typeof l=="number"?q(""+l):l:q(l)}function W(l){return c.length-l.length<=0?l:e.reverseFillMask===!0&&l.length!==0?c.slice(0,-l.length)+l:l+c.slice(l.length)}return{innerValue:d,hasMask:x,moveCursorForPaste:U,updateMaskValue:D,onMaskedKeydown:R,onMaskedClick:w}}function Be(e,h){function F(){const y=e.modelValue;try{const i="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(y)===y&&("length"in y?Array.from(y):[y]).forEach(c=>{i.items.add(c)}),{files:i.files}}catch{return{files:void 0}}}return h===!0?A(()=>{if(e.type==="file")return F()}):A(F)}var je=Y({name:"QInput",inheritAttrs:!1,props:{...ye,...qe,...xe,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...we,"paste","change","keydown","click","animationend"],setup(e,{emit:h,attrs:F}){const{proxy:y}=p(),{$q:i}=y,c={};let S=NaN,q,P,g=null,x;const d=X(null),L=Me(e),{innerValue:o,hasMask:E,moveCursorForPaste:O,updateMaskValue:D,onMaskedKeydown:U,onMaskedClick:$}=Pe(e,h,f,d),w=Be(e,!0),R=A(()=>ne(o.value)),V=Ce(s),z=be(),T=A(()=>e.type==="textarea"||e.autogrow===!0),W=A(()=>T.value===!0||["text","search","url","tel","password"].includes(e.type)),l=A(()=>{const t={...z.splitAttrs.listeners.value,onInput:s,onPaste:u,onChange:Q,onBlur:K,onFocus:te};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=V,E.value===!0&&(t.onKeydown=U,t.onClick=$),e.autogrow===!0&&(t.onAnimationend=M),t}),a=A(()=>{const t={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:L.value,...z.splitAttrs.attributes.value,id:z.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return T.value===!1&&(t.type=e.type),e.autogrow===!0&&(t.rows=1),t});N(()=>e.type,()=>{d.value&&(d.value.value=e.modelValue)}),N(()=>e.modelValue,t=>{if(E.value===!0){if(P===!0&&(P=!1,String(t)===S))return;D(t)}else o.value!==t&&(o.value=t,e.type==="number"&&c.hasOwnProperty("value")===!0&&(q===!0?q=!1:delete c.value));e.autogrow===!0&&Z(v)}),N(()=>e.autogrow,t=>{t===!0?Z(v):d.value!==null&&F.rows>0&&(d.value.style.height="auto")}),N(()=>e.dense,()=>{e.autogrow===!0&&Z(v)});function r(){ue(()=>{const t=document.activeElement;d.value!==null&&d.value!==t&&(t===null||t.id!==z.targetUid.value)&&d.value.focus({preventScroll:!0})})}function n(){d.value!==null&&d.value.select()}function u(t){if(E.value===!0&&e.reverseFillMask!==!0){const k=t.target;O(k,k.selectionStart,k.selectionEnd)}h("paste",t)}function s(t){if(!t||!t.target)return;if(e.type==="file"){h("update:modelValue",t.target.files);return}const k=t.target.value;if(t.target.qComposing===!0){c.value=k;return}if(E.value===!0)D(k,!1,t.inputType);else if(f(k),W.value===!0&&t.target===document.activeElement){const{selectionStart:j,selectionEnd:I}=t.target;j!==void 0&&I!==void 0&&Z(()=>{t.target===document.activeElement&&k.indexOf(t.target.value)===0&&t.target.setSelectionRange(j,I)})}e.autogrow===!0&&v()}function M(t){h("animationend",t),v()}function f(t,k){x=()=>{g=null,e.type!=="number"&&c.hasOwnProperty("value")===!0&&delete c.value,e.modelValue!==t&&S!==t&&(S=t,k===!0&&(P=!0),h("update:modelValue",t),Z(()=>{S===t&&(S=NaN)})),x=void 0},e.type==="number"&&(q=!0,c.value=t),e.debounce!==void 0?(g!==null&&clearTimeout(g),c.value=t,g=setTimeout(x,e.debounce)):x()}function v(){requestAnimationFrame(()=>{const t=d.value;if(t!==null){const k=t.parentNode.style,{scrollTop:j}=t,{overflowY:I,maxHeight:B}=i.platform.is.firefox===!0?{}:window.getComputedStyle(t),H=I!==void 0&&I!=="scroll";H===!0&&(t.style.overflowY="hidden"),k.marginBottom=t.scrollHeight-1+"px",t.style.height="1px",t.style.height=t.scrollHeight+"px",H===!0&&(t.style.overflowY=parseInt(B,10)<t.scrollHeight?"auto":"hidden"),k.marginBottom="",t.scrollTop=j}})}function Q(t){V(t),g!==null&&(clearTimeout(g),g=null),x!==void 0&&x(),h("change",t.target.value)}function K(t){t!==void 0&&te(t),g!==null&&(clearTimeout(g),g=null),x!==void 0&&x(),q=!1,P=!1,delete c.value,e.type!=="file"&&setTimeout(()=>{d.value!==null&&(d.value.value=o.value!==void 0?o.value:"")})}function m(){return c.hasOwnProperty("value")===!0?c.value:o.value!==void 0?o.value:""}fe(()=>{K()}),ie(()=>{e.autogrow===!0&&v()}),Object.assign(z,{innerValue:o,fieldClass:A(()=>`q-${T.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:A(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:d,emitValue:f,hasValue:R,floatingLabel:A(()=>R.value===!0&&(e.type!=="number"||isNaN(o.value)===!1)||ne(e.displayValue)),getControl:()=>_(T.value===!0?"textarea":"input",{ref:d,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...a.value,...l.value,...e.type!=="file"?{value:m()}:w.value}),getShadowControl:()=>_("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(T.value===!0?"":" text-no-wrap")},[_("span",{class:"invisible"},m()),_("span",e.shadowText)])});const C=Se(z);return Object.assign(y,{focus:r,select:n,getNativeElement:()=>d.value}),ve(y,"nativeEl",()=>d.value),C}}),_e=Y({name:"QCardActions",props:{...Fe,vertical:Boolean},setup(e,{slots:h}){const F=Ae(e),y=A(()=>`q-card__actions ${F.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>_("div",{class:y.value},J(h.default))}}),Ke=Y({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(e,{slots:h,emit:F}){const y=p(),i=X(null);let c=0;const S=[];function q(o){const E=typeof o=="boolean"?o:e.noErrorFocus!==!0,O=++c,D=(w,R)=>{F("validation"+(w===!0?"Success":"Error"),R)},U=w=>{const R=w.validate();return typeof R.then=="function"?R.then(V=>({valid:V,comp:w}),V=>({valid:!1,comp:w,err:V})):Promise.resolve({valid:R,comp:w})};return(e.greedy===!0?Promise.all(S.map(U)).then(w=>w.filter(R=>R.valid!==!0)):S.reduce((w,R)=>w.then(()=>U(R).then(V=>{if(V.valid===!1)return Promise.reject(V)})),Promise.resolve()).catch(w=>[w])).then(w=>{if(w===void 0||w.length===0)return O===c&&D(!0),!0;if(O===c){const{comp:R,err:V}=w[0];if(V!==void 0&&console.error(V),D(!1,R),E===!0){const z=w.find(({comp:T})=>typeof T.focus=="function"&&Ee(T.$)===!1);z!==void 0&&z.comp.focus()}}return!1})}function P(){c++,S.forEach(o=>{typeof o.resetValidation=="function"&&o.resetValidation()})}function g(o){o!==void 0&&ae(o);const E=c+1;q().then(O=>{E===c&&O===!0&&(e.onSubmit!==void 0?F("submit",o):o!==void 0&&o.target!==void 0&&typeof o.target.submit=="function"&&o.target.submit())})}function x(o){o!==void 0&&ae(o),F("reset"),Z(()=>{P(),e.autofocus===!0&&e.noResetFocus!==!0&&d()})}function d(){ue(()=>{if(i.value===null)return;const o=i.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||i.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||i.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(i.value.querySelectorAll("[tabindex]"),E=>E.tabIndex>-1);o!=null&&o.focus({preventScroll:!0})})}me(ke,{bindComponent(o){S.push(o)},unbindComponent(o){const E=S.indexOf(o);E>-1&&S.splice(E,1)}});let L=!1;return ge(()=>{L=!0}),he(()=>{L===!0&&e.autofocus===!0&&d()}),ie(()=>{e.autofocus===!0&&d()}),Object.assign(y.proxy,{validate:q,resetValidation:P,submit:g,reset:x,focus:d,getValidationComponents:()=>S}),()=>_("form",{class:"q-form",ref:i,onSubmit:g,onReset:x},J(h.default))}}),Ne=Y({name:"QCard",props:{...oe,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:h}){const{proxy:{$q:F}}=p(),y=se(e,F),i=A(()=>"q-card"+(y.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>_(e.tag,{class:i.value},J(h.default))}});export{Ne as Q,Ie as a,De as b,je as c,_e as d,Ke as e};
