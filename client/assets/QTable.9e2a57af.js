import{l as D,h as n,m as Q,ai as bt,Q as Ve,g as A,c,r as N,w as M,an as De,o as je,ad as mt,ac as St,n as pe,G as Be,J as Ee,aj as yt,ak as ht,as as _t,at as Oe,aR as be,aP as Fe,aN as wt,z as Qe,aS as qt,ab as H,a0 as ee}from"./index.227b5c2c.js";import{Q as Pt}from"./QSeparator.586223e1.js";import{Q as Ct}from"./LoadingSpinner.97d9b8d9.js";import{u as me,a as Se}from"./use-key-composition.a626e275.js";import{u as kt,d as Rt,e as Ne,c as Tt}from"./QSelect.8aacd962.js";import{s as xt,g as Bt}from"./QDialog.b34c5629.js";import{Q as ge}from"./QCheckbox.c55cd752.js";var Ot=D({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:l,emit:r}){const d=A(),{proxy:{$q:o}}=d,f=s=>{r("click",s)};return()=>{if(e.props===void 0)return n("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:f},Q(l.default));let s,u;const v=d.vnode.key;if(v){if(s=e.props.colsMap[v],s===void 0)return}else s=e.props.col;if(s.sortable===!0){const a=s.align==="right"?"unshift":"push";u=bt(l.default,[]),u[a](n(Ve,{class:s.__iconClass,name:o.iconSet.table.arrowUp}))}else u=Q(l.default);const S={class:s.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:s.headerStyle,onClick:a=>{s.sortable===!0&&e.props.sort(s),f(a)}};return n("th",S,u)}}}),dl=D({name:"QTr",props:{props:Object,noHover:Boolean},setup(e,{slots:l}){const r=c(()=>"q-tr"+(e.props===void 0||e.props.header===!0?"":" "+e.props.__trClass)+(e.noHover===!0?" q-tr--no-hover":""));return()=>n("tr",{class:r.value},Q(l.default))}}),vl=D({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:l}){const r=A(),d=c(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return n("td",{class:d.value},Q(l.default));const o=r.vnode.key,f=(e.props.colsMap!==void 0?e.props.colsMap[o]:null)||e.props.col;if(f===void 0)return;const{row:s}=e.props;return n("td",{class:d.value+f.__tdClass(s),style:f.__tdStyle(s)},Q(l.default))}}});const Ft=["horizontal","vertical","cell","none"];var $t=D({name:"QMarkupTable",props:{...me,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>Ft.includes(e)}},setup(e,{slots:l}){const r=A(),d=Se(e,r.proxy.$q),o=c(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(d.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>n("div",{class:o.value},[n("table",{class:"q-table"},Q(l.default))])}});function Ae(e,l){return n("div",e,[n("table",{class:"q-table"},l)])}const Lt={list:Ct,table:$t},Mt=["list","table","__qtable"];var Vt=D({name:"QVirtualScroll",props:{...kt,type:{type:String,default:"list",validator:e=>Mt.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:xt},setup(e,{slots:l,attrs:r}){let d;const o=N(null),f=c(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:s,localResetVirtualScroll:u,padVirtualScroll:v,onVirtualScrollEvt:S}=Rt({virtualScrollLength:f,getVirtualScrollTarget:P,getVirtualScrollEl:q}),a=c(()=>{if(f.value===0)return[];const O=(F,R)=>({index:s.value.from+R,item:F});return e.itemsFn===void 0?e.items.slice(s.value.from,s.value.to).map(O):e.itemsFn(s.value.from,s.value.to-s.value.from).map(O)}),b=c(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),w=c(()=>e.scrollTarget!==void 0?{}:{tabindex:0});M(f,()=>{u()}),M(()=>e.scrollTarget,()=>{y(),_()});function q(){return o.value.$el||o.value}function P(){return d}function _(){d=Bt(q(),e.scrollTarget),d.addEventListener("scroll",S,Be.passive)}function y(){d!==void 0&&(d.removeEventListener("scroll",S,Be.passive),d=void 0)}function B(){let O=v(e.type==="list"?"div":"tbody",a.value.map(l.default));return l.before!==void 0&&(O=l.before().concat(O)),Ee(l.after,O)}return De(()=>{u()}),je(()=>{_()}),mt(()=>{_()}),St(()=>{y()}),pe(()=>{y()}),()=>{if(l.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?Ae({ref:o,class:"q-table__middle "+b.value},B()):n(Lt[e.type],{...r,ref:o,class:[r.class,b.value],...w.value},B)}}});const Dt={xs:2,sm:4,md:6,lg:10,xl:14};function $e(e,l,r){return{transform:l===!0?`translateX(${r.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var jt=D({name:"QLinearProgress",props:{...me,...yt,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:l}){const{proxy:r}=A(),d=Se(e,r.$q),o=ht(e,Dt),f=c(()=>e.indeterminate===!0||e.query===!0),s=c(()=>e.reverse!==e.query),u=c(()=>({...o.value!==null?o.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),v=c(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),S=c(()=>$e(e.buffer!==void 0?e.buffer:1,s.value,r.$q)),a=c(()=>`with${e.instantFeedback===!0?"out":""}-transition`),b=c(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${a.value} q-linear-progress__track--${d.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),w=c(()=>$e(f.value===!0?1:e.value,s.value,r.$q)),q=c(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${a.value} q-linear-progress__model--${f.value===!0?"in":""}determinate`),P=c(()=>({width:`${e.value*100}%`})),_=c(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${a.value}`);return()=>{const y=[n("div",{class:b.value,style:S.value}),n("div",{class:q.value,style:w.value})];return e.stripe===!0&&f.value===!1&&y.push(n("div",{class:_.value,style:P.value})),n("div",{class:v.value,style:u.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},Ee(l.default,y))}}});let z=0;const pt={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Et=["update:fullscreen","fullscreen"];function Qt(){const e=A(),{props:l,emit:r,proxy:d}=e;let o,f,s;const u=N(!1);_t(e)===!0&&M(()=>d.$route.fullPath,()=>{l.noRouteFullscreenExit!==!0&&a()}),M(()=>l.fullscreen,b=>{u.value!==b&&v()}),M(u,b=>{r("update:fullscreen",b),r("fullscreen",b)});function v(){u.value===!0?a():S()}function S(){u.value!==!0&&(u.value=!0,s=d.$el.parentNode,s.replaceChild(f,d.$el),document.body.appendChild(d.$el),z++,z===1&&document.body.classList.add("q-body--fullscreen-mixin"),o={handler:a},Oe.add(o))}function a(){u.value===!0&&(o!==void 0&&(Oe.remove(o),o=void 0),s.replaceChild(d.$el,f),u.value=!1,z=Math.max(0,z-1),z===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),d.$el.scrollIntoView!==void 0&&setTimeout(()=>{d.$el.scrollIntoView()})))}return De(()=>{f=document.createElement("span")}),je(()=>{l.fullscreen===!0&&S()}),pe(a),Object.assign(d,{toggleFullscreen:v,setFullscreen:S,exitFullscreen:a}),{inFullscreen:u,toggleFullscreen:v}}function Nt(e,l){return new Date(e)-new Date(l)}const At={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function Ht(e,l,r,d){const o=c(()=>{const{sortBy:u}=l.value;return u&&r.value.find(v=>v.name===u)||null}),f=c(()=>e.sortMethod!==void 0?e.sortMethod:(u,v,S)=>{const a=r.value.find(q=>q.name===v);if(a===void 0||a.field===void 0)return u;const b=S===!0?-1:1,w=typeof a.field=="function"?q=>a.field(q):q=>q[a.field];return u.sort((q,P)=>{let _=w(q),y=w(P);return a.rawSort!==void 0?a.rawSort(_,y,q,P)*b:_==null?-1*b:y==null?1*b:a.sort!==void 0?a.sort(_,y,q,P)*b:be(_)===!0&&be(y)===!0?(_-y)*b:Fe(_)===!0&&Fe(y)===!0?Nt(_,y)*b:typeof _=="boolean"&&typeof y=="boolean"?(_-y)*b:([_,y]=[_,y].map(B=>(B+"").toLocaleString().toLowerCase()),_<y?-1*b:_===y?0:b)})});function s(u){let v=e.columnSortOrder;if(wt(u)===!0)u.sortOrder&&(v=u.sortOrder),u=u.name;else{const b=r.value.find(w=>w.name===u);b!==void 0&&b.sortOrder&&(v=b.sortOrder)}let{sortBy:S,descending:a}=l.value;S!==u?(S=u,a=v==="da"):e.binaryStateSort===!0?a=!a:a===!0?v==="ad"?S=null:a=!1:v==="ad"?a=!0:S=null,d({sortBy:S,descending:a,page:1})}return{columnToSort:o,computedSortMethod:f,sort:s}}const zt={filter:[String,Object],filterMethod:Function};function Ut(e,l){const r=c(()=>e.filterMethod!==void 0?e.filterMethod:(d,o,f,s)=>{const u=o?o.toLowerCase():"";return d.filter(v=>f.some(S=>{const a=s(S,v)+"";return(a==="undefined"||a==="null"?"":a.toLowerCase()).indexOf(u)!==-1}))});return M(()=>e.filter,()=>{Qe(()=>{l({page:1},!0)})},{deep:!0}),{computedFilterMethod:r}}function It(e,l){for(const r in l)if(l[r]!==e[r])return!1;return!0}function Le(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const Wt={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function Gt(e,l){const{props:r,emit:d}=e,o=N(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:r.rowsPerPageOptions.length!==0?r.rowsPerPageOptions[0]:5},r.pagination)),f=c(()=>{const a=r["onUpdate:pagination"]!==void 0?{...o.value,...r.pagination}:o.value;return Le(a)}),s=c(()=>f.value.rowsNumber!==void 0);function u(a){v({pagination:a,filter:r.filter})}function v(a={}){Qe(()=>{d("request",{pagination:a.pagination||f.value,filter:a.filter||r.filter,getCellValue:l})})}function S(a,b){const w=Le({...f.value,...a});if(It(f.value,w)===!0){s.value===!0&&b===!0&&u(w);return}if(s.value===!0){u(w);return}r.pagination!==void 0&&r["onUpdate:pagination"]!==void 0?d("update:pagination",w):o.value=w}return{innerPagination:o,computedPagination:f,isServerSide:s,requestServerInteraction:v,setPagination:S}}function Kt(e,l,r,d,o,f){const{props:s,emit:u,proxy:{$q:v}}=e,S=c(()=>d.value===!0?r.value.rowsNumber||0:f.value),a=c(()=>{const{page:R,rowsPerPage:T}=r.value;return(R-1)*T}),b=c(()=>{const{page:R,rowsPerPage:T}=r.value;return R*T}),w=c(()=>r.value.page===1),q=c(()=>r.value.rowsPerPage===0?1:Math.max(1,Math.ceil(S.value/r.value.rowsPerPage))),P=c(()=>b.value===0?!0:r.value.page>=q.value),_=c(()=>(s.rowsPerPageOptions.includes(l.value.rowsPerPage)?s.rowsPerPageOptions:[l.value.rowsPerPage].concat(s.rowsPerPageOptions)).map(T=>({label:T===0?v.lang.table.allRows:""+T,value:T})));M(q,(R,T)=>{if(R===T)return;const U=r.value.page;R&&!U?o({page:1}):R<U&&o({page:R})});function y(){o({page:1})}function B(){const{page:R}=r.value;R>1&&o({page:R-1})}function O(){const{page:R,rowsPerPage:T}=r.value;b.value>0&&R*T<S.value&&o({page:R+1})}function F(){o({page:q.value})}return s["onUpdate:pagination"]!==void 0&&u("update:pagination",{...r.value}),{firstRowIndex:a,lastRowIndex:b,isFirstPage:w,isLastPage:P,pagesNumber:q,computedRowsPerPageOptions:_,computedRowsNumber:S,firstPage:y,prevPage:B,nextPage:O,lastPage:F}}const Jt={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},Xt=["update:selected","selection"];function Yt(e,l,r,d){const o=c(()=>{const P={};return e.selected.map(d.value).forEach(_=>{P[_]=!0}),P}),f=c(()=>e.selection!=="none"),s=c(()=>e.selection==="single"),u=c(()=>e.selection==="multiple"),v=c(()=>r.value.length!==0&&r.value.every(P=>o.value[d.value(P)]===!0)),S=c(()=>v.value!==!0&&r.value.some(P=>o.value[d.value(P)]===!0)),a=c(()=>e.selected.length);function b(P){return o.value[P]===!0}function w(){l("update:selected",[])}function q(P,_,y,B){l("selection",{rows:_,added:y,keys:P,evt:B});const O=s.value===!0?y===!0?_:[]:y===!0?e.selected.concat(_):e.selected.filter(F=>P.includes(d.value(F))===!1);l("update:selected",O)}return{hasSelectionMode:f,singleSelection:s,multipleSelection:u,allRowsSelected:v,someRowsSelected:S,rowsSelectedNumber:a,isRowSelected:b,clearSelection:w,updateSelection:q}}function Me(e){return Array.isArray(e)?e.slice():[]}const Zt={expanded:Array},el=["update:expanded"];function tl(e,l){const r=N(Me(e.expanded));M(()=>e.expanded,s=>{r.value=Me(s)});function d(s){return r.value.includes(s)}function o(s){e.expanded!==void 0?l("update:expanded",s):r.value=s}function f(s,u){const v=r.value.slice(),S=v.indexOf(s);u===!0?S===-1&&(v.push(s),o(v)):S!==-1&&(v.splice(S,1),o(v))}return{isRowExpanded:d,setExpanded:o,updateExpanded:f}}const ll={visibleColumns:Array};function al(e,l,r){const d=c(()=>{if(e.columns!==void 0)return e.columns;const u=e.rows[0];return u!==void 0?Object.keys(u).map(v=>({name:v,label:v.toUpperCase(),field:v,align:be(u[v])?"right":"left",sortable:!0})):[]}),o=c(()=>{const{sortBy:u,descending:v}=l.value;return(e.visibleColumns!==void 0?d.value.filter(a=>a.required===!0||e.visibleColumns.includes(a.name)===!0):d.value).map(a=>{const b=a.align||"right",w=`text-${b}`;return{...a,align:b,__iconClass:`q-table__sort-icon q-table__sort-icon--${b}`,__thClass:w+(a.headerClasses!==void 0?" "+a.headerClasses:"")+(a.sortable===!0?" sortable":"")+(a.name===u?` sorted ${v===!0?"sort-desc":""}`:""),__tdStyle:a.style!==void 0?typeof a.style!="function"?()=>a.style:a.style:()=>null,__tdClass:a.classes!==void 0?typeof a.classes!="function"?()=>w+" "+a.classes:q=>w+" "+a.classes(q):()=>w}})}),f=c(()=>{const u={};return o.value.forEach(v=>{u[v.name]=v}),u}),s=c(()=>e.tableColspan!==void 0?e.tableColspan:o.value.length+(r.value===!0?1:0));return{colList:d,computedCols:o,computedColsMap:f,computedColspan:s}}const te="q-table__bottom row items-center",He={};Ne.forEach(e=>{He[e]={}});var fl=D({name:"QTable",props:{rows:{type:Array,required:!0},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{},...He,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...me,...pt,...ll,...zt,...Wt,...Zt,...Jt,...At},emits:["request","virtualScroll",...Et,...el,...Xt],setup(e,{slots:l,emit:r}){const d=A(),{proxy:{$q:o}}=d,f=Se(e,o),{inFullscreen:s,toggleFullscreen:u}=Qt(),v=c(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),S=N(null),a=N(null),b=c(()=>e.grid!==!0&&e.virtualScroll===!0),w=c(()=>" q-table__card"+(f.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),q=c(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":w.value)+(f.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(s.value===!0?" fullscreen scroll":"")),P=c(()=>q.value+(e.loading===!0?" q-table--loading":""));M(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+q.value,()=>{b.value===!0&&a.value!==null&&a.value.reset()});const{innerPagination:_,computedPagination:y,isServerSide:B,requestServerInteraction:O,setPagination:F}=Gt(d,p),{computedFilterMethod:R}=Ut(e,F),{isRowExpanded:T,setExpanded:U,updateExpanded:ze}=tl(e,r),le=c(()=>{let t=e.rows;if(B.value===!0||t.length===0)return t;const{sortBy:i,descending:g}=y.value;return e.filter&&(t=R.value(t,e.filter,$.value,p)),Ke.value!==null&&(t=Je.value(e.rows===t?t.slice():t,i,g)),t}),ye=c(()=>le.value.length),V=c(()=>{let t=le.value;if(B.value===!0)return t;const{rowsPerPage:i}=y.value;return i!==0&&(W.value===0&&e.rows!==t?t.length>G.value&&(t=t.slice(0,G.value)):t=t.slice(W.value,G.value)),t}),{hasSelectionMode:j,singleSelection:Ue,multipleSelection:he,allRowsSelected:Ie,someRowsSelected:_e,rowsSelectedNumber:ae,isRowSelected:re,clearSelection:We,updateSelection:I}=Yt(e,r,V,v),{colList:Ge,computedCols:$,computedColsMap:we,computedColspan:qe}=al(e,y,j),{columnToSort:Ke,computedSortMethod:Je,sort:ne}=Ht(e,y,Ge,F),{firstRowIndex:W,lastRowIndex:G,isFirstPage:oe,isLastPage:ie,pagesNumber:K,computedRowsPerPageOptions:Xe,computedRowsNumber:J,firstPage:se,prevPage:ue,nextPage:ce,lastPage:de}=Kt(d,_,y,B,F,ye),Ye=c(()=>V.value.length===0),Ze=c(()=>{const t={};return Ne.forEach(i=>{t[i]=e[i]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function et(){b.value===!0&&a.value.reset()}function tt(){if(e.grid===!0)return ft();const t=e.hideHeader!==!0?Te:null;if(b.value===!0){const g=l["top-row"],m=l["bottom-row"],h={default:k=>Ce(k.item,l.body,k.index)};if(g!==void 0){const k=n("tbody",g({cols:$.value}));h.before=t===null?()=>k:()=>[t()].concat(k)}else t!==null&&(h.before=t);return m!==void 0&&(h.after=()=>n("tbody",m({cols:$.value}))),n(Vt,{ref:a,class:e.tableClass,style:e.tableStyle,...Ze.value,scrollTarget:e.virtualScrollTarget,items:V.value,type:"__qtable",tableColspan:qe.value,onVirtualScroll:at},h)}const i=[rt()];return t!==null&&i.unshift(t()),Ae({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},i)}function lt(t,i){if(a.value!==null){a.value.scrollTo(t,i);return}t=parseInt(t,10);const g=S.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(g!==null){const m=S.value.querySelector(".q-table__middle.scroll"),h=g.offsetTop-e.virtualScrollStickySizeStart,k=h<m.scrollTop?"decrease":"increase";m.scrollTop=h,r("virtualScroll",{index:t,from:0,to:_.value.rowsPerPage-1,direction:k})}}function at(t){r("virtualScroll",t)}function Pe(){return[n(jt,{class:"q-table__linear-progress",color:e.color,dark:f.value,indeterminate:!0,trackColor:"transparent"})]}function Ce(t,i,g){const m=v.value(t),h=re(m);if(i!==void 0)return i(ke({key:m,row:t,pageIndex:g,__trClass:h?"selected":""}));const k=l["body-cell"],C=$.value.map(x=>{const Y=l[`body-cell-${x.name}`],Z=Y!==void 0?Y:k;return Z!==void 0?Z(nt({key:m,row:t,pageIndex:g,col:x})):n("td",{class:x.__tdClass(t),style:x.__tdStyle(t)},p(x,t))});if(j.value===!0){const x=l["body-selection"],Y=x!==void 0?x(ot({key:m,row:t,pageIndex:g})):[n(ge,{modelValue:h,color:e.color,dark:f.value,dense:e.dense,"onUpdate:modelValue":(Z,gt)=>{I([m],[t],Z,gt)}})];C.unshift(n("td",{class:"q-table--col-auto-width"},Y))}const L={key:m,class:{selected:h}};return e.onRowClick!==void 0&&(L.class["cursor-pointer"]=!0,L.onClick=x=>{r("rowClick",x,t,g)}),e.onRowDblclick!==void 0&&(L.class["cursor-pointer"]=!0,L.onDblclick=x=>{r("rowDblclick",x,t,g)}),e.onRowContextmenu!==void 0&&(L.class["cursor-pointer"]=!0,L.onContextmenu=x=>{r("rowContextmenu",x,t,g)}),n("tr",L,C)}function rt(){const t=l.body,i=l["top-row"],g=l["bottom-row"];let m=V.value.map((h,k)=>Ce(h,t,k));return i!==void 0&&(m=i({cols:$.value}).concat(m)),g!==void 0&&(m=m.concat(g({cols:$.value}))),n("tbody",m)}function ke(t){return ve(t),t.cols=t.cols.map(i=>H({...i},"value",()=>p(i,t.row))),t}function nt(t){return ve(t),H(t,"value",()=>p(t.col,t.row)),t}function ot(t){return ve(t),t}function ve(t){Object.assign(t,{cols:$.value,colsMap:we.value,sort:ne,rowIndex:W.value+t.pageIndex,color:e.color,dark:f.value,dense:e.dense}),j.value===!0&&H(t,"selected",()=>re(t.key),(i,g)=>{I([t.key],[t.row],i,g)}),H(t,"expand",()=>T(t.key),i=>{ze(t.key,i)})}function p(t,i){const g=typeof t.field=="function"?t.field(i):i[t.field];return t.format!==void 0?t.format(g,i):g}const E=c(()=>({pagination:y.value,pagesNumber:K.value,isFirstPage:oe.value,isLastPage:ie.value,firstPage:se,prevPage:ue,nextPage:ce,lastPage:de,inFullscreen:s.value,toggleFullscreen:u}));function it(){const t=l.top,i=l["top-left"],g=l["top-right"],m=l["top-selection"],h=j.value===!0&&m!==void 0&&ae.value>0,k="q-table__top relative-position row items-center";if(t!==void 0)return n("div",{class:k},[t(E.value)]);let C;if(h===!0?C=m(E.value).slice():(C=[],i!==void 0?C.push(n("div",{class:"q-table__control"},[i(E.value)])):e.title&&C.push(n("div",{class:"q-table__control"},[n("div",{class:["q-table__title",e.titleClass]},e.title)]))),g!==void 0&&(C.push(n("div",{class:"q-table__separator col"})),C.push(n("div",{class:"q-table__control"},[g(E.value)]))),C.length!==0)return n("div",{class:k},C)}const Re=c(()=>_e.value===!0?null:Ie.value);function Te(){const t=st();return e.loading===!0&&l.loading===void 0&&t.push(n("tr",{class:"q-table__progress"},[n("th",{class:"relative-position",colspan:qe.value},Pe())])),n("thead",t)}function st(){const t=l.header,i=l["header-cell"];if(t!==void 0)return t(fe({header:!0})).slice();const g=$.value.map(m=>{const h=l[`header-cell-${m.name}`],k=h!==void 0?h:i,C=fe({col:m});return k!==void 0?k(C):n(Ot,{key:m.name,props:C},()=>m.label)});if(Ue.value===!0&&e.grid!==!0)g.unshift(n("th",{class:"q-table--col-auto-width"}," "));else if(he.value===!0){const m=l["header-selection"],h=m!==void 0?m(fe({})):[n(ge,{color:e.color,modelValue:Re.value,dark:f.value,dense:e.dense,"onUpdate:modelValue":xe})];g.unshift(n("th",{class:"q-table--col-auto-width"},h))}return[n("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},g)]}function fe(t){return Object.assign(t,{cols:$.value,sort:ne,colsMap:we.value,color:e.color,dark:f.value,dense:e.dense}),he.value===!0&&H(t,"selected",()=>Re.value,xe),t}function xe(t){_e.value===!0&&(t=!1),I(V.value.map(v.value),V.value,t)}const X=c(()=>{const t=[e.iconFirstPage||o.iconSet.table.firstPage,e.iconPrevPage||o.iconSet.table.prevPage,e.iconNextPage||o.iconSet.table.nextPage,e.iconLastPage||o.iconSet.table.lastPage];return o.lang.rtl===!0?t.reverse():t});function ut(){if(e.hideBottom===!0)return;if(Ye.value===!0){if(e.hideNoData===!0)return;const g=e.loading===!0?e.loadingLabel||o.lang.table.loading:e.filter?e.noResultsLabel||o.lang.table.noResults:e.noDataLabel||o.lang.table.noData,m=l["no-data"],h=m!==void 0?[m({message:g,icon:o.iconSet.table.warning,filter:e.filter})]:[n(Ve,{class:"q-table__bottom-nodata-icon",name:o.iconSet.table.warning}),g];return n("div",{class:te+" q-table__bottom--nodata"},h)}const t=l.bottom;if(t!==void 0)return n("div",{class:te},[t(E.value)]);const i=e.hideSelectedBanner!==!0&&j.value===!0&&ae.value>0?[n("div",{class:"q-table__control"},[n("div",[(e.selectedRowsLabel||o.lang.table.selectedRecords)(ae.value)])])]:[];if(e.hidePagination!==!0)return n("div",{class:te+" justify-end"},dt(i));if(i.length!==0)return n("div",{class:te},i)}function ct(t){F({page:1,rowsPerPage:t.value})}function dt(t){let i;const{rowsPerPage:g}=y.value,m=e.paginationLabel||o.lang.table.pagination,h=l.pagination,k=e.rowsPerPageOptions.length>1;if(t.push(n("div",{class:"q-table__separator col"})),k===!0&&t.push(n("div",{class:"q-table__control"},[n("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||o.lang.table.recordsPerPage]),n(Tt,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:g,options:Xe.value,displayValue:g===0?o.lang.table.allRows:g,dark:f.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":ct})])),h!==void 0)i=h(E.value);else if(i=[n("span",g!==0?{class:"q-table__bottom-item"}:{},[g?m(W.value+1,Math.min(G.value,J.value),J.value):m(1,ye.value,J.value)])],g!==0&&K.value>1){const C={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(C.size="sm"),K.value>2&&i.push(n(ee,{key:"pgFirst",...C,icon:X.value[0],disable:oe.value,onClick:se})),i.push(n(ee,{key:"pgPrev",...C,icon:X.value[1],disable:oe.value,onClick:ue}),n(ee,{key:"pgNext",...C,icon:X.value[2],disable:ie.value,onClick:ce})),K.value>2&&i.push(n(ee,{key:"pgLast",...C,icon:X.value[3],disable:ie.value,onClick:de}))}return t.push(n("div",{class:"q-table__control"},i)),t}function vt(){const t=e.gridHeader===!0?[n("table",{class:"q-table"},[Te()])]:e.loading===!0&&l.loading===void 0?Pe():void 0;return n("div",{class:"q-table__middle"},t)}function ft(){const t=l.item!==void 0?l.item:i=>{const g=i.cols.map(h=>n("div",{class:"q-table__grid-item-row"},[n("div",{class:"q-table__grid-item-title"},[h.label]),n("div",{class:"q-table__grid-item-value"},[h.value])]));if(j.value===!0){const h=l["body-selection"],k=h!==void 0?h(i):[n(ge,{modelValue:i.selected,color:e.color,dark:f.value,dense:e.dense,"onUpdate:modelValue":(C,L)=>{I([i.key],[i.row],C,L)}})];g.unshift(n("div",{class:"q-table__grid-item-row"},k),n(Pt,{dark:f.value}))}const m={class:["q-table__grid-item-card"+w.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(m.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(m.onClick=h=>{r("RowClick",h,i.row,i.pageIndex)}),e.onRowDblclick!==void 0&&(m.onDblclick=h=>{r("RowDblclick",h,i.row,i.pageIndex)})),n("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(i.selected===!0?" q-table__grid-item--selected":"")},[n("div",m,g)])};return n("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},V.value.map((i,g)=>t(ke({key:v.value(i),row:i,pageIndex:g}))))}return Object.assign(d.proxy,{requestServerInteraction:O,setPagination:F,firstPage:se,prevPage:ue,nextPage:ce,lastPage:de,isRowSelected:re,clearSelection:We,isRowExpanded:T,setExpanded:U,sort:ne,resetVirtualScroll:et,scrollTo:lt,getCellValue:p}),qt(d.proxy,{filteredSortedRows:()=>le.value,computedRows:()=>V.value,computedRowsNumber:()=>J.value}),()=>{const t=[it()],i={ref:S,class:P.value};return e.grid===!0?t.push(vt()):Object.assign(i,{class:[i.class,e.cardClass],style:e.cardStyle}),t.push(tt(),ut()),e.loading===!0&&l.loading!==void 0&&t.push(l.loading()),n("div",i,t)}}});export{fl as Q,Ot as a,dl as b,vl as c};
