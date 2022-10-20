import{u as g,o as n,f as d,g as s,t as a,c as u,as as f,h as x,n as l,i as m}from"./index.897f6ff6.js";const p={class:"mt-2 text-lg font-bold leading-5 text-[#1E398F]"},v={key:0,class:"text-sm leading-3 text-[#1E398F]"},w={key:1,class:"text-sm leading-3 text-[#1E398F]"},B={class:"mt-4 self-end text-[#1E398F]"},F={class:"text-2xl font-bold"},b=s("span",{class:"text-sm"}," ppm",-1),y={key:3,class:"mt-4 h-1/2 font-medium text-[#3B3B3A]"},_=["innerHTML"],$={key:4,class:"mt-4 h-1/2 font-medium text-[#3B3B3A]"},k={class:"font-bold text-[#E40032]"},z={__name:"CurrentMeasurement",props:{ppm:{type:String||void 0,default:void 0},timestamp:{type:Date,default:void 0},whiteBg:{type:Boolean,default:!1}},setup(e){const{t:i}=g(),o=t=>t<=1e3?i("widget.text.low_p1")+t+i("widget.text.low_p2"):t<=1600?i("widget.text.medium_p1")+t+i("widget.text.medium_p2"):i("widget.text.high_p1")+t+i("widget.text.high_p2"),r=t=>{const c=t.getHours().toString(),h=t.getMinutes()<10?"0"+t.getMinutes().toString():t.getMinutes();return`von ${c}:${h}h`};return(t,c)=>(n(),d("div",{class:l(["flex h-[340px] max-w-[327px] flex-col items-center justify-end gap-2 rounded-lg px-7 pt-7 pb-4 shadow-md",!e.ppm||!e.timestamp?"bg-[#F6F6F6]":e.whiteBg?"bg-white":"bg-[#F1F9FE]"])},[s("div",p,a(t.$t("widget.title")),1),e.timestamp&&e.ppm?(n(),d("div",v,a(r(e.timestamp)),1)):(n(),d("div",w,"von --:--h")),s("div",B,[s("span",F,a(e.ppm||"---"),1),b]),e.timestamp&&e.ppm?(n(),u(f,{key:2,ppm:e.ppm},null,8,["ppm"])):x("",!0),e.timestamp&&e.ppm?(n(),d("div",y,[s("span",{innerHTML:o(e.ppm)},null,8,_)])):(n(),d("div",$,[s("span",k,a(t.$t("widget.error.title")),1),s("span",null,a(t.$t("widget.error.text")),1)]))],2))}};var E="/dashboard/assets/fresh-air-medal.8f1f467e.svg",M="/dashboard/assets/fresh-air-medal-inactive.d240d1fc.svg";const S=["src"],A={class:"mx-0 text-lg font-bold text-[#878786]"},T={class:"h-1/2 font-medium text-[#B1B2B3]"},j=["src"],C={class:"mx-0 text-lg font-bold text-[#1E398F]"},H={class:"h-1/2 font-medium text-[#3B3B3A]"},D={__name:"FreshAirMedal",props:{inactive:{type:Boolean,default:!1},whiteBg:{type:Boolean,default:!1}},setup(e){return(i,o)=>e.inactive?(n(),d("div",{key:0,class:l(["flex max-w-[327px] flex-col items-center justify-end gap-2 rounded-lg px-6 pt-7 pb-4 shadow-md",[e.whiteBg?"bg-white":"bg-[#F1F9FE]"]])},[s("img",{class:"mb-4 h-12 w-12",src:m(M),alt:"Frischluft Medaille"},null,8,S),s("div",A,a(i.$t("fresh-air-medal.inactive.header")),1),s("div",T,a(i.$t("fresh-air-medal.inactive.text")),1)],2)):(n(),d("div",{key:1,class:l(["flex max-w-[327px] flex-col items-center justify-end gap-2 rounded-lg px-6 pt-7 pb-4 shadow-md",[e.whiteBg?"bg-white":"bg-[#F1F9FE]"]])},[s("img",{class:"mb-4 h-12 w-12",src:m(E),alt:"Frischluft Medaille"},null,8,j),s("div",C,a(i.$t("fresh-air-medal.active.header")),1),s("div",H,a(i.$t("fresh-air-medal.active.text")),1)],2))}};export{z as _,D as a};
