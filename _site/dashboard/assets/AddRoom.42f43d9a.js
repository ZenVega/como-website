import{b as f,B as w,a0 as v,A as x,u as R,d as n,o as y,f as b,g as B,a as I,i as h}from"./index.d93d0c87.js";import{_ as j}from"./RoomForm.6db4f625.js";import"./TextInput.d0095b98.js";import"./SubmitButton.17c1df84.js";const k={class:"mt-8 max-w-sm sm:max-w-lg"},A={class:"rounded-sm bg-white p-6 shadow-md"},q={__name:"AddRoom",setup(E){const t=f(),c=w(),m=v(),d=x(),{t:u}=R(),o=n(()=>m.params.siteId),i=n(()=>t.getters["nav/isOwner"]),p=async({name:a,description:r,size:e,height:s,capacity:l})=>{const _={_jv:{type:"Room",relationships:{site:{data:{type:"Site",id:o.value}}}},name:a,description:r,size_sqm:(e==null?void 0:e.replace(",","."))||void 0,height_m:(s==null?void 0:s.replace(",","."))||void 0,max_occupancy:l||void 0};try{await t.dispatch("jv/post",[_,{url:"rooms/"}]),d.push({name:"site",params:{siteId:o.value}})}catch{c.error(u("room.createError"))}};return(a,r)=>(y(),b("div",k,[B("div",A,[I(j,{"allow-edit":h(i),"button-text":"room.add","on-submit":p},null,8,["allow-edit"])])]))}};export{q as default};
