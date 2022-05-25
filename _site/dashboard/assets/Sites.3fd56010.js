import{b as j,d as c,r as v,e as D,i as o,o as l,c as g,f as d,a as n,w as m,g as e,t as s,j as B,h as y,F as N,k as V,n as I,l as h,p as L,G as M}from"./index.fd494524.js";import{_ as O}from"./DeletionModal.aa2ff3d5.js";import{r as z}from"./TrashIcon.e517044b.js";const F={key:1,class:"mt-4"},A={class:"text-sm text-gray-500"},E={class:"sm:flex sm:items-center"},G={class:"sm:flex-auto"},R={class:"text-xl font-semibold text-gray-900"},T={class:"mt-2 text-sm text-gray-700"},q={class:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none"},H={class:"mt-8 flex flex-col"},J={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},K={class:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"},P={class:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-md"},Q={class:"min-w-full divide-y divide-gray-300"},U={class:"bg-gray-50 text-sm font-medium text-gray-900"},W={scope:"col",class:"px-2 py-3 text-left sm:px-6"},X={scope:"col",class:"py-3 text-left sm:px-6"},Y={scope:"col",class:"py-3 text-left sm:px-6"},Z={class:"whitespace-nowrap px-2 py-4 sm:px-6"},ee={class:"whitespace-nowrap px-2 py-4 sm:px-6"},te={class:"whitespace-nowrap px-2 py-4 sm:px-6"},se={class:"flex flex-col sm:flex-row"},oe=e("div",{class:"flex flex-row"},null,-1),le=["onClick"],ae={key:2,class:"mt-4 flex max-w-sm items-center rounded-sm border-l-4 border-yellow-400 bg-yellow-50 p-4 shadow-md"},ne={class:"flex"},ie={class:"flex-shrink-0"},de={class:"ml-3"},pe={name:"Sites",setup(re){const i=j(),w=c(()=>i.getters["nav/isOrgContextLoading"]),u=c(()=>i.getters["nav/isOwner"]),f=c(()=>i.getters["nav/getSites"]),$=c(()=>{var t;return((t=f.value)==null?void 0:t.length)>0}),_=v(!1),r=v(),k=()=>_.value=!0,b=async()=>{console.log(`Deleting site with ID ${r.value}`),await i.dispatch("jv/delete",`sites/${r.value}`),i.commit("jv/deleteRecord",{_jv:{type:"Site",id:r.value}})},S=t=>`${t.street1}, ${t.zip} ${t.city}`;return(t,x)=>{const p=D("router-link");return o(w)?(l(),g(M,{key:0})):o($)?(l(),d("div",F,[n(O,{open:_.value,onCloseModal:x[0]||(x[0]=a=>_.value=!1),onDeleteClicked:b,"modal-title":"delete-site-modal.title"},{default:m(()=>[e("p",A,s(t.$t("delete-site-modal.message")),1)]),_:1},8,["open"]),e("div",E,[e("div",G,[e("h1",R,s(t.$t("site.title")),1),e("p",T,s(t.$t("site.description")),1)]),e("div",q,[o(u)?(l(),g(p,{key:0,class:"indigo-button",to:{name:"addSite"}},{default:m(()=>[n(o(B),{class:"mr-2 h-4 w-4"}),e("span",null,s(t.$t("site.add")),1)]),_:1})):y("",!0)])]),e("div",H,[e("div",J,[e("div",K,[e("div",P,[e("table",Q,[e("thead",U,[e("tr",null,[e("th",W,s(t.$t("site.name")),1),e("th",X,s(t.$t("address.singular")),1),e("th",Y,s(t.$t("action")),1)])]),e("tbody",null,[(l(!0),d(N,null,V(o(f),(a,C)=>(l(),d("tr",{key:a._jv.id,class:I([C%2===0?"bg-white":"bg-gray-50"])},[e("td",Z,[n(p,{class:"como-link",to:{name:"site",params:{siteId:a._jv.id}}},{default:m(()=>[h(s(a.name),1)]),_:2},1032,["to"])]),e("td",ee,s(S(a.address)),1),e("td",te,[e("div",se,[oe,o(u)?(l(),d("div",{key:0,class:"gray-button btn-sm w-max font-semibold",onClick:()=>{k(),r.value=a._jv.id}},[n(o(z),{class:"mr-2 h-4 w-4"}),e("span",null,s(t.$t("remove")),1)],8,le)):y("",!0)])])],2))),128))])])])])])])])):(l(),d("div",ae,[e("div",ne,[e("div",ie,[n(o(L),{class:"h-5 w-5 text-yellow-400","aria-hidden":"true"})]),e("div",de,[h(s(t.$t("org.noSite"))+". ",1),n(p,{to:{name:"addSite"},class:"font-medium text-yellow-700 underline hover:text-yellow-600"},{default:m(()=>[h(s(t.$t("org.addSite"))+". ",1)]),_:1})])])]))}}};export{pe as default};
