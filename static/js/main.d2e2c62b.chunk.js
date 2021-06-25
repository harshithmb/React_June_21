(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{42:function(e,t,c){},67:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(17),r=c.n(a),s=(c(42),c(4)),i=c(3),o=c(11),l=c(0),j=Object(o.b)((function(e){return{cart:e.prodReducer.cart,user:e.userReducer}}),null)((function(e){var t=e.cart,c=e.user;return console.log("USer",c.userName),Object(l.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark p-2",children:[Object(l.jsxs)("a",{className:"navbar-brand",href:"#",children:["Ally React - ",c.userName]}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(l.jsxs)("ul",{className:"navbar-nav",children:[Object(l.jsx)("li",{className:"nav-item active",children:Object(l.jsx)(s.b,{to:"/",className:"nav-link",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(s.b,{to:"/about",className:"nav-link",children:"About"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(s.b,{to:"/contact",className:"nav-link",children:"Contact"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsxs)(s.b,{to:"/cart",className:"nav-link",children:["Cart",Object(l.jsx)("sup",{children:t.length})]})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(s.b,{to:"/products",className:"nav-link",children:"Products"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(s.b,{to:"/signin",className:"nav-link",children:"Sign In"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(s.b,{to:"/signup",className:"nav-link",children:"Sign Up"})})]})})]})})),d=function(){return Object(l.jsx)("footer",{class:"page-footer font-small blue",children:Object(l.jsxs)("div",{class:"footer-copyright text-center py-3",children:["\xa9 2021 Copyright:",Object(l.jsx)("a",{href:"/",children:"@Hello_REACT"})]})})},b=function(){return Object(l.jsxs)("div",{className:"jumbotron p-4",children:[Object(l.jsx)("h1",{className:"display-4",children:"Hello, Ally IO!"}),Object(l.jsx)("p",{className:"lead",children:"This is our React Project"}),Object(l.jsx)("hr",{className:"my-4"}),Object(l.jsx)("p",{children:"It uses utility classNamees for typography and spacing to space content out within the larger container."}),Object(l.jsx)("p",{className:"lead",children:Object(l.jsx)("a",{className:"btn btn-primary btn-lg",href:"#",role:"button",children:"Learn more"})})]})},u=c(14),h=c.n(u),p=(c(67),Object(o.b)((function(e){return{products:e.prodReducer.products}}),(function(e){return{sendProducts:function(t){return e(function(e){return{type:"GET_PRODUCTS",payload:e}}(t))},updateCart:function(t){return e(function(e){return{type:"ADD_PRODUCT",payload:e}}(t))}}}))((function(e){var t=e.products,c=e.sendProducts,a=e.updateCart;return Object(n.useEffect)((function(){h()("https://5d76bf96515d1a0014085cf9.mockapi.io/product").then((function(e){c(e.data)})).catch((function(e){return alert(e)}))}),[]),Object(n.useEffect)((function(){console.log("Hello Products Changes")}),[t]),Object(l.jsx)("div",{className:"d-flex flex-wrap justify-content-center",children:t.length&&t.map((function(e){var t=e.name,c=e.preview,n=e.id,r=e.description;return Object(l.jsxs)("div",{class:"card m-2",style:{width:"18rem"},children:[Object(l.jsx)(s.b,{to:{pathname:"/products/".concat(n),preview:c,name:t,descriptionName:r},children:Object(l.jsx)("img",{class:"card-img-top",src:c,alt:"Card image cap"})}),Object(l.jsxs)("div",{class:"card-body",children:[Object(l.jsxs)(s.b,{to:{pathname:"/products/".concat(n),preview:c,name:t,descriptionName:r},children:[Object(l.jsx)("h5",{class:"card-title",children:t}),Object(l.jsx)("p",{class:"card-text card-para",children:r})]}),Object(l.jsx)("a",{href:"#",class:"btn btn-primary mt-3",onClick:function(){return a(e)},children:"Add to Cart"})]})]},n)}))})}))),O=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b,{}),Object(l.jsx)("hr",{}),Object(l.jsx)(p,{})]})},m=function(){return Object(l.jsx)("h1",{children:"About US"})},x=Object(o.b)((function(e){return{cart:e.prodReducer.cart,redirectHome:e.prodReducer.redirectHome}}),(function(e){return{clearCartProducts:function(){return e((function(e){return h()("/clear").then((function(t){e({type:"CLEAR_CART",payload:t}),e({type:"USER_DETAILS",payload:t})}))}))}}}))((function(e){var t=e.cart,c=e.clearCartProducts,n=e.redirectHome;return Object(l.jsxs)("div",{className:"m-4",children:[n&&Object(l.jsx)(i.a,{to:"/"}),Object(l.jsx)("h1",{children:"Cart"}),t.length&&t.map((function(e){var t=e.name,c=e.quantity,n=e.price;return Object(l.jsx)("div",{class:"card",children:Object(l.jsx)("div",{class:"card-body",children:Object(l.jsxs)("h5",{class:"card-title",children:[t," Rs ",n," X ",c," ="," ",Number(n)*Number(c)]})})})})),Object(l.jsxs)("h1",{children:["Total = ",t.reduce((function(e,t){return e+Number(t.price)*Number(t.quantity)}),0)]}),Object(l.jsx)("button",{className:"btn btn-success",onClick:function(){c()},children:"Place Order"})]})})),f=function(){return Object(l.jsx)("h1",{children:"Contact US"})},v=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"PLP Page"}),Object(l.jsx)(p,{})]})},g=c(12),N=function(e){var t=Object(n.useState)({}),c=Object(g.a)(t,2),a=c[0],r=c[1],s=e.match.params.id;console.log("props",e);var i=a.id,o=void 0===i?"":i,j=a.name,d=void 0===j?"":j,b=a.preview,u=void 0===b?"":b,p=a.brand,O=void 0===p?"":p,m=a.photos,x=void 0===m?[]:m;return Object(n.useEffect)((function(){h()("".concat("https://5d76bf96515d1a0014085cf9.mockapi.io/product/").concat(s)).then((function(e){return r(e.data)})).catch((function(e){return alert(e)}))}),[]),console.log("Window",window.location),console.log("Router Props",e),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h1",{children:["Product Details - ",s]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"row m-2",children:[Object(l.jsx)("div",{className:"col-6 p-4",children:Object(l.jsx)("img",{src:u,style:{width:"100%"}})}),Object(l.jsxs)("div",{className:"col-6 p-4",children:[Object(l.jsx)("h1",{children:o}),Object(l.jsx)("h2",{children:d}),Object(l.jsx)("h3",{children:O}),x.length&&x.slice(0,3).map((function(e){return Object(l.jsx)("img",{src:e,width:100})}))]}),Object(l.jsx)("button",{onClick:function(){e.history.push("/contact")},children:"CLick to Redirect to back"})]})]})},y=function(){var e=Object(n.useState)(""),t=Object(g.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),s=Object(g.a)(r,2),o=s[0],j=s[1],d=Object(n.useState)(!1),b=Object(g.a)(d,2),u=b[0],h=b[1],p="tushar",O="1234";return Object(l.jsxs)(l.Fragment,{children:[u&&Object(l.jsx)(i.a,{to:"/products"}),Object(l.jsx)("h1",{children:"Sign In"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=p,n=O;c.toLowerCase()===t&&o===n&&h(!0)},className:"m-4",children:[Object(l.jsxs)("div",{class:"form-group m-4",children:[Object(l.jsx)("label",{for:"exampleInputEmail1",children:"Email address"}),Object(l.jsx)("input",{type:"email",onChange:function(e){return a(e.target.value.toUpperCase())},className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"}),Object(l.jsx)("small",{id:"emailHelp",class:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(l.jsxs)("div",{className:"form-group m-4",children:[Object(l.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(l.jsx)("input",{type:"password",onChange:function(e){return j(e.target.value)},className:"form-control",id:"exampleInputPassword1",placeholder:"Password"})]}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary m-4",children:"Submit"})]}),Object(l.jsx)("hr",{})]})},C=c(33),R=c(34),w=c(37),S=c(35),E=function(e){Object(w.a)(c,e);var t=Object(S.a)(c);function c(e){var a;return Object(C.a)(this,c),(a=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),console.log(a.firstName.current.value,a.firstName)},a.state={},a.firstName=Object(n.createRef)(),a.lastName=Object(n.createRef)(),a.age=Object(n.createRef)(),a}return Object(R.a)(c,[{key:"render",value:function(){return console.log("this.props.prods",this.props.prods),Object(l.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(l.jsx)("label",{children:"First Name"}),Object(l.jsx)("input",{type:"text",ref:this.firstName}),Object(l.jsx)("label",{children:"Last Name"}),Object(l.jsx)("input",{type:"text",ref:this.lastName}),Object(l.jsx)("label",{children:"Age"}),Object(l.jsx)("input",{type:"number",ref:this.age}),Object(l.jsx)("input",{type:"submit"})]})}}]),c}(n.Component),P=Object(o.b)((function(e){return{prods:e.prodReducer.products}}),null)(E),_=function(){return Object(l.jsxs)(s.a,{children:[Object(l.jsx)(j,{}),Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{path:"/",exact:!0,component:O}),Object(l.jsx)(i.b,{path:"/about",component:m}),Object(l.jsx)(i.b,{path:"/contact",component:f}),Object(l.jsx)(i.b,{path:"/cart",component:x}),Object(l.jsx)(i.b,{path:"/products",exact:!0,component:v}),Object(l.jsx)(i.b,{path:"/products/:id",component:N}),Object(l.jsx)(i.b,{path:"/signin",component:y}),Object(l.jsx)(i.b,{path:"/signup",component:P}),Object(l.jsx)(i.b,{component:function(){return Object(l.jsx)("h1",{children:"404"})}})]}),Object(l.jsx)(d,{})]})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,71)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))},k=(c(68),c(24)),D=(c(69),c(36)),A=c(10),I="ADD_PRODUCT",L="GET_PRODUCTS",U="USER_DETAILS",H="CLEAR_CART",F={products:[{name:"Sachin",age:123}],cart:[],redirectHome:!1},q={userDetails:{},userName:"All",login:!1,status:!0},X=Object(k.a)({userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case U:return Object(A.a)(Object(A.a)({},e),{},{products:n});default:return e}},prodReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case L:return Object(A.a)(Object(A.a)({},e),{},{products:n});case I:var a=n.id,r=e.cart,s=[],i=r.findIndex((function(e){return e.id===a}));return-1!==i?(r[i].quantity=r[i].quantity+1,s=r):s=[].concat(Object(D.a)(r),[Object(A.a)(Object(A.a)({},n),{},{quantity:1})]),Object(A.a)(Object(A.a)({},e),{},{cart:s});case H:return Object(A.a)(Object(A.a)({},e),{},{cart:[],redirectHome:!0});default:return e}}}),B=Object(k.b)(X,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(Object(l.jsx)(o.a,{store:B,children:Object(l.jsx)(_,{})}),document.getElementById("root")),T()}},[[70,1,2]]]);
//# sourceMappingURL=main.d2e2c62b.chunk.js.map