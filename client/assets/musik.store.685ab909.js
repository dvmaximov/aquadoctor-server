import{a5 as r,aT as o}from"./index.227b5c2c.js";const a=r("musik",{state:()=>({musiks:[],loading:!1}),getters:{musikList:s=>t=>t!==""?s.musiks.filter(i=>{var e;return(e=i.name)==null?void 0:e.toLowerCase().includes(t.toLowerCase())}):s.musiks,apiUrl:()=>{const s=location.port===""?"":`:${location.port}`;return`${location.protocol}//${location.hostname}${s}/api/musik/upload`},musikUrl:()=>{const s=location.port===""?"":`:${location.port}`;return`${location.protocol}//${location.hostname}${s}/musik`}},actions:{async load(){this.loading=!0;const s=await o.find("musik");s.error||(this.musiks=s.data),this.loading=!1},async insert(s){const t=await o.insert("musik",s);t.error||this.musiks.push(t.data)},async update(s){(await o.post("musik",s)).error||await this.load()},async delete(s){if(!s)return;const t=await o.delete("musik",s);console.log(t)},getMusikById(s){const t=this.musiks.find(i=>i.id===s);return t||null}}});export{a as u};
