import{_ as T}from"./nuxt-link.5e7d2fcb.js";import{_ as B}from"./Calendar.162cd510.js";import{k as N,l as S,e as V,r as m,o as j,f as F,a as o,w as s,u as t,F as $,d,b as a,t as r,n as z,m as A}from"./entry.f092aa9e.js";import{e as u,d as f,j as D,t as E,b as H}from"./firebase.b6b558dd.js";const P={variant:"outlined",class:"col-md-4 my-4 mb-8 px-4"},q={class:"text-h6 my-4 p-2"},G=a("p",{class:"my-2"}," 仕事内容 ",-1),I={class:"my-2"},J={class:"my-2"},K={class:"text-lime-darken-1 font-weight-bold"},L={class:"m-2"},Y={__name:"[id]",async setup(M){let i,b;const _=N(),v=S(),x=u(f,"todos",_.params.id),e=([i,b]=V(()=>D(x)),i=await i,b(),i).data();async function y(n){const l=!n.done,c=u(f,"todos",_.params.id);await E(c,{done:l}),alert(l===!0?"タスクが完了しました":"タスクを未完了にしました"),location.reload()}async function k(){try{const n=u(f,"todos",_.params.id);await H(n),alert("Todoを削除しました"),v.push("/")}catch(n){alert("エラーが起きました"),console.log(n)}}return(n,l)=>{const c=m("v-breadcrumbs-item"),g=m("v-breadcrumbs"),p=m("v-btn"),h=T,w=m("v-hover"),C=B;return j(),F($,null,[o(g,{class:"my-4"},{default:s(()=>[o(c,{to:{path:"/"}},{default:s(()=>[d(" Home ")]),_:1}),o(c,null,{default:s(()=>[d("＞")]),_:1}),o(c,null,{default:s(()=>[d("Todoの詳細")]),_:1})]),_:1}),o(w,null,{default:s(()=>[a("div",P,[a("p",q,r(t(e).name),1),G,a("p",I,r(t(e).content),1),a("p",J," 期限："+r(t(e).period),1),a("p",{class:z({"text-red-lighten-1":t(e).done===!0,"text-blue-lighten-1":t(e).done===!1})},r(t(e).done?"完了":"未完了"),3),a("p",A({width:"400"},n.props,{class:{"text-blue-lighten-1":t(e).priority==="高","text-blue-lighten-1":t(e).priority==="低"}}),[d(" 優先度："),a("span",K,r(t(e).priority),1)],16),o(p,{variant:"outlined",class:"my-2",onClick:l[0]||(l[0]=R=>y(t(e)))},{default:s(()=>[d(r(t(e).done?"未完了に戻す":"完了にする"),1)]),_:1}),a("div",L,[o(h,{to:"/todos/edit/"+t(_).params.id,class:"text-decoration-none text-black"},{default:s(()=>[o(p,{variant:"outlined",class:"my-2"},{default:s(()=>[d(" 編集する ")]),_:1})]),_:1},8,["to"]),o(h,{class:"text-decoration-none text-black"},{default:s(()=>[o(p,{variant:"outlined",class:"mx-2",onClick:l[1]||(l[1]=R=>k(t(e)))},{default:s(()=>[d(" 削除する ")]),_:1})]),_:1})])])]),_:1}),o(C,{period:t(e).period,name:t(e).name},null,8,["period","name"])],64)}}};export{Y as default};