import{o as u,c as k,w as y,a as i,g as e,i as t,s as B,v as Q,x as X,K as Y,l as M,t as n,y as Z,H as ee,z as te,u as A,a0 as se,b as ae,B as oe,d as v,W as ne,r as N,e as le,f as p,D as ie,aD as re,F as T,k as D,h as q,n as de,q as L,G as ce}from"./index.d93d0c87.js";import{b as ue,i as E,d as F}from"./index.04f8877f.js";import{r as me}from"./PlusCircleIcon.508000b6.js";import{s as pe,c as fe,a as x,_ as w,F as ge}from"./TextInput.d0095b98.js";import{_ as ve}from"./SubmitButton.17c1df84.js";import{_ as O}from"./PrivacyToggle.e37f2968.js";const ye={class:"flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0"},be=e("span",{class:"hidden sm:inline-block sm:h-screen sm:align-middle","aria-hidden":"true"},"\u200B",-1),_e={class:"sm:max-w-lg inline-block transform overflow-hidden rounded-md bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:p-6 sm:align-middle"},he={class:"absolute top-0 right-0 hidden pt-4 pr-4 sm:block"},xe=e("span",{class:"sr-only"},"Close",-1),we={class:"sm:flex sm:items-start"},$e={class:"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10"},ke={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},je={class:"mt-2"},Ie={class:"mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"},Ce={__name:"InstallNowModal",props:{open:{type:Boolean,required:!0},modalTitle:{type:String,required:!0}},emits:["closeModal","installClicked"],setup(c,{emit:o}){const f=()=>o("closeModal"),l=()=>{o("installClicked"),f()};return(d,m)=>(u(),k(t(te),{as:"template",show:c.open},{default:y(()=>[i(t(ee),{as:"div",class:"fixed inset-0 z-10 overflow-y-auto",onClose:f},{default:y(()=>[e("div",ye,[i(t(B),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:y(()=>[i(t(Q),{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})]),_:1}),be,i(t(B),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:y(()=>[e("div",_e,[e("div",he,[e("button",{type:"button",class:"rounded-sm bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",onClick:f},[xe,i(t(X),{class:"h-6 w-6","aria-hidden":"true"})])]),e("div",we,[e("div",$e,[i(t(me),{class:"h-6 w-6 text-indigo-600","aria-hidden":"true"})]),e("div",ke,[i(t(Y),{as:"h3",class:"text-lg font-medium leading-6 text-gray-900"},{default:y(()=>[M(n(c.modalTitle),1)]),_:1}),e("div",je,[Z(d.$slots,"default")])])]),e("div",Ie,[e("button",{type:"button",class:"inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm",onClick:l},n(d.$t("installation.installNow")),1),e("button",{type:"button",class:"mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm",onClick:f},n(d.$t("cancel")),1)])])]),_:3})])]),_:3})]),_:3},8,["show"]))}},Se={__name:"SensorForm",props:{sensorAlias:{type:String,default:""},sensorDescription:{type:String,default:""},eui64:{type:String,default:""},sensorId:{type:String,default:""},tradeName:{type:String,default:""},sensorManufacturer:{type:String,default:""},allowEdit:{type:Boolean,default:!1},buttonText:{type:String,required:!0},onSubmit:{type:Function,required:!0}},setup(c){const{t:o}=A();pe({mixed:{required:({label:l})=>l+" "+o("field_required")},string:{max:({label:l,max:d})=>o("field_too_big",{field:l,max:d})}});const f=fe().shape({alias:x().required().max(100).label(o("node.name")),description:x().nullable().label(o("description")),eui:x().nullable().label(o("node.eui")),id:x().nullable().label(o("node.id")),type:x().nullable().label(o("node.type")),manufacturer:x().nullable().label(o("node.manufacturer"))});return(l,d)=>(u(),k(t(ge),{class:"space-y-6",onSubmit:c.onSubmit,"validation-schema":t(f)},{default:y(()=>[i(w,{disabled:!c.allowEdit,value:c.sensorAlias,name:"alias",label:t(o)("node.name")},null,8,["disabled","value","label"]),i(w,{disabled:!c.allowEdit,element:"textarea",value:c.sensorDescription,name:"description",label:`${t(o)("description")} (${t(o)("optional")})`},null,8,["disabled","value","label"]),i(w,{disabled:"",name:"eui",value:c.eui64,label:t(o)("node.eui")},null,8,["value","label"]),i(w,{disabled:"",name:"id",value:c.sensorId,label:t(o)("node.id")},null,8,["value","label"]),i(w,{disabled:"",name:"type",value:c.tradeName,label:t(o)("node.type")},null,8,["value","label"]),i(w,{disabled:"",name:"manufacturer",value:c.sensorManufacturer,label:t(o)("node.manufacturer")},null,8,["value","label"]),i(ve,{"allow-submit":c.allowEdit},{default:y(()=>[M(n(l.$t(c.buttonText)),1)]),_:1},8,["allow-submit"])]),_:1},8,["onSubmit","validation-schema"]))}},Ne={key:0,class:""},Te={class:"form-control"},qe={for:"room",class:"block text-sm font-medium text-gray-700"},Le=["value"],Me={class:"my-2 flex items-center"},Ve={class:"mr-3 text-sm"},Be={for:"makePublic",class:"font-medium text-gray-700"},De={key:2},Ee={class:"max-w-sm sm:max-w-lg mt-8"},Fe={class:"rounded-sm bg-white p-6 shadow-md"},Oe={key:3,class:"text-md mt-8 overflow-hidden rounded-sm bg-white ring-1 ring-gray-300"},Ae={class:"min-w-full divide-y divide-gray-200"},Re={class:"bg-gray-50"},ze={scope:"col",class:"px-2 py-3 text-left text-xs font-medium tracking-wider text-gray-500 sm:px-6"},Pe={scope:"col",class:"py-3 text-left text-xs font-medium tracking-wider text-gray-500 sm:px-6"},He={scope:"col",class:"py-3 text-left text-xs font-medium tracking-wider text-gray-500 sm:px-6"},Ke={scope:"col",class:"hidden py-3 text-left text-xs font-medium tracking-wider text-gray-500 sm:px-6 md:table-cell"},Ue={scope:"col",class:"px-2 py-3 text-left text-xs font-medium tracking-wider text-gray-500 sm:px-6"},Ge={class:"whitespace-nowrap px-2 py-4 sm:px-6"},We={class:"whitespace-nowrap px-2 py-4 text-left sm:px-6"},Je={key:1},Qe={class:"whitespace-nowrap px-2 py-4 text-left sm:px-6"},Xe={class:"whitespace-nowrap px-2 py-4 text-left sm:px-6"},Ye={class:"whitespace-nowrap px-2 py-4 sm:px-6"},Ze={class:"flex flex-col sm:flex-row"},et={class:"flex flex-row"},tt=["onClick"],dt={__name:"Sensor",emits:["changeSubheading"],setup(c,{emit:o}){const f=se(),l=ae(),d=oe(),{t:m}=A(),$=v(()=>l.getters["nav/isOwner"]),R=v(()=>l.getters["nav/isOrgContextLoading"]),_=v(()=>f.params.sensorId),b=v(()=>l.getters["jv/get"]({_jv:{type:"Node",id:_.value}}));ne(()=>{var s;(s=b.value)!=null&&s.alias&&o("changeSubheading",b.value.alias)});const j=v(()=>{const s=l.getters["jv/get"]("Installation",`$[?(@.node._jv.id=="${_.value}")]`);return Object.entries(s).map(([,g])=>g)}),z=v(()=>{var s;return((s=j.value)==null?void 0:s.length)>0}),P=v(()=>ue(j.value)),I=v(()=>l.getters["nav/getRooms"]),H=v(()=>{var s;return((s=I.value)==null?void 0:s.length)>0}),C=N(!1),h=N(I.value[0]),S=N(!1),K=async({alias:s,description:r})=>{let g={_jv:{type:"Node",id:_.value},alias:s,description:r};try{await l.dispatch("jv/patch",[g,{url:`nodes/${_.value}/`}]),d.success(m("node.updateSuccess"))}catch(a){d.error(m("node.updateError")),console.log(a)}},V=async s=>{const r={_jv:{type:"Installation",id:s},to_timestamp_s:L().unix()};try{await l.dispatch("jv/patch",[r,{url:`installations/${s}/`}]),d.success(m("installation.successTerminate"))}catch(g){d.error(m("installation.errorTerminate")),console.log(g)}},U=async()=>{if(typeof h.value=="undefined"){d.error(m("installation.errorNoTarget"));return}let s={_jv:{type:"Installation",relationships:{room:{data:{type:"Room",id:h.value._jv.id}},node:{data:{type:"Node",id:_.value}}}},from_timestamp_s:L().unix(),is_public:S.value};try{await l.dispatch("jv/post",[s,{url:"installations/"}]),await l.dispatch("jv/get",["installations",{params:{"filter[organization]":f.params.orgId}}],{root:!0}),d.success(m("installation.successCreate")),h.value=void 0}catch(r){d.error(m("installation.errorCreate")),h.value=void 0,console.log(r)}},G=async s=>{let r={_jv:{type:"Installation",relationships:{room:{data:{type:"Room",id:s.room._jv.id}},node:{data:{type:"Node",id:s.node._jv.id}}}},from_timestamp_s:L().unix(),to_timestamp_s:s.to_timestamp_s,is_public:!s.is_public,description:s.description};try{await l.dispatch("jv/post",[r,{url:"installations/"}]),d.success(m("installation.newInstallationCreated"))}catch(g){d.error(m("installation.errorCreatingnewInstallation")),console.log(g)}},W=async s=>{await V(s._jv.id),await G(s)};return(s,r)=>{const g=le("router-link");return u(),p(T,null,[t($)&&!t(P)&&t(H)?(u(),p("div",Ne,[e("div",{class:"btn bg-indigo-600 normal-case hover:bg-indigo-700",onClick:r[0]||(r[0]=a=>C.value=!0)},n(s.$t("installation.installNow")),1),i(Ce,{open:C.value,onCloseModal:r[3]||(r[3]=a=>C.value=!1),onInstallClicked:U,"modal-title":"Installation "+t(m)("of")+" "+t(b).alias},{default:y(()=>[e("div",Te,[e("label",qe,n(s.$t("installation.targetLocation")),1),ie(e("select",{id:"location",name:"room","onUpdate:modelValue":r[1]||(r[1]=a=>h.value=a),class:"mt-1 block w-full rounded-sm border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"},[(u(!0),p(T,null,D(t(I),a=>(u(),p("option",{key:a._jv.id,value:a},n(a.name),9,Le))),128))],512),[[re,h.value]])]),e("div",Me,[e("div",Ve,[e("label",Be,n(s.$t("installation.makePublic")),1)]),e("div",null,[i(O,{modelValue:S.value,"onUpdate:modelValue":r[2]||(r[2]=a=>S.value=a)},null,8,["modelValue"])])])]),_:1},8,["open","modal-title"])])):q("",!0),t(R)?(u(),k(ce,{key:1})):(u(),p("div",De,[e("div",Ee,[e("div",Fe,[i(Se,{"sensor-alias":t(b).alias,"sensor-description":t(b).description,eui64:t(b).eui64,"sensor-id":t(_),"trade-name":t(b).model.trade_name,"sensor-manufacturer":t(b).model.manufacturer,"allow-edit":t($),"button-text":"update","on-submit":K},null,8,["sensor-alias","sensor-description","eui64","sensor-id","trade-name","sensor-manufacturer","allow-edit"])])])])),t(z)?(u(),p("div",Oe,[e("table",Ae,[e("thead",Re,[e("tr",null,[e("th",ze,n(s.$t("node.installationLocation")),1),e("th",Pe,n(s.$t("installation.isPublic")),1),e("th",He,n(s.$t("installation.installedOn")),1),e("th",Ke,n(s.$t("installation.removedOn")),1),e("th",Ue,n(s.$t("actions")),1)])]),e("tbody",null,[(u(!0),p(T,null,D(t(j),(a,J)=>(u(),p("tr",{key:a._jv.id,class:de([J%2===0?"bg-white":"bg-gray-50"])},[e("td",Ge,n(a.room.name),1),e("td",We,[t($)&&t(E)(a)?(u(),k(O,{key:0,enabled:a.is_public,"on-toggle":()=>W(a)},null,8,["enabled","on-toggle"])):(u(),p("div",Je,n(s.$t(`installation.public.${a.is_public}`)),1))]),e("td",Qe,n(t(F)(a.from_timestamp_s)),1),e("td",Xe,n(t(F)(a.to_timestamp_s)),1),e("td",Ye,[e("div",Ze,[e("div",et,[i(g,{class:"gray-button btn-sm my-2 w-max font-semibold",to:{name:"installation",params:{installationId:a._jv.id}}},{default:y(()=>[M(n(s.$t("inspect")),1)]),_:2},1032,["to"])]),t($)&&t(E)(a)?(u(),p("div",{key:0,class:"gray-button btn-sm m-2 mr-0 w-max font-semibold",onClick:st=>V(a._jv.id)},n(s.$t("installation.terminate")),9,tt)):q("",!0)])])],2))),128))])])])):q("",!0)],64)}}};export{dt as default};
