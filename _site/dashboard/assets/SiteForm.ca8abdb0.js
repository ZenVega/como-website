import{s as o,c as b,a as d,_ as s,F as m}from"./TextInput.94d977bf.js";import{u as c,o as f,c as y,w as n,a as i,i as l,l as S,t as v}from"./index.41107586.js";import{_ as g}from"./SubmitButton.78fbcc12.js";const p={props:{siteName:{type:String,default:""},siteDescription:{type:String,default:""},addressStreet1:{type:String,default:""},addressStreet2:{type:String,default:""},addressZip:{type:String,default:""},addressCity:{type:String,default:""},allowEdit:{type:Boolean,default:!1},buttonText:{type:String,required:!0},onSubmit:{type:Function,required:!0}},setup(a){const{t:e}=c();o({mixed:{required:({label:t})=>e("field_required",{field:t})},string:{max:({label:t,max:r})=>e("field_too_big",{field:t,max:r}),length:({label:t,length:r})=>e("field_length_mismatch",{field:t,length:r})}});const u=b().shape({name:d().required().max(50).label(e("site.name")),description:d().nullable().optional().label(e("description")),street1:d().required().max(50).label(e("address.street1")),street2:d().nullable().optional().max(50).label(e("address.street2")),zip:d().required().length(5).label(e("address.zip")),city:d().required().max(50).label(e("address.city"))});return(t,r)=>(f(),y(l(m),{class:"space-y-6",onSubmit:a.onSubmit,"validation-schema":l(u)},{default:n(()=>[i(s,{disabled:!a.allowEdit,value:a.siteName,name:"name",label:l(e)("site.name")},null,8,["disabled","value","label"]),i(s,{disabled:!a.allowEdit,element:"textarea",value:a.siteDescription,name:"description",label:`${l(e)("description")} (${l(e)("optional")})`},null,8,["disabled","value","label"]),i(s,{disabled:!a.allowEdit,value:a.addressStreet1,name:"street1",label:l(e)("address.street1")},null,8,["disabled","value","label"]),i(s,{disabled:!a.allowEdit,value:a.addressStreet2,name:"street2",label:`${l(e)("address.street2")} (${l(e)("optional")})`},null,8,["disabled","value","label"]),i(s,{disabled:!a.allowEdit,value:a.addressZip,name:"zip",label:l(e)("address.zip")},null,8,["disabled","value","label"]),i(s,{disabled:!a.allowEdit,value:a.addressCity,name:"city",label:l(e)("address.city")},null,8,["disabled","value","label"]),i(g,{"allow-submit":a.allowEdit},{default:n(()=>[S(v(t.$t(a.buttonText)),1)]),_:1},8,["allow-submit"])]),_:1},8,["onSubmit","validation-schema"]))}};export{p as _};
