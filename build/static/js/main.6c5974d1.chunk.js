(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{49:function(e,t,n){e.exports=n(86)},85:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(17),c=n.n(l),s=n(10),o=n(16),u=n(46),i=n(47),m=n(18),b=n(4),f=n(1),p=n.n(f),d=n(3),g=n(14),E=n.n(g),v=null,h={getAll:function(){var e=Object(d.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=E.a.get("/api/blogs"),e.next=3,t;case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(d.a)(p.a.mark((function e(t){var n,a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:v}},a=E.a.post("/api/blogs",t,n),e.next=4,a;case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(d.a)(p.a.mark((function e(t,n){var a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=E.a.put("".concat("/api/blogs","/").concat(t),n),e.next=3,a;case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(d.a)(p.a.mark((function e(t){var n,a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:v}},a=E.a.delete("".concat("/api/blogs","/").concat(t),n),e.next=4,a;case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){v="bearer ".concat(e)}},y=function(){return function(){var e=Object(d.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.getAll();case 2:n=e.sent,t({type:"INIT_BLOGS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(d.a)(p.a.mark((function t(n){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.create(e);case 2:a=t.sent,n({type:"NEW_BLOG",data:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(e,t,n){return Object(b.a)(Object(b.a)({},function(e,t){return e.find((function(e){return e.id===t}))}(e,t)),{},{likes:n})},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_BLOGS":return t.data;case"NEW_BLOG":case"DELETE_BLOG":return[].concat(Object(m.a)(e),[t.data]);case"LIKE_BLOG":return e.map((function(n){return n.id!==t.data.id?n:k(e,t.data.id,t.data.likes)}));default:return e}},w={getAll:function(){var e=Object(d.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=E.a.get("/api/users"),e.next=3,t;case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(d.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=E.a.post("/api/users",t),e.next=3,n;case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),remove:function(){var e=Object(d.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=E.a.delete("".concat("/api/users","/").concat(t)),e.next=3,n;case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=function(){return function(){var e=Object(d.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.getAll();case 2:n=e.sent,t({type:"INIT_USERS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_USERS":return t.data;case"NEW_USER":case"DELETE_USER":return[].concat(Object(m.a)(e),[t.data]);default:return e}},S=[],T=function(e,t,n){return S.forEach((function(e){return"number"===typeof e?clearTimeout(e):e})),function(){var a=Object(d.a)(p.a.mark((function a(r){return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if("msg"!==t){a.next=8;break}return a.next=3,r(B(e,t));case 3:if(a.t0=a.sent,!a.t0){a.next=6;break}S.push(setTimeout((function(){r(B(null)),S=[]}),1e3*n));case 6:a.next=13;break;case 8:return a.next=10,r(L(e,t));case 10:if(a.t1=a.sent,!a.t1){a.next=13;break}S.push(setTimeout((function(){r(L(null)),S=[]}),1e3*n));case 13:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},B=function(e,t){return{type:"SET_MESSAGE",data:{text:e,which:t}}},L=function(e,t){return{type:"SET_ERRORMESSAGE",data:{text:e,which:t}}},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MESSAGE":case"SET_ERRORMESSAGE":return t.data;default:return e}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ALL",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FILTER":return{type:t.type,content:t.content};default:return e}},R=function(e){return{type:"SET_LOGGEDUSER",content:e}},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOGGEDUSER":return t.content;default:return e}},U=Object(o.combineReducers)({blogs:j,users:x,loggedUser:_,message:C,filter:V}),A=Object(o.createStore)(U,Object(i.composeWithDevTools)(Object(o.applyMiddleware)(u.a)));h.getAll().then((function(e){return A.dispatch(y())})),w.getAll().then((function(e){return A.dispatch(N())}));var M=A,G=n(6),I=n(7),D=n(5),F={login:function(){var e=Object(d.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},W=function(e){var t=Object(a.useState)(""),n=Object(I.a)(t,2),r=n[0],l=n[1];return{value:r,onChange:function(t){l(e?t.target.value:"")}}},z=function(e){var t=e.loginUser,n=Object(a.useState)(!0),l=Object(I.a)(n,2),c=l[0],s=l[1],o=W(c),u=W(c);return r.a.createElement("div",{className:"form-group-inline"},r.a.createElement("form",null,r.a.createElement("div",{align:"left",className:"form-group-inline"},r.a.createElement("label",{id:"formlabel"},"username:"),r.a.createElement("input",Object.assign({className:"form-control"},o)),r.a.createElement("label",{id:"formlabel"},"password:"),r.a.createElement("input",Object.assign({className:"form-control"},u))),r.a.createElement("button",{className:"btn btn-primary",id:"login-button",type:"button",style:{float:"left"},onClick:function(e){e.preventDefault(),s(!0);var n={username:o.value,password:u.value};t(n)}},"login")))},J=function(e){var t=Object(G.c)(),n=Object(a.useState)(!0),l=Object(I.a)(n,2),c=l[0],s=l[1],o={display:e.visible?"":"none"},u=W(c),i=W(c),m=W(c);return r.a.createElement("div",{className:"col-auto",style:o},r.a.createElement("br",null),r.a.createElement("b",null,"Add a new blog"),r.a.createElement("form",null,r.a.createElement("div",{align:"left",className:"form-group"},r.a.createElement("label",{id:"formlabel"},"title:"),r.a.createElement("input",Object.assign({className:"form-control"},u))),r.a.createElement("div",{align:"left",className:"form-group"},r.a.createElement("label",{id:"formlabel"},"author:"),r.a.createElement("input",Object.assign({className:"form-control"},i))),r.a.createElement("div",{align:"left",className:"form-group"},r.a.createElement("label",{id:"formlabel"},"url:"),r.a.createElement("input",Object.assign({className:"form-control"},m))),r.a.createElement("div",{align:"left",className:"form-group"},r.a.createElement("button",{className:"btn btn-primary",id:"add-button",type:"submit",style:{float:"left",marginTop:"12px"},onClick:function(n){n.preventDefault(),s(!0);var a={title:u.value,author:i.value,url:m.value,user:e.user.name};try{t(O(a)),t(T("added `".concat(u.value,"`"),"msg",5))}catch(r){t(T("error: `".concat(r,"`"),"err",5))}t(y()),e.setVisible(!e.visible),e.history.goBack()}},"add"),r.a.createElement("button",{className:"btn btn-primary",id:"reset-button",type:"submit",style:{float:"left",marginTop:"12px"},onClick:function(){s(!1)}},"reset")),r.a.createElement("div",{align:"right",className:"form-group"},r.a.createElement("button",{className:"btn btn-primary",id:"formback-button",type:"button",onClick:function(){e.history.goBack(),e.setVisible(!e.visible)},props:Object(b.a)({},e)},"back"))))},H=function(){var e=Object(G.c)();return r.a.createElement("div",{className:"col-auto"},r.a.createElement("form",{onChange:function(t){t.preventDefault();var n=t.target.value;e(function(e,t){return{type:"SET_FILTER",content:t}}(0,n))}},r.a.createElement("label",{htmlFor:"filter"},"filter shown with:"),r.a.createElement("input",{name:"filter",type:"text",className:"form-control"})))},K=function(e){var t=Object(G.c)();console.log(e);var n=Object(a.useState)(!0),l=Object(I.a)(n,2),c=l[0],s=l[1],o=Object(a.useState)(e.blogVisible),u=Object(I.a)(o,2),i=u[0],m=u[1],f={display:i?"":"none"},p=W(c);return r.a.createElement("div",{className:"col-auto",style:f},r.a.createElement("br",null),r.a.createElement("b",null,"Add a new Comment"),r.a.createElement("form",null,r.a.createElement("div",{align:"left",className:"form-group"},r.a.createElement("label",{id:"formlabel"},"comment:"),r.a.createElement("input",Object.assign({className:"form-control"},p))),r.a.createElement("div",{align:"left",className:"form-group"},r.a.createElement("button",{className:"btn btn-primary",id:"add-button",type:"submit",style:{float:"left",marginTop:"12px"},onClick:function(n){n.preventDefault(),s(!0);var a=Object(b.a)(Object(b.a)({},e.blog),{},{comment:p.value});try{t(O(a)),t(T("added comment`".concat(p.value,"`"),"msg",5))}catch(r){t(T("error: `".concat(r,"`"),"err",5))}t(y()),e.setBlogVisible(!e.visible),m(!i),e.history.goBack()}},"add"),r.a.createElement("button",{className:"btn btn-primary",id:"reset-button",type:"submit",style:{float:"left",marginTop:"12px"},onClick:function(){s(!1)}},"reset")),r.a.createElement("div",{align:"right",className:"form-group"},r.a.createElement("button",{className:"btn btn-primary",id:"formback-button",type:"button",onClick:function(){e.history.goBack(),m(!i),e.setBlogVisible(!e.blogVisible)},props:Object(b.a)({},e)},"back"))))},q=function(e){var t=e.props,n=Object(D.g)().id,l=Object(G.c)(),c=Object(a.useState)(!t.listVisible),o=Object(I.a)(c,2),u=o[0],i=o[1],m={display:u?"none":""},f=t.blogs.find((function(e){return e.id===n}));if(!f)return null;var p=function(){return r.a.createElement(s.b,{to:"/blogs/".concat(f.id,"/comments"),onClick:function(){i(!u),t.history.push("/blogs/".concat(f.id))}},"ADD NEW COMMENT")};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:m},r.a.createElement("br",null),r.a.createElement("b",{id:"b-left"},f.title),"by",r.a.createElement("b",{id:"b-right"},f.author),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{href:f.url},f.url),r.a.createElement("br",null),f.likes," likes",r.a.createElement("button",{type:"button",className:"btn btn-success",id:"like-button",onClick:function(){t.likeBlog(Object(b.a)(Object(b.a)({},f),{},{user:f.user.id})),t.setMessage("you liked '".concat(f.title,"'"),"msg",5)}},"like"),r.a.createElement("br",null),"added by ",f.user.name,t.user.name===f.user.name&&r.a.createElement("button",{type:"button",id:"delete-button",className:"btn btn-warning",onClick:function(){t.history.goBack(),t.deleteBlog(n),t.setMessage("you deleted '".concat(f.title,"'"),"msg",5),l(y()),i(!u),t.setListVisible(!t.listVisible)}},"delete"),r.a.createElement("button",{type:"button",id:"back-button",className:"btn btn-primary",onClick:function(){t.history.goBack(),i(!u),t.setListVisible(!t.listVisible)},props:Object(b.a)({},t)}," go back"),r.a.createElement("br",null),p(),r.a.createElement("br",null),r.a.createElement(r.a.Fragment,null,r.a.createElement("b",null,"Comments"),r.a.createElement("li",null,"comment"))),r.a.createElement(D.c,null,r.a.createElement(D.a,{path:"/blogs/:id/comments"},r.a.createElement(K,{blog:f,commentForm:p,blogVisible:u,history:t.history,setBlogVisible:i,setMessage:t.setMessage,props:Object(b.a)({},t)}))))};function P(e,t){return t.likes-e.likes}var Q={likeBlog:function(e){return function(){var t=Object(d.a)(p.a.mark((function t(n){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.update(e.id,Object(b.a)(Object(b.a)({},e),{},{likes:e.likes+1}));case 2:a=t.sent,n({type:"LIKE_BLOG",data:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},deleteBlog:function(e){return function(){var t=Object(d.a)(p.a.mark((function t(n){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.remove(e);case 2:a=t.sent,n({type:"DELETE_BLOG",data:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setMessage:T},X=Object(G.b)((function(e){return"ALL"===e.filter?{blogs:e.blogs.sort(P)}:{blogs:e.blogs.filter((function(t){return t.title.toLowerCase().includes(e.filter.content.toLowerCase())})).sort(P)}}),Q)((function(e){var t=Object(a.useState)(e.visible),n=Object(I.a)(t,2),l=n[0],c=n[1],o={display:l?"none":""};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:o},r.a.createElement("br",null),r.a.createElement(H,null),r.a.createElement("h2",null,"Blogs"),r.a.createElement("div",null,null!==e.user?e.blogForm():null),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("table",{className:"table-striped table-hover"},r.a.createElement("tbody",null,e.blogs.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,r.a.createElement(s.b,{to:"/blogs/".concat(t.id),onClick:function(){c(!l),e.history.push("/blogs")}},t.title)))})))))),r.a.createElement(D.c,null,r.a.createElement(D.a,{path:"/blogs/:id"},r.a.createElement(q,{props:Object(b.a)(Object(b.a)({},e),{},{listVisible:l,setListVisible:c,history:e.history,setMessage:e.setMessage})}))))})),Y=function(e){var t=e.props,n=Object(D.g)().id,a={display:t.visible?"":"none"},l=t.users.find((function(e){return e.id===n}));if(!l)return null;var c=t.blogs.map((function(e){return e.user.name===l.name?e:null})).filter((function(e){return!!e}));return console.log("One User",c),r.a.createElement("div",{className:"col-auto",style:a},r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("h2",null,l.name),c.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("b",null,"added blogs"),r.a.createElement("div",{className:"col-auto"},r.a.createElement("ul",null,c.map((function(e){return r.a.createElement("li",{key:e.id},e.title)}))))):r.a.createElement("b",null,"no added blogs")),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){t.history.goBack(),t.setVisible(!t.visible)},props:Object(b.a)({},t)},"back"))},Z={deleteUser:function(e){return function(){var t=Object(d.a)(p.a.mark((function t(n){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.remove(e);case 2:a=t.sent,n({type:"DELETE_USER",data:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setMessage:T},$=Object(G.b)((function(e){return{users:e.users,blogs:e.blogs}}),Z)((function(e){console.log("Users",e);var t={display:e.visible?"none":""};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:t},r.a.createElement("br",null),r.a.createElement("h2",null,"Users"),r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("table",{className:"table-hover"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"blogs created")),e.users.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,r.a.createElement(s.b,{to:"/users/".concat(t.id),onClick:function(){e.setVisible(!0),e.history.push("/users")}},t.name)),r.a.createElement("td",{style:{textAlign:"right"}},Object.keys(t.blogs).length))}))))))),r.a.createElement(D.c,null,r.a.createElement(D.a,{path:"/users/:id"},r.a.createElement(Y,{props:Object(b.a)(Object(b.a)({},e),{},{visible:e.visible,setVisible:e.setVisible,history:e.history,setMessage:e.setMessage})}))))})),ee=function(){var e=Object(G.d)((function(e){var t=e.message;return null!==t?t:{which:"",text:""}}));return null===e?null:r.a.createElement("div",{style:"msg"===e.which?{color:"green",background:"lightgray",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginTop:10,marginBottom:10}:"err"===e.which?{color:"rgb(255, 0, 0)",background:"lightgray",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginTop:10,marginBottom:10}:null},e.text)},te=function(){return r.a.createElement("div",{style:{color:"gray",fontStyle:"italic",fontSize:16}},r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("center",null,r.a.createElement("em",null,"Bloglist app, Full Stack Web Development"),r.a.createElement("br",null),r.a.createElement("em",null,"University of Helsinki 2020")))},ne=r.a.forwardRef((function(e,t){var l=n(77).animateScroll,c=Object(a.useState)(!1),s=Object(I.a)(c,2),o=s[0],u=s[1],i={display:o?"none":""},m={display:o?"":"none"},b=function(){u(!o),o&&l.scrollToTop()};return Object(a.useImperativeHandle)(t,(function(){return{toggleVisibility:b}})),r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("div",{style:i},r.a.createElement("button",{className:"btn btn-primary",type:"submit",onClick:b},e.buttonLabel)),r.a.createElement("div",{style:m,className:"togglableContent"},e.children,r.a.createElement("button",{className:"btn btn-primary",type:"submit",style:{float:"right"},onClick:b},"cancel")))}));ne.displayName="Togglable";var ae=ne,re=Object(G.b)((function(e){return{user:e.loggedUser}}))((function(){var e=Object(G.c)();Object(a.useEffect)((function(){e(y()),e(N())}),[e]);var t=Object(a.useState)(!1),n=Object(I.a)(t,2),l=n[0],c=n[1],o=Object(D.f)(),u=Object(a.useRef)();Object(a.useEffect)((function(){var t=window.localStorage.getItem("loggedBloglistappUser");if(t){var n=JSON.parse(t);e(R(n)),h.setToken(n.token)}}),[e]);var i=function(){var t=Object(d.a)(p.a.mark((function t(n){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==n.username&&""!==n.password){t.next=4;break}e(T("both fields are required","err",5)),t.next=16;break;case 4:return t.prev=4,t.next=7,F.login(n);case 7:a=t.sent,window.localStorage.setItem("loggedBloglistappUser",JSON.stringify(a)),h.setToken(a.token),e(R(a)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(4),e(T("wrong username or password","err",5));case 16:case"end":return t.stop()}}),t,null,[[4,13]])})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(d.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault();try{e(R(null)),window.localStorage.clear()}catch(a){e(T("".concat(a),"err",5))}window.location.reload();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=Object(G.d)((function(e){return null!==e.loggedUser?e.loggedUser:null}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{id:"nav",className:"navbar navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"/"},r.a.createElement("strong",null,"Bloglist")),null!==b?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(s.b,{to:"/blogs"},"blogs")),r.a.createElement("div",null,r.a.createElement(s.b,{to:"/users"},"users")),r.a.createElement("div",null,b.name," logged in",r.a.createElement("button",{className:"btn btn-primary ml-2",id:"logout-button",type:"submit",onClick:m},"Logout"))):r.a.createElement(ae,{buttonLabel:"sign in",ref:u},r.a.createElement(z,{loginUser:i}))),r.a.createElement("div",{className:"container"},r.a.createElement(ee,null),r.a.createElement(D.c,null,r.a.createElement(D.a,{path:"/create"},r.a.createElement(J,{user:b,visible:!0,history:o,setVisible:c})),r.a.createElement(D.a,{path:"/blogs"},null!==b?r.a.createElement(X,{user:b,visible:l,history:o,blogForm:function(){return r.a.createElement(s.b,{to:"/create",onClick:function(){c(!0),o.push("/blogs")}},"CREATE NEW")},setVisible:c,setMessage:T}):null),r.a.createElement(D.a,{path:"/users"},null!==b?r.a.createElement($,{user:b,visible:l,history:o,setVisible:c,setMessage:T}):null)),r.a.createElement(te,null)))}));n(85);c.a.render(r.a.createElement(G.a,{store:M},r.a.createElement(s.a,null,r.a.createElement(re,null))),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.6c5974d1.chunk.js.map