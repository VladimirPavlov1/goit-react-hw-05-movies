"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544,33,247,186],{7959:function(n,t,e){e.d(t,{IQ:function(){return c},Jh:function(){return u},Pt:function(){return o},TP:function(){return a},ik:function(){return i}});var r=e(1912),i=function(){return r.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=27cddf1230eab22bdf20f54c99a70037",{params:{language:"ua"}})},a=function(n){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=27cddf1230eab22bdf20f54c99a70037"),{params:{language:"ua"}})},o=function(n){return r.Z.get("https://api.themoviedb.org/3/search/movie?api_key=27cddf1230eab22bdf20f54c99a70037",{params:{query:n}})},c=function(n){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=27cddf1230eab22bdf20f54c99a70037"))},u=function(n){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=27cddf1230eab22bdf20f54c99a70037"))}},1247:function(n,t,e){e.r(t);var r=e(3433),i=e(9439),a=e(7689),o=e(2791),c=e(7959),u=e(8562),s=e(184);t.default=function(){var n=(0,o.useState)([]),t=(0,i.Z)(n,2),e=t[0],l=t[1],d=(0,a.UO)().movieId;(0,o.useEffect)((function(){null!==d&&(0,c.IQ)(d).then((function(n){l((function(t){return(0,r.Z)(h(n.data.cast))}))}))}),[d]);var f=function(n){var t=u;return e.map((function(e){var r=e.profile_path;return null!==r&&r===n&&(t="https://image.tmdb.org/t/p/original".concat(r)),t})),t},h=function(n){return n.filter((function(n){var t=n.id;return t.includes(t)}))};return(0,s.jsx)("ul",{children:e&&e.map((function(n){var t=n.character,e=n.id,r=n.original_name,i=n.profile_path;return(0,s.jsxs)("li",{children:[(0,s.jsx)("img",{src:f(i),alt:"jdghh",width:"100px"}),(0,s.jsx)("h3",{children:r}),(0,s.jsx)("h3",{children:t})]},[t,e])}))})}},4126:function(n,t,e){var r=e(1087),i=e(5033),a=e(7689),o=e(184);t.Z=function(n){var t=n.items,e=(0,a.TH)();return(0,o.jsx)("div",{children:(0,o.jsx)("ul",{children:t.map((function(n){var t=n.id,a=n.original_title,c=void 0===a?"Name not Found":a;return(0,o.jsx)("li",{children:(0,o.jsx)(r.OL,{to:"/movies/".concat(t),state:{from:e},element:(0,o.jsx)(i.default,{}),children:c})},t)}))})})}},186:function(n,t,e){e.r(t);var r=e(3433),i=e(9439),a=e(7959),o=e(2791),c=e(7689),u=e(184);t.default=function(){var n=(0,c.UO)().movieId,t=(0,o.useState)([]),e=(0,i.Z)(t,2),s=e[0],l=e[1];return(0,o.useEffect)((function(){null!==n&&(0,a.Jh)(n).then((function(n){return l((function(t){return[].concat((0,r.Z)(t),(0,r.Z)(n.data.results))}))}))}),[n]),(0,u.jsx)("div",{children:(0,u.jsx)("ul",{children:s.length>0?s.map((function(n){return(0,u.jsxs)("li",{children:[(0,u.jsxs)("h3",{children:["Author:",n.author]}),(0,u.jsx)("p",{children:n.content})]},n.id)})):(0,u.jsx)("h3",{children:"Not reviews"})})})}},9544:function(n,t,e){e.r(t);var r=e(9439),i=e(7959),a=e(4126),o=e(2791),c=e(184);t.default=function(){var n=(0,o.useState)([]),t=(0,r.Z)(n,2),e=t[0],u=t[1];return(0,o.useEffect)((function(){(0,i.ik)().then((function(n){return u((function(t){return n.data.results}))}))}),[]),(0,c.jsxs)("div",{children:[(0,c.jsx)("h2",{children:"Trending today"}),(0,c.jsx)(a.Z,{items:e})]})}},5033:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,i,a,o,c,u=e(9439),s=e(7959),l=e(2791),d=e(1087),f=e(7689),h=e(1247),p=e(186),v=e(168),m=e(7402),x=e(719),j=m.Z.button(r||(r=(0,v.Z)(["\ndisplay: block;\nmargin-bottom:16px;\nborder: none;\npadding: 10px;\nbackground-color: transparent;\n"]))),g=(0,m.Z)(d.OL)(i||(i=(0,v.Z)(["\ntext-decoration: none;\nfont-size: 16px;\nfont-weight: 500;\ncolor:black;\n"]))),b=(0,m.Z)(x.YiX)(a||(a=(0,v.Z)(["\nwidth:20px;\n"]))),Z=m.Z.ul(o||(o=(0,v.Z)(["\ndisplay: flex;\nlist-style: none;\nmargin: 0;\npadding: 0;\n"]))),_=m.Z.li(c||(c=(0,v.Z)(["\nmargin-right: 40px;\n"]))),k=e(7596),w=e(184),y=function(){var n,t,e,r,i,a,o=(0,f.UO)().movieId,c=(0,f.TH)(),v=null!==(n=null!==(t=null!==(e=null===(r=c.state)||void 0===r?void 0:r.from)&&void 0!==e?e:null===(i=c.state)||void 0===i?void 0:i.location.state.from)&&void 0!==t?t:null===(a=c.state)||void 0===a?void 0:a.location.state.location.state.from)&&void 0!==n?n:"/movies",m=(0,l.useState)(null),x=(0,u.Z)(m,2),y=x[0],O=x[1];(0,l.useEffect)((function(){null!==o&&(0,s.TP)(o).then((function(n){0!==n.data.length?O((function(t){return n.data})):k.Am.warn("\u041d\u0430\u0436\u0430\u043b\u044c \u043d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e",{autoclose:3e3,theme:"colored"})})).catch((function(n){n.message;return"\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437",k.Am.error("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437")}))}),[o]);var I;return(0,w.jsxs)("div",{children:[(0,w.jsxs)(j,{children:[(0,w.jsx)(b,{}),(0,w.jsx)(g,{to:v,children:"Go back"})]}),y&&(0,w.jsxs)(Z,{children:[(0,w.jsx)(_,{children:(0,w.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/"+y.poster_path,alt:""})}),(0,w.jsxs)(_,{children:[(0,w.jsxs)("h2",{children:[y.original_title," (",(I=y.release_date,I.slice(0,4)),")"]}),(0,w.jsxs)("p",{children:["User score:",function(){if(null!==y)return Math.round(10*y.vote_average)}(),"%"]}),(0,w.jsx)("h2",{children:"Overview"}),(0,w.jsx)("p",{children:y.overview}),(0,w.jsx)("h2",{children:"Genres"}),(0,w.jsxs)("p",{children:[" ",function(){if(null!==y)return y.genres.map((function(n){return n.name})).join("  ")}()]})]})]}),(0,w.jsx)("h3",{children:"Aditional information"}),(0,w.jsxs)("ul",{children:[(0,w.jsx)("li",{children:(0,w.jsx)(d.OL,{to:"cast",state:{location:c},element:(0,w.jsx)(h.default,{}),children:(0,w.jsx)("h3",{children:"Cast"})})}),(0,w.jsx)("li",{children:(0,w.jsx)(d.OL,{to:"reviews",state:{location:c},element:(0,w.jsx)(p.default,{}),children:(0,w.jsx)("h3",{children:"Reviews"})})})]}),(0,w.jsx)(f.j3,{})]})}},8562:function(n,t,e){n.exports=e.p+"static/media/user_not_found.9a22a24ac37c6c97a750.jpg"}}]);
//# sourceMappingURL=544.b16058d3.chunk.js.map