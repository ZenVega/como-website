import{b as s,ay as n,az as r,o as c,f as i,g as l,t as u}from"./index.fd494524.js";const m={name:"Logout",async setup(p){let o,t;const e=s();return[o,t]=n(()=>e.dispatch("authuser/logout")),await o,t(),r.remove("csrftoken"),window.location.href=window.location.origin+"/accounts/login/",(a,g)=>(c(),i("div",null,[l("h1",null,u(a.$t("logging-out")),1)]))}};export{m as default};