import{d as p,f as u,r as h,g as x,aj as f,T as _,a as y,b as i,w as l,s as c,F as g,o as v,m as d,j as w,_ as T}from"./index.557c98b1.js";import{u as b,T as k,R as C}from"./echarts.5a5fe290.js";import"./install.1a772905.js";const E=d("h1",{class:"text-h5 my-5"},"Control Panel",-1),I=p({__name:"EchartLine",setup(L){const a=[["2000-06-05",116],["2000-06-06",129],["2000-06-07",135],["2000-06-08",86],["2000-06-09",73],["2000-06-10",85],["2000-06-11",73],["2000-06-12",68],["2000-06-13",92],["2000-06-14",130],["2000-06-15",245],["2000-06-16",139],["2000-06-17",115],["2000-06-18",111],["2000-06-19",309],["2000-06-20",206],["2000-06-21",137],["2000-06-22",128],["2000-06-23",85],["2000-06-24",94],["2000-06-25",71],["2000-06-26",106],["2000-06-27",84],["2000-06-28",93],["2000-06-29",85],["2000-06-30",73],["2000-07-01",83],["2000-07-02",125],["2000-07-03",107],["2000-07-04",82],["2000-07-05",44],["2000-07-06",72],["2000-07-07",106],["2000-07-08",107],["2000-07-09",66],["2000-07-10",91],["2000-07-11",92],["2000-07-12",113],["2000-07-13",107],["2000-07-14",131],["2000-07-15",111],["2000-07-16",64],["2000-07-17",69],["2000-07-18",88],["2000-07-19",77],["2000-07-20",83],["2000-07-21",111],["2000-07-22",57],["2000-07-23",55],["2000-07-24",60]],t=a.map(function(e){return e[0]}),s=a.map(function(e){return e[1]}),n=u(()=>({visualMap:[{show:!1,type:"continuous",seriesIndex:0,min:0,max:400},{show:!1,type:"continuous",seriesIndex:1,dimension:0,min:0,max:t.length-1}],title:[{left:"center",text:"Gradient along the y axis"},{top:"55%",left:"center",text:"Gradient along the x axis"}],tooltip:{trigger:"axis"},xAxis:[{data:t},{data:t,gridIndex:1}],yAxis:[{},{gridIndex:1}],grid:[{bottom:"60%"},{top:"60%"}],series:[{type:"line",showSymbol:!1,data:s},{type:"line",showSymbol:!1,data:s,xAxisIndex:1,yAxisIndex:1}]})),r=h(null),{setOption:o,showLoading:m}=b(r,!0,!0,C.SVGRenderer,k.Dark);return x(()=>{f(()=>{m(),o(n.value)})}),_(()=>n.value,e=>{o(e)},{deep:!0}),(e,A)=>(v(),y(g,null,[i(c,{class:"ma-5 pa-5"},{default:l(()=>[d("div",{ref_key:"chartEl",ref:r,style:{width:"100%",height:"800px"}},null,512)]),_:1}),i(c,{class:"ma-5 pa-5 control panel","min-height":"500"},{default:l(()=>[E,w(` <v-btn class="mr-5" color="primary" @click="textTitle = 'new Title'"\r
      >Change Title</v-btn\r
    >\r
    <v-btn class="mr-5" color="primary" @click="add">Add Data</v-btn> `)]),_:1})],64))}}),D=T(I,[["__file","D:/Project/tank-game-server-ts/admin-vue3-ts/src/views/chart/EchartLine.vue"]]);export{D as default};
