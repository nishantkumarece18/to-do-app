(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],{19:function(t,e,n){},20:function(t,e,n){},21:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),s=n(3),c=n.n(s),r=(n(19),n(12)),u=n(7),o=n(8),d=n(14),l=n(13),m=(n.p,n(20),n(21),n(9)),j=n(10),p=n(11),h=n(2);var f=function(t){var e=t.items.map((function(e){return Object(h.jsxs)("div",{className:"list",children:[Object(h.jsx)("input",{type:"text",value:e.text,onChange:function(n){t.setUpdate(n.target.value,e.key)}}),Object(h.jsx)(m.a,{icon:j.a,onClick:function(){return t.deleteItem(e.key)},className:"icon"})]},e.key)}));return Object(h.jsx)("div",{className:"list-items",children:Object(h.jsx)(p.a,{duration:500,easing:"ease-in-out",children:e})})},b=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).handleInput=function(t){a.setState({currentItem:{text:t.target.value,key:Date.now()}})},a.addItem=function(t){t.preventDefault();var e=a.state.currentItem;if(""!=e.text){var n=[].concat(Object(r.a)(a.state.items),[e]);a.setState({items:n,currentItem:{text:"",key:""}})}},a.deleteItem=function(t){var e=a.state.items.filter((function(e){return e.key!==t}));a.setState({items:e})},a.setUpdate=function(t,e){var n=a.state.items;n.map((function(n){n.key===e&&(n.text=t)})),a.setState({items:n})},a.state={items:[],currentItem:{text:"",key:""}},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("header",{children:Object(h.jsxs)("form",{id:"to-do-form",onSubmit:this.addItem,children:[Object(h.jsx)("input",{type:"text",placeholder:"Enter Text",value:this.state.currentItem.text,onChange:this.handleInput}),Object(h.jsx)("button",{type:"submit",children:"Add"})]})}),Object(h.jsx)(f,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate})]})}}]),n}(i.a.Component),x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),a(t),i(t),s(t),c(t)}))};c.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(b,{})}),document.getElementById("root")),x()}},[[28,1,2]]]);
//# sourceMappingURL=main.c8ff02d8.chunk.js.map