import{b as v,B as y,A as g,u as f,d as i,o as j,f as A,g as x,a as I,i as O}from"./index.a746839e.js";import{_ as S}from"./SiteForm.93bb5d8e.js";import"./TextInput.622e0131.js";import"./SubmitButton.9410ab06.js";const b={class:"mt-8 max-w-sm sm:max-w-lg"},B={class:"rounded-sm bg-white p-6 shadow-md"},R={__name:"AddSite",setup(E){const d=v(),n=y(),u=g(),{t:c}=f(),p=i(()=>d.state.nav.currentOrgId),l=i(()=>d.getters["nav/isOwner"]),m=async({name:t,description:e,street1:r,street2:a,zip:s,city:o})=>{const h=await w({street1:r,street2:a,zip:s,city:o});_({name:t,description:e,addressId:h})},_=async({name:t,description:e,addressId:r})=>{let a={_jv:{type:"Site",relationships:{operator:{data:{type:"Organization",id:p.value}},address:{data:{type:"Address",id:r}}}},name:t,description:e};try{const{_jv:s}=await d.dispatch("jv/post",[a,{url:"sites/"}]);u.push({name:"sites",params:{siteId:s.id}})}catch{n.error(c("site.createError"))}},w=async({street1:t,street2:e,zip:r,city:a})=>{let s={_jv:{type:"Address"},street1:t,street2:e,zip:r,city:a};try{const{_jv:o}=await d.dispatch("jv/post",[s,{url:"/addresses/"}]);return o.id}catch(o){n.error(c("address.createError")),console.log(o)}};return(t,e)=>(j(),A("div",b,[x("div",B,[I(S,{"allow-edit":O(l),"button-text":"site.add","on-submit":m},null,8,["allow-edit"])])]))}};export{R as default};
