import{i,l as g,r as s,o as q,f as T,a as e,w as a,b as o,x as U,u as m,y as _,d as p}from"./entry.f092aa9e.js";import{n as B,X as D,d as N}from"./firebase.b6b558dd.js";const R=o("h2",{class:"text-h4 text-center"}," Todoの投稿 ",-1),k={class:"w-50 mx-auto"},C=["onSubmit"],E={class:"form-group"},S=o("label",{for:"todoname"},"タスクの名前",-1),X={class:"form-group"},H=o("label",{for:"todocontent"},"内容　　　　",-1),I={class:"form-group"},M=o("label",{for:"todoperiod"},"期限　　　　",-1),j={class:"form-group"},z=o("label",{for:"todopriority"},"優先度",-1),A={class:"btn btn-primary text-center m-auto"},K={__name:"new",setup(F){const n=i(""),d=i(""),r=i(""),u=i(""),b=g(),V=async()=>{console.log(n.value);try{const c=await B(D(N,"todos"),{name:d.value,content:n.value,done:!1,period:r.value,priority:u.value,date:new Date,id:2});console.log("Document written with ID: ",c.id),alert("投稿しました"),b.push("/")}catch(c){console.error("Error adding document: ",c)}};return(c,t)=>{const f=s("v-breadcrumbs-item"),x=s("v-breadcrumbs"),v=s("v-text-field"),h=s("v-textarea"),y=s("v-select"),w=s("v-btn");return q(),T("div",null,[R,e(x,{class:"my-4"},{default:a(()=>[e(f,{to:{path:"/"}},{default:a(()=>[p(" Home ")]),_:1}),e(f,null,{default:a(()=>[p("＞")]),_:1}),e(f,null,{default:a(()=>[p("Todoの投稿")]),_:1})]),_:1}),o("div",k,[o("form",{onSubmit:U(V,["prevent"])},[o("div",E,[S,e(v,{id:"todoname",modelValue:m(d),"onUpdate:modelValue":t[0]||(t[0]=l=>_(d)?d.value=l:null),class:"form-control ml-4 mb-4",required:""},null,8,["modelValue"])]),o("div",X,[H,e(h,{id:"todocontent",modelValue:m(n),"onUpdate:modelValue":t[1]||(t[1]=l=>_(n)?n.value=l:null),class:"form-controll ml-4 mb-4",rows:"3",required:""},null,8,["modelValue"])]),o("div",I,[M,e(v,{id:"todoperiod",modelValue:m(r),"onUpdate:modelValue":t[2]||(t[2]=l=>_(r)?r.value=l:null),type:"date",class:"form-controll ml-4 mb-4",required:""},null,8,["modelValue"])]),o("div",j,[z,e(y,{id:"todopriority",modelValue:m(u),"onUpdate:modelValue":t[3]||(t[3]=l=>_(u)?u.value=l:null),class:"form-control ml-4 mb-4",items:["☆☆☆☆☆","☆☆☆","☆"],required:""},null,8,["modelValue"])]),o("div",A,[e(w,{type:"submit",class:"text-center m-auto",variant:"outlined"},{default:a(()=>[p(" 投稿する ")]),_:1})])],40,C)])])}}};export{K as default};