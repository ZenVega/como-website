import{s as u,c as m,a as n,_ as r,F as c}from"./TextInput.d0095b98.js";import{u as b,o as f,c as g,w as s,a as i,i as l,l as p,t as x}from"./index.d93d0c87.js";import{_ as w}from"./SubmitButton.17c1df84.js";const v={__name:"OrganizationForm",props:{orgName:{type:String,default:""},orgDescription:{type:String,default:""},allowEdit:{type:Boolean,default:!1},buttonText:{type:String,required:!0},onSubmit:{type:Function,required:!0}},setup(e){const{t:a}=b();u({mixed:{required:({label:t})=>a("field_required",{field:t})},string:{max:({label:t,max:o})=>a("field_too_big",{field:t,max:o})}});const d=m().shape({name:n().required().max(50).label(a("org.name")),description:n().nullable().optional().label(a("description"))});return(t,o)=>(f(),g(l(c),{class:"space-y-6",onSubmit:e.onSubmit,"validation-schema":l(d)},{default:s(()=>[i(r,{disabled:!e.allowEdit,value:e.orgName,name:"name",label:l(a)("org.name")},null,8,["disabled","value","label"]),i(r,{disabled:!e.allowEdit,element:"textarea",value:e.orgDescription,name:"description",label:`${l(a)("description")} (${l(a)("optional")})`},null,8,["disabled","value","label"]),i(w,{"allow-submit":e.allowEdit},{default:s(()=>[p(x(t.$t(e.buttonText)),1)]),_:1},8,["allow-submit"])]),_:1},8,["onSubmit","validation-schema"]))}};export{v as _};
