"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{7959:function(e,t,n){n.d(t,{IQ:function(){return u},Jh:function(){return o},Pt:function(){return c},TP:function(){return i},ik:function(){return a}});var r=n(1912),a=function(){return r.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=27cddf1230eab22bdf20f54c99a70037",{params:{language:"ua"}})},i=function(e){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=27cddf1230eab22bdf20f54c99a70037"),{params:{language:"ua"}})},c=function(e){return r.Z.get("https://api.themoviedb.org/3/search/movie?api_key=27cddf1230eab22bdf20f54c99a70037",{params:{query:e}})},u=function(e){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=27cddf1230eab22bdf20f54c99a70037"))},o=function(e){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=27cddf1230eab22bdf20f54c99a70037"))}},186:function(e,t,n){n.r(t);var r=n(3433),a=n(9439),i=n(7959),c=n(2791),u=n(7689),o=n(184);t.default=function(){var e=(0,u.UO)().movieId,t=(0,c.useState)([]),n=(0,a.Z)(t,2),f=n[0],d=n[1];return(0,c.useEffect)((function(){null!==e&&(0,i.Jh)(e).then((function(e){return d((function(t){return[].concat((0,r.Z)(t),(0,r.Z)(e.data.results))}))}))}),[e]),(0,o.jsx)("div",{children:(0,o.jsx)("ul",{children:f.length>0?f.map((function(e){return(0,o.jsxs)("li",{children:[(0,o.jsxs)("h3",{children:["Author:",e.author]}),(0,o.jsx)("p",{children:e.content})]},e.id)})):(0,o.jsx)("h3",{children:"Not reviews"})})})}}}]);
//# sourceMappingURL=186.825793b8.chunk.js.map