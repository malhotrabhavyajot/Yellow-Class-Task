(this.webpackJsonpMasonary=this.webpackJsonpMasonary||[]).push([[0],{28:function(n,e,t){n.exports=t(52)},51:function(n,e,t){},52:function(n,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),r=t(20),o=t.n(r),l=t(8),s=t(27),c=t(2),m=t(3);function u(){var n=Object(c.a)(["\n  font-family: 'Oswald', sans-serif;\n  margin-bottom: 1em;\n"]);return u=function(){return n},n}function d(){var n=Object(c.a)(["\n  max-width: 70rem;\n  margin: 2rem auto;\n  text-align: center;\n"]);return d=function(){return n},n}var p=m.b.header(d()),f=m.b.h1(u()),b=function(){return i.a.createElement(p,null,i.a.createElement(f,null,"Unsplash Photo Feed"),i.a.createElement("p",null,"A website dedicated to sharing stock photography under the Unsplash license. The website claims over 207,000 contributing photographers and generates more than 17 billion photo impressions per month on their growing library of over 2 million photos."),i.a.createElement("p",null,"Created For : Yellow Class"))};function h(){var n=Object(c.a)([""]);return h=function(){return n},n}var g=m.b.img(h()),v=function(n){var e=n.url,t=n.key;return i.a.createElement(i.a.Fragment,null,i.a.createElement(g,{key:t,src:e,alt:""}))};function k(){var n=Object(c.a)(["\n\ntext-align: center;\n.lds-ellipsis {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.lds-ellipsis div {\n  position: absolute;\n  top: 33px;\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  background: #222;\n  animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n.lds-ellipsis div:nth-child(1) {\n  left: 8px;\n  animation: lds-ellipsis1 0.6s infinite;\n}\n.lds-ellipsis div:nth-child(2) {\n  left: 8px;\n  animation: lds-ellipsis2 0.6s infinite;\n}\n.lds-ellipsis div:nth-child(3) {\n  left: 32px;\n  animation: lds-ellipsis2 0.6s infinite;\n}\n.lds-ellipsis div:nth-child(4) {\n  left: 56px;\n  animation: lds-ellipsis3 0.6s infinite;\n}\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(24px, 0);\n  }\n}\n"]);return k=function(){return n},n}var E=m.b.div(k()),y=function(){return i.a.createElement(E,null,i.a.createElement("div",{class:"lds-ellipsis"},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null)))},w=t(24),x=t.n(w),O=t(25),j=t(26),N=t.n(j);function A(){var n=Object(c.a)(["\n  * {\n    margin: 0;\n    align: center;\n    padding: 8px;\n    box-sizing: content-box;\n  }\n\n  body {\n    font-family: sans-serif;\n  }\n  body {\n    background: linear-gradient(326deg, #88c8b7, #f593bb, #66c9a9, #c5c966);\n    background-size: 800% 800%;\n\n    -webkit-animation: AnimationName 2s ease infinite;\n    -o-animation: AnimationName 2s ease infinite;\n    animation: AnimationName 2s ease infinite;\n}\n\n@-webkit-keyframes AnimationName {\n    0%{background-position:0% 65%}\n    50%{background-position:100% 36%}\n    100%{background-position:0% 65%}\n}\n@-o-keyframes AnimationName {\n    0%{background-position:0% 65%}\n    50%{background-position:100% 36%}\n    100%{background-position:0% 65%}\n}\n@keyframes AnimationName {\n    0%{background-position:0% 65%}\n    50%{background-position:100% 36%}\n    100%{background-position:0% 65%}\n}\n  \n"]);return A=function(){return n},n}var C=Object(m.a)(A());var M=function(){var n=Object(a.useState)([]),e=Object(s.a)(n,2),t=e[0],r=e[1];Object(a.useEffect)((function(){o()}),[]);var o=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,e="https://api.unsplash.com",a="1A_6b4n1WNXVGGvY8TXE5sfkY-kiCfLG9sGFNH01SZM";x.a.get("".concat(e,"/photos/random?client_id=").concat(a,"&count=").concat(n)).then((function(n){r([].concat(Object(l.a)(t),Object(l.a)(n.data)))}))};return i.a.createElement("div",null,i.a.createElement(b,null),i.a.createElement(C,null),i.a.createElement(O.a,{dataLength:t.length,next:o,hasMore:!0,loader:i.a.createElement(y,null)},i.a.createElement(N.a,{breakpointCols:{default:6,1200:3,992:3,768:3,576:2,525:2},className:"masonry-grid",columnClassName:"masonry-grid_column"},t.map((function(n){return i.a.createElement(v,{url:n.urls.thumb,key:n.id})})))))};t(50),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(51);o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.7093c8bc.chunk.js.map