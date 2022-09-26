import{b as R,u as C,d as m,r as y,e as j,i as a,o as l,c as D,f as d,a as n,w as p,g as e,t as s,l as i,F as N,k as I,n as B,h as O,p as V,G as z}from"./index.d93d0c87.js";import{_ as F}from"./DeletionModal.a6e2e2f4.js";import{r as L}from"./TrashIcon.057e3403.js";const M={key:1,class:"mt-4"},S={class:"text-sm text-gray-500"},q={class:"sm:flex sm:items-center"},E={class:"sm:flex-auto"},G={class:"text-xl font-semibold text-gray-900"},T={class:"max-w-md mt-2 text-sm text-gray-700"},A={class:"mt-8 flex flex-col"},H={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},J={class:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"},K={class:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-md"},P={class:"min-w-full divide-y divide-gray-300"},Q={class:"bg-gray-50 text-sm font-medium text-gray-900"},U={scope:"col",class:"px-2 py-3 text-left sm:px-6"},W={scope:"col",class:"py-3 text-right sm:px-6"},X=e("sup",null,"2",-1),Y=i("] "),Z={scope:"col",class:"py-3 text-right sm:px-6"},ee={scope:"col",class:"py-3 text-right sm:px-6"},se={scope:"col",class:"px-2 py-3 text-left sm:px-6"},te={scope:"col",class:"py-3 text-left sm:px-6"},oe={class:"whitespace-nowrap px-2 py-4 sm:px-6"},ae={class:"whitespace-nowrap px-2 py-4 text-right sm:px-6"},le={class:"whitespace-nowrap px-2 py-4 text-right sm:px-6"},ne={class:"whitespace-nowrap px-2 py-4 text-right sm:px-6"},ie={class:"whitespace-nowrap px-2 py-4 sm:px-6"},ce={class:"whitespace-nowrap px-2 py-4 sm:px-6"},de={class:"flex flex-col sm:flex-row"},re=["onClick"],me={key:2,class:"max-w-sm mt-4 flex items-center rounded-sm border-l-4 border-yellow-400 bg-yellow-50 p-4 shadow-md"},pe={class:"flex"},_e={class:"flex-shrink-0"},he={class:"ml-3"},ve={__name:"Rooms",setup(xe){const c=R(),{n:x}=C(),v=m(()=>c.getters["nav/isOrgContextLoading"]),f=m(()=>c.getters["nav/isOwner"]),u=m(()=>c.getters["nav/getRooms"]),w=m(()=>{var t;return((t=u.value)==null?void 0:t.length)>0}),_=y(!1),r=y(),k=()=>_.value=!0,$=async()=>{console.log(`Deleting room with ID ${r.value}`),await c.dispatch("jv/delete",`rooms/${r.value}`),c.commit("jv/deleteRecord",{_jv:{type:"Room",id:r.value}})};return(t,g)=>{const h=j("router-link");return a(v)?(l(),D(z,{key:0})):a(w)?(l(),d("div",M,[n(F,{open:_.value,onCloseModal:g[0]||(g[0]=o=>_.value=!1),onDeleteClicked:$,"modal-title":"delete-room-modal.title"},{default:p(()=>[e("p",S,s(t.$t("delete-room-modal.message")),1)]),_:1},8,["open"]),e("div",q,[e("div",E,[e("h1",G,s(t.$t("room.title")),1),e("p",T,s(t.$t("room.description")),1)])]),e("div",A,[e("div",H,[e("div",J,[e("div",K,[e("table",P,[e("thead",Q,[e("tr",null,[e("th",U,s(t.$t("room.name")),1),e("th",W,[i(s(t.$t("room.size"))+" [m",1),X,Y]),e("th",Z,s(t.$t("room.height"))+" [m] ",1),e("th",ee,s(t.$t("room.maxOccupancy")),1),e("th",se,s(t.$t("site.singular")),1),e("th",te,s(t.$t("action")),1)])]),e("tbody",null,[(l(!0),d(N,null,I(a(u),(o,b)=>(l(),d("tr",{key:o._jv.id,class:B([b%2===0?"bg-white":"bg-gray-50"])},[e("td",oe,[n(h,{class:"como-link",to:{name:"room",params:{roomId:o._jv.id}}},{default:p(()=>[i(s(o.name),1)]),_:2},1032,["to"])]),e("td",ae,s(a(x)(Number(o.size_sqm))||"-"),1),e("td",le,s(a(x)(Number(o.height_m))||"-"),1),e("td",ne,s(o.max_occupancy||"-"),1),e("td",ie,[n(h,{class:"como-link",to:{name:"site",params:{siteId:o.site._jv.id}}},{default:p(()=>[i(s(o.site.name),1)]),_:2},1032,["to"])]),e("td",ce,[e("div",de,[a(f)?(l(),d("div",{key:0,class:"gray-button btn-sm w-max font-semibold",onClick:()=>{k(),r.value=o._jv.id}},[n(a(L),{class:"mr-2 h-4 w-4"}),e("span",null,s(t.$t("remove")),1)],8,re)):O("",!0)])])],2))),128))])])])])])])])):(l(),d("div",me,[e("div",pe,[e("div",_e,[n(a(V),{class:"h-5 w-5 text-yellow-400","aria-hidden":"true"})]),e("div",he,[i(s(t.$t("room.noRoom"))+". ",1),n(h,{to:"sites",class:"font-medium text-yellow-700 underline hover:text-yellow-600"},{default:p(()=>[i(s(t.$t("room.siteForRoom")),1)]),_:1})])])]))}}};export{ve as default};
