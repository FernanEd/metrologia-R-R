(this["webpackJsonpmetrologia-rr"]=this["webpackJsonpmetrologia-rr"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a.n(r),n=a(8),i=a.n(n),s=(a(13),a(2)),o=a(7),d=a(3);function l(e){return e.reduce((function(e,t){return e+t}),0)/e.length}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return Math.round(e*Math.pow(10,t))/Math.pow(10,t)}var j=a(0);function b(){var e=Object(r.useState)([[[0]]]),t=Object(d.a)(e,2),a=t[0],c=t[1],n=Object(r.useState)(1),i=Object(d.a)(n,2),b=i[0],h=i[1],m=Object(r.useState)(1),p=Object(d.a)(m,2),O=p[0],v=p[1],x=Object(r.useState)(1),f=Object(d.a)(x,2),N=f[0],R=f[1],g=Object(r.useState)(15),M=Object(d.a)(g,2),y=M[0],w=(M[1],Object(r.useState)(2.21)),q=Object(d.a)(w,2),A=q[0],S=(q[1],Object(r.useState)(2.7)),k=Object(d.a)(S,2),C=k[0],E=(k[1],Object(r.useState)({RR:0,repetitibilidad:0,reproducibilidad:0})),K=Object(d.a)(E,2),J=K[0],L=K[1];return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"app-resultados",children:[Object(j.jsxs)("div",{className:"resultados-wrapper",children:[Object(j.jsxs)("div",{className:"resultado",children:[Object(j.jsx)("div",{className:"resultado-label",children:"RR"}),Object(j.jsx)("div",{className:"resultado-content",children:void 0!=J.RR&&"".concat(u(100*J.RR,2),"%")})]}),Object(j.jsxs)("div",{className:"resultado",children:[Object(j.jsx)("div",{className:"resultado-label",children:"Repetitibilidad"}),Object(j.jsx)("div",{className:"resultado-content",children:void 0!=J.RR&&"".concat(u(100*J.repetitibilidad,2),"%")})]}),Object(j.jsxs)("div",{className:"resultado",children:[Object(j.jsx)("div",{className:"resultado-label",children:"Reproducibilidad"}),Object(j.jsx)("div",{className:"resultado-content",children:void 0!=J.RR&&"".concat(u(100*J.reproducibilidad,2),"%")})]})]}),Object(j.jsxs)("div",{className:"rr-rating",children:[Object(j.jsx)("div",{className:"rr-rating-title",children:"Good enough."}),Object(j.jsx)("div",{className:"rr-rating-desc",children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime fugit ratione modi, amet possimus atque. Dolorum commodi similique maiores quas unde dolores, quasi itaque et recusandae architecto totam voluptatem odit?"})]})]}),Object(j.jsxs)("div",{className:"app-controls",children:[Object(j.jsx)("button",{className:"btn btn-warning",onClick:function(){h(b+1);var e,t=a,r=[],n=Object(o.a)(Array(O));try{for(n.s();!(e=n.n()).done;){e.value;var i,s=[],d=Object(o.a)(Array(N));try{for(d.s();!(i=d.n()).done;){i.value;s.push(0)}}catch(l){d.e(l)}finally{d.f()}r.push(s)}}catch(l){n.e(l)}finally{n.f()}t.push(r),c(t)},children:"A\xf1adir operador"}),Object(j.jsx)("button",{className:"btn btn-warning",onClick:function(){v(O+1);var e=a;e.forEach((function(e){return e.push([0])})),c(e)},children:"A\xf1adir equipo"}),Object(j.jsx)("button",{className:"btn btn-warning",onClick:function(e){R(N+1);var t=a;t.forEach((function(e){return e.forEach((function(e){return e.push(0)}))})),c(t)},children:"A\xf1adir ensayo"}),Object(j.jsx)("button",{className:"btn btn-success",onClick:function(){var e=a.map((function(e){return function(e){var t=Object(s.a)(e);return{objLiteral:function(){return t},obtenerPromedios:function(){return t.map((function(e){return l(e)}))},obtenerRangos:function(){return t.map((function(e){return u(Math.max.apply(Math,Object(s.a)(e))-Math.min.apply(Math,Object(s.a)(e)))}))}}}(e)})),t=function(e){var t=e.T,a=e.N,r=e.R,c=e.K1,n=e.K2,i=e.operadores,o=l(i.map((function(e){return l(e.obtenerRangos())}))),d=i.map((function(e){return l(e.obtenerPromedios())})),j=u(Math.max.apply(Math,Object(s.a)(d))-Math.min.apply(Math,Object(s.a)(d)),2),b=u(c*o/t),h=Math.pow(n*j,2)-Math.pow(c*o,2)/(a*r),m=h>0?Math.sqrt(h)/t:0;return{RR:Math.sqrt(Math.pow(b,2)+Math.pow(m,2)),repetitibilidad:b,reproducibilidad:m,x:d}}({T:y,N:N,R:b,K1:A,K2:C,operadores:e});L(t)},children:"Calcular R&R"})]}),Object(j.jsx)("div",{className:"app-content",children:Object(j.jsx)("table",{className:"main-table",children:Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"equipo-td"}),Object(s.a)(Array(O)).map((function(e,t){return Object(j.jsx)("td",{className:"equipo-td",children:Object(j.jsxs)("div",{children:["Equipo ",t+1]})},t)}))]}),Object(s.a)(Array(b)).map((function(e,t){return Object(j.jsxs)("tr",{className:"operador-tr",children:[Object(j.jsx)("td",{className:"operador-td",children:Object(j.jsxs)("div",{children:["Operador ",t+1]})}),Object(s.a)(Array(O)).map((function(e,r){return Object(j.jsx)("td",{className:"medidas-td",children:Object(j.jsx)("div",{className:"medidas-container",children:Object(s.a)(Array(N)).map((function(e,n){return Object(j.jsx)("td",{children:Object(j.jsx)("input",{onChange:function(e){return function(e,t,r,n){var i=a;i[t][r][n]=Number(e),c(i),console.log(a)}(e.target.value,t,r,n)}})},n)}))})},r)}))]},t)}))]})})})]})}i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.7b657927.chunk.js.map