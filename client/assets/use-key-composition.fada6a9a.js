import{c as i,H as se,r as g,o as H,i as de,w as x,B as L,af as fe,g as D,a7 as ce,a5 as ve,aa as pe,x as me,A as ge,a2 as be,a9 as he,h as a,q as k,$ as ye,k as Ce}from"./index.e43a8370.js";import{Q as G,j as qe}from"./QBtn.062d63ad.js";import{h as I}from"./render.5f7ed1ba.js";const xe={dark:{type:Boolean,default:null}};function _e(e,o){return i(()=>e.dark===null?o.dark.isActive:e.dark)}let z,P=0;const f=new Array(256);for(let e=0;e<256;e++)f[e]=(e+256).toString(16).substring(1);const Se=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return o=>{const t=new Uint8Array(o);return e.getRandomValues(t),t}}return o=>{const t=[];for(let r=o;r>0;r--)t.push(Math.floor(Math.random()*256));return t}})(),X=4096;function le(){(z===void 0||P+16>X)&&(P=0,z=Se(X));const e=Array.prototype.slice.call(z,P,P+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,f[e[0]]+f[e[1]]+f[e[2]]+f[e[3]]+"-"+f[e[4]]+f[e[5]]+"-"+f[e[6]]+f[e[7]]+"-"+f[e[8]]+f[e[9]]+"-"+f[e[10]]+f[e[11]]+f[e[12]]+f[e[13]]+f[e[14]]+f[e[15]]}function re(e,o){return e===void 0?o===!0?`f_${le()}`:void 0:e}function we(e,o=!0){if(se.value===!0){const t=g(e);return o===!0&&e===void 0&&H(()=>{t.value=`f_${le()}`}),t}return g(re(e,o))}function Be({validate:e,resetValidation:o,requiresQForm:t}){const r=de(fe,!1);if(r!==!1){const{props:v,proxy:s}=D();Object.assign(s,{validate:e,resetValidation:o}),x(()=>v.disable,u=>{u===!0?(typeof o=="function"&&o(),r.unbindComponent(s)):r.bindComponent(s)}),H(()=>{v.disable!==!0&&r.bindComponent(s)}),L(()=>{v.disable!==!0&&r.unbindComponent(s)})}else t===!0&&console.error("Parent QForm not found on useFormChild()!")}const Y=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ee=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,oe=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,M=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,O=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,T={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>Y.test(e),hexaColor:e=>ee.test(e),hexOrHexaColor:e=>oe.test(e),rgbColor:e=>M.test(e),rgbaColor:e=>O.test(e),rgbOrRgbaColor:e=>M.test(e)||O.test(e),hexOrRgbColor:e=>Y.test(e)||M.test(e),hexaOrRgbaColor:e=>ee.test(e)||O.test(e),anyColor:e=>oe.test(e)||M.test(e)||O.test(e)},Fe=[!0,!1,"ondemand"],Re={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>Fe.includes(e)}};function Ae(e,o){const{props:t,proxy:r}=D(),v=g(!1),s=g(null),u=g(!1);Be({validate:B,resetValidation:w});let d=0,b;const A=i(()=>t.rules!==void 0&&t.rules!==null&&t.rules.length!==0),h=i(()=>t.disable!==!0&&A.value===!0&&o.value===!1),S=i(()=>t.error===!0||v.value===!0),U=i(()=>typeof t.errorMessage=="string"&&t.errorMessage.length!==0?t.errorMessage:s.value);x(()=>t.modelValue,()=>{u.value=!0,h.value===!0&&t.lazyRules===!1&&C()});function V(){t.lazyRules!=="ondemand"&&h.value===!0&&u.value===!0&&C()}x(()=>t.reactiveRules,y=>{y===!0?b===void 0&&(b=x(()=>t.rules,V,{immediate:!0,deep:!0})):b!==void 0&&(b(),b=void 0)},{immediate:!0}),x(()=>t.lazyRules,V),x(e,y=>{y===!0?u.value=!0:h.value===!0&&t.lazyRules!=="ondemand"&&C()});function w(){d++,o.value=!1,u.value=!1,v.value=!1,s.value=null,C.cancel()}function B(y=t.modelValue){if(t.disable===!0||A.value===!1)return!0;const F=++d,j=o.value!==!0?()=>{u.value=!0}:()=>{},q=(c,p)=>{c===!0&&j(),v.value=c,s.value=p||null,o.value=!1},R=[];for(let c=0;c<t.rules.length;c++){const p=t.rules[c];let m;if(typeof p=="function"?m=p(y,T):typeof p=="string"&&T[p]!==void 0&&(m=T[p](y)),m===!1||typeof m=="string")return q(!0,m),!1;m!==!0&&m!==void 0&&R.push(m)}return R.length===0?(q(!1),!0):(o.value=!0,Promise.all(R).then(c=>{if(c===void 0||Array.isArray(c)===!1||c.length===0)return F===d&&q(!1),!0;const p=c.find(m=>m===!1||typeof m=="string");return F===d&&q(p!==void 0,p),p===void 0},c=>(F===d&&(console.error(c),q(!0)),!1)))}const C=ce(B,0);return L(()=>{b!==void 0&&b(),C.cancel()}),Object.assign(r,{resetValidation:w,validate:B}),ve(r,"hasError",()=>S.value),{isDirtyModel:u,hasRules:A,hasError:S,errorMessage:U,validate:B,resetValidation:w}}const te=/^on[A-Z]/;function Ve(e,o){const t={listeners:g({}),attributes:g({})};function r(){const v={},s={};for(const u in e)u!=="class"&&u!=="style"&&te.test(u)===!1&&(v[u]=e[u]);for(const u in o.props)te.test(u)===!0&&(s[u]=o.props[u]);t.attributes.value=v,t.listeners.value=s}return pe(r),r(),t}let _=[],$=[];function ne(e){$=$.filter(o=>o!==e)}function ze(e){ne(e),$.push(e)}function Te(e){ne(e),$.length===0&&_.length!==0&&(_[_.length-1](),_=[])}function ke(e){$.length===0?e():_.push(e)}function $e(e){_=_.filter(o=>o!==e)}function Ee(e){return e!=null&&(""+e).length!==0}const He={...xe,...Re,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Le=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function Qe({requiredForAttr:e=!0,tagProp:o}={}){const{props:t,attrs:r,proxy:v,vnode:s}=D(),u=_e(t,v.$q),d=we(t.for,e);return{requiredForAttr:e,tag:o===!0?i(()=>t.tag):{value:"label"},isDark:u,editable:i(()=>t.disable!==!0&&t.readonly!==!0),innerLoading:g(!1),focused:g(!1),hasPopupOpen:!1,splitAttrs:Ve(r,s),targetUid:d,rootRef:g(null),targetRef:g(null),controlRef:g(null)}}function Ze(e){const{props:o,emit:t,slots:r,attrs:v,proxy:s}=D(),{$q:u}=s;let d=null;e.hasValue===void 0&&(e.hasValue=i(()=>Ee(o.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{t("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:Q,onFocusout:Z}),Object.assign(e,{clearValue:K,onControlFocusin:Q,onControlFocusout:Z,focus:p}),e.computedCounter===void 0&&(e.computedCounter=i(()=>{if(o.counter!==!1){const l=typeof o.modelValue=="string"||typeof o.modelValue=="number"?(""+o.modelValue).length:Array.isArray(o.modelValue)===!0?o.modelValue.length:0,n=o.maxlength!==void 0?o.maxlength:o.maxValues;return l+(n!==void 0?" / "+n:"")}}));const{isDirtyModel:b,hasRules:A,hasError:h,errorMessage:S,resetValidation:U}=Ae(e.focused,e.innerLoading),V=e.floatingLabel!==void 0?i(()=>o.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):i(()=>o.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),w=i(()=>o.bottomSlots===!0||o.hint!==void 0||A.value===!0||o.counter===!0||o.error!==null),B=i(()=>o.filled===!0?"filled":o.outlined===!0?"outlined":o.borderless===!0?"borderless":o.standout?"standout":"standard"),C=i(()=>`q-field row no-wrap items-start q-field--${B.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(o.rounded===!0?" q-field--rounded":"")+(o.square===!0?" q-field--square":"")+(V.value===!0?" q-field--float":"")+(F.value===!0?" q-field--labeled":"")+(o.dense===!0?" q-field--dense":"")+(o.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(h.value===!0?" q-field--error":"")+(h.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(o.hideBottomSpace!==!0&&w.value===!0?" q-field--with-bottom":"")+(o.disable===!0?" q-field--disabled":o.readonly===!0?" q-field--readonly":"")),y=i(()=>"q-field__control relative-position row no-wrap"+(o.bgColor!==void 0?` bg-${o.bgColor}`:"")+(h.value===!0?" text-negative":typeof o.standout=="string"&&o.standout.length!==0&&e.focused.value===!0?` ${o.standout}`:o.color!==void 0?` text-${o.color}`:"")),F=i(()=>o.labelSlot===!0||o.label!==void 0),j=i(()=>"q-field__label no-pointer-events absolute ellipsis"+(o.labelColor!==void 0&&h.value!==!0?` text-${o.labelColor}`:"")),q=i(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:V.value,modelValue:o.modelValue,emitValue:e.emitValue})),R=i(()=>{const l={};return e.targetUid.value&&(l.for=e.targetUid.value),o.disable===!0&&(l["aria-disabled"]="true"),l});x(()=>o.for,l=>{e.targetUid.value=re(l,e.requiredForAttr)});function c(){const l=document.activeElement;let n=e.targetRef!==void 0&&e.targetRef.value;n&&(l===null||l.id!==e.targetUid.value)&&(n.hasAttribute("tabindex")===!0||(n=n.querySelector("[tabindex]")),n&&n!==l&&n.focus({preventScroll:!0}))}function p(){ke(c)}function m(){$e(c);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function Q(l){d!==null&&(clearTimeout(d),d=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,t("focus",l))}function Z(l,n){d!==null&&clearTimeout(d),d=setTimeout(()=>{d=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,t("blur",l)),n!==void 0&&n())})}function K(l){me(l),u.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),o.type==="file"&&(e.inputRef.value.value=null),t("update:modelValue",null),t("clear",o.modelValue),ge(()=>{const n=b.value;U(),b.value=n})}function ue(){const l=[];return r.prepend!==void 0&&l.push(a("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:k},r.prepend())),l.push(a("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},ae())),h.value===!0&&o.noErrorIcon===!1&&l.push(E("error",[a(G,{name:u.iconSet.field.error,color:"negative"})])),o.loading===!0||e.innerLoading.value===!0?l.push(E("inner-loading-append",r.loading!==void 0?r.loading():[a(qe,{color:o.color})])):o.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push(E("inner-clearable-append",[a(G,{class:"q-field__focusable-action",tag:"button",name:o.clearIcon||u.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:K})])),r.append!==void 0&&l.push(a("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:k},r.append())),e.getInnerAppend!==void 0&&l.push(E("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function ae(){const l=[];return o.prefix!==void 0&&o.prefix!==null&&l.push(a("div",{class:"q-field__prefix no-pointer-events row items-center"},o.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):r.rawControl!==void 0?l.push(r.rawControl()):r.control!==void 0&&l.push(a("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0},r.control(q.value))),F.value===!0&&l.push(a("div",{class:j.value},I(r.label,o.label))),o.suffix!==void 0&&o.suffix!==null&&l.push(a("div",{class:"q-field__suffix no-pointer-events row items-center"},o.suffix)),l.concat(I(r.default))}function ie(){let l,n;h.value===!0?S.value!==null?(l=[a("div",{role:"alert"},S.value)],n=`q--slot-error-${S.value}`):(l=I(r.error),n="q--slot-error"):(o.hideHint!==!0||e.focused.value===!0)&&(o.hint!==void 0?(l=[a("div",o.hint)],n=`q--slot-hint-${o.hint}`):(l=I(r.hint),n="q--slot-hint"));const W=o.counter===!0||r.counter!==void 0;if(o.hideBottomSpace===!0&&W===!1&&l===void 0)return;const J=a("div",{key:n,class:"q-field__messages col"},l);return a("div",{class:"q-field__bottom row items-start q-field__bottom--"+(o.hideBottomSpace!==!0?"animated":"stale"),onClick:k},[o.hideBottomSpace===!0?J:a(ye,{name:"q-transition--field-message"},()=>J),W===!0?a("div",{class:"q-field__counter"},r.counter!==void 0?r.counter():e.computedCounter.value):null])}function E(l,n){return n===null?null:a("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},n)}let N=!1;return be(()=>{N=!0}),he(()=>{N===!0&&o.autofocus===!0&&s.focus()}),o.autofocus===!0&&H(()=>{s.focus()}),L(()=>{d!==null&&clearTimeout(d)}),Object.assign(s,{focus:p,blur:m}),function(){const n=e.getControl===void 0&&r.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0,...R.value}:R.value;return a(e.tag.value,{ref:e.rootRef,class:[C.value,v.class],style:v.style,...n},[r.before!==void 0?a("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:k},r.before()):null,a("div",{class:"q-field__inner relative-position col self-stretch"},[a("div",{ref:e.controlRef,class:y.value,tabindex:-1,...e.controlEvents},ue()),w.value===!0?ie():null]),r.after!==void 0?a("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:k},r.after()):null])}}const Ke={name:String};function Ne(e){return i(()=>({type:"hidden",name:e.name,value:e.modelValue}))}function We(e={}){return(o,t,r)=>{o[t](a("input",{class:"hidden"+(r||""),...e.value}))}}function Je(e){return i(()=>e.name||e.for)}const Ie=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Pe=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Me=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Oe=/[a-z0-9_ -]$/i;function Ge(e){return function(t){if(t.type==="compositionend"||t.type==="change"){if(t.target.qComposing!==!0)return;t.target.qComposing=!1,e(t)}else t.type==="compositionupdate"&&t.target.qComposing!==!0&&typeof t.data=="string"&&(Ce.is.firefox===!0?Oe.test(t.data)===!1:Ie.test(t.data)===!0||Pe.test(t.data)===!0||Me.test(t.data)===!0)===!0&&(t.target.qComposing=!0)}}export{_e as a,He as b,Le as c,Ze as d,Qe as e,ze as f,ke as g,Ke as h,Je as i,Ee as j,Ge as k,Ne as l,We as m,Te as r,xe as u};
