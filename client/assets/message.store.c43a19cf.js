import{a5 as i,a6 as o,a7 as a}from"./index.227b5c2c.js";import{u as m}from"./use-quasar.540f36ff.js";import{u as r}from"./vue-i18n.runtime.e698518b.js";const y=i("message",{state:()=>{const t=m(),{t:e}=r();return o.getData().subscribe(s=>{s.type==a.EVENT_MESSAGE_ERROR&&t.notify({type:"negative",message:e(s.data.message),timeout:s.data.timeout||2e3}),s.type==a.EVENT_MESSAGE_SUCCESS&&t.notify({type:"positive",message:e(s.data.message),timeout:s.data.timeout||2e3})}),{q:t,t:e}},actions:{error(t,e=2e3){this.q.notify({type:"negative",message:this.t(t),timeout:e})},success(t,e=2e3){this.q.notify({type:"positive",message:this.t(t),timeout:e})}}});export{y as u};
