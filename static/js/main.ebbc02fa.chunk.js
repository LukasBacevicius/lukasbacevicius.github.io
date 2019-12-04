(this["webpackJsonplukasbacevicius.github.io"]=this["webpackJsonplukasbacevicius.github.io"]||[]).push([[0],{38:function(e,t,n){e.exports=n(50)},50:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"setDimensions",(function(){return re})),n.d(r,"toRem",(function(){return oe}));var o=n(0),c=n.n(o),a=n(17),i=n(6),u=n(11),l=n(19),f=n(8),s=Object(f.a)(),m=n(15),p=n(13),b=n(35),d=n(29),h={setMode:"THEME_SET_MODE"};var g="dark",O="light",y=function(e){return e===g};function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var v={mode:window.matchMedia("(prefers-color-scheme: dark)").matches?g:O};var E={theme:function(e,t){var n=t.type;if(t.data,"undefined"===typeof e)return v;switch(n){case h.setMode:return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{mode:y(e.mode)?O:g});default:return e}}},w=n(21),D=n.n(w),k=D.a.mark(P);function P(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),k)}function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var F=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||p.d,S=Object(b.a)(),C=Object(p.e)((function(e,t){return Object(p.c)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},E,{router:Object(l.b)(s)}))(e,t)}),F(Object(p.a)(Object(d.a)(s),S)));S.run(P);var z=n(18),H=n(9),W=n(10),_=n(4);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(){var e=Object(W.a)(["\n    color: ",";\n    ","\n"]);return B=function(){return e},e}var T=["fontFamily","fontSize","fontWeight","lineHeight","color"],A=_.default.div(B(),(function(e){return e.theme.color("grayscale",100)}),(function(e){return Object.keys(e).map((function(t){return T.includes(t)?"".concat(t.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase(),": ").concat(e[t],";"):""})).join("")})),I=function(e){var t=e.children,n=e.type,r=Object(H.a)(e,["children","type"]),a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Object(o.useContext)(_.ThemeContext).typography[n],{},r),i=a.tag,u=Object(H.a)(a,["tag"]),l=A.withComponent(i);return c.a.createElement(l,u,t)},U=function(e){var t=e.children,n=Object(H.a)(e,["children"]);return c.a.createElement(I,Object.assign({type:"Canon"},n),t)},L=function(){return c.a.createElement(U,null,"Hello World")};function R(){var e=Object(W.a)(["\n    user-select: none;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.2rem;\n    position: absolute;\n    right: 1rem;\n    bottom: 1rem;\n    background: ",";\n    box-shadow: ",";\n    border-radius: .2rem;\n    font-size: 1rem;\n\n    ","\n"]);return R=function(){return e},e}function G(){var e=Object(W.a)(["\n    display: none;\n"]);return G=function(){return e},e}var J="LightsOff",N=_.default.input(G()),X=_.default.label(R(),(function(e){return e.theme.color("background",90)}),(function(e){return e.theme.decorations.shadows.default}),(function(e){return e.theme.helpers.setDimensions("2.2rem")})),Z=function(e){var t=e.onClick,n=e.checked;return c.a.createElement(c.a.Fragment,null,c.a.createElement(N,{type:"checkbox",defaultChecked:n,id:J}),c.a.createElement(X,{onClick:t,htmlFor:J,title:"Activate light mode"},c.a.createElement("span",{role:"img"},n?"\u2600\ufe0f":"\ud83c\udf19")))};function $(){var e=Object(W.a)(["\n  background: ",";\n  box-shadow: ",";\n  margin: 4rem auto;\n  padding: 5rem 2rem;\n"]);return $=function(){return e},e}var V=_.default.main($(),(function(e){return e.theme.color("background",90)}),(function(e){return e.theme.decorations.shadows.default})),q=function(e){var t=e.children;return c.a.createElement(z.Container,null,c.a.createElement(V,null,t))},K=n(34),Q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;return{light:e,dark:t}},Y={background:Q({100:"#F2F3F4",90:"#fff"},{100:"#000",90:"#202326"}),grayscale:Q({0:"#fff",10:"#D6D7D7",60:"#595D5F",70:"#9B9E9F",80:"#595D5F",90:"#222222",100:"#000"},{100:"#fff",90:"#D6D7D7",80:"#595D5F",70:"#9B9E9F",60:"#595D5F",10:"#222222",0:"#000"}),blue:Q({100:"#0D74FF",50:"#D9E7FD"}),red:Q({100:"#F74237",50:"#FFEBF4"})},ee={columns:{xs:4,sm:8,md:8,lg:12,xl:12},gutterWidth:{xs:1,sm:1,md:1.5,lg:1.5,xl:1.5},paddingWidth:{xs:1,sm:1,md:1.5,lg:1.5,xl:1.5},container:{xs:"full",sm:"full",md:"full",lg:60,xl:60},breakpoints:{xs:1,sm:43,md:60,lg:90,xl:120}},te={default:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".2s";return e.map((function(e){return"".concat(e," ").concat(t," cubic-bezier(0.25, 0.46, 0.45, 0.94)")})).join(",")}},ne={shadows:{default:"rgba(84, 70, 35, 0.15) 0px 2px 8px, rgba(84, 70, 35, 0.15) 0px 1px 3px"}},re=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;return"\n    width: ".concat(e,";\n    height: ").concat(t,";\n")},oe=function(e){return"".concat(e/16,"rem")},ce="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, 'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol'",ae={Canon:{tag:"h1",fontSize:oe(52),fontWeight:800,lineHeight:oe(56),fontFamily:ce},Trafalgar:{tag:"h1",fontSize:oe(36),fontWeight:600,lineHeight:oe(40),fontFamily:ce},Paragon:{tag:"h2",fontSize:oe(28),fontWeight:500,lineHeight:oe(32),fontFamily:ce},DoublePica:{tag:"h3",fontSize:oe(26),fontWeight:500,lineHeight:oe(30),fontFamily:ce},GreatPrimer:{tag:"h4",fontSize:oe(21),fontWeight:500,lineHeight:oe(24),fontFamily:ce},BodyCopy:{tag:"p",fontSize:oe(16),fontWeight:400,lineHeight:oe(22),fontFamily:ce},Brevier:{tag:"p",fontSize:oe(14),fontWeight:400,lineHeight:oe(18),fontFamily:ce}},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"dark";return{color:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return Y[t][e][n]},awesomegrid:ee,helpers:r,transitions:te,decorations:ne,typography:ae}};function ue(){var e=Object(W.a)(["\n  html {\n    font-size: 16px;\n  }\n  \n  body {\n    background: ",";\n    display: flex;\n    min-height: 100vh;\n    flex-direction: column;\n  }\n\n  #root {\n    flex: 1;\n  }\n"]);return ue=function(){return e},e}var le=Object(_.createGlobalStyle)(ue(),(function(e){return e.theme.color("background")})),fe=function(e){var t=e.children,n=Object(i.e)((function(e){return e.theme.mode}));return c.a.createElement(_.ThemeProvider,{theme:ie(n)},c.a.createElement(c.a.Fragment,null,c.a.createElement(K.Reset,null),c.a.createElement(le,null),t))},se=function(){var e=Object(i.e)((function(e){return e.theme.mode})),t=Object(i.d)();return c.a.createElement(fe,null,c.a.createElement(z.Container,null,c.a.createElement(Z,{checked:y(e),onClick:function(){return t({type:h.setMode})}})),c.a.createElement(q,null,c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/",component:L}))))};Object(a.render)(c.a.createElement(i.a,{store:C},c.a.createElement(l.a,{history:s},c.a.createElement(u.a,{path:"/",component:se}))),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.ebbc02fa.chunk.js.map