import{b as s,ax as n,ay as r,o as c,f as i,g as l,t as u}from"./index.41107586.js";const d={async setup(p){let t,o;const e=s();return[t,o]=n(()=>e.dispatch("authuser/logout")),await t,o(),r.remove("csrftoken"),window.location.href=window.location.origin+"/accounts/login/",(a,_)=>(c(),i("div",null,[l("h1",null,u(a.$t("logging-out")),1)]))}};export{d as default};