(this["webpackJsonppoke-app"]=this["webpackJsonppoke-app"]||[]).push([[0],{17:function(e,t,s){},19:function(e,t,s){},20:function(e,t,s){},21:function(e,t,s){},22:function(e,t,s){},23:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(8),i=s.n(a),r=(s(17),s(5)),l=s(2),j=s.p+"static/media/logo.c4aba083.png",o=s(0),b={display:"block","min-width":"100%",height:"134px","background-color":"#806BFF"},p={padding:"20px"},u=function(){return Object(o.jsx)("header",{style:b,children:Object(o.jsx)(r.b,{to:"/",children:Object(o.jsx)("img",{src:j,style:p})})})},h=s(3);s(19);function d(e){var t=e.itemsData;return Object(o.jsx)("div",{className:"grid-item-wrapper",children:t&&t.map((function(e){var t=e.name,s=e.url,c=s.match(/([0-9]*)\/$/)[1];return Object(o.jsx)("div",{className:"item-wrapper",children:Object(o.jsxs)(r.b,{to:"/pokemon/".concat(c),children:[Object(o.jsx)("img",{className:"picture",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(c,".png"),alt:t}),Object(o.jsx)("p",{className:"name",children:t})]})},c)}))})}var m=s(9),O=s(10),x=s(12),f=s(11),g=(s(20),function(e){Object(x.a)(s,e);var t=Object(f.a)(s);function s(){var e;Object(m.a)(this,s);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={inputValue:""},e.handleChange=function(t){var s=t.target.value;e.setState({inputValue:s}),e.props.onSearchChange(s)},e}return Object(O.a)(s,[{key:"render",value:function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"input-wrapper",children:[Object(o.jsx)("input",{onChange:this.handleChange,value:this.state.inputValue,className:"search-input",type:"text",placeholder:"Find pokemon"}),Object(o.jsx)("button",{type:"button",className:"search-button",children:"Search"})]})})}}]),s}(n.a.Component)),k=function(){var e=Object(c.useState)(null),t=Object(h.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)(""),i=Object(h.a)(a,2),r=i[0],l=i[1],j=Object(c.useState)("https://pokeapi.co/api/v2/pokemon?limit=30"),b=Object(h.a)(j,2),p=b[0],u=b[1],m=Object(c.useState)(null),O=Object(h.a)(m,2),x=O[0],f=O[1],k=Object(c.useState)(null),v=Object(h.a)(k,2),N=v[0],w=v[1];Object(c.useEffect)((function(){fetch(p).then((function(e){return e.json()})).then((function(e){n(e.results),f(e.next),w(e.previous)}))}),[p]);if(null===s)return null;var C=function(e,t){return""===t?e:e.filter((function(e){return e.name.toLowerCase().indexOf(t.toLowerCase())>-1}))}(s,r);return Object(o.jsxs)("div",{children:[Object(o.jsx)(g,{onSearchChange:function(e){l(e)}}),Object(o.jsx)(d,{itemsData:C}),Object(o.jsxs)("p",{children:[N&&Object(o.jsx)("button",{onClick:function(){u(N)},children:" < PREVIOUS "}),x&&Object(o.jsx)("button",{onClick:function(){u(x)},children:" NEXT > "})]})]})},v=(s(21),function(){var e=Object(l.g)().pokeId,t=Object(c.useState)(null),s=Object(h.a)(t,2),n=s[0],a=s[1];return Object(c.useEffect)((function(){fetch("https://pokeapi.co/api/v2/pokemon/".concat(e)).then((function(e){return e.json()})).then((function(e){a(e),console.log(n)})).catch((function(e){return console.log(e)}))}),[]),null===n?Object(o.jsx)("p",{children:"Loading..."}):Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"pokemon-item-wrapper",children:[Object(o.jsx)("div",{className:"picture-wrapper",children:Object(o.jsx)("img",{src:n.sprites&&n.sprites.other["official-artwork"].front_default,alt:n.name,width:"312px",height:"312px"})}),Object(o.jsxs)("div",{className:"description-wrapper",children:[Object(o.jsx)("h1",{className:"pokemon-name",children:n.name}),Object(o.jsx)("h2",{className:"stats",children:"stats"}),Object(o.jsxs)("ul",{className:"description-list",children:[Object(o.jsx)("li",{children:Object(o.jsxs)("p",{className:"stats-item",children:["hp: ",Object(o.jsx)("span",{className:"stats-item-number",children:n.stats[0].base_stat})]})}),Object(o.jsx)("li",{children:Object(o.jsxs)("p",{className:"stats-item",children:["attack: ",Object(o.jsx)("span",{className:"stats-item-number",children:n.stats[1].base_stat})]})}),Object(o.jsx)("li",{children:Object(o.jsxs)("p",{className:"stats-item",children:["deffence: ",Object(o.jsx)("span",{className:"stats-item-number",children:n.stats[2].base_stat})]})}),Object(o.jsx)("li",{children:Object(o.jsxs)("p",{className:"stats-item",children:["special attack: ",Object(o.jsx)("span",{className:"stats-item-number",children:n.stats[3].base_stat})]})}),Object(o.jsx)("li",{children:Object(o.jsxs)("p",{className:"stats-item",children:["special deffence: ",Object(o.jsx)("span",{className:"stats-item-number",children:n.stats[4].base_stat})]})}),Object(o.jsx)("li",{children:Object(o.jsxs)("p",{className:"stats-item",children:["speed: ",Object(o.jsx)("span",{className:"stats-item-number",children:n.stats[5].base_stat})]})})]})]})]}),Object(o.jsx)(r.b,{to:"/",className:"link-back",children:" < BACK "})]})});s(22);var N=function(){return Object(o.jsx)(r.a,{basename:"Poke-app",children:Object(o.jsxs)("div",{className:"page-wrapper",children:[Object(o.jsx)(u,{}),Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{path:"/",element:Object(o.jsx)(k,{})}),Object(o.jsx)(l.a,{path:"/pokemon/:pokeId",element:Object(o.jsx)(v,{})})]})]})})},w=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,25)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),c(e),n(e),a(e),i(e)}))};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(N,{})}),document.getElementById("root")),w()}},[[23,1,2]]]);
//# sourceMappingURL=main.09601713.chunk.js.map