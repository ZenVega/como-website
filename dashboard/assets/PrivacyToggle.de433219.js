var A=Object.defineProperty,I=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var _=(e,a,t)=>a in e?A(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,r=(e,a)=>{for(var t in a||(a={}))O.call(a,t)&&_(e,t,a[t]);if(m)for(var t of m(a))V.call(a,t)&&_(e,t,a[t]);return e},B=(e,a)=>I(e,J(a));var x=(e,a)=>{var t={};for(var l in e)O.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(e!=null&&m)for(var l of m(e))a.indexOf(l)<0&&V.call(e,l)&&(t[l]=e[l]);return t};import{Q as z,d as D,r as v,J as S,a1 as T,D as N,a2 as Q,i as M,a3 as C,P as E,a4 as X,a5 as Y,O as L,a6 as q,a7 as H,F as W,a8 as $,a9 as Z,o as ee,c as te,w as ae,g as i,n as h}from"./index.41107586.js";let K=Symbol("LabelContext");function F(){let e=E(K,null);if(e===null){let a=new Error("You used a <Label /> component, but it is not inside a parent.");throw Error.captureStackTrace&&Error.captureStackTrace(a,F),a}return e}function le({slot:e={},name:a="Label",props:t={}}={}){let l=v([]);function s(n){return l.value.push(n),()=>{let u=l.value.indexOf(n);u!==-1&&l.value.splice(u,1)}}return z(K,{register:s,slot:e,name:a,props:t}),D(()=>l.value.length>0?l.value.join(" "):void 0)}let pe=S({name:"Label",props:{as:{type:[Object,String],default:"label"},passive:{type:[Boolean],default:!1}},setup(e,{slots:a,attrs:t}){let l=F(),s=`headlessui-label-${T()}`;return N(()=>Q(l.register(s))),()=>{let{name:n="Label",slot:u={},props:p={}}=l,f=e,{passive:y}=f,c=x(f,["passive"]),g=B(r({},Object.entries(p).reduce((w,[o,k])=>Object.assign(w,{[o]:M(k)}),{})),{id:s}),d=r(r({},c),g);return y&&delete d.onClick,C({props:d,slot:u,attrs:t,slots:a,name:n})}}}),G=Symbol("GroupContext");S({name:"SwitchGroup",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:a,attrs:t}){let l=v(null),s=le({name:"SwitchLabel",props:{onClick(){!l.value||(l.value.click(),l.value.focus({preventScroll:!0}))}}}),n=X({name:"SwitchDescription"});return z(G,{switchRef:l,labelledby:s,describedby:n}),()=>C({props:e,slot:{},slots:a,attrs:t,name:"SwitchGroup"})}});let ne=S({name:"Switch",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:!1},name:{type:String,optional:!0},value:{type:String,optional:!0}},inheritAttrs:!1,setup(e,{emit:a,attrs:t,slots:l,expose:s}){let n=E(G,null),u=`headlessui-switch-${T()}`;function p(){a("update:modelValue",!e.modelValue)}let y=v(null),c=n===null?y:n.switchRef,g=Y(D(()=>({as:e.as,type:t.type})),c);s({el:c,$el:c});function d(o){o.preventDefault(),p()}function f(o){o.key===$.Space?(o.preventDefault(),p()):o.key===$.Enter&&Z(o.currentTarget)}function w(o){o.preventDefault()}return()=>{let j=e,{name:o,value:k,modelValue:b}=j,R=x(j,["name","value","modelValue"]),P={checked:b},U={id:u,ref:c,role:"switch",type:g.value,tabIndex:0,"aria-checked":b,"aria-labelledby":n==null?void 0:n.labelledby.value,"aria-describedby":n==null?void 0:n.describedby.value,onClick:d,onKeyup:f,onKeypress:w};return L(W,[o!=null&&b!=null?L(q,H({as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:b,name:o,value:k})):null,C({props:r(r(r({},t),R),U),slot:P,attrs:t,slots:l,name:"Switch"})])}}});const oe=i("svg",{class:"h-3 w-3 text-gray-400",fill:"none",viewBox:"0 0 12 12"},[i("path",{d:"M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),se=[oe],re=i("svg",{class:"h-3 w-3 text-indigo-600",fill:"currentColor",viewBox:"0 0 12 12"},[i("path",{d:"M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"})],-1),ie=[re],de={props:{enabled:{type:Boolean,default:!1},onToggle:{type:Function,default:()=>{}}},setup(e){const t=v(e.enabled);return(l,s)=>(ee(),te(M(ne),{onClick:e.onToggle,modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=n=>t.value=n),class:h([t.value?"bg-indigo-600":"bg-gray-200","relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"])},{default:ae(()=>[i("span",{class:h([t.value?"translate-x-5":"translate-x-0","pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"])},[i("span",{class:h([t.value?"opacity-0 duration-100 ease-out":"opacity-100 duration-200 ease-in","absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"]),"aria-hidden":"true"},se,2),i("span",{class:h([t.value?"opacity-100 duration-200 ease-in":"opacity-0 duration-100 ease-out","absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"]),"aria-hidden":"true"},ie,2)],2)]),_:1},8,["onClick","modelValue","class"]))}};export{de as _};
