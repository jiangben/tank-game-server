import{d as x,aq as m,ar as f,as as w,i as _,w as l,s as V,o as S,b as s,e as c,t as n,q as k,m as d,k as i,at as b,n as v,p as F,au as g,av as C,aw as h,ax as j,_ as B}from"./index.557c98b1.js";import{V as E}from"./VFileInput.7b48b2d5.js";const H="/assets/excel.6aac1365.jpg",$=d("img",{class:"white--text align-end",src:H},null,-1),D=x({__name:"ExcelHotSwap",setup(N){const r=m();f();const o=w({excelFiles:null}),p=async()=>{if(o.excelFiles===null)return;const a=new FormData;for(const u of o.excelFiles)a.append("files",u);const e=await C.post(h+"/api/excel/hotswap",a,j()),t=e.data.code;if(t!=1){r.showErrorSnackbar(e.data.message,t);return}r.showSuccessSnackbar(e.data.message)};return(a,e)=>(S(),_(V,{class:"mx-auto","max-width":"700"},{default:l(()=>[$,s(k,null,{default:l(()=>[c(n(a.$t("excelHotswap")),1)]),_:1}),s(b,null,{default:l(()=>[d("div",null,n(a.$t("excelUploadText")),1),s(E,{modelValue:i(o).excelFiles,"onUpdate:modelValue":e[0]||(e[0]=t=>i(o).excelFiles=t),multiple:"","show-size":"","prepend-icon":"mdi-file-excel-outline",accept:".xls,.xlsx,.json",label:a.$t("excelUploadNotice")},null,8,["modelValue","label"])]),_:1}),s(g,null,{default:l(()=>[s(v),s(F,{color:"primary",variant:"flat",onClick:e[1]||(e[1]=t=>p())},{default:l(()=>[c(n(a.$t("upload")),1)]),_:1})]),_:1})]),_:1}))}}),R=B(D,[["__file","D:/Project/tank-game-server-ts/admin-vue3-ts/src/views/tank/ExcelHotSwap.vue"]]);export{R as default};
