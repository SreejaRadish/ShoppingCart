(this.webpackJsonpsmallshoppingcart=this.webpackJsonpsmallshoppingcart||[]).push([[0],{13:function(e,c,t){},15:function(e,c,t){"use strict";t.r(c);var s=t(1),n=t.n(s),i=t(6),r=t.n(i),d=(t(13),t(7)),a=t(2),j=t(8),l=t(0);function o(e){var c=e.countCartItems;return Object(l.jsxs)("header",{className:"row block center",children:[Object(l.jsx)("div",{children:Object(l.jsx)("a",{href:"#/",children:Object(l.jsx)("h1",{children:"Small Shopping Cart"})})}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("a",{href:"#cart",children:["Cart "," ",c?Object(l.jsx)("button",{className:"badge",children:c}):" "]}),Object(l.jsx)("a",{href:"#signin",children:"SignIn"})]})]})}function h(e){var c=e.product,t=e.onAdd;return Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{className:"small",src:c.image,alt:c.name}),Object(l.jsx)("h3",{children:c.name}),Object(l.jsxs)("div",{children:["$",c.Price]}),Object(l.jsx)("button",{onClick:function(){return t(c)},children:"Add To Cart"})]})}function b(e){var c=e.products,t=e.onAdd;return Object(l.jsxs)("main",{className:"block col2",children:[Object(l.jsx)("h2",{children:"Products"}),Object(l.jsx)("div",{className:"row",children:c.map((function(e){return Object(l.jsx)(h,{product:e,onAdd:t},e.id)}))})]})}function x(e){var c=e.cartItems,t=e.onAdd,s=e.onRemove,n=c.reduce((function(e,c){return e+c.Price*c.qty}),0),i=.14*n,r=n>2e3?0:50,d=n+i+r;return Object(l.jsxs)("aside",{className:"block col1",children:[Object(l.jsx)("h2",{children:"Cart Items"}),Object(l.jsx)("div",{children:0===c.length&&Object(l.jsx)("div",{children:"Cart is Empty"})}),c.map((function(e){return Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col2",children:e.name}),Object(l.jsxs)("div",{className:"col2",children:[Object(l.jsx)("button",{className:"add",onClick:function(){return t(e)},children:"+"}),Object(l.jsx)("button",{className:"remove",onClick:function(){return s(e)},children:"-"})]}),Object(l.jsxs)("div",{className:"col2 text-right",children:[e.qty," x $",e.Price.toFixed(2)]})]},e.id)})),0!==c.length&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col2",children:"Items Price"}),Object(l.jsxs)("div",{className:"col1 text-right",children:["$",n.toFixed(2)]})]}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col2",children:"Tax"}),Object(l.jsxs)("div",{className:"col1 text-right",children:["$",i.toFixed(2)]})]}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col2",children:"Shipping"}),Object(l.jsxs)("div",{className:"col1 text-right",children:["$",r.toFixed(2)]})]}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col2",children:Object(l.jsx)("strong",{children:"Total"})}),Object(l.jsx)("div",{className:"col1 text-right",children:Object(l.jsxs)("strong",{children:["$",d.toFixed(2)]})})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("button",{children:"CheckOut"})})]})]})}var m={products:[{id:1,name:"Macbook",Price:1200,image:"https://picsum.photos/id/180/2400/1600"},{id:2,name:"Car",Price:1500,image:"https://picsum.photos/id/111/4400/2656"},{id:3,name:"Shoes",Price:500,image:"https://picsum.photos/id/21/3008/2008"}]};var u=function(){var e=m.products,c=Object(s.useState)([]),t=Object(j.a)(c,2),n=t[0],i=t[1],r=function(e){var c=n.find((function(c){return c.id===e.id}));i(c?n.map((function(t){return t.id===e.id?Object(a.a)(Object(a.a)({},c),{},{qty:c.qty+1}):t})):[].concat(Object(d.a)(n),[Object(a.a)(Object(a.a)({},e),{},{qty:1})]))};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o,{countCartItems:n.length}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)(b,{onAdd:r,products:e}),Object(l.jsx)(x,{onAdd:r,onRemove:function(e){var c=n.find((function(c){return c.id===e.id}));1===c.qty?i(n.filter((function(c){return c.id!==e.id}))):i(n.map((function(t){return t.id===e.id?Object(a.a)(Object(a.a)({},c),{},{qty:c.qty-1}):t})))},cartItems:n})]})]})},O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(c){var t=c.getCLS,s=c.getFID,n=c.getFCP,i=c.getLCP,r=c.getTTFB;t(e),s(e),n(e),i(e),r(e)}))};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.84913244.chunk.js.map