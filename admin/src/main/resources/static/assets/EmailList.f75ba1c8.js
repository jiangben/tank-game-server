import{ap as C,d as B,aQ as E,r as L,f as I,h as S,i as v,w as i,s as j,o as d,b as t,e as x,bO as D,j as r,k as h,a4 as A,a5 as H,a6 as N,a as b,a0 as g,m as c,a7 as T,a2 as F,a8 as R,p as w,t as f,F as y,a3 as z,_ as U}from"./index.557c98b1.js";const W=[{id:1,read:!1,starred:!0,time:"15 min",subject:"Brunch this weekend?",title:"Ali Connors",content:"I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",labels:["work"]},{id:2,read:!1,starred:!1,time:"2 hr",subject:"Summer BBQ",title:"me, Scrott, Jennifer",content:"Wish I could come, but I'm out of town this weekend.",labels:[]},{id:3,read:!1,starred:!1,time:"6 hr",subject:"Oui oui",title:"Sandra Adams",content:"Do you have Paris recommendations? Have you ever been?",labels:["work","invoice"]},{id:4,read:!0,starred:!1,time:"12 hr",subject:"Birthday gift",title:"Trevor Hansen",content:"Have any ideas about what we should get Heidi for her birthday?",labels:[]},{id:5,read:!0,starred:!0,time:"18hr",subject:"Recipe to try",title:"Britta Holt",content:"We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",labels:["invoice"]}],$=[{id:1,read:!1,starred:!0,time:"15 min",subject:"Brunch this weekend?",title:"Ali Connors",content:"I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",labels:["work"]}],q=C({id:"email",state:()=>({inbox:W,starred:$,currentLabel:"work",labels:[{id:"work",title:"Work",color:"primary"},{id:"relaxation",title:"Relaxation",color:"green"},{id:"shopping",title:"Shopping",color:"teal"}]}),getters:{getInboxList(){return this.inbox},getStarredList(){return this.starred}},actions:{addNewEmail(a){const s={id:"_"+Math.random().toString(36).substring(2,11),...a};this.inbox.push(s)},updateEmail(a){const s=this.inbox.findIndex(n=>n.id===a.id);this.inbox.splice(s,1,a)},deleteEmailById(a){const s=this.inbox.findIndex(n=>n.id===a);this.inbox.splice(s,1)}}}),G=["onClick"],O={class:"flex-1 mx-5"},P={class:"font-weight-bold"},Q=B({__name:"EmailList",props:{emails:{type:Array,required:!0}},setup(a){const s=a,n=E(),_=q(),u=L(""),k=m=>{const l=_.labels.find(p=>p.id===m);return l?l.color:""},V=I(()=>s.emails.filter(m=>m.title.toLowerCase().includes(u.value.toLowerCase())));return(m,l)=>{const p=S("perfect-scrollbar");return d(),v(j,{height:"100%"},{default:i(()=>[t(D,{color:"#C51162",theme:"dark",icon:"mdi-material-design",border:""},{default:i(()=>[x(" \u6B63\u5728\u65BD\u5DE5\u4E2D... ")]),_:1}),r(" ---------------------------------------------- "),r(" Filter Input "),r(" ---------------------------------------------- "),t(H,{clearable:"",variant:"solo",class:"elevation-1 ma-3","hide-details":"","prepend-inner-icon":"mdi-magnify",placeholder:"Search Email",modelValue:h(u),"onUpdate:modelValue":l[0]||(l[0]=e=>A(u)?u.value=e:null)},null,8,["modelValue"]),r(" ---------------------------------------------- "),r(" List "),r(" ---------------------------------------------- "),t(p,{class:"email-list"},{default:i(()=>[t(N,{name:"fade"},{default:i(()=>[(d(!0),b(y,null,g(h(V),e=>(d(),b("div",{key:e.id},[c("div",{class:"email-item d-flex align-center pa-5",onClick:o=>h(n).push(`/apps/email/inbox/${e.id}`)},[t(T,{modelValue:e.read,"onUpdate:modelValue":o=>e.read=o,color:"primary",class:"pe-2"},null,8,["modelValue","onUpdate:modelValue"]),t(F,{size:"40"},{default:i(()=>[t(R,{src:"https://avatars.githubusercontent.com/u/35951244?v=4",alt:"alt"})]),_:1}),t(w,{class:"ml-2",icon:e.starred?"mdi-star":"mdi-star-outline",color:e.starred?"yellow":"grey",variant:"text"},null,8,["icon","color"]),c("div",O,[c("div",P,f(e.title),1),c("div",null,f(e.content),1),c("div",null,[(d(!0),b(y,null,g(e.labels,o=>(d(),v(z,{size:"x-small",variant:"outlined",class:"mr-1 mt-1",color:k(o)},{default:i(()=>[x(f(o),1)]),_:2},1032,["color"]))),256))])]),t(w,{size:"small",icon:"mdi-delete-outline",variant:"text",onClick:o=>h(_).deleteEmailById(e.id)},null,8,["onClick"])],8,G)]))),128))]),_:1})]),_:1})]),_:1})}}});const K=U(Q,[["__scopeId","data-v-0d93a071"],["__file","D:/Project/tank-game-server-ts/admin-vue3-ts/src/views/app/email/components/EmailList.vue"]]);export{K as E,q as u};
