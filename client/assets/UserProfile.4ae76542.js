import{b as $}from"./QDialog.3946e718.js";import{Q as _}from"./use-key-composition.939e4fb3.js";import{Q as n}from"./QInput.d626cc29.js";import{d as N,a8 as D,a3 as Y,a4 as P,r as V,W as g,X as q,Y as u,aG as B,_ as C,j as s,a7 as o,$ as M,a0 as T,aN as m,a1 as c,Q as k,t as j,a9 as y,aO as E,aP as F}from"./index.aa73692f.js";import{Q as R,a as z,C as A}from"./ClosePopup.10e88d90.js";import{Q as G}from"./QForm.e45cb497.js";import{u as O}from"./use-quasar.c0f86e09.js";import{d as W}from"./date.bb3c85a4.js";import{u as X}from"./users.store.9d51e1e7.js";const H=d=>(E("data-v-c95ec7c4"),d=d(),F(),d),J={class:"col-7 self-center no-outline label"},K=H(()=>o("span",null,"E-mail: ",-1)),L={class:"row input"},Z={class:"row input"},x={class:"row input"},ee={class:"row input"},ae={class:"row items-center justify-end"},se=N({__name:"UserProfile",props:{userId:{default:0},current:{type:Boolean,default:!1}},setup(d){var b;const{formatDate:Q,extractDate:h}=W,i=O(),w=d,p=D(),v=Y(),f=X(),{user:I}=P(v),l=V(null),S=p.params.userId?+p.params.userId:w.userId;l.value=p.params.userId?f.getUser(S):I.value;const r=V(Q((b=l.value)==null?void 0:b.birthday,"YYYY/MM/DD")),U=async()=>{const a={...l.value};a.birthday=h(r.value,"YYYY/MM/DD").getTime(),await f.save(a),v.save(a)};return(a,t)=>(g(),q(G,{class:"q-gutter-md q-mt-lg",onSubmit:B(U,["prevent","stop"])},{default:u(()=>[s($,{borderless:""},{default:u(()=>[o("div",J,[K,M(" "+T(l.value.email),1)])]),_:1}),s(_,{inset:""}),o("div",L,[s(n,{autofocus:"",class:m(["col-7",{"col-12":c(i).screen.lt.md}]),outlined:"",label:a.$t("firstname")+" *",modelValue:l.value.firstName,"onUpdate:modelValue":t[0]||(t[0]=e=>l.value.firstName=e),rules:[e=>!!e||a.$t("required")]},null,8,["class","label","modelValue","rules"])]),o("div",Z,[s(n,{class:m(["col-7",{"col-12":c(i).screen.lt.md}]),outlined:"",label:a.$t("middlename"),modelValue:l.value.middleName,"onUpdate:modelValue":t[1]||(t[1]=e=>l.value.middleName=e),rules:[e=>!0]},null,8,["class","label","modelValue"])]),o("div",x,[s(n,{class:m(["col-7",{"col-12":c(i).screen.lt.md}]),outlined:"",label:a.$t("lastname")+" *",modelValue:l.value.lastName,"onUpdate:modelValue":t[2]||(t[2]=e=>l.value.lastName=e),rules:[e=>!!e||a.$t("required")]},null,8,["class","label","modelValue","rules"])]),o("div",ee,[s(n,{outlined:"",modelValue:r.value,"onUpdate:modelValue":t[4]||(t[4]=e=>r.value=e),mask:"date",rules:["date"],label:a.$t("birthday")+" *",class:m(["col-7",{"col-12":c(i).screen.lt.md}])},{append:u(()=>[s(k,{name:"event",class:"cursor-pointer"},{default:u(()=>[s(R,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:u(()=>[s(z,{modelValue:r.value,"onUpdate:modelValue":t[3]||(t[3]=e=>r.value=e),title:r.value,subtitle:a.$t("birthday")},{default:u(()=>[o("div",ae,[j(s(y,{label:a.$t("close"),color:"primary",flat:""},null,8,["label"]),[[A]])])]),_:1},8,["modelValue","title","subtitle"])]),_:1})]),_:1})]),_:1},8,["modelValue","label","class"])]),s(_,{inset:""}),s(y,{outline:"",color:"primary",type:"submit",label:a.$t("save")},null,8,["label"])]),_:1}))}});var ce=C(se,[["__scopeId","data-v-c95ec7c4"]]);export{ce as U};
