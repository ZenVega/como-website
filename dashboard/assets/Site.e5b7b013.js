import{u as V,a0 as A,b as M,C as q,d as c,W as F,r as S,e as T,i as t,o as n,c as b,f as p,g as s,a as u,w,t as a,j as H,h as $,l as _,F as W,k as G,n as J,p as K,H as P}from"./index.6f4f63c0.js";import{_ as Q}from"./DeletionModal.2ebdafb9.js";import{_ as U}from"./SiteForm.96b52a1f.js";import{r as X}from"./TrashIcon.f10841d2.js";import"./TextInput.01f00bed.js";import"./SubmitButton.d9247e98.js";const Y={key:1,class:"divide-y-2 divide-gray-300"},Z={class:"mt-8 max-w-sm sm:max-w-lg"},ee={class:"rounded-sm bg-white p-6 shadow-md"},se={key:0,class:"text-md mt-8 pt-8"},te={class:"text-sm text-gray-500"},oe={class:"flex items-center justify-between"},ae={class:"text-xl font-bold"},de={class:"flex flex-row"},re={class:"min-w-full divide-y divide-gray-200 overflow-hidden rounded-sm bg-white ring-1 ring-gray-300"},ie={class:"bg-gray-50"},ne={scope:"col",class:"px-2 py-3 text-left text-xs font-medium tracking-wider text-gray-500 sm:px-6"},le={scope:"col",class:"py-3 text-right text-xs font-medium tracking-wider text-gray-500 sm:px-6"},ce=s("sup",null,"2",-1),me=_("] "),pe={scope:"col",class:"py-3 text-right text-xs font-medium tracking-wider text-gray-500 sm:px-6"},ue={scope:"col",class:"hidden py-3 text-right text-xs font-medium tracking-wider text-gray-500 sm:px-6 md:table-cell"},he={scope:"col",class:"px-2 py-3 text-left text-xs font-medium tracking-wider text-gray-500 sm:px-6"},_e={class:"whitespace-nowrap px-2 py-4 sm:px-6"},ve={class:"whitespace-nowrap px-2 py-4 text-right sm:px-6"},ge={class:"whitespace-nowrap px-2 py-4 text-right sm:px-6"},ye={class:"hidden whitespace-nowrap px-2 py-4 text-right sm:px-6 md:table-cell"},xe={class:"whitespace-nowrap px-2 py-4 sm:px-6"},we={class:"flex flex-col sm:flex-row"},fe=["onClick"],be={key:1,class:"mt-4 flex max-w-sm items-center rounded-sm border-l-4 border-yellow-400 bg-yellow-50 p-4 shadow-md"},$e={class:"flex"},ke={class:"flex-shrink-0"},je={class:"ml-3"},Oe={emits:["changeSubheading"],setup(Re,{emit:I}){const{t:v}=V(),z=A(),l=M(),g=q(),k=c(()=>l.getters["nav/isOrgContextLoading"]),m=c(()=>z.params.siteId),d=c(()=>l.getters["jv/get"]({_jv:{type:"Site",id:m.value}}));F(()=>{var e;(e=d.value)!=null&&e.name&&I("changeSubheading",d.value.name)});const j=c(()=>d.value.address._jv.id),R=c(()=>{const e=l.getters["jv/get"]("Room",`$[?(@._jv.relationships.site.data.id=="${m.value}")]`);return Object.entries(e).map(([,r])=>r)}),D=c(()=>{var e;return!k.value&&((e=R.value)==null?void 0:e.length)>0}),y=c(()=>l.getters["nav/isOwner"]),f=S(!1),x=S(),N=()=>f.value=!0,O=async()=>{console.log(`Deleting room with ID ${x.value}`),await l.dispatch("jv/delete",`rooms/${x.value}`),l.commit("jv/deleteRecord",{_jv:{type:"Room",id:x.value}})},L=async({name:e,description:i})=>{if(d.value.name===e&&d.value.description===i)return;let r={_jv:{type:"Site",id:m.value},name:e,description:i};try{await l.dispatch("jv/patch",[r,{url:`sites/${m.value}/`}]),g.success(v("site.updateSuccess"))}catch(o){g.error(v("site.updateError")),console.log(o)}},B=async({street1:e,street2:i,zip:r,city:o})=>{if(d.value.address.street1===e&&d.value.address.street2===i&&d.value.address.zip===r&&d.value.address.city===o)return;let h={_jv:{type:"Address",id:j.value},street1:e,street2:i,zip:r,city:o};try{await l.dispatch("jv/patch",[h,{url:`addresses/${j.value}/`}]),g.success(v("address.updateSuccess"))}catch{g.error(v("address.updateError"))}},E=async({name:e,description:i,street1:r,street2:o,zip:h,city:C})=>{L({name:e,description:i}),B({street1:r,street2:o,zip:h,city:C})};return(e,i)=>{const r=T("router-link");return t(k)?(n(),b(P,{key:0})):(n(),p("div",Y,[s("div",Z,[s("div",ee,[u(U,{"allow-edit":t(y),"site-name":t(d).name,"site-description":t(d).description,"address-street1":t(d).address.street1,"address-street2":t(d).address.street2,"address-zip":t(d).address.zip,"address-city":t(d).address.city,"button-text":"site.update","on-submit":E},null,8,["allow-edit","site-name","site-description","address-street1","address-street2","address-zip","address-city"])])]),t(D)?(n(),p("div",se,[u(Q,{open:f.value,onCloseModal:i[0]||(i[0]=o=>f.value=!1),onDeleteClicked:O,"modal-title":"delete-room-modal.title"},{default:w(()=>[s("p",te,a(e.$t("delete-room-modal.message")),1)]),_:1},8,["open"]),s("div",oe,[s("h2",ae,a(e.$t("rooms"))+" "+a(e.$t("of"))+" "+a(t(d).name),1),s("div",de,[t(y)?(n(),b(r,{key:0,class:"gray-button btn-sm m-2 mr-0 w-max font-semibold",to:{name:"addRoom",params:{siteId:t(m)}}},{default:w(()=>[u(t(H),{class:"mr-2 h-4 w-4"}),s("span",null,a(e.$t("room.add")),1)]),_:1},8,["to"])):$("",!0)])]),s("table",re,[s("thead",ie,[s("tr",null,[s("th",ne,a(e.$t("room.name")),1),s("th",le,[_(a(e.$t("room.size"))+" [m",1),ce,me]),s("th",pe,a(e.$t("room.height"))+" [m] ",1),s("th",ue,a(e.$t("room.maxOccupancy")),1),s("th",he,a(e.$t("action")),1)])]),s("tbody",null,[(n(!0),p(W,null,G(t(R),(o,h)=>(n(),p("tr",{key:o._jv.id,class:J([h%2===0?"bg-white":"bg-gray-50"])},[s("td",_e,[u(r,{class:"como-link",to:{name:"room",params:{roomId:o._jv.id}}},{default:w(()=>[_(a(o.name),1)]),_:2},1032,["to"])]),s("td",ve,a(o.size_sqm?e.$n(Number(o.size_sqm)):"-"),1),s("td",ge,a(o.height_m?e.$n(Number(o.height_m)):"-"),1),s("td",ye,a(o.max_occupancy||"-"),1),s("td",xe,[s("div",we,[t(y)?(n(),p("div",{key:0,class:"gray-button btn-sm m-2 mr-0 font-semibold",onClick:()=>{N(),x.value=o._jv.id}},[u(t(X),{class:"mr-2 h-4 w-4"}),s("span",null,a(e.$t("remove")),1)],8,fe)):$("",!0)])])],2))),128))])])])):(n(),p("div",be,[s("div",$e,[s("div",ke,[u(t(K),{class:"h-5 w-5 text-yellow-400","aria-hidden":"true"})]),s("div",je,[_(a(e.$t("site.noRooms"))+". ",1),t(y)?(n(),b(r,{key:0,class:"font-medium text-yellow-700 underline hover:text-yellow-600",to:{name:"addRoom",params:{siteId:t(m)}}},{default:w(()=>[_(a(e.$t("room.add"))+".",1)]),_:1},8,["to"])):$("",!0)])])]))]))}}};export{Oe as default};